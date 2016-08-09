
import { PokerTourFinishedPlayerInfoData } from "./PokerTourFinishedPlayerInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourFinishedInfoData extends AbstractData {
	public finishedPlayers:PokerTourFinishedPlayerInfoData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
