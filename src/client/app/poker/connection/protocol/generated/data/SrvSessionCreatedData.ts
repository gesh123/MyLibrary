


import { AbstractData } from "../../core/data/AbstractData";

export class SrvSessionCreatedData extends AbstractData {
	public pageID:number;
		public session:string;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
