


import { AbstractData } from "../../core/data/AbstractData";

export class PokerTourMoneyChooserData extends AbstractData {
	public moneyInComps:boolean;
		public feeInComps:boolean;
		public canConvertTB:boolean;
		public isBeastFeeInComps:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
