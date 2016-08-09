


import { AbstractData } from "../../core/data/AbstractData";

export class GameSrvNewsMessageData extends AbstractData {
	public appearanceType:number;
		public message:string;
		public sender:string;
		public timeout:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
