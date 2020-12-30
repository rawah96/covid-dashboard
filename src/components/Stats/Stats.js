import React from 'react'
import './Stats.css'
import {Card, CardContent, Typography} from '@material-ui/core';
import Line from '../Charts/LineChart';

function Stats({title, dailyCases, total}) {
    return (
        <div className="stats">
            <Card className="info-box">
                <CardContent>
                    <Typography color="textSecondary" className="box-title">
                        {title}
                    </Typography>
                    {/* <h2 className="box-cases"><small>Today:</small> {dailyCases}</h2> */}
                    <h2 className="box-cases"> {total}</h2>
                </CardContent>
            </Card>
        </div>
    )
}

export default Stats
