import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  TornadoCash3Deposit,
  TornadoCash3Withdrawal
} from "../generated/TornadoCash3/TornadoCash3"

export function createTornadoCash3DepositEvent(
  commitment: Bytes,
  leafIndex: BigInt,
  timestamp: BigInt
): TornadoCash3Deposit {
  let tornadoCash3DepositEvent = changetype<TornadoCash3Deposit>(newMockEvent())

  tornadoCash3DepositEvent.parameters = new Array()

  tornadoCash3DepositEvent.parameters.push(
    new ethereum.EventParam(
      "commitment",
      ethereum.Value.fromFixedBytes(commitment)
    )
  )
  tornadoCash3DepositEvent.parameters.push(
    new ethereum.EventParam(
      "leafIndex",
      ethereum.Value.fromUnsignedBigInt(leafIndex)
    )
  )
  tornadoCash3DepositEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return tornadoCash3DepositEvent
}

export function createTornadoCash3WithdrawalEvent(
  to: Address,
  nullifierHash: Bytes,
  relayer: Address,
  fee: BigInt
): TornadoCash3Withdrawal {
  let tornadoCash3WithdrawalEvent = changetype<TornadoCash3Withdrawal>(
    newMockEvent()
  )

  tornadoCash3WithdrawalEvent.parameters = new Array()

  tornadoCash3WithdrawalEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tornadoCash3WithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierHash",
      ethereum.Value.fromFixedBytes(nullifierHash)
    )
  )
  tornadoCash3WithdrawalEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  tornadoCash3WithdrawalEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return tornadoCash3WithdrawalEvent
}
