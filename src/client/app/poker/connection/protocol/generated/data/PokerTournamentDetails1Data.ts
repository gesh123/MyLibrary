
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";
import { PokerTourTimeInfoData } from "./PokerTourTimeInfoData";
import { PokerPrizesSummaryInfoData } from "./PokerPrizesSummaryInfoData";
import { PokerLevelsInfoData } from "./PokerLevelsInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerTournamentDetails1Data extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public infoVersion:number;
		public hasValidRebuyInfo:boolean;
		public hasValidAddonInfo:boolean;
		public hasValidReenterInfo:boolean;
		public rebuyAmount:PokerTournamentMoneyTypeData;
		public rebuyChips:number;
		
		public addOnAmount:PokerTournamentMoneyTypeData;
		public addOnChips:number;
		
		public reenterAmount:number;
		public reenterBounty:number;
		public reenterFee:number;
		public reenterBeastFee:number;
		public reenterChips:number;
		
		public startingChips:number;
		public tourTimeInfo:PokerTourTimeInfoData;
		public stakeFirst:number;
		public stakeSecond:number;
		public stakeChange:number;
		public maxRebuys:number;
		public rebuysUntilStake:number;
		public addonAfterStake:number;
		public numberOfWinners:number;
		public bounty:PokerTournamentMoneyTypeData;
		public endUnits:number;
		public prizesSummaryInfoVO:PokerPrizesSummaryInfoData;
		public useSyncBreaks:boolean;
		public levelsInfoVO:PokerLevelsInfoData;
		public shortComment:string;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
