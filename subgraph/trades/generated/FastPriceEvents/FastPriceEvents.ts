// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PriceUpdate extends ethereum.Event {
  get params(): PriceUpdate__Params {
    return new PriceUpdate__Params(this);
  }
}

export class PriceUpdate__Params {
  _event: PriceUpdate;

  constructor(event: PriceUpdate) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get priceFeed(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class FastPriceEvents extends ethereum.SmartContract {
  static bind(address: Address): FastPriceEvents {
    return new FastPriceEvents("FastPriceEvents", address);
  }

  gov(): Address {
    let result = super.call("gov", "gov():(address)", []);

    return result[0].toAddress();
  }

  try_gov(): ethereum.CallResult<Address> {
    let result = super.tryCall("gov", "gov():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPriceFeed(param0: Address): boolean {
    let result = super.call("isPriceFeed", "isPriceFeed(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isPriceFeed(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPriceFeed", "isPriceFeed(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class EmitPriceEventCall extends ethereum.Call {
  get inputs(): EmitPriceEventCall__Inputs {
    return new EmitPriceEventCall__Inputs(this);
  }

  get outputs(): EmitPriceEventCall__Outputs {
    return new EmitPriceEventCall__Outputs(this);
  }
}

export class EmitPriceEventCall__Inputs {
  _call: EmitPriceEventCall;

  constructor(call: EmitPriceEventCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EmitPriceEventCall__Outputs {
  _call: EmitPriceEventCall;

  constructor(call: EmitPriceEventCall) {
    this._call = call;
  }
}

export class SetGovCall extends ethereum.Call {
  get inputs(): SetGovCall__Inputs {
    return new SetGovCall__Inputs(this);
  }

  get outputs(): SetGovCall__Outputs {
    return new SetGovCall__Outputs(this);
  }
}

export class SetGovCall__Inputs {
  _call: SetGovCall;

  constructor(call: SetGovCall) {
    this._call = call;
  }

  get _gov(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGovCall__Outputs {
  _call: SetGovCall;

  constructor(call: SetGovCall) {
    this._call = call;
  }
}

export class SetIsPriceFeedCall extends ethereum.Call {
  get inputs(): SetIsPriceFeedCall__Inputs {
    return new SetIsPriceFeedCall__Inputs(this);
  }

  get outputs(): SetIsPriceFeedCall__Outputs {
    return new SetIsPriceFeedCall__Outputs(this);
  }
}

export class SetIsPriceFeedCall__Inputs {
  _call: SetIsPriceFeedCall;

  constructor(call: SetIsPriceFeedCall) {
    this._call = call;
  }

  get _priceFeed(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _isPriceFeed(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetIsPriceFeedCall__Outputs {
  _call: SetIsPriceFeedCall;

  constructor(call: SetIsPriceFeedCall) {
    this._call = call;
  }
}