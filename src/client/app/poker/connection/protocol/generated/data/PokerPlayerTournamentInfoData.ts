
import { PokerTimeData } from "./PokerTimeData";
import { PokerPlayerStateInTournamentData } from "./PokerPlayerStateInTournamentData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerPlayerTournamentInfoData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public name:string;
		public startDate:PokerTimeData;
		public playerStateInTour:PokerPlayerStateInTournamentData;
		public isJackpotTournament:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
