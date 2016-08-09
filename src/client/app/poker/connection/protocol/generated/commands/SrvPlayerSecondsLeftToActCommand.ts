
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerSecondsLeftToActData } from "../data/SrvPlayerSecondsLeftToActData";



export class SrvPlayerSecondsLeftToActCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerSecondsLeftToAct";
	public static UID = 4150;
	
		public data: SrvPlayerSecondsLeftToActData;

	constructor() {
		super();
		this.init(1, 54, SrvPlayerSecondsLeftToActCommand.NAME);
	}
}
