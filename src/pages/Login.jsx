import { useState } from "react"
import { Link } from "react-router"
import useUserStore from "../stores/userStore"
import Button from "../components/Button"
import { toast } from "react-toastify"

const userLogin = {
    email: "",
    password: "",
}

function Login() {
    const [input, setInput] = useState(userLogin)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const login = useUserStore(state => state.login)

    const hdlChange = e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlLogin = async e => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const { email, password } = input

            if (!email.trim() || !password.trim()) {
                setIsSubmitting(false)
                return toast.error("Please fill inputs Email and Password")
            }

            let data = await login(input)
            toast.success("Login successfull")

        } catch (error) {
            const errMsg = error.response?.data?.error || error.message
            toast.error(errMsg)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-slate-100 flex min-h-screen">
            <div className="pt-24 w-[50%]">
                <div className="p-6 md:px-10 lg:px-20 xl:px-[230px]">
                    <h1 className="text-4xl font-semibold text-center py-6 text-emerald-500">ยินดีต้อนรับ</h1>
                    <form onSubmit={hdlLogin}>
                        <div className="flex gap-6 flex-wrap pb-6">
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
                            <Button
                                isSubmitting={isSubmitting}
                                label="เข้าสู่ระบบ"
                            />
                        </div>
                    </form>
                    <Link className="flex justify-center">ลืมรหัสผ่าน</Link>
                    <div className="border mb-6 mt-4"></div>
                    <div className="flex justify-center">
                        <Link to="/register" className="btn btn-secondary w-full lg:max-w-[250px] text-xl">สมัครสมาชิก</Link>
                    </div>
                </div>
            </div>
            <div className="w-[50%] relative">
                <img className="absolute h-full w-full object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741773659/login_pgvs5x.jpg" />
            </div>
        </div>
    )
}

export default Login