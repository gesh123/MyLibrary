
import { PokerPlayerProfileData } from "./PokerPlayerProfileData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayerProfileData extends AbstractData {
	public isValid:boolean;
		public info:PokerPlayerProfileData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
