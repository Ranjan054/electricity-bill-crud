import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./HomePage.css"


const HomePage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("/bill")
            .then((res) => {
                setData(res.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    return (
        <div className='container'>
            {
                data.length ? data.map((el, index) => {
                    return (
                        <div key={index} className='home-bill-detail-card'>
                            <p className='month'>{el.month}</p>
                            <p className='bill'>{el.amount}</p>
                            <p className='status'>{el.status}</p>
                            <div className='btn-wrapper'>
                                <button className='get-detail-btn'>Get Detail</button>
                            </div>
                        </div>
                    )
                }) : ""
            }
        </div>

    )
}

export default HomePage