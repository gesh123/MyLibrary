
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvLogonOkData } from "../data/SrvLogonOkData";



export class SrvLogonOkCommand extends AbstractPokerCommand {
	public static NAME = "SrvLogonOk";
	public static UID = 4164;
	
		public data: SrvLogonOkData;

	constructor() {
		super();
		this.init(1, 68, SrvLogonOkCommand.NAME);
	}
}
