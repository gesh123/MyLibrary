


import { AbstractData } from "../../core/data/AbstractData";

export class PokerJPTWinnerData extends AbstractData {
	public playerNickName:string;
		public prize:number;
		public recentWinnerID:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
