
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvSetSnGBeastJackpotData } from "../data/SrvSetSnGBeastJackpotData";



export class SrvSetSnGBeastJackpotCommand extends AbstractPokerCommand {
	public static NAME = "SrvSetSnGBeastJackpot";
	public static UID = 12488;
	
		public data: SrvSetSnGBeastJackpotData;

	constructor() {
		super();
		this.init(3, 200, SrvSetSnGBeastJackpotCommand.NAME);
	}
}
