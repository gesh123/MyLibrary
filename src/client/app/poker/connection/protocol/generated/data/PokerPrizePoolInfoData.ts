
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerPrizePoolInfoData extends AbstractData {
	public amount:PokerTournamentMoneyTypeData;
		public tourMoneyType:number;
		public isRealMoney:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
