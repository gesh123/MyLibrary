
import { LobbySubscribeGameData } from "./LobbySubscribeGameData";
import { UnsubscribeGameTypeData } from "./UnsubscribeGameTypeData";



import { AbstractData } from "../../core/data/AbstractData";

export class ClGetServerInfoData extends AbstractData {
	public subscribeVectorLength:number;
		public unsubscribeVectorLength:number;
		public subscribeVector:LobbySubscribeGameData[];
		public unsubscribeVector:UnsubscribeGameTypeData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
