import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineGraph() {

    const state = {
        labels: ['1', '2', '3',
            '4', '5'],
        datasets: [
            {
                label: 'Rating',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    return (
        <div>
            <Line
                data={state}
                options={{
                    title: {
                        display: false,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    );

}
