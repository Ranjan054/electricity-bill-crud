import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
// import details from "../data.json";
import "./BillDetail.css";
import Spinner from '../Spinner/Spinner';

const BillDetail = () => {
    const [detail, setDetails] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);
    const [time, setTime] = useState("");
    const [loading, setLoading] = useState({
        delete: false,
        submit: false
    });
    const [formData, setFormData] = useState({
        month: "",
        unit: "",
        amount: "",
        status: ""
    })

    const editClickHandler = () => {
        setEdit(true);
    };

    const inputChangeHandler = (e, inputField) => {
        setFormData(
            {
                ...formData,
                [inputField]: e.target.value
            }
        );
    };

    const formSubmit = (e) => {
        e.preventDefault();
        setLoading({
            ...loading,
            submit: true
        })
        axios.put(`/bill/update/${id}`, formData)
            .then((res) => {
                setTime(new Date().getTime());
                setDetails({});
                setEdit(false);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading({
                    ...loading,
                    submit: false
                })
            });
    };

    const itemDeleteHandler = () => {
        setLoading({
            ...loading,
            delete: true
        })
        axios.delete(`/bill/delete/${id}`)
            .then(() => {
                navigate('/');
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setLoading({
                    ...loading,
                    delete: false
                });
            });
    };

    useEffect(() => {
        axios.get(`/bill/${id}`)
            .then((res) => {
                setDetails(res.data)
                setFormData(res.data)
            })
            .catch((e) => {
                console.log(e);
            })
    }, [id, time])

    return (
        <>
            {
                Object.keys(detail).length > 0 ?
                    <div className='bill-detail-wrapper'>
                        <div className="container">
                            <div className='card'>
                                <div className='heading'>
                                    <p>{detail.name}
                                        <span>{detail.address}</span></p>
                                    <p>000{detail.customerId}
                                        <span>customer id</span></p>
                                </div>
                                <form onSubmit={(e) => formSubmit(e)}>
                                    <div className='bottom-section'>
                                        <div>
                                            <p className='bold'>Month :</p>
                                            {edit ? <input className='input-box' name="month" type="text" required value={formData.month} onChange={(e) => inputChangeHandler(e, "month")} placeholder='Enter Month Mar 2021' /> : <p>{detail.month}</p>}
                                        </div>
                                        <div>
                                            <p className='bold'>Unit :</p>
                                            {edit ? <input className='input-box' name="unit" type="number" required value={formData.unit} onChange={(e) => inputChangeHandler(e, "unit")} placeholder='Enter Unit 057' min="1" /> : <p>{detail.unit}</p>}
                                        </div>
                                        <div>
                                            <p className='bold'>Amount :</p>
                                            {edit ? <input className='input-box' name="amount" type="number" required value={formData.amount} onChange={(e) => inputChangeHandler(e, "amount")} placeholder='Enter Amount 789' min="1" /> : <p>{detail.amount}</p>}
                                        </div>
                                        <div>
                                            <p className='bold'>Status :</p>
                                            {edit ? <input className='input-box' name="status" type="text" required value={formData.status} onChange={(e) => inputChangeHandler(e, "status")} placeholder='Enter Status Paid' /> : <p>{detail.status}</p>}
                                        </div>
                                        {
                                            edit &&
                                            <div className="btn-wrapper">
                                                <button type="submit" disabled={loading.submit} style={{ backgroundColor: "#113dcd" }}>{loading.submit ? "Submitting..." : "Submit"}</button>
                                            </div>
                                        }
                                    </div>
                                </form>

                                {
                                    !edit &&
                                    <div className="btn-wrapper" style={{ padding: "0px 0px 20px 20px" }}>
                                        <button type="button" onClick={editClickHandler} style={{ backgroundColor: "#113dcd" }}>Edit</button>
                                        <button type="button" disabled={loading.delete} onClick={itemDeleteHandler} style={{ backgroundColor: "#dc3545" }}>{loading.delete ? "Deleting..." : "Delete"}</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div> : <Spinner />
            }
        </>

    )
}

export default BillDetail