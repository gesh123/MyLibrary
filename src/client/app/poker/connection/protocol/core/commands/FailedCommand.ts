import {AbstractPokerCommand} from "./AbstractPokerCommand";

/**
 * This is a special type of command if a command serialization fails it should be converted to this command type.
 */
export class PokerFailedCommand extends AbstractPokerCommand {
	public static NAME:string = "PokerFailedCommand";

	constructor( command:AbstractPokerCommand ) {
		super();

		this.init(command.pid, command.cid, command.name)

		this.data = command.data;
	}
}
