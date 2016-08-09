
import { PokerJackpotTourCancelRegResultData } from "./PokerJackpotTourCancelRegResultData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvJackpotTourCancelRegRequestData extends AbstractData {
	public resultVO:PokerJackpotTourCancelRegResultData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
