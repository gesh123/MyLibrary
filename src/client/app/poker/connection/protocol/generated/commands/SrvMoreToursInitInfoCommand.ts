
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvMoreToursInitInfoData } from "../data/SrvMoreToursInitInfoData";



export class SrvMoreToursInitInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvMoreToursInitInfo";
	public static UID = 12427;
	
		public data: SrvMoreToursInitInfoData;

	constructor() {
		super();
		this.init(3, 139, SrvMoreToursInitInfoCommand.NAME);
	}
}
