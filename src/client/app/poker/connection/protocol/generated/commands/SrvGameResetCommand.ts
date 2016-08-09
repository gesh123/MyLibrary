
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvGameResetData } from "../data/SrvGameResetData";



export class SrvGameResetCommand extends AbstractPokerCommand {
	public static NAME = "SrvGameReset";
	public static UID = 4260;
	
		public data: SrvGameResetData;

	constructor() {
		super();
		this.init(1, 164, SrvGameResetCommand.NAME);
	}
}
