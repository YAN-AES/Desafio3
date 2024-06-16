//* Local imports
import { Routes } from "./routes";
import { StoreProvider } from "./store/provider";

function App() {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  );
}

export default App;
