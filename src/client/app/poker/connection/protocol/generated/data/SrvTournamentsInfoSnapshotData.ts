
import { TourSnapshotInfoData } from "./TourSnapshotInfoData";



import { AbstractData } from "../../core/data/AbstractData";

export class SrvTournamentsInfoSnapshotData extends AbstractData {
	public tourSnapshotInfosVect:TourSnapshotInfoData[];
		

	constructor(parent?:AbstractData) {
		super(parent);
	}
}
