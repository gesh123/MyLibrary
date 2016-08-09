
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvAltCurrencyRateData } from "../data/SrvAltCurrencyRateData";



export class SrvAltCurrencyRateCommand extends AbstractPokerCommand {
	public static NAME = "SrvAltCurrencyRate";
	public static UID = 4187;
	
		public data: SrvAltCurrencyRateData;

	constructor() {
		super();
		this.init(1, 91, SrvAltCurrencyRateCommand.NAME);
	}
}
