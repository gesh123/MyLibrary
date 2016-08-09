


import { AbstractData } from "../../core/data/AbstractData";

export class SrvUpdateTimeBankConfigData extends AbstractData {
	public timeBankReplenishmentHandCount:number;
		public timeBankReplenishmentAmount:number;
		public timeBankAmount:number;
		public timeBankMaxAmount:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
