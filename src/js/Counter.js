export default class Count {
  constructor(model) {
    this._model = model;

    const { count } = this._model;

    const $el = $(`
      <div class="row">
        <div class="col-8">
          <p class="title">Counter - update counter model</p>
          <div id="counter" />
        </div>
      </div>
    `);
    const $count = $('<div>').html(count);
    const $btn_increment = $('<button type="button" class="btn btn-primary">+</button>').click(() => this.increment());
    const $btn_decrement = $('<button type="button" class="btn btn-primary">-</button>').click(() => this.decrement());

    this.dom = {
      $el, $count, $btn_increment, $btn_decrement,
    };
  }

  increment() {
    this._model.count = this._model.count + 1;
  }

  decrement() {
    this._model.count = this._model.count - 1;
  }

  // re-render html
  update() {
    this.dom.$count.html(this._model.count);
  }

  // initial html
  render() {
    const { $el, $count, $btn_increment, $btn_decrement } = this.dom;

    const $counter = $el.find('#counter');
    $counter.append($btn_decrement).append($count).append($btn_increment);

    return $el;
  }
}
