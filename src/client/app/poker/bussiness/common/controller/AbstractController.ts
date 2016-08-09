/**
 * Created by hivaga on 7/29/2016.
 *
 * All controllers will extend this class with concrete implementations
 * for the execute method.
 */
export abstract class AbstractController
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

	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public abstract execute(...any:any[]):void | Promise<any>

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
