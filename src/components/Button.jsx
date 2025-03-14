// import React from 'react'

import { LoaderCircle } from "lucide-react"

function Button(props) {
    const {isSubmitting, label} = props
  return (
    <button
        className="btn btn-primary w-full text-xl"
        disabled={isSubmitting}
    >
        {isSubmitting
            ? <div className="flex gap-2 items-center"><LoaderCircle className="animate-spin" />Loading...</div>
            : <p>{label}</p>
        }
    </button>
  )
}

export default Button