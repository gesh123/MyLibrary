
import { GameTournamentPlayerFinishData } from "./GameTournamentPlayerFinishData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourPlayerFinishedData extends AbstractData {
	public finishVO:GameTournamentPlayerFinishData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
