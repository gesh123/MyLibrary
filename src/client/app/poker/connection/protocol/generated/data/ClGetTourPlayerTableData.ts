
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClGetTourPlayerTableData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public playerID:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
