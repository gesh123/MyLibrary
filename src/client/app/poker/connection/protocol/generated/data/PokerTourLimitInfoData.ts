


import { AbstractData } from "../../core/data/AbstractData";

export class PokerTourLimitInfoData extends AbstractData {
	public ante:number;
		public bringIn:number;
		public tourAnte:number;
		public lowBet:number;
		public hiBet:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
