import "./App.scss";
import { Routes, Route, HashRouter} from "react-router-dom";
import Gestion from "./pages/Gestion";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/gestion" element={<Gestion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
