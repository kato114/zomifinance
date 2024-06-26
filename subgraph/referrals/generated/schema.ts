// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Tier extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Tier entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Tier entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Tier", id.toString(), this);
  }

  static load(id: string): Tier | null {
    return store.get("Tier", id) as Tier | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalRebate(): BigInt {
    let value = this.get("totalRebate");
    return value.toBigInt();
  }

  set totalRebate(value: BigInt) {
    this.set("totalRebate", Value.fromBigInt(value));
  }

  get discountShare(): BigInt {
    let value = this.get("discountShare");
    return value.toBigInt();
  }

  set discountShare(value: BigInt) {
    this.set("discountShare", Value.fromBigInt(value));
  }
}

export class Referrer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Referrer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Referrer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Referrer", id.toString(), this);
  }

  static load(id: string): Referrer | null {
    return store.get("Referrer", id) as Referrer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get discountShare(): BigInt {
    let value = this.get("discountShare");
    return value.toBigInt();
  }

  set discountShare(value: BigInt) {
    this.set("discountShare", Value.fromBigInt(value));
  }

  get tierId(): BigInt {
    let value = this.get("tierId");
    return value.toBigInt();
  }

  set tierId(value: BigInt) {
    this.set("tierId", Value.fromBigInt(value));
  }
}

export class Distribution extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Distribution entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Distribution entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Distribution", id.toString(), this);
  }

  static load(id: string): Distribution | null {
    return store.get("Distribution", id) as Distribution | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get receiver(): string {
    let value = this.get("receiver");
    return value.toString();
  }

  set receiver(value: string) {
    this.set("receiver", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get typeId(): BigInt {
    let value = this.get("typeId");
    return value.toBigInt();
  }

  set typeId(value: BigInt) {
    this.set("typeId", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class ReferralVolumeRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save ReferralVolumeRecord entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ReferralVolumeRecord entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ReferralVolumeRecord", id.toString(), this);
  }

  static load(id: string): ReferralVolumeRecord | null {
    return store.get("ReferralVolumeRecord", id) as ReferralVolumeRecord | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get volume(): BigInt {
    let value = this.get("volume");
    return value.toBigInt();
  }

  set volume(value: BigInt) {
    this.set("volume", Value.fromBigInt(value));
  }

  get referral(): string {
    let value = this.get("referral");
    return value.toString();
  }

  set referral(value: string) {
    this.set("referral", Value.fromString(value));
  }

  get referralCode(): string {
    let value = this.get("referralCode");
    return value.toString();
  }

  set referralCode(value: string) {
    this.set("referralCode", Value.fromString(value));
  }

  get referrer(): string {
    let value = this.get("referrer");
    return value.toString();
  }

  set referrer(value: string) {
    this.set("referrer", Value.fromString(value));
  }

  get tierId(): BigInt {
    let value = this.get("tierId");
    return value.toBigInt();
  }

  set tierId(value: BigInt) {
    this.set("tierId", Value.fromBigInt(value));
  }

  get totalRebate(): BigInt {
    let value = this.get("totalRebate");
    return value.toBigInt();
  }

  set totalRebate(value: BigInt) {
    this.set("totalRebate", Value.fromBigInt(value));
  }

  get discountShare(): BigInt {
    let value = this.get("discountShare");
    return value.toBigInt();
  }

  set discountShare(value: BigInt) {
    this.set("discountShare", Value.fromBigInt(value));
  }

  get marginFee(): BigInt {
    let value = this.get("marginFee");
    return value.toBigInt();
  }

  set marginFee(value: BigInt) {
    this.set("marginFee", Value.fromBigInt(value));
  }

  get totalRebateUsd(): BigInt {
    let value = this.get("totalRebateUsd");
    return value.toBigInt();
  }

  set totalRebateUsd(value: BigInt) {
    this.set("totalRebateUsd", Value.fromBigInt(value));
  }

  get discountUsd(): BigInt {
    let value = this.get("discountUsd");
    return value.toBigInt();
  }

  set discountUsd(value: BigInt) {
    this.set("discountUsd", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class ReferrerStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ReferrerStat entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ReferrerStat entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ReferrerStat", id.toString(), this);
  }

  static load(id: string): ReferrerStat | null {
    return store.get("ReferrerStat", id) as ReferrerStat | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get referrer(): string {
    let value = this.get("referrer");
    return value.toString();
  }

  set referrer(value: string) {
    this.set("referrer", Value.fromString(value));
  }

  get volume(): BigInt {
    let value = this.get("volume");
    return value.toBigInt();
  }

  set volume(value: BigInt) {
    this.set("volume", Value.fromBigInt(value));
  }

  get volumeCumulative(): BigInt {
    let value = this.get("volumeCumulative");
    return value.toBigInt();
  }

  set volumeCumulative(value: BigInt) {
    this.set("volumeCumulative", Value.fromBigInt(value));
  }

  get referralCode(): string {
    let value = this.get("referralCode");
    return value.toString();
  }

  set referralCode(value: string) {
    this.set("referralCode", Value.fromString(value));
  }

  get trades(): BigInt {
    let value = this.get("trades");
    return value.toBigInt();
  }

  set trades(value: BigInt) {
    this.set("trades", Value.fromBigInt(value));
  }

  get tradesCumulative(): BigInt {
    let value = this.get("tradesCumulative");
    return value.toBigInt();
  }

  set tradesCumulative(value: BigInt) {
    this.set("tradesCumulative", Value.fromBigInt(value));
  }

  get tradedReferrals(): Array<string> {
    let value = this.get("tradedReferrals");
    return value.toStringArray();
  }

  set tradedReferrals(value: Array<string>) {
    this.set("tradedReferrals", Value.fromStringArray(value));
  }

  get tradedReferralsCount(): BigInt {
    let value = this.get("tradedReferralsCount");
    return value.toBigInt();
  }

  set tradedReferralsCount(value: BigInt) {
    this.set("tradedReferralsCount", Value.fromBigInt(value));
  }

  get tradedReferralsCountCumulative(): BigInt {
    let value = this.get("tradedReferralsCountCumulative");
    return value.toBigInt();
  }

  set tradedReferralsCountCumulative(value: BigInt) {
    this.set("tradedReferralsCountCumulative", Value.fromBigInt(value));
  }

  get registeredReferrals(): Array<string> {
    let value = this.get("registeredReferrals");
    return value.toStringArray();
  }

  set registeredReferrals(value: Array<string>) {
    this.set("registeredReferrals", Value.fromStringArray(value));
  }

  get registeredReferralsCount(): BigInt {
    let value = this.get("registeredReferralsCount");
    return value.toBigInt();
  }

  set registeredReferralsCount(value: BigInt) {
    this.set("registeredReferralsCount", Value.fromBigInt(value));
  }

  get registeredReferralsCountCumulative(): BigInt {
    let value = this.get("registeredReferralsCountCumulative");
    return value.toBigInt();
  }

  set registeredReferralsCountCumulative(value: BigInt) {
    this.set("registeredReferralsCountCumulative", Value.fromBigInt(value));
  }

  get totalRebateUsd(): BigInt {
    let value = this.get("totalRebateUsd");
    return value.toBigInt();
  }

  set totalRebateUsd(value: BigInt) {
    this.set("totalRebateUsd", Value.fromBigInt(value));
  }

  get totalRebateUsdCumulative(): BigInt {
    let value = this.get("totalRebateUsdCumulative");
    return value.toBigInt();
  }

  set totalRebateUsdCumulative(value: BigInt) {
    this.set("totalRebateUsdCumulative", Value.fromBigInt(value));
  }

  get discountUsd(): BigInt {
    let value = this.get("discountUsd");
    return value.toBigInt();
  }

  set discountUsd(value: BigInt) {
    this.set("discountUsd", Value.fromBigInt(value));
  }

  get discountUsdCumulative(): BigInt {
    let value = this.get("discountUsdCumulative");
    return value.toBigInt();
  }

  set discountUsdCumulative(value: BigInt) {
    this.set("discountUsdCumulative", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get period(): string {
    let value = this.get("period");
    return value.toString();
  }

  set period(value: string) {
    this.set("period", Value.fromString(value));
  }
}

export class ReferralCode extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ReferralCode entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ReferralCode entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ReferralCode", id.toString(), this);
  }

  static load(id: string): ReferralCode | null {
    return store.get("ReferralCode", id) as ReferralCode | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get code(): string {
    let value = this.get("code");
    return value.toString();
  }

  set code(value: string) {
    this.set("code", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class TradedReferral extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TradedReferral entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TradedReferral entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TradedReferral", id.toString(), this);
  }

  static load(id: string): TradedReferral | null {
    return store.get("TradedReferral", id) as TradedReferral | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get referrerStat(): string {
    let value = this.get("referrerStat");
    return value.toString();
  }

  set referrerStat(value: string) {
    this.set("referrerStat", Value.fromString(value));
  }

  get referral(): string {
    let value = this.get("referral");
    return value.toString();
  }

  set referral(value: string) {
    this.set("referral", Value.fromString(value));
  }
}

export class RegisteredReferral extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RegisteredReferral entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RegisteredReferral entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RegisteredReferral", id.toString(), this);
  }

  static load(id: string): RegisteredReferral | null {
    return store.get("RegisteredReferral", id) as RegisteredReferral | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get referrerStat(): string {
    let value = this.get("referrerStat");
    return value.toString();
  }

  set referrerStat(value: string) {
    this.set("referrerStat", Value.fromString(value));
  }

  get referral(): string {
    let value = this.get("referral");
    return value.toString();
  }

  set referral(value: string) {
    this.set("referral", Value.fromString(value));
  }
}

export class ReferralStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ReferralStat entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ReferralStat entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ReferralStat", id.toString(), this);
  }

  static load(id: string): ReferralStat | null {
    return store.get("ReferralStat", id) as ReferralStat | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get referral(): string {
    let value = this.get("referral");
    return value.toString();
  }

  set referral(value: string) {
    this.set("referral", Value.fromString(value));
  }

  get volume(): BigInt {
    let value = this.get("volume");
    return value.toBigInt();
  }

  set volume(value: BigInt) {
    this.set("volume", Value.fromBigInt(value));
  }

  get volumeCumulative(): BigInt {
    let value = this.get("volumeCumulative");
    return value.toBigInt();
  }

  set volumeCumulative(value: BigInt) {
    this.set("volumeCumulative", Value.fromBigInt(value));
  }

  get discountUsd(): BigInt {
    let value = this.get("discountUsd");
    return value.toBigInt();
  }

  set discountUsd(value: BigInt) {
    this.set("discountUsd", Value.fromBigInt(value));
  }

  get discountUsdCumulative(): BigInt {
    let value = this.get("discountUsdCumulative");
    return value.toBigInt();
  }

  set discountUsdCumulative(value: BigInt) {
    this.set("discountUsdCumulative", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get period(): string {
    let value = this.get("period");
    return value.toString();
  }

  set period(value: string) {
    this.set("period", Value.fromString(value));
  }
}

export class GlobalStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save GlobalStat entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GlobalStat entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GlobalStat", id.toString(), this);
  }

  static load(id: string): GlobalStat | null {
    return store.get("GlobalStat", id) as GlobalStat | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get volume(): BigInt {
    let value = this.get("volume");
    return value.toBigInt();
  }

  set volume(value: BigInt) {
    this.set("volume", Value.fromBigInt(value));
  }

  get volumeCumulative(): BigInt {
    let value = this.get("volumeCumulative");
    return value.toBigInt();
  }

  set volumeCumulative(value: BigInt) {
    this.set("volumeCumulative", Value.fromBigInt(value));
  }

  get totalRebateUsd(): BigInt {
    let value = this.get("totalRebateUsd");
    return value.toBigInt();
  }

  set totalRebateUsd(value: BigInt) {
    this.set("totalRebateUsd", Value.fromBigInt(value));
  }

  get totalRebateUsdCumulative(): BigInt {
    let value = this.get("totalRebateUsdCumulative");
    return value.toBigInt();
  }

  set totalRebateUsdCumulative(value: BigInt) {
    this.set("totalRebateUsdCumulative", Value.fromBigInt(value));
  }

  get discountUsd(): BigInt {
    let value = this.get("discountUsd");
    return value.toBigInt();
  }

  set discountUsd(value: BigInt) {
    this.set("discountUsd", Value.fromBigInt(value));
  }

  get discountUsdCumulative(): BigInt {
    let value = this.get("discountUsdCumulative");
    return value.toBigInt();
  }

  set discountUsdCumulative(value: BigInt) {
    this.set("discountUsdCumulative", Value.fromBigInt(value));
  }

  get trades(): BigInt {
    let value = this.get("trades");
    return value.toBigInt();
  }

  set trades(value: BigInt) {
    this.set("trades", Value.fromBigInt(value));
  }

  get tradesCumulative(): BigInt {
    let value = this.get("tradesCumulative");
    return value.toBigInt();
  }

  set tradesCumulative(value: BigInt) {
    this.set("tradesCumulative", Value.fromBigInt(value));
  }

  get referrersCount(): BigInt {
    let value = this.get("referrersCount");
    return value.toBigInt();
  }

  set referrersCount(value: BigInt) {
    this.set("referrersCount", Value.fromBigInt(value));
  }

  get referrersCountCumulative(): BigInt {
    let value = this.get("referrersCountCumulative");
    return value.toBigInt();
  }

  set referrersCountCumulative(value: BigInt) {
    this.set("referrersCountCumulative", Value.fromBigInt(value));
  }

  get referralCodesCount(): BigInt {
    let value = this.get("referralCodesCount");
    return value.toBigInt();
  }

  set referralCodesCount(value: BigInt) {
    this.set("referralCodesCount", Value.fromBigInt(value));
  }

  get referralCodesCountCumulative(): BigInt {
    let value = this.get("referralCodesCountCumulative");
    return value.toBigInt();
  }

  set referralCodesCountCumulative(value: BigInt) {
    this.set("referralCodesCountCumulative", Value.fromBigInt(value));
  }

  get referralsCount(): BigInt {
    let value = this.get("referralsCount");
    return value.toBigInt();
  }

  set referralsCount(value: BigInt) {
    this.set("referralsCount", Value.fromBigInt(value));
  }

  get referralsCountCumulative(): BigInt {
    let value = this.get("referralsCountCumulative");
    return value.toBigInt();
  }

  set referralsCountCumulative(value: BigInt) {
    this.set("referralsCountCumulative", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get period(): string {
    let value = this.get("period");
    return value.toString();
  }

  set period(value: string) {
    this.set("period", Value.fromString(value));
  }
}

export class ExecuteDecreaseOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save ExecuteDecreaseOrder entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExecuteDecreaseOrder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExecuteDecreaseOrder", id.toString(), this);
  }

  static load(id: string): ExecuteDecreaseOrder | null {
    return store.get("ExecuteDecreaseOrder", id) as ExecuteDecreaseOrder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sizeDelta(): BigInt {
    let value = this.get("sizeDelta");
    return value.toBigInt();
  }

  set sizeDelta(value: BigInt) {
    this.set("sizeDelta", Value.fromBigInt(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class PositionReferralAction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save PositionReferralAction entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PositionReferralAction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PositionReferralAction", id.toString(), this);
  }

  static load(id: string): PositionReferralAction | null {
    return store.get(
      "PositionReferralAction",
      id
    ) as PositionReferralAction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get referralCode(): string {
    let value = this.get("referralCode");
    return value.toString();
  }

  set referralCode(value: string) {
    this.set("referralCode", Value.fromString(value));
  }

  get referrer(): string {
    let value = this.get("referrer");
    return value.toString();
  }

  set referrer(value: string) {
    this.set("referrer", Value.fromString(value));
  }

  get isIncrease(): boolean {
    let value = this.get("isIncrease");
    return value.toBoolean();
  }

  set isIncrease(value: boolean) {
    this.set("isIncrease", Value.fromBoolean(value));
  }

  get volume(): BigInt {
    let value = this.get("volume");
    return value.toBigInt();
  }

  set volume(value: BigInt) {
    this.set("volume", Value.fromBigInt(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get blockNumber(): i32 {
    let value = this.get("blockNumber");
    return value.toI32();
  }

  set blockNumber(value: i32) {
    this.set("blockNumber", Value.fromI32(value));
  }

  get logIndex(): i32 {
    let value = this.get("logIndex");
    return value.toI32();
  }

  set logIndex(value: i32) {
    this.set("logIndex", Value.fromI32(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
