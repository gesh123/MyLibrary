
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvVoteForTourRematchFailedData } from "../data/SrvVoteForTourRematchFailedData";



export class SrvVoteForTourRematchFailedCommand extends AbstractPokerCommand {
	public static NAME = "SrvVoteForTourRematchFailed";
	public static UID = 12465;
	
		public data: SrvVoteForTourRematchFailedData;

	constructor() {
		super();
		this.init(3, 177, SrvVoteForTourRematchFailedCommand.NAME);
	}
}
