import {ArrayBufferBuilder} from "../../../utils/ArrayBufferBuilder";
import {LogItem} from "./LogItem";

/**
 * Created by gsemerdjiev on 15.7.2016 г..
 */
export class ArrayBufferLogItem extends LogItem {
	public static TYPE = "ArrayBufferLogItem";

	public data:ArrayBuffer;

	constructor(data?:ArrayBuffer | ArrayBufferBuilder, begin?:number, end?:number, timestamp?:Date, type:string = ArrayBufferLogItem.TYPE) {
		super(timestamp, type);

		if (data instanceof  ArrayBufferBuilder) {
			this.data = data.getBufferSlice(begin, end);
		} else if (data instanceof  ArrayBuffer) {
			this.data = data.slice(begin, end);
		}
	}
}
