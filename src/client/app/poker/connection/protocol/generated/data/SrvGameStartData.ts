
import { PlayerInfoData } from "./PlayerInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvGameStartData extends AbstractData {
	public gameState:number;
		public participatingPlayers:PlayerInfoData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
