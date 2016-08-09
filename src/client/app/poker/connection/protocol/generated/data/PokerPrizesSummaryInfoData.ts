
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerPrizesSummaryInfoData extends AbstractData {
	public sattelitesCount:number;
		public hasGuaranteedPrizePool:boolean;
		public sattelitesVect:BinaryNetworkID[];
		public guaranteedMoney:PokerTournamentMoneyTypeData;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
