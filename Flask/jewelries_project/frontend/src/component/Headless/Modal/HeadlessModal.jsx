import { useState } from 'react'

function HeadlessModal({ children, ...props }) {
    const [show, setShow] = useState(false)


    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    return children({
        show,
        showModal,
        hideModal,
        ...props
    })
}

export { HeadlessModal }