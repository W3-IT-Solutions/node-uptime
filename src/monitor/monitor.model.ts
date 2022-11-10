import { model, Schema } from "mongoose";
import { IMonitor, IMonitorStamp } from "./monitor.interface";

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

const monitorStampScheme = new Schema<IMonitorStamp>({
  monitorId: {type: Schema.Types.ObjectId, ref: "Monitor"},
  status: Boolean,
},
  { versionKey: false, timestamps: true }
)

const MonitorStampModel = model('MonitorStamp', monitorStampScheme);
export { MonitorModel, MonitorStampModel }