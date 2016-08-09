
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClSetAutoRebuysData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public rebuysCount:number;
		public tourMoneyPref:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
