


import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourEndRemainingTimeData extends AbstractData {
	public timeLeft:number;
		public timeTotal:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
