


import { AbstractData } from "../../core/data/AbstractData";

export class SrvObserverChatMsgData extends AbstractData {
	public franchiseID:number;
		public userName:string;
		public message:string;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
