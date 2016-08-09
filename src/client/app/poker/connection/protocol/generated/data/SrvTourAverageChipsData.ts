
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourAverageChipsData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public averageChips:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
