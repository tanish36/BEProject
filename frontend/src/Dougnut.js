import React from 'react';
import Doughnut from 'react-chartjs-2';

function DoughnutGraph() {

    const data = {
        labels: [
            'WA',
            'AC',
            'TLE'
        ],
        datasets: [{
            data: [300, 50, 100],
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
    };


    return (
        <Doughnut data={data} />
    )
}

export default DoughnutGraph
