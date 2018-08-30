import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/main.scss';

import model from './model';

import $counter from './js/Counter';
import $number from './js/Number';

// hot reload for development
if (ENV !== 'production') {
  require('./index.html');
}

$().ready(() => {
  $('#app')
    .append($counter)
    .append($number);
});
