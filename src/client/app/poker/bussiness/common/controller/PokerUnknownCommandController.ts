import {AbstractSrvCommandController} from "./AbstractSrvCommandController";
import {AbstractPokerCommand} from "../../../connection/protocol/core/commands/AbstractPokerCommand";
import {DevConsole} from "../../../devTools/console/DevConsole";
/**
 * Created by hivaga on 8/2/2016.
 */
export class PokerUnknownCommandController extends AbstractSrvCommandController
{
	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor()
	{
		super();
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------


	public execute(command:AbstractPokerCommand):void
	{
		DevConsole.error("PokerUnknownCommandController.execute",
			"Recieved not handled command name:",command.name,
			"PID:",command.pid,
			"CID:",command.cid);

	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
