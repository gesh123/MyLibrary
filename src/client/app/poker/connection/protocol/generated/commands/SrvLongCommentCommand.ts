
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvLongCommentData } from "../data/SrvLongCommentData";



export class SrvLongCommentCommand extends AbstractPokerCommand {
	public static NAME = "SrvLongComment";
	public static UID = 12482;
	
		public data: SrvLongCommentData;

	constructor() {
		super();
		this.init(3, 194, SrvLongCommentCommand.NAME);
	}
}
