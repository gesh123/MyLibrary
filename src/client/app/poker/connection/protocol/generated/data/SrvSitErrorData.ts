


import { AbstractData } from "../../core/data/AbstractData";

export class SrvSitErrorData extends AbstractData {
	public errorCode:number;
		public writeMoneyFlag:boolean;
		public money:number;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
