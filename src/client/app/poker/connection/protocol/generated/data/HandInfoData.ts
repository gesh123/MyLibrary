


import { AbstractData } from "../../core/data/AbstractData";

export class HandInfoData extends AbstractData {
	public handKind:number;
		public usedCards:number[];
		public unUsedCards:number[];
		public encodeShowHandInfoFlag:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
