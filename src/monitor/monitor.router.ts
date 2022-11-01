import { IMonitor } from "./monitor.interface";
import { MonitorModel } from "./monitor.model";
import { Request, Response, Router } from "express";

const monitorRouter = Router();

monitorRouter.post("/", async (req: Request, res: Response) => {

    if (!req.body) {
        res.status(400).json({ message: "invalid body" });
    }

    const monitor: IMonitor = req.body
    const model = new MonitorModel(monitor)
    await model.save()
    res.json(model);
});

monitorRouter.get("/:group?", async (req: Request, res: Response) => {
    const group = req.params.group ? {group: req.params.group} : {};
    const monitors = await MonitorModel.find(group)
    res.json({ monitors: monitors });
});

monitorRouter.get("/detail/:id", async (req: Request, res: Response) => {
    const monitor = await MonitorModel.findById(req.params.id)
    res.json(monitor);
});


export { monitorRouter };