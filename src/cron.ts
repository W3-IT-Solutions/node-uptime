import cron from 'node-cron'
import { IMonitor } from './monitor/monitor.interface';
import { MonitorModel, MonitorStampModel } from './monitor/monitor.model';
import axios from 'axios';



const pingFunction = async (hosts: IMonitor[]) => {
    let results: boolean[] = []
    for (let host of hosts) {
        let pingStatus: boolean = false
        try {
            const response = await axios({ method: 'get', url: host.url, timeout: 2000 })
            // status = true
            if (response.status == 200) {
                pingStatus = true
            }
        }
        catch (e) {
            console.log(e)
        }
        results.push(pingStatus)
    }
    return results
}

const task = cron.schedule('* * * * *', async () => {
    const monitors = await MonitorModel.find()
    const pingResult = await pingFunction(monitors)
    monitors.forEach(async (monitor, i) => {
        const model = new MonitorStampModel({
            monitorId:monitor._id,
            status:pingResult[i]})
        await model.save()
    })
});

export { task }