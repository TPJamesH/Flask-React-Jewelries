import GridTable from "../grid_table/GridTable";
import loadJewelryData from "./api/JwlFetchService";
import JewelryCard from "./child_component/JewelryCard";
import SearchPanel from "../Search-Component/Search";
import Pagination from "../pagination/Pagination";
import showByPage from "../pagination/api/showByPage";
import getTotalElement from "./api/getTotalElement";
export default function JewelryTable() {
    const pageSize = 5
    const pageNo = 0
    const loadItemPaginated = (pageNo, pageSize) => showByPage(pageNo, pageSize)
    const defaultLoadItem = () => loadItemPaginated(pageNo, pageSize)
    return (
        <GridTable CardComponent={JewelryCard}
            loadItemApi={loadJewelryData}
            Pagination={Pagination}
            loadItemPaginated={loadItemPaginated}
            defaultLoadItem={defaultLoadItem}
            pageSize={pageSize}
            pageNo={pageNo}
            SearchPanel={SearchPanel}
            totalElement={getTotalElement}

        />
    )
}