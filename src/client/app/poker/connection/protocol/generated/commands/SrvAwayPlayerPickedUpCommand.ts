
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvAwayPlayerPickedUpData } from "../data/SrvAwayPlayerPickedUpData";



export class SrvAwayPlayerPickedUpCommand extends AbstractPokerCommand {
	public static NAME = "SrvAwayPlayerPickedUp";
	public static UID = 4151;
	
		public data: SrvAwayPlayerPickedUpData;

	constructor() {
		super();
		this.init(1, 55, SrvAwayPlayerPickedUpCommand.NAME);
	}
}
