
import { LobbyLogonErrorData } from "./LobbyLogonErrorData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvLogonErrorData extends AbstractData {
	public errorVO:LobbyLogonErrorData;
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
