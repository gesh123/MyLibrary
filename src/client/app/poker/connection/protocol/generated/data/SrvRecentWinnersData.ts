
import { PokerJPTWinnersData } from "./PokerJPTWinnersData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvRecentWinnersData extends AbstractData {
	public winnersVO:PokerJPTWinnersData;
		public removedWinnersVect:number[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
