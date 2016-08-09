
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClLogonData } from "../data/ClLogonData";



export class ClLogonCommand extends AbstractPokerCommand {
	public static NAME = "ClLogon";
	public static UID = 10261;
	
		public data: ClLogonData;

	constructor() {
		super();
		this.init(2, 2069, ClLogonCommand.NAME);
	}
}
