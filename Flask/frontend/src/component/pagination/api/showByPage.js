import sendHttpRequest from "../../../http_call/HttpRequest";
import JewelryUrlConfig from "../../../service_url/JewelryUrlConfig";
//NOTE: WE ARE USING KEY-BASED PAGINATION
async function showByPage(id, pageSize) {
    let jewelryResponse = await sendHttpRequest(
        JewelryUrlConfig.JEWELRY_SERVICE_URL + `/${id}/${pageSize}`
    )

    let arr = jewelryResponse.json.jewelry_list
    let i = 0
    arr.forEach((element) => {
        element.token = jewelryResponse.json.tokens[i];
        i++;
    });
    return arr

}
