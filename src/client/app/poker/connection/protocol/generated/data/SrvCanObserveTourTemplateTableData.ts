
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvCanObserveTourTemplateTableData extends AbstractData {
	public tourNetworkIDVO:BinaryNetworkID;
		public canObserveTourTemplateTable:boolean;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
