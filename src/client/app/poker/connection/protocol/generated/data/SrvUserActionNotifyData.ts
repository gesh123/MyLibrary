
import { GameActionNotifyData } from "./GameActionNotifyData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUserActionNotifyData extends AbstractData {
	public actionNotifyVO:GameActionNotifyData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
