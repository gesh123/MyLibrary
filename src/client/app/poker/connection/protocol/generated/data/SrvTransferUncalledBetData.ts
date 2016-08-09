


import { AbstractData } from "../../core/data/AbstractData";

export class SrvTransferUncalledBetData extends AbstractData {
	public seatID:number;
		public uncalledBet:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
