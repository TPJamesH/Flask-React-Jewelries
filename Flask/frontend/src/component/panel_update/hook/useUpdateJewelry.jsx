import { useRef } from 'react'
import updateJewelry from '../api/updateJewelry'
export default function useRefUpdateJewelry() {
    const jewelryFormRef = useRef(null)

    function constructJewelry() {
        const formData = new FormData(jewelryFormRef.current)

        const formValues = Object.fromEntries(formData.entries());
        jewelryFormRef.current.reset();
        return formValues

    }

    async function submitJewelry(e, token,reloadFunction) {
        e.preventDefault() 
        const jewelry = constructJewelry()
        let response = await updateJewelry(token,jewelry)
        if (response.status == 200) {
            reloadFunction()
        }
    }

    return {
        jewelryFormRef,
        submitJewelry
    }
}
