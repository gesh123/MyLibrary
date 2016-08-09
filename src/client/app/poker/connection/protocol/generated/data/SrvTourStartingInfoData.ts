
import { PokerPlayerTournamentInfoData } from "./PokerPlayerTournamentInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourStartingInfoData extends AbstractData {
	public tourStartingInfoVect:PokerPlayerTournamentInfoData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
