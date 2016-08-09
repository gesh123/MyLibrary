


import { AbstractData } from "../../core/data/AbstractData";

export class PokerPlayerStateInTournamentData extends AbstractData {
	public playerState:number;
		public reentersLeft:number;
		public buyPaidInFirstMoney:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
