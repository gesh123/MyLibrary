


import { AbstractData } from "../../core/data/AbstractData";

export class PokerBreaksInfoData extends AbstractData {
	public periodBreaksInfo:number;
		public durationBreaksInfo:number;
		public startBreaksInfo:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
