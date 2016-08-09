
import { PokerTourMoneyChooserData } from "./PokerTourMoneyChooserData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClRequestInstantRebuyData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public rebuysCount:number;
		public compsChoice:PokerTourMoneyChooserData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
