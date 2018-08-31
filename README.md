# data binding with proxy

- 使用Proxy來監聽Model的變動，並且更新畫面

## Store

```
/src/model/index.js

import CommonModel from './CommonModel';

const counterModel = {
  count: 0
};

export default CommonModel({
  counter: counterModel,
});
```

## Component

- 如果需要用到store的話，就在class上方加入@Updator({store names} 
- this._model及為Updator載入的stores
- render 用來產生初始化畫面
- update 每當store變動時更新此component的畫面

```
import Updator from '../model/Updator';

@Updator('counter')
export default class Component {
  constructor(model) {
    this._model = model;

    ...
  }

  // re-render html
  update() {
    ...
  }

  // initial html
  render() {
    ...
  }
}

```

## Updator

- 使用Proxy偵測store是否有變動，有變動的話就觸發Component的update method更新畫面
