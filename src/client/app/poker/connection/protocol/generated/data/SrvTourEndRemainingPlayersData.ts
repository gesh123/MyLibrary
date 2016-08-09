


import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourEndRemainingPlayersData extends AbstractData {
	public playersLeft:number;
		public playersTotal:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
