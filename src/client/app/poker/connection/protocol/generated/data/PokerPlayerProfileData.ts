
import { PokerShortRankData } from "./PokerShortRankData";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerPlayerProfileData extends AbstractData {
	public sex:number;
		public city:string;
		public country:string;
		public favGameLimit:string;
		public favHotel:string;
		public favCardRoom:string;
		public favStartHand:string;
		public goals:string;
		public memberSince:number;
		public playingSince:number;
		public birthDay:number;
		public pictureCode:string;
		public username:string;
		public rankPercentage:number;
		public rank:number;
		public returnOfInvestmentPercentage:number;
		public inTheMoney:number;
		public tournamentsWonCount:number;
		public hideTableRanks:boolean;
		public shortRankStructure:PokerShortRankData;
		
		public hideTourRanks:boolean;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
