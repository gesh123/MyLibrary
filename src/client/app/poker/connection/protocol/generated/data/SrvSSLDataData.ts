
import { BinaryRawData } from "../../core/data/BinaryRawData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvSSLDataData extends AbstractData {
	public sslDataLength:number;
		public sslData:BinaryRawData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
