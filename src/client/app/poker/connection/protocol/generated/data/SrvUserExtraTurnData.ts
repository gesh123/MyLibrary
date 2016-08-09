
import { TurnOptionsData } from "./TurnOptionsData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUserExtraTurnData extends AbstractData {
	public seatID:number;
		public notify:boolean;
		public turnOptions:TurnOptionsData;
		public timeOut:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
