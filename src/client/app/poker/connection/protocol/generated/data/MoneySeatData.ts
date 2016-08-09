


import { AbstractData } from "../../core/data/AbstractData";

export class MoneySeatData extends AbstractData {
	public letterCode:string;
		public money:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
