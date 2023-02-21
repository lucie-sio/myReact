export async function api() {
	// async function getImage() {
	try {
		return await fetch(
			"https://thecatapi.com/api/images/get?format=src&type=img"
		).then((result) => {
			return result.url;
		});
	} catch (error) {
		return false;
	}
	// }
}
