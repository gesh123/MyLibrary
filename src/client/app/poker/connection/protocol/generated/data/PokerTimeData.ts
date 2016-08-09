


import { AbstractData } from "../../core/data/AbstractData";

export class PokerTimeData extends AbstractData {
	public highTimeStatus:number;
		public highPart:number;
		public lowPart:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
