


import { AbstractData } from "../../core/data/AbstractData";

export class PokerServerLocationData extends AbstractData {
	public ID:number;
		public location:string;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
