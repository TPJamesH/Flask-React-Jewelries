import { useState, useEffect } from 'react';

const usePagination = ({ 
    fetchData, 
    pageSize,
    pageNo, 
    setItems, 
    totalElement }) => {

    const [currentPage, setCurrentPage] = useState(pageNo);
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        const loadPage = async () => {
            const size = await totalElement()
        
            const response = await fetchData((currentPage * pageSize) - pageSize, pageSize);
            var arr = []
            for (let i = 0; i < response.length; i++) {
                arr.push(response[i])
            }
            setItems(arr)
            setTotalItems(size)
        };
        loadPage();
    }, [currentPage, pageSize, fetchData, setItems])

    const nextPage = () => {
        if (currentPage !== pageSize - 1) {
            setCurrentPage(currentPage + 1)
        }
    };

    const prevPage = () => {
        if (currentPage !== 0) {
            setCurrentPage(currentPage - 1)
        }
    };

    const setPage = (pageNo) => { setCurrentPage(pageNo) }

    return { currentPage, nextPage, prevPage, setPage, totalItems }

}

export default usePagination