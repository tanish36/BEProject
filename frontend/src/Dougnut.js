import React from 'react';
import Doughnut from 'react-chartjs-2';

function DoughnutGraph({ Data }) {

    const data = {
        labels: [
            'WA',
            'AC',
            'TLE'
        ],
        datasets: [{
            data: Data,
            backgroundColor: [
                '#FF6384',
                '#31c110',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }],
        text: '23%'
    }

    return (
        <Doughnut data={data} />
    )
}

export default DoughnutGraph
