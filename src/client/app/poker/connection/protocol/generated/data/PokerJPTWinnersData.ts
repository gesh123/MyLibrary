
import { PokerJPTWinnerData } from "./PokerJPTWinnerData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerJPTWinnersData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public version:number;
		public winnersVect:PokerJPTWinnerData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
