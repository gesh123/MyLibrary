
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClExtraChipsPrefChangedData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public tourMoneyPref:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
