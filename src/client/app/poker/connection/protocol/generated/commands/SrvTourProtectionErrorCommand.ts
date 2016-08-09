
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourProtectionErrorData } from "../data/SrvTourProtectionErrorData";



export class SrvTourProtectionErrorCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourProtectionError";
	public static UID = 12416;
	
		public data: SrvTourProtectionErrorData;

	constructor() {
		super();
		this.init(3, 128, SrvTourProtectionErrorCommand.NAME);
	}
}
