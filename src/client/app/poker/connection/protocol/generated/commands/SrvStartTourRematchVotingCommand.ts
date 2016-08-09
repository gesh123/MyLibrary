
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvStartTourRematchVotingData } from "../data/SrvStartTourRematchVotingData";



export class SrvStartTourRematchVotingCommand extends AbstractPokerCommand {
	public static NAME = "SrvStartTourRematchVoting";
	public static UID = 12462;
	
		public data: SrvStartTourRematchVotingData;

	constructor() {
		super();
		this.init(3, 174, SrvStartTourRematchVotingCommand.NAME);
	}
}
