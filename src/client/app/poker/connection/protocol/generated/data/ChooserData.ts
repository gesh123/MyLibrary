


import { AbstractData } from "../../core/data/AbstractData";

export class ChooserData extends AbstractData {
	public moneyInCompoints:boolean;
		public feeInCompoints:boolean;
		public canConvertTB:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
