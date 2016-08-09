
import { PokerTourMoneyChooserData } from "./PokerTourMoneyChooserData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class ClTourRegisterData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public password:string;
		public compsChoice:PokerTourMoneyChooserData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
