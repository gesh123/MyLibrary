
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetTourTableInfoData } from "../data/ClGetTourTableInfoData";



export class ClGetTourTableInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetTourTableInfo";
	public static UID = 18448;
	
		public data: ClGetTourTableInfoData;

	constructor() {
		super();
		this.init(4, 2064, ClGetTourTableInfoCommand.NAME);
	}
}
