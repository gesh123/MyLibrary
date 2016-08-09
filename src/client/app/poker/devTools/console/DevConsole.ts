class ConsoleLogger {

	public enabled:boolean;
	public colorize:boolean;
	public useTimestamp:boolean
	public divLogId:string;

	/** This function is used beacuse we cannot call console.log.apply. You can find more about this here - http://stackoverflow.com/questions/5472938/does-ie9-support-console-log-and-is-it-a-real-function */
	protected consoleLog:Function;

	constructor() {
		this.enabled = true;
		this.colorize = true;
		this.useTimestamp = true;
		this.divLogId = "#div-log";

		this.consoleLog = Function.prototype.bind.call( console.log, console );
	}

	public write( rest:any[], style:string ):void {
		if (!this.enabled) {
			return;
		}

		let restCount:number = rest.length;
		let item:Object;
		let itemClassName:string;


		if (this.useTimestamp) {
			rest = this.addTimestamp( rest );
		}

		if (this.colorize) {
			rest = this.colorizeStrings( rest, style );
		}

		this.consoleLog.apply( console, rest );
		//console.info(...rest);
		//console.log(...rest);
	}

	protected colorizeStrings( params:any[], style:string ):any[] {
		const prefix:string = "%c";
		let paramsCount:number = 1; // params.length; // the console is not properlya pplying the rest stile parameters after the first style
		let item:any;

		for (let i = 0; i < paramsCount; i++) {
			item = params[i];

			if (typeof item === "string") {
				if (item.substr( 0, prefix.length ) != prefix) {
					params[i] = prefix + item;
					i++;
					params.splice( i, 0, style );
				} else {
					i++;
				}
			}
		}

		return params;
	}

	protected addTimestamp( params:any[], date:Date = new Date() ):any[] {
		let first:any = params[0];
		let timestamp:string = `[ ${this.toTimestamp(date)} ] :`;

		if (typeof first === "string") {
			params[0] = `${timestamp} ${first}`;
		} else {
			params.unshift( timestamp );
		}

		return params;
	}

	protected toTimestamp( date:Date ):string {
		return    this.pad( date.getHours() ) +
			':' + this.pad( date.getMinutes() ) +
			':' + this.pad( date.getSeconds() ) +
			'.' + (date.getMilliseconds() / 1000).toFixed( 3 ).slice( 2, 5 );
	};

	protected pad( n:number ):string {
		if (n < 10) {
			return '0' + n;
		}

		return n.toString();
	}
}

export class DevConsole {

	protected static logger:ConsoleLogger = new ConsoleLogger();

	public static log( ...rest:any[] ):void {
		this.logger.write( rest, Styles.LOG );
	}

	public static  warning( ...rest:any[] ):void {
		this.logger.write( rest, Styles.WARNING );
	}

	public static  error( ...rest:any[] ):void {
		this.logger.write( rest, Styles.ERROR );
	}

	public static receivedCommand( ...rest:any[] ):void {
		this.logger.write( rest, Styles.RECEIVED_COMMAND );
	}

	public static sentCommand( ...rest:any[] ):void {
		this.logger.write( rest, Styles.SENT_COMMAND );

	}
}

class Styles {
	public static LOG:string = "background: #9F9;";
	public static WARNING:string = "background: #FF9;";
	public static ERROR:string = "background: #F99;";
	public static RECEIVED_COMMAND:string = "background: #9FF;";
	public static SENT_COMMAND:string = "background: #99F;";
}

