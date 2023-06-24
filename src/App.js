import "./App.css";
import "normalize.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Galery from "./pages/Galery";
import Community from "./pages/Community";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/community" element={<Community />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
