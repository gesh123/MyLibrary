import {AbstractDependanciesBuilder} from "../../common/AbstractDependanciesBuilder";
import {PokerLobbyModel} from "../../common/model/PokerLobbyModel";
import {PokerUserModel} from "../../common/model/PokerUserModel";
import {PokerConfigurationsModel} from "../../common/model/PokerConfigurationsModel";
import {PokerControllersMap} from "../../common/controller/PokerControllersMap";
import {AbstractSignalsBus} from "../../common/signals/AbstractSignalsBus";
import {PokerBrowserSignalsBus} from "./PokerBrowserSignalsBus";
/**
 * Created by hivaga on 7/29/2016.
 */
export class PokerBrowserApplicationDependenciesBuilder extends AbstractDependanciesBuilder
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

	/* Hook method for adding all controller mappings */
	public static initControllerMap(controllerMap:PokerControllersMap):PokerControllersMap
	{

		// you need to call super to finalize the mappings procedure
		return AbstractDependanciesBuilder.initControllerMap(controllerMap);
	}


	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------
	/*Hook method override and add here all Signals Dependencies */
	protected addSignalDependencies():void
	{
		this.add(AbstractSignalsBus, {useClass: PokerBrowserSignalsBus});
	}

	/*Hook method override and add here all Model Dependencies */
	protected addModelDependencies():void
	{
		this.add(PokerLobbyModel);
		this.add(PokerUserModel);
		this.add(PokerConfigurationsModel);
	}

	/*Hook method override and add here all Service Dependencies */
	protected addServiceDependencies():void
	{
		this.add(PokerControllersMap);
	}


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}
