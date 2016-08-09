
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvMoveDealChipData } from "../data/SrvMoveDealChipData";



export class SrvMoveDealChipCommand extends AbstractPokerCommand {
	public static NAME = "SrvMoveDealChip";
	public static UID = 4221;
	
		public data: SrvMoveDealChipData;

	constructor() {
		super();
		this.init(1, 125, SrvMoveDealChipCommand.NAME);
	}
}
