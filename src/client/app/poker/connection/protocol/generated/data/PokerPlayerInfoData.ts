
import { PokerShortRankData } from "./PokerShortRankData";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerPlayerInfoData extends AbstractData {
	public name:string;
		public gameMoney:number;
		public city:string;
		public franchiseID:number;
		public shortRankStructure:PokerShortRankData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
