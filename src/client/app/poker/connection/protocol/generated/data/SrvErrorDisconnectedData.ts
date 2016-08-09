


import { AbstractData } from "../../core/data/AbstractData";

export class SrvErrorDisconnectedData extends AbstractData {
	public errorCode:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
