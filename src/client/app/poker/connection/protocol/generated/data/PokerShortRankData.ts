


import { AbstractData } from "../../core/data/AbstractData";

export class PokerShortRankData extends AbstractData {
	public rankValue:number;
		public isNew:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
