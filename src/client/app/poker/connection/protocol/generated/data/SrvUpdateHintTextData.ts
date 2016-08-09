


import { AbstractData } from "../../core/data/AbstractData";

export class SrvUpdateHintTextData extends AbstractData {
	public hintId:number;
		public hintValue:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
