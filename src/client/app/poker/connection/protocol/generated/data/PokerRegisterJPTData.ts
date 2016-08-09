
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerRegisterJPTData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public count:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
