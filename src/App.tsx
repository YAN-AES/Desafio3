import "./index.css";
import { Button } from "./components/ui/button";
import { Navbar } from "./components/Navbar";
import { CTA } from "./components/CTA";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="w-full">
      <Button variant="destructive"></Button>
      <Navbar />
      <CTA />
      <Header></Header>
    </div>
  );
}

export default App;
