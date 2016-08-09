
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";



import { AbstractData } from "../../core/data/AbstractData";

export class GameTournamentPlayerFinishData extends AbstractData {
	public place:number;
		public kickedPlayersCount:number;
		public totalBountyAwards:PokerTournamentMoneyTypeData;
		public beastPoints:number;
		public realMoneyPrize:number;
		public canReenter:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
