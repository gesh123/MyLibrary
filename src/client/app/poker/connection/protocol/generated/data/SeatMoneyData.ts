


import { AbstractData } from "../../core/data/AbstractData";

export class SeatMoneyData extends AbstractData {
	public winSeatID:number;
		public winMoney:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
