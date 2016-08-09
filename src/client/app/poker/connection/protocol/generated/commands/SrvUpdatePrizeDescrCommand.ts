
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdatePrizeDescrData } from "../data/SrvUpdatePrizeDescrData";



export class SrvUpdatePrizeDescrCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdatePrizeDescr";
	public static UID = 12414;
	
		public data: SrvUpdatePrizeDescrData;

	constructor() {
		super();
		this.init(3, 126, SrvUpdatePrizeDescrCommand.NAME);
	}
}
