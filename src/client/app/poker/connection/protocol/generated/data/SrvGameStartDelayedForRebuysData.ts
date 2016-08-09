
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvGameStartDelayedForRebuysData extends AbstractData {
	public startTime:PokerTimeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
