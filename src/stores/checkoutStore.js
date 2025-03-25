import axios from 'axios'
import React from 'react'

export const checkOut = async (token, id) => {
    return await axios.post("http://localhost:8888/api/program/checkout",
        { id },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
}

export const checkOutAppointment = async (token, id) => {
    return await axios.post(
      "http://localhost:8888/api/appointment/checkout",
      { id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  

export const checkOutStatus = async (token, session) => {
    return await axios.get(`http://localhost:8888/api/program/checkout-status/${session}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
}

export const checkOutAppointmentStatus = async (token, session) => {
    return await axios.get(`http://localhost:8888/api/appointment/checkout-status/${session}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
}




export const createOrder = async (token, programId ,date,time) => {
    const res = await axios.post(
        `http://localhost:8888/api/order/create/${programId}`, {date,time},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return res.data.data;
};

export const createOrderAppointment = async (token, appointmentId ,date,time) => {
    const res = await axios.post(
        `http://localhost:8888/api/order/create-appointment/${appointmentId}`, {date,time},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return res.data.data;
};