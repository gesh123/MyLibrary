
import { PokerTableInfoData } from "./PokerTableInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvNewTourTablesData extends AbstractData {
	public newPokerTableInfoVect:PokerTableInfoData[];
		public versionPokerTableInfo:number;
		public tourNetworkIDVO:BinaryNetworkID;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
