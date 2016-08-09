
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClUserActionData } from "../data/ClUserActionData";



export class ClUserActionCommand extends AbstractPokerCommand {
	public static NAME = "ClUserAction";
	public static UID = 10268;
	
		public data: ClUserActionData;

	constructor() {
		super();
		this.init(2, 2076, ClUserActionCommand.NAME);
	}
}
