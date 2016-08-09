
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvUpdateMoreToursPrizesInfoData } from "../data/SrvUpdateMoreToursPrizesInfoData";



export class SrvUpdateMoreToursPrizesInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvUpdateMoreToursPrizesInfo";
	public static UID = 12430;
	
		public data: SrvUpdateMoreToursPrizesInfoData;

	constructor() {
		super();
		this.init(3, 142, SrvUpdateMoreToursPrizesInfoCommand.NAME);
	}
}
