
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTournamentsInfoSnapshotCommand } from "../commands/SrvTournamentsInfoSnapshotCommand";
import { SrvTournamentsInfoSnapshotData } from "../data/SrvTournamentsInfoSnapshotData";
import { SrvTournamentsInfoSnapshotDataSerializer } from "./SrvTournamentsInfoSnapshotDataSerializer";


export class SrvTournamentsInfoSnapshotCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTournamentsInfoSnapshotCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTournamentsInfoSnapshotDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTournamentsInfoSnapshotCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTournamentsInfoSnapshotData();
            SrvTournamentsInfoSnapshotDataSerializer.deserialize(buffer, command.data);
	}
}
