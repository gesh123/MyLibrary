import {AbstractAngularComponent} from "./AbstractAngularComponent";
import {PokerControllersMap} from "../../bussiness/common/controller/PokerControllersMap";
import {Injector} from "@angular/core";
import {AbstractSignalsBus} from "../../bussiness/common/signals/AbstractSignalsBus";
/**
 * Created by hivaga on 8/1/2016.
 */
export abstract class AbstractRoot extends AbstractAngularComponent
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
	protected injector:Injector;
	protected signalsBus:AbstractSignalsBus;
	protected controllerMap:PokerControllersMap;

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor(injector:Injector,
		controllerMap:PokerControllersMap,
		signalsBus:AbstractSignalsBus,
		controllerMapConstructor:ControllerMapConstructorFuction)
	{
		super();

		this.signalsBus = signalsBus;
		this.controllerMap = controllerMapConstructor(controllerMap, signalsBus);

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


type ControllerMapConstructorFuction = (controllerMap:PokerControllersMap, signalBus:AbstractSignalsBus)=>PokerControllersMap;
