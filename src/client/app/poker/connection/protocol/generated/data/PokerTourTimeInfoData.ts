
import { PokerTimeData } from "./PokerTimeData";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerTourTimeInfoData extends AbstractData {
	public hasRegistrationStartTime:boolean;
		public hasRegistrationEndTime:boolean;
		public hasStartTime:boolean;
		public hasFinishTime:boolean;
		public regStartTime:PokerTimeData;
		
		public regEndTime:PokerTimeData;
		
		public startTime:PokerTimeData;
		
		public finishedTime:PokerTimeData;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
