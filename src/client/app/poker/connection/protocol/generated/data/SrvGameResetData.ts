


import { AbstractData } from "../../core/data/AbstractData";

export class SrvGameResetData extends AbstractData {
	public resetToRound:number;
		public roundBeforeReset:number;
		public totalDeductions:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
