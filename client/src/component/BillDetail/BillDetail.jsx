import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
// import details from "../data.json";
import "./BillDetail.css";



const BillDetail = () => {

    const [detail, setDetails] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();


    const clickHandler = () => {

    }

    const itemDeleteHandler = () => {
        axios.delete(`/bill/${id}`)
            .then(() => {
                setTimeout(() => {
                    navigate('/');
                }, 500)
            })
            .catch((e) => {
                console.log(e);
            })
    }

    useEffect(() => {
        axios.get(`/bill/${id}`)
            .then((res) => {
                setDetails(res.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [id])

    return (
        <>
            {
                Object.keys(detail).length ?
                    <div className='bill-detail-wrapper'>
                        <div className="container">
                            <div className='card'>
                                <div className='heading'>
                                    <p>{detail.name}
                                        <span>{detail.address}</span></p>
                                    <p>000{detail.customerId}
                                        <span>customer id</span></p>
                                </div>
                                <div className='bottom-section'>
                                    <div>
                                        <p className='bold'>Month :</p>
                                        <p>{detail.month}</p>
                                    </div>
                                    <div>
                                        <p className='bold'>Unit :</p>
                                        <p>{detail.unit}</p>
                                    </div>
                                    <div>
                                        <p className='bold'>Amount :</p>
                                        <p>{detail.amount}/-</p>
                                    </div>
                                    <div>
                                        <p className='bold'>Status :</p>
                                        <p>{detail.status}</p>
                                    </div>

                                    <div className="btn-wrapper">
                                        <button onClick={() => clickHandler()} style={{ backgroundColor: "#113dcd" }}>Edit</button>
                                        <button onClick={itemDeleteHandler} style={{ backgroundColor: "#dc3545" }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : "Loading..."
            }
        </>

    )
}

export default BillDetail