


import { AbstractData } from "../../core/data/AbstractData";

export class SrvStartTourRematchVotingData extends AbstractData {
	public finishPlace:number;
		public score:number;
		public nickname:string;
		public opponentScore:number;
		public opponentNickname:string;
		public votingTimeout:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
