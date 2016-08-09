
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClVoteForRematchData } from "../data/ClVoteForRematchData";



export class ClVoteForRematchCommand extends AbstractPokerCommand {
	public static NAME = "ClVoteForRematch";
	public static UID = 18467;
	
		public data: ClVoteForRematchData;

	constructor() {
		super();
		this.init(4, 2083, ClVoteForRematchCommand.NAME);
	}
}
