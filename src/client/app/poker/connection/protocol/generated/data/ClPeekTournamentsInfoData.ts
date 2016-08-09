
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClPeekTournamentsInfoData extends AbstractData {
	public tourIDsVect:BinaryNetworkID[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
