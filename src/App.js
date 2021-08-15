import { Signup } from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";

function App() {
  return (
    <AuthProvider>
      <Container
        style={{ minHeight: "100vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <AuthProvider> 
          <div style={{ maxWidth: "400px" }} className="w-100">
            <Router>
              <AuthProvider>
                <Switch>
                  <Route exact path='/' component={Dashboard}></Route>
                  <Route path='/signup' component={Signup}></Route>
                  <Route path='/login' component={Login}></Route>
                </Switch>
              </AuthProvider>
            </Router>
          </div>
        </AuthProvider>
      </Container>
    </AuthProvider>
  );
}

export default App;
