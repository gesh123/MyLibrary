
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClSubscribeForQualifiersData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public version:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
