import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/auth/Login";
import './App.css';
import Header from "./component/layout/Header";
import Home from "./component/Home";
import Details from "./component/Details";



function App() {



  

  return (
    <div className="App">
        {/* <Router>
            <Routes>
              <Route exact path="/" >
                  <Login />
              </Route>
            </Routes>
        </Router>

        <Login /> f */}

        <BrowserRouter>
            <Header />
          <Routes>
               <Route path="/"   element={<Login />} />
               <Route path="/home"  element={<Home />}/>
               <Route path="/details/:id"  element={<Details />}/>
            </Routes>
        </BrowserRouter>

        
    </div>
  );
}

export default App;
