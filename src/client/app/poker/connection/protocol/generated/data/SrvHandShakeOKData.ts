


import { AbstractData } from "../../core/data/AbstractData";

export class SrvHandShakeOKData extends AbstractData {
	public inactivityTimeoutSecconds:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
