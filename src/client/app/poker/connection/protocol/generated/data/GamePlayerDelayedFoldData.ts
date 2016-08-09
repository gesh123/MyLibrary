


import { AbstractData } from "../../core/data/AbstractData";

export class GamePlayerDelayedFoldData extends AbstractData {
	public seatID:number;
		public reason:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
