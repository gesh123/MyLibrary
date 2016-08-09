


import { AbstractData } from "../../core/data/AbstractData";

export class GameUserActionData extends AbstractData {
	public actionID:number;
		public minActionMoney:number;
		public maxActionMoney:number;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
