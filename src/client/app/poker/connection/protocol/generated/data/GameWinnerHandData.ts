
import { BinaryCard } from "../../core/data/BinaryCard";



import { AbstractData } from "../../core/data/AbstractData";

export class GameWinnerHandData extends AbstractData {
	public seatID:number;
		public isRealMoney:boolean;
		public showFractal:boolean;
		public formatAsPromoBucks:boolean;
		public winnerMoney:number;
		public sidePotID:number;
		public isLow:boolean;
		public hasSidePots:boolean;
		public kickerType:number;
		public handType:number;
		public usedCards:BinaryCard[];
		public unUsedCards:BinaryCard[];
		public kicker1:number;
		
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
