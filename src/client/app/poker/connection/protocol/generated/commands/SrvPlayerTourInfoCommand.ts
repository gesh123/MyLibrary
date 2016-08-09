
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerTourInfoData } from "../data/SrvPlayerTourInfoData";



export class SrvPlayerTourInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerTourInfo";
	public static UID = 12484;
	
		public data: SrvPlayerTourInfoData;

	constructor() {
		super();
		this.init(3, 196, SrvPlayerTourInfoCommand.NAME);
	}
}
