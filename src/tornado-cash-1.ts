import { BigInt } from "@graphprotocol/graph-ts"
import {
  TornadoCash1,
  Deposit as deposit_event,
  Withdrawal as Withdrawal_event
} from "../generated/TornadoCash1/TornadoCash1"
import { Deposit, Withdrawal } from "../generated/schema"

export function handleDeposit(event: deposit_event): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Deposit.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new Deposit(event.transaction.hash.toHex())

  }


  // Entity fields can be set based on event parameters
   
  entity.from = event.transaction.from
  entity.to = event.transaction.to
  entity.value = event.transaction.value
  entity.gasLimit = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  

  // Entities can be written to the store with `.save()`
  entity.save()


}

export function handleWithdrawal(event: Withdrawal_event): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Withdrawal.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new Withdrawal(event.transaction.hash.toHex())

  }


  entity.from = event.transaction.from
  entity.to = event.transaction.to
  entity.value = event.transaction.value
  entity.gasLimit = event.transaction.gasLimit
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp
  // Entities can be written to the store with `.save()`
  entity.save()




}
