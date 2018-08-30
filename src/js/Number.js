import Updator from '../model/Updator';

@Updator('counter')
export default class Number {
  constructor(model) {
    this._model = model;

    const $el = $(`
      <div class="row">
        <div class="col-8">
          <p class="title">Number - using counter model</p>
          <div id="number" />
        </div>
      </div>
    `);

    const $count = $('<div>').html(this._model.counter.count);

    this.dom = {
      $el, $count,
    };

  }

  // re-render html
  update() {
    this.dom.$count.html(this._model.counter.count);
  }

  // initial html
  render() {
    const { $el, $count } = this.dom;

    const $number = $el.find('#number');
    $number.append($count);

    return $el;
  }
}
