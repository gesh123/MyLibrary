
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvJackpotTourBuyInInfoData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public buyInInfoVO:PokerTournamentMoneyTypeData;
		public moneyInAccountVO:PokerTournamentMoneyTypeData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
