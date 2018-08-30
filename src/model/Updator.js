import model from './index';

export default (...models) => wrappedComponent => {
  const _model = models
    .reduce((acc, key) => {
      if (!model[key]) return acc;

      const _m = model[key];
      _m.listen(() => { component.update() })

      return {...acc, [key]: _m};
    }, {});

  const component = new wrappedComponent(_model);

  return component.render();
}
