


import { AbstractData } from "../../core/data/AbstractData";

export class SrvPasswordErrorData extends AbstractData {
	public reason:number;
		public shouldCloseTable:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
