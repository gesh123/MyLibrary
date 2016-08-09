


import { AbstractData } from "../../core/data/AbstractData";

export class SrvLogonChangeData extends AbstractData {
	public validEmail:boolean;
		public chatEnabled:boolean;
		public realResult:boolean;
		public realMoneyType:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
