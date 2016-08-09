
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClTourUnregisterData } from "../data/ClTourUnregisterData";



export class ClTourUnregisterCommand extends AbstractPokerCommand {
	public static NAME = "ClTourUnregister";
	public static UID = 18451;
	
		public data: ClTourUnregisterData;

	constructor() {
		super();
		this.init(4, 2067, ClTourUnregisterCommand.NAME);
	}
}
