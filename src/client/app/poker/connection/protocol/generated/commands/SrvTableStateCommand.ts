
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTableStateData } from "../data/SrvTableStateData";



export class SrvTableStateCommand extends AbstractPokerCommand {
	public static NAME = "SrvTableState";
	public static UID = 4171;
	
		public data: SrvTableStateData;

	constructor() {
		super();
		this.init(1, 75, SrvTableStateCommand.NAME);
	}
}
