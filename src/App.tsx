import "./index.css";
import { Button } from "./components/ui/button";
import { Header } from "./components/Header";
import { CTA } from "./components/CTA";

function App() {
  return (
    <div className="w-full">
      <Button variant="destructive"></Button>
      <Header />
      <CTA />
    </div>
  );
}

export default App;
