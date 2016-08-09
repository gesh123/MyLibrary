
import { PotInfoData } from "./PotInfoData";

import { BinaryCard } from "../../core/data/BinaryCard";



import { AbstractData } from "../../core/data/AbstractData";

export class TableBaseStateData extends AbstractData {
	public potInfo:PotInfoData;
		public dealer:number;
		public activePlayer:number;
		public rake:number;
		public jackpotFee:number;
		public potCards:BinaryCard[];
		public gameRound:number;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
