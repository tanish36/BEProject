import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineGraph({ TimeStamp, Datapoints }) {

    const state = {
        labels: TimeStamp,
        datasets: [
            {
                label: 'Rating',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: Datapoints
            }
        ]
    }

    console.log(TimeStamp + " " + Datapoints)

    return (
        <div>
            <Line
                data={state}
                options={{
                    title: {
                        display: false,
                        text: 'Average Rating per contest',
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
