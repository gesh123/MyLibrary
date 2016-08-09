
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClAutoTopupInfoData } from "../data/ClAutoTopupInfoData";



export class ClAutoTopupInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClAutoTopupInfo";
	public static UID = 10300;
	
		public data: ClAutoTopupInfoData;

	constructor() {
		super();
		this.init(2, 2108, ClAutoTopupInfoCommand.NAME);
	}
}
