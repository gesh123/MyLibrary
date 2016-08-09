


import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourCountersInfoData extends AbstractData {
	public playersOnActiveTournamentsIn2Bytes:boolean;
		public activeTournamentsIn2Bytes:boolean;
		public totalPlayersIn2Bytes:boolean;
		public activeTournaments:number;
		
		
		public totalPlayers:number;
		
		
		public activePlayers:number;
		
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
