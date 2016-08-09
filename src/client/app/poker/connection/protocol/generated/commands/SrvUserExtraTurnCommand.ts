
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUserExtraTurnData } from "../data/SrvUserExtraTurnData";



export class SrvUserExtraTurnCommand extends AbstractPokerCommand {
	public static NAME = "SrvUserExtraTurn";
	public static UID = 4176;
	
		public data: SrvUserExtraTurnData;

	constructor() {
		super();
		this.init(1, 80, SrvUserExtraTurnCommand.NAME);
	}
}
