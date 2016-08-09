
import { PokerTableInfoData } from "./PokerTableInfoData";
import { PokerTournamentPlayerInfoData } from "./PokerTournamentPlayerInfoData";
import { PokerTournamentPlayerInfo1Data } from "./PokerTournamentPlayerInfo1Data";
import { PokerPrizeSchemeInfoRowData } from "./PokerPrizeSchemeInfoRowData";
import { PokerTourTimeInfoData } from "./PokerTourTimeInfoData";
import { PokerTourLimitInfoData } from "./PokerTourLimitInfoData";
import { PokerTimeData } from "./PokerTimeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvMultiTourInitializeData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public pokerTableInfoVect:PokerTableInfoData[];
		public versionPokerTableInfo:number;
		public addedPlayerInfoVector:PokerTournamentPlayerInfoData[];
		public changedPlayerInfoVector:PokerTournamentPlayerInfo1Data[];
		public removedPlayersVect:number[];
		public versionPlayerInfoVector:number;
		public inPercent:boolean;
		public prizeSchemeInfos:PokerPrizeSchemeInfoRowData[];
		public empty:number;
		public isCompMoney:boolean;
		public isRealMoney:boolean;
		public hasReenters:boolean;
		public hasAddons:boolean;
		public hasRebuys:boolean;
		public rebuys:number;
		
		public addons:number;
		
		public reenters:number;
		
		public tourTimeInfo:PokerTourTimeInfoData;
		public currentLevel:number;
		public currentLevelLimitInfo:PokerTourLimitInfoData;
		public isCurrentLevelLast:boolean;
		public currentLevelEndDate:PokerTimeData;
		public nextLevelLimitInfo:PokerTourLimitInfoData;
		
		public minPlayers:number;
		public lateRegistrationLevel:number;
		public remainingUnits:number;
		public winnerPlacesCount:number;
		public longComment:string;
		public useSyncBreak:boolean;
		public convertToMoney:boolean;
		public status:number;
		public prizeVersion:number;
		public incomesVersion:number;
		public timesVersion:number;
		public longCommentVersion:number;
		public levelVersion:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
