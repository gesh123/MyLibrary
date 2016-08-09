
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvSessionCreatedData } from "../data/SrvSessionCreatedData";



export class SrvSessionCreatedCommand extends AbstractPokerCommand {
	public static NAME = "SrvSessionCreated";
	public static UID = 4183;
	
		public data: SrvSessionCreatedData;

	constructor() {
		super();
		this.init(1, 87, SrvSessionCreatedCommand.NAME);
	}
}
