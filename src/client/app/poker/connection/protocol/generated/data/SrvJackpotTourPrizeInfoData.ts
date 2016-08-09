
import { PokerPrizeSchemeInfoRowData } from "./PokerPrizeSchemeInfoRowData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvJackpotTourPrizeInfoData extends AbstractData {
	public inPercent:boolean;
		public prizeSchemeInfos:PokerPrizeSchemeInfoRowData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
