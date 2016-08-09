
import { GameUserActionData } from "./GameUserActionData";



import { AbstractData } from "../../core/data/AbstractData";

export class TurnOptionsData extends AbstractData {
	public minMaxMoneyUsed:boolean;
		public possibleUserActions:GameUserActionData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
