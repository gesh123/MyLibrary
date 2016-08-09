
import { BinaryRawData } from "../../core/data/BinaryRawData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClSSLDataData extends AbstractData {
	public sslDataLength:number;
		public sslData:BinaryRawData;
		public tlsType:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
