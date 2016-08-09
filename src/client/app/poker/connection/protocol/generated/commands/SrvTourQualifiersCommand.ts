
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourQualifiersData } from "../data/SrvTourQualifiersData";



export class SrvTourQualifiersCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourQualifiers";
	public static UID = 12396;
	
		public data: SrvTourQualifiersData;

	constructor() {
		super();
		this.init(3, 108, SrvTourQualifiersCommand.NAME);
	}
}
