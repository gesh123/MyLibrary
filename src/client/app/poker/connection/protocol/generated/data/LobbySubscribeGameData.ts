


import { AbstractData } from "../../core/data/AbstractData";

export class LobbySubscribeGameData extends AbstractData {
	public version:number;
		public subType:number;
		public gameType:number;
		public gameMasterType:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
