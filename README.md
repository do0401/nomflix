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
// app.js
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
// app.js
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
// app.js
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
// app.js
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
// 추가 코드
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
// 추가 코드
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
// 추가 코드
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
// 추가 코드
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
// 추가 코드
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
// 추가 코드
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
// 추가 코드
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