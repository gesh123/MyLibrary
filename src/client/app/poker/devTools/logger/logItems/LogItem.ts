/**
 * Created by gsemerdjiev on 15.7.2016 г..
 */
export class LogItem {
	public static TYPE = "LogItem";

	public timestamp:Date;
	public type:string;


	constructor(timestamp?:Date, type:string = LogItem.TYPE) {
		this.timestamp = timestamp || new Date();
		this.type = type;
	}
}
