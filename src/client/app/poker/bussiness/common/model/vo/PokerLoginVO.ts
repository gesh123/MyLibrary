import {PokerLogonTypeConsts} from "../../consts/PokerLogonTypeConsts";
/**
 * Created by hivaga on 8/2/2016.
 */
export class PokerLoginVO
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


	constructor(public username:string,
		public password:string,
		public isPasswordHashed:boolean = true,
		public type:PokerLogonTypeConsts = PokerLogonTypeConsts.NORMAL)
	{

	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
