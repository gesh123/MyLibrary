
import { TableBaseStateData } from "./TableBaseStateData";
import { GameSeatData } from "./GameSeatData";



import { AbstractData } from "../../core/data/AbstractData";

export class GameData extends AbstractData {
	public tableBaseState:TableBaseStateData;
		public seats:GameSeatData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
