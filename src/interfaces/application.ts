interface IApplication {
    name: string
    description: string
    url: string
    group: string
    configuration: { interval: number, retries: number, retryInterval: number }
}

export { IApplication }