import {OnInit, OnDestroy} from "@angular/core";
import {DevConsole} from "../../devTools/console/DevConsole";
/**
 * Created by hivaga on 8/1/2016.
 */
export abstract class AbstractAngularComponent implements OnInit, OnDestroy
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


	constructor(...any:any[])
	{
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------


	public ngOnInit():any
	{
		DevConsole.log("AbstractAngularComponent.ngOnInit", this.constructor);
	}


	public ngOnDestroy():any
	{
		DevConsole.log("AbstractAngularComponent.ngOnDestroy", this.constructor);
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
