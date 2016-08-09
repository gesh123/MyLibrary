import {Signal} from "../signals/Signal";
import {SignalOne} from "../signals/SignalOne";
import {AbstractPokerCommand} from "./protocol/core/commands/AbstractPokerCommand";

/**
 * Created by hivaga on 7/14/2016.
 */
export abstract class AbstractConnection
{

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------
	public connectionURL:string;
	public state:number;

	public onData:SignalOne<ArrayBuffer | AbstractPokerCommand>;
	public onStateChange:SignalOne<number>;
	public onClosing:Signal;
	public onClosed:Signal;
	public onConnecting:Signal;
	public onConnected:Signal;
	public onError:SignalOne<ErrorEvent>;

	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------

	public abstract connect(url:string, port?:number):void;

	public abstract disconnect():void;

	public abstract send(data:any):void;

	public abstract destroy():void;


}
