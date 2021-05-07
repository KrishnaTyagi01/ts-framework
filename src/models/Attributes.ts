export class Attributes<T> {
  constructor(private data: T) {}

  // HERE K CAN ONLY BE A TYPE OF A KEY OF T (in this case typeof id,name or age)
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll(): T {
    return this.data;
  }
}
