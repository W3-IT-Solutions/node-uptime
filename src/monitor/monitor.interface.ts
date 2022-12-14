import mongoose from "mongoose"

interface IMonitor {
    name: string
    description: string
    url: string
    group: string
    configuration: { interval: number, retries: number, retryInterval: number }
}

interface IMonitorUpdate extends IMonitor {
    _id: string
}

interface IMonitorStamp {
    monitorId: mongoose.ObjectId
    url: String,
    status: string
    message: string
    datetime: string
}

export { IMonitor, IMonitorUpdate, IMonitorStamp }