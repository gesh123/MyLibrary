
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvRemainingUnitsTillTourEndData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public remainingUnits:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
