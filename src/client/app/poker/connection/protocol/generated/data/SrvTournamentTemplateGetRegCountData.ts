
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTournamentTemplateGetRegCountData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public pendingRegistrations:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
