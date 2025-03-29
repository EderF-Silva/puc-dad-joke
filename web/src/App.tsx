import { Outlet, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Submit } from "./pages/Submit";

export function Layout() {
  return ( <>
          <Header />
          <Outlet />
          </>);
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="submit" element={<Submit />} />
      </Route>
    </Routes>
  );
}

export default App;
