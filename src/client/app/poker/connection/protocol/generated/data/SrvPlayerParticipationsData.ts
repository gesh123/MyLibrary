
import { PokerGameInfoData } from "./PokerGameInfoData";
import { PokerMyRunningTournamentData } from "./PokerMyRunningTournamentData";
import { PokerPlayerTournamentInfoData } from "./PokerPlayerTournamentInfoData";
import { PokerRegisterJPTData } from "./PokerRegisterJPTData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayerParticipationsData extends AbstractData {
	public myGamesVect:PokerGameInfoData[];
		public runningTournamentsVect:PokerMyRunningTournamentData[];
		public pendingTournamentsVect:PokerPlayerTournamentInfoData[];
		public pendingTourTemplateInfosVect:PokerRegisterJPTData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
