import React, {useState, useEffect} from 'react'
import './LineChart.css'
import {Line} from 'react-chartjs-2';
import numeral from 'numeral';

const options = {
    legend: {
        display: false,
    },
    element: {
        point:{
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode:"index",
        intersect: false,
        callbacks: {
            label:function(tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0")
            },
        },
    },
    scales: {
        xAxes: [
            {
                type:"time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll"
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function(value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
}

function LineChart({casesType ='cases'}) {
    const [data, setData] = useState({});

    // helper function
    const shapeData = (data, casesType='cases') => {
        const chartData =[];
        let lastDataPoint;

        for(let date in data.cases){
            if(lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint)
            }
            lastDataPoint = data[casesType][date];
        }
        return chartData;
    }

    useEffect(() => {
        const fetchData= async () => {
            const url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=120';
            await fetch(url)
            .then(res => res.json())
            .then(data => {
                const shapedData = shapeData(data, 'cases');
                setData(shapedData);
            })
        }

        fetchData();
        
    }, [casesType])



    return (
        <div className="line">
            {data.length > 0 ? (
                <Line 
                            options={options}
                            data={{
                                datasets: [{
                                    backgroundColor: 'white',
                                    borderColor:'lightgray',
                                    data:data,
                                }],
                            }}
                        />
            ): null}
        </div>
    )
}

export default LineChart
