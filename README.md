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

- 화살표 함수는 기보적으로 return 을 한다는 것이 함축되어 있다
- argument 가 하나일 때는 괄호가 필요 없다

## #1.2 Template Literals

- `(backticks) 를 사용한다

## #1.3 Object Destructuring

## #1.4 Spread Operator

## #1.5 Classes

## #1.6 Array.map

- return 한 값으로 이루어진 배열을 return 한다

## #1.7 Array.filter

- 주어진 function을 통과한 모든 원소들로 이루어진 배열을 return 한다

## #1.8 .forEach / .includes / .push

- .forEach : 각각의 아이템에 대해서 어떠한 시행만 함. map과 달리 배열을 return 하지 않는다
- .includes : 배열에 특정 아이템이 존재하는지 확인할 수 있다

## `2. Project Setup`

## #2.0 Setting Up the Project

1. `yarn global add npx`<br>
2. `npx create-react-app nomflix`

- npx는 패키지를 설치하고 실행 후 작업이 끝나면 PC에서 삭제한다
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
- .env에서 위와 같이 설정하면 기본적으로 src 파일을 보게 만들어 준다

`yarn add react-router-dom`
- React App에게 Home에서 시작해야 한다거나 /TV로 가면 TV Routes로 가도록 하는 것은 React Router로 해결할 수 있다
- React Router는 React에서 거의 유일한 Routing 패키지다

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

- Hash Router는 간단하지만 URL을 이쁘게 보여주지 않는다
- Browser Router는 실제 브라우저처럼 보여준다
- 둘은 각기 다른 것을 사용하지만 기능은 같다

- React Router에는 Composition이라는 것이 있고 이것은 두 개 이상의 Route를 렌더링하는 방식이다(동시에)

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
- Header.js 를 생성한다

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
- route에 존재하지 않는 url로 접속하면 "/" 로 redirect 된다
- Switch는 한 번에 오직 하나의 Route만 Render하게 해준다

## `3. Styles`

## #3.0 CSS in React part One

- React 에서 CSS 작업을 할 때 가능한 옵션의 기본은 styles.css 파일을 추가하는 것이다
- 하지만 이 방법의 문제점은 컴포넌트와 CSS가 분리되어 있다는 것이다
- 컴포넌트를 이용하는 것의 요점은 어플리케이션의 부분 부분을 캡슐화하는 것이다
- 모든 게 한 공간에 있는 것이 최종 목표다

- 먼저 Components 폴더 안에 Header 폴더를 생성하고 Header 폴더 안에 Header.js를 이동시키고 index.js를 생성한다

```js
// index.js
import Header from "./Header";

export default Header;
```
- index.js 를 만드는 이유는 내 어플리케이션에서 아래와 같이 Header를 호출하고 싶기 때문이다
`import Header from "Components/Header";`
- 이런 형태는 기본적으로 해당 폴더로 가서 index 파일을 보개 해준다
- 만약 index.js가 없다면 아래와 같이 호출해야 한다
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

## `4. Networking`

## #4.0 Introduction to The Movie DB API

- 영화 데이터는 The Movie DB API를 통해 가져온다.
`API key: 130d29120bf323201527d7659ad76018`

## #4.1 Sexy Networking with Axios Instances

- networking 작업을 위해 axios를 설치한다

`yarn add axios`

- axios의 좋은 점은, 우리가 Axios의 인스턴스를 configure(설정) 해줄 수 있다는 것이다.
- baseURL, headers, timeout 같은 것들을 여러 곳에서 반복해서 작성해 줄 필요가 없다는 것이다.

```js
// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "130d29120bf323201527d7659ad76018",
    language: "en-US"
  }
});

export default api;
```

- app.js 파일을 생성하고 axios를 이용한 기본 설정을 한다.

## #4.2 API Verbs part One

- app.js에 2개의 큰 오브젝트를 생성한다. 여기에 모든 request와 function들을 넣는다.

```js
// api.js
export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular")
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingTodday: () => api.get("tv/airing_today")
};
```

- axios를 이용하면 이렇게 명확하고 깔끔한 코드를 작성할 수 있다.

## #4.3 API Verbs part Two

- app.js에서 movieDetail과 showDetail을 추가한다.

```js
// api.js
export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id => api.get(`movie/${id}`)
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingTodday: () => api.get("tv/airing_today"),
  showDetail: id => api.get(`tv/${id}`)
};
```

- api에서는 "append_to_response"를 지원하는데, 이를 통해서 예고편이나 포스터를 가져올 수 있다.

```js
// api.js
export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id => api.get(`movie/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term => api.get("search/movie", {
    params: {
      query: encodeURIComponent(term) // 어떤 파라미터 값을 넘기든지 값을 인코딩하고 그 문자열로 검색한다
    }
  })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingTodday: () => api.get("tv/airing_today"),
  showDetail: id => api.get(`tv/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term => api.get("search/tv", {
    params: {
      query: encodeURIComponent(term)
    }
  })
};
```

## `5. Containers`

## #5.0 Container Presenter Pattern part One

- 이번에는 API verbs, functions들을 화면 않에 넣을 것이다.
- 만약 어플리케이션 크기가 작다면, 컴포넌트들을 만들고 마운트되었을 때, api에서 데이터를 불러오고, 그 요소를 렌더링하는 방식으로 작업할 것이다.
- 하지만 어플리케이션 크기가 작지 않다면 그렇게 하는 것은 좋지 않다.
- 우리는 리엑트 컴포넌트 코딩 패턴, "컨테이너 프리젠터 패턴" 이라는 방식을 사용할 것이다.
- 이것이 작동하는 방법은 컨테이너는 data를 가지고, state(상태값)를 가지고, api를 불러온다.
- 그 다음에 프리젠터는 그 데이터들을 보여주는 역할을 한다.
- 프리젠터는 state를 가지고 있지 않고 api가 뭔지도 모르고, 클래스도 없고, 그냥 함수형 컴포넌트이다.
- 즉, 프리젠터는 스타일이고, 컨테이너는 데이터이다.

- Routes 폴더 안에 Detail, Home, Search, TV 폴더를 만들고 그 안에 각각의 index.js 파일과 Container, Presenter 파일을 생성한다.

```jsx
// Home/index.js
import HomeContainer from "./HomeContainer";

export default HomeContainer;

// HomePresenter.jsx
export default () => 'Home';

// HomeContainer.jsx
import React from 'react';
import HomePresenter from '.HomePresenter';

export default class extends React.Component {
	state = {
		nowPlaying: null,
		upcoming: null,
		popular: null,
		error: null,
		loading: true
	};

	render() {
		const { nowPlaying, upcoming, popular, error, loading } = this.state;
		return (
			<HomePresenter
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				popular={popular}
				error={error}
				loaidng={loading}
			/>
		);
	}
}
```

- 첫번째 컨테이너 컴포넌트를 생성했다.
- Home 화면에서는 nowPlaying, upcoming, popular를 보여줄 것이므로 state를 위와 같이 결정했다.
- 우리는 당분간 컨테이너만 가지고 작업할 것이고, 컨테이너를 먼저 만들고 api 메소드를 추가한 다음에 데이터를 보여주는 작업을 할 것이다.

## #5.1 Container Presenter Pattern part Two

- TV, Search, Detail에도 동일한 작업(컨테이너, 프리젠터)을 한다.

```jsx
// TVContainer.jsx
import React from 'react';
import TVPresenter from './TVPresenter';

export default class extends React.Component {
	state = {
		topRated: null,
		popular: null,
		airingToday: null,
		error: null,
		loading: true
	};

	render() {
		const { topRated, airingToday, popular, error, loading } = this.state;
		return (
			<TVPresenter
				topRated={topRated}
				airingToday={airingToday}
				popular={popular}
				error={error}
				loaidng={loading}
			/>
		);
	}
}

// TVPresenter.jsx
export default () => 'TV';

// SearchContainer.jsx
import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
	state = {
		movieResults: null, // 누군가 검색 시 movie, tv 모두 보여줄 것이다. 그래서 result를 두 개 만든다.
		tvResults: null,
		seachTerm: '',
		error: null,
		loading: false  // 디폴트로 아무 것도 로딩하지 않을 것이므로 false이다.
  };
  // 기본적으로 Search에서 loading은 false가 되고, error도 없고, searchTerm은 empty고, 검색하고 엔터를 누르면 loading이 true가 되고, 그 결과값을 results에 넣을 것이다.

	render() {
		const { movieResults, tvResults, seachTerm, error, loading } = this.state;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				seachTerm={seachTerm}
				error={error}
				loaidng={loading}
			/>
		);
	}
}

// SearchPresenter.jsx
export default () => 'Search';

// DetailContainer.jsx
import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
	state = {
		result: null, // 여기는 result를 하나만 가진다.
		error: null,
		loading: true
	};

	render() {
		const { result, error, loading } = this.state;
		return <DetailPresenter result={result} error={error} loaidng={loading} />;
	}
}

// DetailPresenter.jsx
export default () => 'Detail';
```

- DetailContainer.jsx 내용을 간단히 설명하자면, 우리가 movie, show를 찾을 때 ID를 갖고 가므로 그 작업들이 끝나면 ID를 가져와서 그걸로 검색하고 결과값(result)를 보여주는 것이다.
- result가 movie든 show든 똑같다. 같은 result, 같은 라우터 Detail을 사용한다.

## #5.2 Home Container

- 먼저 홈 컨테이너 작업을 한다.
- 두 가지 방법이 있다. 하나는 전체 API 요청을 componentDidMount() 안에서 할 수 있고, 각각의 요청을 분리된 함수로 밖에 만들어서 componentDidMount() 안에서 this 를 사용해서 따로 요청할 수 있다.
- 우리의 경우, 해야하는 범위가 크지 않기 때문에 componentDidMount() 안에서 작업한다.

```jsx
// HomeContainer.jsx
// 코드 추가
import { moviesApi } from "api";

  async componentDidMount() {
		try {
			const nowPlaying = await moviesApi.nowPlaying();
			console.log(nowPlaying);
		} catch {
			this.setState({
				error: "Can't find movies information."
			})
		} finally {
			this.setState({
				loading: false  // try하고 작동하지 않으면 catch 처리를 해주고, 결과가 어떻든 마지막에는 loading 값을 false로 만들어 준다. 에러를 보여주든, 영화를 보여주든.
			});
		}
	}
```

- 위 코드에서 객체 비구조화를 한다. Object Deconstruction(객체 비구조화 할당)

```jsx
// HomeContainer.jsx
	async componentDidMount() {
		try {
      const { data: { results: nowPlaying } } = await moviesApi.nowPlaying(); 
      // data 안에 있는 results를 할당했다. nowPlaying 데이터만 얻어올 것이 아니기 때문에 results 변수명을 그대로 쓰면 안된다. 변수명을 nowPlaying으로 변경한다.
			console.log(nowPlaying);
		} catch {
			this.setState({
				error: "Can't find movies information."
			})
		} finally {
			this.setState({
				loading: false
			});
		}
	}
```

- 위 방식으로 upcoming과 popular 데이터도 작업한다.

```jsx
// HomeContainer.jsx
  async componentDidMount() {
		try {
			const { data: { results: nowPlaying } } = await moviesApi.nowPlaying();
			const { data: { results: upcoming } } = await moviesApi.upcoming();
      const { data: { results: popular } } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      })
		} catch {
			this.setState({
				error: "Can't find movie information."
			})
		} finally {
			this.setState({
				loading: false
			});
		}
	}
```

## #5.3 TV Container

- TV Container도 매우 비슷하다.

```jsx
// TVContainer.jsx
// 코드 추가
import { tvApi } from '../../api';

  async componentDidMount() {
		try {
			const { data: { results: topRated } } = await tvApi.topRated();
			const { data: { results: popular } } = await tvApi.popular();
      const { data: { results: airingToday } } = await tvApi.airingToday();
			this.setState({
				topRated,
				popular,
				airingToday
			});
		} catch {
			this.setState({
				error: "Can't find TV information."
			});
		} finally {
			this.setState({
				loading: false
			})
		}
	}
```

## #5.4 Search Container

- Search Container는 모든 logic을 가질 것이다.
- 첫번째 로직은 누군가 폼에서 text를 입력하고, 엔터를 누르는 handleSubmit 이다.

```jsx
// SearchContainer.jsx
// 코드 추가
import { moviesApi, tvApi } from "../../api";

handleSubmit = () => {
		const { searchTerm } = this.state;
		if (searchTerm !== "") {    // 공백이 아닌 것을 체크하고, searchByTerm 함수를 실행한다.
			this.searchByTerm();
		}
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
    this.setState({ loading: true });   // 함수가 실행되면 loading을 true로 변경한다.
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);   // 입력 값으로 영화를 검색한다.
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);       // 입력 값으로 tv를 검색한다.
			this.setState({
				movieResults,
				tvResults
			});
		} catch {
			this.setState({ error: "Can't find results. "});
		} finally {
			this.setState({ loading: false });
		}
  };
  
  <SearchPresenter
    movieResults={movieResults}
    tvResults={tvResults}
    seachTerm={searchTerm}
    error={error}
    loaidng={loading}
    handleSubmit={this.handleSubmit}    // 누군가 폼을 제출할 때, handleSubmit을 호출하기 위해 SearchPresenter에 보낸다.
  />
```

- SearchPresenter에서 폼을 만들고, 폼 셋업하고, handleSubmit을 호출하기 위해 onSubmit을 호출할 것이다.
- handleSubmit은 searchByTerm을 호출하고, searchByTerm이 모든 작업들을 준비해 줄 것이다.

```jsx
// Router.jsx
// 코드 추가
import Detail from "Routes/Detail";

  <Route path="/movie/:id" component={Detail} />
  <Route path="/show/:id" component={Detail} />
```

- 우리는 영화든, tv든 사용자가 찾는 것의 id를 가지고 movieDetail로 데려가 줄 것이다.
- 라우터는 영화를 위한 것과 tv를 위한 것, 2개를 만들 것이다.

## #5.5 Detail Container part One

- Header 컴포넌트는 우리의 라우터 위치를 알고 있다.
- withRouter 컴포넌트를 가지고 꾸며줬고, 라우터 컴포넌트와 라우터 함수들을 가지고 있으므로 이 작업들을 Detail에 해줄 필요는 없다.
- 왜냐하면 기본적으로 리액트 Router가 모든 정보를 Route에게 줄 것이기 때문이다.
- 예를 들면, Header는 Route가 아니기 때문에 Router에서 location 정보를 받을 수 없다.
- 하지만 Home, TV, Search, Detail 과 같은 Route들에게 Router는 props를 준다.

- 해야할 작업이 두 가지 있다. 첫번째, 우리가 /movie에 있는지 /tv에 있는지 알아내야 한다.
- 두번째, 어떤 숫자(id)가 /movie 또는 /tv 뒤에 붙어있는지 알아내야 한다.

```jsx
// DetailContainer.jsx
// 코드 추가
async componentDidMount() {
  const { match: { params: { id } }, history: { push } } = this.props;  // 마운트되면 props에서 id를 가져온다.
  const parsedId = parseInt(id);    // id가 string일 것이므로 parsedInt로 number로 바꿔준다.
  if (isNaN(parsedId)) {            // id가 NaN인 경우,
    return push('/');               // Home으로 리다이렉션 시켜준다. return 을 하지 않으면 함수를 끝내지 않으므로 return을 사용한다.
  }
}
```

## #5.6 Detail Container part Two

- URL을 갖고 와야한다. 이번에도 props에서 path를 가져온다.

```jsx
// DetailContainer.jsx
// 코드 추가
async componentDidMount() {
  const { match: { params: { id } }, history: { push }, location: { pathname } } = this.props;
  this.isMovie = pathname.includes('/movie/');    // isMovis를 전역으로 선언했다. 마치 this.state나 this.handleSubmit을 사용한 것처럼 선언했고
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return push('/');
  }
  console.log(this.isMovie);
}
```

- 렌더링할 것이 없을 때 isMovie를 전역으로 선언한 것과 같은 방식으로 사용할 수 있다.
- 생성자를 사용하려면 아래와 같다.

```jsx
// DetailContainer.jsx
// 변경 코드
constructor(props) {
  super(props);
  const { location: { pathname } } = props;
  this.state = {
    result: null,
    error: null,
    loading: true,
    isMovie: pathname.includes('/movie/')
  };
}

async componentDidMount() {
  const { match: { params: { id } }, history: { push } } = this.props;
  const { isMovie } = this.state;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return push('/');
  }
  console.log(this.isMovie);
}
```

- 생성자를 사용해서 state 안에 넣어서 사용할 수도 있고, 이전처럼 this.isMovie 로 사용할 수도 있다.

```jsx
// DetailContainer.jsx
// 코드 추가
async componentDidMount() {
  const { match: { params: { id } }, history: { push } } = this.props;
  const { isMovie } = this.state;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return push('/');
  }
  let result = null;
  try {
    if (isMovie) {    // 현재 URL path에 /movie/가 있으면 true
      const request = await moviesApi.movieDetail(parsedId);  // parsedId를 movieDetail 함수에 넣어서 결과를 받아온다.
      result = request.data;
    } else {
      const request = await tvApi.showDetail(parsedId);
      result = request.data;
    }
  } catch {
    this.setState({ error: "Can't find anything."});
  } finally {
    this.setState({ loading: false, result });
  }
}
```

## #5.7 Detructuring assignment with let

```jsx
// DetailContainer.jsx
// 코드 수정
let result = null;
try {
  if (isMovie) {
    ({ data: result } = await moviesApi.movieDetail(parsedId));
  } else {
    ({ data: result } = await tvApi.showDetail(parsedId));
  }
}
```

- request(요청)은 data키를 주므로 request.data는 result와 같다.
- 위에서 `{ data: result } = await moviesApi.movieDetail(parsedId)` 부분을 감싸준 괄호는 `const =` 와 같은 의미이다.
- const를 사용하지 않은 이유는 try 안에 result를 const로 선언하면 finally에서 result 변수를 사용할 수 없기 때문이다.

## `6. Presenters`

## #6.0 Presenter Structure

- Presenter가 어떻게 되어야 하는지 도면처럼 설계한다.

```jsx
// TVPresenter.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => null;

TVPresenter.prototype = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default TVPresenter;

// SearchPresenter.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({ movieResults, tvResults, airingToday, loading, searchTerm, handleSubmit, error }) => null;

SearchPresenter.prototype = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	error: PropTypes.string,
	searchTerm: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;

// HomePresenter.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => null;

HomePresenter.prototype = {
	nowPlaying: PropTypes.array,
	popular: PropTypes.array,
	upcoming: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default HomePresenter;

// DetailPresenter.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailPresenter = ({ result, loading, error }) => null;

DetailPresenter.prototype = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default DetailPresenter;

```

- 먼저 4개의 presenter에 사전 작업을 동일하게 진행했다.

## 6.1 HomePresenter and Section Components

- 이제 section이라고 불리우는 것을 만들 것이다.
- upcoming movies 섹션 안에 관련 영화들, popular movies 섹션 안에 영화들과 같은 작업이다.

```jsx
// Components/Section.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.div``;

const Grid = styled.div``;

const Section = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grid>{children}</Grid>
	</Container>
);

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

export default Section;
```

- Components 폴더 아래에 Section.jsx 파일을 생성하고 작성했다.

```jsx
// HomePresenter.jsx
// 코드 수정
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
	loading ? null : (    // loading할 때는 nowPlaying이 존재하지 않으므로 check하여 null 값을 넣어준다.
		<Container>
			{nowPlaying &&    // nowPlaying이 있는지, length가 0보다 긴지, 이 섹션이 우리가 원하는대로 render 되는지 체크한다.
      nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map((movie) => movie.title)}</Section>}
		</Container>
	);
```
- 그리고 upcoming과 popular도 동일한 작업을 해준다.

```jsx
// HomePresenter.jsx
// 코드 수정
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
	loading ? null : (
		<Container>
			{nowPlaying &&
			nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map((movie) => movie.title)}</Section>}
			{upcoming &&
			upcoming.length > 0 && <Section title="Upcoming Movies">{upcoming.map((movie) => movie.title)}</Section>}
			{popular &&
			popular.length > 0 && <Section title="Popular Movies">{popular.map((movie) => movie.title)}</Section>}
		</Container>
	);
```

- 위에서 children을 저 위치에 넣는 이유는 우리의 섹션에서 div 내부에 원하는 children을 넣을 수 있어야 하기 때문이다.

```jsx
// Section.jsx
// 코드 추가
const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const Title = styled.span`
	font-size: 14px;
	font-weight: 600;
	/* margin-bottom: 25px; */
`;

const Grid = styled.div`margin-top: 25px;`;
```

- style 작업을 했다. 이제부터 이 과정을 반복해서 TV쪽도 적용할 것이다.

## #6.2 TVPresenter and Loader Components

- TVPresenter에 동일한 작업을 진행한다.

```jsx
// TVPresenter.jsx
// 코드 추가
import Section from '../../Components/Section';

const Container = styled.div`padding: 0px 10px;`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
	loading ? null : (
		<Container>
			{topRated &&
			topRated.length > 0 && <Section title="Top Rated Shows">{topRated.map((show) => show.name)}</Section>}
			{popular &&
			popular.length > 0 && <Section title="Popular Shows">{popular.map((show) => show.name)}</Section>}
			{airingToday &&
			airingToday.length > 0 && (
				<Section title="AiringToday Shows">{airingToday.map((show) => show.name)}</Section>
			)}
		</Container>
	);
```

- 카테고리 클릭 시 화면이 비워졌다가 로딩이 되는 문제가 있다. 이것을 수정하기 위해 loading도 component를 만든다.

```jsx
// Loader.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	width: 100vh;
	display: flex;
	justify-content: center;
	font-size: 28px;
	margin-top: 20px;
`;

export default () => (
	<Container>
		<span role="img" aria-label="Loading">
			⏰Loading
		</span>
	</Container>
);

// HomePresenter.jsx
// 코드 수정
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
	loading ? (
		<Loader />
	) : (
```

- Loading일 때 Loader 컴포넌트를 보여주도록 수정했다.

```jsx
// Section.jsx
// 코드 추가
const Grid = styled.div`
	margin-top: 25px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
`;
```

- 섹션 Grid에 grid를 적용했다.

## #6.3 SearchPresenter Component

```jsx
// SearchPresenter.jsx
// 코드 추가
const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const SearchPresenter = ({ movieResults, tvResults, airingToday, loading, searchTerm, handleSubmit, error }) => (
	<Container>
		<Form onSubmit={handleSubmit}>
			<Input placeholder="Search Movies or TV Show..." value={searchTerm} />
		</Form>
	</Container>
);
```

- handelSubmit은 searchTearm과 search 결과를 찾는다.
- Input에 value를 갖는 이유는, 우리의 input을 제어할 수 있어야 하기 때문이다.
- 기본적으로 enter를 누르면 form 안에 input 값이 submit되므로 우리는 state를 잃어버리게 된다.
- 우리는 그런 것을 원하지 않기 때문에 이벤트를 가로챌 것이다.

```jsx
// SearchContainer.jsx
// 코드 추가
handleSubmit = event => {
  event.preventDefault(); // 추가
  const { searchTerm } = this.state;
  if (searchTerm !== "") {
    this.searchByTerm();
  }
};
```

- presenter들에 적용된 padding 값을 조정한다.

```jsx
// SearchPresenter.jsx
// 코드 추가
const Container = styled.div`padding: 0px 20px;`;

const Form = styled.form`
	margin-bottom: 50px;
	width: 100%;
`;

const Input = styled.input`
	all: unset;
	font-size: 28px;
	width: 100%;
`;

// HomePresenter.jsx
// 코드 수정
const Container = styled.div`padding: 0px 20px;`;

// TVPresenter.jsx
// 코드 수정
const Container = styled.div`padding: 0px 20px;`;
```

- update 관련 함수를 생성하고, 해당 함수를 SearchContainer와 SearchPresenter에 각각 추가한다.

```jsx
// SearchContainer.jsx
// 코드 추가
updateTerm = event => {   // 추가
		const {
			target: { value }
		} = event;
		this.setState({
			searchTerm: value
		})
	};

render() {
  const { movieResults, tvResults, searchTerm, error, loading } = this.state;
  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      loaidng={loading}
      error={error}
      seachTerm={searchTerm}
      handleSubmit={this.handleSubmit}
      updateTerm={this.updateTerm}  // 추가
    />
  );
}

// SearchPresenter.jsx
// 코드 추가
import Loader from "Components/Loader";
import Section from "Components/Section";

const SearchPresenter = ({
	movieResults,
	tvResults,
	airingToday,
	loading,
	searchTerm,
	handleSubmit,
	error,
	updateTerm
}) => (
	<Container>
		<Form onSubmit={handleSubmit}>
			<Input placeholder="Search Movies or TV Show..." value={searchTerm} onChange={updateTerm} />
		</Form>
		{loading ? <Loader/> : <>
			{movieResults && movieResults.length > 0 && (
				<Section title="Movie Results">
					{movieResults.map(movie => (
						<span key={movie.id}>{movie.title}</span>
				))}
				</Section>
			)}
			{tvResults && tvResults.length > 0 && (
				<Section title="TV Shows Results">
					{tvResults.map(show => (
						<span key={show.id}>{show.name}</span>
				))}
				</Section>
			)}
		</>}
	</Container>
);

SearchPresenter.prototype = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	error: PropTypes.string,
	searchTerm: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	updateTerm: PropTypes.func.isRequired // 추가
};
```

- SearchPresenter에서 Form 밑으로 movie 결과와 TV 결과를 출력하도록 코드를 추가했다.

## #6.4 Message Component

- 이번엔 error text랑 not found text를 만들 것이다.
- Components 폴더에 Message.jsx 파일을 생성한다.

```jsx
// Meassege.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
`;

const Text = styled.span`color: ${(props) => props.color};`;

const Message = ({ text, color }) => (
	<Container>
		<Text color={color}>{text}</Text>
	</Container>
);

Message.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
};

export default Message;

```

- Message 컴포넌트를 HomePresenter, TVPresenter, SearchPresenter에 각각 넣어준다.

```jsx
// HomePresetner.jsx
// 코드 추가
{popular &&
	popular.length > 0 && (
		<Section title="Popular Movies">
			{popular.map((movie) => <span key={movie.id}>{movie.title}</span>)}
		</Section>
	)}
	{error && <Message color="#e74c3c" text={error} />}
</Container>

// TVPresenter.jsx
// 코드 추가
{airingToday &&
	airingToday.length > 0 && (
		<Section title="AiringToday Shows">
			{airingToday.map((show) => <span key={show.id}>{show.name}</span>)}
		</Section>
	)}
	{error && <Message color="#e74c3c" text={error} />}
</Container>

// SearchPresenter.jsx
// 코드 추가
{tvResults && tvResults.length > 0 && (
		<Section title="TV Shows Results">
			{tvResults.map(show => (
				<span key={show.id}>{show.name}</span>
		))}
		</Section>
	)}
</>}
{error && <Message color="#e74c3c" text={error}></Message>}
{tvResults &&
	movieResults &&
	tvResults.length === 0 &&
	movieResults.length === 0 && (
		<Message text="Nothing found" color="#95a5a6" />
	)
}
</Container>
```

## #6.5 Poster Component part One

- Poster Component 작업을 한다.
- Component 폴더에 Poster.jsx 파일을 생성한다.

```jsx
// Poster.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
	<Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
		<Container>
			<ImageContainer>
				<Image bgUrl={imageUrl} />
				<Rating>
					<span role="img" aria-label="rating">
						⭐
					</span>{' '}
					{rating}/10
				</Rating>
			</ImageContainer>
			<Title>{title}</Title>
			<Year>{year}</Year>
		</Container>
	</Link>
);

Poster.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool
};

export default Poster;

```

- Poster는 id, imageUrl, title, rating, year과 같은 것들을 가지고 있다.
- user에게 / 또는 / ID propTypes를 보내야 하므로 id도 필요하다.
- Poster Container를 HomePresenter에 적용시켜본다.

```jsx
// HomePresenter.jsx
// 코드 수정
<Container>
	{nowPlaying &&
	nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map((movie) => <Poster />)}</Section>}
	{upcoming &&
	upcoming.length > 0 && <Section title="Upcoming Movies">{upcoming.map((movie) => <Poster />)}</Section>}
	{popular &&
	popular.length > 0 && <Section title="Popular Movies">{popular.map((movie) => <Poster />)}</Section>}
	{error && <Message color="#e74c3c" text={error} />}
</Container>
```

- `<span key={movie.id}>{movie.title}</span>` 을 `<Poster />` 로 수정했다.

## #6.6 Rendering Poster Component

- 이제 Poster의 각 항목들을 렌더링해보자

```jsx
// HomePresenter.jsx
// 코드 추가
<Section title="Now Playing">
	{nowPlaying.map((movie) => (
		<Poster		// 3개의 섹션 안에 있는 Poster component에 아래와 같이 prop 값을 할당한다.
			key={movie.id}
			id={movie.id}
			title={movie.original_title}
			imageUrl={movie.poster_path}
			rating={movie.vote_average}
			year={movie.release_date.substring(0, 4)}
			isMovie={true}
		/>
	))}
</Section>

<Section title="Upcoming Movies">
	{upcoming.map((movie) => (
		<Poster
			key={movie.id}
			id={movie.id}
			title={movie.original_title}
			imageUrl={movie.poster_path}
			rating={movie.vote_average}
			year={movie.release_date.substring(0, 4)}
			isMovie={true}
		/>
	))}
</Section>
	
<Section title="Popular Movies">
	{popular.map((movie) => (
		<Poster
			key={movie.id}
			id={movie.id}
			title={movie.original_title}
			imageUrl={movie.poster_path}
			rating={movie.vote_average}
			year={movie.release_date.substring(0, 4)}
			isMovie={true}
		/>
	))}
</Section>

// TVPresenter.jsx
// 코드 추가
<Section title="Top Rated Shows">
	{topRated.map((show) => (
		<Poster		// TVPresenter에도 동일하게 Poster component에 아래와 같이 prop 값을 할당한다.
			key={show.id}
			id={show.id}
			title={show.original_name}
			imageUrl={show.poster_path}
			rating={show.vote_average}
			year={show.first_air_date.substring(0, 4)}
		/>
	))}
</Section>

<Section title="Popular Shows">
	{popular.map((show) => (
		<Poster
			key={show.id}
			id={show.id}
			title={show.original_name}
			imageUrl={show.poster_path}
			rating={show.vote_average}
			year={show.first_air_date.substring(0, 4)}
		/>
	))}
</Section>

<Section title="AiringToday Shows">
	{airingToday.map((show) => (
		<Poster
			key={show.id}
			id={show.id}
			title={show.original_name}
			imageUrl={show.poster_path}
			rating={show.vote_average}
			year={show.first_air_date.substring(0, 4)}
		/>
	))}
</Section>

// SearchPresenter.jsx
// 코드 추가
<Section title="Movie Results">
	{movieResults.map(movie => (
		<Poster		// SearchPresenter도 마찬가지
		key={movie.id}
		id={movie.id}
		title={movie.original_title}
		imageUrl={movie.poster_path}
		rating={movie.vote_average}
		year={movie.release_date.substring(0, 4)}
		isMovie={true}
	/>
))}
</Section>

<Section title="TV Shows Results">
	{tvResults.map(show => (
		<Poster
		key={show.id}
		id={show.id}
		title={show.original_name}
		imageUrl={show.poster_path}
		rating={show.vote_average}
		year={show.first_air_date.substring(0, 4)}
	/>
))}
</Section>
```

## #6.7 Poster Component part Two

- poster styling 작업을 한다.

```jsx
// Poster.jsx
// 코드 추가
const Container = styled.div`font-size: 12px;`;

const Image = styled.div`
	background-image: url(${(props) => props.bgUrl});
	height: 180px;
	background-size: cover;
	border-radius: 4px;
	background-position: center center;
	transition: opacity 0.1s linear;
`;

const Rating = styled.span`
	bottom: 5px;
	right: 5px;
	position: absolute;
	opacity: 0;
	transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
	margin-bottom: 5px;
	position: relative;
	&:hover {
		${Image} {
			opacity: 0.3;
		}
		${Rating} {
			opacity: 1;
		}
	}
`;

const Title = styled.span`
	display: block;
	font-size: 12px;
	margin-bottom: 3px;
`;

const Year = styled.span`
	font-size: 10px;
	color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
	<Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
		<Container>
			<ImageContainer>
				<Image
					bgUrl={
						imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require('../assets/noPosterSmall.png')
						// imageUrl이 있으면 image를 보여주고, 없다면 poster가 없다는 image를 대신 보여준다.
					}
				/>
				<Rating>
					<span role="img" aria-label="rating">
						⭐
					</span>{' '}
					{rating}/10
				</Rating>
			</ImageContainer>
			<Title>
				{title.length > 18 ? `${title.substring(0, 18)}...` : title}
				// title 길이가 18 보다 길면 잘라내고 말줄임 표시를 한다.
			</Title>
			<Year>{year}</Year>
		</Container>
	</Link>
);
```

## #6.8 Detail Container part One

- Detail쪽 작업을 한다.

```jsx
// DetailPresenter.jsx
// 코드 추가
const Container = styled.div`
	height: calc(100vh - 50px);
	width: 100%;
	position: relative;
	padding: 50px;
`;

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
	z-index: 0;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	z-index: 1;
	height: 100%;
`;

const Cover = styled.div`
	width: 30%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	height: 100%;
	border-radius: 5px;
`;

const DetailPresenter = ({ result, loading, error }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			<Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
			<Content>
				<Cover
					bgImage={
						result.poster_path ? (
							`https://image.tmdb.org/t/p/original${result.poster_path}`
						) : (
							require('../../assets/noPosterSmall.png')
						)
					}
				/>
			</Content>
		</Container>
	);
```

- DetailPresenter 에서 styling 및 Detail 페이지 구성 작업을 했다.

## #6.9 Detail Container part Two

- content에 data를 넣어보자

```jsx
// DetailPresenter.jsx
// 코드 추가
const Data = styled.div`
	width: 70%;
	margin-left: 10px;
`;

const Title = styled.h3`font-size: 32px;`;

const ItemContainer = styled.div`margin: 20px 0;`;

const Item = styled.span``;

const Divider = styled.span`margin: 0 10px;`;

const Overview = styled.p`
	font-size: 12px;
	opacity: 0.7;
	line-height: 1.5;
	width: 50%;
	margin-top: 10px;
`;

const DetailPresenter = ({ result, loading, error }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			<Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
			<Content>
				<Cover
					bgImage={
						result.poster_path ? (
							`https://image.tmdb.org/t/p/original${result.poster_path}`
						) : (
							require('../../assets/noPosterSmall.png')
						)
					}
				/>
				<Data>
					<Title>{result.original_title ? result.original_title : result.original_name}</Title>
					<ItemContainer>
						<Item>
							{result.release_date ? (
								result.release_date.substring(0, 4)
							) : (
								result.first_air_date.substring(0, 4)
							)}
						</Item>
						<Divider>•</Divider>
						<Item>{result.runtime ? result.runtime : result.episode_run_time[0]} min</Item>
						<Divider>•</Divider>
						<Item>
							{result.genres &&
								result.genres.map(
									(genre, index) =>
										index === result.genres.length - 1 ? genre.name : `${genre.name} / `
								)}
						</Item>
						<Overview>{result.overview}</Overview>
					</ItemContainer>
				</Data>
			</Content>
		</Container>
	);
```

- Detail 페이지에서 보여질 타이틀과 각종 정보를 표시했다.
- movie와 tv의 result 값 중 컬럼명이 다른 것들은 분기처리를 해줘야 한다.