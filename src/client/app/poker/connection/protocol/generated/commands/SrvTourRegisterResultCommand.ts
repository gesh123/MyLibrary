
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourRegisterResultData } from "../data/SrvTourRegisterResultData";



export class SrvTourRegisterResultCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourRegisterResult";
	public static UID = 12403;
	
		public data: SrvTourRegisterResultData;

	constructor() {
		super();
		this.init(3, 115, SrvTourRegisterResultCommand.NAME);
	}
}
