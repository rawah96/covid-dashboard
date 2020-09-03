import React from 'react'
import './Stats.css'
import {Card, CardContent, Typography} from '@material-ui/core';

function Stats({title, dailyCases, total}) {
    return (
        <div className="stats">
            <Card className="info-box">
                <CardContent>
                    <Typography color="textSecondary" className="box-title">
                        {title}
                    </Typography>
                    <h2 className="box-cases">{dailyCases}</h2>
                    <Typography color="primary" className="box-total">{total} Total</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Stats
