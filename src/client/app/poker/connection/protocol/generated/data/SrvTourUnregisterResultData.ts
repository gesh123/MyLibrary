
import { ChooserData } from "./ChooserData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTourUnregisterResultData extends AbstractData {
	public reason:number;
		public tourNetworkIDVO:BinaryNetworkID;
		public chooser:ChooserData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
