
import { PokerPrizeSchemeInfoRowData } from "./PokerPrizeSchemeInfoRowData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUpdatePrizeDescrData extends AbstractData {
	public inPercent:boolean;
		public prizeSchemeInfos:PokerPrizeSchemeInfoRowData[];
		public tourNetworkIDVO:BinaryNetworkID;
		public prizeVersion:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
