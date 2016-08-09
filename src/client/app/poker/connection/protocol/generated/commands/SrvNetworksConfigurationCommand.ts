
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvNetworksConfigurationData } from "../data/SrvNetworksConfigurationData";



export class SrvNetworksConfigurationCommand extends AbstractPokerCommand {
	public static NAME = "SrvNetworksConfiguration";
	public static UID = 4258;
	
		public data: SrvNetworksConfigurationData;

	constructor() {
		super();
		this.init(1, 162, SrvNetworksConfigurationCommand.NAME);
	}
}
