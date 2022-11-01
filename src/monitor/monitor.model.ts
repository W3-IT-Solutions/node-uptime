import { model, Schema } from "mongoose";
import { IMonitor } from "./monitor.interface";

const monitorScheme = new Schema<IMonitor>({
  name: String,
  description: String,
  url: String,
  group: String,
  configuration: { interval: Number, retries: Number, retryInterval: Number}
},
  { versionKey: false }
)

const MonitorModel = model('Monitor', monitorScheme);
export { MonitorModel }