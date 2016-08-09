
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPasswordErrorData } from "../data/SrvPasswordErrorData";



export class SrvPasswordErrorCommand extends AbstractPokerCommand {
	public static NAME = "SrvPasswordError";
	public static UID = 4227;
	
		public data: SrvPasswordErrorData;

	constructor() {
		super();
		this.init(1, 131, SrvPasswordErrorCommand.NAME);
	}
}
