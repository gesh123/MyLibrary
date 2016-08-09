
import { PokerPlayerTournamentInfoData } from "./PokerPlayerTournamentInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayerTourInfoData extends AbstractData {
	public playerTourInfoVO:PokerPlayerTournamentInfoData;
		public networkID:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
