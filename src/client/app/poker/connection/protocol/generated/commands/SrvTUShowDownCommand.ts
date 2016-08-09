
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTUShowDownData } from "../data/SrvTUShowDownData";



export class SrvTUShowDownCommand extends AbstractPokerCommand {
	public static NAME = "SrvTUShowDown";
	public static UID = 4174;
	
		public data: SrvTUShowDownData;

	constructor() {
		super();
		this.init(1, 78, SrvTUShowDownCommand.NAME);
	}
}
