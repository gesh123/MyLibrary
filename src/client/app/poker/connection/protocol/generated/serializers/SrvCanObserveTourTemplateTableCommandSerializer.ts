
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvCanObserveTourTemplateTableCommand } from "../commands/SrvCanObserveTourTemplateTableCommand";
import { SrvCanObserveTourTemplateTableData } from "../data/SrvCanObserveTourTemplateTableData";
import { SrvCanObserveTourTemplateTableDataSerializer } from "./SrvCanObserveTourTemplateTableDataSerializer";


export class SrvCanObserveTourTemplateTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvCanObserveTourTemplateTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvCanObserveTourTemplateTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvCanObserveTourTemplateTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvCanObserveTourTemplateTableData();
            SrvCanObserveTourTemplateTableDataSerializer.deserialize(buffer, command.data);
	}
}
