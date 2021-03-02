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
            <h1>Recommendation System</h1>
            {Data}
        </div>
    )
}

export default Recommendation
