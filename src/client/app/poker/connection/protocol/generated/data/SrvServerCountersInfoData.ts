


import { AbstractData } from "../../core/data/AbstractData";

export class SrvServerCountersInfoData extends AbstractData {
	public playersOnActiveTablesIn2Bytes:boolean;
		public empty:boolean;
		public activeTablesIn2Bytes:boolean;
		public totalPlayersIn2Bytes:boolean;
		public activeTables:number;
		
		
		public totalPlayers:number;
		
		
		public activePlayers:number;
		
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
