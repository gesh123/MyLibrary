
import { PokerTableInfo1Data } from "./PokerTableInfo1Data";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUpdateTablesData extends AbstractData {
	public updatePokerTableInfoVect:PokerTableInfo1Data[];
		public removedPokerTableInfoVect:BinaryNetworkID[];
		public versionPokerTableInfoVect:number;
		public tourNetworkIDVO:BinaryNetworkID;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
