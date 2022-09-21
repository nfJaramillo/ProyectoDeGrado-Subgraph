import {
  TornadoCash3Deposit as DepositEvent,
  TornadoCash3Withdrawal as WithdrawalEvent
} from "../generated/TornadoCash3/TornadoCash3"
import { Deposit, Withdrawal } from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
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

export function handleWithdrawal(event: WithdrawalEvent): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Withdrawal.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new Withdrawal(event.transaction.from.toHex())

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