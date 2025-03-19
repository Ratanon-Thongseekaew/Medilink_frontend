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

export const checkOutStatus = async (token, session) => {
    return await axios.get(`http://localhost:8888/api/program/checkout-status/${session}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
}