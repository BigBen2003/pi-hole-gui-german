function formatNumber(number) {
	res = number.replace(/\./g, "{Kommata}");
	number = res;
	res = number.replace(/,/g, "{Tausend}");
	number = res;
	res = number.replace(/{Kommata}/g, ",");
	number = res;
	res = number.replace(/{Tausend}/g, ".");
	return res;
}
