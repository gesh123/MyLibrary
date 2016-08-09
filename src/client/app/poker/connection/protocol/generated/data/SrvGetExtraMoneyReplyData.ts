
import { PokerExtraMoneyResponseData } from "./PokerExtraMoneyResponseData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvGetExtraMoneyReplyData extends AbstractData {
	public extraMoneyReplay:PokerExtraMoneyResponseData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
