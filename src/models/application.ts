import { model, Schema } from "mongoose";
import { IApplication } from "../interfaces/application";

const applicationScheme = new Schema<IApplication>({
  name: String,
  description: String,
  url: String,
  group: String,
  configuration: { interval: Number, retries: Number, retryInterval: Number}
},
  { versionKey: false }
)

const ApplicationModel = model('Application', applicationScheme);
export { ApplicationModel }