
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvStartReadyVotingData } from "../data/SrvStartReadyVotingData";



export class SrvStartReadyVotingCommand extends AbstractPokerCommand {
	public static NAME = "SrvStartReadyVoting";
	public static UID = 12467;
	
		public data: SrvStartReadyVotingData;

	constructor() {
		super();
		this.init(3, 179, SrvStartReadyVotingCommand.NAME);
	}
}
