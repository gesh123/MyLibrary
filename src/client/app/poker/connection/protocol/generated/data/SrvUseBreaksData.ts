
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUseBreaksData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public useBreaks:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
