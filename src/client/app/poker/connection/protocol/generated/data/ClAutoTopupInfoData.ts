


import { AbstractData } from "../../core/data/AbstractData";

export class ClAutoTopupInfoData extends AbstractData {
	public enabled:boolean;
		public topupType:number;
		public numBigBlinds:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
