
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvPlayerRanksData } from "../data/SrvPlayerRanksData";



export class SrvPlayerRanksCommand extends AbstractPokerCommand {
	public static NAME = "SrvPlayerRanks";
	public static UID = 4218;
	
		public data: SrvPlayerRanksData;

	constructor() {
		super();
		this.init(1, 122, SrvPlayerRanksCommand.NAME);
	}
}
