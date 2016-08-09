
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetMultiInitializeInfoData } from "../data/ClGetMultiInitializeInfoData";



export class ClGetMultiInitializeInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetMultiInitializeInfo";
	public static UID = 18446;
	
		public data: ClGetMultiInitializeInfoData;

	constructor() {
		super();
		this.init(4, 2062, ClGetMultiInitializeInfoCommand.NAME);
	}
}
