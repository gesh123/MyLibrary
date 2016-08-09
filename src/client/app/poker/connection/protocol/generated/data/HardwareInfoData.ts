


import { AbstractData } from "../../core/data/AbstractData";

export class HardwareInfoData extends AbstractData {
	public MACsVect:string[];
		public HDDIDsVect:string[];
		public GUIDs:string;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
