import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import { fireAuth } from "./constants/fireapi";
import withAuthProtection from "./pages/withAuthProtection";
import Profile from "./pages/profile";
import Login from "./pages/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Register from "./pages/register";
import _ from "lodash";

const ProtectedProfile = withAuthProtection("/login")(Profile);

class App extends React.Component {
     constructor() {
          super();
          console.log("user", fireAuth.currentUser);
          this.state = {
               me: fireAuth.currentUser
          };
     }

     componentDidMount() {
          fireAuth.onAuthStateChanged(me => {
               this.setState({ me });
          });
     }

     handleSignIn = history => (email, password) => {
          return fireAuth.signInWithEmailAndPassword(email, password).then(() => {
               return history.push("/profile");
          });
     };

     render() {
          const { me } = this.state;
          const email = _.get(me, "email");

          return (
               <Container>
               <BrowserRouter>
                    <Switch>
                         <Route path="/" exact component={Home} />
                         <Route path="/login" exact render={({ history }) => (<Login onLogin={this.handleSignIn(history)}/>)} />
                         <Route path="/register" exact component={Register} />
                         <Route path="/profile" render={props => (<ProtectedProfile {...props} me={me} displayName={email} /> )}
                         />
                    </Switch>
               </BrowserRouter>
               </Container>
          );
     }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
