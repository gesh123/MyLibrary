
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvShowHandsData } from "../data/SrvShowHandsData";



export class SrvShowHandsCommand extends AbstractPokerCommand {
	public static NAME = "SrvShowHands";
	public static UID = 4145;
	
		public data: SrvShowHandsData;

	constructor() {
		super();
		this.init(1, 49, SrvShowHandsCommand.NAME);
	}
}
