import sendHttpRequest from "../../../http_call/HttpRequest";
import JewelryUrlConfig from "../../../service_url/JewelryUrlConfig";
//NOTE: WE ARE USING KEY-BASED PAGINATION
export default async function showByPage(id, pageSize) {
    console.log("Id: " + id)
    let jewelryResponse = await sendHttpRequest(
        JewelryUrlConfig.JEWELRY_SERVICE_URL + `/${id}/${pageSize}`
    )

    let arr = jewelryResponse.json.jewelry_list
    let i = 0
    arr.forEach((element) => {
        element.token = jewelryResponse.json.token[i];
        i++;
    });
    return arr

}
