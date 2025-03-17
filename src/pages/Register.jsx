import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import useUserStore from "../stores/userStore"
import { toast } from "react-toastify"
import Button from "../components/Button"

const initInput = {
    email: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    phone: "",
}

function Register() {
    const [input, setInput] = useState(initInput)
    const registerUser = useUserStore(state => state.registerUser)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    console.log(input)


    const hdlChange = e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlClearInput = () => {
        setInput(initInput)
    }

    const hdlRegister = async e => {
        e.preventDefault()
        setIsSubmitting(true)
        const { email, password, confirmpassword, firstname, lastname, phone } = input
        if (!email.trim() || !password.trim() || !confirmpassword.trim() || !firstname.trim() || !lastname.trim() || !phone.trim()) {
            setIsSubmitting(false)
            return toast.error("Please fill all input")
        }
        if (password !== confirmpassword) {
            setIsSubmitting(false)
            return toast.error("Password and Confirm Password unmatched !!!")
        }

        try {
            const rs = await registerUser(input)

            hdlClearInput()
            toast.success("Register Successful")
            
            navigate("/login")

        } catch (error) {
            console.log(error)
            const errMsg = error.response?.data?.error || error.message
            toast.error(errMsg)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-slate-100 flex min-h-screen">
            <div className="pt-16 w-[50%]">
                <div className="p-6">
                    <Link className="bg-white border rounded-full w-11 h-11 flex justify-center items-center" to="/login">
                        <ChevronLeft className="w-6 h-6" />
                    </Link>
                </div>
                <div className="p-6 md:px-10 lg:px-20 xl:px-[120px]">
                    <h1 className="text-4xl font-semibold text-center py-6 text-emerald-500">สมัครสมาชิก</h1>
                    <form onSubmit={hdlRegister}>
                        <div className="flex gap-4 py-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="input w-full bg-white"
                                name="email"
                                value={input.email}
                                onChange={hdlChange}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input w-full bg-white"
                                name="password"
                                value={input.password}
                                onChange={hdlChange}
                            />
                        </div>
                        <div className="flex gap-4 py-2">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input w-full bg-white"
                                name="confirmpassword"
                                value={input.confirmpassword}
                                onChange={hdlChange}
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="input w-full bg-white"
                                name="phone"
                                value={input.phone}
                                onChange={hdlChange}
                            />
                        </div>
                        <div className="flex gap-4 py-2">
                            <input
                                type="text"
                                placeholder="firstname"
                                className="input w-full bg-white"
                                name="firstname"
                                value={input.firstname}
                                onChange={hdlChange}
                            />
                            <input
                                type="text"
                                placeholder="lastname"
                                className="input w-full bg-white"
                                name="lastname"
                                value={input.lastname}
                                onChange={hdlChange}
                            />
                        </div>
                        <div className="mt-6"></div>
                        <Button
                            isSubmitting={isSubmitting}
                            label="สร้างบัญชีใหม่"
                         />
                    </form>
                </div>
            </div>
            <div className="w-[50%] relative">
                <img className="absolute w-full h-full object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741774066/register_w0dfyg.jpg" />
            </div>
        </div>
    )
}

export default Register