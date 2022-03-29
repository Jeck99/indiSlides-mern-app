import React from 'react';
import './App.css';
import FirebaseProvider from './context/firebase-context';
import Header from './components/parts/Header/Header';
import AppRouter from './App-Router';
import Footer from './components/parts/Footer/Footer';
const App = () => {
  return (
    <div className="App">
      <FirebaseProvider>
        <Header />
          <AppRouter />
      </FirebaseProvider>
      <Footer/>
    </div>
  );
}

export default App;