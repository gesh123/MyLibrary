
import { PokerTourUpdateQualifiersData } from "./PokerTourUpdateQualifiersData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourQualifiersData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public version:number;
		public addedToursVect:PokerTourUpdateQualifiersData[];
		public changedToursVect:PokerTourUpdateQualifiersData[];
		public removedToursVect:BinaryNetworkID[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
