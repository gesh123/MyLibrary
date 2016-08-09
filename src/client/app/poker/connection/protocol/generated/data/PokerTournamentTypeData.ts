


import { AbstractData } from "../../core/data/AbstractData";

export class PokerTournamentTypeData extends AbstractData {
	public isSpecial:boolean;
		public isQualifier:boolean;
		public isGuaranteed:boolean;
		public isRegular:boolean;
		public isPrivate:boolean;
		public isLiveevent:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
