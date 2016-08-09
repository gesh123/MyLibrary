
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourEndRemainingPlayersUpdateData } from "../data/SrvTourEndRemainingPlayersUpdateData";



export class SrvTourEndRemainingPlayersUpdateCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourEndRemainingPlayersUpdate";
	public static UID = 12455;
	
		public data: SrvTourEndRemainingPlayersUpdateData;

	constructor() {
		super();
		this.init(3, 167, SrvTourEndRemainingPlayersUpdateCommand.NAME);
	}
}
