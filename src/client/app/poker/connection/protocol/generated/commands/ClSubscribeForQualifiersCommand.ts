
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClSubscribeForQualifiersData } from "../data/ClSubscribeForQualifiersData";



export class ClSubscribeForQualifiersCommand extends AbstractPokerCommand {
	public static NAME = "ClSubscribeForQualifiers";
	public static UID = 18444;
	
		public data: ClSubscribeForQualifiersData;

	constructor() {
		super();
		this.init(4, 2060, ClSubscribeForQualifiersCommand.NAME);
	}
}
