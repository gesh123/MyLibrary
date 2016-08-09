
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class GameJPTPrizeMultiplierData extends AbstractData {
	public buyInMultiplier:number;
		public endTime:PokerTimeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
