
import { PokerPrizePoolInfoData } from "./PokerPrizePoolInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class PlayerTournamentViewData extends AbstractData {
	public playersCount:number;
		public position:number;
		public averageChips:number;
		public smallestStack:number;
		public prizePoolVO:PokerPrizePoolInfoData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
