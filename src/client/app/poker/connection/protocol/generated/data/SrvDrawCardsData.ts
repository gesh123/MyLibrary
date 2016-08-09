
import { BinaryCard } from "../../core/data/BinaryCard";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvDrawCardsData extends AbstractData {
	public cardsVect:BinaryCard[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
