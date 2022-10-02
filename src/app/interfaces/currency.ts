export interface StringNumberPair {
	[key: string]: number;
}
export interface CurrencyResponse {
	base: string,
	date: string,
	motd: Object,
	rates: StringNumberPair,
	success: boolean
}