


import { AbstractData } from "../../core/data/AbstractData";

export class SrvUserStateOnTableData extends AbstractData {
	public seatID:number;
		public notify:boolean;
		public userNameOnTable:string;
		public userGameMoney:number;
		public userGameState:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
