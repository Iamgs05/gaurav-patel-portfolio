export const t = (lang, data) => {
	const result = {};
	for (const key in data) {
		result[key] = data[key]["en"];
	}
	result.t = ["en"];
	return result;
};

export const local = url => {
	return "en";
};

export const l = url => {
	return (path, lang = "en") => {
		return "/gaurav-patel-portfolio" + (path || "/");
	};
};