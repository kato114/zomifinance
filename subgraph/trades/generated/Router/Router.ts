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

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenIn(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenOut(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amountIn(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amountOut(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Router extends ethereum.SmartContract {
  static bind(address: Address): Router {
    return new Router("Router", address);
  }

  approvedPlugins(param0: Address, param1: Address): boolean {
    let result = super.call(
      "approvedPlugins",
      "approvedPlugins(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBoolean();
  }

  try_approvedPlugins(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "approvedPlugins",
      "approvedPlugins(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  pluginDecreasePosition(
    _account: Address,
    _collateralToken: Address,
    _indexToken: Address,
    _collateralDelta: BigInt,
    _sizeDelta: BigInt,
    _isLong: boolean,
    _receiver: Address
  ): BigInt {
    let result = super.call(
      "pluginDecreasePosition",
      "pluginDecreasePosition(address,address,address,uint256,uint256,bool,address):(uint256)",
      [
        ethereum.Value.fromAddress(_account),
        ethereum.Value.fromAddress(_collateralToken),
        ethereum.Value.fromAddress(_indexToken),
        ethereum.Value.fromUnsignedBigInt(_collateralDelta),
        ethereum.Value.fromUnsignedBigInt(_sizeDelta),
        ethereum.Value.fromBoolean(_isLong),
        ethereum.Value.fromAddress(_receiver)
      ]
    );

    return result[0].toBigInt();
  }

  try_pluginDecreasePosition(
    _account: Address,
    _collateralToken: Address,
    _indexToken: Address,
    _collateralDelta: BigInt,
    _sizeDelta: BigInt,
    _isLong: boolean,
    _receiver: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pluginDecreasePosition",
      "pluginDecreasePosition(address,address,address,uint256,uint256,bool,address):(uint256)",
      [
        ethereum.Value.fromAddress(_account),
        ethereum.Value.fromAddress(_collateralToken),
        ethereum.Value.fromAddress(_indexToken),
        ethereum.Value.fromUnsignedBigInt(_collateralDelta),
        ethereum.Value.fromUnsignedBigInt(_sizeDelta),
        ethereum.Value.fromBoolean(_isLong),
        ethereum.Value.fromAddress(_receiver)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  plugins(param0: Address): boolean {
    let result = super.call("plugins", "plugins(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_plugins(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("plugins", "plugins(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  usdg(): Address {
    let result = super.call("usdg", "usdg():(address)", []);

    return result[0].toAddress();
  }

  try_usdg(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdg", "usdg():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vault(): Address {
    let result = super.call("vault", "vault():(address)", []);

    return result[0].toAddress();
  }

  try_vault(): ethereum.CallResult<Address> {
    let result = super.tryCall("vault", "vault():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  weth(): Address {
    let result = super.call("weth", "weth():(address)", []);

    return result[0].toAddress();
  }

  try_weth(): ethereum.CallResult<Address> {
    let result = super.tryCall("weth", "weth():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _vault(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _usdg(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _weth(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddPluginCall extends ethereum.Call {
  get inputs(): AddPluginCall__Inputs {
    return new AddPluginCall__Inputs(this);
  }

  get outputs(): AddPluginCall__Outputs {
    return new AddPluginCall__Outputs(this);
  }
}

export class AddPluginCall__Inputs {
  _call: AddPluginCall;

  constructor(call: AddPluginCall) {
    this._call = call;
  }

  get _plugin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddPluginCall__Outputs {
  _call: AddPluginCall;

  constructor(call: AddPluginCall) {
    this._call = call;
  }
}

export class ApprovePluginCall extends ethereum.Call {
  get inputs(): ApprovePluginCall__Inputs {
    return new ApprovePluginCall__Inputs(this);
  }

  get outputs(): ApprovePluginCall__Outputs {
    return new ApprovePluginCall__Outputs(this);
  }
}

export class ApprovePluginCall__Inputs {
  _call: ApprovePluginCall;

  constructor(call: ApprovePluginCall) {
    this._call = call;
  }

  get _plugin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ApprovePluginCall__Outputs {
  _call: ApprovePluginCall;

  constructor(call: ApprovePluginCall) {
    this._call = call;
  }
}

export class DecreasePositionCall extends ethereum.Call {
  get inputs(): DecreasePositionCall__Inputs {
    return new DecreasePositionCall__Inputs(this);
  }

  get outputs(): DecreasePositionCall__Outputs {
    return new DecreasePositionCall__Outputs(this);
  }
}

export class DecreasePositionCall__Inputs {
  _call: DecreasePositionCall;

  constructor(call: DecreasePositionCall) {
    this._call = call;
  }

  get _collateralToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _indexToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _collateralDelta(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _sizeDelta(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _isLong(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _receiver(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class DecreasePositionCall__Outputs {
  _call: DecreasePositionCall;

  constructor(call: DecreasePositionCall) {
    this._call = call;
  }
}

export class DecreasePositionAndSwapCall extends ethereum.Call {
  get inputs(): DecreasePositionAndSwapCall__Inputs {
    return new DecreasePositionAndSwapCall__Inputs(this);
  }

  get outputs(): DecreasePositionAndSwapCall__Outputs {
    return new DecreasePositionAndSwapCall__Outputs(this);
  }
}

export class DecreasePositionAndSwapCall__Inputs {
  _call: DecreasePositionAndSwapCall;

  constructor(call: DecreasePositionAndSwapCall) {
    this._call = call;
  }

  get _path(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _indexToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _collateralDelta(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _sizeDelta(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _isLong(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _receiver(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _minOut(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class DecreasePositionAndSwapCall__Outputs {
  _call: DecreasePositionAndSwapCall;

  constructor(call: DecreasePositionAndSwapCall) {
    this._call = call;
  }
}

export class DecreasePositionAndSwapETHCall extends ethereum.Call {
  get inputs(): DecreasePositionAndSwapETHCall__Inputs {
    return new DecreasePositionAndSwapETHCall__Inputs(this);
  }

  get outputs(): DecreasePositionAndSwapETHCall__Outputs {
    return new DecreasePositionAndSwapETHCall__Outputs(this);
  }
}

export class DecreasePositionAndSwapETHCall__Inputs {
  _call: DecreasePositionAndSwapETHCall;

  constructor(call: DecreasePositionAndSwapETHCall) {
    this._call = call;
  }

  get _path(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _indexToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _collateralDelta(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _sizeDelta(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _isLong(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _receiver(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _minOut(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class DecreasePositionAndSwapETHCall__Outputs {
  _call: DecreasePositionAndSwapETHCall;

  constructor(call: DecreasePositionAndSwapETHCall) {
    this._call = call;
  }
}

export class DecreasePositionETHCall extends ethereum.Call {
  get inputs(): DecreasePositionETHCall__Inputs {
    return new DecreasePositionETHCall__Inputs(this);
  }

  get outputs(): DecreasePositionETHCall__Outputs {
    return new DecreasePositionETHCall__Outputs(this);
  }
}

export class DecreasePositionETHCall__Inputs {
  _call: DecreasePositionETHCall;

  constructor(call: DecreasePositionETHCall) {
    this._call = call;
  }

  get _collateralToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _indexToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _collateralDelta(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _sizeDelta(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _isLong(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _receiver(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class DecreasePositionETHCall__Outputs {
  _call: DecreasePositionETHCall;

  constructor(call: DecreasePositionETHCall) {
    this._call = call;
  }
}

export class DenyPluginCall extends ethereum.Call {
  get inputs(): DenyPluginCall__Inputs {
    return new DenyPluginCall__Inputs(this);
  }

  get outputs(): DenyPluginCall__Outputs {
    return new DenyPluginCall__Outputs(this);
  }
}

export class DenyPluginCall__Inputs {
  _call: DenyPluginCall;

  constructor(call: DenyPluginCall) {
    this._call = call;
  }

  get _plugin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DenyPluginCall__Outputs {
  _call: DenyPluginCall;

  constructor(call: DenyPluginCall) {
    this._call = call;
  }
}

export class DirectPoolDepositCall extends ethereum.Call {
  get inputs(): DirectPoolDepositCall__Inputs {
    return new DirectPoolDepositCall__Inputs(this);
  }

  get outputs(): DirectPoolDepositCall__Outputs {
    return new DirectPoolDepositCall__Outputs(this);
  }
}

export class DirectPoolDepositCall__Inputs {
  _call: DirectPoolDepositCall;

  constructor(call: DirectPoolDepositCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DirectPoolDepositCall__Outputs {
  _call: DirectPoolDepositCall;

  constructor(call: DirectPoolDepositCall) {
    this._call = call;
  }
}

export class IncreasePositionCall extends ethereum.Call {
  get inputs(): IncreasePositionCall__Inputs {
    return new IncreasePositionCall__Inputs(this);
  }

  get outputs(): IncreasePositionCall__Outputs {
    return new IncreasePositionCall__Outputs(this);
  }
}

export class IncreasePositionCall__Inputs {
  _call: IncreasePositionCall;

  constructor(call: IncreasePositionCall) {
    this._call = call;
  }

  get _path(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _indexToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amountIn(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _minOut(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _sizeDelta(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _isLong(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }

  get _price(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class IncreasePositionCall__Outputs {
  _call: IncreasePositionCall;

  constructor(call: IncreasePositionCall) {
    this._call = call;
  }
}

export class IncreasePositionETHCall extends ethereum.Call {
  get inputs(): IncreasePositionETHCall__Inputs {
    return new IncreasePositionETHCall__Inputs(this);
  }

  get outputs(): IncreasePositionETHCall__Outputs {
    return new IncreasePositionETHCall__Outputs(this);
  }
}

export class IncreasePositionETHCall__Inputs {
  _call: IncreasePositionETHCall;

  constructor(call: IncreasePositionETHCall) {
    this._call = call;
  }

  get _path(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _indexToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _minOut(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _sizeDelta(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _isLong(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _price(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class IncreasePositionETHCall__Outputs {
  _call: IncreasePositionETHCall;

  constructor(call: IncreasePositionETHCall) {
    this._call = call;
  }
}

export class PluginDecreasePositionCall extends ethereum.Call {
  get inputs(): PluginDecreasePositionCall__Inputs {
    return new PluginDecreasePositionCall__Inputs(this);
  }

  get outputs(): PluginDecreasePositionCall__Outputs {
    return new PluginDecreasePositionCall__Outputs(this);
  }
}

export class PluginDecreasePositionCall__Inputs {
  _call: PluginDecreasePositionCall;

  constructor(call: PluginDecreasePositionCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _collateralToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _indexToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _collateralDelta(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _sizeDelta(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _isLong(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }

  get _receiver(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class PluginDecreasePositionCall__Outputs {
  _call: PluginDecreasePositionCall;

  constructor(call: PluginDecreasePositionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PluginIncreasePositionCall extends ethereum.Call {
  get inputs(): PluginIncreasePositionCall__Inputs {
    return new PluginIncreasePositionCall__Inputs(this);
  }

  get outputs(): PluginIncreasePositionCall__Outputs {
    return new PluginIncreasePositionCall__Outputs(this);
  }
}

export class PluginIncreasePositionCall__Inputs {
  _call: PluginIncreasePositionCall;

  constructor(call: PluginIncreasePositionCall) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _collateralToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _indexToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _sizeDelta(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _isLong(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }
}

export class PluginIncreasePositionCall__Outputs {
  _call: PluginIncreasePositionCall;

  constructor(call: PluginIncreasePositionCall) {
    this._call = call;
  }
}

export class PluginTransferCall extends ethereum.Call {
  get inputs(): PluginTransferCall__Inputs {
    return new PluginTransferCall__Inputs(this);
  }

  get outputs(): PluginTransferCall__Outputs {
    return new PluginTransferCall__Outputs(this);
  }
}

export class PluginTransferCall__Inputs {
  _call: PluginTransferCall;

  constructor(call: PluginTransferCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _receiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class PluginTransferCall__Outputs {
  _call: PluginTransferCall;

  constructor(call: PluginTransferCall) {
    this._call = call;
  }
}

export class RemovePluginCall extends ethereum.Call {
  get inputs(): RemovePluginCall__Inputs {
    return new RemovePluginCall__Inputs(this);
  }

  get outputs(): RemovePluginCall__Outputs {
    return new RemovePluginCall__Outputs(this);
  }
}

export class RemovePluginCall__Inputs {
  _call: RemovePluginCall;

  constructor(call: RemovePluginCall) {
    this._call = call;
  }

  get _plugin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemovePluginCall__Outputs {
  _call: RemovePluginCall;

  constructor(call: RemovePluginCall) {
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

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get _path(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amountIn(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minOut(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }
}

export class SwapETHToTokensCall extends ethereum.Call {
  get inputs(): SwapETHToTokensCall__Inputs {
    return new SwapETHToTokensCall__Inputs(this);
  }

  get outputs(): SwapETHToTokensCall__Outputs {
    return new SwapETHToTokensCall__Outputs(this);
  }
}

export class SwapETHToTokensCall__Inputs {
  _call: SwapETHToTokensCall;

  constructor(call: SwapETHToTokensCall) {
    this._call = call;
  }

  get _path(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _minOut(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SwapETHToTokensCall__Outputs {
  _call: SwapETHToTokensCall;

  constructor(call: SwapETHToTokensCall) {
    this._call = call;
  }
}

export class SwapTokensToETHCall extends ethereum.Call {
  get inputs(): SwapTokensToETHCall__Inputs {
    return new SwapTokensToETHCall__Inputs(this);
  }

  get outputs(): SwapTokensToETHCall__Outputs {
    return new SwapTokensToETHCall__Outputs(this);
  }
}

export class SwapTokensToETHCall__Inputs {
  _call: SwapTokensToETHCall;

  constructor(call: SwapTokensToETHCall) {
    this._call = call;
  }

  get _path(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _amountIn(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minOut(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _receiver(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class SwapTokensToETHCall__Outputs {
  _call: SwapTokensToETHCall;

  constructor(call: SwapTokensToETHCall) {
    this._call = call;
  }
}
