


import { AbstractData } from "../../core/data/AbstractData";

export class GamePlayerTreasurePointsData extends AbstractData {
	public seatID:number;
		public points:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
