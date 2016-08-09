


import { AbstractData } from "../../core/data/AbstractData";

export class ClGetHandHistoryData extends AbstractData {
	public isGameNumber:boolean;
		public data:number;
		public isTourReq:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
