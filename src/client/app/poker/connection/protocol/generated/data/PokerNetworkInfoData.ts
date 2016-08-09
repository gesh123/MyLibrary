
import { PokerServerLocationData } from "./PokerServerLocationData";



import { AbstractData } from "../../core/data/AbstractData";

export class PokerNetworkInfoData extends AbstractData {
	public networkID:number;
		public hasInvalidFranchiseID:boolean;
		public networkFranchiseID:number;
		
		public networkCurrencyType:number;
		public timeZone:number;
		public locationsVect:PokerServerLocationData[];
		public cpRate:number;
		public tbRate:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
