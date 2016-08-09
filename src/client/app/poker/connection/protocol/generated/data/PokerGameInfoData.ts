
import { PokerShortRankData } from "./PokerShortRankData";
import { PokerTournamentTypeData } from "./PokerTournamentTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerGameInfoData extends AbstractData {
	public numPlayers:number;
		public gameName:string;
		public gameNetworkIDVO:BinaryNetworkID;
		public gameTypeIDShort:number;
		public maxPlayers:number;
		public isRealMoneyTable:boolean;
		public lowBet:number;
		public highBet:number;
		public ante:number;
		public bringIn:number;
		public minStartMoney:number;
		public maxStartMoney:number;
		public gameBetType:number;
		public secPlayerCantReturnLessMoney:number;
		public isLocal:boolean;
		public isHwEnabled:boolean;
		public shortRankStructure:PokerShortRankData;
		public serverID:number;
		public networkID:number;
		public averagePot:number;
		public waitingPlayers:number;
		public playersFlop:number;
		public gamesPerHour:number;
		public tournamentType:PokerTournamentTypeData;
		public tourNetworkIDVO:BinaryNetworkID;
		public langID:number;
		public hideRanks:boolean;
		public badBeatEnabled:boolean;
		public rakeRaceEnabled:boolean;
		public perHandCap:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
