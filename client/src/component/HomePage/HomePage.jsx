import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./HomePage.css"


const HomePage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("/api")
            .then((res) => {
                setData(res.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    return (
        <div className='container'>
            <div className='home-bill-detail-card'>
                <p className='month'>July 2020</p>
                <p className='bill'>1,000</p>
                <p className='status'>paid</p>
                <div className='btn-wrapper'>
                    <button className='get-detail-btn'>Get Detail</button>
                </div>
            </div>

            {
                data.length ?
                    <div className='home-bill-detail-card'>
                    <p className='month'>July 2020</p>
                    <p className='bill'>1,000</p>
                    <p className='status'>paid</p>
                    <div className='btn-wrapper'>
                        <button className='get-detail-btn'>Get Detail</button>
                    </div>
                </div> : ""
            }
        </div>

    )
}

export default HomePage