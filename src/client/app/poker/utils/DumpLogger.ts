
export class DumpLogger {

	protected startTime: Date;
	protected logs: Array<LogItem>;

    public enabled: boolean

	constructor(startTime?: Date) {
		this.startTime = startTime || new Date();
        this.logs = [];

        this.enabled = true;
	}

    public log(data: IStringDumpable | Object, infoMessage?: string): void {
        if (this.enabled == false) return;

		var dumpData: IStringDumpable;
		
		if (data.hasOwnProperty("getStringDump") == true) {
			dumpData = <IStringDumpable>data;
		} else {
			dumpData = new StringDumpableWrapper(data);
		}
		
		var now: Date = new Date();
		var item: LogItem = new LogItem(new Date(now.getTime() - this.startTime.getTime()), dumpData, infoMessage);

		this.logs.push(item);
	}

	public getDump(): string {
		var result: string = "";
		var item: LogItem;

		for (var i = 0; i < this.logs.length; i++) {
			item = this.logs[i];

			result += "/* " + item.time.getTime() + " " + (item.infoMessage || "" ) + " */ " + item.data.getStringDump() + "\n";
		}

		return result;
	}
}
	
class LogItem {
	constructor(
		public time: Date,
		public data: IStringDumpable,
		public infoMessage?: string 
	) { }
}

export interface IStringDumpable {
	getStringDump(): string
}

class StringDumpableWrapper implements IStringDumpable {
	constructor(
		public data: Object
	) { }

	public getStringDump(): string {
		var result: string = "/* " + this.data.toString() + " */";

		return result;
	}
}
