// React-Query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import "./App.css";
import { Posts } from "./react-query/Posts";

// jest
import logo from './logo.svg';

function App() {

  function Query() {
    const queryClient = new QueryClient();

    return (
      // provide React Query client to App
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>Blog &apos;em Ipsum</h1>
          <Posts />
        </div>
        <ReactQueryDevtools /> {/* 개발자도구는 빌드 시 더나은 패키지 관리 위해 하위패키지에서 가져옴 */}
      </QueryClientProvider>
    );
  }

  function Jest() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  return (
    <>
      { Query() }
      { Jest() }
    </>
  )
}

export default App;