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

## #2.1 React Router Part One

```js
//.env
NODE_PATH=src
```
- .env에서 위와 같이 설정하면 기본적으로 src 파일을 보게 만들어 줌

`yarn add react-router-dom`
- React App에게 Home에서 시작해야 한다거나 /TV로 가면 TV Routes로 가도록 하는 것은 React Router로 해결할 수 있음
- React Router는 React에서 거의 유일한 Routing 패키지임

```js
// Router.js
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
    </>
  </Router>
);

// Home.js
export default () => "Home";

// Search.js
export default () => "Search";

// TV.js
export default () => "TV";

// Detail.js
export default () => "Detail";
```

## #2.2 React Router Part Two

- Hash Router는 간단하지만 URL을 이쁘게 보여주지 않음
- Browser Router는 실제 브라우저처럼 보여줌
- 둘은 각기 다른 것을 사용하지만 기능은 같음

- React Router에는 Composition이라는 것이 있고 이것은 두 개 이상의 Route를 렌더링하는 방식임(동시에)

```js
// Header.js
import React from "react";

export default () => (
  <header>
    <ul>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);
```
- Header.js 생성

```js
// Router.js
import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";  // Redirect, Switch 추가
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
)
```
- route에 존재하지 않는 url로 접속하면 "/" 로 redirect 됨
- Switch는 한 번에 오직 하나의 Route만 Render하게 해줌

## `3. Styles`

## #3.0 CSS in React part One

- React 에서 CSS 작업을 할 때 가능한 옵션의 기본은 styles.css 파일을 추가하는 것임
- 하지만 이 방법의 문제점은 컴포넌트와 CSS가 분리되어 있다는 것임
- 컴포넌트를 이용하는 것의 요점은 어플리케이션의 부분 부분을 캡슐화하는 것임
- 모든 게 한 공간에 있는 것이 최종 목표임

- 먼저 Components 폴더 안에 Header 폴더를 생성하고 Header 폴더 안에 Header.js를 이동시키고 index.js를 생성함

```js
// index.js
import Header from "./Header";

export default Header;
```
- index.js 를 만드는 이유는 내 어플리케이션에서 아래와 같이 Header를 호출하고 싶기 때문임
`import Header from "Components/Header";`
- 이런 형태는 기본적으로 해당 폴더로 가서 index 파일을 보개 해줌
- 만약 index.js가 없다면 아래와 같이 호출해야 함
`import Header from "Components/Header/Header";`

```js
// Header.js
import React from "react";
import "./Header.css";

export default () => (
  <header className="nav">
    <ul>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);

// Header.css
.nav ul {
  display: flex;
}
```

- 이렇게 파일들을 폴더에 넣어서 컴포넌트를 만들고 그 폴더에 CSS 파일을 만들어서 import하는 것이 두 번째 방법임
- 하지만 이 방법에도 파일을 생성하고 사용할 때마다 import를 해야하고 className을 기억해야 하고 className이 반복되지 않게 기억해야 한다는 문제가 있음

## #3.1 CSS in React Part Two

- 위와 같은 방법을 해결하기 위해 이번에는 CSS 모듈이라는 것을 이용할 것이다.
- 우리의 className을 임의화해서 CSS가 global이 아닌 local이 되게 하는 것이다.

```js
// Header.js
import React from "react";
import styles from "./Header.module.css";

export default () => (
  <header className={styles.navList}>
    <ul>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);

// Header.module.css
.navList {
  display: flex;
}
```

- .css 앞에 module을 붙여주고 css 파일을 import 방식을 자바스크립트 import 하는 것 처럼 바꿔주었으며, className을 자바스크립트 오브젝트처럼 사용했다.
- 이렇게 하면 navList라는 것을 다른 파일에서도 반복해서 사용할 수 있다.
- 하지만 여전히 className을 기억해야 한다. 위와 같은 방식은 안전하지만 이상적인 형태는 아니다.

## #3.2 CSS in React Part Three

- 마지막으로 javascript를 이용한 CSS인 styled-components 로 적용해 본다.

`yarn add styled-components`

```js
// App.js
import React, { Component } from 'react';
import Router from "Components/Router";

class App extends Component {
  render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default App;

// Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);

// Router.js
import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";

export default () => (
  <Router>
    <Header>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
    </Header>
  </Router>
)
```

- styled-components를 사용하면 코드가 HTML 태그들이 많은 것보다 더 나아보이고 내가 주어진 이름을 사용하며, 모든 컴포넌트들의 스타일을 쉽게 바꿀 수 있다.

## #3.3 GlobalStyles and Header

- 이제 styled-components를 global 하게 스타일한다.
- global 하게 스타일하는 이유는 해당 사이트의 폰트를 설정하거나 SC(styled-components)를 설치하거나 그런 것들을 하기 위해서이다.

`yarn add styled-reset`
- styled-reset은 SC를 이용해서 css를 초기화하고 0의 상태에서 시작하게 하는 것이다.

```jsx
// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20, 20, 20, 1);
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles;

// App.js
import React, { Component } from 'react';
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
```

- GlobalStyles.js는 특정 컴포넌트들의 스타일을 넣지 않고 Global한 웹사이트의 스타일을 넣는다.

```jsx
// Header.jsx
const Header = styled.header`
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	background-color: rgba(20, 20, 20, 0.8);
	z-index: 10;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`display: flex;`;

const Item = styled.li`
	width: 80px;
	height: 50px;
	text-align: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
```

- Header.jsx 쪽 스타일도 추가한다.

## #3.4 Location Aware Header

- 현재 어떤 Route(탭)에 있는지 표시되도록 작업한다.
- SC 에서는 내가 설정한 각 SC에 props를 줄 수 있다.

```jsx
// Header.jsx
import { Link, withRouter } from 'react-router-dom';  // widthRouter 추가
                                                      // widthRouter는 다른 컴포넌트를 감싸는 컴포넌트이고, Router에 어떠한 정보를 준다.

const Item = styled.li`
	width: 80px;
	height: 50px;
	text-align: center;
	border-bottom: 5px solid ${(props) => (props.current ? '#3498db' : 'transparent')};
	transition: border-bottom .3s ease-in-out;
`;

export default withRouter(({ location: { pathname } }) => (
	<Header>
		<List>
			<Item current={pathname === '/'}>
				<SLink to="/"> Movies </SLink>{' '}
			</Item>{' '}
			<Item current={pathname === '/tv'}>
				<SLink to="/tv"> TV </SLink>{' '}
			</Item>{' '}
			<Item current={pathname === '/search'}>
				<SLink to="/search"> Search </SLink>{' '}
			</Item>{' '}
		</List>{' '}
	</Header>
));
```

- props를 통해 pathname을 얻고, pathname 값이 맞는지 boolean 값으로 return하여 border-bottom이 현재 Route에 해당하는 목록 아래에 표시되도록 적용했다. 매우 인상적이다.