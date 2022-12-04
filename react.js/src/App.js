import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import "./App.css";
import { Posts } from "./react-query/Posts";

const queryClient = new QueryClient();

function App() {
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

export default App;
