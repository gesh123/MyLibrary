
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerParticipationsData } from "../data/SrvPlayerParticipationsData";



export class SrvPlayerParticipationsCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerParticipations";
	public static UID = 4256;
	
		public data: SrvPlayerParticipationsData;

	constructor() {
		super();
		this.init(1, 160, SrvPlayerParticipationsCommand.NAME);
	}
}
