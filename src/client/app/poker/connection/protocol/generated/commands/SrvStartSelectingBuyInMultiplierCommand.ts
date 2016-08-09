
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvStartSelectingBuyInMultiplierData } from "../data/SrvStartSelectingBuyInMultiplierData";



export class SrvStartSelectingBuyInMultiplierCommand extends AbstractPokerCommand {
	public static NAME = "SrvStartSelectingBuyInMultiplier";
	public static UID = 12506;
	
		public data: SrvStartSelectingBuyInMultiplierData;

	constructor() {
		super();
		this.init(3, 218, SrvStartSelectingBuyInMultiplierCommand.NAME);
	}
}
