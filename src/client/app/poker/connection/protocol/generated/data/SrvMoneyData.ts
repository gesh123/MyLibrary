
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvMoneyData extends AbstractData {
	public minStartMoney:number;
		public maxStartMoney:number;
		public playerBalance:number;
		public playerTableMoney:number;
		public hasRestrictions:boolean;
		public timeRestriction:PokerTimeData;
		public moneyRestriction:number;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
