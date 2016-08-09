
import { MoneyAndFeeInCompointsData } from "./MoneyAndFeeInCompointsData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClSitDownData extends AbstractData {
	public seatID:number;
		public playerMoney:number;
		public moneyAndFeeInCompoints:MoneyAndFeeInCompointsData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
