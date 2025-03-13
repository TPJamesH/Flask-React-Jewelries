import sendHttpRequest from "../../../http_call/HttpRequest";
import JewelryUrlConfig from "../../../service_url/JewelryUrlConfig";

export default async function search(searchKey, setFunction){
    let instruction = ` `;
    if(searchKey.length != 0 ){
        instruction = `${JewelryUrlConfig.JEWELRY_SEARCH}/${searchKey}`
    }
    else{
        instruction = `${JewelryUrlConfig.JEWELRY_SERVICE_URL}/0/5`
    }

    let response = await sendHttpRequest(instruction)

    switch(response.status){
        case 200:
            setFunction(response.json)
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