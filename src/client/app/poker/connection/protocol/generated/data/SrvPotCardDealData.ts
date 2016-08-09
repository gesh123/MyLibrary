
import { UserCardPackData } from "./UserCardPackData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPotCardDealData extends AbstractData {
	public cards:UserCardPackData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
