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
            const page_validation = Math.abs(currentPage * pageSize - pageSize)
            if (page_validation < size) {
                const response = await fetchData(page_validation, pageSize);
                var arr = []
                for (let i = 0; i < response.length; i++) {
                    arr.push(response[i])
                }
                setItems(arr)
                setTotalItems(size)
            }
        };
        loadPage();
    }, [currentPage, pageSize, fetchData, setItems])

    const nextPage = () => {

        if (currentPage < Math.ceil(totalItems / pageSize) - 1) {
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