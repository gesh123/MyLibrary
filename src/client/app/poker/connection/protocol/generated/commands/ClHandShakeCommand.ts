
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClHandShakeData } from "../data/ClHandShakeData";



export class ClHandShakeCommand extends AbstractPokerCommand {
	public static NAME = "ClHandShake";
	public static UID = 8196;
	
		public data: ClHandShakeData;

	constructor() {
		super();
		this.init(2, 4, ClHandShakeCommand.NAME);
	}
}
