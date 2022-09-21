import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { TornadoCash3Deposit } from "../generated/schema"
import { TornadoCash3Deposit as TornadoCash3DepositEvent } from "../generated/TornadoCash3/TornadoCash3"
import { handleTornadoCash3Deposit } from "../src/tornado-cash-3"
import { createTornadoCash3DepositEvent } from "./tornado-cash-3-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let commitment = Bytes.fromI32(1234567890)
    let leafIndex = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let newTornadoCash3DepositEvent = createTornadoCash3DepositEvent(
      commitment,
      leafIndex,
      timestamp
    )
    handleTornadoCash3Deposit(newTornadoCash3DepositEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("TornadoCash3Deposit created and stored", () => {
    assert.entityCount("TornadoCash3Deposit", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "TornadoCash3Deposit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commitment",
      "1234567890"
    )
    assert.fieldEquals(
      "TornadoCash3Deposit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "leafIndex",
      "234"
    )
    assert.fieldEquals(
      "TornadoCash3Deposit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
