
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourSmallestStackData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public smallestStack:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
