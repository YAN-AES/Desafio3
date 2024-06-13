import "./index.css";
import { Button } from "./components/ui/button";
import { Navbar } from "./components/Navbar";
import { CTA } from "./components/CTA";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { ServicesBanner } from "./components/ServicesBanner";

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
    </div>
  );
}

export default App;
