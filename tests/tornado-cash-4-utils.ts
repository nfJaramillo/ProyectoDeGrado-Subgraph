import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  TornadoCash4Deposit,
  TornadoCash4Withdrawal
} from "../generated/TornadoCash4/TornadoCash4"

export function createTornadoCash4DepositEvent(
  commitment: Bytes,
  leafIndex: BigInt,
  timestamp: BigInt
): TornadoCash4Deposit {
  let tornadoCash4DepositEvent = changetype<TornadoCash4Deposit>(newMockEvent())

  tornadoCash4DepositEvent.parameters = new Array()

  tornadoCash4DepositEvent.parameters.push(
    new ethereum.EventParam(
      "commitment",
      ethereum.Value.fromFixedBytes(commitment)
    )
  )
  tornadoCash4DepositEvent.parameters.push(
    new ethereum.EventParam(
      "leafIndex",
      ethereum.Value.fromUnsignedBigInt(leafIndex)
    )
  )
  tornadoCash4DepositEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return tornadoCash4DepositEvent
}

export function createTornadoCash4WithdrawalEvent(
  to: Address,
  nullifierHash: Bytes,
  relayer: Address,
  fee: BigInt
): TornadoCash4Withdrawal {
  let tornadoCash4WithdrawalEvent = changetype<TornadoCash4Withdrawal>(
    newMockEvent()
  )

  tornadoCash4WithdrawalEvent.parameters = new Array()

  tornadoCash4WithdrawalEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  tornadoCash4WithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "nullifierHash",
      ethereum.Value.fromFixedBytes(nullifierHash)
    )
  )
  tornadoCash4WithdrawalEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  tornadoCash4WithdrawalEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return tornadoCash4WithdrawalEvent
}
