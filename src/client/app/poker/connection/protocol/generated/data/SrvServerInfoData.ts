
import { ServerUpdateInfoData } from "./ServerUpdateInfoData";
import { LobbySubscribeGameData } from "./LobbySubscribeGameData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvServerInfoData extends AbstractData {
	public serverUpdateInfo:ServerUpdateInfoData;
		public gameTypeStructure:LobbySubscribeGameData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
