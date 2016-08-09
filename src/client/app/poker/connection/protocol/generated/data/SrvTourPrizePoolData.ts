
import { PokerPrizePoolInfoData } from "./PokerPrizePoolInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourPrizePoolData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public prizePoolVO:PokerPrizePoolInfoData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
