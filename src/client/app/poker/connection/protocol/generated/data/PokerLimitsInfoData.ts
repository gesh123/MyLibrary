


import { AbstractData } from "../../core/data/AbstractData";

export class PokerLimitsInfoData extends AbstractData {
	public level:number;
		public lowStake:number;
		public highStake:number;
		public ante:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
