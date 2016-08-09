
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerJackpotTourCancelRegResultData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public amount:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
