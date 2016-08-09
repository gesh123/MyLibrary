
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvConnectGameOKData extends AbstractData {
	public timeParts:PokerTimeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
