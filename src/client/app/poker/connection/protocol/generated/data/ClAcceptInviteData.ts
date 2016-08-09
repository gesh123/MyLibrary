
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClAcceptInviteData extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public buyInMoney:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
