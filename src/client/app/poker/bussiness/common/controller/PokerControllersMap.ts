import {ReflectiveInjector, Injectable, Injector} from "@angular/core";
import {Signal} from "../../../signals/Signal";
import {AbstractPokerCommand} from "../../../connection/protocol/core/commands/AbstractPokerCommand";
import {AbstractController} from "./AbstractController";
import {AbstractSrvCommandController} from "./AbstractSrvCommandController";
import {DevConsole} from "../../../devTools/console/DevConsole";
import {PokerUnknownCommandController} from "./PokerUnknownCommandController";

/**
 * Created by hivaga on 26.7.2016 г..
 */
@Injectable()
export class PokerControllersMap
{

	protected commandsMap:{[uid:number]:AbstarctCommandControllerConstructor};
	protected signalsMap:Map<Signal, ControllerInvocationObject>;
	protected injector:ReflectiveInjector;
	protected dependencies:AbstractControllerConstructor[];
	protected parentInjector:Injector;

	/*Controller map should not be initialized only once*/
	protected initialized:boolean = false;

	constructor(injector:Injector)
	{

		this.dependencies = [PokerUnknownCommandController];
		this.signalsMap = new Map<Signal, ControllerInvocationObject>();
		this.commandsMap = [];

		this.parentInjector = injector;
	}

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public map(invoker:number|Signal,
		controllerConstructor:AbstractControllerConstructor,
		singleton:boolean = true):void
	{

		if (invoker instanceof Signal)
		{
			let invocationFunc:ControllerInvocationFunction = (...any) =>
			{
				let signalController:AbstractController = this.getControllerBySignal(invoker);
				signalController.execute.apply(signalController, any);
			};

			this.signalsMap.set(invoker, {controllerConstructor: controllerConstructor,
				function: invocationFunc,
				isSingleton:singleton});

			invoker.add(invocationFunc);
		} else
		{

			this.commandsMap[invoker] = controllerConstructor;
		}

		// this means that we are going to map this controller constructor as provider into the map's injector
		// and aways return same instance of controller.
		if (singleton)
		{
			this.dependencies.push(controllerConstructor);
		}
	}

	/* Return controller for commands recieved from server */
	public getControllerByCommand(command:AbstractPokerCommand):AbstractController
	{

		let controllerConstructor:AbstarctCommandControllerConstructor = this.commandsMap[command.uid] || PokerUnknownCommandController;
		let cmdController:AbstractSrvCommandController = this.injector.get(controllerConstructor);

		return cmdController;
	}

	/* Return controller instance mapped ot a signal */
	public getControllerBySignal(signal:Signal):AbstractController
	{
		let invocationObject:ControllerInvocationObject = this.signalsMap.get(signal);
		let cmdController:AbstractController;

		if(invocationObject.isSingleton)
		{
			cmdController = this.injector.get(invocationObject.controllerConstructor);
		}else{
			cmdController = this.injector.resolveAndInstantiate(invocationObject.controllerConstructor);
		}

		return cmdController;
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------

	/* You need to call this method after all the mappings have been added to the controller map */
	public start():void
	{
		if(this.initialized)
		{
			DevConsole.error("PokerControllersMap.start", "Controller allready have been started !");
			return;
		}

		this.injector = ReflectiveInjector.resolveAndCreate(
			this.dependencies,
			this.parentInjector
		);

		this.initialized = true;
	}

}

type  AbstarctCommandControllerConstructor = new(...args:any[]) => AbstractSrvCommandController;

type ControllerInvocationObject = {
	controllerConstructor:new(...args:any[]) => AbstractController,
	function:ControllerInvocationFunction
	isSingleton:boolean
}

type ControllerInvocationFunction = (...any:any[]) => void;


type AbstractControllerConstructor = new(...args:any[]) => AbstractController;
