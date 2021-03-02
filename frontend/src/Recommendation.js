import React, { useState, useEffect } from 'react'
import RecommendService from './services/recommend-service'

function Recommendation() {

    const [Data, setData] = useState(null)

    useEffect(() => {
        RecommendService.getData().then((response) => {
            setData(response)
        }, (error) => {

        })
    }, [])

    return (
        <div>
            <h1>{Data}</h1>
        </div>
    )
}

export default Recommendation
