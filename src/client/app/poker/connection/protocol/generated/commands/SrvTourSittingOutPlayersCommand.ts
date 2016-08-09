
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourSittingOutPlayersData } from "../data/SrvTourSittingOutPlayersData";



export class SrvTourSittingOutPlayersCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourSittingOutPlayers";
	public static UID = 12439;
	
		public data: SrvTourSittingOutPlayersData;

	constructor() {
		super();
		this.init(3, 151, SrvTourSittingOutPlayersCommand.NAME);
	}
}
