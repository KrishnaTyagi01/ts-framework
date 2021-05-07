type Callback = () => void;

export class Eventing {
  event: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.event[eventName] || [];
    handlers.push(callback);
    this.event[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.event[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => {
      callback();
    });
  };
}
