
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourRematchVotingInProgressData } from "../data/SrvTourRematchVotingInProgressData";



export class SrvTourRematchVotingInProgressCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourRematchVotingInProgress";
	public static UID = 12463;
	
		public data: SrvTourRematchVotingInProgressData;

	constructor() {
		super();
		this.init(3, 175, SrvTourRematchVotingInProgressCommand.NAME);
	}
}
