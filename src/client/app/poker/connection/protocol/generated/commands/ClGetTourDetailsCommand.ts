
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetTourDetailsData } from "../data/ClGetTourDetailsData";



export class ClGetTourDetailsCommand extends AbstractPokerCommand {
	public static NAME = "ClGetTourDetails";
	public static UID = 18443;
	
		public data: ClGetTourDetailsData;

	constructor() {
		super();
		this.init(4, 2059, ClGetTourDetailsCommand.NAME);
	}
}
