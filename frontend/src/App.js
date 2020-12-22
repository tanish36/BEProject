import SignUp from './components/Signup';
import React from 'react';
import SignIn from './components/Signin';
import AuthService from "./services/auth.service";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import Profile from './Profile';
import AddContent from './AddContent';

import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import Content from './Content';

export default function App() {

  const loggedIn = true;
  const userDetails = {
    user: undefined
  }

  // const [userDetails, setuserDetails] = useState({
  //   user: undefined,
  //   showAdminBoard: false,
  //   showLearnerBoard: false
  // });

  // useEffect(() => {
  //   const tempUser = AuthService.getCurrentUser();
  //   if (tempUser) {
  //     setuser((prevState) => ({
  //       ...prevState,
  //       user: tempUser,
  //       showAdminBoard: tempUser.isAdmin,
  //       showLearnerBoard: !tempUser.isAdmin
  //     }));
  //   }
  // }, []);

  // function logOut() {
  //   AuthService.logOut();
  // }

  return (
    <>
      <Header />
      <div className="MainConatiner">
        <Row>
          {
            (loggedIn) ?
              <>
                <Col xs={2}>
                  <div className="Sidebar">
                    <Sidebar />
                  </div>
                </Col>
                <Col>
                  <Container>
                    <Switch>
                      <Route exact path="/Welcome" component={Profile} />
                      <Route exact path="/AddContent" component={AddContent} />
                      <Route exact path="/Content" component={Content} />
                    </Switch>
                  </Container>
                </Col>
              </>
              :
              <>
                <Container>
                  <Switch>
                    <Route exact path="/Signup" component={SignUp} />
                    <Route exact path="/Signin" component={SignIn} />
                  </Switch>
                </Container>

              </>
          }
        </Row>

      </div>

    </>


  );
}