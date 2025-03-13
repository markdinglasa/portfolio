import { AuthChannel } from "./authChannel";
import { SetupChannel } from "./setupChannel";
import { TransactionChannel } from "./transactionChannel";
import { UtilityChannel } from "./utilityChannel";

export const RouteChannel = {
  ...TransactionChannel,
  ...UtilityChannel,
  ...SetupChannel,
  ...AuthChannel,
} as const;

export type RouteChannelType = (typeof RouteChannel)[keyof typeof RouteChannel];
