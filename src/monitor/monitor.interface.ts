interface IMonitor {
    name: string
    description: string
    url: string
    group: string
    configuration: { interval: number, retries: number, retryInterval: number }
}

export { IMonitor }