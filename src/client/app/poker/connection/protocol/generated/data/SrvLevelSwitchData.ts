


import { AbstractData } from "../../core/data/AbstractData";

export class SrvLevelSwitchData extends AbstractData {
	public ante:number;
		public lowBet:number;
		public highBet:number;
		public bringIn:number;
		public level:number;
		public unitsToSwitch:number;
		public switchType:number;
		public isLevelSwitching:boolean;
		public nextLowBet:number;
		public nextHighBet:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
