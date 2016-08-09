
import { PokerShortRankData } from "./PokerShortRankData";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerTournamentPlayerInfo1Data extends AbstractData {
	public localID:number;
		public hasChips:boolean;
		public hasPrize:boolean;
		public isFinished:boolean;
		public hasRank:boolean;
		public chips:number;
		
		public prize:string;
		
		public finishedOnPlace:number;
		
		public shortRankStructure:PokerShortRankData;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
