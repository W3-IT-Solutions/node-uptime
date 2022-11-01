interface IMonitor {
    name: string
    description: string
    url: string
    group: string
    configuration: { interval: number, retries: number, retryInterval: number }
}

interface IMonitorUpdate extends IMonitor {
    id: string
}

export { IMonitor, IMonitorUpdate }