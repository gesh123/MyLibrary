
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvLogonChangeData } from "../data/SrvLogonChangeData";



export class SrvLogonChangeCommand extends AbstractPokerCommand {
	public static NAME = "SrvLogonChange";
	public static UID = 4224;
	
		public data: SrvLogonChangeData;

	constructor() {
		super();
		this.init(1, 128, SrvLogonChangeCommand.NAME);
	}
}
