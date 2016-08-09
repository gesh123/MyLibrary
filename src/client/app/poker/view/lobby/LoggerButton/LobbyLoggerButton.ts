/* Created by hivaga on 8/8/2016. */

import {Component} from "@angular/core";
import {DevLogger} from "../../../devTools/logger/DevLogger";
import {Button} from 'primeng/primeng';

@Component({
	selector: "LobbyLoggerButton",
	template: `<button pButton type="button" 
(click)="onclickHandler()"
label="Logger"></button>`,
	directives:[Button]
})

export class LobbyLoggerButton
{
	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// @INPUT PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// @OUTPUT PROPERTIES
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

	constructor(private logger:DevLogger)
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
	private onclickHandler():void
	{
		let result:string = this.logger.serialize();
		console.log(result);
	}


}
