import {Injectable} from "@angular/core";
import {LobbySignalsBus} from "../../signals/LobbySignalsBus";
import {AbstractSrvCommandController} from "../../../common/controller/AbstractSrvCommandController";
import {SrvLogonErrorCommand} from "../../../../connection/protocol/generated/commands/SrvLogonErrorCommand";
import {DevConsole} from "../../../../devTools/console/DevConsole";
/**
 * Created by hivaga on 8/2/2016.
 */
@Injectable()
export class SrvLogonErrorCommandController extends AbstractSrvCommandController
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


	constructor(private signalsBus:LobbySignalsBus)
	{
		super();
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public execute(command:SrvLogonErrorCommand):void
	{
		DevConsole.log("SrvLogonErrorCommandController.execute");
		this.signalsBus.onSrvLogonError.dispatch(command.data);
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
