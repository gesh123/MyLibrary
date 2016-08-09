
import { PokerPlayerInfoData } from "./PokerPlayerInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvGameInfoData extends AbstractData {
	public playersList:PokerPlayerInfoData[];
		public gameNetworkIDVO:BinaryNetworkID;
		public gameInfoVersion:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
