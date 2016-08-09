


import { AbstractData } from "../../core/data/AbstractData";

export class PokerTournamentMoneyTypeData extends AbstractData {
	public isZero:boolean;
		public realMoney:number;
		public compMoney:number;
		public bothNeeded:boolean;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
