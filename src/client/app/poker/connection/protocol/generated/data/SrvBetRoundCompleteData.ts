
import { PotInfoData } from "./PotInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvBetRoundCompleteData extends AbstractData {
	public round:number;
		public potInfo:PotInfoData;
		public showCheckBoxes:boolean;
		public dummyBits1:number;
		public moveChips:boolean;
		public rake:number;
		public jackpotFee:number;
		public allowedBet:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
