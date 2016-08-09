
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvCashierStatusData } from "../data/SrvCashierStatusData";



export class SrvCashierStatusCommand extends AbstractPokerCommand {
	public static NAME = "SrvCashierStatus";
	public static UID = 4191;
	
		public data: SrvCashierStatusData;

	constructor() {
		super();
		this.init(1, 95, SrvCashierStatusCommand.NAME);
	}
}
