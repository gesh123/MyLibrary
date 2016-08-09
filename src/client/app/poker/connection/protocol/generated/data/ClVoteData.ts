
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClVoteData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public vote:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
