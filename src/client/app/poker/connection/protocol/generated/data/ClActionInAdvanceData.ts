


import { AbstractData } from "../../core/data/AbstractData";

export class ClActionInAdvanceData extends AbstractData {
	public actions:number;
		public onOff:boolean;
		public actionMoney:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
