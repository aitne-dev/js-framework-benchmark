function _M0TPC13ref3RefGRP48Arcelyth5aitne3src3dom8DomCacheE(param0) {
  this.val = param0;
}
function _M0TP48Arcelyth5aitne3src3dom8DomCache(param0, param1) {
  this.window = param0;
  this.document = param1;
}
function _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi6WindowE4None() {}
_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi6WindowE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi6WindowE4None__ = new _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi6WindowE4None();
function _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi6WindowE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi6WindowE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi8DocumentE4None() {}
_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi8DocumentE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi8DocumentE4None__ = new _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi8DocumentE4None();
function _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi8DocumentE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi8DocumentE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGUiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP48Arcelyth5aitne3src8reactive9Scheduler(param0, param1, param2, param3) {
  this.pending = param0;
  this.queued = param1;
  this.flushing = param2;
  this.batch_depth = param3;
}
function _M0TPB9ArrayViewGjE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB6Hasher(param0) {
  this.acc = param0;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGRP48Arcelyth5aitne3src3ffi4NodeE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGiE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4None() {}
_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4None__ = new _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4None();
function _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGRP48Arcelyth5aitne3src3ffi4NodeE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPC13ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGRP48Arcelyth5aitne3src3dom9AttrStateE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGOiE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGbE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGORP48Arcelyth5aitne3src8reactive13ObserverStateE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGjE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPC17hashmap7HashMapGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(param0, param1, param2, param3) {
  this.entries = param0;
  this.capacity = param1;
  this.capacity_mask = param2;
  this.size = param3;
}
function _M0TPC17hashmap7HashMapGsRP210tonyfettes3any3AnyE(param0, param1, param2, param3) {
  this.entries = param0;
  this.capacity = param1;
  this.capacity_mask = param2;
  this.size = param3;
}
function _M0TPC17hashmap7HashMapGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(param0, param1, param2, param3) {
  this.entries = param0;
  this.capacity = param1;
  this.capacity_mask = param2;
  this.size = param3;
}
function _M0TPC17hashmap5EntryGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(param0, param1, param2, param3) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
  this.value = param3;
}
function _M0TPC17hashmap5EntryGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(param0, param1, param2, param3) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
  this.value = param3;
}
function _M0TPC17hashmap5EntryGsRP48Arcelyth5aitne3src3dom11RenderStateE(param0, param1, param2, param3) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
  this.value = param3;
}
function _M0TPC17hashmap5EntryGsRP210tonyfettes3any3AnyE(param0, param1, param2, param3) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
  this.value = param3;
}
function _M0TPC17hashset7HashSetGiE(param0, param1, param2, param3, param4) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
}
function _M0TPC17hashset7HashSetGsE(param0, param1, param2, param3, param4) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
}
function _M0TPC17hashset7HashSetGjE(param0, param1, param2, param3, param4) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
}
function _M0TPC17hashset5EntryGiE(param0, param1, param2) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
}
function _M0TPC17hashset5EntryGsE(param0, param1, param2) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
}
function _M0TPC17hashset5EntryGjE(param0, param1, param2) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
}
function _M0TPC17hashset5EntryGRP48Arcelyth5aitne3src8reactive11ASubscriberE(param0, param1, param2) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
}
function _M0TPC17hashset5EntryGRP48Arcelyth5aitne3src8reactive7ASourceE(param0, param1, param2) {
  this.psl = param0;
  this.hash = param1;
  this.key = param2;
}
const _M0FP48Arcelyth5aitne3src3ffi26prim__add__event__listener = (el, name, cb) => {
  el.addEventListener(name, cb);
  return () => el.removeEventListener(name, cb);
};
const _M0FP48Arcelyth5aitne3src3ffi35prim__add__event__listener__capture = (el, name, cb) => {
  el.addEventListener(name, cb, true);
  return () => el.removeEventListener(name, cb, true);
};
const _M0FP48Arcelyth5aitne3src3ffi25prim__call__event__handle = (handle) => { handle(); };
const _M0FP48Arcelyth5aitne3src3ffi12el__as__node = (el) => el;
const _M0FP48Arcelyth5aitne3src3ffi14text__as__node = (t) => t;
const _M0FP48Arcelyth5aitne3src3ffi14prim__document = () => document;
const _M0FP48Arcelyth5aitne3src3ffi15prim__get__body = (doc) => doc.body;
const _M0FP48Arcelyth5aitne3src3ffi21prim__create__element = (doc, tag) => doc.createElement(tag);
const _M0FP48Arcelyth5aitne3src3ffi24prim__create__text__node = (doc, text) => doc.createTextNode(text);
const _M0FP48Arcelyth5aitne3src3ffi20dom__create__comment = (text) => document.createComment(text);
const _M0FP48Arcelyth5aitne3src3ffi15dom__null__node = () => null;
const _M0FP48Arcelyth5aitne3src3ffi11dom__append = (parent, child) => parent.appendChild(child);
const _M0FP48Arcelyth5aitne3src3ffi19dom__insert__before = (parent, new_child, ref_child) => { parent.insertBefore(new_child, ref_child); };
const _M0FP48Arcelyth5aitne3src3ffi11dom__remove = (node) => node.remove();
const _M0FP48Arcelyth5aitne3src3ffi14prim__node__eq = (a, b) => a === b;
const _M0FP48Arcelyth5aitne3src3ffi14prim__is__null = (node) => node === null || node === undefined;
const _M0FP48Arcelyth5aitne3src3ffi13dom__is__null = (node) => node === null || node === undefined;
const _M0FP48Arcelyth5aitne3src3ffi19prim__next__sibling = (node) => node.nextSibling;
const _M0FP48Arcelyth5aitne3src3ffi14dom__set__attr = (el, key, val) => { el.setAttribute(key, val); };
const _M0FP48Arcelyth5aitne3src3ffi14dom__set__text = (node, text) => { node.textContent = text; };
const _M0FP48Arcelyth5aitne3src3ffi14dom__set__prop = (node, key, val) => { node[key] = val; };
function _M0TP48Arcelyth5aitne3src8reactive11SignalInnerGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(param0, param1, param2) {
  this.id = param0;
  this.value = param1;
  this.subs = param2;
}
function _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive11ASubscriberE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP48Arcelyth5aitne3src8reactive11SignalInnerGiE(param0, param1, param2) {
  this.id = param0;
  this.value = param1;
  this.subs = param2;
}
function _M0TP48Arcelyth5aitne3src8reactive11SignalInnerGbE(param0, param1, param2) {
  this.id = param0;
  this.value = param1;
  this.subs = param2;
}
function _M0TP48Arcelyth5aitne3src8reactive11SignalInnerGsE(param0, param1, param2) {
  this.id = param0;
  this.value = param1;
  this.subs = param2;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE4None.prototype.$tag = 0;
function _M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE4Some.prototype.$tag = 1;
function _M0TP48Arcelyth5aitne3src8reactive7ASource(param0, param1) {
  this.id = param0;
  this.src = param1;
}
function _M0TP48Arcelyth5aitne3src8reactive8RwSignalGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive8RwSignalGiE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive8RwSignalGbE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive8RwSignalGsE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive10ReadSignalGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive10ReadSignalGiE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive10ReadSignalGsE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive11WriteSignalGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive11WriteSignalGiE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive11WriteSignalGsE(param0) {
  this.inner = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive11EffectInnerGiE(param0, param1, param2, param3, param4) {
  this.id = param0;
  this.stale = param1;
  this.cb = param2;
  this.sources = param3;
  this.schedule = param4;
}
function _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive7ASourceE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP48Arcelyth5aitne3src8reactive11EffectInnerGuE(param0, param1, param2, param3, param4) {
  this.id = param0;
  this.stale = param1;
  this.cb = param2;
  this.sources = param3;
  this.schedule = param4;
}
function _M0TP48Arcelyth5aitne3src8reactive11EffectInnerGRP48Arcelyth5aitne3src3dom9AttrStateE(param0, param1, param2, param3, param4) {
  this.id = param0;
  this.stale = param1;
  this.cb = param2;
  this.sources = param3;
  this.schedule = param4;
}
function _M0TP48Arcelyth5aitne3src8reactive13ObserverState(param0, param1) {
  this.subscriber = param0;
  this.untracked = param1;
}
function _M0TP48Arcelyth5aitne3src8reactive10OwnerState(param0, param1, param2, param3, param4) {
  this.parent = param0;
  this.cleanups = param1;
  this.children = param2;
  this.contexts = param3;
  this.disposed = param4;
}
function _M0TPB9ArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP210tonyfettes3any3AnyEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP48Arcelyth5aitne3src8reactive5Owner(param0) {
  this.id = param0;
}
function _M0TP48Arcelyth5aitne3src8reactive12RenderEffectGiE(param0, param1, param2) {
  this.value = param0;
  this.inner = param1;
  this.owner = param2;
}
function _M0TPB9ArrayViewGUiRP48Arcelyth5aitne3src8reactive8RwSignalGbEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP48Arcelyth5aitne3src8reactive8SelectorGiE(param0, param1) {
  this.subs = param0;
  this.effect = param1;
}
function _M0TP48Arcelyth5aitne3src8reactive11ASubscriber(param0, param1) {
  this.id = param0;
  this.sub = param1;
}
function _M0TP48Arcelyth5aitne3src8reactive12RenderEffectGRP48Arcelyth5aitne3src3dom9AttrStateE(param0, param1, param2) {
  this.value = param0;
  this.inner = param1;
  this.owner = param2;
}
function _M0TP48Arcelyth5aitne3src8reactive6EffectGuE(param0, param1) {
  this.inner = param0;
  this.owner = param1;
}
function _M0TP48Arcelyth5aitne3src3dom8TextNode(param0) {
  this.val = param0;
}
function _M0TP48Arcelyth5aitne3src3dom8AttrList(param0) {
  this.items = param0;
}
function _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(param0, param1, param2) {
  this.tag = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0TP48Arcelyth5aitne3src3dom8PropertyGsE(param0, param1) {
  this.key = param0;
  this.value = param1;
}
function _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(param0, param1, param2) {
  this.tag = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(param0, param1, param2) {
  this.tag = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(param0, param1, param2) {
  this.tag = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(param0, param1, param2) {
  this.tag = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(param0, param1, param2) {
  this.tag = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(param0, param1, param2) {
  this.tag = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(param0, param1, param2) {
  this.tag = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(param0, param1, param2) {
  this.tag = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0DTP48Arcelyth5aitne3src3dom11RenderState4None() {}
_M0DTP48Arcelyth5aitne3src3dom11RenderState4None.prototype.$tag = 0;
function _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom11RenderState7Element.prototype.$tag = 1;
function _M0DTP48Arcelyth5aitne3src3dom11RenderState4Text(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom11RenderState4Text.prototype.$tag = 2;
function _M0DTP48Arcelyth5aitne3src3dom11RenderState8Fragment(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom11RenderState8Fragment.prototype.$tag = 3;
function _M0DTP48Arcelyth5aitne3src3dom11RenderState10MultiBlock(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom11RenderState10MultiBlock.prototype.$tag = 4;
function _M0DTP48Arcelyth5aitne3src3dom11RenderState6Router(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom11RenderState6Router.prototype.$tag = 5;
function _M0TP48Arcelyth5aitne3src3dom9TextState(param0) {
  this.node = param0;
}
function _M0DTP48Arcelyth5aitne3src3dom9AttrState4None() {}
_M0DTP48Arcelyth5aitne3src3dom9AttrState4None.prototype.$tag = 0;
const _M0DTP48Arcelyth5aitne3src3dom9AttrState4None__ = new _M0DTP48Arcelyth5aitne3src3dom9AttrState4None();
function _M0DTP48Arcelyth5aitne3src3dom9AttrState3Str(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom9AttrState3Str.prototype.$tag = 1;
function _M0DTP48Arcelyth5aitne3src3dom9AttrState4Bool(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom9AttrState4Bool.prototype.$tag = 2;
function _M0DTP48Arcelyth5aitne3src3dom9AttrState7Element(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom9AttrState7Element.prototype.$tag = 3;
function _M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair.prototype.$tag = 4;
function _M0DTP48Arcelyth5aitne3src3dom9AttrState12RenderEffect(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom9AttrState12RenderEffect.prototype.$tag = 5;
function _M0DTP48Arcelyth5aitne3src3dom9AttrState10EventBound(param0) {
  this._0 = param0;
}
_M0DTP48Arcelyth5aitne3src3dom9AttrState10EventBound.prototype.$tag = 6;
function _M0TP48Arcelyth5aitne3src3dom12ElementState(param0, param1, param2) {
  this.el = param0;
  this.attrs = param1;
  this.children = param2;
}
function _M0TP48Arcelyth5aitne3src3dom2On(param0, param1, param2) {
  this.event = param0;
  this.owner = param1;
  this.fun = param2;
}
function _M0TP48Arcelyth5aitne3src3dom9EventDesp(param0, param1, param2) {
  this.name = param0;
  this.bubbles = param1;
  this.capture = param2;
}
function _M0TP48Arcelyth5aitne3src3dom13FragmentState(param0) {
  this.children = param0;
}
function _M0TP48Arcelyth5aitne3src3dom11DynTextNode(param0) {
  this.getter = param0;
}
function _M0TP48Arcelyth5aitne3src3dom7ForNodeGRP48Arcelyth5aitne8examples5bench3RowsE(param0, param1, param2) {
  this.each = param0;
  this.key = param1;
  this.render = param2;
}
function _M0TPB9ArrayViewGUsRP48Arcelyth5aitne3src3dom11RenderStateEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP48Arcelyth5aitne3src3dom15MultiBlockState(param0, param1, param2, param3) {
  this.start_anchor = param0;
  this.end_anchor = param1;
  this.init = param2;
  this.cleanup = param3;
}
function _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi11EventHandleE4None() {}
_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi11EventHandleE4None.prototype.$tag = 0;
function _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi11EventHandleE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi11EventHandleE4Some.prototype.$tag = 1;
function _M0TP48Arcelyth5aitne8examples5bench3Row(param0, param1, param2) {
  this.id = param0;
  this.label = param1;
  this.set_label = param2;
}
function _M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE4Some.prototype.$tag = 1;
const _M0FP0217Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagButton_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_1: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_2: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_3: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE, method_5: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE };
const _M0FP0149moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bInt_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber = { method_0: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber11add__sourceGiE, method_1: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber14clean__sourcesGiE, method_2: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGiE, method_3: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGiE, method_4: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGiE, method_5: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGiE };
const _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTd_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_1: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_2: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_3: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE, method_5: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE };
const _M0FP0108Arcelyth_2faitne_2fsrc_2freactive_2fReadSignal_5bInt_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSource = { method_0: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source8add__subGiE, method_1: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11remove__subGiE, method_2: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11clear__subsGiE, method_3: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGiE, method_4: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGiE, method_5: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGiE, method_6: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGiE };
const _M0FP0189moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fRenderEffect_5bArcelyth_2faitne_2fsrc_2fdom_2fAttrState_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eEffectRunner = { method_0: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner7get__idGRP48Arcelyth5aitne3src8reactive12RenderEffectGRP48Arcelyth5aitne3src3dom9AttrStateEE, method_1: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGRP48Arcelyth5aitne3src8reactive12RenderEffectGRP48Arcelyth5aitne3src3dom9AttrStateEE };
const _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagH1_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_1: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_2: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_3: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE, method_5: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE };
const _M0FP0147moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffect_5bUnit_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eEffectRunner = { method_0: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner7get__idGRP48Arcelyth5aitne3src8reactive6EffectGuEE, method_1: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGRP48Arcelyth5aitne3src8reactive6EffectGuEE };
const _M0FP0186moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bArcelyth_2faitne_2fsrc_2fdom_2fAttrState_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber = { method_0: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber11add__sourceGRP48Arcelyth5aitne3src3dom9AttrStateE, method_1: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber14clean__sourcesGRP48Arcelyth5aitne3src3dom9AttrStateE, method_2: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGRP48Arcelyth5aitne3src3dom9AttrStateE, method_3: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGRP48Arcelyth5aitne3src3dom9AttrStateE, method_4: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGRP48Arcelyth5aitne3src3dom9AttrStateE, method_5: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGRP48Arcelyth5aitne3src3dom9AttrStateE };
const _M0FP0143Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bArcelyth_2faitne_2fsrc_2fdom_2fRxClass_5bString_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute = { method_0: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute9html__lenGRP48Arcelyth5aitne3src3dom7RxClassGsEE, method_1: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute8to__htmlGRP48Arcelyth5aitne3src3dom7RxClassGsEE, method_2: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute5buildGRP48Arcelyth5aitne3src3dom7RxClassGsEE, method_3: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute7rebuildGRP48Arcelyth5aitne3src3dom7RxClassGsEE, method_4: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute12dry__resolveGRP48Arcelyth5aitne3src3dom7RxClassGsEE, method_5: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute9add__attrGRP48Arcelyth5aitne3src3dom7RxClassGsEE };
const _M0FP0214Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagDiv_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_1: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_2: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_3: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE, method_5: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE };
const _M0FP0102Arcelyth_2faitne_2fsrc_2fdom_2fProperty_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute = { method_0: _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute9html__lenGsE, method_1: _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute8to__htmlGsE, method_2: _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute5buildGsE, method_3: _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute7rebuildGsE, method_4: _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute12dry__resolveGsE, method_5: _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute9add__attrGsE };
const _M0FP0152moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fRenderEffect_5bInt_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eEffectRunner = { method_0: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner7get__idGRP48Arcelyth5aitne3src8reactive12RenderEffectGiEE, method_1: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGRP48Arcelyth5aitne3src8reactive12RenderEffectGiEE };
const _M0FP0107Arcelyth_2faitne_2fsrc_2freactive_2fRwSignal_5bBool_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSource = { method_0: _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive6Source8add__subGbE, method_1: _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive6Source11remove__subGbE, method_2: _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive6Source11clear__subsGbE, method_3: _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGbE, method_4: _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGbE, method_5: _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGbE, method_6: _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGbE };
const _M0FP084Arcelyth_2faitne_2fsrc_2fdom_2fOn_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute = { method_0: _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute9html__len, method_1: _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute8to__html, method_2: _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute5build, method_3: _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute7rebuild, method_4: _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute12dry__resolve, method_5: _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute9add__attr };
const _M0FP0216Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTable_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_1: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_2: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_3: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE, method_5: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE };
const _M0FP088Arcelyth_2faitne_2fsrc_2fdom_2fDynTextNode_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom4View5style, method_1: _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom6Render5build, method_2: _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom6Render7rebuild, method_3: _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom10RenderHtml9html__len, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11DynTextNodeE, method_5: _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf };
const _M0FP0188Arcelyth_2faitne_2fsrc_2freactive_2fReadSignal_5bmoonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fexamples_2fbench_2fRow_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSource = { method_0: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source8add__subGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE, method_1: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11remove__subGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE, method_2: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11clear__subsGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE, method_3: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE, method_4: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE, method_5: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE, method_6: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE };
const _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute = { method_0: _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute9html__lenGRP48Arcelyth5aitne3src3dom9IntoStyleE, method_1: _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute8to__htmlGRP48Arcelyth5aitne3src3dom9IntoStyleE, method_2: _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute5buildGRP48Arcelyth5aitne3src3dom9IntoStyleE, method_3: _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute7rebuildGRP48Arcelyth5aitne3src3dom9IntoStyleE, method_4: _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute12dry__resolveGRP48Arcelyth5aitne3src3dom9IntoStyleE, method_5: _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute9add__attrGRP48Arcelyth5aitne3src3dom9IntoStyleE };
const _M0FP0111Arcelyth_2faitne_2fsrc_2freactive_2fReadSignal_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSource = { method_0: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source8add__subGsE, method_1: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11remove__subGsE, method_2: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11clear__subsGsE, method_3: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGsE, method_4: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGsE, method_5: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGsE, method_6: _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGsE };
const _M0FP085Arcelyth_2faitne_2fsrc_2fdom_2fTextNode_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom4View5style, method_1: _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom6Render5build, method_2: _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom6Render7rebuild, method_3: _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom10RenderHtml9html__len, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom8TextNodeE, method_5: _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf };
const _M0FP0143_28Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_2c_20Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_29_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute = { method_0: _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute9html__lenGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE, method_1: _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute8to__htmlGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE, method_2: _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute5buildGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE, method_3: _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute7rebuildGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE, method_4: _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute12dry__resolveGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE, method_5: _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute9add__attrGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE };
const _M0FP099Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute = { method_0: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute9html__lenGsE, method_1: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute8to__htmlGsE, method_2: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute5buildGsE, method_3: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute7rebuildGsE, method_4: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute12dry__resolveGsE, method_5: _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute9add__attrGsE };
const _M0FP0216Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTbody_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_1: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_2: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_3: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE, method_5: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE };
const _M0FP0143Arcelyth_2faitne_2fsrc_2fdom_2fForNode_5bArcelyth_2faitne_2fexamples_2fbench_2fRow_2c_20String_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne8examples5bench3RowsE, method_1: _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne8examples5bench3RowsE, method_2: _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne8examples5bench3RowsE, method_3: _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne8examples5bench3RowsE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom7ForNodeGRP48Arcelyth5aitne8examples5bench3RowsEE, method_5: _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne8examples5bench3RowsE };
const _M0FP0215Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagSpan_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_1: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_2: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_3: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE, method_5: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE };
const _M0FP0150moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bUnit_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber = { method_0: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber11add__sourceGuE, method_1: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber14clean__sourcesGuE, method_2: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGuE, method_3: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGuE, method_4: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGuE, method_5: _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGuE };
const _M0FP052String_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IPC16string6StringP48Arcelyth5aitne3src3dom4View5style, method_1: _M0IPC16string6StringP48Arcelyth5aitne3src3dom6Render5build, method_2: _M0IPC16string6StringP48Arcelyth5aitne3src3dom6Render7rebuild, method_3: _M0IPC16string6StringP48Arcelyth5aitne3src3dom10RenderHtml9html__len, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGsE, method_5: _M0IPC16string6StringP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf };
const _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTr_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_1: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_2: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_3: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE, method_5: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE };
const _M0FP0212Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagA_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView = { method_0: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_1: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_2: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_3: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE, method_4: _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE, method_5: _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE };
const _M0MPB4Iter4nextN6constrS9224GsE = 0;
const _M0MPB4Iter4nextN6constrS9225GsE = 0;
const _M0MPB4Iter4nextN6constrS9224GRP48Arcelyth5aitne3src3ffi4NodeE = 0;
const _M0MPB4Iter4nextN6constrS9225GRP48Arcelyth5aitne3src3ffi4NodeE = 0;
const _M0MPB4Iter4nextN6constrS9224GiE = 0;
const _M0MPB4Iter4nextN6constrS9225GiE = 0;
const _M0MPB4Iter3newN6constrS9232GsE = 0;
const _M0MPB4Iter3newN6constrS9232GRP48Arcelyth5aitne3src3ffi4NodeE = 0;
const _M0MPB4Iter3newN6constrS9232GiE = 0;
const _M0FP48Arcelyth5aitne3src3dom5cache = new _M0TPC13ref3RefGRP48Arcelyth5aitne3src3dom8DomCacheE(new _M0TP48Arcelyth5aitne3src3dom8DomCache(_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi6WindowE4None__, _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi8DocumentE4None__));
const _M0FP48Arcelyth5aitne8examples5bench10adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
const _M0FP48Arcelyth5aitne8examples5bench6colors = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "white", "black", "orange"];
const _M0FP48Arcelyth5aitne8examples5bench5nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
const _M0FP48Arcelyth5aitne3src8reactive19signal__id__counter = _M0FPC13ref3newGjE(0);
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP48Arcelyth5aitne3src8reactive17observer__context = _M0FPC13ref3newGORP48Arcelyth5aitne3src8reactive13ObserverStateE(undefined);
const _bind = [];
const _M0FP48Arcelyth5aitne3src8reactive15owner__registry = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_M0MPC17hashmap7HashMap7HashMapGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(new _M0TPB9ArrayViewGUiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEEE(_bind, 0, 0), undefined));
const _M0FP48Arcelyth5aitne3src8reactive14current__owner = _M0FPC13ref3newGOiE(undefined);
const _M0FP48Arcelyth5aitne3src8reactive15next__owner__id = _M0FPC13ref3newGiE(0);
const _tmp = [];
const _bind$2 = [];
const _M0FP48Arcelyth5aitne3src8reactive9scheduler = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(new _M0TP48Arcelyth5aitne3src8reactive9Scheduler(_tmp, _M0MPC17hashset7HashSet7HashSetGjE(new _M0TPB9ArrayViewGjE(_bind$2, 0, 0), undefined), false, 0));
const _M0FP48Arcelyth5aitne3src8reactive19effect__id__counter = _M0FPC13ref3newGjE(0);
const _M0FP48Arcelyth5aitne8examples5bench4seed = _M0MPC13ref3Ref3RefGiE(12345);
const _M0FP48Arcelyth5aitne8examples5bench8next__id = _M0MPC13ref3Ref3RefGiE(1);
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB6Hasher8consume4(self, input) {
  self.acc = _M0FPB13consume4__acc(self.acc, input);
}
function _M0MPB6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MPB6Hasher8consume4(self, value);
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGRP48Arcelyth5aitne8examples5bench3RowEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < len) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        $bound_check(src, _tmp$4);
        $bound_check(dst, _tmp$3);
        dst[_tmp$3] = src[_tmp$4];
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp$2 = len - 1 | 0;
    while (true) {
      const i = _tmp$2;
      if (i >= 0) {
        const _tmp$3 = dst_offset + i | 0;
        const _tmp$4 = src_offset + i | 0;
        $bound_check(src, _tmp$4);
        $bound_check(dst, _tmp$3);
        dst[_tmp$3] = src[_tmp$4];
        _tmp$2 = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGRP48Arcelyth5aitne8examples5bench3RowE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGRP48Arcelyth5aitne8examples5bench3RowEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPB6Hasher7combineGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self, value) {
  _M0IP48Arcelyth5aitne3src8reactive11ASubscriberPB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher7combineGRP48Arcelyth5aitne3src8reactive7ASourceE(self, value) {
  _M0IP48Arcelyth5aitne3src8reactive7ASourcePB4Hash13hash__combine(value, self);
}
function _M0MPB6Hasher14Hasher_2einner(seed) {
  return new _M0TPB6Hasher((seed >>> 0) + (374761393 >>> 0) | 0);
}
function _M0MPB6Hasher6Hasher(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FPB4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MPB6Hasher14Hasher_2einner(seed);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0MPB6Hasher8finalize(self) {
  return _M0FPB13finalize__acc(self.acc);
}
function _M0IP016_24default__implPB4Hash4hashGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self) {
  const h = _M0MPB6Hasher6Hasher(undefined);
  _M0MPB6Hasher7combineGRP48Arcelyth5aitne3src8reactive11ASubscriberE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB4Hash4hashGRP48Arcelyth5aitne3src8reactive7ASourceE(self) {
  const h = _M0MPB6Hasher6Hasher(undefined);
  _M0MPB6Hasher7combineGRP48Arcelyth5aitne3src8reactive7ASourceE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0MPB4Iter4nextGsE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$3 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9225GsE;
  } else {
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9224GsE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGRP48Arcelyth5aitne3src3ffi4NodeE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$3 = self.size_hint;
  if (result.$tag === 1) {
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9224GRP48Arcelyth5aitne3src3ffi4NodeE;
    }
  } else {
    self.size_hint = _M0MPB4Iter4nextN6constrS9225GRP48Arcelyth5aitne3src3ffi4NodeE;
  }
  return result;
}
function _M0MPB4Iter4nextGiE(self) {
  const _func = self.f;
  const result = _func();
  const _bind$3 = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9225GiE;
  } else {
    if (_bind$3 === undefined) {
    } else {
      const _Some = _bind$3;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9224GiE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGsE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9232GsE;
  }
  return new _M0TPB4IterGsE(f, size_hint$2);
}
function _M0MPB4Iter3newGRP48Arcelyth5aitne3src3ffi4NodeE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9232GRP48Arcelyth5aitne3src3ffi4NodeE;
  }
  return new _M0TPB4IterGRP48Arcelyth5aitne3src3ffi4NodeE(f, size_hint$2);
}
function _M0MPB4Iter3newGiE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9232GiE;
  }
  return new _M0TPB4IterGiE(f, size_hint$2);
}
function _M0MPC15array5Array4pushGRP48Arcelyth5aitne8examples5bench3RowE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGRP48Arcelyth5aitne3src3ffi4NodeE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array9ArrayView4iterGRP48Arcelyth5aitne3src3ffi4NodeE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRP48Arcelyth5aitne3src3ffi4NodeE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return new _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4Some(elem);
    } else {
      return _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4None__;
    }
  }, len);
}
function _M0MPC15array5Array4iterGRP48Arcelyth5aitne3src3ffi4NodeE(self) {
  return _M0MPC15array9ArrayView4iterGRP48Arcelyth5aitne3src3ffi4NodeE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src3ffi4NodeE(self, 0, self.length));
}
function _M0MPC16option6Option6unwrapGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGRP48Arcelyth5aitne8examples5bench3RowE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGRP48Arcelyth5aitne8examples5bench3RowE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0MPC15array10FixedArray12fill_2einnerGORPC17hashset5EntryGRP48Arcelyth5aitne3src8reactive11ASubscriberEE(self, value, start, end) {
  const array_length = self.length;
  if (array_length > 0) {
    if (start >= 0 && start < array_length) {
      let length;
      if (end === undefined) {
        length = array_length - start | 0;
      } else {
        const _Some = end;
        const _e = _Some;
        length = _e >= start && _e <= array_length ? _e - start | 0 : $panic();
      }
      self.fill(value, start, start + length);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    return;
  }
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind$3 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$3) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0IPC14uint4UIntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0FPB7printlnGsE(input) {
  console.log(input);
}
function _M0MPC15array5Array17reserve__capacityGRP48Arcelyth5aitne3src3ffi4NodeE(self, capacity) {}
function _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGRP48Arcelyth5aitne8examples5bench3RowE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0IPC15array5ArrayPB3Add3addGRP48Arcelyth5aitne8examples5bench3RowE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGRP48Arcelyth5aitne8examples5bench3RowE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGRP48Arcelyth5aitne8examples5bench3RowE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGRP48Arcelyth5aitne8examples5bench3RowE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array10push__iterGRP48Arcelyth5aitne3src3ffi4NodeE(self, iter) {
  const _bind$3 = iter.size_hint;
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGRP48Arcelyth5aitne3src3ffi4NodeE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$4 = _M0MPB4Iter4nextGRP48Arcelyth5aitne3src3ffi4NodeE(iter);
    if (_bind$4.$tag === 1) {
      const _Some = _bind$4;
      const _x = _Some._0;
      _M0MPC15array5Array4pushGRP48Arcelyth5aitne3src3ffi4NodeE(self, _x);
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(x) {
  return new _M0TPC13ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(x);
}
function _M0MPC13ref3Ref3RefGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(x) {
  return new _M0TPC13ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(x);
}
function _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(x) {
  return new _M0TPC13ref3RefGRP48Arcelyth5aitne3src3dom9AttrStateE(x);
}
function _M0FPC13ref3newGOiE(x) {
  return new _M0TPC13ref3RefGOiE(x);
}
function _M0FPC13ref3newGbE(x) {
  return new _M0TPC13ref3RefGbE(x);
}
function _M0FPC13ref3newGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0FPC13ref3newGORP48Arcelyth5aitne3src8reactive13ObserverStateE(x) {
  return new _M0TPC13ref3RefGORP48Arcelyth5aitne3src8reactive13ObserverStateE(x);
}
function _M0FPC13ref3newGjE(x) {
  return new _M0TPC13ref3RefGjE(x);
}
function _M0FPC17hashmap12new__hashmapGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = capacity$2 - 1 | 0;
  return new _M0TPC17hashmap7HashMapGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(_bind$3, capacity$2, _bind$4, 0);
}
function _M0FPC17hashmap12new__hashmapGsRP210tonyfettes3any3AnyE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = capacity$2 - 1 | 0;
  return new _M0TPC17hashmap7HashMapGsRP210tonyfettes3any3AnyE(_bind$3, capacity$2, _bind$4, 0);
}
function _M0FPC17hashmap12new__hashmapGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = capacity$2 - 1 | 0;
  return new _M0TPC17hashmap7HashMapGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(_bind$3, capacity$2, _bind$4, 0);
}
function _M0MPC17hashmap7HashMap10push__awayGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, idx$2);
    const _bind$3 = _tmp$5[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, idx$2);
      _tmp$6[idx$2] = entry$2;
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$6 = self.entries;
        $bound_check(_tmp$6, idx$2);
        _tmp$6[idx$2] = entry$2;
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap10push__awayGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, idx$2);
    const _bind$3 = _tmp$5[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, idx$2);
      _tmp$6[idx$2] = entry$2;
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$6 = self.entries;
        $bound_check(_tmp$6, idx$2);
        _tmp$6[idx$2] = entry$2;
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap10push__awayGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, idx$2);
    const _bind$3 = _tmp$5[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, idx$2);
      _tmp$6[idx$2] = entry$2;
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$6 = self.entries;
        $bound_check(_tmp$6, idx$2);
        _tmp$6[idx$2] = entry$2;
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap20rehash__place__entryGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self, entry) {
  const hash = entry.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      entry.psl = psl;
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC17hashmap7HashMap10push__awayGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self, idx, _curr);
        entry.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap20rehash__place__entryGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, entry) {
  const hash = entry.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      entry.psl = psl;
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC17hashmap7HashMap10push__awayGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, idx, _curr);
        entry.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap20rehash__place__entryGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, entry) {
  const hash = entry.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      entry.psl = psl;
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC17hashmap7HashMap10push__awayGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, idx, _curr);
        entry.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashmap7HashMap4growGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self) {
  const old_entries = self.entries;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _bind$3 = old_entries.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const entry = old_entries[_];
      if (entry === undefined) {
      } else {
        const _Some = entry;
        const _entry = _Some;
        _M0MPC17hashmap7HashMap20rehash__place__entryGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self, _entry);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC17hashmap7HashMap4growGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self) {
  const old_entries = self.entries;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _bind$3 = old_entries.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const entry = old_entries[_];
      if (entry === undefined) {
      } else {
        const _Some = entry;
        const _entry = _Some;
        _M0MPC17hashmap7HashMap20rehash__place__entryGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, _entry);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC17hashmap7HashMap4growGsRP48Arcelyth5aitne3src3dom11RenderStateE(self) {
  const old_entries = self.entries;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _bind$3 = old_entries.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const entry = old_entries[_];
      if (entry === undefined) {
      } else {
        const _Some = entry;
        const _entry = _Some;
        _M0MPC17hashmap7HashMap20rehash__place__entryGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, _entry);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC17hashmap7HashMap15set__with__hashGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      if (self.size >= (self.capacity / 2 | 0)) {
        _M0MPC17hashmap7HashMap4growGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const entry = new _M0TPC17hashmap5EntryGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(psl, hash, key, value);
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      self.size = self.size + 1 | 0;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= (self.capacity / 2 | 0)) {
          _M0MPC17hashmap7HashMap4growGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPC17hashmap7HashMap10push__awayGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self, idx, _curr_entry);
        const entry = new _M0TPC17hashmap5EntryGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(psl, hash, key, value);
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        self.size = self.size + 1 | 0;
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap15set__with__hashGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      if (self.size >= (self.capacity / 2 | 0)) {
        _M0MPC17hashmap7HashMap4growGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const entry = new _M0TPC17hashmap5EntryGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(psl, hash, key, value);
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      self.size = self.size + 1 | 0;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= (self.capacity / 2 | 0)) {
          _M0MPC17hashmap7HashMap4growGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPC17hashmap7HashMap10push__awayGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, idx, _curr_entry);
        const entry = new _M0TPC17hashmap5EntryGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(psl, hash, key, value);
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        self.size = self.size + 1 | 0;
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap15set__with__hashGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      if (self.size >= (self.capacity / 2 | 0)) {
        _M0MPC17hashmap7HashMap4growGsRP48Arcelyth5aitne3src3dom11RenderStateE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const entry = new _M0TPC17hashmap5EntryGsRP48Arcelyth5aitne3src3dom11RenderStateE(psl, hash, key, value);
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      self.size = self.size + 1 | 0;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= (self.capacity / 2 | 0)) {
          _M0MPC17hashmap7HashMap4growGsRP48Arcelyth5aitne3src3dom11RenderStateE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPC17hashmap7HashMap10push__awayGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, idx, _curr_entry);
        const entry = new _M0TPC17hashmap5EntryGsRP48Arcelyth5aitne3src3dom11RenderStateE(psl, hash, key, value);
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        self.size = self.size + 1 | 0;
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap15set__with__hashGsRP210tonyfettes3any3AnyE(self, key, value, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      if (self.size >= (self.capacity / 2 | 0)) {
        _M0MPC17hashmap7HashMap4growGsRP48Arcelyth5aitne3src3dom11RenderStateE(self);
        _tmp$2 = 0;
        _tmp$3 = hash & self.capacity_mask;
        continue;
      }
      const entry = new _M0TPC17hashmap5EntryGsRP210tonyfettes3any3AnyE(psl, hash, key, value);
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      self.size = self.size + 1 | 0;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= (self.capacity / 2 | 0)) {
          _M0MPC17hashmap7HashMap4growGsRP48Arcelyth5aitne3src3dom11RenderStateE(self);
          _tmp$2 = 0;
          _tmp$3 = hash & self.capacity_mask;
          continue;
        }
        _M0MPC17hashmap7HashMap10push__awayGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, idx, _curr_entry);
        const entry = new _M0TPC17hashmap5EntryGsRP210tonyfettes3any3AnyE(psl, hash, key, value);
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        self.size = self.size + 1 | 0;
        return undefined;
      }
      _tmp$2 = psl + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap3setGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self, key, value) {
  _M0MPC17hashmap7HashMap15set__with__hashGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPC17hashmap7HashMap3setGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, key, value) {
  _M0MPC17hashmap7HashMap15set__with__hashGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, key, value, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPC17hashmap7HashMap3setGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, key, value) {
  _M0MPC17hashmap7HashMap15set__with__hashGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPC17hashmap7HashMap3setGsRP210tonyfettes3any3AnyE(self, key, value) {
  _M0MPC17hashmap7HashMap15set__with__hashGsRP210tonyfettes3any3AnyE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPC17hashmap7HashMap4keysGsRP48Arcelyth5aitne3src3dom11RenderStateE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const iter = _M0MPB4Iter3newGsE(() => {
    while (true) {
      if (i.val < self.entries.length) {
        const _tmp$2 = self.entries;
        const _tmp$3 = i.val;
        $bound_check(_tmp$2, _tmp$3);
        const entry = _tmp$2[_tmp$3];
        i.val = i.val + 1 | 0;
        if (entry === undefined) {
        } else {
          const _Some = entry;
          const _x = _Some;
          const _key = _x.key;
          return _key;
        }
        continue;
      } else {
        return undefined;
      }
    }
  }, self.size);
  return iter;
}
function _M0MPC17hashmap7HashMap11shift__backGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, idx) {
  let _tmp$2 = idx;
  while (true) {
    const cur = _tmp$2;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _tmp$3 = self.entries;
      $bound_check(_tmp$3, next);
      const _bind$3 = _tmp$3[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          const _tmp$4 = self.entries;
          $bound_check(_tmp$4, cur);
          _tmp$4[cur] = _x;
          _tmp$2 = next;
          continue;
        }
      }
    }
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, cur);
    _tmp$3[cur] = undefined;
    return;
  }
}
function _M0FPC17hashmap21capacity__for__length(length) {
  return _M0MPC13int3Int20next__power__of__two(Math.imul(length, 2) | 0);
}
function _M0MPC17hashmap7HashMap7HashMapGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC17hashmap21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashmap21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashmap12new__hashmapGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashmap7HashMap3setGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(m, _p$3._0, _p$3._1);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashmap7HashMap7HashMapGsRP210tonyfettes3any3AnyE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC17hashmap21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashmap21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashmap12new__hashmapGsRP210tonyfettes3any3AnyE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashmap7HashMap3setGsRP210tonyfettes3any3AnyE(m, _p$3._0, _p$3._1);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashmap7HashMap7HashMapGsRP48Arcelyth5aitne3src3dom11RenderStateE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC17hashmap21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashmap21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashmap12new__hashmapGsRP210tonyfettes3any3AnyE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashmap7HashMap3setGsRP48Arcelyth5aitne3src3dom11RenderStateE(m, _p$3._0, _p$3._1);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashmap7HashMap7HashMapGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC17hashmap21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashmap21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashmap12new__hashmapGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashmap7HashMap3setGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(m, _p$3._0, _p$3._1);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashmap7HashMap3getGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap3getGsRP48Arcelyth5aitne3src3dom11RenderStateE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap3getGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      return undefined;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap18remove__with__hashGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, key, hash) {
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPC17hashmap7HashMap11shift__backGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashmap7HashMap6removeGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, key) {
  _M0MPC17hashmap7HashMap18remove__with__hashGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0FPC17hashset12new__hashsetGiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  return new _M0TPC17hashset7HashSetGiE(_bind$5, 0, capacity$2, _bind$3, _bind$4);
}
function _M0FPC17hashset12new__hashsetGsE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  return new _M0TPC17hashset7HashSetGsE(_bind$5, 0, capacity$2, _bind$3, _bind$4);
}
function _M0FPC17hashset12new__hashsetGjE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind$3 = capacity$2 - 1 | 0;
  const _bind$4 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$5 = $make_array_len_and_init(capacity$2, undefined);
  return new _M0TPC17hashset7HashSetGjE(_bind$5, 0, capacity$2, _bind$3, _bind$4);
}
function _M0FPC17hashset21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC17hashset7HashSet10push__awayGiE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, idx$2);
    const _bind$3 = _tmp$5[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, idx$2);
      _tmp$6[idx$2] = entry$2;
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$6 = self.entries;
        $bound_check(_tmp$6, idx$2);
        _tmp$6[idx$2] = entry$2;
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashset7HashSet10push__awayGsE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, idx$2);
    const _bind$3 = _tmp$5[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, idx$2);
      _tmp$6[idx$2] = entry$2;
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$6 = self.entries;
        $bound_check(_tmp$6, idx$2);
        _tmp$6[idx$2] = entry$2;
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashset7HashSet10push__awayGjE(self, idx, entry) {
  let _tmp$2 = entry.psl + 1 | 0;
  let _tmp$3 = idx + 1 & self.capacity_mask;
  let _tmp$4 = entry;
  while (true) {
    const psl = _tmp$2;
    const idx$2 = _tmp$3;
    const entry$2 = _tmp$4;
    const _tmp$5 = self.entries;
    $bound_check(_tmp$5, idx$2);
    const _bind$3 = _tmp$5[idx$2];
    if (_bind$3 === undefined) {
      entry$2.psl = psl;
      const _tmp$6 = self.entries;
      $bound_check(_tmp$6, idx$2);
      _tmp$6[idx$2] = entry$2;
      return;
    } else {
      const _Some = _bind$3;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        const _tmp$6 = self.entries;
        $bound_check(_tmp$6, idx$2);
        _tmp$6[idx$2] = entry$2;
        _tmp$2 = _curr_entry.psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        _tmp$4 = _curr_entry;
        continue;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashset7HashSet20rehash__place__entryGiE(self, entry) {
  const hash = entry.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      entry.psl = psl;
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC17hashset7HashSet10push__awayGiE(self, idx, _curr);
        entry.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashset7HashSet20rehash__place__entryGsE(self, entry) {
  const hash = entry.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      entry.psl = psl;
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC17hashset7HashSet10push__awayGsE(self, idx, _curr);
        entry.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashset7HashSet20rehash__place__entryGjE(self, entry) {
  const hash = entry.hash;
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      entry.psl = psl;
      const _tmp$5 = self.entries;
      $bound_check(_tmp$5, idx);
      _tmp$5[idx] = entry;
      return undefined;
    } else {
      const _Some = _bind$3;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC17hashset7HashSet10push__awayGjE(self, idx, _curr);
        entry.psl = psl;
        const _tmp$5 = self.entries;
        $bound_check(_tmp$5, idx);
        _tmp$5[idx] = entry;
        return undefined;
      } else {
        _tmp$2 = psl + 1 | 0;
        _tmp$3 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC17hashset7HashSet4growGiE(self) {
  if (self.capacity === 0) {
    self.capacity = 8;
    self.capacity_mask = self.capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.entries = $make_array_len_and_init(self.capacity, undefined);
    return undefined;
  }
  const old_entries = self.entries;
  const new_capacity = Math.imul(self.capacity, 2) | 0;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  const _bind$3 = old_entries.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const entry = old_entries[_];
      if (entry === undefined) {
      } else {
        const _Some = entry;
        const _entry = _Some;
        _M0MPC17hashset7HashSet20rehash__place__entryGiE(self, _entry);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC17hashset7HashSet4growGsE(self) {
  if (self.capacity === 0) {
    self.capacity = 8;
    self.capacity_mask = self.capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.entries = $make_array_len_and_init(self.capacity, undefined);
    return undefined;
  }
  const old_entries = self.entries;
  const new_capacity = Math.imul(self.capacity, 2) | 0;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  const _bind$3 = old_entries.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const entry = old_entries[_];
      if (entry === undefined) {
      } else {
        const _Some = entry;
        const _entry = _Some;
        _M0MPC17hashset7HashSet20rehash__place__entryGsE(self, _entry);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC17hashset7HashSet4growGjE(self) {
  if (self.capacity === 0) {
    self.capacity = 8;
    self.capacity_mask = self.capacity - 1 | 0;
    const _p = self.capacity;
    self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
    self.size = 0;
    self.entries = $make_array_len_and_init(self.capacity, undefined);
    return undefined;
  }
  const old_entries = self.entries;
  const new_capacity = Math.imul(self.capacity, 2) | 0;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  const _bind$3 = old_entries.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const entry = old_entries[_];
      if (entry === undefined) {
      } else {
        const _Some = entry;
        const _entry = _Some;
        _M0MPC17hashset7HashSet20rehash__place__entryGjE(self, _entry);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MPC17hashset7HashSet15add__with__hashGiE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC17hashset7HashSet4growGiE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _tmp$4 = self.entries;
      $bound_check(_tmp$4, idx$2);
      const _bind$3 = _tmp$4[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC17hashset7HashSet10push__awayGiE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const entry = new _M0TPC17hashset5EntryGiE(psl, hash, key);
  const _tmp$2 = self.entries;
  $bound_check(_tmp$2, idx);
  _tmp$2[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC17hashset7HashSet15add__with__hashGsE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC17hashset7HashSet4growGsE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _tmp$4 = self.entries;
      $bound_check(_tmp$4, idx$2);
      const _bind$3 = _tmp$4[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC17hashset7HashSet10push__awayGsE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const entry = new _M0TPC17hashset5EntryGsE(psl, hash, key);
  const _tmp$2 = self.entries;
  $bound_check(_tmp$2, idx);
  _tmp$2[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC17hashset7HashSet15add__with__hashGjE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC17hashset7HashSet4growGjE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _tmp$4 = self.entries;
      $bound_check(_tmp$4, idx$2);
      const _bind$3 = _tmp$4[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC17hashset7HashSet10push__awayGjE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const entry = new _M0TPC17hashset5EntryGjE(psl, hash, key);
  const _tmp$2 = self.entries;
  $bound_check(_tmp$2, idx);
  _tmp$2[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC17hashset7HashSet15add__with__hashGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC17hashset7HashSet4growGsE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _tmp$4 = self.entries;
      $bound_check(_tmp$4, idx$2);
      const _bind$3 = _tmp$4[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        let _tmp$5;
        if (_curr_entry.hash === hash) {
          const _p = _curr_entry.key;
          _tmp$5 = _p.id === key.id;
        } else {
          _tmp$5 = false;
        }
        if (_tmp$5) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC17hashset7HashSet10push__awayGsE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const entry = new _M0TPC17hashset5EntryGRP48Arcelyth5aitne3src8reactive11ASubscriberE(psl, hash, key);
  const _tmp$2 = self.entries;
  $bound_check(_tmp$2, idx);
  _tmp$2[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC17hashset7HashSet15add__with__hashGRP48Arcelyth5aitne3src8reactive7ASourceE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC17hashset7HashSet4growGsE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp$2 = 0;
    let _tmp$3 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp$2;
      const idx$2 = _tmp$3;
      const _tmp$4 = self.entries;
      $bound_check(_tmp$4, idx$2);
      const _bind$3 = _tmp$4[idx$2];
      if (_bind$3 === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind$3;
        const _curr_entry = _Some;
        let _tmp$5;
        if (_curr_entry.hash === hash) {
          const _p = _curr_entry.key;
          _tmp$5 = _p.id === key.id;
        } else {
          _tmp$5 = false;
        }
        if (_tmp$5) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC17hashset7HashSet10push__awayGsE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp$2 = psl$2 + 1 | 0;
        _tmp$3 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const entry = new _M0TPC17hashset5EntryGRP48Arcelyth5aitne3src8reactive7ASourceE(psl, hash, key);
  const _tmp$2 = self.entries;
  $bound_check(_tmp$2, idx);
  _tmp$2[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC17hashset7HashSet3addGiE(self, key) {
  _M0MPC17hashset7HashSet15add__with__hashGiE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPC17hashset7HashSet3addGsE(self, key) {
  _M0MPC17hashset7HashSet15add__with__hashGsE(self, key, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPC17hashset7HashSet3addGjE(self, key) {
  _M0MPC17hashset7HashSet15add__with__hashGjE(self, key, _M0IPC14uint4UIntPB4Hash4hash(key));
}
function _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self, key) {
  _M0MPC17hashset7HashSet15add__with__hashGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self, key, _M0IP016_24default__implPB4Hash4hashGRP48Arcelyth5aitne3src8reactive11ASubscriberE(key));
}
function _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive7ASourceE(self, key) {
  _M0MPC17hashset7HashSet15add__with__hashGRP48Arcelyth5aitne3src8reactive7ASourceE(self, key, _M0IP016_24default__implPB4Hash4hashGRP48Arcelyth5aitne3src8reactive7ASourceE(key));
}
function _M0MPC17hashset7HashSet7HashSetGiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    const _p = 8;
    const _p$2 = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _p > _p$2 ? _p : _p$2;
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashset12new__hashsetGiE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashset7HashSet3addGiE(m, _p$3);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashset7HashSet7HashSetGsE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    const _p = 8;
    const _p$2 = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _p > _p$2 ? _p : _p$2;
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashset12new__hashsetGsE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashset7HashSet3addGsE(m, _p$3);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive11ASubscriberE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    const _p = 8;
    const _p$2 = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _p > _p$2 ? _p : _p$2;
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashset12new__hashsetGsE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive11ASubscriberE(m, _p$3);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive7ASourceE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    const _p = 8;
    const _p$2 = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _p > _p$2 ? _p : _p$2;
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashset12new__hashsetGsE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive7ASourceE(m, _p$3);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashset7HashSet7HashSetGjE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    const _p = 8;
    const _p$2 = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _p > _p$2 ? _p : _p$2;
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC17hashset21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC17hashset12new__hashsetGjE(capacity$2);
  const _p = arr.end - arr.start | 0;
  let _tmp$2 = 0;
  while (true) {
    const _p$2 = _tmp$2;
    if (_p$2 < _p) {
      const _p$3 = arr.buf[arr.start + _p$2 | 0];
      _M0MPC17hashset7HashSet3addGjE(m, _p$3);
      _tmp$2 = _p$2 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC17hashset7HashSet8containsGsE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashset7HashSet8containsGjE(self, key) {
  const hash = _M0IPC14uint4UIntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      return false;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashset7HashSet11shift__backGjE(self, idx) {
  let _tmp$2 = idx;
  while (true) {
    const cur = _tmp$2;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _tmp$3 = self.entries;
      $bound_check(_tmp$3, next);
      const _bind$3 = _tmp$3[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          const _tmp$4 = self.entries;
          $bound_check(_tmp$4, cur);
          _tmp$4[cur] = _x;
          _tmp$2 = next;
          continue;
        }
      }
    }
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, cur);
    _tmp$3[cur] = undefined;
    return;
  }
}
function _M0MPC17hashset7HashSet11shift__backGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self, idx) {
  let _tmp$2 = idx;
  while (true) {
    const cur = _tmp$2;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _tmp$3 = self.entries;
      $bound_check(_tmp$3, next);
      const _bind$3 = _tmp$3[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          const _tmp$4 = self.entries;
          $bound_check(_tmp$4, cur);
          _tmp$4[cur] = _x;
          _tmp$2 = next;
          continue;
        }
      }
    }
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, cur);
    _tmp$3[cur] = undefined;
    return;
  }
}
function _M0MPC17hashset7HashSet11shift__backGiE(self, idx) {
  let _tmp$2 = idx;
  while (true) {
    const cur = _tmp$2;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _tmp$3 = self.entries;
      $bound_check(_tmp$3, next);
      const _bind$3 = _tmp$3[next];
      if (_bind$3 === undefined) {
        break _L;
      } else {
        const _Some = _bind$3;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          const _tmp$4 = self.entries;
          $bound_check(_tmp$4, cur);
          _tmp$4[cur] = _x;
          _tmp$2 = next;
          continue;
        }
      }
    }
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, cur);
    _tmp$3[cur] = undefined;
    return;
  }
}
function _M0MPC17hashset7HashSet6removeGjE(self, key) {
  const hash = _M0IPC14uint4UIntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPC17hashset7HashSet11shift__backGjE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashset7HashSet6removeGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP48Arcelyth5aitne3src8reactive11ASubscriberE(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      let _tmp$5;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$5 = _p.id === key.id;
      } else {
        _tmp$5 = false;
      }
      if (_tmp$5) {
        _M0MPC17hashset7HashSet11shift__backGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashset7HashSet6removeGiE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp$2 = 0;
  let _tmp$3 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp$2;
    const idx = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx);
    const _bind$3 = _tmp$4[idx];
    if (_bind$3 === undefined) {
      return;
    } else {
      const _Some = _bind$3;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        _M0MPC17hashset7HashSet11shift__backGiE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp$2 = i + 1 | 0;
      _tmp$3 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC17hashset7HashSet4iterGRP48Arcelyth5aitne3src8reactive7ASourceE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.entries.length;
  return _M0MPB4Iter3newGsE(() => {
    while (true) {
      if (i.val < len) {
        const entry = self.entries[i.val];
        i.val = i.val + 1 | 0;
        if (entry === undefined) {
        } else {
          const _Some = entry;
          const _x = _Some;
          const _key = _x.key;
          return _key;
        }
        continue;
      } else {
        return undefined;
      }
    }
  }, self.size);
}
function _M0MPC17hashset7HashSet4iterGiE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.entries.length;
  return _M0MPB4Iter3newGiE(() => {
    while (true) {
      if (i.val < len) {
        const entry = self.entries[i.val];
        i.val = i.val + 1 | 0;
        if (entry === undefined) {
        } else {
          const _Some = entry;
          const _x = _Some;
          const _key = _x.key;
          return _key;
        }
        continue;
      } else {
        return undefined;
      }
    }
  }, self.size);
}
function _M0MPC17hashset7HashSet5clearGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self) {
  _M0MPC15array10FixedArray12fill_2einnerGORPC17hashset5EntryGRP48Arcelyth5aitne3src8reactive11ASubscriberEE(self.entries, undefined, 0, undefined);
  self.size = 0;
}
function _M0MP48Arcelyth5aitne3src8reactive8Observer3get() {
  const _bind$3 = _M0FP48Arcelyth5aitne3src8reactive17observer__context.val;
  if (_bind$3 === undefined) {
    return undefined;
  } else {
    const _Some = _bind$3;
    const _state = _Some;
    return _state.untracked ? undefined : _state.subscriber;
  }
}
function _M0IP48Arcelyth5aitne3src8reactive11ASubscriberP48Arcelyth5aitne3src8reactive10Subscriber11add__source(self, source) {
  const _bind$3 = self.sub;
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _sub = _Some;
    _sub.method_table.method_0(_sub.self, source);
    return;
  }
}
function _M0IP48Arcelyth5aitne3src8reactive11ASubscriberPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher13combine__uint(hasher, self.id);
}
function _M0IP48Arcelyth5aitne3src8reactive7ASourcePB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher13combine__uint(hasher, self.id);
}
function _M0IP48Arcelyth5aitne3src8reactive7ASourceP48Arcelyth5aitne3src8reactive12ReactiveNode13update__value(self) {
  const _bind$3 = self.src;
  if (_bind$3 === undefined) {
    return false;
  } else {
    const _Some = _bind$3;
    const _src = _Some;
    return _src.method_table.method_6(_src.self);
  }
}
function _M0IP48Arcelyth5aitne3src8reactive7ASourceP48Arcelyth5aitne3src8reactive6Source11remove__sub(self, subscriber) {
  const _bind$3 = self.src;
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _src = _Some;
    _src.method_table.method_1(_src.self, subscriber);
    return;
  }
}
function _M0FP48Arcelyth5aitne3src8reactive16next__signal__id() {
  const id = _M0FP48Arcelyth5aitne3src8reactive19signal__id__counter.val;
  _M0FP48Arcelyth5aitne3src8reactive19signal__id__counter.val = (id >>> 0) + (1 >>> 0) | 0;
  return id;
}
function _M0MP48Arcelyth5aitne3src8reactive11SignalInner3newGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(value) {
  const _tmp$2 = _M0FP48Arcelyth5aitne3src8reactive16next__signal__id();
  const _bind$3 = [];
  return _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(new _M0TP48Arcelyth5aitne3src8reactive11SignalInnerGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_tmp$2, value, _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive11ASubscriberE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive11ASubscriberE(_bind$3, 0, 0), undefined)));
}
function _M0MP48Arcelyth5aitne3src8reactive11SignalInner3newGiE(value) {
  const _tmp$2 = _M0FP48Arcelyth5aitne3src8reactive16next__signal__id();
  const _bind$3 = [];
  return _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(new _M0TP48Arcelyth5aitne3src8reactive11SignalInnerGiE(_tmp$2, value, _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive11ASubscriberE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive11ASubscriberE(_bind$3, 0, 0), undefined)));
}
function _M0MP48Arcelyth5aitne3src8reactive11SignalInner3newGbE(value) {
  const _tmp$2 = _M0FP48Arcelyth5aitne3src8reactive16next__signal__id();
  const _bind$3 = [];
  return _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(new _M0TP48Arcelyth5aitne3src8reactive11SignalInnerGbE(_tmp$2, value, _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive11ASubscriberE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive11ASubscriberE(_bind$3, 0, 0), undefined)));
}
function _M0MP48Arcelyth5aitne3src8reactive11SignalInner3newGsE(value) {
  const _tmp$2 = _M0FP48Arcelyth5aitne3src8reactive16next__signal__id();
  const _bind$3 = [];
  return _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(new _M0TP48Arcelyth5aitne3src8reactive11SignalInnerGsE(_tmp$2, value, _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive11ASubscriberE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive11ASubscriberE(_bind$3, 0, 0), undefined)));
}
function _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  const _p = self.inner.val.subs;
  const _p$2 = _p.entries;
  const _p$3 = _p$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p$2[_p$4];
      if (_p$5 === undefined) {
      } else {
        const _p$6 = _p$5;
        const _p$7 = _p$6;
        const _p$8 = _p$7.key;
        const _p$9 = _p$8.sub;
        if (_p$9 === undefined) {
        } else {
          const _p$10 = _p$9;
          const _p$11 = _p$10;
          _p$11.method_table.method_2(_p$11.self);
        }
      }
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGsE(self) {
  const _p = self.inner.val.subs;
  const _p$2 = _p.entries;
  const _p$3 = _p$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p$2[_p$4];
      if (_p$5 === undefined) {
      } else {
        const _p$6 = _p$5;
        const _p$7 = _p$6;
        const _p$8 = _p$7.key;
        const _p$9 = _p$8.sub;
        if (_p$9 === undefined) {
        } else {
          const _p$10 = _p$9;
          const _p$11 = _p$10;
          _p$11.method_table.method_2(_p$11.self);
        }
      }
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGiE(self) {
  const _p = self.inner.val.subs;
  const _p$2 = _p.entries;
  const _p$3 = _p$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p$2[_p$4];
      if (_p$5 === undefined) {
      } else {
        const _p$6 = _p$5;
        const _p$7 = _p$6;
        const _p$8 = _p$7.key;
        const _p$9 = _p$8.sub;
        if (_p$9 === undefined) {
        } else {
          const _p$10 = _p$9;
          const _p$11 = _p$10;
          _p$11.method_table.method_2(_p$11.self);
        }
      }
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self);
}
function _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGsE(self) {
  _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGsE(self);
}
function _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGiE(self) {
  _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGiE(self);
}
function _M0MP48Arcelyth5aitne3src8reactive11WriteSignal8try__setGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self, value) {
  const old_value = self.inner.val.value;
  self.inner.val.value = value;
  _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self);
  return new _M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE4Some(old_value);
}
function _M0MP48Arcelyth5aitne3src8reactive11WriteSignal8try__setGsE(self, value) {
  const old_value = self.inner.val.value;
  self.inner.val.value = value;
  _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGsE(self);
  return old_value;
}
function _M0MP48Arcelyth5aitne3src8reactive11WriteSignal8try__setGiE(self, value) {
  const old_value = self.inner.val.value;
  self.inner.val.value = value;
  _M0IP48Arcelyth5aitne3src8reactive11WriteSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGiE(self);
  return old_value;
}
function _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self, value) {
  _M0MP48Arcelyth5aitne3src8reactive11WriteSignal8try__setGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self, value);
}
function _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGsE(self, value) {
  _M0MP48Arcelyth5aitne3src8reactive11WriteSignal8try__setGsE(self, value);
}
function _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGiE(self, value) {
  _M0MP48Arcelyth5aitne3src8reactive11WriteSignal8try__setGiE(self, value);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  const _p = self.inner.val.subs;
  const _p$2 = _p.entries;
  const _p$3 = _p$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p$2[_p$4];
      if (_p$5 === undefined) {
      } else {
        const _p$6 = _p$5;
        const _p$7 = _p$6;
        const _p$8 = _p$7.key;
        const _p$9 = _p$8.sub;
        if (_p$9 === undefined) {
        } else {
          const _p$10 = _p$9;
          const _p$11 = _p$10;
          _p$11.method_table.method_2(_p$11.self);
        }
      }
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGsE(self) {
  const _p = self.inner.val.subs;
  const _p$2 = _p.entries;
  const _p$3 = _p$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p$2[_p$4];
      if (_p$5 === undefined) {
      } else {
        const _p$6 = _p$5;
        const _p$7 = _p$6;
        const _p$8 = _p$7.key;
        const _p$9 = _p$8.sub;
        if (_p$9 === undefined) {
        } else {
          const _p$10 = _p$9;
          const _p$11 = _p$10;
          _p$11.method_table.method_2(_p$11.self);
        }
      }
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGiE(self) {
  const _p = self.inner.val.subs;
  const _p$2 = _p.entries;
  const _p$3 = _p$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p$2[_p$4];
      if (_p$5 === undefined) {
      } else {
        const _p$6 = _p$5;
        const _p$7 = _p$6;
        const _p$8 = _p$7.key;
        const _p$9 = _p$8.sub;
        if (_p$9 === undefined) {
        } else {
          const _p$10 = _p$9;
          const _p$11 = _p$10;
          _p$11.method_table.method_2(_p$11.self);
        }
      }
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGsE(self) {
  _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGsE(self);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGiE(self) {
  _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGiE(self);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_self) {}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGsE(_self) {}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGiE(_self) {}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_self) {
  return false;
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGsE(_self) {
  return false;
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGiE(_self) {
  return false;
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source8add__subGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self, sub) {
  _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs, sub);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source8add__subGsE(self, sub) {
  _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs, sub);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source8add__subGiE(self, sub) {
  _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs, sub);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11remove__subGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self, sub) {
  _M0MPC17hashset7HashSet6removeGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs, sub);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11remove__subGsE(self, sub) {
  _M0MPC17hashset7HashSet6removeGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs, sub);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11remove__subGiE(self, sub) {
  _M0MPC17hashset7HashSet6removeGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs, sub);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11clear__subsGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  _M0MPC17hashset7HashSet5clearGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11clear__subsGsE(self) {
  _M0MPC17hashset7HashSet5clearGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source11clear__subsGiE(self) {
  _M0MPC17hashset7HashSet5clearGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs);
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive9ToASource11to__asourceGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive7ASource(self.inner.val.id, { self: self, method_table: _M0FP0188Arcelyth_2faitne_2fsrc_2freactive_2fReadSignal_5bmoonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fexamples_2fbench_2fRow_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSource });
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive9ToASource11to__asourceGsE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive7ASource(self.inner.val.id, { self: self, method_table: _M0FP0111Arcelyth_2faitne_2fsrc_2freactive_2fReadSignal_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSource });
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive9ToASource11to__asourceGiE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive7ASource(self.inner.val.id, { self: self, method_table: _M0FP0108Arcelyth_2faitne_2fsrc_2freactive_2fReadSignal_5bInt_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSource });
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive5Track5trackGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  const _bind$3 = _M0MP48Arcelyth5aitne3src8reactive8Observer3get();
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _sub = _Some;
    _M0IP48Arcelyth5aitne3src8reactive11ASubscriberP48Arcelyth5aitne3src8reactive10Subscriber11add__source(_sub, _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive9ToASource11to__asourceGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self));
    _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source8add__subGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self, _sub);
    return;
  }
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive5Track5trackGsE(self) {
  const _bind$3 = _M0MP48Arcelyth5aitne3src8reactive8Observer3get();
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _sub = _Some;
    _M0IP48Arcelyth5aitne3src8reactive11ASubscriberP48Arcelyth5aitne3src8reactive10Subscriber11add__source(_sub, _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive9ToASource11to__asourceGsE(self));
    _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source8add__subGsE(self, _sub);
    return;
  }
}
function _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive5Track5trackGiE(self) {
  const _bind$3 = _M0MP48Arcelyth5aitne3src8reactive8Observer3get();
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _sub = _Some;
    _M0IP48Arcelyth5aitne3src8reactive11ASubscriberP48Arcelyth5aitne3src8reactive10Subscriber11add__source(_sub, _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive9ToASource11to__asourceGiE(self));
    _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive6Source8add__subGiE(self, _sub);
    return;
  }
}
function _M0MP48Arcelyth5aitne3src8reactive10ReadSignal9try__withGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowERPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self, f) {
  _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive5Track5trackGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self);
  return new _M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE4Some(f(self.inner.val.value));
}
function _M0MP48Arcelyth5aitne3src8reactive10ReadSignal9try__withGssE(self, f) {
  _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive5Track5trackGsE(self);
  return f(self.inner.val.value);
}
function _M0MP48Arcelyth5aitne3src8reactive10ReadSignal9try__withGiiE(self, f) {
  _M0IP48Arcelyth5aitne3src8reactive10ReadSignalP48Arcelyth5aitne3src8reactive5Track5trackGiE(self);
  return f(self.inner.val.value);
}
function _M0MP48Arcelyth5aitne3src8reactive10ReadSignal8try__getGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  return _M0MP48Arcelyth5aitne3src8reactive10ReadSignal9try__withGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowERPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self, (v) => v);
}
function _M0MP48Arcelyth5aitne3src8reactive10ReadSignal8try__getGsE(self) {
  return _M0MP48Arcelyth5aitne3src8reactive10ReadSignal9try__withGssE(self, (v) => v);
}
function _M0MP48Arcelyth5aitne3src8reactive10ReadSignal8try__getGiE(self) {
  return _M0MP48Arcelyth5aitne3src8reactive10ReadSignal9try__withGiiE(self, (v) => v);
}
function _M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  return _M0MPC16option6Option6unwrapGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_M0MP48Arcelyth5aitne3src8reactive10ReadSignal8try__getGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self));
}
function _M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGsE(self) {
  const _p = _M0MP48Arcelyth5aitne3src8reactive10ReadSignal8try__getGsE(self);
  if (_p === undefined) {
    return $panic();
  } else {
    const _p$2 = _p;
    return _p$2;
  }
}
function _M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGiE(self) {
  const _p = _M0MP48Arcelyth5aitne3src8reactive10ReadSignal8try__getGiE(self);
  if (_p === undefined) {
    return $panic();
  } else {
    const _p$2 = _p;
    return _p$2;
  }
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal3newGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(value) {
  return new _M0TP48Arcelyth5aitne3src8reactive8RwSignalGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_M0MP48Arcelyth5aitne3src8reactive11SignalInner3newGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(value));
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal3newGiE(value) {
  return new _M0TP48Arcelyth5aitne3src8reactive8RwSignalGiE(_M0MP48Arcelyth5aitne3src8reactive11SignalInner3newGiE(value));
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal3newGbE(value) {
  return new _M0TP48Arcelyth5aitne3src8reactive8RwSignalGbE(_M0MP48Arcelyth5aitne3src8reactive11SignalInner3newGbE(value));
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal3newGsE(value) {
  return new _M0TP48Arcelyth5aitne3src8reactive8RwSignalGsE(_M0MP48Arcelyth5aitne3src8reactive11SignalInner3newGsE(value));
}
function _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGbE(self) {
  const _p = self.inner.val.subs;
  const _p$2 = _p.entries;
  const _p$3 = _p$2.length;
  let _tmp$2 = 0;
  while (true) {
    const _p$4 = _tmp$2;
    if (_p$4 < _p$3) {
      const _p$5 = _p$2[_p$4];
      if (_p$5 === undefined) {
      } else {
        const _p$6 = _p$5;
        const _p$7 = _p$6;
        const _p$8 = _p$7.key;
        const _p$9 = _p$8.sub;
        if (_p$9 === undefined) {
        } else {
          const _p$10 = _p$9;
          const _p$11 = _p$10;
          _p$11.method_table.method_2(_p$11.self);
        }
      }
      _tmp$2 = _p$4 + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGbE(self) {
  _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGbE(self);
}
function _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGbE(_self) {}
function _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGbE(_self) {
  return false;
}
function _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive6Source8add__subGbE(self, sub) {
  _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs, sub);
}
function _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive6Source11remove__subGbE(self, sub) {
  _M0MPC17hashset7HashSet6removeGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs, sub);
}
function _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive6Source11clear__subsGbE(self) {
  _M0MPC17hashset7HashSet5clearGRP48Arcelyth5aitne3src8reactive11ASubscriberE(self.inner.val.subs);
}
function _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive9ToASource11to__asourceGbE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive7ASource(self.inner.val.id, { self: self, method_table: _M0FP0107Arcelyth_2faitne_2fsrc_2freactive_2fRwSignal_5bBool_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSource });
}
function _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive5Track5trackGbE(self) {
  const _bind$3 = _M0MP48Arcelyth5aitne3src8reactive8Observer3get();
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _sub = _Some;
    _M0IP48Arcelyth5aitne3src8reactive11ASubscriberP48Arcelyth5aitne3src8reactive10Subscriber11add__source(_sub, _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive9ToASource11to__asourceGbE(self));
    _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive6Source8add__subGbE(self, _sub);
    return;
  }
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal10read__onlyGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive10ReadSignalGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self.inner);
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal10read__onlyGiE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive10ReadSignalGiE(self.inner);
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal10read__onlyGsE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive10ReadSignalGsE(self.inner);
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal11write__onlyGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive11WriteSignalGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self.inner);
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal11write__onlyGiE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive11WriteSignalGiE(self.inner);
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal11write__onlyGsE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive11WriteSignalGsE(self.inner);
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal5splitGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) {
  return { _0: _M0MP48Arcelyth5aitne3src8reactive8RwSignal10read__onlyGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self), _1: _M0MP48Arcelyth5aitne3src8reactive8RwSignal11write__onlyGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(self) };
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal5splitGiE(self) {
  return { _0: _M0MP48Arcelyth5aitne3src8reactive8RwSignal10read__onlyGiE(self), _1: _M0MP48Arcelyth5aitne3src8reactive8RwSignal11write__onlyGiE(self) };
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal5splitGsE(self) {
  return { _0: _M0MP48Arcelyth5aitne3src8reactive8RwSignal10read__onlyGsE(self), _1: _M0MP48Arcelyth5aitne3src8reactive8RwSignal11write__onlyGsE(self) };
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal11try__updateGbE(self, f) {
  const current_inner = self.inner.val;
  const new_value = f(current_inner.value);
  self.inner.val = new _M0TP48Arcelyth5aitne3src8reactive11SignalInnerGbE(current_inner.id, new_value, current_inner.subs);
  _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGbE(self);
  return undefined;
}
function _M0MP48Arcelyth5aitne3src8reactive8RwSignal6updateGbE(self, f) {
  _M0MP48Arcelyth5aitne3src8reactive8RwSignal11try__updateGbE(self, f);
}
function _M0FP48Arcelyth5aitne3src8reactive14create__signalGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(value) {
  return _M0MP48Arcelyth5aitne3src8reactive8RwSignal5splitGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_M0MP48Arcelyth5aitne3src8reactive8RwSignal3newGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(value));
}
function _M0FP48Arcelyth5aitne3src8reactive14create__signalGiE(value) {
  return _M0MP48Arcelyth5aitne3src8reactive8RwSignal5splitGiE(_M0MP48Arcelyth5aitne3src8reactive8RwSignal3newGiE(value));
}
function _M0FP48Arcelyth5aitne3src8reactive14create__signalGsE(value) {
  return _M0MP48Arcelyth5aitne3src8reactive8RwSignal5splitGsE(_M0MP48Arcelyth5aitne3src8reactive8RwSignal3newGsE(value));
}
function _M0FP48Arcelyth5aitne3src8reactive16flush__scheduler() {
  if (!_M0FP48Arcelyth5aitne3src8reactive9scheduler.val.flushing) {
    _M0FP48Arcelyth5aitne3src8reactive9scheduler.val.flushing = true;
    let flush_count = 0;
    while (true) {
      if (_M0FP48Arcelyth5aitne3src8reactive9scheduler.val.pending.length > 0) {
        if (flush_count > 1000) {
          $panic();
        }
        flush_count = flush_count + 1 | 0;
        const current_pending = _M0FP48Arcelyth5aitne3src8reactive9scheduler.val.pending;
        _M0FP48Arcelyth5aitne3src8reactive9scheduler.val.pending = [];
        let i = 0;
        while (true) {
          if (i < current_pending.length) {
            const effect = _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(current_pending, i);
            _M0MPC17hashset7HashSet6removeGjE(_M0FP48Arcelyth5aitne3src8reactive9scheduler.val.queued, effect.method_table.method_0(effect.self));
            effect.method_table.method_1(effect.self);
            i = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        continue;
      } else {
        break;
      }
    }
    _M0FP48Arcelyth5aitne3src8reactive9scheduler.val.flushing = false;
    return;
  } else {
    return;
  }
}
function _M0FP48Arcelyth5aitne3src8reactive16schedule__effect(effect) {
  if (!_M0MPC17hashset7HashSet8containsGjE(_M0FP48Arcelyth5aitne3src8reactive9scheduler.val.queued, effect.method_table.method_0(effect.self))) {
    _M0MPC17hashset7HashSet3addGjE(_M0FP48Arcelyth5aitne3src8reactive9scheduler.val.queued, effect.method_table.method_0(effect.self));
    _M0MPC15array5Array4pushGRP48Arcelyth5aitne8examples5bench3RowE(_M0FP48Arcelyth5aitne3src8reactive9scheduler.val.pending, effect);
    if (_M0FP48Arcelyth5aitne3src8reactive9scheduler.val.batch_depth === 0 && !_M0FP48Arcelyth5aitne3src8reactive9scheduler.val.flushing) {
      _M0FP48Arcelyth5aitne3src8reactive16flush__scheduler();
      return;
    } else {
      return;
    }
  } else {
    return;
  }
}
function _M0FP48Arcelyth5aitne3src8reactive16next__effect__id() {
  const id = _M0FP48Arcelyth5aitne3src8reactive19effect__id__counter.val;
  _M0FP48Arcelyth5aitne3src8reactive19effect__id__counter.val = (id >>> 0) + (1 >>> 0) | 0;
  return id;
}
function _M0MP48Arcelyth5aitne3src8reactive11EffectInner3newGiE(cb) {
  const _tmp$2 = _M0FP48Arcelyth5aitne3src8reactive16next__effect__id();
  const _bind$3 = [];
  return new _M0TP48Arcelyth5aitne3src8reactive11EffectInnerGiE(_tmp$2, false, cb, _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive7ASourceE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive7ASourceE(_bind$3, 0, 0), undefined), undefined);
}
function _M0MP48Arcelyth5aitne3src8reactive11EffectInner3newGuE(cb) {
  const _tmp$2 = _M0FP48Arcelyth5aitne3src8reactive16next__effect__id();
  const _bind$3 = [];
  return new _M0TP48Arcelyth5aitne3src8reactive11EffectInnerGuE(_tmp$2, false, cb, _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive7ASourceE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive7ASourceE(_bind$3, 0, 0), undefined), undefined);
}
function _M0MP48Arcelyth5aitne3src8reactive11EffectInner3newGRP48Arcelyth5aitne3src3dom9AttrStateE(cb) {
  const _tmp$2 = _M0FP48Arcelyth5aitne3src8reactive16next__effect__id();
  const _bind$3 = [];
  return new _M0TP48Arcelyth5aitne3src8reactive11EffectInnerGRP48Arcelyth5aitne3src3dom9AttrStateE(_tmp$2, false, cb, _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive7ASourceE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive7ASourceE(_bind$3, 0, 0), undefined), undefined);
}
function _M0MP48Arcelyth5aitne3src8reactive8Observer13with__replaceGiE(observer, f) {
  const prev = _M0FP48Arcelyth5aitne3src8reactive17observer__context.val;
  let _tmp$2;
  if (observer === undefined) {
    _tmp$2 = undefined;
  } else {
    const _Some = observer;
    const _sub = _Some;
    _tmp$2 = new _M0TP48Arcelyth5aitne3src8reactive13ObserverState(_sub, false);
  }
  _M0FP48Arcelyth5aitne3src8reactive17observer__context.val = _tmp$2;
  const result = f();
  _M0FP48Arcelyth5aitne3src8reactive17observer__context.val = prev;
  return result;
}
function _M0MP48Arcelyth5aitne3src8reactive8Observer13with__replaceGRP48Arcelyth5aitne3src3dom9AttrStateE(observer, f) {
  const prev = _M0FP48Arcelyth5aitne3src8reactive17observer__context.val;
  let _tmp$2;
  if (observer === undefined) {
    _tmp$2 = undefined;
  } else {
    const _Some = observer;
    const _sub = _Some;
    _tmp$2 = new _M0TP48Arcelyth5aitne3src8reactive13ObserverState(_sub, false);
  }
  _M0FP48Arcelyth5aitne3src8reactive17observer__context.val = _tmp$2;
  const result = f();
  _M0FP48Arcelyth5aitne3src8reactive17observer__context.val = prev;
  return result;
}
function _M0MP48Arcelyth5aitne3src8reactive8Observer13with__replaceGuE(observer, f) {
  const prev = _M0FP48Arcelyth5aitne3src8reactive17observer__context.val;
  let _tmp$2;
  if (observer === undefined) {
    _tmp$2 = undefined;
  } else {
    const _Some = observer;
    const _sub = _Some;
    _tmp$2 = new _M0TP48Arcelyth5aitne3src8reactive13ObserverState(_sub, false);
  }
  _M0FP48Arcelyth5aitne3src8reactive17observer__context.val = _tmp$2;
  f();
  _M0FP48Arcelyth5aitne3src8reactive17observer__context.val = prev;
}
function _M0FP48Arcelyth5aitne3src8reactive8next__id() {
  const id = _M0FP48Arcelyth5aitne3src8reactive15next__owner__id.val;
  _M0FP48Arcelyth5aitne3src8reactive15next__owner__id.val = id + 1 | 0;
  return id;
}
function _M0FP48Arcelyth5aitne3src8reactive16owner__state__of(id) {
  return _M0MPC17hashmap7HashMap3getGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(_M0FP48Arcelyth5aitne3src8reactive15owner__registry.val, id);
}
function _M0FP48Arcelyth5aitne3src8reactive13create__owner(parent) {
  const id = _M0FP48Arcelyth5aitne3src8reactive8next__id();
  const _tmp$2 = [];
  const _bind$3 = [];
  const _tmp$3 = _M0MPC17hashset7HashSet7HashSetGiE(new _M0TPB9ArrayViewGiE(_bind$3, 0, 0), undefined);
  const _bind$4 = [];
  const state = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(new _M0TP48Arcelyth5aitne3src8reactive10OwnerState(parent, _tmp$2, _tmp$3, _M0MPC17hashmap7HashMap7HashMapGsRP210tonyfettes3any3AnyE(new _M0TPB9ArrayViewGUsRP210tonyfettes3any3AnyEE(_bind$4, 0, 0), undefined), false));
  _M0MPC17hashmap7HashMap3setGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(_M0FP48Arcelyth5aitne3src8reactive15owner__registry.val, id, state);
  if (parent === undefined) {
  } else {
    const _Some = parent;
    const _pid = _Some;
    const _bind$5 = _M0FP48Arcelyth5aitne3src8reactive16owner__state__of(_pid);
    if (_bind$5 === undefined) {
    } else {
      const _Some$2 = _bind$5;
      const _pstate = _Some$2;
      if (!_pstate.val.disposed) {
        _M0MPC17hashset7HashSet3addGiE(_pstate.val.children, id);
      }
    }
  }
  return new _M0TP48Arcelyth5aitne3src8reactive5Owner(id);
}
function _M0FP48Arcelyth5aitne3src8reactive13owner__exists(id) {
  const _bind$3 = _M0FP48Arcelyth5aitne3src8reactive16owner__state__of(id);
  if (_bind$3 === undefined) {
    return false;
  } else {
    const _Some = _bind$3;
    const _state = _Some;
    return !_state.val.disposed;
  }
}
function _M0MP48Arcelyth5aitne3src8reactive5Owner7current() {
  const _bind$3 = _M0FP48Arcelyth5aitne3src8reactive14current__owner.val;
  if (_bind$3 === undefined) {
    return undefined;
  } else {
    const _Some = _bind$3;
    const _id = _Some;
    return _M0FP48Arcelyth5aitne3src8reactive13owner__exists(_id) ? new _M0TP48Arcelyth5aitne3src8reactive5Owner(_id) : undefined;
  }
}
function _M0MP48Arcelyth5aitne3src8reactive5Owner3new() {
  const _bind$3 = _M0MP48Arcelyth5aitne3src8reactive5Owner7current();
  let parent;
  if (_bind$3 === undefined) {
    parent = undefined;
  } else {
    const _Some = _bind$3;
    const _owner = _Some;
    parent = _owner.id;
  }
  return _M0FP48Arcelyth5aitne3src8reactive13create__owner(parent);
}
function _M0MP48Arcelyth5aitne3src8reactive5Owner6with__GRP48Arcelyth5aitne3src3dom11RenderStateE(self, fun) {
  const prev = _M0FP48Arcelyth5aitne3src8reactive14current__owner.val;
  _M0FP48Arcelyth5aitne3src8reactive14current__owner.val = self.id;
  const result = fun();
  _M0FP48Arcelyth5aitne3src8reactive14current__owner.val = prev;
  return result;
}
function _M0MP48Arcelyth5aitne3src8reactive5Owner6with__GiE(self, fun) {
  const prev = _M0FP48Arcelyth5aitne3src8reactive14current__owner.val;
  _M0FP48Arcelyth5aitne3src8reactive14current__owner.val = self.id;
  const result = fun();
  _M0FP48Arcelyth5aitne3src8reactive14current__owner.val = prev;
  return result;
}
function _M0MP48Arcelyth5aitne3src8reactive5Owner6with__GuE(self, fun) {
  const prev = _M0FP48Arcelyth5aitne3src8reactive14current__owner.val;
  _M0FP48Arcelyth5aitne3src8reactive14current__owner.val = self.id;
  fun();
  _M0FP48Arcelyth5aitne3src8reactive14current__owner.val = prev;
}
function _M0MP48Arcelyth5aitne3src8reactive12RenderEffect15new__isomorphicGiE(fun) {
  const owner = _M0MP48Arcelyth5aitne3src8reactive5Owner3new();
  const inner = _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(_M0MP48Arcelyth5aitne3src8reactive11EffectInner3newGiE(fun));
  const sub = _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive13ToASubscriber15to__asubscriberGiE(inner);
  const value = _M0MP48Arcelyth5aitne3src8reactive5Owner6with__GiE(owner, () => _M0MP48Arcelyth5aitne3src8reactive8Observer13with__replaceGiE(sub, () => fun(undefined)));
  const e = new _M0TP48Arcelyth5aitne3src8reactive12RenderEffectGiE(value, inner, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(owner));
  const ref_e = _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(e);
  inner.val.schedule = () => {
    _M0FP48Arcelyth5aitne3src8reactive16schedule__effect({ self: ref_e, method_table: _M0FP0152moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fRenderEffect_5bInt_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eEffectRunner });
  };
  return ref_e;
}
function _M0MP48Arcelyth5aitne3src8reactive8Selector3newGiE(source) {
  const _bind$3 = [];
  const subs = _M0MPC17hashmap7HashMap7HashMapGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(new _M0TPB9ArrayViewGUiRP48Arcelyth5aitne3src8reactive8RwSignalGbEEE(_bind$3, 0, 0), undefined);
  const effect = _M0MP48Arcelyth5aitne3src8reactive12RenderEffect15new__isomorphicGiE((prev) => {
    const next_val = source();
    if (prev === undefined) {
      const _p = subs.capacity;
      let _tmp$2 = 0;
      while (true) {
        const _p$2 = _tmp$2;
        if (_p$2 < _p) {
          const _tmp$3 = subs.entries;
          $bound_check(_tmp$3, _p$2);
          const _p$3 = _tmp$3[_p$2];
          if (_p$3 === undefined) {
          } else {
            const _p$4 = _p$3;
            const _p$5 = _p$4;
            const _p$6 = _p$5.key;
            const _p$7 = _p$5.value;
            if (_p$6 === next_val) {
              _M0MP48Arcelyth5aitne3src8reactive8RwSignal6updateGbE(_p$7, (_p$8) => true);
            }
          }
          _tmp$2 = _p$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _Some = prev;
      const _prev_val = _Some;
      if (_prev_val !== next_val) {
        const _p = subs.capacity;
        let _tmp$2 = 0;
        while (true) {
          const _p$2 = _tmp$2;
          if (_p$2 < _p) {
            const _tmp$3 = subs.entries;
            $bound_check(_tmp$3, _p$2);
            const _p$3 = _tmp$3[_p$2];
            if (_p$3 === undefined) {
            } else {
              const _p$4 = _p$3;
              const _p$5 = _p$4;
              const _p$6 = _p$5.key;
              const _p$7 = _p$5.value;
              if (_p$6 === next_val || _p$6 === _prev_val) {
                _M0MP48Arcelyth5aitne3src8reactive8RwSignal6updateGbE(_p$7, (_p$8) => true);
              }
            }
            _tmp$2 = _p$2 + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
    }
    return next_val;
  });
  return new _M0TP48Arcelyth5aitne3src8reactive8SelectorGiE(subs, effect);
}
function _M0MP48Arcelyth5aitne3src8reactive8Selector8selectedGiE(self, key) {
  const _bind$3 = _M0MPC17hashmap7HashMap3getGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self.subs, key);
  let read;
  if (_bind$3 === undefined) {
    const s = _M0MP48Arcelyth5aitne3src8reactive8RwSignal3newGbE(false);
    _M0MPC17hashmap7HashMap3setGiRP48Arcelyth5aitne3src8reactive8RwSignalGbEE(self.subs, key, s);
    read = s;
  } else {
    const _Some = _bind$3;
    read = _Some;
  }
  _M0IP48Arcelyth5aitne3src8reactive8RwSignalP48Arcelyth5aitne3src8reactive5Track5trackGbE(read);
  const _bind$4 = self.effect.val.value;
  if (_bind$4 === undefined) {
    return false;
  } else {
    const _Some = _bind$4;
    const _v = _Some;
    return key === _v;
  }
}
function _M0FP48Arcelyth5aitne3src8reactive29remove__owner__from__registry(id) {
  _M0MPC17hashmap7HashMap6removeGiRPC13ref3RefGRP48Arcelyth5aitne3src8reactive10OwnerStateEE(_M0FP48Arcelyth5aitne3src8reactive15owner__registry.val, id);
}
function _M0FP48Arcelyth5aitne3src8reactive27remove__child__from__parent(parent_id, child_id) {
  const _bind$3 = _M0FP48Arcelyth5aitne3src8reactive16owner__state__of(parent_id);
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _parent_state = _Some;
    _M0MPC17hashset7HashSet6removeGiE(_parent_state.val.children, child_id);
    return;
  }
}
function _M0MP48Arcelyth5aitne3src8reactive5Owner22current__with__default() {
  const _bind$3 = _M0MP48Arcelyth5aitne3src8reactive5Owner7current();
  if (_bind$3 === undefined) {
    return _M0FP48Arcelyth5aitne3src8reactive13create__owner(undefined);
  } else {
    const _Some = _bind$3;
    return _Some;
  }
}
function _M0MP48Arcelyth5aitne3src8reactive5Owner7cleanup(self) {
  const _bind$3 = _M0FP48Arcelyth5aitne3src8reactive16owner__state__of(self.id);
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _state = _Some;
    if (_state.val.disposed) {
      return undefined;
    }
    _state.val.disposed = true;
    const parent = _state.val.parent;
    const children = _state.val.children;
    const cleanups = _state.val.cleanups;
    const _tmp$2 = _state.val;
    const _bind$4 = [];
    _tmp$2.children = _M0MPC17hashset7HashSet7HashSetGiE(new _M0TPB9ArrayViewGiE(_bind$4, 0, 0), undefined);
    _state.val.cleanups = [];
    const _it = _M0MPC17hashset7HashSet4iterGiE(children);
    while (true) {
      const _bind$5 = _M0MPB4Iter4nextGiE(_it);
      if (_bind$5 === undefined) {
        break;
      } else {
        const _Some$2 = _bind$5;
        const _child_id = _Some$2;
        if (_M0FP48Arcelyth5aitne3src8reactive13owner__exists(_child_id)) {
          _M0MP48Arcelyth5aitne3src8reactive5Owner7cleanup(new _M0TP48Arcelyth5aitne3src8reactive5Owner(_child_id));
        }
        continue;
      }
    }
    const _bind$5 = cleanups.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$5) {
        const task = cleanups[_];
        task();
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    if (parent === undefined) {
    } else {
      const _Some$2 = parent;
      const _pid = _Some$2;
      _M0FP48Arcelyth5aitne3src8reactive27remove__child__from__parent(_pid, self.id);
    }
    _M0FP48Arcelyth5aitne3src8reactive29remove__owner__from__registry(self.id);
    const _bind$6 = _M0FP48Arcelyth5aitne3src8reactive14current__owner.val;
    if (_bind$6 === undefined) {
      return;
    } else {
      const _Some$2 = _bind$6;
      const _id = _Some$2;
      if (_id === self.id) {
        _M0FP48Arcelyth5aitne3src8reactive14current__owner.val = undefined;
        return;
      } else {
        return;
      }
    }
  }
}
function _M0MP48Arcelyth5aitne3src8reactive5Owner12drain__owner(self) {
  const _bind$3 = _M0FP48Arcelyth5aitne3src8reactive16owner__state__of(self.id);
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _state = _Some;
    const children = _state.val.children;
    const cleanups = _state.val.cleanups;
    const _tmp$2 = _state.val;
    const _bind$4 = [];
    _tmp$2.children = _M0MPC17hashset7HashSet7HashSetGiE(new _M0TPB9ArrayViewGiE(_bind$4, 0, 0), undefined);
    _state.val.cleanups = [];
    const _it = _M0MPC17hashset7HashSet4iterGiE(children);
    while (true) {
      const _bind$5 = _M0MPB4Iter4nextGiE(_it);
      if (_bind$5 === undefined) {
        break;
      } else {
        const _Some$2 = _bind$5;
        const _child_id = _Some$2;
        if (_M0FP48Arcelyth5aitne3src8reactive13owner__exists(_child_id)) {
          _M0MP48Arcelyth5aitne3src8reactive5Owner7cleanup(new _M0TP48Arcelyth5aitne3src8reactive5Owner(_child_id));
        }
        continue;
      }
    }
    const _bind$5 = cleanups.length;
    let _tmp$3 = 0;
    while (true) {
      const _ = _tmp$3;
      if (_ < _bind$5) {
        const task = cleanups[_];
        task();
        _tmp$3 = _ + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MP48Arcelyth5aitne3src8reactive5Owner13with__cleanupGuE(self, fun) {
  _M0MP48Arcelyth5aitne3src8reactive5Owner12drain__owner(self);
  _M0MP48Arcelyth5aitne3src8reactive5Owner6with__GuE(self, fun);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGiE(self) {
  self.val.stale = true;
  const _bind$3 = self.val.schedule;
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _run = _Some;
    _run();
    return;
  }
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGRP48Arcelyth5aitne3src3dom9AttrStateE(self) {
  self.val.stale = true;
  const _bind$3 = self.val.schedule;
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _run = _Some;
    _run();
    return;
  }
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGuE(self) {
  self.val.stale = true;
  const _bind$3 = self.val.schedule;
  if (_bind$3 === undefined) {
    return;
  } else {
    const _Some = _bind$3;
    const _run = _Some;
    _run();
    return;
  }
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGiE(_self) {}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGRP48Arcelyth5aitne3src3dom9AttrStateE(_self) {}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13mark__pendingGuE(_self) {}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGiE(self) {
  _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGiE(self);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGRP48Arcelyth5aitne3src3dom9AttrStateE(self) {
  _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGRP48Arcelyth5aitne3src3dom9AttrStateE(self);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode18mark__all__pendingGuE(self) {
  _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode11mark__staleGuE(self);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGiE(self) {
  if (self.val.stale) {
    self.val.stale = false;
    return true;
  }
  const _p = _M0MPC17hashset7HashSet4iterGRP48Arcelyth5aitne3src8reactive7ASourceE(self.val.sources);
  while (true) {
    const _p$2 = _M0MPB4Iter4nextGsE(_p);
    if (_p$2 === undefined) {
      return false;
    } else {
      const _p$3 = _p$2;
      const _p$4 = _p$3;
      if (_M0IP48Arcelyth5aitne3src8reactive7ASourceP48Arcelyth5aitne3src8reactive12ReactiveNode13update__value(_p$4)) {
        return true;
      }
      continue;
    }
  }
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGRP48Arcelyth5aitne3src3dom9AttrStateE(self) {
  if (self.val.stale) {
    self.val.stale = false;
    return true;
  }
  const _p = _M0MPC17hashset7HashSet4iterGRP48Arcelyth5aitne3src8reactive7ASourceE(self.val.sources);
  while (true) {
    const _p$2 = _M0MPB4Iter4nextGsE(_p);
    if (_p$2 === undefined) {
      return false;
    } else {
      const _p$3 = _p$2;
      const _p$4 = _p$3;
      if (_M0IP48Arcelyth5aitne3src8reactive7ASourceP48Arcelyth5aitne3src8reactive12ReactiveNode13update__value(_p$4)) {
        return true;
      }
      continue;
    }
  }
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12ReactiveNode13update__valueGuE(self) {
  if (self.val.stale) {
    self.val.stale = false;
    return true;
  }
  const _p = _M0MPC17hashset7HashSet4iterGRP48Arcelyth5aitne3src8reactive7ASourceE(self.val.sources);
  while (true) {
    const _p$2 = _M0MPB4Iter4nextGsE(_p);
    if (_p$2 === undefined) {
      return false;
    } else {
      const _p$3 = _p$2;
      const _p$4 = _p$3;
      if (_M0IP48Arcelyth5aitne3src8reactive7ASourceP48Arcelyth5aitne3src8reactive12ReactiveNode13update__value(_p$4)) {
        return true;
      }
      continue;
    }
  }
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber11add__sourceGiE(self, source) {
  _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive7ASourceE(self.val.sources, source);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber11add__sourceGRP48Arcelyth5aitne3src3dom9AttrStateE(self, source) {
  _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive7ASourceE(self.val.sources, source);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber11add__sourceGuE(self, source) {
  _M0MPC17hashset7HashSet3addGRP48Arcelyth5aitne3src8reactive7ASourceE(self.val.sources, source);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive13ToASubscriber15to__asubscriberGiE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive11ASubscriber(self.val.id, { self: self, method_table: _M0FP0149moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bInt_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber });
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive13ToASubscriber15to__asubscriberGRP48Arcelyth5aitne3src3dom9AttrStateE(self) {
  return new _M0TP48Arcelyth5aitne3src8reactive11ASubscriber(self.val.id, { self: self, method_table: _M0FP0186moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bArcelyth_2faitne_2fsrc_2fdom_2fAttrState_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber });
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber14clean__sourcesGiE(self, subscriber) {
  const _it = _M0MPC17hashset7HashSet4iterGRP48Arcelyth5aitne3src8reactive7ASourceE(self.val.sources);
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGsE(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _source = _Some;
      _M0IP48Arcelyth5aitne3src8reactive7ASourceP48Arcelyth5aitne3src8reactive6Source11remove__sub(_source, subscriber);
      continue;
    }
  }
  const _tmp$2 = self.val;
  const _bind$3 = [];
  _tmp$2.sources = _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive7ASourceE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive7ASourceE(_bind$3, 0, 0), undefined);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber14clean__sourcesGRP48Arcelyth5aitne3src3dom9AttrStateE(self, subscriber) {
  const _it = _M0MPC17hashset7HashSet4iterGRP48Arcelyth5aitne3src8reactive7ASourceE(self.val.sources);
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGsE(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _source = _Some;
      _M0IP48Arcelyth5aitne3src8reactive7ASourceP48Arcelyth5aitne3src8reactive6Source11remove__sub(_source, subscriber);
      continue;
    }
  }
  const _tmp$2 = self.val;
  const _bind$3 = [];
  _tmp$2.sources = _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive7ASourceE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive7ASourceE(_bind$3, 0, 0), undefined);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive10Subscriber14clean__sourcesGuE(self, subscriber) {
  const _it = _M0MPC17hashset7HashSet4iterGRP48Arcelyth5aitne3src8reactive7ASourceE(self.val.sources);
  while (true) {
    const _bind$3 = _M0MPB4Iter4nextGsE(_it);
    if (_bind$3 === undefined) {
      break;
    } else {
      const _Some = _bind$3;
      const _source = _Some;
      _M0IP48Arcelyth5aitne3src8reactive7ASourceP48Arcelyth5aitne3src8reactive6Source11remove__sub(_source, subscriber);
      continue;
    }
  }
  const _tmp$2 = self.val;
  const _bind$3 = [];
  _tmp$2.sources = _M0MPC17hashset7HashSet7HashSetGRP48Arcelyth5aitne3src8reactive7ASourceE(new _M0TPB9ArrayViewGRP48Arcelyth5aitne3src8reactive7ASourceE(_bind$3, 0, 0), undefined);
}
function _M0MP48Arcelyth5aitne3src8reactive12RenderEffect16new__with__valueGRP48Arcelyth5aitne3src3dom9AttrStateE(fun, init_val) {
  const owner = _M0MP48Arcelyth5aitne3src8reactive5Owner3new();
  const inner = _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(_M0MP48Arcelyth5aitne3src8reactive11EffectInner3newGRP48Arcelyth5aitne3src3dom9AttrStateE(fun));
  const sub = _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive13ToASubscriber15to__asubscriberGRP48Arcelyth5aitne3src3dom9AttrStateE(inner);
  const value = _M0MP48Arcelyth5aitne3src8reactive5Owner6with__GRP48Arcelyth5aitne3src3dom11RenderStateE(owner, () => _M0MP48Arcelyth5aitne3src8reactive8Observer13with__replaceGRP48Arcelyth5aitne3src3dom9AttrStateE(sub, () => fun(init_val)));
  const e = new _M0TP48Arcelyth5aitne3src8reactive12RenderEffectGRP48Arcelyth5aitne3src3dom9AttrStateE(value, inner, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(owner));
  const ref_e = _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(e);
  inner.val.schedule = () => {
    _M0FP48Arcelyth5aitne3src8reactive16schedule__effect({ self: ref_e, method_table: _M0FP0189moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fRenderEffect_5bArcelyth_2faitne_2fsrc_2fdom_2fAttrState_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eEffectRunner });
  };
  return ref_e;
}
function _M0MP48Arcelyth5aitne3src8reactive12RenderEffect3newGRP48Arcelyth5aitne3src3dom9AttrStateE(fun) {
  return _M0MP48Arcelyth5aitne3src8reactive12RenderEffect16new__with__valueGRP48Arcelyth5aitne3src3dom9AttrStateE(fun, undefined);
}
function _M0MP48Arcelyth5aitne3src8reactive12RenderEffect11take__valueGRP48Arcelyth5aitne3src3dom9AttrStateE(self) {
  const v = self.value;
  self.value = undefined;
  return v;
}
function _M0MP48Arcelyth5aitne3src8reactive12RenderEffect3runGiE(effect) {
  const inner = effect.inner;
  inner.val.stale = false;
  const sub = new _M0TP48Arcelyth5aitne3src8reactive11ASubscriber(inner.val.id, { self: inner, method_table: _M0FP0149moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bInt_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber });
  const subscriber_trait = { self: inner, method_table: _M0FP0149moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bInt_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber };
  subscriber_trait.method_table.method_1(subscriber_trait.self, sub);
  _M0MP48Arcelyth5aitne3src8reactive5Owner13with__cleanupGuE(effect.owner.val, () => {
    _M0MP48Arcelyth5aitne3src8reactive8Observer13with__replaceGuE(sub, () => {
      const _func = inner.val.cb;
      const next_value = _func(effect.value);
      effect.value = next_value;
    });
  });
}
function _M0MP48Arcelyth5aitne3src8reactive12RenderEffect3runGRP48Arcelyth5aitne3src3dom9AttrStateE(effect) {
  const inner = effect.inner;
  inner.val.stale = false;
  const sub = new _M0TP48Arcelyth5aitne3src8reactive11ASubscriber(inner.val.id, { self: inner, method_table: _M0FP0186moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bArcelyth_2faitne_2fsrc_2fdom_2fAttrState_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber });
  const subscriber_trait = { self: inner, method_table: _M0FP0186moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bArcelyth_2faitne_2fsrc_2fdom_2fAttrState_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber };
  subscriber_trait.method_table.method_1(subscriber_trait.self, sub);
  _M0MP48Arcelyth5aitne3src8reactive5Owner13with__cleanupGuE(effect.owner.val, () => {
    _M0MP48Arcelyth5aitne3src8reactive8Observer13with__replaceGuE(sub, () => {
      const _func = inner.val.cb;
      const next_value = _func(effect.value);
      effect.value = next_value;
    });
  });
}
function _M0MP48Arcelyth5aitne3src8reactive6Effect3runGuE(effect) {
  const inner = effect.inner;
  inner.val.stale = false;
  const sub = new _M0TP48Arcelyth5aitne3src8reactive11ASubscriber(inner.val.id, { self: inner, method_table: _M0FP0150moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bUnit_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber });
  const subscriber_trait = { self: inner, method_table: _M0FP0150moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffectInner_5bUnit_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eSubscriber };
  subscriber_trait.method_table.method_1(subscriber_trait.self, sub);
  _M0MP48Arcelyth5aitne3src8reactive5Owner13with__cleanupGuE(effect.owner.val, () => {
    _M0MP48Arcelyth5aitne3src8reactive8Observer13with__replaceGuE(sub, () => {
      const _func = inner.val.cb;
      _func(-1);
    });
  });
}
function _M0MP48Arcelyth5aitne3src8reactive6Effect3newGuE(cb) {
  const inner = _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(_M0MP48Arcelyth5aitne3src8reactive11EffectInner3newGuE(cb));
  const owner = _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(_M0MP48Arcelyth5aitne3src8reactive5Owner3new());
  const e = new _M0TP48Arcelyth5aitne3src8reactive6EffectGuE(inner, owner);
  const ref_e = _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(e);
  inner.val.schedule = () => {
    _M0FP48Arcelyth5aitne3src8reactive16schedule__effect({ self: ref_e, method_table: _M0FP0147moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffect_5bUnit_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eEffectRunner });
  };
  _M0FP48Arcelyth5aitne3src8reactive16schedule__effect({ self: ref_e, method_table: _M0FP0147moonbitlang_2fcore_2fref_2fRef_5bArcelyth_2faitne_2fsrc_2freactive_2fEffect_5bUnit_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2freactive_2eEffectRunner });
  return e;
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner7get__idGRP48Arcelyth5aitne3src8reactive12RenderEffectGiEE(self) {
  const _p = self.val;
  return _p.inner.val.id;
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner7get__idGRP48Arcelyth5aitne3src8reactive6EffectGuEE(self) {
  const _p = self.val;
  return _p.inner.val.id;
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner7get__idGRP48Arcelyth5aitne3src8reactive12RenderEffectGRP48Arcelyth5aitne3src3dom9AttrStateEE(self) {
  const _p = self.val;
  return _p.inner.val.id;
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGRP48Arcelyth5aitne3src8reactive12RenderEffectGiEE(self) {
  _M0IP48Arcelyth5aitne3src8reactive12RenderEffectP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGiE(self.val);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGRP48Arcelyth5aitne3src8reactive6EffectGuEE(self) {
  _M0IP48Arcelyth5aitne3src8reactive6EffectP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGuE(self.val);
}
function _M0IPC13ref3RefP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGRP48Arcelyth5aitne3src8reactive12RenderEffectGRP48Arcelyth5aitne3src3dom9AttrStateEE(self) {
  _M0IP48Arcelyth5aitne3src8reactive12RenderEffectP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGRP48Arcelyth5aitne3src3dom9AttrStateE(self.val);
}
function _M0IP48Arcelyth5aitne3src8reactive6EffectP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGuE(self) {
  _M0MP48Arcelyth5aitne3src8reactive6Effect3runGuE(self);
}
function _M0IP48Arcelyth5aitne3src8reactive12RenderEffectP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGiE(self) {
  _M0MP48Arcelyth5aitne3src8reactive12RenderEffect3runGiE(self);
}
function _M0IP48Arcelyth5aitne3src8reactive12RenderEffectP48Arcelyth5aitne3src8reactive12EffectRunner11run__effectGRP48Arcelyth5aitne3src3dom9AttrStateE(self) {
  _M0MP48Arcelyth5aitne3src8reactive12RenderEffect3runGRP48Arcelyth5aitne3src3dom9AttrStateE(self);
}
function _M0FP48Arcelyth5aitne3src3dom4text(s) {
  return new _M0TP48Arcelyth5aitne3src3dom8TextNode(s);
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom4View5style(self, _s) {
  return { self: _M0FP48Arcelyth5aitne3src3dom4text(self), method_table: _M0FP085Arcelyth_2faitne_2fsrc_2fdom_2fTextNode_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute9html__lenGRP48Arcelyth5aitne3src3dom9IntoStyleE(_self) {
  return 0;
}
function _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute8to__htmlGRP48Arcelyth5aitne3src3dom9IntoStyleE(self, _b, _c, style, _i) {
  self.method_table.method_1(self.self, style);
}
function _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute5buildGRP48Arcelyth5aitne3src3dom9IntoStyleE(self, el) {
  return self.method_table.method_2(self.self, el);
}
function _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute7rebuildGRP48Arcelyth5aitne3src3dom9IntoStyleE(self, state) {
  self.method_table.method_3(self.self, state);
}
function _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute12dry__resolveGRP48Arcelyth5aitne3src3dom9IntoStyleE(self) {
  self.method_table.method_4(self.self);
}
function _M0IP48Arcelyth5aitne3src3dom5StyleP48Arcelyth5aitne3src3dom9Attribute9add__attrGRP48Arcelyth5aitne3src3dom9IntoStyleE(self, attr) {
  return { self: { _0: { self: self, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute }, _1: attr }, method_table: _M0FP0143_28Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_2c_20Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_29_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute };
}
function _M0FP48Arcelyth5aitne3src3dom18dom__next__sibling(node) {
  const n = _M0FP48Arcelyth5aitne3src3ffi19prim__next__sibling(node);
  return _M0FP48Arcelyth5aitne3src3ffi14prim__is__null(n) ? _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4None__ : new _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4Some(n);
}
function _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable8elements(self) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    switch (self$2.$tag) {
      case 1: {
        const _Element = self$2;
        const _s = _Element._0;
        return [_M0FP48Arcelyth5aitne3src3ffi12el__as__node(_s.el)];
      }
      case 2: {
        const _Text = self$2;
        const _s$2 = _Text._0;
        return [_M0FP48Arcelyth5aitne3src3ffi14text__as__node(_s$2.node)];
      }
      case 3: {
        const _Fragment = self$2;
        const _s$3 = _Fragment._0;
        const res = [];
        const _bind$3 = _s$3.children;
        const _bind$4 = _bind$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$4) {
            const child = _bind$3[_];
            _M0MPC15array5Array10push__iterGRP48Arcelyth5aitne3src3ffi4NodeE(res, _M0MPC15array5Array4iterGRP48Arcelyth5aitne3src3ffi4NodeE(_M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable8elements(child)));
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return res;
      }
      case 4: {
        const _MultiBlock = self$2;
        const _s$4 = _MultiBlock._0;
        const nodes = [_s$4.start_anchor, _s$4.end_anchor];
        let cur = _M0FP48Arcelyth5aitne3src3dom18dom__next__sibling(_s$4.start_anchor);
        while (true) {
          const _bind$5 = cur;
          if (_bind$5.$tag === 1) {
            const _Some = _bind$5;
            const _n = _Some._0;
            if (_M0FP48Arcelyth5aitne3src3ffi14prim__node__eq(_n, _s$4.end_anchor)) {
              break;
            }
            _M0MPC15array5Array4pushGRP48Arcelyth5aitne3src3ffi4NodeE(nodes, _n);
            cur = _M0FP48Arcelyth5aitne3src3dom18dom__next__sibling(_n);
          } else {
            break;
          }
          continue;
        }
        return nodes;
      }
      case 5: {
        const _Router = self$2;
        const _s$5 = _Router._0;
        _M0FPB7printlnGsE("[Debug] router elements");
        _tmp$2 = _s$5.view.val;
        continue _L;
      }
      default: {
        return [];
      }
    }
  }
}
function _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(self, parent, marker) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    switch (self$2.$tag) {
      case 1: {
        const _Element = self$2;
        const _s = _Element._0;
        if (_M0FP48Arcelyth5aitne3src3ffi13dom__is__null(marker)) {
          _M0FP48Arcelyth5aitne3src3ffi11dom__append(parent, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(_s.el));
          return;
        } else {
          _M0FP48Arcelyth5aitne3src3ffi19dom__insert__before(parent, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(_s.el), marker);
          return;
        }
      }
      case 2: {
        const _Text = self$2;
        const _s$2 = _Text._0;
        if (_M0FP48Arcelyth5aitne3src3ffi13dom__is__null(marker)) {
          _M0FP48Arcelyth5aitne3src3ffi11dom__append(parent, _M0FP48Arcelyth5aitne3src3ffi14text__as__node(_s$2.node));
          return;
        } else {
          _M0FP48Arcelyth5aitne3src3ffi19dom__insert__before(parent, _M0FP48Arcelyth5aitne3src3ffi14text__as__node(_s$2.node), marker);
          return;
        }
      }
      case 3: {
        const _Fragment = self$2;
        const _s$3 = _Fragment._0;
        const _bind$3 = _s$3.children;
        const _bind$4 = _bind$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$4) {
            const child = _bind$3[_];
            _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(child, parent, marker);
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      case 4: {
        const _MultiBlock = self$2;
        const _s$4 = _MultiBlock._0;
        if (_M0FP48Arcelyth5aitne3src3ffi13dom__is__null(marker)) {
          _M0FP48Arcelyth5aitne3src3ffi11dom__append(parent, _s$4.start_anchor);
          _M0FP48Arcelyth5aitne3src3ffi11dom__append(parent, _s$4.end_anchor);
        } else {
          _M0FP48Arcelyth5aitne3src3ffi19dom__insert__before(parent, _s$4.start_anchor, marker);
          _M0FP48Arcelyth5aitne3src3ffi19dom__insert__before(parent, _s$4.end_anchor, marker);
        }
        const _bind$5 = _s$4.init;
        if (_bind$5 === undefined) {
          return;
        } else {
          const _Some = _bind$5;
          const _f = _Some;
          _f(parent);
          return;
        }
      }
      case 5: {
        const _Router = self$2;
        const _s$5 = _Router._0;
        _tmp$2 = _s$5.view.val;
        continue _L;
      }
      default: {
        return;
      }
    }
  }
}
function _M0FP48Arcelyth5aitne3src3dom23clear__between__anchors(start, end) {
  let cur = _M0FP48Arcelyth5aitne3src3dom18dom__next__sibling(start);
  while (true) {
    const _bind$3 = cur;
    if (_bind$3.$tag === 1) {
      const _Some = _bind$3;
      const _n = _Some._0;
      if (_M0FP48Arcelyth5aitne3src3ffi14prim__node__eq(_n, end)) {
        return;
      }
      const after = _M0FP48Arcelyth5aitne3src3dom18dom__next__sibling(_n);
      _M0FP48Arcelyth5aitne3src3ffi11dom__remove(_n);
      cur = after;
    } else {
      return;
    }
    continue;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable7unmount(self) {
  let _tmp$2 = self;
  _L: while (true) {
    const self$2 = _tmp$2;
    switch (self$2.$tag) {
      case 1: {
        const _Element = self$2;
        const _s = _Element._0;
        _M0FP48Arcelyth5aitne3src3ffi11dom__remove(_M0FP48Arcelyth5aitne3src3ffi12el__as__node(_s.el));
        return;
      }
      case 2: {
        const _Text = self$2;
        const _s$2 = _Text._0;
        _M0FP48Arcelyth5aitne3src3ffi11dom__remove(_M0FP48Arcelyth5aitne3src3ffi14text__as__node(_s$2.node));
        return;
      }
      case 3: {
        const _Fragment = self$2;
        const _s$3 = _Fragment._0;
        const _bind$3 = _s$3.children;
        const _bind$4 = _bind$3.length;
        let _tmp$3 = 0;
        while (true) {
          const _ = _tmp$3;
          if (_ < _bind$4) {
            const child = _bind$3[_];
            _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable7unmount(child);
            _tmp$3 = _ + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
      case 4: {
        const _MultiBlock = self$2;
        const _s$4 = _MultiBlock._0;
        const _bind$5 = _s$4.cleanup;
        if (_bind$5 === undefined) {
        } else {
          const _Some = _bind$5;
          const _f = _Some;
          _f();
        }
        _M0FP48Arcelyth5aitne3src3dom23clear__between__anchors(_s$4.start_anchor, _s$4.end_anchor);
        _M0FP48Arcelyth5aitne3src3ffi11dom__remove(_s$4.start_anchor);
        _M0FP48Arcelyth5aitne3src3ffi11dom__remove(_s$4.end_anchor);
        return;
      }
      case 5: {
        const _Router = self$2;
        const _s$5 = _Router._0;
        _tmp$2 = _s$5.view.val;
        continue _L;
      }
      default: {
        return;
      }
    }
  }
}
function _M0MP48Arcelyth5aitne3src3dom8AttrList3new() {
  return new _M0TP48Arcelyth5aitne3src3dom8AttrList([]);
}
function _M0FP48Arcelyth5aitne3src3dom9a_2einner(children) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(undefined, _M0MP48Arcelyth5aitne3src3dom8AttrList3new(), children);
}
function _M0FP48Arcelyth5aitne3src3dom4propGsE(key, value) {
  return new _M0TP48Arcelyth5aitne3src3dom8PropertyGsE(key, value);
}
function _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self, attr) {
  const items = self.items;
  return new _M0TP48Arcelyth5aitne3src3dom8AttrList(_M0IPC15array5ArrayPB3Add3addGRP48Arcelyth5aitne8examples5bench3RowE(items, [attr]));
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, attr) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self.tag, _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self.attrs, attr), self.children);
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, attr) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self.tag, _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self.attrs, attr), self.children);
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, attr) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self.tag, _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self.attrs, attr), self.children);
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, attr) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self.tag, _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self.attrs, attr), self.children);
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, attr) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self.tag, _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self.attrs, attr), self.children);
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, attr) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self.tag, _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self.attrs, attr), self.children);
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, attr) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self.tag, _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self.attrs, attr), self.children);
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, attr) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self.tag, _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self.attrs, attr), self.children);
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, attr) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self.tag, _M0MP48Arcelyth5aitne3src3dom8AttrList4push(self.attrs, attr), self.children);
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement4propGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(self, key, value) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: _M0FP48Arcelyth5aitne3src3dom4propGsE(key, value), method_table: _M0FP0102Arcelyth_2faitne_2fsrc_2fdom_2fProperty_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement4propGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(self, key, value) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: _M0FP48Arcelyth5aitne3src3dom4propGsE(key, value), method_table: _M0FP0102Arcelyth_2faitne_2fsrc_2fdom_2fProperty_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGsE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.length);
  _M0IPC16string6StringP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self));
  _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self));
  _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11DynTextNodeE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self));
  _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self));
  _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self));
  _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self));
  _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self));
  _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self));
  _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom8TextNodeE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(self.val.length);
  _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self));
  _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0IP016_24default__implP48Arcelyth5aitne3src3dom10RenderHtml8to__htmlGRP48Arcelyth5aitne3src3dom7ForNodeGRP48Arcelyth5aitne8examples5bench3RowsEE(self) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(_M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne8examples5bench3RowsE(self));
  _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne8examples5bench3RowsE(self, buf, _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src3dom8PositionE(1));
  return buf.val;
}
function _M0FP48Arcelyth5aitne3src3dom8document() {
  const _bind$3 = _M0FP48Arcelyth5aitne3src3dom5cache.val.document;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    return _Some._0;
  } else {
    const d = _M0FP48Arcelyth5aitne3src3ffi14prim__document();
    _M0FP48Arcelyth5aitne3src3dom5cache.val.document = new _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi8DocumentE4Some(d);
    return d;
  }
}
function _M0FP48Arcelyth5aitne3src3dom23dom__create__text__node(text) {
  return _M0FP48Arcelyth5aitne3src3ffi24prim__create__text__node(_M0FP48Arcelyth5aitne3src3dom8document(), text);
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom6Render5build(self) {
  const node = _M0FP48Arcelyth5aitne3src3dom23dom__create__text__node(self);
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState4Text(new _M0TP48Arcelyth5aitne3src3dom9TextState(node));
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom6Render7rebuild(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 2) {
    const _Text = _bind$3;
    const _s = _Text._0;
    _M0FP48Arcelyth5aitne3src3ffi14dom__set__text(_M0FP48Arcelyth5aitne3src3ffi14text__as__node(_s.node), self);
    return;
  } else {
    return;
  }
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self) {
  return self.length;
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self, buf, position) {
  _M0IPB13StringBuilderPB6Logger13write__string(buf, self);
  position.val = 2;
}
function _M0MP48Arcelyth5aitne3src3dom18RemoveEventHandler6invoke(self) {
  const _bind$3 = self;
  if (_bind$3.$tag === 1) {
    const _Some = _bind$3;
    const _h = _Some._0;
    _M0FP48Arcelyth5aitne3src3ffi25prim__call__event__handle(_h);
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute9html__lenGsE(_self) {
  return 0;
}
function _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute8to__htmlGsE(_self, _b, _c, _s, _i) {}
function _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute5buildGsE(self, el) {
  return _M0IPC16string6StringP48Arcelyth5aitne3src3dom12IntoProperty5build(self.value, el, self.key);
}
function _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute7rebuildGsE(self, state) {
  _M0IPC16string6StringP48Arcelyth5aitne3src3dom12IntoProperty7rebuild(self.value, state, self.key);
}
function _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute12dry__resolveGsE(self) {
  _M0IPC16string6StringP48Arcelyth5aitne3src3dom12IntoProperty12dry__resolve(self.value);
}
function _M0IP48Arcelyth5aitne3src3dom8PropertyP48Arcelyth5aitne3src3dom9Attribute9add__attrGsE(self, attr) {
  return { self: { _0: { self: self, method_table: _M0FP0102Arcelyth_2faitne_2fsrc_2fdom_2fProperty_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute }, _1: attr }, method_table: _M0FP0143_28Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_2c_20Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_29_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute };
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom12IntoProperty5build(self, el, key) {
  _M0FP48Arcelyth5aitne3src3ffi14dom__set__prop(_M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), key, self);
  return new _M0DTP48Arcelyth5aitne3src3dom9AttrState7Element(el);
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom12IntoProperty7rebuild(self, state, key) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 3) {
    const _Element = _bind$3;
    const _el = _Element._0;
    _M0FP48Arcelyth5aitne3src3ffi14dom__set__prop(_M0FP48Arcelyth5aitne3src3ffi12el__as__node(_el), key, self);
    return;
  } else {
    return;
  }
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom12IntoProperty12dry__resolve(_self) {}
function _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self) {
  let len = 0;
  const _bind$3 = self.items;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const item = _bind$3[_];
      len = len + item.method_table.method_0(item.self) | 0;
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return len;
}
function _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self, buf, class_, style, inner_html) {
  const _bind$3 = self.items;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const item = _bind$3[_];
      item.method_table.method_1(item.self, buf, class_, style, inner_html);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self, el) {
  let cur = _M0DTP48Arcelyth5aitne3src3dom9AttrState4None__;
  const _bind$3 = self.items;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const item = _bind$3[_];
      cur = new _M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair(cur, item.method_table.method_2(item.self, el));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return cur;
}
function _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self, state) {
  let rem = state.val;
  const _bind$3 = self.items;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$4) {
      const item = _bind$3[_];
      const _bind$5 = rem;
      if (_bind$5.$tag === 4) {
        const _Pair = _bind$5;
        const _first = _Pair._0;
        const _rest = _Pair._1;
        const r = new _M0TPC13ref3RefGRP48Arcelyth5aitne3src3dom9AttrStateE(_first);
        item.method_table.method_3(item.self, r);
        rem = _rest;
        state.val = new _M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair(r.val, rem);
      }
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FP48Arcelyth5aitne3src3dom20dom__create__element(tag) {
  return _M0FP48Arcelyth5aitne3src3ffi21prim__create__element(_M0FP48Arcelyth5aitne3src3dom8document(), tag);
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const el = _M0FP48Arcelyth5aitne3src3dom20dom__create__element("h1");
  const attrs = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self.attrs, el);
  const children = _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self.children);
  _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(children, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(new _M0TP48Arcelyth5aitne3src3dom12ElementState(el, attrs, children));
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const el = _M0FP48Arcelyth5aitne3src3dom20dom__create__element("div");
  const attrs = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self.attrs, el);
  const children = _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self.children);
  _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(children, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(new _M0TP48Arcelyth5aitne3src3dom12ElementState(el, attrs, children));
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const el = _M0FP48Arcelyth5aitne3src3dom20dom__create__element("td");
  const attrs = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self.attrs, el);
  const children = _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self.children);
  _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(children, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(new _M0TP48Arcelyth5aitne3src3dom12ElementState(el, attrs, children));
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const el = _M0FP48Arcelyth5aitne3src3dom20dom__create__element("a");
  const attrs = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self.attrs, el);
  const children = _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self.children);
  _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(children, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(new _M0TP48Arcelyth5aitne3src3dom12ElementState(el, attrs, children));
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const el = _M0FP48Arcelyth5aitne3src3dom20dom__create__element("span");
  const attrs = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self.attrs, el);
  const children = _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self.children);
  _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(children, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(new _M0TP48Arcelyth5aitne3src3dom12ElementState(el, attrs, children));
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const el = _M0FP48Arcelyth5aitne3src3dom20dom__create__element("tr");
  const attrs = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self.attrs, el);
  const children = _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self.children);
  _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(children, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(new _M0TP48Arcelyth5aitne3src3dom12ElementState(el, attrs, children));
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const el = _M0FP48Arcelyth5aitne3src3dom20dom__create__element("tbody");
  const attrs = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self.attrs, el);
  const children = _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self.children);
  _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(children, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(new _M0TP48Arcelyth5aitne3src3dom12ElementState(el, attrs, children));
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const el = _M0FP48Arcelyth5aitne3src3dom20dom__create__element("table");
  const attrs = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self.attrs, el);
  const children = _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self.children);
  _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(children, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(new _M0TP48Arcelyth5aitne3src3dom12ElementState(el, attrs, children));
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const el = _M0FP48Arcelyth5aitne3src3dom20dom__create__element("button");
  const attrs = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute5build(self.attrs, el);
  const children = _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self.children);
  _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(children, _M0FP48Arcelyth5aitne3src3ffi12el__as__node(el), _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState7Element(new _M0TP48Arcelyth5aitne3src3dom12ElementState(el, attrs, children));
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 1) {
    const _Element = _bind$3;
    const _el_state = _Element._0;
    const attr_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.attrs);
    _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self.attrs, attr_ref);
    _el_state.attrs = attr_ref.val;
    const children_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.children);
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self.children, children_ref);
    _el_state.children = children_ref.val;
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 1) {
    const _Element = _bind$3;
    const _el_state = _Element._0;
    const attr_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.attrs);
    _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self.attrs, attr_ref);
    _el_state.attrs = attr_ref.val;
    const children_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.children);
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self.children, children_ref);
    _el_state.children = children_ref.val;
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 1) {
    const _Element = _bind$3;
    const _el_state = _Element._0;
    const attr_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.attrs);
    _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self.attrs, attr_ref);
    _el_state.attrs = attr_ref.val;
    const children_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.children);
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self.children, children_ref);
    _el_state.children = children_ref.val;
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 1) {
    const _Element = _bind$3;
    const _el_state = _Element._0;
    const attr_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.attrs);
    _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self.attrs, attr_ref);
    _el_state.attrs = attr_ref.val;
    const children_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.children);
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self.children, children_ref);
    _el_state.children = children_ref.val;
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 1) {
    const _Element = _bind$3;
    const _el_state = _Element._0;
    const attr_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.attrs);
    _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self.attrs, attr_ref);
    _el_state.attrs = attr_ref.val;
    const children_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.children);
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self.children, children_ref);
    _el_state.children = children_ref.val;
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 1) {
    const _Element = _bind$3;
    const _el_state = _Element._0;
    const attr_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.attrs);
    _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self.attrs, attr_ref);
    _el_state.attrs = attr_ref.val;
    const children_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.children);
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self.children, children_ref);
    _el_state.children = children_ref.val;
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 1) {
    const _Element = _bind$3;
    const _el_state = _Element._0;
    const attr_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.attrs);
    _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self.attrs, attr_ref);
    _el_state.attrs = attr_ref.val;
    const children_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.children);
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self.children, children_ref);
    _el_state.children = children_ref.val;
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 1) {
    const _Element = _bind$3;
    const _el_state = _Element._0;
    const attr_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.attrs);
    _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self.attrs, attr_ref);
    _el_state.attrs = attr_ref.val;
    const children_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.children);
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self.children, children_ref);
    _el_state.children = children_ref.val;
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 1) {
    const _Element = _bind$3;
    const _el_state = _Element._0;
    const attr_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.attrs);
    _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute7rebuild(self.attrs, attr_ref);
    _el_state.attrs = attr_ref.val;
    const children_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_el_state.children);
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self.children, children_ref);
    _el_state.children = children_ref.val;
    return;
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const tag_len = "h1".length;
  const attrs_len = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self.attrs);
  if (false) {
    return (3 + tag_len | 0) + attrs_len | 0;
  } else {
    return ((((2 + tag_len | 0) + attrs_len | 0) + _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self.children) | 0) + 3 | 0) + tag_len | 0;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const tag_len = "div".length;
  const attrs_len = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self.attrs);
  if (false) {
    return (3 + tag_len | 0) + attrs_len | 0;
  } else {
    return ((((2 + tag_len | 0) + attrs_len | 0) + _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self.children) | 0) + 3 | 0) + tag_len | 0;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const tag_len = "td".length;
  const attrs_len = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self.attrs);
  if (false) {
    return (3 + tag_len | 0) + attrs_len | 0;
  } else {
    return ((((2 + tag_len | 0) + attrs_len | 0) + _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self.children) | 0) + 3 | 0) + tag_len | 0;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const tag_len = "a".length;
  const attrs_len = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self.attrs);
  if (false) {
    return (3 + tag_len | 0) + attrs_len | 0;
  } else {
    return ((((2 + tag_len | 0) + attrs_len | 0) + _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self.children) | 0) + 3 | 0) + tag_len | 0;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const tag_len = "span".length;
  const attrs_len = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self.attrs);
  if (false) {
    return (3 + tag_len | 0) + attrs_len | 0;
  } else {
    return ((((2 + tag_len | 0) + attrs_len | 0) + _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self.children) | 0) + 3 | 0) + tag_len | 0;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const tag_len = "tr".length;
  const attrs_len = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self.attrs);
  if (false) {
    return (3 + tag_len | 0) + attrs_len | 0;
  } else {
    return ((((2 + tag_len | 0) + attrs_len | 0) + _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self.children) | 0) + 3 | 0) + tag_len | 0;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const tag_len = "tbody".length;
  const attrs_len = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self.attrs);
  if (false) {
    return (3 + tag_len | 0) + attrs_len | 0;
  } else {
    return ((((2 + tag_len | 0) + attrs_len | 0) + _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self.children) | 0) + 3 | 0) + tag_len | 0;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const tag_len = "table".length;
  const attrs_len = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self.attrs);
  if (false) {
    return (3 + tag_len | 0) + attrs_len | 0;
  } else {
    return ((((2 + tag_len | 0) + attrs_len | 0) + _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self.children) | 0) + 3 | 0) + tag_len | 0;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self) {
  const tag_len = "button".length;
  const attrs_len = _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute9html__len(self.attrs);
  if (false) {
    return (3 + tag_len | 0) + attrs_len | 0;
  } else {
    return ((((2 + tag_len | 0) + attrs_len | 0) + _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self.children) | 0) + 3 | 0) + tag_len | 0;
  }
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, position) {
  const tag_name = "h1";
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "<");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
  const class_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const style_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const inner_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self.attrs, buf, class_buf, style_buf, inner_buf);
  if (class_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " class=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, class_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (style_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " style=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, style_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (false) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " />");
  } else {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
    position.val = 1;
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self.children, buf, position);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "</");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
  }
  position.val = 2;
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, position) {
  const tag_name = "div";
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "<");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
  const class_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const style_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const inner_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self.attrs, buf, class_buf, style_buf, inner_buf);
  if (class_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " class=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, class_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (style_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " style=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, style_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (false) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " />");
  } else {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
    position.val = 1;
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self.children, buf, position);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "</");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
  }
  position.val = 2;
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, position) {
  const tag_name = "td";
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "<");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
  const class_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const style_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const inner_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self.attrs, buf, class_buf, style_buf, inner_buf);
  if (class_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " class=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, class_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (style_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " style=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, style_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (false) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " />");
  } else {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
    position.val = 1;
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self.children, buf, position);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "</");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
  }
  position.val = 2;
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, position) {
  const tag_name = "a";
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "<");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
  const class_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const style_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const inner_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self.attrs, buf, class_buf, style_buf, inner_buf);
  if (class_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " class=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, class_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (style_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " style=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, style_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (false) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " />");
  } else {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
    position.val = 1;
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self.children, buf, position);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "</");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
  }
  position.val = 2;
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, position) {
  const tag_name = "span";
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "<");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
  const class_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const style_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const inner_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self.attrs, buf, class_buf, style_buf, inner_buf);
  if (class_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " class=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, class_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (style_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " style=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, style_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (false) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " />");
  } else {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
    position.val = 1;
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self.children, buf, position);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "</");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
  }
  position.val = 2;
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, position) {
  const tag_name = "tr";
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "<");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
  const class_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const style_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const inner_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self.attrs, buf, class_buf, style_buf, inner_buf);
  if (class_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " class=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, class_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (style_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " style=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, style_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (false) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " />");
  } else {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
    position.val = 1;
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self.children, buf, position);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "</");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
  }
  position.val = 2;
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, position) {
  const tag_name = "tbody";
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "<");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
  const class_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const style_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const inner_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self.attrs, buf, class_buf, style_buf, inner_buf);
  if (class_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " class=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, class_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (style_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " style=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, style_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (false) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " />");
  } else {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
    position.val = 1;
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self.children, buf, position);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "</");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
  }
  position.val = 2;
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, position) {
  const tag_name = "table";
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "<");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
  const class_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const style_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const inner_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self.attrs, buf, class_buf, style_buf, inner_buf);
  if (class_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " class=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, class_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (style_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " style=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, style_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (false) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " />");
  } else {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
    position.val = 1;
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self.children, buf, position);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "</");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
  }
  position.val = 2;
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, buf, position) {
  const tag_name = "button";
  _M0IPB13StringBuilderPB6Logger13write__string(buf, "<");
  _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
  const class_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const style_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  const inner_buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IP48Arcelyth5aitne3src3dom8AttrListP48Arcelyth5aitne3src3dom9Attribute8to__html(self.attrs, buf, class_buf, style_buf, inner_buf);
  if (class_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " class=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, class_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (style_buf.val.length > 0) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " style=\"");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, style_buf.val);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "\"");
  }
  if (false) {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, " />");
  } else {
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
    position.val = 1;
    _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self.children, buf, position);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, "</");
    _M0IPB13StringBuilderPB6Logger13write__string(buf, tag_name);
    _M0IPB13StringBuilderPB6Logger13write__string(buf, ">");
  }
  position.val = 2;
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(self, class_) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: class_, method_table: _M0FP099Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(self, class_) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: class_, method_table: _M0FP099Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom7RxClassGsEE(self, class_) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: class_, method_table: _M0FP0143Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bArcelyth_2faitne_2fsrc_2fdom_2fRxClass_5bString_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(self, class_) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: class_, method_table: _M0FP099Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(self, class_) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: class_, method_table: _M0FP099Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(self, class_) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: class_, method_table: _M0FP099Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0FP48Arcelyth5aitne3src3dom2on(event, fun) {
  return new _M0TP48Arcelyth5aitne3src3dom2On(event, _M0MP48Arcelyth5aitne3src8reactive5Owner22current__with__default(), fun);
}
function _M0MP48Arcelyth5aitne3src3dom9EventType10to__string(self) {
  switch (self) {
    case 0: {
      return "click";
    }
    case 1: {
      return "input";
    }
    case 2: {
      return "change";
    }
    case 3: {
      return "submit";
    }
    case 4: {
      return "keydown";
    }
    default: {
      return "keyup";
    }
  }
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement2onGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, ev, fun) {
  const desp = new _M0TP48Arcelyth5aitne3src3dom9EventDesp(_M0MP48Arcelyth5aitne3src3dom9EventType10to__string(ev), true, false);
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: _M0FP48Arcelyth5aitne3src3dom2on(desp, fun), method_table: _M0FP084Arcelyth_2faitne_2fsrc_2fdom_2fOn_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement2onGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, ev, fun) {
  const desp = new _M0TP48Arcelyth5aitne3src3dom9EventDesp(_M0MP48Arcelyth5aitne3src3dom9EventType10to__string(ev), true, false);
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: _M0FP48Arcelyth5aitne3src3dom2on(desp, fun), method_table: _M0FP084Arcelyth_2faitne_2fsrc_2fdom_2fOn_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: s, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: s, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: s, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: s, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: s, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: s, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: s, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: s, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s) {
  return _M0MP48Arcelyth5aitne3src3dom11HtmlElement9add__attrGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, { self: s, method_table: _M0FP0133Arcelyth_2faitne_2fsrc_2fdom_2fStyle_5bArcelyth_2faitne_2fsrc_2fdom_2fIntoStyle_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute });
}
function _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render5build(self) {
  const states = [];
  const _bind$3 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const kid = self[_];
      _M0MPC15array5Array4pushGRP48Arcelyth5aitne8examples5bench3RowE(states, kid.method_table.method_1(kid.self));
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState8Fragment(new _M0TP48Arcelyth5aitne3src3dom13FragmentState(states));
}
function _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom6Render7rebuild(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 3) {
    const _Fragment = _bind$3;
    const _frag = _Fragment._0;
    const len = self.length;
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < len) {
        const child_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(_frag.children, i));
        const _tmp$3 = _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(self, i);
        _tmp$3.method_table.method_2(_tmp$3.self, child_ref);
        _M0MPC15array5Array3setGRP48Arcelyth5aitne8examples5bench3RowE(_frag.children, i, child_ref.val);
        _tmp$2 = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    return;
  }
}
function _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self) {
  let len = 0;
  const _bind$3 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const kid = self[_];
      len = len + kid.method_table.method_3(kid.self) | 0;
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return len;
}
function _M0IPC15array5ArrayP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self, buf, pos) {
  const _bind$3 = self.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const kid = self[_];
      kid.method_table.method_5(kid.self, buf, pos);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom6Render5build(self) {
  const node = _M0FP48Arcelyth5aitne3src3ffi24prim__create__text__node(_M0FP48Arcelyth5aitne3src3dom8document(), self.val);
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState4Text(new _M0TP48Arcelyth5aitne3src3dom9TextState(node));
}
function _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom6Render7rebuild(_self, _state) {}
function _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom10RenderHtml9html__len(self) {
  return self.val.length;
}
function _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self, buf, _pos) {
  _M0IPB13StringBuilderPB6Logger13write__string(buf, self.val);
}
function _M0FP48Arcelyth5aitne3src3dom9text__dyn(f) {
  return new _M0TP48Arcelyth5aitne3src3dom11DynTextNode(f);
}
function _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom6Render5build(self) {
  const _tmp$2 = _M0FP48Arcelyth5aitne3src3dom8document();
  const _func = self.getter;
  const node = _M0FP48Arcelyth5aitne3src3ffi24prim__create__text__node(_tmp$2, _func());
  _M0MP48Arcelyth5aitne3src8reactive6Effect3newGuE((_discard_) => {
    const _tmp$3 = _M0FP48Arcelyth5aitne3src3ffi14text__as__node(node);
    const _func$2 = self.getter;
    _M0FP48Arcelyth5aitne3src3ffi14dom__set__text(_tmp$3, _func$2());
  });
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState4Text(new _M0TP48Arcelyth5aitne3src3dom9TextState(node));
}
function _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom6Render7rebuild(_self, _state) {}
function _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom10RenderHtml9html__len(_self) {
  return 0;
}
function _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__buf(self, buf, _pos) {
  const _func = self.getter;
  _M0IPB13StringBuilderPB6Logger13write__string(buf, _func());
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, s) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s), method_table: _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagH1_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, s) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s), method_table: _M0FP0214Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagDiv_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, s) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s), method_table: _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTd_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, s) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s), method_table: _M0FP0212Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagA_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, s) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s), method_table: _M0FP0215Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagSpan_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, s) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s), method_table: _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTr_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, s) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s), method_table: _M0FP0216Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTbody_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, s) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s), method_table: _M0FP0216Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTable_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom11HtmlElementP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(self, s) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5styleGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom9IntoStyleE(self, s), method_table: _M0FP0217Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagButton_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom8TextNodeP48Arcelyth5aitne3src3dom4View5style(self, _i) {
  return { self: self, method_table: _M0FP085Arcelyth_2faitne_2fsrc_2fdom_2fTextNode_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom11DynTextNodeP48Arcelyth5aitne3src3dom4View5style(self, _i) {
  return { self: self, method_table: _M0FP088Arcelyth_2faitne_2fsrc_2fdom_2fDynTextNode_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0FP48Arcelyth5aitne3src3dom9for__nodeGRP48Arcelyth5aitne8examples5bench3RowsE(each, key, render) {
  return { self: new _M0TP48Arcelyth5aitne3src3dom7ForNodeGRP48Arcelyth5aitne8examples5bench3RowsE(each, key, render), method_table: _M0FP0143Arcelyth_2faitne_2fsrc_2fdom_2fForNode_5bArcelyth_2faitne_2fexamples_2fbench_2fRow_2c_20String_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom6Render5buildGRP48Arcelyth5aitne8examples5bench3RowsE(self) {
  const start = _M0FP48Arcelyth5aitne3src3ffi20dom__create__comment("for-start");
  const end = _M0FP48Arcelyth5aitne3src3ffi20dom__create__comment("for-end");
  const each = self.each;
  const key_fn = self.key;
  const render_fn = self.render;
  const _bind$3 = [];
  const cache = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_M0MPC17hashmap7HashMap7HashMapGsRP48Arcelyth5aitne3src3dom11RenderStateE(new _M0TPB9ArrayViewGUsRP48Arcelyth5aitne3src3dom11RenderStateEE(_bind$3, 0, 0), undefined));
  const mounted = _M0FPC13ref3newGbE(false);
  const parent_ref = _M0FPC13ref3newGRP48Arcelyth5aitne3src3dom9AttrStateE(_M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4None__);
  const do_reconcile = (_discard_) => {
    const items = each();
    if (mounted.val) {
      const _bind$4 = parent_ref.val;
      let parent;
      if (_bind$4.$tag === 1) {
        const _Some = _bind$4;
        parent = _Some._0;
      } else {
        return undefined;
      }
      const old_cache = cache.val;
      const _bind$5 = [];
      const new_cache = _M0MPC17hashmap7HashMap7HashMapGsRP48Arcelyth5aitne3src3dom11RenderStateE(new _M0TPB9ArrayViewGUsRP48Arcelyth5aitne3src3dom11RenderStateEE(_bind$5, 0, 0), undefined);
      const _bind$6 = [];
      const used_old_keys = _M0MPC17hashset7HashSet7HashSetGsE(new _M0TPB9ArrayViewGsE(_bind$6, 0, 0), undefined);
      let current_node_opt = _M0FP48Arcelyth5aitne3src3dom18dom__next__sibling(start);
      const _bind$7 = items.length;
      let _tmp$2 = 0;
      while (true) {
        const _ = _tmp$2;
        if (_ < _bind$7) {
          const item = items[_];
          const k = key_fn(item);
          const _bind$8 = _M0MPC17hashmap7HashMap3getGsRP48Arcelyth5aitne3src3dom11RenderStateE(old_cache, k);
          if (_bind$8 === undefined) {
            const child_view = render_fn(item);
            const child_state = child_view.method_table.method_1(child_view.self);
            _M0MPC17hashmap7HashMap3setGsRP48Arcelyth5aitne3src3dom11RenderStateE(new_cache, k, child_state);
            const _bind$9 = current_node_opt;
            if (_bind$9.$tag === 1) {
              const _Some = _bind$9;
              const _cur_n = _Some._0;
              _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(child_state, parent, _cur_n);
            } else {
              _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(child_state, parent, end);
            }
          } else {
            const _Some = _bind$8;
            const _old_state = _Some;
            _M0MPC17hashset7HashSet3addGsE(used_old_keys, k);
            _M0MPC17hashmap7HashMap3setGsRP48Arcelyth5aitne3src3dom11RenderStateE(new_cache, k, _old_state);
            const nodes = _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable8elements(_old_state);
            const _bind$9 = nodes.length;
            let _tmp$3 = 0;
            while (true) {
              const _$2 = _tmp$3;
              if (_$2 < _bind$9) {
                const n = nodes[_$2];
                const _bind$10 = current_node_opt;
                let is_match;
                if (_bind$10.$tag === 1) {
                  const _Some$2 = _bind$10;
                  const _cur_n = _Some$2._0;
                  is_match = _M0FP48Arcelyth5aitne3src3ffi14prim__node__eq(n, _cur_n);
                } else {
                  is_match = false;
                }
                if (is_match) {
                  const _bind$11 = current_node_opt;
                  if (_bind$11.$tag === 1) {
                    const _Some$2 = _bind$11;
                    const _cur_n = _Some$2._0;
                    current_node_opt = _M0FP48Arcelyth5aitne3src3dom18dom__next__sibling(_cur_n);
                  }
                } else {
                  const _bind$11 = current_node_opt;
                  if (_bind$11.$tag === 1) {
                    const _Some$2 = _bind$11;
                    const _cur_n = _Some$2._0;
                    _M0FP48Arcelyth5aitne3src3ffi19dom__insert__before(parent, n, _cur_n);
                  } else {
                    _M0FP48Arcelyth5aitne3src3ffi11dom__append(parent, n);
                  }
                }
                _tmp$3 = _$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
          _tmp$2 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const _it = _M0MPC17hashmap7HashMap4keysGsRP48Arcelyth5aitne3src3dom11RenderStateE(old_cache);
      while (true) {
        const _bind$8 = _M0MPB4Iter4nextGsE(_it);
        if (_bind$8 === undefined) {
          break;
        } else {
          const _Some = _bind$8;
          const _old_k = _Some;
          if (!_M0MPC17hashset7HashSet8containsGsE(used_old_keys, _old_k)) {
            const _bind$9 = _M0MPC17hashmap7HashMap3getGsRP48Arcelyth5aitne3src3dom11RenderStateE(old_cache, _old_k);
            if (_bind$9 === undefined) {
            } else {
              const _Some$2 = _bind$9;
              const _old_state = _Some$2;
              _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable7unmount(_old_state);
            }
          } else {
            continue;
          }
          continue;
        }
      }
      cache.val = new_cache;
      return;
    } else {
      return;
    }
  };
  _M0MP48Arcelyth5aitne3src8reactive6Effect3newGuE(do_reconcile);
  const init = (parent) => {
    parent_ref.val = new _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi4NodeE4Some(parent);
    const items = each();
    const _bind$4 = [];
    const init_cache = _M0MPC17hashmap7HashMap7HashMapGsRP48Arcelyth5aitne3src3dom11RenderStateE(new _M0TPB9ArrayViewGUsRP48Arcelyth5aitne3src3dom11RenderStateEE(_bind$4, 0, 0), undefined);
    const _bind$5 = items.length;
    let _tmp$2 = 0;
    while (true) {
      const _ = _tmp$2;
      if (_ < _bind$5) {
        const item = items[_];
        const k = key_fn(item);
        const child_view = render_fn(item);
        const child_state = child_view.method_table.method_1(child_view.self);
        _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(child_state, parent, end);
        _M0MPC17hashmap7HashMap3setGsRP48Arcelyth5aitne3src3dom11RenderStateE(init_cache, k, child_state);
        _tmp$2 = _ + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    cache.val = init_cache;
    mounted.val = true;
  };
  return new _M0DTP48Arcelyth5aitne3src3dom11RenderState10MultiBlock(new _M0TP48Arcelyth5aitne3src3dom15MultiBlockState(start, end, init, undefined));
}
function _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom6Render7rebuildGRP48Arcelyth5aitne8examples5bench3RowsE(_self, _state) {}
function _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom10RenderHtml9html__lenGRP48Arcelyth5aitne8examples5bench3RowsE(self) {
  let len = 0;
  const _func = self.each;
  const items = _func();
  const _bind$3 = items.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const item = items[_];
      const _tmp$3 = len;
      const _func$2 = self.render;
      const _tmp$4 = _func$2(item);
      len = _tmp$3 + _tmp$4.method_table.method_3(_tmp$4.self) | 0;
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return len;
}
function _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom10RenderHtml19to__html__with__bufGRP48Arcelyth5aitne8examples5bench3RowsE(self, buf, pos) {
  const _func = self.each;
  const items = _func();
  const _bind$3 = items.length;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp$2;
    if (_ < _bind$3) {
      const item = items[_];
      const _func$2 = self.render;
      const _tmp$3 = _func$2(item);
      _tmp$3.method_table.method_5(_tmp$3.self, buf, pos);
      _tmp$2 = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0IP48Arcelyth5aitne3src3dom7ForNodeP48Arcelyth5aitne3src3dom4View5styleGRP48Arcelyth5aitne8examples5bench3RowsE(self, _s) {
  return { self: self, method_table: _M0FP0143Arcelyth_2faitne_2fsrc_2fdom_2fForNode_5bArcelyth_2faitne_2fexamples_2fbench_2fRow_2c_20String_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0FP48Arcelyth5aitne3src3dom20add__event__listener(el, name, cb) {
  const handle = _M0FP48Arcelyth5aitne3src3ffi26prim__add__event__listener(el, name, cb);
  return new _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi11EventHandleE4Some(handle);
}
function _M0MP48Arcelyth5aitne3src3dom2On6attach(self, el) {
  const wrapped_fun = (ev) => {
    _M0MP48Arcelyth5aitne3src8reactive5Owner6with__GuE(self.owner, () => {
      const _func = self.fun;
      _func(ev);
    });
  };
  return _M0FP48Arcelyth5aitne3src3dom20add__event__listener(el, self.event.name, wrapped_fun);
}
function _M0FP48Arcelyth5aitne3src3dom29add__event__listener__capture(el, name, cb) {
  const handle = _M0FP48Arcelyth5aitne3src3ffi35prim__add__event__listener__capture(el, name, cb);
  return new _M0DTPC16option6OptionGRP48Arcelyth5aitne3src3ffi11EventHandleE4Some(handle);
}
function _M0MP48Arcelyth5aitne3src3dom2On15attach__capture(self, el) {
  const wrapped_fun = (ev) => {
    _M0MP48Arcelyth5aitne3src8reactive5Owner6with__GuE(self.owner, () => {
      const _func = self.fun;
      _func(ev);
    });
  };
  return _M0FP48Arcelyth5aitne3src3dom29add__event__listener__capture(el, self.event.name, wrapped_fun);
}
function _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute9html__len(_self) {
  return 0;
}
function _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute8to__html(_self, _b, _c, _s, _i) {}
function _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute5build(self, el) {
  const cleanup = self.event.capture ? _M0MP48Arcelyth5aitne3src3dom2On15attach__capture(self, el) : _M0MP48Arcelyth5aitne3src3dom2On6attach(self, el);
  return new _M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair(new _M0DTP48Arcelyth5aitne3src3dom9AttrState7Element(el), new _M0DTP48Arcelyth5aitne3src3dom9AttrState10EventBound(cleanup));
}
function _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute7rebuild(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 4) {
    const _Pair = _bind$3;
    const _x = _Pair._0;
    if (_x.$tag === 3) {
      const _Element = _x;
      const _el = _Element._0;
      const _x$2 = _Pair._1;
      if (_x$2.$tag === 6) {
        const _EventBound = _x$2;
        const _old_cleanup = _EventBound._0;
        _M0MP48Arcelyth5aitne3src3dom18RemoveEventHandler6invoke(_old_cleanup);
        const new_cleanup = self.event.capture ? _M0MP48Arcelyth5aitne3src3dom2On15attach__capture(self, _el) : _M0MP48Arcelyth5aitne3src3dom2On6attach(self, _el);
        state.val = new _M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair(new _M0DTP48Arcelyth5aitne3src3dom9AttrState7Element(_el), new _M0DTP48Arcelyth5aitne3src3dom9AttrState10EventBound(new_cleanup));
        return;
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute12dry__resolve(_self) {}
function _M0IP48Arcelyth5aitne3src3dom2OnP48Arcelyth5aitne3src3dom9Attribute9add__attr(self, attr) {
  return { self: { _0: { self: self, method_table: _M0FP084Arcelyth_2faitne_2fsrc_2fdom_2fOn_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute }, _1: attr }, method_table: _M0FP0143_28Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_2c_20Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_29_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute };
}
function _M0FP48Arcelyth5aitne3src3dom14button_2einner(children) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(undefined, _M0MP48Arcelyth5aitne3src3dom8AttrList3new(), children);
}
function _M0FP48Arcelyth5aitne3src3dom11div_2einner(children) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(undefined, _M0MP48Arcelyth5aitne3src3dom8AttrList3new(), children);
}
function _M0FP48Arcelyth5aitne3src3dom10h1_2einner(children) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagH1RPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(undefined, _M0MP48Arcelyth5aitne3src3dom8AttrList3new(), children);
}
function _M0FP48Arcelyth5aitne3src3dom12span_2einner(children) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(undefined, _M0MP48Arcelyth5aitne3src3dom8AttrList3new(), children);
}
function _M0FP48Arcelyth5aitne3src3dom4span(children$46$opt) {
  let children;
  if (children$46$opt.$tag === 1) {
    const _Some = children$46$opt;
    children = _Some._0;
  } else {
    children = [];
  }
  return _M0FP48Arcelyth5aitne3src3dom12span_2einner(children);
}
function _M0FP48Arcelyth5aitne3src3dom13table_2einner(children) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(undefined, _M0MP48Arcelyth5aitne3src3dom8AttrList3new(), children);
}
function _M0FP48Arcelyth5aitne3src3dom13tbody_2einner(children) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom8TagTbodyRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(undefined, _M0MP48Arcelyth5aitne3src3dom8AttrList3new(), children);
}
function _M0FP48Arcelyth5aitne3src3dom10td_2einner(children) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(undefined, _M0MP48Arcelyth5aitne3src3dom8AttrList3new(), children);
}
function _M0FP48Arcelyth5aitne3src3dom2td(children$46$opt) {
  let children;
  if (children$46$opt.$tag === 1) {
    const _Some = children$46$opt;
    children = _Some._0;
  } else {
    children = [];
  }
  return _M0FP48Arcelyth5aitne3src3dom10td_2einner(children);
}
function _M0FP48Arcelyth5aitne3src3dom10tr_2einner(children) {
  return new _M0TP48Arcelyth5aitne3src3dom11HtmlElementGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(undefined, _M0MP48Arcelyth5aitne3src3dom8AttrList3new(), children);
}
function _M0FP48Arcelyth5aitne3src3dom14dom__get__body() {
  return _M0FP48Arcelyth5aitne3src3ffi15prim__get__body(_M0FP48Arcelyth5aitne3src3dom8document());
}
function _M0FP48Arcelyth5aitne3src3dom15mount__to__body(app) {
  const owner = _M0MP48Arcelyth5aitne3src8reactive5Owner3new();
  return _M0MP48Arcelyth5aitne3src8reactive5Owner6with__GRP48Arcelyth5aitne3src3dom11RenderStateE(owner, () => {
    const body_node = _M0FP48Arcelyth5aitne3src3dom14dom__get__body();
    const _tmp$2 = app();
    const state = _tmp$2.method_table.method_1(_tmp$2.self);
    _M0IP48Arcelyth5aitne3src3dom11RenderStateP48Arcelyth5aitne3src3dom9Mountable5mount(state, body_node, _M0FP48Arcelyth5aitne3src3ffi15dom__null__node());
    return state;
  });
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute9html__lenGsE(_self) {
  return 0;
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute9html__lenGRP48Arcelyth5aitne3src3dom7RxClassGsEE(_self) {
  return 0;
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute8to__htmlGsE(_self, _b, _c, _s, _i) {}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute8to__htmlGRP48Arcelyth5aitne3src3dom7RxClassGsEE(_self, _b, _c, _s, _i) {}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute5buildGsE(self, el) {
  return _M0IPC16string6StringP48Arcelyth5aitne3src3dom9IntoClass5build(self, el);
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute5buildGRP48Arcelyth5aitne3src3dom7RxClassGsEE(self, el) {
  return _M0IP48Arcelyth5aitne3src3dom7RxClassP48Arcelyth5aitne3src3dom9IntoClass5buildGsE(self, el);
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute7rebuildGsE(self, state) {
  _M0IPC16string6StringP48Arcelyth5aitne3src3dom9IntoClass7rebuild(self, state);
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute7rebuildGRP48Arcelyth5aitne3src3dom7RxClassGsEE(self, state) {
  _M0IP48Arcelyth5aitne3src3dom7RxClassP48Arcelyth5aitne3src3dom9IntoClass7rebuildGsE(self, state);
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute12dry__resolveGsE(self) {
  _M0IPC16string6StringP48Arcelyth5aitne3src3dom9IntoClass12dry__resolve(self);
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute12dry__resolveGRP48Arcelyth5aitne3src3dom7RxClassGsEE(self) {
  _M0IP48Arcelyth5aitne3src3dom7RxClassP48Arcelyth5aitne3src3dom9IntoClass12dry__resolveGsE(self);
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute9add__attrGsE(self, attr) {
  return { self: { _0: { self: self, method_table: _M0FP099Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bString_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute }, _1: attr }, method_table: _M0FP0143_28Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_2c_20Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_29_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute };
}
function _M0IP48Arcelyth5aitne3src3dom5ClassP48Arcelyth5aitne3src3dom9Attribute9add__attrGRP48Arcelyth5aitne3src3dom7RxClassGsEE(self, attr) {
  return { self: { _0: { self: self, method_table: _M0FP0143Arcelyth_2faitne_2fsrc_2fdom_2fClass_5bArcelyth_2faitne_2fsrc_2fdom_2fRxClass_5bString_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute }, _1: attr }, method_table: _M0FP0143_28Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_2c_20Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_29_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute };
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom9IntoClass5build(self, el) {
  _M0FP48Arcelyth5aitne3src3ffi14dom__set__attr(el, "class", self);
  return new _M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair(new _M0DTP48Arcelyth5aitne3src3dom9AttrState7Element(el), new _M0DTP48Arcelyth5aitne3src3dom9AttrState3Str(self));
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom9IntoClass7rebuild(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 4) {
    const _Pair = _bind$3;
    const _x = _Pair._0;
    if (_x.$tag === 3) {
      const _Element = _x;
      const _el = _Element._0;
      const _x$2 = _Pair._1;
      if (_x$2.$tag === 1) {
        const _Str = _x$2;
        const _old = _Str._0;
        if (!(self === _old)) {
          _M0FP48Arcelyth5aitne3src3ffi14dom__set__attr(_el, "class", self);
          state.val = new _M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair(new _M0DTP48Arcelyth5aitne3src3dom9AttrState7Element(_el), new _M0DTP48Arcelyth5aitne3src3dom9AttrState3Str(self));
          return;
        } else {
          return;
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    return;
  }
}
function _M0IPC16string6StringP48Arcelyth5aitne3src3dom9IntoClass12dry__resolve(_self) {}
function _M0IP48Arcelyth5aitne3src3dom7RxClassP48Arcelyth5aitne3src3dom9IntoClass12dry__resolveGsE(_self) {}
function _M0IP48Arcelyth5aitne3src3dom7RxClassP48Arcelyth5aitne3src3dom9IntoClass5buildGsE(self, el) {
  return new _M0DTP48Arcelyth5aitne3src3dom9AttrState12RenderEffect(_M0MP48Arcelyth5aitne3src8reactive12RenderEffect3newGRP48Arcelyth5aitne3src3dom9AttrStateE((prev) => {
    const _func = self;
    const val = _func();
    if (prev === undefined) {
      return _M0IPC16string6StringP48Arcelyth5aitne3src3dom9IntoClass5build(val, el);
    } else {
      const _Some = prev;
      const _state = _Some;
      const r = _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(_state);
      _M0IPC16string6StringP48Arcelyth5aitne3src3dom9IntoClass7rebuild(val, r);
      return r.val;
    }
  }));
}
function _M0IP48Arcelyth5aitne3src3dom7RxClassP48Arcelyth5aitne3src3dom9IntoClass7rebuildGsE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 5) {
    const _RenderEffect = _bind$3;
    const _re = _RenderEffect._0;
    const pre_val = _M0MP48Arcelyth5aitne3src8reactive12RenderEffect11take__valueGRP48Arcelyth5aitne3src3dom9AttrStateE(_re.val);
    state.val = new _M0DTP48Arcelyth5aitne3src3dom9AttrState12RenderEffect(_M0MP48Arcelyth5aitne3src8reactive12RenderEffect16new__with__valueGRP48Arcelyth5aitne3src3dom9AttrStateE((prev) => {
      const _func = self;
      const val = _func();
      if (prev === undefined) {
        _M0FPB7printlnGsE("Error: Unreachable");
        return $panic();
      } else {
        const _Some = prev;
        const _state = _Some;
        const r = _M0MPC13ref3Ref3RefGRP48Arcelyth5aitne3src8reactive11EffectInnerGiEE(_state);
        _M0IPC16string6StringP48Arcelyth5aitne3src3dom9IntoClass7rebuild(val, r);
        return r.val;
      }
    }, pre_val));
    return;
  } else {
    return;
  }
}
function _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute9html__lenGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE(self) {
  const _tmp$2 = self._0;
  const _tmp$3 = _tmp$2.method_table.method_0(_tmp$2.self);
  const _tmp$4 = self._1;
  return _tmp$3 + _tmp$4.method_table.method_0(_tmp$4.self) | 0;
}
function _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute8to__htmlGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE(self, buf, class_, style, inner_html) {
  const _tmp$2 = self._0;
  _tmp$2.method_table.method_1(_tmp$2.self, buf, class_, style, inner_html);
  const _tmp$3 = self._1;
  _tmp$3.method_table.method_1(_tmp$3.self, buf, class_, style, inner_html);
}
function _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute5buildGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE(self, el) {
  const _tmp$2 = self._0;
  const _tmp$3 = self._1;
  return new _M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair(_tmp$2.method_table.method_2(_tmp$2.self, el), _tmp$3.method_table.method_2(_tmp$3.self, el));
}
function _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute7rebuildGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE(self, state) {
  const _bind$3 = state.val;
  if (_bind$3.$tag === 4) {
    const _Pair = _bind$3;
    const _s0 = _Pair._0;
    const _s1 = _Pair._1;
    const r0 = new _M0TPC13ref3RefGRP48Arcelyth5aitne3src3dom9AttrStateE(_s0);
    const r1 = new _M0TPC13ref3RefGRP48Arcelyth5aitne3src3dom9AttrStateE(_s1);
    const _tmp$2 = self._0;
    _tmp$2.method_table.method_3(_tmp$2.self, r0);
    const _tmp$3 = self._1;
    _tmp$3.method_table.method_3(_tmp$3.self, r1);
    state.val = new _M0DTP48Arcelyth5aitne3src3dom9AttrState4Pair(r0.val, r1.val);
    return;
  } else {
    return;
  }
}
function _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute12dry__resolveGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE(self) {
  const _tmp$2 = self._0;
  _tmp$2.method_table.method_4(_tmp$2.self);
  const _tmp$3 = self._1;
  _tmp$3.method_table.method_4(_tmp$3.self);
}
function _M0IPC15tuple6Tuple2P48Arcelyth5aitne3src3dom9Attribute9add__attrGRP48Arcelyth5aitne3src3dom9AttributeRP48Arcelyth5aitne3src3dom9AttributeE(self, attr) {
  return { self: { _0: { self: self, method_table: _M0FP0143_28Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_2c_20Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_29_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute }, _1: attr }, method_table: _M0FP0143_28Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_2c_20Arcelyth_2faitne_2fsrc_2fdom_2fAttribute_29_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eAttribute };
}
function _M0FP48Arcelyth5aitne8examples5bench14pseudo__random(max) {
  _M0FP48Arcelyth5aitne8examples5bench4seed.val = (Math.imul(_M0FP48Arcelyth5aitne8examples5bench4seed.val, 1103515245) | 0) + 12345 & 2147483647;
  return _M0FP48Arcelyth5aitne8examples5bench4seed.val % max | 0;
}
function _M0FP48Arcelyth5aitne8examples5bench11build__data(count) {
  const res = [];
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < count) {
      const adj = _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(_M0FP48Arcelyth5aitne8examples5bench10adjectives, _M0FP48Arcelyth5aitne8examples5bench14pseudo__random(_M0FP48Arcelyth5aitne8examples5bench10adjectives.length));
      const col = _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(_M0FP48Arcelyth5aitne8examples5bench6colors, _M0FP48Arcelyth5aitne8examples5bench14pseudo__random(_M0FP48Arcelyth5aitne8examples5bench6colors.length));
      const nou = _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(_M0FP48Arcelyth5aitne8examples5bench5nouns, _M0FP48Arcelyth5aitne8examples5bench14pseudo__random(_M0FP48Arcelyth5aitne8examples5bench5nouns.length));
      const label_str = `${adj} ${col} ${nou}`;
      const _bind$3 = _M0FP48Arcelyth5aitne3src8reactive14create__signalGsE(label_str);
      const _label = _bind$3._0;
      const _set_label = _bind$3._1;
      _M0MPC15array5Array4pushGRP48Arcelyth5aitne8examples5bench3RowE(res, new _M0TP48Arcelyth5aitne8examples5bench3Row(_M0FP48Arcelyth5aitne8examples5bench8next__id.val, _label, _set_label));
      _M0FP48Arcelyth5aitne8examples5bench8next__id.val = _M0FP48Arcelyth5aitne8examples5bench8next__id.val + 1 | 0;
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return res;
}
function _M0FP48Arcelyth5aitne8examples5bench3btn(id, text, on_click) {
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom11div_2einner([{ self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement4propGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0MP48Arcelyth5aitne3src3dom11HtmlElement4propGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0MP48Arcelyth5aitne3src3dom11HtmlElement2onGRP48Arcelyth5aitne3src3dom9TagButtonRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(_M0FP48Arcelyth5aitne3src3dom14button_2einner([{ self: _M0FP48Arcelyth5aitne3src3dom9text__dyn(() => text), method_table: _M0FP088Arcelyth_2faitne_2fsrc_2fdom_2fDynTextNode_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), 0, on_click), "type", "button"), "btn btn-primary btn-block"), "id", id), method_table: _M0FP0217Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagButton_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "col-sm-6 smallpad"), method_table: _M0FP0214Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagDiv_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
function _M0FP48Arcelyth5aitne8examples5bench3app() {
  const _bind$3 = _M0FP48Arcelyth5aitne3src8reactive14create__signalGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE([]);
  const _data = _bind$3._0;
  const _set_data = _bind$3._1;
  const _bind$4 = _M0FP48Arcelyth5aitne3src8reactive14create__signalGiE(-1);
  const _selected = _bind$4._0;
  const _set_selected = _bind$4._1;
  const run = (_discard_) => {
    _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_set_data, _M0FP48Arcelyth5aitne8examples5bench11build__data(1000));
  };
  const run_lots = (_discard_) => {
    _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_set_data, _M0FP48Arcelyth5aitne8examples5bench11build__data(10000));
  };
  const add = (_discard_) => {
    _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_set_data, _M0IPC15array5ArrayPB3Add3addGRP48Arcelyth5aitne8examples5bench3RowE(_M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_data), _M0FP48Arcelyth5aitne8examples5bench11build__data(1000)));
  };
  const update = (_discard_) => {
    const d = _M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_data);
    let _tmp$2 = 0;
    while (true) {
      const i = _tmp$2;
      if (i < d.length) {
        const row = _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(d, i);
        _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGsE(row.set_label, `${_M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGsE(row.label)} !!!`);
        _tmp$2 = i + 10 | 0;
        continue;
      } else {
        return;
      }
    }
  };
  const clear = (_discard_) => {
    _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_set_data, []);
  };
  const swap_rows = (_discard_) => {
    const d = _M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_data);
    if (d.length > 998) {
      const list = [];
      let _tmp$2 = 0;
      while (true) {
        const i = _tmp$2;
        if (i < d.length) {
          _M0MPC15array5Array4pushGRP48Arcelyth5aitne8examples5bench3RowE(list, _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(d, i));
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const item = _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(list, 1);
      _M0MPC15array5Array3setGRP48Arcelyth5aitne8examples5bench3RowE(list, 1, _M0MPC15array5Array2atGRP48Arcelyth5aitne8examples5bench3RowE(list, 998));
      _M0MPC15array5Array3setGRP48Arcelyth5aitne8examples5bench3RowE(list, 998, item);
      _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_set_data, list);
      return;
    } else {
      return;
    }
  };
  const selector = _M0MP48Arcelyth5aitne3src8reactive8Selector3newGiE(() => _M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGiE(_selected));
  return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom11div_2einner([{ self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom11div_2einner([{ self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom11div_2einner([{ self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom11div_2einner([{ self: _M0FP48Arcelyth5aitne3src3dom10h1_2einner([{ self: "Aitne", method_table: _M0FP052String_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), method_table: _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagH1_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "col-md-6"), method_table: _M0FP0214Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagDiv_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }, { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom11div_2einner([{ self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom6TagDivRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom11div_2einner([_M0FP48Arcelyth5aitne8examples5bench3btn("run", "Create 1,000 rows", run), _M0FP48Arcelyth5aitne8examples5bench3btn("runlots", "Create 10,000 rows", run_lots), _M0FP48Arcelyth5aitne8examples5bench3btn("add", "Append 1,000 rows", add), _M0FP48Arcelyth5aitne8examples5bench3btn("update", "Update every 10th row", update), _M0FP48Arcelyth5aitne8examples5bench3btn("clear", "Clear", clear), _M0FP48Arcelyth5aitne8examples5bench3btn("swaprows", "Swap Rows", swap_rows)]), "row"), method_table: _M0FP0214Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagDiv_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "col-md-6"), method_table: _M0FP0214Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagDiv_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "row"), method_table: _M0FP0214Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagDiv_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "jumbotron"), method_table: _M0FP0214Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagDiv_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }, { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom8TagTableRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom13table_2einner([{ self: _M0FP48Arcelyth5aitne3src3dom13tbody_2einner([_M0FP48Arcelyth5aitne3src3dom9for__nodeGRP48Arcelyth5aitne8examples5bench3RowsE(() => _M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_data), (row) => _M0MPC13int3Int18to__string_2einner(row.id, 10), (row) => {
    const row_id = row.id;
    const _tmp$2 = _M0FP48Arcelyth5aitne3src3dom10tr_2einner([{ self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom10td_2einner([{ self: _M0FP48Arcelyth5aitne3src3dom9text__dyn(() => _M0MPC13int3Int18to__string_2einner(row_id, 10)), method_table: _M0FP088Arcelyth_2faitne_2fsrc_2fdom_2fDynTextNode_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "col-md-1"), method_table: _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTd_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }, { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom10td_2einner([{ self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement2onGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(_M0FP48Arcelyth5aitne3src3dom9a_2einner([{ self: _M0FP48Arcelyth5aitne3src3dom9text__dyn(() => _M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGsE(row.label)), method_table: _M0FP088Arcelyth_2faitne_2fsrc_2fdom_2fDynTextNode_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), 0, (_discard_) => {
      _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGiE(_set_selected, row_id);
    }), method_table: _M0FP0212Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagA_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "col-md-4"), method_table: _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTd_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }, { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom10td_2einner([{ self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement2onGRP48Arcelyth5aitne3src3dom4TagARPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE(_M0FP48Arcelyth5aitne3src3dom9a_2einner([{ self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement4propGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom4span(_M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE4None__), "glyphicon glyphicon-remove"), "aria-hidden", "true"), method_table: _M0FP0215Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagSpan_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), 0, (_discard_) => {
      const _p = _M0MP48Arcelyth5aitne3src8reactive10ReadSignal3getGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_data);
      const _p$2 = [];
      const _p$3 = _p.length;
      let _tmp$3 = 0;
      while (true) {
        const _p$4 = _tmp$3;
        if (_p$4 < _p$3) {
          const _p$5 = _p[_p$4];
          if (_p$5.id !== row_id) {
            _M0MPC15array5Array4pushGRP48Arcelyth5aitne8examples5bench3RowE(_p$2, _p$5);
          }
          _tmp$3 = _p$4 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const filtered = _p$2;
      _M0MP48Arcelyth5aitne3src8reactive11WriteSignal3setGRPB5ArrayGRP48Arcelyth5aitne8examples5bench3RowEE(_set_data, filtered);
    }), method_table: _M0FP0212Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagA_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "col-md-1"), method_table: _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTd_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }, { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom5TagTdRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom2td(_M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE4None__), "col-md-6"), method_table: _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTd_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]);
    const _p = () => _M0MP48Arcelyth5aitne3src8reactive8Selector8selectedGiE(selector, row_id) ? "danger" : "";
    return { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom5TagTrRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewERP48Arcelyth5aitne3src3dom7RxClassGsEE(_tmp$2, _p), method_table: _M0FP0213Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTr_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
  })]), method_table: _M0FP0216Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTbody_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "table table-hover table-striped test-data"), method_table: _M0FP0216Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagTable_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }, { self: _M0MP48Arcelyth5aitne3src3dom11HtmlElement4propGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0MP48Arcelyth5aitne3src3dom11HtmlElement5classGRP48Arcelyth5aitne3src3dom7TagSpanRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEsE(_M0FP48Arcelyth5aitne3src3dom4span(_M0DTPC16option6OptionGRPB5ArrayGRP48Arcelyth5aitne3src3dom4ViewEE4None__), "preloadicon glyphicon glyphicon-remove"), "aria-hidden", "true"), method_table: _M0FP0215Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagSpan_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView }]), "container"), method_table: _M0FP0214Arcelyth_2faitne_2fsrc_2fdom_2fHtmlElement_5bArcelyth_2faitne_2fsrc_2fdom_2fTagDiv_2c_20moonbitlang_2fcore_2fbuiltin_2fArray_5bArcelyth_2faitne_2fsrc_2fdom_2fView_5d_5d_24as_24_40Arcelyth_2faitne_2fsrc_2fdom_2eView };
}
(() => {
  _M0FP48Arcelyth5aitne3src3dom15mount__to__body(() => _M0FP48Arcelyth5aitne8examples5bench3app());
})();
