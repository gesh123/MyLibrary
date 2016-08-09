
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetUpdateInfoData } from "../data/ClGetUpdateInfoData";



export class ClGetUpdateInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetUpdateInfo";
	public static UID = 18449;
	
		public data: ClGetUpdateInfoData;

	constructor() {
		super();
		this.init(4, 2065, ClGetUpdateInfoCommand.NAME);
	}
}
