


import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourRematchVotingInProgressData extends AbstractData {
	public finishPlace:number;
		public score:number;
		public nickname:string;
		public opponentScore:number;
		public opponentNickname:string;
		public isOpponentVoted:boolean;
		public votingTimeLeft:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
