
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { SrvHoldemPlayerPosData } from "../data/SrvHoldemPlayerPosData";



export class SrvHoldemPlayerPosCommand extends AbstractPokerCommand {
	public static NAME = "SrvHoldemPlayerPos";
	public static UID = 4223;
	
		public data: SrvHoldemPlayerPosData;

	constructor() {
		super();
		this.init(1, 127, SrvHoldemPlayerPosCommand.NAME);
	}
}
