


import { AbstractData } from "../../core/data/AbstractData";

export class SrvAltCurrencyRateData extends AbstractData {
	public currencyName:string;
		public rate:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
