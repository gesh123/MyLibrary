
import { BinaryCard } from "../../core/data/BinaryCard";



import { AbstractData } from "../../core/data/AbstractData";

export class UserCardPackData extends AbstractData {
	public seatID:number;
		public cards:BinaryCard[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
