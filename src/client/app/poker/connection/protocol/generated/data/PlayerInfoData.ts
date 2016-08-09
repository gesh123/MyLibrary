


import { AbstractData } from "../../core/data/AbstractData";

export class PlayerInfoData extends AbstractData {
	public seatID:number;
		public money:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
