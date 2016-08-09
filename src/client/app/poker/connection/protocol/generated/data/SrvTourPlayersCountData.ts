
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourPlayersCountData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public playersCount:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
