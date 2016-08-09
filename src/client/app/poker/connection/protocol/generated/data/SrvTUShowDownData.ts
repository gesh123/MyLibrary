
import { VisibleCardData } from "./VisibleCardData";
import { SeatMoneyData } from "./SeatMoneyData";
import { BetsMoneyData } from "./BetsMoneyData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTUShowDownData extends AbstractData {
	public seatID:number;
		public notify:boolean;
		public visibleCards:VisibleCardData[];
		public wins:SeatMoneyData[];
		public bets:BetsMoneyData[];
		public casinoProfit:number;
		public bbjFee:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
