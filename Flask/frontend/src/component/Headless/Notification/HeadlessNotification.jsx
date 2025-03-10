import { useState } from 'react'

function HeadlessNotification({ children }) {
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState("")

    function showNotification(msg) {
        setShow(true)
        setMessage(msg)
    }

    function hideNotification(){
        setShow(false)
        setMessage("")
    }

    return children({
        show,
        message,
        showNotification,
        hideNotification
    })
}

export { HeadlessNotification }