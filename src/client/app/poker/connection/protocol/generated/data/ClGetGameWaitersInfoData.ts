
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClGetGameWaitersInfoData extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public infoVersion:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
