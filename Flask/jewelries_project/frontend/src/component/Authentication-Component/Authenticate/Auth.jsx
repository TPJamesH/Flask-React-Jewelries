import React from "react"
import { Input } from "../../Headless/Input/Input"
import { Button } from "../../Headless/Button/Button"
import useLogin from "../hook/useLogin"
import { HeadlessNotification } from "../../Headless/Notification/HeadlessNotification"
import { Notification } from 'rsuite'
import { useNavigate } from "react-router";

function Auth() {
    const navigate = useNavigate()
    const { submitUser } = useLogin()
    function handleRedirectLogin() { navigate("/dashboard") }

    return (
        <div className="flex flex-col bg-white w-full  sm:p-10 gap-8 rounded-md">
            {//      <img src={logo} className=" rounded-lg mx-auto size-48 h-auto max-[769px]:translate-y-11 max-[426px]:translate-y-11 max-[321px]:translate-y-12" />
            }
            <Input
                label="Email"
                name="email"
                type="email"
                placeholder="JohnDoe@example.com"
                required={true}
            />
            <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required={true}
            />

            <HeadlessNotification>
                {({ show, message, showNotification, hideNotification }) => (
                    <>
                        <div className="flex justify-center"> {show ?
                            <Notification type="error" header="Error" closable>
                                {message}
                            </Notification>
                            : null}
                        </div>

                        <Button type="submit"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" label="Login"
                            onClick={(e) => {
                                e.preventDefault()
                                hideNotification()
                                submitUser({ email, password }, handleRedirectLogin, showNotification);
                            }}
                        />
                    </>
                )}
            </HeadlessNotification>


        </div>
    )
}

export default Auth