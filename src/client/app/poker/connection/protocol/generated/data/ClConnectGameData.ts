
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClConnectGameData extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public langID:number;
		public identificationType:number;
		public password:string;
		
		public localIP:string;
		public externalIP:string;
		public franchiseID:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
