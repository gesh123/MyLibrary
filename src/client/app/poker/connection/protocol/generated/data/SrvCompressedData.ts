
import { BinaryRawData } from "../../core/data/BinaryRawData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvCompressedData extends AbstractData {
	public uncompressedSourceSize:number;
		public compressedSourceSize:number;
		public compressedSource:BinaryRawData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
