
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvRemainingUnitsTillTourEndData } from "../data/SrvRemainingUnitsTillTourEndData";



export class SrvRemainingUnitsTillTourEndCommand extends AbstractPokerCommand {
	public static NAME = "SrvRemainingUnitsTillTourEnd";
	public static UID = 12480;
	
		public data: SrvRemainingUnitsTillTourEndData;

	constructor() {
		super();
		this.init(3, 192, SrvRemainingUnitsTillTourEndCommand.NAME);
	}
}
