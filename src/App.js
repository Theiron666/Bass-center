import NavBar from "./Components/Nav/NavBar";
import Home from "./Components/Home/Home";
import Products from "./Components/Product/Products";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckoutPage from "./Components/Checkout/CheckoutPage";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/checkout-page">
            <CheckoutPage />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Home />
            <Products />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import NavBar from "./Components/Nav/NavBar";
// import Home from "./Components/Home/Home";
// import Product from "./Components/Product/Product";
// import Footer from "./Components/Footer/Footer";
// import "./App.css";
// import Login from "./Components/Login/Login";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Home />
//       <Product />
//       <Login />
//       <Footer />
//     </div>
//   );
// }

// export default App;
