
import { PokerTournamentDetails1Data } from "./PokerTournamentDetails1Data";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourDetailsData extends AbstractData {
	public tourDetailsVO:PokerTournamentDetails1Data;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
