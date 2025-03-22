import { useRef } from 'react'
import deleteJewelry from '../api/deleteJewelry'

export default function useRefDeleteJewelry() {
    const jewelryFormRef = useRef(null)

    async function DeleteJewelry(token, reloadFunction, setItems) {
        let response = await deleteJewelry(token);
        if (response.status == 200) {
            reloadFunction()
        }
    }

    return {
        jewelryFormRef,
        DeleteJewelry
    }
}
