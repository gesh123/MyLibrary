
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvCanObserveTourTemplateTableData } from "../data/SrvCanObserveTourTemplateTableData";



export class SrvCanObserveTourTemplateTableCommand extends AbstractPokerCommand {
	public static NAME = "SrvCanObserveTourTemplateTable";
	public static UID = 12519;
	
		public data: SrvCanObserveTourTemplateTableData;

	constructor() {
		super();
		this.init(3, 231, SrvCanObserveTourTemplateTableCommand.NAME);
	}
}
