export interface MonitorItemChannels {
  platform: string,
  channelId: string,
  assignee: string
}

export interface MonitorItem {
  uid: string,
  live: boolean | undefined
  channels: MonitorItemChannels[]
}

export interface MonitorAddArgs extends MonitorItemChannels {
  id: number | string
  uid: string
  live?: boolean
}

export interface MonitorDeleteArgs extends MonitorItemChannels {
  id: number | string
}

declare class Monitor {
  constructor()
  list: Record<string, MonitorItem>
  add(args: MonitorAddArgs): this
  delete(args: MonitorDeleteArgs): this
}

export = Monitor