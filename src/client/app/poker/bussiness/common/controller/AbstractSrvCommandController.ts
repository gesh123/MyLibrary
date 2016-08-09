import {AbstractPokerCommand} from "../../../connection/protocol/core/commands/AbstractPokerCommand";
import {AbstractController} from "./AbstractController";

/**
 * Created by hivaga on 8/1/2016.
 */
export abstract class AbstractSrvCommandController extends AbstractController
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

	public abstract execute(command:AbstractPokerCommand):void



	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
