
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTransferUncalledBetData } from "../data/SrvTransferUncalledBetData";



export class SrvTransferUncalledBetCommand extends AbstractPokerCommand {
	public static NAME = "SrvTransferUncalledBet";
	public static UID = 4211;
	
		public data: SrvTransferUncalledBetData;

	constructor() {
		super();
		this.init(1, 115, SrvTransferUncalledBetCommand.NAME);
	}
}
