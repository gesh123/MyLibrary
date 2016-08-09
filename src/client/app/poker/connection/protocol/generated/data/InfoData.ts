


import { AbstractData } from "../../core/data/AbstractData";

export class InfoData extends AbstractData {
	public inServer:number;
		public outOfServer:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
