
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourTableInfoData extends AbstractData {
	public gameNetworkIDVO:BinaryNetworkID;
		public subType:number;
		public gameTypeIDShort:number;
		public gameMasterType:number;
		public isRealMoney:boolean;
		public seatsCount:number;
		public gameName:string;
		public isWaitGame:boolean;
		public lowBet:number;
		public highBet:number;
		public bringIn:number;
		public tourNetworkIDVO:BinaryNetworkID;
		public gameBetType:number;
		public allowResing:boolean;
		public tourType:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
