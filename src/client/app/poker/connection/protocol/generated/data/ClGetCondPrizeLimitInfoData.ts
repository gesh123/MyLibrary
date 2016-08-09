
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClGetCondPrizeLimitInfoData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public lowPlrsLimit:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
