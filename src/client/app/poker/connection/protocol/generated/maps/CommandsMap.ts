
import { SrvHandShakeOKCommand } from "../commands/SrvHandShakeOKCommand";
import { SrvErrorDisconnectedCommand } from "../commands/SrvErrorDisconnectedCommand";
import { SrvConnectErrorCommand } from "../commands/SrvConnectErrorCommand";
import { SrvCompressedCommand } from "../commands/SrvCompressedCommand";
import { SrvSSLDataCommand } from "../commands/SrvSSLDataCommand";
import { SrvConnectGameOKCommand } from "../commands/SrvConnectGameOKCommand";
import { SrvServerInfoCommand } from "../commands/SrvServerInfoCommand";
import { SrvServerCountersInfoCommand } from "../commands/SrvServerCountersInfoCommand";
import { SrvGameInfoCommand } from "../commands/SrvGameInfoCommand";
import { SrvGameWaitersInfoCommand } from "../commands/SrvGameWaitersInfoCommand";
import { SrvAdminMsgCommand } from "../commands/SrvAdminMsgCommand";
import { SrvWaitListCommand } from "../commands/SrvWaitListCommand";
import { SrvHandWinnersCommand } from "../commands/SrvHandWinnersCommand";
import { SrvShowHandsCommand } from "../commands/SrvShowHandsCommand";
import { SrvPlayerChatMsgCommand } from "../commands/SrvPlayerChatMsgCommand";
import { SrvObserverChatMsgCommand } from "../commands/SrvObserverChatMsgCommand";
import { SrvPlayerDelayedFoldCommand } from "../commands/SrvPlayerDelayedFoldCommand";
import { SrvPlayerSecondsLeftToActCommand } from "../commands/SrvPlayerSecondsLeftToActCommand";
import { SrvAwayPlayerPickedUpCommand } from "../commands/SrvAwayPlayerPickedUpCommand";
import { SrvFinishedOnPlaceCommand } from "../commands/SrvFinishedOnPlaceCommand";
import { SrvAddToWaitListOkCommand } from "../commands/SrvAddToWaitListOkCommand";
import { SrvAddToWaitListErrorCommand } from "../commands/SrvAddToWaitListErrorCommand";
import { SrvRemoveFromWaitListOkCommand } from "../commands/SrvRemoveFromWaitListOkCommand";
import { SrvRemoveFromWaitListErrorCommand } from "../commands/SrvRemoveFromWaitListErrorCommand";
import { SrvLogonOkCommand } from "../commands/SrvLogonOkCommand";
import { SrvSitOkCommand } from "../commands/SrvSitOkCommand";
import { SrvBackOnSeatOkCommand } from "../commands/SrvBackOnSeatOkCommand";
import { SrvSitErrorCommand } from "../commands/SrvSitErrorCommand";
import { SrvLogonErrorCommand } from "../commands/SrvLogonErrorCommand";
import { SrvMoneyCommand } from "../commands/SrvMoneyCommand";
import { SrvUserStateOnTableCommand } from "../commands/SrvUserStateOnTableCommand";
import { SrvTableStateCommand } from "../commands/SrvTableStateCommand";
import { SrvCardDealCommand } from "../commands/SrvCardDealCommand";
import { SrvPotCardDealCommand } from "../commands/SrvPotCardDealCommand";
import { SrvTUShowDownCommand } from "../commands/SrvTUShowDownCommand";
import { SrvUserTurnCommand } from "../commands/SrvUserTurnCommand";
import { SrvUserExtraTurnCommand } from "../commands/SrvUserExtraTurnCommand";
import { SrvUserActionNotifyCommand } from "../commands/SrvUserActionNotifyCommand";
import { SrvBetRoundCompleteCommand } from "../commands/SrvBetRoundCompleteCommand";
import { SrvOutOfMoneyCommand } from "../commands/SrvOutOfMoneyCommand";
import { SrvUpdateHintTextCommand } from "../commands/SrvUpdateHintTextCommand";
import { SrvNewsCommand } from "../commands/SrvNewsCommand";
import { SrvSessionCreatedCommand } from "../commands/SrvSessionCreatedCommand";
import { SrvGameStartCommand } from "../commands/SrvGameStartCommand";
import { SrvAltCurrencyRateCommand } from "../commands/SrvAltCurrencyRateCommand";
import { SrvPingCommand } from "../commands/SrvPingCommand";
import { SrvPlayerProfileCommand } from "../commands/SrvPlayerProfileCommand";
import { SrvCashierStatusCommand } from "../commands/SrvCashierStatusCommand";
import { SrvRplHandHistoryCommand } from "../commands/SrvRplHandHistoryCommand";
import { SrvCatchThisNumberCommand } from "../commands/SrvCatchThisNumberCommand";
import { SrvTransferUncalledBetCommand } from "../commands/SrvTransferUncalledBetCommand";
import { SrvPrizePoolClosedCommand } from "../commands/SrvPrizePoolClosedCommand";
import { SrvPlayerRanksCommand } from "../commands/SrvPlayerRanksCommand";
import { SrvMoveDealChipCommand } from "../commands/SrvMoveDealChipCommand";
import { SrvHoldemPlayerPosCommand } from "../commands/SrvHoldemPlayerPosCommand";
import { SrvLogonChangeCommand } from "../commands/SrvLogonChangeCommand";
import { SrvRequestPassCommand } from "../commands/SrvRequestPassCommand";
import { SrvPasswordErrorCommand } from "../commands/SrvPasswordErrorCommand";
import { SrvDeadBetCommand } from "../commands/SrvDeadBetCommand";
import { SrvSetJackpotsCommand } from "../commands/SrvSetJackpotsCommand";
import { SrvUpdateJackpotsCommand } from "../commands/SrvUpdateJackpotsCommand";
import { SrvUserTurnTimeoutCommand } from "../commands/SrvUserTurnTimeoutCommand";
import { SrvUserTurnExtraTimeoutCommand } from "../commands/SrvUserTurnExtraTimeoutCommand";
import { SrvUserMoreMoneyNotifyCommand } from "../commands/SrvUserMoreMoneyNotifyCommand";
import { SrvDisconnectNotifyCommand } from "../commands/SrvDisconnectNotifyCommand";
import { SrvDrawCardsCommand } from "../commands/SrvDrawCardsCommand";
import { SrvUserDrawCardsNotifyCommand } from "../commands/SrvUserDrawCardsNotifyCommand";
import { SrvRakeRacePointsCommand } from "../commands/SrvRakeRacePointsCommand";
import { SrvUpdateTimeBankConfigCommand } from "../commands/SrvUpdateTimeBankConfigCommand";
import { SrvPlayerParticipationsCommand } from "../commands/SrvPlayerParticipationsCommand";
import { SrvNetworksConfigurationCommand } from "../commands/SrvNetworksConfigurationCommand";
import { SrvUnreadMessageCountCommand } from "../commands/SrvUnreadMessageCountCommand";
import { SrvGameResetCommand } from "../commands/SrvGameResetCommand";
import { SrvCardDeckInUseCommand } from "../commands/SrvCardDeckInUseCommand";
import { SrvBetRoundStartCommand } from "../commands/SrvBetRoundStartCommand";
import { ClHandShakeCommand } from "../commands/ClHandShakeCommand";
import { ClByeCommand } from "../commands/ClByeCommand";
import { ClSSLDataCommand } from "../commands/ClSSLDataCommand";
import { ClGetServerInfoCommand } from "../commands/ClGetServerInfoCommand";
import { ClGetGameInfoCommand } from "../commands/ClGetGameInfoCommand";
import { ClGetGameWaitersInfoCommand } from "../commands/ClGetGameWaitersInfoCommand";
import { ClGetCountersInfoCommand } from "../commands/ClGetCountersInfoCommand";
import { ClChatMsgCommand } from "../commands/ClChatMsgCommand";
import { ClAddToWaitListCommand } from "../commands/ClAddToWaitListCommand";
import { ClAddGlobalWaitListCommand } from "../commands/ClAddGlobalWaitListCommand";
import { ClRemoveFromWaitListCommand } from "../commands/ClRemoveFromWaitListCommand";
import { ClAcceptInviteCommand } from "../commands/ClAcceptInviteCommand";
import { ClRejectInviteCommand } from "../commands/ClRejectInviteCommand";
import { ClConnectGameCommand } from "../commands/ClConnectGameCommand";
import { ClLogonCommand } from "../commands/ClLogonCommand";
import { ClLogoutCommand } from "../commands/ClLogoutCommand";
import { ClGetMoneyCommand } from "../commands/ClGetMoneyCommand";
import { ClSitDownCommand } from "../commands/ClSitDownCommand";
import { ClMoreMoneyCommand } from "../commands/ClMoreMoneyCommand";
import { ClUserActionCommand } from "../commands/ClUserActionCommand";
import { ClBackCommand } from "../commands/ClBackCommand";
import { ClActionInAdvanceCommand } from "../commands/ClActionInAdvanceCommand";
import { ClPingCommand } from "../commands/ClPingCommand";
import { ClKeepAliveCommand } from "../commands/ClKeepAliveCommand";
import { ClSendUserPassCommand } from "../commands/ClSendUserPassCommand";
import { ClGetHandHistoryCommand } from "../commands/ClGetHandHistoryCommand";
import { ClSubscribeForJackpotsCommand } from "../commands/ClSubscribeForJackpotsCommand";
import { ClUnsubscribeFromJackpotsCommand } from "../commands/ClUnsubscribeFromJackpotsCommand";
import { ClSubscribeForBBJNotificationsCommand } from "../commands/ClSubscribeForBBJNotificationsCommand";
import { ClDrawCardsCommand } from "../commands/ClDrawCardsCommand";
import { ClAutoTopupInfoCommand } from "../commands/ClAutoTopupInfoCommand";
import { ClNotifyLocaleIdChangeCommand } from "../commands/ClNotifyLocaleIdChangeCommand";
import { ClSetMyNickNameCommand } from "../commands/ClSetMyNickNameCommand";
import { SrvTourCountersInfoCommand } from "../commands/SrvTourCountersInfoCommand";
import { SrvTournamentsInfoCommand } from "../commands/SrvTournamentsInfoCommand";
import { SrvTournamentsInfoSnapshotCommand } from "../commands/SrvTournamentsInfoSnapshotCommand";
import { SrvTourDetailsCommand } from "../commands/SrvTourDetailsCommand";
import { SrvTournamentTemplatesInfoCommand } from "../commands/SrvTournamentTemplatesInfoCommand";
import { SrvTourQualifiersCommand } from "../commands/SrvTourQualifiersCommand";
import { SrvUnknownTourCommand } from "../commands/SrvUnknownTourCommand";
import { SrvTourTableInfoCommand } from "../commands/SrvTourTableInfoCommand";
import { SrvTourStartInfoCommand } from "../commands/SrvTourStartInfoCommand";
import { SrvLevelSwitchCommand } from "../commands/SrvLevelSwitchCommand";
import { SrvTourMoneyCommand } from "../commands/SrvTourMoneyCommand";
import { SrvTourUnregisterResultCommand } from "../commands/SrvTourUnregisterResultCommand";
import { SrvTourRegisterResultCommand } from "../commands/SrvTourRegisterResultCommand";
import { SrvTourTourneyStatusCommand } from "../commands/SrvTourTourneyStatusCommand";
import { SrvMultiTourInitializeCommand } from "../commands/SrvMultiTourInitializeCommand";
import { SrvTourMoveToTableCommand } from "../commands/SrvTourMoveToTableCommand";
import { SrvTourPlayerFinishedCommand } from "../commands/SrvTourPlayerFinishedCommand";
import { SrvNewTourTablesCommand } from "../commands/SrvNewTourTablesCommand";
import { SrvUpdateTablesCommand } from "../commands/SrvUpdateTablesCommand";
import { SrvTourSeatInfoCommand } from "../commands/SrvTourSeatInfoCommand";
import { SrvUpdatePlayersCommand } from "../commands/SrvUpdatePlayersCommand";
import { SrvUpdateMinPlayersToStartCommand } from "../commands/SrvUpdateMinPlayersToStartCommand";
import { SrvUpdatePrizeDescrCommand } from "../commands/SrvUpdatePrizeDescrCommand";
import { SrvGetExtraMoneyReplyCommand } from "../commands/SrvGetExtraMoneyReplyCommand";
import { SrvTourProtectionErrorCommand } from "../commands/SrvTourProtectionErrorCommand";
import { SrvPlayersOnTableCommand } from "../commands/SrvPlayersOnTableCommand";
import { SrvTakeSeatInfoCommand } from "../commands/SrvTakeSeatInfoCommand";
import { SrvTourFinishedInfoCommand } from "../commands/SrvTourFinishedInfoCommand";
import { SrvMoreToursInitInfoCommand } from "../commands/SrvMoreToursInitInfoCommand";
import { SrvUpdateMoreToursPrizesInfoCommand } from "../commands/SrvUpdateMoreToursPrizesInfoCommand";
import { SrvSendTourAutoMsgCommand } from "../commands/SrvSendTourAutoMsgCommand";
import { SrvTourStartingInfoCommand } from "../commands/SrvTourStartingInfoCommand";
import { SrvTourSittingOutPlayersCommand } from "../commands/SrvTourSittingOutPlayersCommand";
import { SrvTourPlayerSitOutCommand } from "../commands/SrvTourPlayerSitOutCommand";
import { SrvTourPlayerBackOnTableCommand } from "../commands/SrvTourPlayerBackOnTableCommand";
import { SrvTourEndRemainingHandsCommand } from "../commands/SrvTourEndRemainingHandsCommand";
import { SrvTourEndRemainingHandsUpdateCommand } from "../commands/SrvTourEndRemainingHandsUpdateCommand";
import { SrvTourEndRemainingTimeCommand } from "../commands/SrvTourEndRemainingTimeCommand";
import { SrvTourEndRemainingPlayersCommand } from "../commands/SrvTourEndRemainingPlayersCommand";
import { SrvTourEndRemainingPlayersUpdateCommand } from "../commands/SrvTourEndRemainingPlayersUpdateCommand";
import { SrvTourReenterResultCommand } from "../commands/SrvTourReenterResultCommand";
import { SrvUpdateTourReentrantsCountCommand } from "../commands/SrvUpdateTourReentrantsCountCommand";
import { SrvStartTourRematchVotingCommand } from "../commands/SrvStartTourRematchVotingCommand";
import { SrvTourRematchVotingInProgressCommand } from "../commands/SrvTourRematchVotingInProgressCommand";
import { SrvPlayerVoteForRematchCommand } from "../commands/SrvPlayerVoteForRematchCommand";
import { SrvVoteForTourRematchFailedCommand } from "../commands/SrvVoteForTourRematchFailedCommand";
import { SrvTourPlayerTableCommand } from "../commands/SrvTourPlayerTableCommand";
import { SrvStartReadyVotingCommand } from "../commands/SrvStartReadyVotingCommand";
import { SrvGameStartDelayedForRebuysCommand } from "../commands/SrvGameStartDelayedForRebuysCommand";
import { SrvStartRebuyGracePeriodCommand } from "../commands/SrvStartRebuyGracePeriodCommand";
import { SrvPlayersInRebuyGracePeriodCommand } from "../commands/SrvPlayersInRebuyGracePeriodCommand";
import { SrvGracePeriodRebuysAvailableCommand } from "../commands/SrvGracePeriodRebuysAvailableCommand";
import { SrvNotifyForRebuyInGracePeriodCommand } from "../commands/SrvNotifyForRebuyInGracePeriodCommand";
import { SrvSyncBreakInfoCommand } from "../commands/SrvSyncBreakInfoCommand";
import { SrvUpdateRebuysCountCommand } from "../commands/SrvUpdateRebuysCountCommand";
import { SrvUpdateAddonsCountCommand } from "../commands/SrvUpdateAddonsCountCommand";
import { SrvTourTimesCommand } from "../commands/SrvTourTimesCommand";
import { SrvTourLevelCommand } from "../commands/SrvTourLevelCommand";
import { SrvLateRegLevelCommand } from "../commands/SrvLateRegLevelCommand";
import { SrvRemainingUnitsTillTourEndCommand } from "../commands/SrvRemainingUnitsTillTourEndCommand";
import { SrvUpdateWinnerPlacesCountCommand } from "../commands/SrvUpdateWinnerPlacesCountCommand";
import { SrvLongCommentCommand } from "../commands/SrvLongCommentCommand";
import { SrvUseBreaksCommand } from "../commands/SrvUseBreaksCommand";
import { SrvPlayerTourInfoCommand } from "../commands/SrvPlayerTourInfoCommand";
import { SrvPlayerRemovedFromTourCommand } from "../commands/SrvPlayerRemovedFromTourCommand";
import { SrvSetSnGBeastJackpotCommand } from "../commands/SrvSetSnGBeastJackpotCommand";
import { SrvUpdateSnGBeastJackpotCommand } from "../commands/SrvUpdateSnGBeastJackpotCommand";
import { SrvUpdateJackpotsOnTourEndCommand } from "../commands/SrvUpdateJackpotsOnTourEndCommand";
import { SrvStartAddonGracePeriodCommand } from "../commands/SrvStartAddonGracePeriodCommand";
import { SrvGameStartDelayedForAddonsCommand } from "../commands/SrvGameStartDelayedForAddonsCommand";
import { SrvPlayersInAddonGracePeriodCommand } from "../commands/SrvPlayersInAddonGracePeriodCommand";
import { SrvGracePeriodAddonsAvailableCommand } from "../commands/SrvGracePeriodAddonsAvailableCommand";
import { SrvNotifyForAddonInGracePeriodCommand } from "../commands/SrvNotifyForAddonInGracePeriodCommand";
import { SrvNotifyForAddonRejectedByPlayerCommand } from "../commands/SrvNotifyForAddonRejectedByPlayerCommand";
import { SrvTournamentRemovedCommand } from "../commands/SrvTournamentRemovedCommand";
import { SrvNewPlayerInAddonGracePeriodCommand } from "../commands/SrvNewPlayerInAddonGracePeriodCommand";
import { SrvTourStartTimeChangeCommand } from "../commands/SrvTourStartTimeChangeCommand";
import { SrvJackpotTourBuyInInfoCommand } from "../commands/SrvJackpotTourBuyInInfoCommand";
import { SrvJackpotTourRegRequestCommand } from "../commands/SrvJackpotTourRegRequestCommand";
import { SrvJackpotTourCancelRegRequestCommand } from "../commands/SrvJackpotTourCancelRegRequestCommand";
import { SrvJackpotTourForceCancelRegRequestCommand } from "../commands/SrvJackpotTourForceCancelRegRequestCommand";
import { SrvJackpotTourForceCancelRegRequestExCommand } from "../commands/SrvJackpotTourForceCancelRegRequestExCommand";
import { SrvStartSelectingBuyInMultiplierCommand } from "../commands/SrvStartSelectingBuyInMultiplierCommand";
import { SrvStartJackpotTourPrizeNegoCommand } from "../commands/SrvStartJackpotTourPrizeNegoCommand";
import { SrvJackpotTourPrizeNegoInProgressCommand } from "../commands/SrvJackpotTourPrizeNegoInProgressCommand";
import { SrvEndJackpotTourPrizeNegoCommand } from "../commands/SrvEndJackpotTourPrizeNegoCommand";
import { SrvJackpotTourVoteForAltPrizesCommand } from "../commands/SrvJackpotTourVoteForAltPrizesCommand";
import { SrvJackpotTourPrizeDistributionInfoCommand } from "../commands/SrvJackpotTourPrizeDistributionInfoCommand";
import { SrvJackpotTourStartTimeCommand } from "../commands/SrvJackpotTourStartTimeCommand";
import { SrvUnknownJackpotTourTemplateCommand } from "../commands/SrvUnknownJackpotTourTemplateCommand";
import { SrvJackpotTourPlayerRegisteredCommand } from "../commands/SrvJackpotTourPlayerRegisteredCommand";
import { SrvJackpotTourPrizeInfoCommand } from "../commands/SrvJackpotTourPrizeInfoCommand";
import { SrvObserveTournamentTableCommand } from "../commands/SrvObserveTournamentTableCommand";
import { SrvCanObserveTourTemplateTableCommand } from "../commands/SrvCanObserveTourTemplateTableCommand";
import { SrvRecentWinnersCommand } from "../commands/SrvRecentWinnersCommand";
import { SrvTournamentTemplateGetRegCountCommand } from "../commands/SrvTournamentTemplateGetRegCountCommand";
import { SrvTourPlayerPositionCommand } from "../commands/SrvTourPlayerPositionCommand";
import { SrvTourAverageChipsCommand } from "../commands/SrvTourAverageChipsCommand";
import { SrvPlayerTournamentViewCommand } from "../commands/SrvPlayerTournamentViewCommand";
import { SrvTourPlayersCountCommand } from "../commands/SrvTourPlayersCountCommand";
import { SrvTourSmallestStackCommand } from "../commands/SrvTourSmallestStackCommand";
import { SrvTourPrizePoolCommand } from "../commands/SrvTourPrizePoolCommand";
import { SrvEnableIncrementalTourAwardingCommand } from "../commands/SrvEnableIncrementalTourAwardingCommand";
import { SrvDisableIncrementalTourAwardingCommand } from "../commands/SrvDisableIncrementalTourAwardingCommand";
import { SrvTourAwardIncrementedCommand } from "../commands/SrvTourAwardIncrementedCommand";
import { SrvTourPrizeDistributionStartedCommand } from "../commands/SrvTourPrizeDistributionStartedCommand";
import { ClGetTourCountersInfoCommand } from "../commands/ClGetTourCountersInfoCommand";
import { ClGetTournamentsInfoCommand } from "../commands/ClGetTournamentsInfoCommand";
import { ClSubscribeForTournamentTemplatesInfoCommand } from "../commands/ClSubscribeForTournamentTemplatesInfoCommand";
import { ClUnsubscribeForTournamentTemplatesInfoCommand } from "../commands/ClUnsubscribeForTournamentTemplatesInfoCommand";
import { ClSubscribeForTournamentTemplateDetailsInfoCommand } from "../commands/ClSubscribeForTournamentTemplateDetailsInfoCommand";
import { ClUnsubscribeForTournamentTemplateDetailsInfoCommand } from "../commands/ClUnsubscribeForTournamentTemplateDetailsInfoCommand";
import { ClObserveTournamentTemplateTableCommand } from "../commands/ClObserveTournamentTemplateTableCommand";
import { ClTournamentTemplateGetRegCountCommand } from "../commands/ClTournamentTemplateGetRegCountCommand";
import { ClPeekTournamentsInfoCommand } from "../commands/ClPeekTournamentsInfoCommand";
import { ClGetTourDetailsCommand } from "../commands/ClGetTourDetailsCommand";
import { ClSubscribeForQualifiersCommand } from "../commands/ClSubscribeForQualifiersCommand";
import { ClUnsubscribeFromQualifiersCommand } from "../commands/ClUnsubscribeFromQualifiersCommand";
import { ClGetMultiInitializeInfoCommand } from "../commands/ClGetMultiInitializeInfoCommand";
import { ClGetTourSeatInfoCommand } from "../commands/ClGetTourSeatInfoCommand";
import { ClGetTourTableInfoCommand } from "../commands/ClGetTourTableInfoCommand";
import { ClGetUpdateInfoCommand } from "../commands/ClGetUpdateInfoCommand";
import { ClUnsubscribeClientCommand } from "../commands/ClUnsubscribeClientCommand";
import { ClTourUnregisterCommand } from "../commands/ClTourUnregisterCommand";
import { ClTourRegisterCommand } from "../commands/ClTourRegisterCommand";
import { ClGetTourMoneyCommand } from "../commands/ClGetTourMoneyCommand";
import { ClMoveMe2MyTableCommand } from "../commands/ClMoveMe2MyTableCommand";
import { ClGetExtraMoneyInfoCommand } from "../commands/ClGetExtraMoneyInfoCommand";
import { ClSubscribeForTableCommand } from "../commands/ClSubscribeForTableCommand";
import { ClGetMoreToursInitInfoCommand } from "../commands/ClGetMoreToursInitInfoCommand";
import { ClUpdateMoreToursInfoCommand } from "../commands/ClUpdateMoreToursInfoCommand";
import { ClGetCondPrizeLimitInfoCommand } from "../commands/ClGetCondPrizeLimitInfoCommand";
import { ClVoteCommand } from "../commands/ClVoteCommand";
import { ClVoteForRematchCommand } from "../commands/ClVoteForRematchCommand";
import { ClTourReenterCommand } from "../commands/ClTourReenterCommand";
import { ClGetTourPlayerTableCommand } from "../commands/ClGetTourPlayerTableCommand";
import { ClGetSyncBreakInfoCommand } from "../commands/ClGetSyncBreakInfoCommand";
import { ClSetAutoRebuysCommand } from "../commands/ClSetAutoRebuysCommand";
import { ClSetAutoAddonCommand } from "../commands/ClSetAutoAddonCommand";
import { ClRequestInstantRebuyCommand } from "../commands/ClRequestInstantRebuyCommand";
import { ClExtraChipsPrefChangedCommand } from "../commands/ClExtraChipsPrefChangedCommand";
import { ClUnsubscribeFromTableCommand } from "../commands/ClUnsubscribeFromTableCommand";
import { ClSubscribeForSnGBeastJackpotCommand } from "../commands/ClSubscribeForSnGBeastJackpotCommand";
import { ClUnsubscribeFromSnGBeastJackpotCommand } from "../commands/ClUnsubscribeFromSnGBeastJackpotCommand";
import { ClRequestInstantAddonCommand } from "../commands/ClRequestInstantAddonCommand";
import { ClRejectInstantAddonCommand } from "../commands/ClRejectInstantAddonCommand";
import { ClJackpotTourRegRequestCommand } from "../commands/ClJackpotTourRegRequestCommand";
import { ClJackpotTourCancelRegRequestCommand } from "../commands/ClJackpotTourCancelRegRequestCommand";
import { ClGetJackpotTourBuyInInfoCommand } from "../commands/ClGetJackpotTourBuyInInfoCommand";
import { ClSubscribeForPlayerTournamentViewCommand } from "../commands/ClSubscribeForPlayerTournamentViewCommand";
import { ClUnsubscribeFromPlayerTournamentViewCommand } from "../commands/ClUnsubscribeFromPlayerTournamentViewCommand";
import { ClMiscCashierInfoCommand } from "../commands/ClMiscCashierInfoCommand";
import { ClMiscGenerateSessionCommand } from "../commands/ClMiscGenerateSessionCommand";
import { ClMiscForgotPassCommand } from "../commands/ClMiscForgotPassCommand";
import { ClRplGetHandHistoryCommand } from "../commands/ClRplGetHandHistoryCommand";
import { ClGetPlayerProfileCommand } from "../commands/ClGetPlayerProfileCommand";


import { ICommandsMap } from "../../core/maps/ICommandMap";

export class PokerGeneratedCommandsMap implements ICommandsMap
{
	private static COMMANDS_MAP:{ [pid: number]: { [cid: number]: any } } = {
		1: {
					1: SrvHandShakeOKCommand,
			2: SrvErrorDisconnectedCommand,
			3: SrvConnectErrorCommand,
			6: SrvCompressedCommand,
			7: SrvSSLDataCommand,
			35: SrvConnectGameOKCommand,
			36: SrvServerInfoCommand,
			38: SrvServerCountersInfoCommand,
			39: SrvGameInfoCommand,
			40: SrvGameWaitersInfoCommand,
			42: SrvAdminMsgCommand,
			43: SrvWaitListCommand,
			48: SrvHandWinnersCommand,
			49: SrvShowHandsCommand,
			50: SrvPlayerChatMsgCommand,
			52: SrvObserverChatMsgCommand,
			53: SrvPlayerDelayedFoldCommand,
			54: SrvPlayerSecondsLeftToActCommand,
			55: SrvAwayPlayerPickedUpCommand,
			56: SrvFinishedOnPlaceCommand,
			57: SrvAddToWaitListOkCommand,
			59: SrvAddToWaitListErrorCommand,
			61: SrvRemoveFromWaitListOkCommand,
			63: SrvRemoveFromWaitListErrorCommand,
			68: SrvLogonOkCommand,
			69: SrvSitOkCommand,
			70: SrvBackOnSeatOkCommand,
			71: SrvSitErrorCommand,
			72: SrvLogonErrorCommand,
			73: SrvMoneyCommand,
			74: SrvUserStateOnTableCommand,
			75: SrvTableStateCommand,
			76: SrvCardDealCommand,
			77: SrvPotCardDealCommand,
			78: SrvTUShowDownCommand,
			79: SrvUserTurnCommand,
			80: SrvUserExtraTurnCommand,
			81: SrvUserActionNotifyCommand,
			82: SrvBetRoundCompleteCommand,
			83: SrvOutOfMoneyCommand,
			84: SrvUpdateHintTextCommand,
			85: SrvNewsCommand,
			87: SrvSessionCreatedCommand,
			90: SrvGameStartCommand,
			91: SrvAltCurrencyRateCommand,
			92: SrvPingCommand,
			93: SrvPlayerProfileCommand,
			95: SrvCashierStatusCommand,
			111: SrvRplHandHistoryCommand,
			113: SrvCatchThisNumberCommand,
			115: SrvTransferUncalledBetCommand,
			116: SrvPrizePoolClosedCommand,
			122: SrvPlayerRanksCommand,
			125: SrvMoveDealChipCommand,
			127: SrvHoldemPlayerPosCommand,
			128: SrvLogonChangeCommand,
			130: SrvRequestPassCommand,
			131: SrvPasswordErrorCommand,
			134: SrvDeadBetCommand,
			137: SrvSetJackpotsCommand,
			138: SrvUpdateJackpotsCommand,
			147: SrvUserTurnTimeoutCommand,
			148: SrvUserTurnExtraTimeoutCommand,
			149: SrvUserMoreMoneyNotifyCommand,
			150: SrvDisconnectNotifyCommand,
			151: SrvDrawCardsCommand,
			152: SrvUserDrawCardsNotifyCommand,
			158: SrvRakeRacePointsCommand,
			159: SrvUpdateTimeBankConfigCommand,
			160: SrvPlayerParticipationsCommand,
			162: SrvNetworksConfigurationCommand,
			163: SrvUnreadMessageCountCommand,
			164: SrvGameResetCommand,
			165: SrvCardDeckInUseCommand,
			166: SrvBetRoundStartCommand,
			
				},
		2: {
					4: ClHandShakeCommand,
			5: ClByeCommand,
			8: ClSSLDataCommand,
			2050: ClGetServerInfoCommand,
			2052: ClGetGameInfoCommand,
			2053: ClGetGameWaitersInfoCommand,
			2054: ClGetCountersInfoCommand,
			2056: ClChatMsgCommand,
			2057: ClAddToWaitListCommand,
			2059: ClAddGlobalWaitListCommand,
			2061: ClRemoveFromWaitListCommand,
			2063: ClAcceptInviteCommand,
			2064: ClRejectInviteCommand,
			2068: ClConnectGameCommand,
			2069: ClLogonCommand,
			2070: ClLogoutCommand,
			2071: ClGetMoneyCommand,
			2073: ClSitDownCommand,
			2074: ClMoreMoneyCommand,
			2076: ClUserActionCommand,
			2077: ClBackCommand,
			2079: ClActionInAdvanceCommand,
			2081: ClPingCommand,
			2082: ClKeepAliveCommand,
			2086: ClSendUserPassCommand,
			2088: ClGetHandHistoryCommand,
			2090: ClSubscribeForJackpotsCommand,
			2091: ClUnsubscribeFromJackpotsCommand,
			2092: ClSubscribeForBBJNotificationsCommand,
			2104: ClDrawCardsCommand,
			2108: ClAutoTopupInfoCommand,
			2109: ClNotifyLocaleIdChangeCommand,
			2112: ClSetMyNickNameCommand,
			
				},
		3: {
					101: SrvTourCountersInfoCommand,
			102: SrvTournamentsInfoCommand,
			104: SrvTournamentsInfoSnapshotCommand,
			106: SrvTourDetailsCommand,
			107: SrvTournamentTemplatesInfoCommand,
			108: SrvTourQualifiersCommand,
			109: SrvUnknownTourCommand,
			110: SrvTourTableInfoCommand,
			111: SrvTourStartInfoCommand,
			112: SrvLevelSwitchCommand,
			113: SrvTourMoneyCommand,
			114: SrvTourUnregisterResultCommand,
			115: SrvTourRegisterResultCommand,
			116: SrvTourTourneyStatusCommand,
			117: SrvMultiTourInitializeCommand,
			118: SrvTourMoveToTableCommand,
			119: SrvTourPlayerFinishedCommand,
			120: SrvNewTourTablesCommand,
			121: SrvUpdateTablesCommand,
			122: SrvTourSeatInfoCommand,
			123: SrvUpdatePlayersCommand,
			125: SrvUpdateMinPlayersToStartCommand,
			126: SrvUpdatePrizeDescrCommand,
			127: SrvGetExtraMoneyReplyCommand,
			128: SrvTourProtectionErrorCommand,
			129: SrvPlayersOnTableCommand,
			130: SrvTakeSeatInfoCommand,
			132: SrvTourFinishedInfoCommand,
			139: SrvMoreToursInitInfoCommand,
			142: SrvUpdateMoreToursPrizesInfoCommand,
			144: SrvSendTourAutoMsgCommand,
			148: SrvTourStartingInfoCommand,
			151: SrvTourSittingOutPlayersCommand,
			152: SrvTourPlayerSitOutCommand,
			153: SrvTourPlayerBackOnTableCommand,
			163: SrvTourEndRemainingHandsCommand,
			164: SrvTourEndRemainingHandsUpdateCommand,
			165: SrvTourEndRemainingTimeCommand,
			166: SrvTourEndRemainingPlayersCommand,
			167: SrvTourEndRemainingPlayersUpdateCommand,
			171: SrvTourReenterResultCommand,
			173: SrvUpdateTourReentrantsCountCommand,
			174: SrvStartTourRematchVotingCommand,
			175: SrvTourRematchVotingInProgressCommand,
			176: SrvPlayerVoteForRematchCommand,
			177: SrvVoteForTourRematchFailedCommand,
			178: SrvTourPlayerTableCommand,
			179: SrvStartReadyVotingCommand,
			181: SrvGameStartDelayedForRebuysCommand,
			182: SrvStartRebuyGracePeriodCommand,
			183: SrvPlayersInRebuyGracePeriodCommand,
			184: SrvGracePeriodRebuysAvailableCommand,
			185: SrvNotifyForRebuyInGracePeriodCommand,
			186: SrvSyncBreakInfoCommand,
			187: SrvUpdateRebuysCountCommand,
			188: SrvUpdateAddonsCountCommand,
			189: SrvTourTimesCommand,
			190: SrvTourLevelCommand,
			191: SrvLateRegLevelCommand,
			192: SrvRemainingUnitsTillTourEndCommand,
			193: SrvUpdateWinnerPlacesCountCommand,
			194: SrvLongCommentCommand,
			195: SrvUseBreaksCommand,
			196: SrvPlayerTourInfoCommand,
			198: SrvPlayerRemovedFromTourCommand,
			200: SrvSetSnGBeastJackpotCommand,
			201: SrvUpdateSnGBeastJackpotCommand,
			202: SrvUpdateJackpotsOnTourEndCommand,
			203: SrvStartAddonGracePeriodCommand,
			204: SrvGameStartDelayedForAddonsCommand,
			205: SrvPlayersInAddonGracePeriodCommand,
			206: SrvGracePeriodAddonsAvailableCommand,
			207: SrvNotifyForAddonInGracePeriodCommand,
			208: SrvNotifyForAddonRejectedByPlayerCommand,
			209: SrvTournamentRemovedCommand,
			210: SrvNewPlayerInAddonGracePeriodCommand,
			211: SrvTourStartTimeChangeCommand,
			213: SrvJackpotTourBuyInInfoCommand,
			214: SrvJackpotTourRegRequestCommand,
			215: SrvJackpotTourCancelRegRequestCommand,
			216: SrvJackpotTourForceCancelRegRequestCommand,
			217: SrvJackpotTourForceCancelRegRequestExCommand,
			218: SrvStartSelectingBuyInMultiplierCommand,
			219: SrvStartJackpotTourPrizeNegoCommand,
			220: SrvJackpotTourPrizeNegoInProgressCommand,
			221: SrvEndJackpotTourPrizeNegoCommand,
			222: SrvJackpotTourVoteForAltPrizesCommand,
			223: SrvJackpotTourPrizeDistributionInfoCommand,
			224: SrvJackpotTourStartTimeCommand,
			225: SrvUnknownJackpotTourTemplateCommand,
			226: SrvJackpotTourPlayerRegisteredCommand,
			228: SrvJackpotTourPrizeInfoCommand,
			230: SrvObserveTournamentTableCommand,
			231: SrvCanObserveTourTemplateTableCommand,
			233: SrvRecentWinnersCommand,
			235: SrvTournamentTemplateGetRegCountCommand,
			237: SrvTourPlayerPositionCommand,
			238: SrvTourAverageChipsCommand,
			239: SrvPlayerTournamentViewCommand,
			240: SrvTourPlayersCountCommand,
			241: SrvTourSmallestStackCommand,
			242: SrvTourPrizePoolCommand,
			243: SrvEnableIncrementalTourAwardingCommand,
			244: SrvDisableIncrementalTourAwardingCommand,
			245: SrvTourAwardIncrementedCommand,
			246: SrvTourPrizeDistributionStartedCommand,
			
				},
		4: {
					2049: ClGetTourCountersInfoCommand,
			2050: ClGetTournamentsInfoCommand,
			2052: ClSubscribeForTournamentTemplatesInfoCommand,
			2053: ClUnsubscribeForTournamentTemplatesInfoCommand,
			2054: ClSubscribeForTournamentTemplateDetailsInfoCommand,
			2055: ClUnsubscribeForTournamentTemplateDetailsInfoCommand,
			2056: ClObserveTournamentTemplateTableCommand,
			2057: ClTournamentTemplateGetRegCountCommand,
			2058: ClPeekTournamentsInfoCommand,
			2059: ClGetTourDetailsCommand,
			2060: ClSubscribeForQualifiersCommand,
			2061: ClUnsubscribeFromQualifiersCommand,
			2062: ClGetMultiInitializeInfoCommand,
			2063: ClGetTourSeatInfoCommand,
			2064: ClGetTourTableInfoCommand,
			2065: ClGetUpdateInfoCommand,
			2066: ClUnsubscribeClientCommand,
			2067: ClTourUnregisterCommand,
			2068: ClTourRegisterCommand,
			2069: ClGetTourMoneyCommand,
			2070: ClMoveMe2MyTableCommand,
			2071: ClGetExtraMoneyInfoCommand,
			2077: ClSubscribeForTableCommand,
			2078: ClGetMoreToursInitInfoCommand,
			2079: ClUpdateMoreToursInfoCommand,
			2080: ClGetCondPrizeLimitInfoCommand,
			2082: ClVoteCommand,
			2083: ClVoteForRematchCommand,
			2085: ClTourReenterCommand,
			2086: ClGetTourPlayerTableCommand,
			2088: ClGetSyncBreakInfoCommand,
			2089: ClSetAutoRebuysCommand,
			2090: ClSetAutoAddonCommand,
			2091: ClRequestInstantRebuyCommand,
			2092: ClExtraChipsPrefChangedCommand,
			2094: ClUnsubscribeFromTableCommand,
			2095: ClSubscribeForSnGBeastJackpotCommand,
			2096: ClUnsubscribeFromSnGBeastJackpotCommand,
			2097: ClRequestInstantAddonCommand,
			2098: ClRejectInstantAddonCommand,
			2101: ClJackpotTourRegRequestCommand,
			2102: ClJackpotTourCancelRegRequestCommand,
			2103: ClGetJackpotTourBuyInInfoCommand,
			2105: ClSubscribeForPlayerTournamentViewCommand,
			2106: ClUnsubscribeFromPlayerTournamentViewCommand,
			
				},
		6: {
					105: ClMiscCashierInfoCommand,
			107: ClMiscGenerateSessionCommand,
			110: ClMiscForgotPassCommand,
			115: ClRplGetHandHistoryCommand,
			120: ClGetPlayerProfileCommand,
			
				},
		
	};

	public getCommand(pid:number, cid:number):any
	{
		return PokerGeneratedCommandsMap.COMMANDS_MAP[pid][cid];
	}

};
