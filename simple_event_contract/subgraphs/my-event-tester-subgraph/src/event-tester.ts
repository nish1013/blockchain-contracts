import { SimpleEvent as SimpleEventEvent } from "../generated/EventTester/EventTester"
import { SimpleEvent } from "../generated/schema"

export function handleSimpleEvent(event: SimpleEventEvent): void {
  let entity = new SimpleEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
