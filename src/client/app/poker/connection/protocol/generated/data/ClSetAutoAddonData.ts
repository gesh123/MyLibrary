
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClSetAutoAddonData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public addonCount:number;
		public tourMoneyPref:number;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
