
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";
import { PokerTimeData } from "./PokerTimeData";
import { PokerTournamentTypeData } from "./PokerTournamentTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerTournamentData extends AbstractData {
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
		public timeParts:PokerTimeData;
		public enrolled:number;
		public maxPlayers:number;
		public minPlayers:number;
		public curLevel:number;
		public tournamentType:PokerTournamentTypeData;
		public tournamentColor:number;
		public tournamentStatus:number;
		public seatsPerTable:number;
		public tournamentTableType:number;
		public rebuysAddonsType:number;
		public tournamentSpeed:number;
		public tourVisualType:number;
		public isLocal:boolean;
		public hasTemplateID:boolean;
		public hideRanks:boolean;
		public tourPasswordProtectionType:number;
		
		public maxReenters:number;
		public reentered:number;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
