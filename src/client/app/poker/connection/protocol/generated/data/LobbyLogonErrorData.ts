


import { AbstractData } from "../../core/data/AbstractData";

export class LobbyLogonErrorData extends AbstractData {
	public errorID:number;
		public message:string;
		public autoCloseClient:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
