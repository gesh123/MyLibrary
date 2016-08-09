
import { PokerPrizeSchemeInfoRowData } from "./PokerPrizeSchemeInfoRowData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvJackpotTourPrizeDistributionInfoData extends AbstractData {
	public buyInMultiplier:number;
		public inPercent:boolean;
		public prizeSchemeInfos:PokerPrizeSchemeInfoRowData[];
		public dealStatus:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
