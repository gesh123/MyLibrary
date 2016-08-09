
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerTableInfoData extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public playersCount:number;
		public mostChips:number;
		public leastChips:number;
		public tableIndex:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
