
import { PokerTournamentData } from "./PokerTournamentData";
import { PokerTournamentDetailsData } from "./PokerTournamentDetailsData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class Info1Data extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public subType:number;
		public gameTypeIDShort:number;
		public gameMasterType:number;
		public isRealMoneyTable:boolean;
		public maxPlayers:number;
		public gameName:string;
		public isWaitGame:boolean;
		public lowBet:number;
		public highBet:number;
		public bringIn:number;
		public tourNetworkIDVO:BinaryNetworkID;
		public gameBetType:number;
		public allowResign:boolean;
		public tourVO:PokerTournamentData;
		public tourTabType:number;
		public tourDetailsVO:PokerTournamentDetailsData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
