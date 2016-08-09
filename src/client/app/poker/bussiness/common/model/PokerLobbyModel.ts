import {AbstractModel} from "./AbstractModel";
import {LobbyStatesEnum} from "../../lobby/consts/LobbyStatesEnum";
import {Signal} from "../../../signals/Signal";
/**
 * Created by hivaga on 7/29/2016.
 */
export class PokerLobbyModel extends AbstractModel
{
	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------
	public onStateChanged:Signal = new Signal();

	private _state:LobbyStatesEnum = LobbyStatesEnum.LOADING;

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
	public set state(value:LobbyStatesEnum)
	{
		if(this._state == value)
		{
			return;
		}

		this._state = value;

		this.onStateChanged.dispatch(value);
	}


	public get state():LobbyStatesEnum
	{
		return this._state;
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
