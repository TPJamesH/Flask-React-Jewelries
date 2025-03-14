import { useRef } from 'react'
import addNewJewelry from '../api/addNewJewelry'

export default function useRefNewJewelry() {
    const jewelryFormRef = useRef(null)

    function constructJewelry() {
        const formData = new FormData(jewelryFormRef.current)

        const formValues = Object.fromEntries(formData.entries());
        jewelryFormRef.current.reset();
        return formValues

    }

    async function submitJewelry(e, reloadFunction) {
        e.preventDefault()
        const jewelry = constructJewelry()
        let response = await addNewJewelry(jewelry)
        if (response.status == 200) {
            reloadFunction()
        }
    }

    return {
        jewelryFormRef,
        submitJewelry
    }
}
