


import { AbstractData } from "../../core/data/AbstractData";

export class SrvAwayPlayerPickedUpData extends AbstractData {
	public playerName:string;
		public franchiseID:number;
		public minutesAway:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
