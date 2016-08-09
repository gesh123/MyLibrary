
import { MoneySeatData } from "./MoneySeatData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvCashierStatusData extends AbstractData {
	public playerCashierStatus:MoneySeatData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
