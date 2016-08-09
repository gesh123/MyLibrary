
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClAcceptInviteData } from "../data/ClAcceptInviteData";



export class ClAcceptInviteCommand extends AbstractPokerCommand {
	public static NAME = "ClAcceptInvite";
	public static UID = 10255;
	
		public data: ClAcceptInviteData;

	constructor() {
		super();
		this.init(2, 2063, ClAcceptInviteCommand.NAME);
	}
}
