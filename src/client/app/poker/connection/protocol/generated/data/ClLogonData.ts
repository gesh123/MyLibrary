
import { HardwareInfoData } from "./HardwareInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClLogonData extends AbstractData {
	public username:string;
		public password:string;
		public passwordHashed:boolean;
		public isHardwareInfoAvailable:boolean;
		public hardwareInfo:HardwareInfoData;
		
		public checkPlayMoneyMessage:boolean;
		public logonType:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
