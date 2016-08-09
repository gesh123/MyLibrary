
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUnknownJackpotTourTemplateData } from "../data/SrvUnknownJackpotTourTemplateData";



export class SrvUnknownJackpotTourTemplateCommand extends AbstractPokerCommand {
	public static NAME = "SrvUnknownJackpotTourTemplate";
	public static UID = 12513;
	
		public data: SrvUnknownJackpotTourTemplateData;

	constructor() {
		super();
		this.init(3, 225, SrvUnknownJackpotTourTemplateCommand.NAME);
	}
}
