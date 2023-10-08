function formDataToJson(formData: FormData): Record<any, any> {
	const json: Record<string, string> = {};

	formData.forEach((value, key) => {
		json[key] = value.toString();
	});

	return json;
}

export { formDataToJson };
