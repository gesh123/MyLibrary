
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClGetGameInfoData extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public gameInfoVersion:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
