
import { GameWinnerHandData } from "./GameWinnerHandData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvHandWinnersData extends AbstractData {
	public winnersVectorSize:number;
		public evalLowHands:boolean;
		public winnersVector:GameWinnerHandData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
