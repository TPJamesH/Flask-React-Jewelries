import sendHttpRequest from "../../../http_call/HttpRequest";
import JewelryUrlConfig from "../../../service_url/JewelryUrlConfig";

export default async function addNewJewelry(newJewelry) {
    let response = await sendHttpRequest(
        JewelryUrlConfig.JEWELRY_SERVICE_URL,
        "POST",
        JSON.stringify(newJewelry)
    )
    return response
}

