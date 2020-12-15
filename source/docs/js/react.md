title: React&JSX 书写规范
---

## React&JSX 书写规范

> 本规范基本基于标准的 JavaScript 语法规范

### 基本规则

- 每个文件只包含一个 React 类组件
  - 但是多个函数式组件可以放到一个文件中，eslint: [react/no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless)
- 一般使用 JSX 语法
- 除非是在非 JSX 文件中初始化应用，否则不要使用 `React.createElement`

### 命名规范

- 组件文件扩展名

如果使用 JavaScript，则文件扩展名为 `.js`；如果使用 `TypeScript`，则文件扩展名为 `.tsx`

- 组件文件名

如果是组件文件，则使用 PascalCase，如 `MyComponent.js`

如果组件是一个目录，则组件主入口命名为 `index`，如 `index.js`

- 引用命名

React 组件使用 PascalCase，组件实例使用 CamelCase，eslint: [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

```jsx
// bad
import reservationCard from './ReservationCard'

// good
import ReservationCard from './ReservationCard'

// bad
const ReservationItem = <ReservationCard />

// good
const reservationItem = <ReservationCard />
```

- 组件命名

使用文件名作为组件名字，例如, `ReservationCard.js` 应该包含名为 `ReservationCard` 的引用，然而对于文件夹中的根组件, 使用 `index.js` 作为文件名，使用文件夹的名字作为组件的名字

```jsx
// bad
import Footer from './Footer/Footer'

// bad
import Footer from './Footer/index'

// good
import Footer from './Footer'
```

- 组件属性名

React DOM 使用小驼峰式命名法来定义属性的名称，而不使用 HTML 属性名称的命名约定，例如

```jsx
<div onClick={this.handler} />
```

### Class Component VS Functional Component

只允许使用 `Class Component` 和 `Functional Component` 两种形态来书写组件，建议尽量使用函数式组件配合 Hooks 来进行开发

### 对齐

遵循以下JSX语法的对齐风格，eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

```jsx
// bad
<Foo superLongParam='bar'
     anotherSuperLongParam='baz' />

// good
<Foo
  superLongParam='bar'
  anotherSuperLongParam='baz'
/>

// if props fit in one line then keep it on the same line
<Foo bar='bar' />

// children get indented normally
<Foo
  superLongParam='bar'
  anotherSuperLongParam='baz'
>
  <Quux />
</Foo>

// bad
{showButton &&
  <Button />
}

// bad
{
  showButton &&
    <Button />
}

// good
{showButton && (
  <Button />
)}

// good
{showButton && <Button />}
```

### 空格

- 自闭合的标签前要加一个空格，eslint: [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces), [react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

```jsx
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```

- 不要在 JSX 的花括号里边加空格，eslint: [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

```jsx
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```

### 引号

JSX 属性要使用单引号，与其他普通 JS 保持一致

```jsx
// bad
<Foo bar="bar" />

// good
<Foo bar='bar' />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

### 属性

- 属性名使用 CamelCase

```jsx
// bad
<Foo
  UserName='hello'
  phone_number={12345678}
/>

// good
<Foo
  userName='hello'
  phoneNumber={12345678}
/>
```

- 当属性值为true时可以省略， eslint: [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

```jsx
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

- 避免使用数组的索引作为 key 属性值, 建议使用稳定的ID，eslint: [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

> 原因：不使用稳定的 ID 会对性能产生副作用并且组件状态会出问题，是一种[反模式](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)

```jsx
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
```

- 为所有的非必需属性定义使用 defaultProps 明确的默认值

```jsx
// bad
function SFC ({ foo, bar, children }) {
  return <div>{foo}{bar}{children}</div>
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node
}

// good
function SFC ({ foo, bar, children }) {
  return <div>{foo}{bar}{children}</div>
}
SFC.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
  children: PropTypes.node
}
SFC.defaultProps = {
  bar: '',
  children: null
}
```

### Refs

避免使用字符串引用，请使用回调函数作为引用，eslint: [react/no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

```jsx
// bad
<Foo
  ref='myRef'
/>

// good
<Foo
  ref={ref => { this.myRef = ref }}
/>
```

### 圆括号

当 JSX 标签超过一行时使用圆括号包裹， eslint: [react/wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

```jsx

// bad
render () {
  return <MyComponent className='long body' foo='bar'>
           <MyChild />
         </MyComponent>
}

// good
render () {
  return (
    <MyComponent className='long body' foo='bar'>
      <MyChild />
    </MyComponent>
  )
}

// good, when single line
render () {
  const body = <div>hello</div>
  return <MyComponent>{body}</MyComponent>
}
```

### 标签

- 没有子元素的标签请自闭合，eslint: [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

```jsx
// bad
<Foo className='stuff'></Foo>

// good
<Foo className='stuff' />
```

- 如果组件包含多行属性，在新的一行闭合标签，eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

```jsx
// bad
<Foo
  bar='bar'
  baz='baz' />

// good
<Foo
  bar='bar'
  baz='baz'
/>
```

### 方法

- 使用箭头函数包裹本地变量

```jsx
function ItemList (props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={() => doSomethingWith(item.name, index)}
        />
      ))}
    </ul>
  )
}
```

- 类组件的内部方法不要使用下划线前缀

```jsx
// bad
class extends React.Component {
  _onClickSubmit () {
    // do stuff
  }

  // other stuff
}

// good
class extends React.Component {
  onClickSubmit () {
    // do stuff
  }

  // other stuff
}
```

- 确保在 render 方法中存在返回值，eslint: [require-render-return](https://github.com/yannickcr/eslint-plugin-react/pull/502)

```jsx
  // bad
  render () {
    (<div />)
  }

  // good
  render () {
    return (<div />)
  }
```

### Hooks 书写规范

- Hooks 只能应用于函数式组件中

- 只在 React 函数最顶层使用 Hooks

> 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们

```jsx
// bad
function a () {
  const [count, setCount] = useState(0)
  useEffect(function persistForm() {
    localStorage.setItem('formData', accountName)
  })
  const x = function () {}
  const [timer, setTimer] = useState(0)

  // main logic
}

// bad
function a () {
  const [count, setCount] = useState(0)
  useEffect(function persistForm() {
    localStorage.setItem('formData', accountName)
  })
  const [timer, setTimer] = useState(0)
  const x = function () {}
  // main logic
}
```