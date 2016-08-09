


import { AbstractData } from "../../core/data/AbstractData";

export class SrvUnreadMessageCountData extends AbstractData {
	public messageCount:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
