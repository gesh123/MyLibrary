
import { UserCardPackData } from "./UserCardPackData";



import { AbstractData } from "../../core/data/AbstractData";

export class VisibleCardData extends AbstractData {
	public UserCardPack:UserCardPackData;
		public money:number;
		public winnerType:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
