import React from 'react';
import {Polar} from 'react-chartjs-2';
import './Chart.css';

    const Chart = ({data, legend}) => {

        return(
            <div>
                {data===undefined
                    ?   <h2>Loading...</h2>
                    :   <Polar
                            data={data}
                            options={{
                                maintainAspectRatio: true,
                                responsive: true,
                                legend: {
                                    position: legend
                                }
                            }}
                        />
                }

            </div>
        );
    }


export default Chart;
