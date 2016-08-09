


import { AbstractData } from "../../core/data/AbstractData";

export class UnsubscribeGameTypeData extends AbstractData {
	public subType:number;
		public gameType:number;
		public gameMasterType:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
