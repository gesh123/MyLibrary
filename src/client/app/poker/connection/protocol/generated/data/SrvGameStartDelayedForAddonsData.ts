
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvGameStartDelayedForAddonsData extends AbstractData {
	public startTime:PokerTimeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
