import React from 'react';
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap';
import DoughnutGraph from './Dougnut'
import LineGraph from './Line'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function Homepage() {

    return (
        <div className="Profile">

        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
           
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                
            <title>Welcome</title>
           
            <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'/>
            
            <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
            
            <link href="assets/css/font-awesome.min.css" rel="stylesheet" />
            
            <link href="assets/css/prettyPhoto.css" rel="stylesheet" />
           
            <link href="assets/css/style.css" rel="stylesheet" />
            
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
           
        </head>
        
        <body>


<header id="header-nav" role="banner">
    <div id="navbar" class="navbar navbar-default">
        <div class="navbar-header">
            <a class="navbar-brand" href="#"><i class="fa fa-flask color-red"></i>CodeIT</a>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        
    </div>
</header>

<section id="slide-head" class="carousel">
    <div class="carousel-inner">
        <div class="item active">
            <div class="container">
                <div class="carousel-content">
                    <h1>WELCOME</h1>
                    <p class="lead">
                    Interactive, step-by-step tutorials for any experience level
                        
                    </p>
                </div>
            </div>
        </div>
        
        <div class="item">
            <div class="container">
                <div class="carousel-content">
                    <h1>Now or Never</h1>
                    <p class="lead">
                       <br></br>
                        
                       Together, we can make computer science education available to every student! Help us grow the movement to make Computer Science a fundamental part of the K-12 education system.
                    </p>
                </div>
            </div>
        </div>
        
    </div>
    <a class="prev" href="#slide-head" data-slide="prev"><i class="fa fa-angle-left"></i></a>
    <a class="next" href="#slide-head" data-slide="next"><i class="fa fa-angle-right"></i></a>
</section>

<section id="about-section">
    <div class="wrap-pad">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 ">
                <div class="text-center">
                    <h1><i class="fa fa-wrench small-icons bk-color-brown"></i>Meet Team</h1>
                    <p class="lead">
                    Each member of our team is a specialist in his or her field. Together, we make sure you’re investing where the best returns are, while building loyalty across every touchpoint. 
                   
                    </p>
                </div>

            </div>
            
            <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 margin-top-100  ">
                <div class="col-md-3 col-sm-6" data-scrollreveal="enter left and move 100px, wait 0.6s">
                    <div class="text-center">
                        <p>
                            <img class="img-responsive img-thumbnail img-circle"  src="assets/img/team/team1.png" alt=""/>
                        </p>
                        <h3>Dheeru</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6" data-scrollreveal="enter bottom and move 100px, wait 0.6s">
                    <div class="text-center">
                        <p>
                            <img class="img-responsive img-thumbnail img-circle" src="assets/img/team/team2.jpg" alt=""/>
                        </p>
                        <h3>Ashwani</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6" data-scrollreveal="enter bottom and move 100px, wait 0.6s">
                    <div class="text-center">
                        <p>
                            <img class="img-responsive img-thumbnail img-circle" src="assets/img/team/team1.png" alt=""/>
                        </p>
                        <h3>Sumit</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6" data-scrollreveal="enter right and move 100px, wait 0.6s">
                    <div class="text-center">
                        <p>
                            <img class="img-responsive img-thumbnail img-circle"  src="assets/img/team/team2.jpg" alt=""/>
                        </p>
                        <h3>Udit</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>

<section id="services-section">
    <div class="wrap-pad">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 " data-scrollreveal="enter top and move 100px, wait 0.5s">
                <div class="text-center">
                    <h1><i class="fa fa-check small-icons bk-color-green"></i>Services</h1>
                    <p class="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                     Quisque eu ante at tortor imperdiet gravida nec sed turpis. Phasellus augue augue.                        
                    </p>
                </div>
            </div>
          
            <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 ">
                <div class="col-md-4 col-sm-6" data-scrollreveal="enter left and move 100px, wait 0.6s">
                    <div class="text-center">
                        <i class="fa fa-bolt icon-round bk-color-red"></i>
                        <h4>Responsive Design</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                     Quisque eu ante at tortor imperdiet gravida nec sed turpis. Phasellus augue augue.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6" data-scrollreveal="enter bottom and move 100px, wait 0.6s">
                    <div class="text-center">
                        <i class="fa fa-comments icon-round bk-color-black"></i>
                        <h4>24x7 Support</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                     Quisque eu ante at tortor imperdiet gravida nec sed turpis. Phasellus augue augue.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6" data-scrollreveal="enter right and move 100px, wait 0.6s">
                    <div class="text-center">
                        <i class="fa fa-desktop icon-round bk-color-light-blue"></i>
                        <h4>Awesome Display</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                     Quisque eu ante at tortor imperdiet gravida nec sed turpis. Phasellus augue augue.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6" data-scrollreveal="enter left and move 100px, wait 0.6s">
                    <div class="text-center">
                        <i class="fa fa-flask icon-round bk-color-green"></i>
                        <h4>Tested Template</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                     Quisque eu ante at tortor imperdiet gravida nec sed turpis. Phasellus augue augue.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6" data-scrollreveal="enter bottom and move 100px, wait 0.6s">
                    <div class="text-center">
                        <i class="fa fa-pencil icon-round bk-color-blue"></i>
                        <h4>Say Yes To Customize</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                     Quisque eu ante at tortor imperdiet gravida nec sed turpis. Phasellus augue augue.
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6" data-scrollreveal="enter right and move 100px, wait 0.6s">
                    <div class="text-center">
                        <i class="fa fa-thumbs-up icon-round bk-color-brown"></i>
                        <h4>Well Documented</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                     Quisque eu ante at tortor imperdiet gravida nec sed turpis. Phasellus augue augue.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>


<section id="pricing-section">
    <div class="wrap-pad">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 " data-scrollreveal="enter top and move 100px, wait 0.5s">
                <div class="text-center">
                    <h1><i class="fa fa-plane small-icons bk-color-blue"></i>Our Pricing Options</h1>
                    <p class="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec enim sapien. Aliquam erat volutpat.
                     Quisque eu ante at tortor imperdiet gravida nec sed turpis. Phasellus augue augue.                        
                    </p>
                </div>
            </div>
           
            <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 margin-top-100 ">
                <div id="pricing-table" class="row">
                    <div class="col-md-4 col-sm-4" data-scrollreveal="enter left and move 100px, wait 0.6s">
                        <ul class="plan-main">
                            <li class="plan-name">Starter</li>
                            <li class="plan-price">$ 100</li>
                            <li>5GB Storage</li>
                            <li>1GB Space</li>
                            <li>200 Bandwidth</li>
                            <li>100 Email Address</li>
                            <li>24x7 Support</li>
                            <li>Live Chat</li>
                            <li class="plan-action"><a href="#" class="btn btn-primary btn-lg">Signup</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-4" data-scrollreveal="enter bottom and move 100px, wait 0.6s">
                        <ul class="plan-main featured">
                            <li class="plan-name">Medium</li>
                            <li class="plan-price">$ 200</li>
                            <li>5GB Storage</li>
                            <li>1GB Space</li>
                            <li>200 Bandwidth</li>
                            <li>100 Email Address</li>
                            <li>24x7 Support</li>
                            <li>Live Chat</li>
                            <li class="plan-action"><a href="#" class="btn btn-primary btn-lg">Signup</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-4" data-scrollreveal="enter right and move 100px, wait 0.6s">
                        <ul class="plan-main">
                            <li class="plan-name">Advance</li>
                            <li class="plan-price">$ 300</li>
                            <li>5GB Storage</li>
                            <li>1GB Space</li>
                            <li>200 Bandwidth</li>
                            <li>100 Email Address</li>
                            <li>24x7 Support</li>
                            <li>Live Chat</li>
                            <li class="plan-action"><a href="#" class="btn btn-primary btn-lg">Signup</a></li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</section>

<section id="contact-section">
    <div class="wrap-pad">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 " data-scrollreveal="enter top and move 100px, wait 0.5s">
                <div class="text-center">
                    <h1><i class="fa fa-tint small-icons bk-color-black"></i>Contact us Now</h1>
                    <p class="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.                       
                    </p>
                </div>
            </div>
            
            <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1  margin-top-20">
                <div class="col-md-6  col-sm-12" data-scrollreveal="enter left and move 100px, wait 0.6s">
                    <h3><i class="fa fa-pencil small-icons bk-color-light-blue"></i>Send Us Your Query</h3>
                    <hr />
                    <form>
                        <div class="row">
                            <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" required="required" placeholder="Name"/>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" required="required" placeholder="Email address"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-sm-12">
                                <div class="form-group">
                                    <textarea name="message" id="message" required="required" class="form-control" rows="4" placeholder="Message"></textarea>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-lg">Submit Query</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-4 col-md-offset-1  col-sm-12" data-scrollreveal="enter right and move 100px, wait 0.6s">
                    <h3><i class="fa fa-comments small-icons bk-color-red"></i>Reach Us Here</h3>
                    <hr />
                    AIT Pune.<br />
                    Call: 1234567890<br />
                    Email: BePro@gmail.com<br />
                    <h3><i class="fa fa-plus small-icons bk-color-green"></i>Social Presence</h3>
                    <a href="#"><i class="fa fa-facebook fa-3x color-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter fa-3x color-twitter"></i></a>
                    <a href="#"><i class="fa fa-google-plus fa-3x color-google-plus"></i></a>
                    <a href="#"><i class="fa fa-linkedin fa-3x color-linkedin"></i></a>
                    <a href="#"><i class="fa fa-pinterest fa-3x color-pinterest"></i></a>
                </div>
            </div>
            
        </div>
    </div>
</section>

<footer id="footer">
    <div class="row">
        <div class="col-md-12  col-sm-12">
            &copy; 2014 www.yourdomain.com  |  All Rights Reserved
           
        </div>
    </div>
</footer>

<script src="assets/js/jquery.js"></script>

<script src="assets/js/bootstrap.min.js"></script>

<script src="assets/js/jquery.prettyPhoto.js"></script>

<script src="assets/js/scrollReveal.js"></script>

<script src="assets/scripts/custom.js"></script>
</body>
    

        </div>
    )
}

export default Homepage
