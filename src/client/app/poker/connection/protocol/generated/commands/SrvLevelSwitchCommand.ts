
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvLevelSwitchData } from "../data/SrvLevelSwitchData";



export class SrvLevelSwitchCommand extends AbstractPokerCommand {
	public static NAME = "SrvLevelSwitch";
	public static UID = 12400;
	
		public data: SrvLevelSwitchData;

	constructor() {
		super();
		this.init(3, 112, SrvLevelSwitchCommand.NAME);
	}
}
