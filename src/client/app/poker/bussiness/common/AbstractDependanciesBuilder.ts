import {DevConsole} from "../../devTools/console/DevConsole";
import {PokerControllersMap} from "./controller/PokerControllersMap";

/**
 * Created by hivaga on 7/29/2016.
 */
export abstract class AbstractDependanciesBuilder
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

	protected providers:ProviderType[];


	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor()
	{
		DevConsole.log(this.constructor, "Dependencies builder created !!!");

		this.providers = [];

		this.addSignalDependencies();
		this.addModelDependencies();
		this.addServiceDependencies();
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public static initControllerMap(controllerMap:PokerControllersMap):PokerControllersMap
	{
		// you need to call start to finalize the controllerMap mappings
		controllerMap.start();

		return controllerMap;
	}

	public getProviders():any[]
	{
		return this.providers;
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------

	/*Hook method override and add here all Signals Dependencies */
	protected abstract addSignalDependencies():void

	/*Hook method override and add here all Model Dependencies */
	protected abstract addModelDependencies():void

	/*Hook method override and add here all Service Dependencies */
	protected abstract addServiceDependencies():void

	/* Call this method to append a dependency to the dependencies array */
	protected add(provider:any,
		properties:ProviderProperties = {})
	{

		let providerObj:ProviderType = {provide: provider, useClass: provider};

		for (let key in properties)
		{
			if (properties.hasOwnProperty(key))
			{
				(providerObj as any)[key] = (properties as any)[key];
			}
		}

		this.providers.push(providerObj);
	}


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

}


type ProviderType = {
	provide:any,
	useClass?:any,
	useExisting?:any,
	useValue?:any,
	useFactory?:any
};

type ProviderProperties = {
	useClass?:any,
	useExisting?:any,
	useValue?:any,
	useFactory?:any
};

