
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateHintTextData } from "../data/SrvUpdateHintTextData";



export class SrvUpdateHintTextCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateHintText";
	public static UID = 4180;
	
		public data: SrvUpdateHintTextData;

	constructor() {
		super();
		this.init(1, 84, SrvUpdateHintTextCommand.NAME);
	}
}
