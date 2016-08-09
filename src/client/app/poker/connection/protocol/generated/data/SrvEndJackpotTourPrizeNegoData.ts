
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvEndJackpotTourPrizeNegoData extends AbstractData {
	public tourStartTime:PokerTimeData;
		public dealAccepted:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
