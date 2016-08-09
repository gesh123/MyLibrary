
import { TableStateUpdateData } from "./TableStateUpdateData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvOutOfMoneyData extends AbstractData {
	public tableStateUpdate:TableStateUpdateData;
		public leftMoney:number;
		public errorCode:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
