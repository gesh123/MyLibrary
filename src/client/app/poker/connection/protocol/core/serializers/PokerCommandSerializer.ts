import {IPokerCommandSerializer} from "./IPokerCommandSerializer";
import {IPokerCommand} from "../commands/IPokerCommand";
import {ICommandSerializersMap} from "../maps/ICommandSerializersMap";
import {ICommandsMap} from "../maps/ICommandMap";
import {PokerCommandHeader} from "../data/PokerCommandHeader";
import {PokerCommandHeaderSerializer} from "./PokerCommandHeaderSerializer";
import {UnknownCommandSerializer} from "./UnknownCommandSerializer";
import {ArrayBufferBuilder} from "../../../../utils/ArrayBufferBuilder";
import {UnknownCommand} from "../commands/UnknownCommand";
import {PokerGeneratedCommandSerializersMap} from "../../generated/Maps/CommandSerializersMap";
import {PokerGeneratedCommandsMap} from "../../generated/Maps/CommandsMap";
import {PokerFailedCommand} from "../commands/FailedCommand";
import {AbstractPokerCommand} from "../commands/AbstractPokerCommand";


/**
 * Created by hivaga on 7/14/2016.
 */
export class PokerCommandsSerializer implements IPokerCommandSerializer {

	// -----------------------------------------
	// PUBLIC PROPERTIES
	// -----------------------------------------

	// -----------------------------------------
	// PROTECTED PROPERTIES
	// -----------------------------------------
	protected static SERIALIZERS_MAP:ICommandSerializersMap = new PokerGeneratedCommandSerializersMap();
	protected static COMMANDS_MAP:ICommandsMap = new PokerGeneratedCommandsMap();

	// -----------------------------------------
	// PRIVATE PROPERTIES
	// -----------------------------------------
	private header:PokerCommandHeader;
	private headerSerializer:PokerCommandHeaderSerializer;


	// -----------------------------------------
	// CONSTRUCTOR
	// -----------------------------------------


	constructor() {

		this.header = new PokerCommandHeader();
		this.headerSerializer = new PokerCommandHeaderSerializer();
	}


	// -----------------------------------------
	// PUBLIC METHODS
	// -----------------------------------------


	/**
	 * Writes(serializes) a Command into ArrayBufferBuilder.
	 *
	 * @param {ArrayBufferBuilder} buffer the stream/buffer/byte array where the serialized command will be written
	 * @param {Command} command    the command which have to be written
	 */
	public serialize( buffer:ArrayBufferBuilder, command:IPokerCommand ):void {
		let serializer:IPokerCommandSerializer = this.getCommandSerializer( command );
		serializer.serialize( buffer, command );
	}

	/**
	 * Reads(deserializes) a Poker Command from ArrayBufferBuilder
	 *
	 * @param {ArrayBufferBuilder} buffer the stream/buffer/byte array from which the command will be read/extracted and deserialized
	 */
	public deserialize( buffer:ArrayBufferBuilder ):IPokerCommand {
		let header:PokerCommandHeader = new PokerCommandHeader();
		PokerCommandHeaderSerializer.deserialize( buffer, header );
		buffer.pointer -= PokerCommandHeader.HEADER_SIZE_BYTES;
		let commandClass:{new():IPokerCommand} = PokerCommandsSerializer.COMMANDS_MAP.getCommand( header.pid, header.cid ) || UnknownCommand;
		let command:IPokerCommand = new commandClass();
		let serializer:IPokerCommandSerializer = this.getCommandSerializer( command );

		try {
			serializer.deserialize( buffer, command );
		} catch (err) {
			command = new PokerFailedCommand( command as AbstractPokerCommand );
		}

		return command;
	}

	// -----------------------------------------
	// PROTECTED METHODS
	// -----------------------------------------


	protected getCommandSerializer( commnad:IPokerCommand ):IPokerCommandSerializer {
		if (commnad instanceof UnknownCommand) {
			return <IPokerCommandSerializer>UnknownCommandSerializer;
		}

		let serializer:IPokerCommandSerializer = PokerCommandsSerializer.SERIALIZERS_MAP.getCommand( commnad.pid, commnad.cid );

		return serializer || UnknownCommandSerializer;
	}


	// -----------------------------------------
	// PRIVATE METHODS
	// -----------------------------------------


}
