
import { PokerTimeData } from "./PokerTimeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourStartTimeChangeData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public networkID:number;
		public startTime:PokerTimeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
