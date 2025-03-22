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
    totalElement,
    AddComponent,
    DeleteComponent,
    UpdateComponent


}) {
    const { items, fetchItems, setItems } = useGridTableLoadData(defaultLoadItem)
    return (
        <>


            <SearchPanel
                setFunction={setItems}
                pageNo={pageNo}
                pageSize={pageSize} />

            <AddComponent />
            <div className="
                grid
                sm:grid-cols-1 md:grid-cols-2 
                    lg:grid-cols-3 xl:grid-cols-4
                mx-auto p-4
                gap-4 
            ">

                {items && items.length > 0 ?
                    items.map((item, index) => (
                        <CardComponent
                            item={item}
                            index={index}
                            UpdateComponent={UpdateComponent}
                            DeleteComponent={DeleteComponent}
                            reloadFunction={fetchItems}
                            setFunction={setItems}
                        />

                    )) : (<p className="transform translate-x-3/4">No items available</p>)}

            </div>

            <Pagination setItems={setItems}
                pageSize={pageSize}
                pageNo={pageNo}
                fetchFunction={loadItemPaginated}
                totalElement={totalElement}
            />
        </>
    );
};

export default GridTable;