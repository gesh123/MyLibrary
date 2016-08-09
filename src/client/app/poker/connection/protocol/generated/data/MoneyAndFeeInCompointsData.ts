


import { AbstractData } from "../../core/data/AbstractData";

export class MoneyAndFeeInCompointsData extends AbstractData {
	public moneyInCompoints:boolean;
		public feeInCompoints:boolean;
		public canConvertTB:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
