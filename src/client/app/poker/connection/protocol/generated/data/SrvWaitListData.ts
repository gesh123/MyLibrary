
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvWaitListData extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public reserveID:string;
		public serverID:number;
		public networkID:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
