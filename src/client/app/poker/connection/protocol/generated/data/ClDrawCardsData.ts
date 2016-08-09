
import { BinaryCard } from "../../core/data/BinaryCard";



import { AbstractData } from "../../core/data/AbstractData";

export class ClDrawCardsData extends AbstractData {
	public cardsVect:BinaryCard[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
