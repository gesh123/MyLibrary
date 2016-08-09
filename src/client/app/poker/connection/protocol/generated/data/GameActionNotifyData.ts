


import { AbstractData } from "../../core/data/AbstractData";

export class GameActionNotifyData extends AbstractData {
	public seatID:number;
		public notify:boolean;
		public actionID:number;
		public freeMoney:number;
		public tableMoney:number;
		public raisesLeft:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
