title: 语言规范
---

## 语言规范

JavaScript 是一种客户端脚本语言，这里列出了编写 JavaScript 时需要遵守的规则。

### 类型

- 基本类型
  - 字符串
  - 数值
  - 布尔类型
  - null
  - undefined

  ```js
  const foo = 1
  let bar = foo

  bar = 9

  console.log(foo, bar) // 1, 9
  ```

- 复杂类型
  - object
  - array
  - function

  ```js
  const foo = [1, 2, 3]
  const bar = foo

  bar[0] = 9

  console.log(foo[0], bar[0]) // 9, 9
  ```

### 引用

`const` 和 `let` 都是块级作用域，`var` 是函数级作用域

- 对所有引用都使用 `const`，不要使用 `var`

  ```js
  // bad
  var a = 1
  var b = 2

  // good
  const a = 1
  const b = 2
  ```

- 如果引用是可变动的，则使用 `let`

  ```js
  // bad
  var count = 1
  if (count < 10) {
    count += 1
  }

  // good
  let count = 1
  if (count < 10) {
    count += 1
  }
  ```

### 对象

- 请使用字面量值创建对象

  ```js
  // bad
  const a = new Object{}

  // good
  const a = {}
  ```

- 别使用保留字作为对象的键值，这样在 IE8 下不会运行

  ```js
  // bad
  const a = {
    default: {},  // default 是保留字
    common: {}
  }

  // good
  const a = {
    defaults: {},
    common: {}
  }
  ```

- 请使用对象方法的简写方式

  ```js
  // bad
  const item = {
    value: 1,

    addValue: function (val) {
      return item.value + val
    }
  }

  // good
  const item = {
    value: 1,

    addValue(val) {
      return item.value + val
    }
  }
  ```

- 请使用对象属性值的简写方式

  ```js
  const job = 'FrontEnd'

  // bad
  const item = {
    job: job
  }

  // good
  const item = {
    job
  }
  ```

- 对象属性值的简写方式要和声明式的方式分组

  ```js
  const job = 'FrontEnd'
  const department = 'JDC'

  // bad
  const item = {
    sex: 'male',
    job,
    age: 25,
    department
  }

  // good
  const item = {
    job,
    department,
    sex: 'male',
    age: 25
  }
  ```

### 数组

- 请使用字面量值创建数组

  ```js
  // bad
  const items = new Array()

  // good
  const items = []
  ```

- 向数组中添加元素时，请使用 `push` 方法

  ```js
  const items = []

  // bad
  items[items.length] = 'test'

  // good
  items.push('test')
  ```

- 使用拓展运算符 `...` 复制数组

  ```js
  // bad
  const items = []
  const itemsCopy = []
  const len = items.length
  let i

  // bad
  for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i]
  }

  // good
  itemsCopy = [...items]
  ```

- 使用数组的 `map` 等方法时，请使用 `return` 声明，如果是单一声明语句的情况，可省略 `return`

  ```js
  // good
  [1, 2, 3].map(x => {
    const y = x + 1
    return x * y
  })

  // good
  [1, 2, 3].map(x => x + 1)

  // bad
  const flat = {}
  [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item)
    flat[index] = flatten
  })

  // good
  const flat = {}
  [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item)
    flat[index] = flatten
    return flatten
  })

  // bad
  inbox.filter((msg) => {
    const { subject, author } = msg
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee'
    } else {
      return false
    }
  })

  // good
  inbox.filter((msg) => {
    const { subject, author } = msg
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee'
    }

    return false
  })
  ```

### 解构赋值

- 当需要使用对象的多个属性时，请使用解构赋值

  ```js
  // bad
  function getFullName (user) {
    const firstName = user.firstName
    const lastName = user.lastName

    return `${firstName} ${lastName}`
  }

  // good
  function getFullName (user) {
    const { firstName, lastName } = user

    return `${firstName} ${lastName}`
  }

  // better
  function getFullName ({ firstName, lastName }) {
    return `${firstName} ${lastName}`
  }
  ```

- 当需要使用数组的多个值时，请同样使用解构赋值

  ```js
  const arr = [1, 2, 3, 4]

  // bad
  const first = arr[0]
  const second = arr[1]

  // good
  const [first, second] = arr
  ```

- 函数需要回传多个值时，请使用对象的解构，而不是数组的解构

  ```js
  // bad
  function doSomething () {
    return [top, right, bottom, left]
  }

  // 如果是数组解构，那么在调用时就需要考虑数据的顺序
  const [top, xx, xxx, left] = doSomething()

  // good
  function doSomething () {
    return { top, right, bottom, left }
  }

  // 此时不需要考虑数据的顺序
  const { top, left } = doSomething()
  ```

### 字符串

- 字符串统一使用单引号的形式 `''`

  ```js
  // bad
  const department = "JDC"

  // good
  const department = 'JDC'
  ```

- 字符串太长的时候，请不要使用字符串连接符换行 `\`，而是使用 `+`

  ```js
  const str = '凹凸实验室 凹凸实验室 凹凸实验室' +
    '凹凸实验室 凹凸实验室 凹凸实验室' +
    '凹凸实验室 凹凸实验室'
  ```

- 程序化生成字符串时，请使用模板字符串

  ```js
  const test = 'test'

  // bad
  const str = ['a', 'b', test].join()

  // bad
  const str = 'a' + 'b' + test

  // good
  const str = `ab${test}`
  ```

### 函数

- 请使用函数声明，而不是函数表达式

  ```js
  // bad
  const foo = function () {
    // do something
  }

  // good
  function foo () {
    // do something
  }
  ```

- 不要在非函数代码块中声明函数

  ```js
  // bad
  if (isUse) {
    function test () {
      // do something
    }
  }

  // good
  let test
  if (isUse) {
    test = () => {
      // do something
    }
  }
  ```

- 不要使用 `arguments`，可以选择使用 `...`

  > `arguments` 只是一个类数组，而 `...` 是一个真正的数组

  ```js
  // bad
  function test () {
    const args = Array.prototype.slice.call(arguments)
    return args.join('')
  }

  // good
  function test (...args) {
    return args.join('')
  }
  ```

- 不要更改函数参数的值

  ```js
  // bad
  function test (opts) {
    opts = opts || {}
  }

  // good
  function test (opts = {}) {
    // ...
  }
  ```

### 原型

- 使用 `class`，避免直接操作 `prototype`

  ```js
  // bad
  function Queue (contents = []) {
    this._queue = [..contents]
  }
  Queue.prototype.pop = function () {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
  }

  // good
  class Queue {
    constructor (contents = []) {
      this._queue = [...contents]
    }

    pop () {
      const value = this._queue[0]
      this._queue.splice(0, 1)
      return value
    }
  }
  ```

### 模块

- 使用标准的 ES6 模块语法 `import` 和 `export`

  ```js
  // bad
  const util = require('./util')
  module.exports = util

  // good
  import Util from './util'
  export default Util

  // better
  import { Util } from './util'
  export default Util
  ```

- 不要使用 `import` 的通配符 `*`，这样可以确保你只有一个默认的 export

  ```js
  // bad
  import * as Util from './util'

  // good
  import Util from './util'
  ```

### 迭代器

- 不要使用 `iterators`

  ```js
  const numbers = [1, 2, 3, 4, 5]

  // bad
  let sum = 0
  for (let num of numbers) {
    sum += num
  }

  // good
  let sum = 0
  numbers.forEach(num => sum += num)

  // better
  const sum = numbers.reduce((total, num) => total + num, 0)
  ```

### 对象属性

- 使用 `.` 来访问对象属性

  ```js
  const joke = {
    name: 'haha',
    age: 28
  }

  // bad
  const name = joke['name']

  // good
  const name = joke.name
  ```

### 变量声明

- 声明变量时，请使用 `const`、`let` 关键字，如果没有写关键字，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突，另外，也很难明确该变量的作用域是什么。这里推荐使用 `const` 来声明变量，我们需要避免全局命名空间的污染。

  ```js
  // bad
  demo = new Demo()

  // good
  const demo = new Demo()
  ```

- 将所有的 `const` 和 `let` 分组

  ```js
  // bad
  let a
  const b
  let c
  const d
  let e

  // good
  const b
  const d
  let a
  let c
  let e
  ```

### Hoisting

- `var` 存在变量提升的情况，即 `var` 声明会被提升至该作用域的顶部，但是他们的赋值并不会。而 `const` 和 `let` 并不存在这种情况，他们被赋予了 [Temporal Dead Zones, TDZ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)

  ```js
  function example () {
    console.log(notDefined)   // => throws a ReferenceError
  }

  function example () {
    console.log(declareButNotAssigned)  // => undefined
    var declaredButNotAssigned = true
  }

  function example () {
    let declaredButNotAssigned
    console.log(declaredButNotAssigned)   // => undefined
    declaredButNotAssigned = true
  }

  function example () {
    console.log(declaredButNotAssigned)   // => throws a ReferenceError
    console.log(typeof declaredButNotAssigned)  // => throws a ReferenceError
    const declaredButNotAssigned = true
  }
  ```

- 匿名函数的变量名会提升，但函数内容不会

  ```js
  function example () {
    console.log(anonymous)  // => undefined

    anonymous()

    var anonymous = function () {
      console.log('test')
    }
  }
  ```

- 命名的函数表达式的变量名会被提升，但函数名和函数函数内容并不会

  ```js
  function example() {
    console.log(named)  // => undefined

    named()   // => TypeError named is not a function

    superPower()  // => ReferenceError superPower is not defined

    var named = function superPower () {
      console.log('Flying')
    }
  }

  function example() {
    console.log(named)  // => undefined

    named()   // => TypeError named is not a function

    var named = function named () {
      console.log('named')
    }
  }
  ```

### 分号

- 我们遵循 `Standard` 的规范，不使用分号。

  > 关于应不应该使用分号的讨论有很多，本规范认为非必要的时候，应该不使用分号，好的 `JS` 程序员应该清楚场景下是一定要加分号的，相信你也是名好的开发者。

  ```js
  // bad
  const test = 'good';
  (function () {
    const str = 'hahaha';
  })()

  // good
  const test = 'good'
  ;(() => {
    const str = 'hahaha'
  })();
  ```

### 标准特性

为了代码的可移植性和兼容性，我们应该最大化的使用标准方法，例如优先使用 `string.charAt(3)` 而不是 `string[3]`

### eval()

由于 `eval` 方法比较 `evil`，所以我们约定禁止使用该方法

### with() {}

由于 `with` 方法会产生神奇的作用域，所以我们也是禁止使用该方法的

### for-in 循环

推荐使用 `for in` 语法，但是在对对象进行操作时，容易忘了检测 `hasOwnProperty(key)`，所以我们启用了 `ESLint` 的 `guard-for-in` 选项

> 对数组进行 `for in` 的时候，顺序是不固定的

### 修改内置对象的原型

不要修改内置对象，如 `Object` 和 `Array`

