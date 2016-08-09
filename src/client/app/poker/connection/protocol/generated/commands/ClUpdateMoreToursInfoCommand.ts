
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClUpdateMoreToursInfoData } from "../data/ClUpdateMoreToursInfoData";



export class ClUpdateMoreToursInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClUpdateMoreToursInfo";
	public static UID = 18463;
	
		public data: ClUpdateMoreToursInfoData;

	constructor() {
		super();
		this.init(4, 2079, ClUpdateMoreToursInfoCommand.NAME);
	}
}
