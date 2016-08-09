
import { GamePlayerTreasurePointsData } from "./GamePlayerTreasurePointsData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvRakeRacePointsData extends AbstractData {
	public pointsVect:GamePlayerTreasurePointsData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
