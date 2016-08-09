
import { PokerTournamentData } from "./PokerTournamentData";



import { AbstractData } from "../../core/data/AbstractData";

export class TourSnapshotInfoData extends AbstractData {
	public tabType:number;
		public toursInfoVOVect:PokerTournamentData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
