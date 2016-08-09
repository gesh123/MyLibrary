
import { PokerTournamentData } from "./PokerTournamentData";
import { ShortTourInfoData } from "./ShortTourInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTournamentsInfoData extends AbstractData {
	public version:number;
		public newToursVect:PokerTournamentData[];
		public changedToursVect:ShortTourInfoData[];
		public removedToursVect:BinaryNetworkID[];
		public tourTabsType:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
