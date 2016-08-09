
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUpdateRebuysCountData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public count:number;
		public version:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
