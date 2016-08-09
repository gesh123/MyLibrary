
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvTournamentsInfoSnapshotData } from "../data/SrvTournamentsInfoSnapshotData";



export class SrvTournamentsInfoSnapshotCommand extends AbstractPokerCommand {
	public static NAME = "SrvTournamentsInfoSnapshot";
	public static UID = 12392;
	
		public data: SrvTournamentsInfoSnapshotData;

	constructor() {
		super();
		this.init(3, 104, SrvTournamentsInfoSnapshotCommand.NAME);
	}
}
