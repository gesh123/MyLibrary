
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSetMyNickNameData } from "../data/ClSetMyNickNameData";



export class ClSetMyNickNameCommand extends AbstractPokerCommand {
	public static NAME = "ClSetMyNickName";
	public static UID = 10304;
	
		public data: ClSetMyNickNameData;

	constructor() {
		super();
		this.init(2, 2112, ClSetMyNickNameCommand.NAME);
	}
}
