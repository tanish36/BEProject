import React from 'react';
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap';
import DoughnutGraph from './Dougnut'
import LineGraph from './Line'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home.js'

function Homepage() {

    return (
        <div>
            <Home/>
        </div>
    )
}

export default Homepage
