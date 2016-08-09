
import { PokerJackpotTourCancelRegResultData } from "./PokerJackpotTourCancelRegResultData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvJackpotTourForceCancelRegRequestExData extends AbstractData {
	public resultVO:PokerJackpotTourCancelRegResultData;
		public playerID:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
