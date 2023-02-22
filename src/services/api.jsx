export async function api() {
    try {
        // "https://thecatapi.com/api/images/get?format=src&type=img"

        const apiFormat = "src";
        const apiType = "img";
        const apiKey =
            "live_yuV4cEQtTy1zG1WwqC2VkWFITklseg6NW1TgTnRcnr3pGBwnW3yhtJyP1MlYZ9JF";

        return await fetch(
            `https://thecatapi.com/api/images/get?
			format=${apiFormat}&
			type=${apiType}&
			api_key=${apiKey}`
        )
            .then((result) => {
                return result.url;
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
    } catch (error) {
        return false;
    }
}
