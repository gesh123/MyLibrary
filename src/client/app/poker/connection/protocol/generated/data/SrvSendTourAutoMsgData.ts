
import { PokerTimeData } from "./PokerTimeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvSendTourAutoMsgData extends AbstractData {
	public messageID:number;
		public tournamentName:string;
		public eventTime:PokerTimeData;
		
		public customMessage:string;
		
		public tourNetworkIDVO:BinaryNetworkID;
		public tourStatus:number;
		public networkID:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
