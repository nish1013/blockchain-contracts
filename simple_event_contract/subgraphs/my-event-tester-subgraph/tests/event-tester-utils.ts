import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { SimpleEvent } from "../generated/EventTester/EventTester"

export function createSimpleEventEvent(
  sender: Address,
  value: BigInt
): SimpleEvent {
  let simpleEventEvent = changetype<SimpleEvent>(newMockEvent())

  simpleEventEvent.parameters = new Array()

  simpleEventEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  simpleEventEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return simpleEventEvent
}
