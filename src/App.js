import React, { useState, useEffect } from "react";
import "./App.css";
//--Import Component----------------
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header-component/header.component";
import Authentication from "./pages/authentication/authentication.component";
//--Import Dependencies----------------
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.uitls";

function App() {
  const [user, setUser] = useState();
  // When signing in with google, it return a userAuth object, wether it is in database or
  // not, we still have a document reference back. So we need to check if the account is already in the database. If not, set it, then listen to its snapshot. This snapshot only changes when it is set new, so if the user is already in database, nothing happens
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // If this object exists, get a reference to it in the database
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      // Every time a user logs out, set user to null. Because useRef is async, it will jump to this before going back
      setUser();
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header user={user}></Header>
      {user && <div>Logged In</div>}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/signin" component={Authentication}></Route>
      </Switch>
    </div>
  );
}

export default App;
