import React, { useEffect } from "react";
import "./App.css";
//--Import Component----------------
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header-component/header.component";
import Authentication from "./pages/authentication/authentication.component";
import CheckOut from "./pages/checkout/check-out.component";
//--Import Dependencies----------------
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.uitls";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";

function App({ currentUser, setCurrentUser }) {
  // When signing in with google, it return a userAuth object, wether it is in database or
  // not, we still have a document reference back. So we need to check if the account is already in the database. If not, set it, then listen to its snapshot. This snapshot only changes when it is set new, so if the user is already in database, nothing happens
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // If this object exists, get a reference to it in the database
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      // Every time a user logs out, set user to null. Because useRef is async, it will jump to this before going back
      setCurrentUser();
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/checkout" component={CheckOut}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? (
              <Redirect to="/"></Redirect>
            ) : (
              <Authentication></Authentication>
            )
          }
        ></Route>
      </Switch>
    </div>
  );
}
const mapDispatch = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapState, mapDispatch)(App);
