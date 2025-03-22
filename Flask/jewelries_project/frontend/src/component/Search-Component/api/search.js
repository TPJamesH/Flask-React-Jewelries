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
            let arr = response.json.jewelry_list
            let i = 0
            arr.forEach((element) => {
                element.token = response.json.token[i]
                i++;
            });
            setFunction(arr);
            break
        case 500:
            setFunction([])
            console.log("Server Error")
            break;
        case 400:
            setFunction([])
            console.log("Client Error")
            break;
        case 404:
            setFunction([])
            console.log("Not Found ")
            break;
        default:
            setFunction([])
            console.log("Connection error")
    }
}