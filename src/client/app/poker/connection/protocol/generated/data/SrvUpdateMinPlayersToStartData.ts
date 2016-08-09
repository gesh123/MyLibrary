
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvUpdateMinPlayersToStartData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public minPlayers:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
