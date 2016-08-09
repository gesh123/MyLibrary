
import { PokerPrizeSchemeInfoRowData } from "./PokerPrizeSchemeInfoRowData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUpdateMoreToursPrizesInfoData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public requestedPlayerLimit:number;
		public inPercent:boolean;
		public prizeSchemeInfos:PokerPrizeSchemeInfoRowData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
