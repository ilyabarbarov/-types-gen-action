import './index'

export declare class GenAction{
  constructor(generator: () => IterableIterator<any>)
  public start(): void
  public abort(): void
}