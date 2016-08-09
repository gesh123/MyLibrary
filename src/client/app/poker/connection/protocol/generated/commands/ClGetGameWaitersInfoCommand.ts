
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetGameWaitersInfoData } from "../data/ClGetGameWaitersInfoData";



export class ClGetGameWaitersInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetGameWaitersInfo";
	public static UID = 10245;
	
		public data: ClGetGameWaitersInfoData;

	constructor() {
		super();
		this.init(2, 2053, ClGetGameWaitersInfoCommand.NAME);
	}
}
