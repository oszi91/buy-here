export const scrollToLastError = errors => {
	const elements = Object.keys(errors)
		.map(name => document.getElementsByName(name)[0])
		.filter(el => !!el);
	elements.sort((a, b) => b.scrollHeight - a.scrollHeight);
	return elements[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
