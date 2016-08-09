
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvCatchThisNumberData } from "../data/SrvCatchThisNumberData";



export class SrvCatchThisNumberCommand extends AbstractPokerCommand {
	public static NAME = "SrvCatchThisNumber";
	public static UID = 4209;
	
		public data: SrvCatchThisNumberData;

	constructor() {
		super();
		this.init(1, 113, SrvCatchThisNumberCommand.NAME);
	}
}
