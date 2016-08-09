
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClGetTourDetailsData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public infoVersion:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
