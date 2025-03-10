import useGridTableLoadData from "./hook/useGetGridTableData";
const GridTable = ({
    CardComponent,
    loadItemApi,
    NewItemModal,
    SearchPanel,
    deleteUserPanel,
    updateUserModal

}) => {
    const { items, fetchItems, setItems } = useGridTableLoadData(loadItemApi)
    return (
        <>

            < NewItemModal reloadFunction={fetchItems} />

            <SearchPanel setFunction={setItems} />

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


        </>
    );
};

export default GridTable;