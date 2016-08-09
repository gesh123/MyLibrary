
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUpdateWinnerPlacesCountData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public winnerPlacesCount:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
