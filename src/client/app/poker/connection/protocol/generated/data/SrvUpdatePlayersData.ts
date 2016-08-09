
import { PokerTournamentPlayerInfoData } from "./PokerTournamentPlayerInfoData";
import { PokerTournamentPlayerInfo1Data } from "./PokerTournamentPlayerInfo1Data";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUpdatePlayersData extends AbstractData {
	public addedPlayerInfoVector:PokerTournamentPlayerInfoData[];
		public changedPlayerInfoVector:PokerTournamentPlayerInfo1Data[];
		public removedPlayersVect:number[];
		public playerInfoVersion:number;
		public tourNetworkIDVO:BinaryNetworkID;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
