
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateAddonsCountData } from "../data/SrvUpdateAddonsCountData";



export class SrvUpdateAddonsCountCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateAddonsCount";
	public static UID = 12476;
	
		public data: SrvUpdateAddonsCountData;

	constructor() {
		super();
		this.init(3, 188, SrvUpdateAddonsCountCommand.NAME);
	}
}
