import { IMonitor, IMonitorUpdate } from "./monitor.interface";
import { MonitorModel } from "./monitor.model";
import { Request, Response, Router } from "express";

const monitorRouter = Router();

monitorRouter.route("/")
    .post(async (req: Request, res: Response) => {

        if (!req.body) {
            res.status(400).json({ message: "invalid body" });
        }

        const monitor: IMonitor = req.body
        const model = new MonitorModel(monitor)
        await model.save()
        res.json(model);
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
    res.json(monitor);
});


export { monitorRouter };