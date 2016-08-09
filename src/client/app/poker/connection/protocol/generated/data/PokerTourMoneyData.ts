
import { PokerTournamentMoneyTypeData } from "./PokerTournamentMoneyTypeData";
import { PokerFractionData } from "./PokerFractionData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerTourMoneyData extends AbstractData {
	public buyIn:PokerTournamentMoneyTypeData;
		public fee:PokerTournamentMoneyTypeData;
		public totalInAccount:PokerTournamentMoneyTypeData;
		public tourNetworkIDVO:BinaryNetworkID;
		public moneyTypeFractionObject:PokerFractionData;
		public allowTBConv:boolean;
		public isExternalCurrency:boolean;
		public currencyType:number;
		public buyInInPlayersCurrency:number;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
