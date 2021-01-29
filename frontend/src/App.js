import SignUp from './components/Signup';
import React, { useState, useEffect } from 'react';
import SignIn from './components/Signin';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import Profile from './Profile';
import AddContent from './AddContent';
import Contest from './Contest';
import AddContest from './AddContest';

import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import Content from './Content';
import Discuss from './Discuss';
import Problem from './Problem';
import ContentEntry from './ContentEntry';

export default function App() {

  let history = useHistory();
  const [user, setuser] = useState({});
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setloggedIn(true);
      setuser(localStorage.getItem("user"));
    } else {
      setloggedIn(false);
    }
  }, [loggedIn])

  return (
    <>
      <div className="MainConatiner">
        <Row>
          {
            (loggedIn) ?
              <>
                <Header logOut={() => setloggedIn(false)} loggedIn={loggedIn} />
                <Col xs={2}>
                  <div className="Sidebar">
                    <Sidebar isLoggedIn={loggedIn} />
                  </div>
                </Col>
              </>
              :
              <Header logOut={() => setloggedIn(false)} loggedIn={loggedIn} />
          }
          <Container>
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/Welcome" component={Profile} />
              <Route exact path="/AddContent" component={AddContent} />
              <Route exact path="/Learn" component={ContentEntry} />
              <Route exact path="/Signup" component={SignUp} />
              <Route exact path="/Signin" component={SignIn} />
              <Route exact path="/Discuss" component={Discuss} />
              <Route exact path="/Problem" component={Problem} />
              <Route exact path="/Contest" component={Contest} />
              <Route exact path="/AddContest" component={AddContest} />
            </Switch>
          </Container>
        </Row>
      </div>

    </>


  );
}