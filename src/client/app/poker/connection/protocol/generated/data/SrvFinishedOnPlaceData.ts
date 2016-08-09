


import { AbstractData } from "../../core/data/AbstractData";

export class SrvFinishedOnPlaceData extends AbstractData {
	public playerName:string;
		public franchiseID:number;
		public place:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
