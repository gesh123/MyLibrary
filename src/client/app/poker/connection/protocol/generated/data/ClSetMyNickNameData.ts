
import { HardwareInfoData } from "./HardwareInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClSetMyNickNameData extends AbstractData {
	public username:string;
		public passwordHash:string;
		public nickname:string;
		public isHardwareInfoAvailable:boolean;
		public hardwareInfo:HardwareInfoData;
		
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
