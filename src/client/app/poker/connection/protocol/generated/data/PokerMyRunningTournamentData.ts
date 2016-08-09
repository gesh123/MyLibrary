
import { PokerTournamentData } from "./PokerTournamentData";
import { PokerTournamentDetailsData } from "./PokerTournamentDetailsData";
import { PokerPlayerStateInTournamentData } from "./PokerPlayerStateInTournamentData";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerMyRunningTournamentData extends AbstractData {
	public tourTabType:number;
		public tournamentVO:PokerTournamentData;
		public tournamentDetailsInfo:PokerTournamentDetailsData;
		public playerStateInTour:PokerPlayerStateInTournamentData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
