
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvHandShakeOKData } from "../data/SrvHandShakeOKData";



export class SrvHandShakeOKCommand extends AbstractPokerCommand {
	public static NAME = "SrvHandShakeOK";
	public static UID = 4097;
	
		public data: SrvHandShakeOKData;

	constructor() {
		super();
		this.init(1, 1, SrvHandShakeOKCommand.NAME);
	}
}
