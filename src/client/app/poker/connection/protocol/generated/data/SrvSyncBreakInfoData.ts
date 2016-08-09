


import { AbstractData } from "../../core/data/AbstractData";

export class SrvSyncBreakInfoData extends AbstractData {
	public startBreaksInfo:number;
		public periodBreaksInfo:number;
		public durationBreaksInfo:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
