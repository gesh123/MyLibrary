
import { PokerTournamentData } from "./PokerTournamentData";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerTourUpdateQualifiersData extends AbstractData {
	public tabType:number;
		public toursVect:PokerTournamentData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
