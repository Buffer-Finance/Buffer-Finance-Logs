import { BigInt } from "@graphprotocol/graph-ts"
import {
  BufferBNBOptions,
  Approval,
  ApprovalForAll,
  AutoExerciseStatusChange,
  Create,
  Exercise,
  Expire,
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer,
  UpdateImpliedVolatility,
  UpdateOptionCollaterizationRatio,
  UpdateReferralRewardPercentage,
  UpdateSettlementFeePercentage,
  UpdateSettlementFeeRecipient,
  UpdateStakingFeePercentage
} from "../generated/BufferBNBOptions/BufferBNBOptions"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.autoExerciseStatus(...)
  // - contract.balanceOf(...)
  // - contract.fees(...)
  // - contract.getApproved(...)
  // - contract.getRoleAdmin(...)
  // - contract.hasRole(...)
  // - contract.impliedVolRate(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.nextTokenId(...)
  // - contract.optionCollateralizationRatio(...)
  // - contract.options(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.pool(...)
  // - contract.priceProvider(...)
  // - contract.referralRewardPercentage(...)
  // - contract.settlementFeePercentage(...)
  // - contract.settlementFeeRecipient(...)
  // - contract.stakingFeePercentage(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleAutoExerciseStatusChange(
  event: AutoExerciseStatusChange
): void {}

export function handleCreate(event: Create): void {}

export function handleExercise(event: Exercise): void {}

export function handleExpire(event: Expire): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUpdateImpliedVolatility(
  event: UpdateImpliedVolatility
): void {}

export function handleUpdateOptionCollaterizationRatio(
  event: UpdateOptionCollaterizationRatio
): void {}

export function handleUpdateReferralRewardPercentage(
  event: UpdateReferralRewardPercentage
): void {}

export function handleUpdateSettlementFeePercentage(
  event: UpdateSettlementFeePercentage
): void {}

export function handleUpdateSettlementFeeRecipient(
  event: UpdateSettlementFeeRecipient
): void {}

export function handleUpdateStakingFeePercentage(
  event: UpdateStakingFeePercentage
): void {}
