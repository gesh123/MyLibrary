
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourPlayerPositionData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public position:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
