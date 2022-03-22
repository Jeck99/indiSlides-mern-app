import React from 'react';
import './App.css';
import FirebaseProvider from './context/firebase-context';
import Header from './components/parts/Header/Header';
import UserContextProvider from './context/user-context';
import AppRouter from './App-Router';
const App = () => {
  return (
    <div className="App">
      <FirebaseProvider>
        <Header />
        <UserContextProvider>
          <AppRouter />
        </UserContextProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
// import UserContextProvider from './context/user-context';
// const App = () => {


//   return (
//     <div className="App">
//       <header className="App-header">
//         <UserContextProvider>
//           <AppRouter />
//         </UserContextProvider>
//       </header>
//     </div>
//   );
// }

// export default App;