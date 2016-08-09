
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateTimeBankConfigData } from "../data/SrvUpdateTimeBankConfigData";



export class SrvUpdateTimeBankConfigCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateTimeBankConfig";
	public static UID = 4255;
	
		public data: SrvUpdateTimeBankConfigData;

	constructor() {
		super();
		this.init(1, 159, SrvUpdateTimeBankConfigCommand.NAME);
	}
}
