
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourReenterResultData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public errorCode:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
