import React from 'react'
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import './Home.css'

import sangwan from './assets/img/team/Sangwan.jpg'
import udit from './assets/img/team/Udit.jpg'
import dheeru from './assets/img/team/Dheeru.jpg'
import ashwani from './assets/img/team/Ashwani.jpg'
import slide1 from './assets/img/slide1.jpg'
import slide2 from './assets/img/slide2.jpg'
import slide3 from './assets/img/slide3.jpg'
import now from './assets/img/Now.jpg'
import teamimg from './assets/img/teamimg.png'
import services from './assets/img/services.png'
import design from './assets/img/design.png'
import support from './assets/img/support.png'
import tested from './assets/img/tested.png'
import welld from './assets/img/welld.png'
import display from './assets/img/display.png'
import customize from './assets/img/customize.png'

function Home() {

    return (

        <div classNameName="Profile">

        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
           
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                
            <title>Welcome</title>
            <Card className="text-center">
                                        <Card.Body>
                                            <Card.Title></Card.Title>

                                            <Card.Text>
                                                
                                            </Card.Text>

                                        </Card.Body>
            </Card>
            
            
            
           
        </head>
        
        <body>

        <Card className="Welcome" bg='success' text ='light'>
                                        <Card.Body>
                                            <Card.Title><h1>Welcome</h1></Card.Title>

                                            <Card.Text>
                                            <h3>Interactive, step-by-step tutorials for any experience level</h3>
                                            </Card.Text>

                                        </Card.Body>
        </Card>
        <br/>


<div className="text-center">
            <div className="container">
                <div className="carousel-content">
                    <img src = {now} width = "100px" height="100px"/>
                    <h1>Now or Never</h1>
                    <p className="lead">
                       <br></br>
                        
                       Together, we can make computer science education available to every student! Help us grow the movement to make Computer Science a fundamental part of the K-12 education system.
                    </p>
                </div>
            </div>
        </div>

        <br/><br/>
  
<Carousel >
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
      
      height = "300"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
      
      height = "300"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
      
      height = "300"
    />
  </Carousel.Item>
</Carousel>



<br/>

<div className="text-center">
            
    <img src = {teamimg} width = "100px" height="100px"/>
    <h1><i className="fa fa-wrench small-icons bk-color-brown"></i>Meet Team</h1>
    <p>
        <br></br>
        Each member of our team is a specialist in his or her field. Together, we make sure you’re investing where the best returns are, while building loyalty across every touchpoint. 
        </p>            
</div>
<div className="text-center">
<div id = "leftbox"> 
            
    <Card>
        <Card.Img variant="top" src= {dheeru} />
        <Card.Body>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    </div>            
    <div id = "mid-left"> 
    <Card>
        <Card.Img variant="top" src= {ashwani} />
        <Card.Body>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />
    </div> 
    <div id = "mid-rightbox"> 
    <Card>
        <Card.Img variant="top" src= {sangwan} />
        <Card.Body>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card> 
    </div> 
    <div id = "rightbox"> 
    <Card>
        <Card.Img variant="top" src= {udit} />
        <Card.Body>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </Card.Text>
        </Card.Body>
    </Card> 
    </div> 
</div>

<br></br>
<br></br>

<div className= "text-center">
            
    <img src = {services} width = "100px" height="100px"/>
    <h1><i className="fa fa-wrench small-icons bk-color-brown"></i>Services</h1>
    <p >
        <br></br>
        Together, we can make computer science education available to every student! Help us grow the movement to make Computer Science a fundamental part of the K-12 education system.
    
        Each member of our team is a specialist in his or her field. Together, we make sure you’re investing where the best returns are, while building loyalty across every touchpoint. 
    <br></br>
        </p>
               
</div>
<br/>

<div className="text-center">
    <div id = "design"> 
            
    <Card>
        <img  align= "center" src= {design} width= "100px" height = "100px"/>
        <Card.Body>
        <Card.Text>
        <h3><i className="fa fa-wrench small-icons bk-color-brown"></i>Responsive Design</h3>
        Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.
        </Card.Text>
        </Card.Body>
    </Card>
    
    </div>  
                
    <div id = "support"> 
    <Card>
        <img variant="top" src= {support} width= "100px" height = "100px"/>
        <Card.Body>
        <Card.Text>
        <h3><i className="fa fa-wrench small-icons bk-color-brown"></i>24x7 Support</h3>
        In an IT context, 24/7 support means a support service that is provided 24 hours a day and 7 days a week. This support generally includes support for those services that require running without disruption and downtime</Card.Text>
        </Card.Body>
    </Card>
    
    </div> 
    <div id = "display"> 
    <Card>
        <img variant="top" src= {display} width= "100px" height = "100px"/>
        <Card.Body>
        <Card.Text>
        <h3><i className="fa fa-wrench small-icons bk-color-brown"></i>Awesome Display</h3>
        Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.
        </Card.Text>
        </Card.Body>
    </Card> 
    </div> 
</div>

<br></br>

<div>
    <div id = "tested"> 
            
    <Card>
        <img variant="top" src= {tested} width= "100px" height = "100px"/>
        <Card.Body>
        <Card.Text>
        <h3><i className="fa fa-wrench small-icons bk-color-brown"></i>Tested Template</h3>
        Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.
        </Card.Text>
        </Card.Body>
    </Card>
    
    </div>  
                
    <div id = "say"> 
    <Card>
        <img variant="top" src= {customize} width= "100px" height = "100px"/>
        <Card.Body>
        <Card.Text>
        <h3><i className="fa fa-wrench small-icons bk-color-brown"></i>Say Yes To Customize</h3>
        Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.
        </Card.Text>
        </Card.Body>
    </Card>
    <br />
    </div> 

    <div id = "welld"> 
    <Card>
        <img variant="top" src= {welld} width= "100px" height = "100px"/>
        <Card.Body>
        <Card.Text>
        <h3><i className="fa fa-wrench small-icons bk-color-brown"></i>Well Documented</h3>
        Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.
        </Card.Text>
        </Card.Body>
    </Card> 
    </div> 

</div>


<br/>


<Navbar fixed="bottom" expand="lg" variant="light" bg="primary">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse >
    <Navbar.Text>
   
    AIT Pune. Call: 1234567890 Email: BePro@gmail.com  &copy; 2014 www.yourdomain.com  |  All Rights Reserved
           
        
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>



</body>
    

        </div>
    )
}

export default Home
