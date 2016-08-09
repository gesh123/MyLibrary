
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerJackpotTourRegResultData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public resultID:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
