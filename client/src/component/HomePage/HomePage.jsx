import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./HomePage.css"


const HomePage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const clickHandler = (id) => {
        navigate(`/bill/${id}`)
    }

    useEffect(() => {
        axios.get("/bill")
            .then((res) => {
                setData(res.data)
            })
            .catch((e) => {
                console.log(e);
            })

            // axios.post("/bill", {})
            // .then((res) => {
            //     setData(res.data)
            // })
            // .catch((e) => {
            //     console.log(e);
            // })
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
                                <button onClick={() => clickHandler(el._id)} className='get-detail-btn'>Get Detail</button>
                            </div>
                        </div>
                    )
                }) : ""
            }
        </div>

    )
}

export default HomePage