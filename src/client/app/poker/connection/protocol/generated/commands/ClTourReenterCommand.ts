
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClTourReenterData } from "../data/ClTourReenterData";



export class ClTourReenterCommand extends AbstractPokerCommand {
	public static NAME = "ClTourReenter";
	public static UID = 18469;
	
		public data: ClTourReenterData;

	constructor() {
		super();
		this.init(4, 2085, ClTourReenterCommand.NAME);
	}
}
