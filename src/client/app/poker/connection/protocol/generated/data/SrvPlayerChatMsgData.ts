


import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayerChatMsgData extends AbstractData {
	public seatID:number;
		public message:string;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
