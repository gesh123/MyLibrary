


import { AbstractData } from "../../core/data/AbstractData";

export class SrvLogonOkData extends AbstractData {
	public username:string;
		public nickname:string;
		public password:string;
		public previousSeatID:number;
		public chatEnabled:boolean;
		public validEmail:boolean;
		public forceChangePassword:boolean;
		public emailHash:string;
		public accountStatus:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
