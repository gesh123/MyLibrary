
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerJPT1Data extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public hasBuyInInfo:boolean;
		public hasFeeInfo:boolean;
		public hasBountyInfo:boolean;
		public hasBeastFeeInfo:boolean;
		public pointsType:number;
		public isRealMoney:boolean;
		public buyInInfo:PokerTournamentMoneyTypeData;
		
		public feeInfo:PokerTournamentMoneyTypeData;
		
		public bountyInfo:PokerTournamentMoneyTypeData;
		
		public beastInfo:PokerTournamentMoneyTypeData;
		
		public limit:number;
		public lastTournamentsAverageDuration:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
