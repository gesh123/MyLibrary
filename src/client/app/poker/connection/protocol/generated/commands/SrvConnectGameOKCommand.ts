
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvConnectGameOKData } from "../data/SrvConnectGameOKData";



export class SrvConnectGameOKCommand extends AbstractPokerCommand {
	public static NAME = "SrvConnectGameOK";
	public static UID = 4131;
	
		public data: SrvConnectGameOKData;

	constructor() {
		super();
		this.init(1, 35, SrvConnectGameOKCommand.NAME);
	}
}
