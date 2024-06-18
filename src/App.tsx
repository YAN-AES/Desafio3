//* Libraries imports
import { Toaster } from 'sonner';

//* Local imports
import { Routes } from "./routes";

import { StoreProvider } from "./store/provider";
import { ReactQueryProvider } from "@/components/providers";

function App() {
  return (
    <ReactQueryProvider>
      <StoreProvider>
        <Routes />
        <Toaster richColors />
      </StoreProvider>
    </ReactQueryProvider>
  );
}

export default App;
