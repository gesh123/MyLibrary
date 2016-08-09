
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayersInAddonGracePeriodData extends AbstractData {
	public seats:number[];
		public endTime:PokerTimeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
