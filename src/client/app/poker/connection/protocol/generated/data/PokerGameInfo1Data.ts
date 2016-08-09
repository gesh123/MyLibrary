
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerGameInfo1Data extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public gameTypeIDShort:number;
		public numPlayers:number;
		public isLocal:boolean;
		public isHwEnabled:boolean;
		public averagePot:number;
		public waitingPlayers:number;
		public playersFlop:number;
		public gamesPerHour:number;
		public hideRanks:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
