
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClUnsubscribeFromQualifiersData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
