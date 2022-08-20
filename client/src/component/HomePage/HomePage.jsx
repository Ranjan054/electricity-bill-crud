import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./HomePage.css"
import Spinner from '../Spinner/Spinner';


const HomePage = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const clickHandler = (id) => {
        navigate(`/bill/${id}`)
    }

    const createBill = () => {
        axios.post("/bill", {})
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    useEffect(() => {
        axios.get("/bill")
            .then((res) => {
                setData(res.data)
                if (res.data.length < 5) createBill();
            })
            .catch((e) => {
                console.log(e);
            })
    }, []);

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
                }) : <Spinner />
            }
        </div>

    );
}

export default HomePage