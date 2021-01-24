import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';

function Alertdism({ setsucess, theme, content, heading }) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant={theme} onClose={() => {
                setsucess(2)
                setShow(false)
            }} dismissible>
                <Alert.Heading>{heading}</Alert.Heading>
                <p>
                    {content}
                </p>
            </Alert>
        );
    }
}

export default Alertdism
