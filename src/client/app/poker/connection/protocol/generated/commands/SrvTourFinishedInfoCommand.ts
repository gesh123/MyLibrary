
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTourFinishedInfoData } from "../data/SrvTourFinishedInfoData";



export class SrvTourFinishedInfoCommand extends AbstractPokerCommand {
	public static NAME = "SrvTourFinishedInfo";
	public static UID = 12420;
	
		public data: SrvTourFinishedInfoData;

	constructor() {
		super();
		this.init(3, 132, SrvTourFinishedInfoCommand.NAME);
	}
}
