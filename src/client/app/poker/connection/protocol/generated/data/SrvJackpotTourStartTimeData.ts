
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvJackpotTourStartTimeData extends AbstractData {
	public tourStartTime:PokerTimeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
