


import { AbstractData } from "../../core/data/AbstractData";

export class SrvDeadBetData extends AbstractData {
	public seatID:number;
		public deadBetValue:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
