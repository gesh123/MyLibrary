import {AbstractController} from "./AbstractController";
import {ConnectionService} from "../../../connection/service/ConnectionService";
import {AbstractPokerCommand} from "../../../connection/protocol/core/commands/AbstractPokerCommand";
/**
 * Created by hivaga on 8/2/2016.
 */
export abstract class AbstractClCommandController extends AbstractController
{
	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------
	protected connection:ConnectionService;

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor(connection:ConnectionService)
	{
		super();
		this.connection = connection;
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public abstract execute(...any:any[]):void|Promise<any>

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	protected send(command:AbstractPokerCommand):void
	{
		this.connection.sendCommand(command);
	}

	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
