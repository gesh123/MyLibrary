
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetMoreToursInitInfoData } from "../data/ClGetMoreToursInitInfoData";



export class ClGetMoreToursInitInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetMoreToursInitInfo";
	public static UID = 18462;
	
		public data: ClGetMoreToursInitInfoData;

	constructor() {
		super();
		this.init(4, 2078, ClGetMoreToursInitInfoCommand.NAME);
	}
}
