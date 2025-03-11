import HOST_URL from "./AppUrlConfig";

const JEWELRY_SERVICE_URL = `${HOST_URL}/jewelry` //add,delete, and pagination will use this URL

const JEWELRY_SERVICE_GETALL = `${JEWELRY_SERVICE_URL}/get_all`
const JEWELRY_SEARCH = `${JEWELRY_SERVICE_URL}/search`

export default {JEWELRY_SERVICE_URL, JEWELRY_SERVICE_GETALL, JEWELRY_SEARCH}

