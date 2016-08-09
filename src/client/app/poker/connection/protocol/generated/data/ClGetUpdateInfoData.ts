
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClGetUpdateInfoData extends AbstractData {
	public tablesVersion:number;
		public playersVersion:number;
		public tourNetworkIDVO:BinaryNetworkID;
		public prizeVersion:number;
		public incomesVersion:number;
		public minPlayers:number;
		public lateRegistrationLevel:number;
		public remainingUnits:number;
		public timesVersion:number;
		public winnerPlacesCount:number;
		public clientTourStatus:number;
		public longCommentVer:number;
		public levelVersion:number;
		public useSyncBreak:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
