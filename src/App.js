import { Signup } from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { ForgotPassword } from "./components/ForgotPassword";
import { UpdatedProfile } from "./components/UpdatedProfile";

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
              <Switch>
                <PrivateRoute
                  exact
                  path="/"
                  component={Dashboard}
                ></PrivateRoute>
                <PrivateRoute
                  path="/updated-profile"
                  component={UpdatedProfile}
                ></PrivateRoute>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
                <Route
                  path="/forgot-password"
                  component={ForgotPassword}
                ></Route>
              </Switch>
            </Router>
          </div>
        </AuthProvider>
      </Container>
    </AuthProvider>
  );
}

export default App;
