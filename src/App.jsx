import Auth from "./components/Auth";
import Header from "./components/Header";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>
    </>
  );
}

export default App;
