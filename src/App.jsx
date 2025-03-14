import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Body from "./ui/Body";
import Header from "./ui/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import store from "./store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat overflow-auto">
          <div className="flex flex-col p-5 min-h-screen">
            <Header />
            <Body />
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
