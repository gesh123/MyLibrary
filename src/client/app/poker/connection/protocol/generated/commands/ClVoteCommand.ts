
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClVoteData } from "../data/ClVoteData";



export class ClVoteCommand extends AbstractPokerCommand {
	public static NAME = "ClVote";
	public static UID = 18466;
	
		public data: ClVoteData;

	constructor() {
		super();
		this.init(4, 2082, ClVoteCommand.NAME);
	}
}
