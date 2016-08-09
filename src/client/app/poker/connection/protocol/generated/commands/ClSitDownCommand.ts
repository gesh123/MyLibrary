
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSitDownData } from "../data/ClSitDownData";



export class ClSitDownCommand extends AbstractPokerCommand {
	public static NAME = "ClSitDown";
	public static UID = 10265;
	
		public data: ClSitDownData;

	constructor() {
		super();
		this.init(2, 2073, ClSitDownCommand.NAME);
	}
}
