import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/main.scss';

import model from './model';

import Counter from './js/Counter';
import Number from './js/Number';

// hot reload for development
if (ENV !== 'production') {
  require('./index.html');
}

$().ready(() => {

  // counter
  const counter = new Counter(model.counter);
  const $counter = counter.render();

  // number
  const number = new Number(model.counter);
  const $number = number.render();

  // model listening
  model.counter.listen(() => {
    counter.update();
    number.update();
  });

  $('#app')
    .append($counter)
    .append($number);

});
