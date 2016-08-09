


import { AbstractData } from "../../core/data/AbstractData";

export class PokerExtraMoneyResponseData extends AbstractData {
	public rebuyLeft:number;
		public reason:number;
		public requestType:number;
		public conditionInfo:boolean;
		public successfulRebuys:number;
		public unsuccessfulRebuys:number;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
