
import { PokerTourMoneyData } from "./PokerTourMoneyData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourMoneyData extends AbstractData {
	public tourMoneyVO:PokerTourMoneyData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
