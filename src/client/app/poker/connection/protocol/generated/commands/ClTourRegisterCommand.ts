
import { AbstractPokerCommand } from "../../core/commands/AbstractPokerCommand";
import { ClTourRegisterData } from "../data/ClTourRegisterData";



export class ClTourRegisterCommand extends AbstractPokerCommand {
	public static NAME = "ClTourRegister";
	public static UID = 18452;
	
		public data: ClTourRegisterData;

	constructor() {
		super();
		this.init(4, 2068, ClTourRegisterCommand.NAME);
	}
}
