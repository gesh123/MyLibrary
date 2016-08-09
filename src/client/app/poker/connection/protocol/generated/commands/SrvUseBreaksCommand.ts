
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUseBreaksData } from "../data/SrvUseBreaksData";



export class SrvUseBreaksCommand extends AbstractPokerCommand {
	public static NAME = "SrvUseBreaks";
	public static UID = 12483;
	
		public data: SrvUseBreaksData;

	constructor() {
		super();
		this.init(3, 195, SrvUseBreaksCommand.NAME);
	}
}
