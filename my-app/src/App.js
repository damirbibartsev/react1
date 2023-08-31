import "./App.css";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Counter from "./components/Counter/Counter";
import Article from "./components/Article/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app-wrapper-content">
          <Navbar />
          <Routes>
              <Route path = "/" component={Profile} />
              <Route path = "/dialogs" component={Dialogs} />
           </Routes>
           <Article/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
