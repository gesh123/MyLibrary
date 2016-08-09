
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateJackpotsOnTourEndData } from "../data/SrvUpdateJackpotsOnTourEndData";



export class SrvUpdateJackpotsOnTourEndCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateJackpotsOnTourEnd";
	public static UID = 12490;
	
		public data: SrvUpdateJackpotsOnTourEndData;

	constructor() {
		super();
		this.init(3, 202, SrvUpdateJackpotsOnTourEndCommand.NAME);
	}
}
