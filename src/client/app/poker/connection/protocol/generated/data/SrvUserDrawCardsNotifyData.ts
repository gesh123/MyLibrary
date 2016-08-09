


import { AbstractData } from "../../core/data/AbstractData";

export class SrvUserDrawCardsNotifyData extends AbstractData {
	public seatID:number;
		public cardsCount:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
