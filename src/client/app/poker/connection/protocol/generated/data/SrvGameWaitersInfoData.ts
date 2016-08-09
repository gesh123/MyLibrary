
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvGameWaitersInfoData extends AbstractData {
	public waitersVector:string[];
		public gameNetworkIDVO:BinaryNetworkID;
		public versionInfo:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
