import useGridTableLoadData from "./hook/useGetGridTableData";
function GridTable({
    CardComponent,
    loadItemApi,
    SearchPanel,
    Pagination,
    loadItemPaginated,
    defaultLoadItem,
    pageSize,
    pageNo,
    totalElement


}) {
    const { items, fetchItems, setItems } = useGridTableLoadData(defaultLoadItem)
    return (
        <>

            <SearchPanel 
            setFunction={setItems} 
            pageNo={pageNo} 
            pageSize={pageSize} />

            <div className="
                grid
                sm:grid-cols-1 md:grid-cols-2 
                    lg:grid-cols-3 xl:grid-cols-4
                mx-auto p-4
                gap-4 
            ">
                {items && items.length > 0 ?
                    items.map((item, index) => (
                        <CardComponent item={item} key={index} />

                    )) : (<p className="transform translate-x-3/4">No items available</p>)}

            </div>

            <Pagination setItems={setItems}
                        pageSize={pageSize}
                        pageNo = {pageNo}
                        fetchFunction={loadItemPaginated}
                        totalElement={totalElement}
            />
        </>
    );
};

export default GridTable;