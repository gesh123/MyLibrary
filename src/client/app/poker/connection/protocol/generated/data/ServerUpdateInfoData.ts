
import { PokerGameInfoData } from "./PokerGameInfoData";
import { PokerGameInfo1Data } from "./PokerGameInfo1Data";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ServerUpdateInfoData extends AbstractData {
	public newTablesVector:PokerGameInfoData[];
		public changedTablesVector:PokerGameInfo1Data[];
		public removedTablesVector:BinaryNetworkID[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
