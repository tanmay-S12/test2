import React from 'react'
import Login from '../Login/Login'
import moment from 'moment'
import HorizontalCard from '../../common/components/Horizontalcard/HorizontalCard';


function Dashboard() {

    const now = moment();
    console.log("From Dashboard")

    // Custom date
    const customDate = moment('2025-01-25', 'YYYY-MM-DD');
    return (
        <>
            {/* <h1>{customDate.format}</h1> */}
            {/* <Login /> */}
            {/* <h1>{customDate}</h1> */}
            <h1 className=''>Dashboard</h1>
            <p>Custom Date: {customDate.format('MMMM Do YYYY')}</p>
            <HorizontalCard
                heading="React Developer"
                subheading="Building modern web applications with React.js"
            />
        </>
    );
}

export default Dashboard