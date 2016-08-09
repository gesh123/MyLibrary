


import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayerSecondsLeftToActData extends AbstractData {
	public seatID:number;
		public secondsLeft:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
