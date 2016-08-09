
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClExtraChipsPrefChangedData } from "../data/ClExtraChipsPrefChangedData";



export class ClExtraChipsPrefChangedCommand extends AbstractPokerCommand {
	public static NAME = "ClExtraChipsPrefChanged";
	public static UID = 18476;
	
		public data: ClExtraChipsPrefChangedData;

	constructor() {
		super();
		this.init(4, 2092, ClExtraChipsPrefChangedCommand.NAME);
	}
}
