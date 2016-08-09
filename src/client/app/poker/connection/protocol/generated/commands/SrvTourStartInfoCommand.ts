
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourStartInfoData } from "../data/SrvTourStartInfoData";



export class SrvTourStartInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourStartInfo";
	public static UID = 12399;
	
		public data: SrvTourStartInfoData;

	constructor() {
		super();
		this.init(3, 111, SrvTourStartInfoCommand.NAME);
	}
}
