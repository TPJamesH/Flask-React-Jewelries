import sendHttpRequest from "../../../http_call/HttpRequest";
import JewelryUrlConfig from "../../../service_url/JewelryUrlConfig";

 async function updateJewelry(token,updateJewelry) {
    let response = await sendHttpRequest(
        JewelryUrlConfig.JEWELRY_SERVICE_URL + `/${token}`,
        "PUT",
        JSON.stringify(updateJewelry)
    )
    return response
}


export default updateJewelry