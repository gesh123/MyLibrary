
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";
import { PokerTimeData } from "./PokerTimeData";
import { PokerTournamentTypeData } from "./PokerTournamentTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ShortTourInfoData extends AbstractData {
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
		public timeParts:PokerTimeData;
		public enrolled:number;
		public maxPlayers:number;
		public minPlayers:number;
		public curLevel:number;
		public tournamentStatus:number;
		public seatsPerTable:number;
		public tournamentType:PokerTournamentTypeData;
		public tournamentColor:number;
		public maxReenters:number;
		public reentered:number;
		
		public hideRanks:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
