


import { AbstractData } from "../../core/data/AbstractData";

export class PokerPrizeSchemeInfoRowData extends AbstractData {
	public place:number;
		public type:number;
		public value:number;
		public name:string;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
