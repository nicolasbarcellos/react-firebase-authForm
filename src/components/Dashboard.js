import { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../helpers/useAuth";

export function Dashboard() {
  const history = useHistory;

  const { currentUser, logout } = useAuth();

  const [error, setError] = useState("");

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
          <Link to="/updated-profile" className="btn btn-primary w-100 mt-3">
            Updated Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
}
