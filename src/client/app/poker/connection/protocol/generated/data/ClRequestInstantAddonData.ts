
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClRequestInstantAddonData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public tourMoneyPref:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
