# 초보를 위한 ReactJS

## `1. Fundamentals`

## #1.0 Introduction

### 반드시 알아둬야 할 컨셉

1. Arrow function
2. Template Literals
3. Object Destructuring
4. Spread Operator
5. Classes
6. Array.map
7. Array.filter
8. forEach / includes / push

## #1.1 Arrow Function

- 화살표 함수는 기보적으로 return 을 한다는 것이 함축되어 있음
- argument 가 하나일 때는 괄호가 필요 없음

## #1.2 Template Literals

- `(backticks) 를 사용 함

## #1.3 Object Destructuring

## #1.4 Spread Operator

## #1.5 Classes

## #1.6 Array.map

- return 한 값으로 이루어진 배열을 return 함

## #1.7 Array.filter

- 주어진 function을 통과한 모든 원소들로 이루어진 배열을 return 함

## #1.8 .forEach / .includes / .push

- .forEach : 각각의 아이템에 대해서 어떠한 시행만 함. map과 달리 배열을 return 하지 않음
- .includes : 배열에 특정 아이템이 존재하는지 확인할 수 있음

## `2. Project Setup`

## #2.0 Setting Up the Project

1. `yarn global add npx`<br>
2. `npx create-react-app nomflix`

- npx는 패키지를 설치하고 실행 후 작업이 끝나면 PC에서 삭제함
```js
//App.js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return <div className="App" />;
  }
}

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
