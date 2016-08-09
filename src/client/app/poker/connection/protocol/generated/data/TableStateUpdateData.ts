


import { AbstractData } from "../../core/data/AbstractData";

export class TableStateUpdateData extends AbstractData {
	public seatID:number;
		public notify:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
