
import { PokerJackpotTourRegResultData } from "./PokerJackpotTourRegResultData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvJackpotTourRegRequestData extends AbstractData {
	public resultVO:PokerJackpotTourRegResultData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
