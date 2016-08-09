
import { PokerPrizeSchemeInfoRowData } from "./PokerPrizeSchemeInfoRowData";
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvJackpotTourPrizeNegoInProgressData extends AbstractData {
	public canVote:boolean;
		public votedPlayersCount:number;
		public inPercent:boolean;
		public prizeSchemeInfos:PokerPrizeSchemeInfoRowData[];
		public endTime:PokerTimeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
