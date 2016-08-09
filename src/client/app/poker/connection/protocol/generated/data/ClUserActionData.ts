


import { AbstractData } from "../../core/data/AbstractData";

export class ClUserActionData extends AbstractData {
	public userActionID:number;
		public moneyAmount:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
