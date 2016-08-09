
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvLateRegLevelData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public level:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
