import { useState } from "react"
import { Link, useNavigate } from "react-router"
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
    const navigate = useNavigate()

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
                return toast.error("Please fill in your email and password")
            }

            let data = await login(input)
            toast.success("Login successful")
            navigate("/")

        } catch (error) {
            let errMsg;
            if (error.response) {
                errMsg = error.response.data?.message || 
                        `Error: ${error.response.status} - ${error.response.statusText}`;
            } else {
                errMsg = error.message || "Login failed";
            }
            toast.error(errMsg);
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-slate-100 flex min-h-screen">
            <div className="pt-24 w-[100%] md:w-[50%]">
                <div className="p-6 md:px-10 lg:px-20 xl:px-[230px]">
                    <div className="w-full flex justify-center">
                        <img 
                            src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741941112/yfg8i6drbfqauvark2rl.png"
                            className='w-[220px]'
                        />
                    </div>
                    <h1 className="text-3xl font-semibold text-lef py-6 text-emerald-500">Login</h1>
                    <form onSubmit={hdlLogin}>
                        <div className="flex gap-4 flex-wrap pb-6">
                            <label className="input bg-white w-full">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                                <input 
                                    type="email"
                                    placeholder="Email"
                                    className="input w-full bg-white"
                                    name="email"
                                    value={input.email}
                                    onChange={hdlChange}
                                />
                            </label>
                            <label className="input bg-white w-full">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                                <input 
                                    type="password" 
                                    placeholder="Password"
                                    className="input w-full bg-white"
                                    name="password"
                                    value={input.password}
                                    onChange={hdlChange}
                                />
                            </label>
                            <div className="flex w-full justify-end">
                                <a href="#" className="text-sm text-gray-400 hover:text-gray-300 cursor-pointer">Forgot Password ?</a>
                            </div>
                            <Button
                                isSubmitting={isSubmitting}
                                label="เข้าสู่ระบบ"
                            />
                        </div>
                    </form>
                    <div className="flex items-center mb-6 mt-2">
                        <div className="flex-grow border-t border-gray-700"></div>
                        <span className="mx-2 text-gray-400">Login with social accounts</span>
                        <div className="flex-grow border-t border-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-2xl text-white hover:text-gray-300"><img className="w-8" src="https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/iconfinder-new-google-favicon-682665.png" alt="" /></a>
                        <a href="#" className="text-2xl text-white hover:text-gray-300"><img className="w-8" src="https://lifelongportal.nrru.ac.th/assets/logos/fb_icon.png" alt="" /></a>
                        <a href="#" className="text-2xl text-white hover:text-gray-300"><img className="w-8" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-gray-400">Don't have an account? <a href="/register" className="text-emerald-400 hover:underline">Sign up</a></p>
                    </div>
                </div>
                <div className="md:hidden h-[400px] w-full pt-12">
                    <img className="h-full w-full object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741773659/login_pgvs5x.jpg" />
                </div>
            </div>
            <div className="hidden md:flex md:w-[50%] relative">
                <img className="absolute h-full w-full object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741773659/login_pgvs5x.jpg" />
            </div>
        </div>
    )
}

export default Login