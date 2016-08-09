
import { PlayerTournamentViewData } from "./PlayerTournamentViewData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvPlayerTournamentViewData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public playerTournamentView:PlayerTournamentViewData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
