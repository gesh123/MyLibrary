
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClGetTourSeatInfoData } from "../data/ClGetTourSeatInfoData";



export class ClGetTourSeatInfoCommand extends AbstractPokerCommand {
	public static NAME = "ClGetTourSeatInfo";
	public static UID = 18447;
	
		public data: ClGetTourSeatInfoData;

	constructor() {
		super();
		this.init(4, 2063, ClGetTourSeatInfoCommand.NAME);
	}
}
