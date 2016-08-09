

import {AbstractPokerCommand} from "./AbstractPokerCommand";

/**
 * This command is used when a command is recived whose command id and processor id are not defined
 * in the commands map - Poker.Network.Protocol.Maps.getCommandsMap()
 */
export class UnknownCommand extends AbstractPokerCommand
{
  public static NAME:string = "UnknownCommand";

  constructor(pid?:number, cid?:number, name:string = UnknownCommand.NAME)
  {
    super();

    this.init(pid, cid, name);
  }
}
