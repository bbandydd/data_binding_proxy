
export default model => {
  const _model = Object.keys(model).reduce((acc, val) => {
    const data = model[val];
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

    return {
      ...acc,
      [val]: new Proxy(obj, handler)
    }
  }, {});

  return _model;
}
