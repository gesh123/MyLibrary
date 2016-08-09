
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvMultiTourInitializeData } from "../data/SrvMultiTourInitializeData";



export class SrvMultiTourInitializeCommand extends AbstractPokerCommand {
	public static NAME = "SrvMultiTourInitialize";
	public static UID = 12405;
	
		public data: SrvMultiTourInitializeData;

	constructor() {
		super();
		this.init(3, 117, SrvMultiTourInitializeCommand.NAME);
	}
}
