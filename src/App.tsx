import "./index.css";
import { Button } from "./components/ui/button";
import { Navbar } from "./components/Navbar";
import { CTA } from "./components/CTA";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { ServicesBanner } from "./components/ServicesBanner";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div className="w-full">
      <Button variant="destructive"></Button>
      <Navbar />
      <CTA />
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      <ServicesBanner></ServicesBanner>
      <ProductPage></ProductPage>
    </div>
  );
}

export default App;
