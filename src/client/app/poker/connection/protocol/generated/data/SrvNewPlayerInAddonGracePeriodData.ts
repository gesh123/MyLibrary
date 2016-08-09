
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvNewPlayerInAddonGracePeriodData extends AbstractData {
	public seatID:number;
		public endTime:PokerTimeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
