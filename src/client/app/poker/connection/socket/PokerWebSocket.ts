import {AbstractConnection} from "../AbstractConnection";
import {SignalOne} from "../../signals/SignalOne";
import {Signal} from "../../signals/Signal";
import {DevConsole} from "../../devTools/console/DevConsole";

/**
 * Created by hivaga on 7/14/2016.
 */
export class PokerWebSocket implements AbstractConnection
{

	// -----------------------------------------
	// STATIC PROPERTIES
	// -----------------------------------------

	public static STATE_NOT_INITIALIZED:number = -1;
	public static STATE_CLOSED:number = WebSocket.CLOSED;
	public static STATE_CLOSING:number = WebSocket.CLOSING;
	public static STATE_CONNECTING:number = WebSocket.CONNECTING;
	public static STATE_OPEN:number = WebSocket.OPEN;

	protected static EVENT_CLOSING:string = "closing";
	protected static EVENT_CLOSE:string = "close";
	protected static EVENT_OPEN:string = "open";
	protected static EVENT_MESSAGE:string = "message";
	protected static EVENT_ERROR:string = "error";

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	public onData = new SignalOne<ArrayBuffer>();
	public onStateChange = new SignalOne<number>();
	public onClosing = new Signal();
	public onClosed = new Signal();
	public onConnecting = new Signal();
	public onConnected = new Signal();
	public onError = new SignalOne<ErrorEvent>();

	// -----------------------------------------
	// protected PROPERTIES
	// -----------------------------------------


	protected socket:WebSocket;
	protected url:string = "";
	protected port:number = 0;


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor()
	{

	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------


	public get connectionURL():string
	{
		return 'ws:\\' + this.url + ':' + this.port.toString();
	}

	public connect(url:string, port?:number):void
	{

		DevConsole.log("PokerWebSocket.connect", url, port);

		// connect could be called serveral times we need to clean previous sockets.
		this.disconnect();
		this.removeSocketListeners(this.socket);
		this.onConnecting.dispatch();
		this.url = url;
		this.port = port;
		this.init();
	}

	public disconnect():void
	{
		if (this.socket)
		{
			// default  CloseEvent.code.CLOSE_NORMAL == 1000, reason is human readable string
			this.socket.close(1000, 'PokerWebSocket.disconnect()');
		}
	};

	public send(data:any):void
	{
		if (this.socket && this.socket.readyState == WebSocket.OPEN && data instanceof ArrayBuffer)
		{
			DevConsole.log("PokerWebSocket.send", data);

			this.socket.send(data);
			return;
		}

		DevConsole.log("PokerWebSocket.send", "Can't send data:", data);

	}

	/* Calling this method should make the PokerWebScoket ready for garbage collection */
	public destroy():void
	{
		this.disconnect();
		this.onData.removeAll();
		this.onStateChange.removeAll();
		this.onClosing.removeAll();
		this.onClosed.removeAll();
		this.onConnecting.removeAll();
		this.onConnected.removeAll();
		this.onError.removeAll();
	}

	public get state():number
	{
		if (!this.socket)
		{
			return PokerWebSocket.STATE_NOT_INITIALIZED;
		}

		return this.socket.readyState;
	}


	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------
	protected init():void
	{
		DevConsole.log("PokerWebSocket.init");
		this.socket = new WebSocket(this.connectionURL);
		this.socket.binaryType = "arraybuffer";
		this.addSocketListeners(this.socket);
		this.onStateChange.dispatch(this.socket.readyState);
	}


	protected socketOpenHandler = (e:Event):void =>
	{
		DevConsole.log("PokerWebSocket.socketOpenHandler");
		this.onStateChange.dispatch(this.socket.readyState);
		this.onConnected.dispatch();
	}

	protected onSocketCloseHandler = (e:CloseEvent):void =>
	{
		DevConsole.log("PokerWebSocket.onSocketCloseHandler");
		this.onStateChange.dispatch(this.socket.readyState);
		this.onClosed.dispatch();
	}

	protected socketClosingHandler = (e:Event):void =>
	{
		DevConsole.log("PokerWebSocket.socketClosingHandler");
		this.onStateChange.dispatch(this.socket.readyState);
		this.onClosing.dispatch();
	}

	protected socketErrorHandler = (e:ErrorEvent):void =>
	{
		DevConsole.log("PokerWebSocket.socketErrorHandler");
		this.onStateChange.dispatch(this.socket.readyState);
		this.onError.dispatch(e);
	}

	protected socketMessageHandler = (e:MessageEvent):void =>
	{
		DevConsole.log("PokerWebSocket.socketMessageHandler");
		this.onData.dispatch(e.data);

	}

	// -----------------------------------------
	// protected METHODS
	// -----------------------------------------

	protected addSocketListeners(socket:WebSocket):void
	{

		if (!socket)
		{
			return;
		}

		socket.addEventListener(PokerWebSocket.EVENT_OPEN, this.socketOpenHandler);
		socket.addEventListener(PokerWebSocket.EVENT_CLOSE, this.onSocketCloseHandler);
		socket.addEventListener(PokerWebSocket.EVENT_CLOSING, this.socketClosingHandler);
		socket.addEventListener(PokerWebSocket.EVENT_ERROR, this.socketErrorHandler);
		socket.addEventListener(PokerWebSocket.EVENT_MESSAGE, this.socketMessageHandler);

	}

	protected removeSocketListeners(socket:WebSocket):void
	{

		if (!socket)
		{
			return;
		}

		socket.removeEventListener(PokerWebSocket.EVENT_OPEN, this.socketOpenHandler);
		socket.removeEventListener(PokerWebSocket.EVENT_CLOSE, this.onSocketCloseHandler);
		socket.removeEventListener(PokerWebSocket.EVENT_CLOSING, this.socketClosingHandler);
		socket.removeEventListener(PokerWebSocket.EVENT_ERROR, this.socketErrorHandler);
		socket.removeEventListener(PokerWebSocket.EVENT_MESSAGE, this.socketMessageHandler);

	}


}
