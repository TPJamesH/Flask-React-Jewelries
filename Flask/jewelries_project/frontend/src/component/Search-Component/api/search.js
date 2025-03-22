import sendHttpRequest from "../../../http_call/HttpRequest";
import JewelryUrlConfig from "../../../service_url/JewelryUrlConfig";

export default async function search(pageNo, pageSize, searchKey, setFunction) {
    let instruction = ` `;
    if (searchKey.length != 0) {
        instruction = `${JewelryUrlConfig.JEWELRY_SEARCH}/${pageNo}/${pageSize}/${searchKey}`
    }
    else {
        //default pagination
        instruction = `${JewelryUrlConfig.JEWELRY_SERVICE_URL}/0/${pageSize}`
    }

    let response = await sendHttpRequest(instruction)

    switch (response.status) {
        case 200:
            let arr = response.json.customers
            let i = 0
            arr.forEach((element) => {
                element.token = response.json.tokens[i]
                i++;
            });
            setFunction(arr);
            break
        case 500:
            return "Server Error"
            break
        case 400:
            return "Client Error"
            break
        default:
            return "Connection error"
    }
}