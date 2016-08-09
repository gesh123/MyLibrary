
import { PokerShortRankData } from "./PokerShortRankData";



import { AbstractData } from "../../core/data/AbstractData";

export class RankInfoData extends AbstractData {
	public seatID:number;
		public shortRankStructure:PokerShortRankData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
