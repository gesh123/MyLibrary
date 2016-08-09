


import { AbstractData } from "../../core/data/AbstractData";

export class BetsMoneyData extends AbstractData {
	public betSeatID:number;
		public betMoney:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
