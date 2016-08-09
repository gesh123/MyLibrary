
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvCompressedData } from "../data/SrvCompressedData";



export class SrvCompressedCommand extends AbstractPokerCommand {
	public static NAME = "SrvCompressed";
	public static UID = 4102;
	
		public data: SrvCompressedData;

	constructor() {
		super();
		this.init(1, 6, SrvCompressedCommand.NAME);
	}
}
