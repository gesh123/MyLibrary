
import { GameBetTypeData } from "./GameBetTypeData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClAddGlobalWaitListData extends AbstractData {
	public gameBetType:GameBetTypeData;
		public lowBet:number;
		public highBet:number;
		public minPlayers:number;
		public maxPlayers:number;
		public betType:number;
		public realMoney:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
