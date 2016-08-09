
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvSSLDataData } from "../data/SrvSSLDataData";



export class SrvSSLDataCommand extends AbstractPokerCommand {
	public static NAME = "SrvSSLData";
	public static UID = 4103;
	
		public data: SrvSSLDataData;

	constructor() {
		super();
		this.init(1, 7, SrvSSLDataCommand.NAME);
	}
}
