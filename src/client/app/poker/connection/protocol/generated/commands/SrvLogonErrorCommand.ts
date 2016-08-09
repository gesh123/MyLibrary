
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvLogonErrorData } from "../data/SrvLogonErrorData";



export class SrvLogonErrorCommand extends AbstractPokerCommand {
	public static NAME = "SrvLogonError";
	public static UID = 4168;
	
		public data: SrvLogonErrorData;

	constructor() {
		super();
		this.init(1, 72, SrvLogonErrorCommand.NAME);
	}
}
