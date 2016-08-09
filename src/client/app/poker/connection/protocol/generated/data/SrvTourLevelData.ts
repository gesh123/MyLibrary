
import { PokerTourLimitInfoData } from "./PokerTourLimitInfoData";
import { PokerTimeData } from "./PokerTimeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourLevelData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public currentLevel:number;
		public currentLevelLimitsInfo:PokerTourLimitInfoData;
		public lastLevel:boolean;
		public currentLevelEndDate:PokerTimeData;
		public nextLevelLimitsInfo:PokerTourLimitInfoData;
		
		public version:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
