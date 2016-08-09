
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSSLDataData } from "../data/ClSSLDataData";



export class ClSSLDataCommand extends AbstractPokerCommand {
	public static NAME = "ClSSLData";
	public static UID = 8200;
	
		public data: ClSSLDataData;

	constructor() {
		super();
		this.init(2, 8, ClSSLDataCommand.NAME);
	}
}
