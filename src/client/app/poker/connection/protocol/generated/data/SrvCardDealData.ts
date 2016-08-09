
import { UserCardPackData } from "./UserCardPackData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvCardDealData extends AbstractData {
	public playersCards:UserCardPackData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
