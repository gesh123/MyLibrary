
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvAddToWaitListErrorData extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
