
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerVoteForRematchData } from "../data/SrvPlayerVoteForRematchData";



export class SrvPlayerVoteForRematchCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerVoteForRematch";
	public static UID = 12464;
	
		public data: SrvPlayerVoteForRematchData;

	constructor() {
		super();
		this.init(3, 176, SrvPlayerVoteForRematchCommand.NAME);
	}
}
