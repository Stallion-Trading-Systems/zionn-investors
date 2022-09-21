import { BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, 
} from "react-router-dom";
import Signin from "./Components/auth/Signin";
import Home from "./Containers/Home/Home"
import Holdings from "./Containers/Holdings/Holdings"
import Orders from "./Containers/Orders/Orders"
import Profile from "./Containers/Profile/Profile"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/holdings" element={<Holdings/>} />
          <Route exact path="/orders" element={<Orders/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/signin" element={<Signin/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
