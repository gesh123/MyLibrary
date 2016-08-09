
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayersOnTableData extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public tourNetworkIDVO:BinaryNetworkID;
		public playerLocalIDs:number[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
