
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateSnGBeastJackpotData } from "../data/SrvUpdateSnGBeastJackpotData";



export class SrvUpdateSnGBeastJackpotCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateSnGBeastJackpot";
	public static UID = 12489;
	
		public data: SrvUpdateSnGBeastJackpotData;

	constructor() {
		super();
		this.init(3, 201, SrvUpdateSnGBeastJackpotCommand.NAME);
	}
}
