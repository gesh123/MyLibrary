
import { PokerTimeData } from "./PokerTimeData";
import { PokerPrizeSchemeInfoRowData } from "./PokerPrizeSchemeInfoRowData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvStartJackpotTourPrizeNegoData extends AbstractData {
	public endTime:PokerTimeData;
		public inPercent:boolean;
		public prizeSchemeInfos:PokerPrizeSchemeInfoRowData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
