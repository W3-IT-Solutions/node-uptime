import { IMonitor, IMonitorUpdate } from "./monitor.interface";
import { MonitorModel, MonitorStampModel } from "./monitor.model";
import { Request, Response, Router } from "express";
import moment from "moment";

const monitorRouter = Router();

monitorRouter.route("/")
    .post(async (req: Request, res: Response) => {

        if (!req.body) {
            res.status(400).json({ message: "invalid body" });
        }
        else {
            const monitor: IMonitor = req.body
            const model = new MonitorModel(monitor)
            await model.save()
            res.json(model);
        }
    })
    .put(async (req: Request, res: Response) => {
        const monitor: IMonitorUpdate = req.body
        const model = await MonitorModel.findByIdAndUpdate(monitor.id,
            {
                name: monitor.name,
                url: monitor.url,
                description: monitor.description
            }, { new: true });

        res.json(model);
    });

monitorRouter.delete("/:id", async (req: Request, res: Response) => {
    const monitor = await MonitorModel.findByIdAndRemove(req.params.id)
    res.json(monitor);
});

monitorRouter.get("/:group?", async (req: Request, res: Response) => {
    const group = req.params.group ? { group: req.params.group } : {};
    const monitors = await MonitorModel.find(group)
    res.json({ monitors: monitors });
});

monitorRouter.get("/detail/:id", async (req: Request, res: Response) => {
    const monitor = await MonitorModel.findById(req.params.id)
    if (monitor) {
        const lastdayDate = moment().subtract(1, 'days')
        const lastMonthDate = moment().subtract(1, 'months')
        const lastDayCount = await MonitorStampModel.count({monitorId:monitor._id, createdAt: {"$gte": lastdayDate}})
        const lastDayCountActive = await MonitorStampModel.count({monitorId:monitor._id, status:true,  createdAt: {"$gte": lastdayDate}})
        const lastMonthCount = await MonitorStampModel.count({monitorId:monitor._id, createdAt: {"$gte": lastMonthDate}})
        const lastMonthCountActive = await MonitorStampModel.count({monitorId:monitor._id, status:true,  createdAt: {"$gte": lastMonthDate}})

        let uptimeDay = 0
        if(lastDayCount > 0) {
            uptimeDay = Math.round(lastDayCountActive/lastDayCount * 10000)/100
        }

        let uptimeMonth = 0
        if(lastMonthCount > 0) {
            uptimeMonth = Math.round(lastMonthCountActive/lastMonthCount * 10000)/100
        }
        res.json({...monitor.toObject(), uptimeDay, uptimeMonth})
    }
    else res.status(404).json({error: "Monitor not found"})
})

export { monitorRouter }