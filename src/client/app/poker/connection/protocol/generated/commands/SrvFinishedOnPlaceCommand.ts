
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvFinishedOnPlaceData } from "../data/SrvFinishedOnPlaceData";



export class SrvFinishedOnPlaceCommand extends AbstractPokerCommand {
	public static NAME = "SrvFinishedOnPlace";
	public static UID = 4152;
	
		public data: SrvFinishedOnPlaceData;

	constructor() {
		super();
		this.init(1, 56, SrvFinishedOnPlaceCommand.NAME);
	}
}
