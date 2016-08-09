
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClUpdateMoreToursInfoData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public breaksVersion:number;
		public limitsVersion:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
