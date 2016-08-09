
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClRejectInviteData } from "../data/ClRejectInviteData";



export class ClRejectInviteCommand extends AbstractPokerCommand {
	public static NAME = "ClRejectInvite";
	public static UID = 10256;
	
		public data: ClRejectInviteData;

	constructor() {
		super();
		this.init(2, 2064, ClRejectInviteCommand.NAME);
	}
}
