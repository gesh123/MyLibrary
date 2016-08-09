
import { PokerTourTimeInfoData } from "./PokerTourTimeInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourTimesData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public version:number;
		public tourTimeInfo:PokerTourTimeInfoData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
