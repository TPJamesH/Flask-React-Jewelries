import sendHttpRequest from "../../../http_call/HttpRequest";
import JewelryUrlConfig from "../../../service_url/JewelryUrlConfig";

export default async function deleteJewelry(token) {
    let response = await sendHttpRequest(
        JewelryUrlConfig.JEWELRY_SERVICE_URL+`/${token}`,
        "DELETE")
    return response
}

