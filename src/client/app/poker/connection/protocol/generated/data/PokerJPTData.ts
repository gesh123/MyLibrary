
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerJPTData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public tournamentName:string;
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
		
		public serverID:number;
		public networkID:number;
		public limit:number;
		public gameTypeIDShort:number;
		public lastTournamentsAverageDuration:number;
		public buyInMultipliersVect:number[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
