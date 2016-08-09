
import { PokerJPTData } from "./PokerJPTData";
import { PokerJPT1Data } from "./PokerJPT1Data";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTournamentTemplatesInfoData extends AbstractData {
	public version:number;
		public addedVect:PokerJPTData[];
		public changedVect:PokerJPT1Data[];
		public removedVect:BinaryNetworkID[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
