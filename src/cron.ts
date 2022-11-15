import cron from 'node-cron'
import { IMonitor } from './monitor/monitor.interface';
import { MonitorModel, MonitorStampModel } from './monitor/monitor.model';
import axios from 'axios';

interface IPingResult {
    status:boolean; 
    message:string;
} 

const pingFunction = async (hosts: IMonitor[]) => {
    let results: IPingResult[] = []
    for (let host of hosts) {
        let pingResult: IPingResult = {status: false, message:''};
        await axios({ method: 'get', url: host.url, timeout: 2000 })
        .then((response) => {
            pingResult = {status: response.status == 200, message:response.statusText}
        }).catch((error) => {
            if(error.response){
                pingResult = {status: false, message: error.response?.statusText || ''}
            } else {
                pingResult = {status: false, message:error.message}
            }
        })
        results.push(pingResult);
    }
    return results
}

const task = cron.schedule('* * * * *', async () => {
    const monitors = await MonitorModel.find()
    const pingResult = await pingFunction(monitors)
    monitors.forEach(async (monitor, i) => {
        const model = new MonitorStampModel({
            monitorId:monitor._id,
            url: monitor.url,
            status:pingResult[i].status,
            message: pingResult[i].message
        })
        await model.save()
    })
});

export { task }