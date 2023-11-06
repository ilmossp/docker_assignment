import Hero from "./components/Hero";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Toaster></Toaster>
      <Layout>
        {location.pathname === "/" ? <Hero></Hero> : <></>}
        <Outlet></Outlet>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
