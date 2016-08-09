
import { PokerNetworkInfoData } from "./PokerNetworkInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvNetworksConfigurationData extends AbstractData {
	public networkConfigLength:number;
		public resetAll:boolean;
		public networkConfigVect:PokerNetworkInfoData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
