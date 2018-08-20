export default class CommonModel {
  constructor(data) {
    const callbacks = [];

    const obj = {
      ...data,
      listen: function (fn) {
        callbacks.push(fn);
      },
    };

    const handler = {
      set: (target, key, value) => {
        target[key] = value;
        callbacks.forEach((callback) => callback());
        return true;
      }
    };

    return new Proxy(obj, handler);
  }
}
