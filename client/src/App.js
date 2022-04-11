import { useContext } from 'react';
import './App.css';
import AppRouter from './App-Router';
import { FirebaseContext } from "./context/firebase-context";
import { ThemeContextProvider } from "./context/style-context";

const App = () => {
  const { user } = useContext(FirebaseContext);
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  isDarkTheme ?
    document.body.classList.add("dark-theme") :
    document.body.classList.remove("dark-theme");

  return (
    <div className="App">
      <ThemeContextProvider>
        <AppRouter user={user} />
      </ThemeContextProvider>
    </div>
  );
}

export default App;