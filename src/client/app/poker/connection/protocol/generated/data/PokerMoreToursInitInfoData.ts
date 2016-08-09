
import { PokerBreaksInfoData } from "./PokerBreaksInfoData";
import { PokerLimitsInfoData } from "./PokerLimitsInfoData";
import { PokerPrizeSchemeInfoRowData } from "./PokerPrizeSchemeInfoRowData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerMoreToursInitInfoData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public breaksVersion:number;
		public limitsVersion:number;
		public breaksInfo:PokerBreaksInfoData;
		public limitsInfos:PokerLimitsInfoData[];
		public inPercent:boolean;
		public prizeSchemeInfos:PokerPrizeSchemeInfoRowData[];
		public playerLimitsVec:number[];
		public schemePlayerLimit:number;
		public startingChips:number;
		public minPlayers:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
