import {UnknownCommand} from "../commands/UnknownCommand";
import {ArrayBufferBuilder} from "../../../../utils/ArrayBufferBuilder";
import {PokerCommandHeaderSerializer} from "./PokerCommandHeaderSerializer";
import {PokerCommandHeader} from "../data/PokerCommandHeader";

/**
 * This serializers is used to read/write data for the "special" UnknownCommands.
 * It will only read/write the header and simply move the ArrayBufferBuilder's pointer according to the header size. No other data will be read/written.
 */
export class UnknownCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: UnknownCommand): void {
    PokerCommandHeaderSerializer.serialize(buffer, command.header);

		buffer.pointer += command.header.size
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: UnknownCommand ): void {
    PokerCommandHeaderSerializer.deserialize(buffer, command.header);

		// command.header.size is the total command size (header + data)
		// Because the header is already read its size is subtracted from the command.header.size
		// and the pointer is moved with the resulting value
		buffer.pointer += command.header.size - PokerCommandHeader.HEADER_SIZE_BYTES;
	}
}
