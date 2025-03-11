import sendHttpRequest from "../../../http_call/HttpRequest";
import JewelryUrlConfig from "../../../service_url/JewelryUrlConfig";

async function loadJewelryData(){
    const response = await sendHttpRequest(JewelryUrlConfig.JEWELRY_TOTAL_ELEMENT)
    if (response.status == 200) {
        return response.json.totalElement;
    } else if (response.status >= 500) {
        return "Server Error"
    } else if (response.status >= 400) {
        return "Client Error"
    }
}

export default loadJewelryData