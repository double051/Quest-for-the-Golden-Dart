function Isolate() {}
init();

var $$ = {};
var $ = Isolate.$isolateProperties;
$$.ExceptionImplementation = {"":
 ["_msg"],
 super: "Object",
 toString$0: function() {
  var t1 = this._msg;
  return t1 == null ? 'Exception' : 'Exception: ' + $.S(t1);
 }
};

$$.HashMapImplementation = {"":
 ["_numberOfDeleted", "_numberOfEntries", "_loadLimit", "_values", "_keys?"],
 super: "Object",
 toString$0: function() {
  return $.Maps_mapToString(this);
 },
 containsKey$1: function(key) {
  return !$.eqB(this._probeForLookup$1(key), -1);
 },
 getValues$0: function() {
  var t1 = ({});
  var list = $.ListFactory_List($.get$length(this));
  $.setRuntimeTypeInfo(list, ({E: 'V'}));
  t1.i_1 = 0;
  this.forEach$1(new $.HashMapImplementation_getValues__(list, t1));
  return list;
 },
 getKeys$0: function() {
  var t1 = ({});
  var list = $.ListFactory_List($.get$length(this));
  $.setRuntimeTypeInfo(list, ({E: 'K'}));
  t1.i_10 = 0;
  this.forEach$1(new $.HashMapImplementation_getKeys__(list, t1));
  return list;
 },
 forEach$1: function(f) {
  var length$ = $.get$length(this._keys);
  if (typeof length$ !== 'number') return this.forEach$1$bailout(1, f, length$);
  for (var i = 0; i < length$; ++i) {
    var key = $.index(this._keys, i);
    !(key == null) && !(key === $.CTC3) && f.$call$2(key, $.index(this._values, i));
  }
 },
 forEach$1$bailout: function(state, f, length$) {
  for (var i = 0; $.ltB(i, length$); ++i) {
    var key = $.index(this._keys, i);
    !(key == null) && !(key === $.CTC3) && f.$call$2(key, $.index(this._values, i));
  }
 },
 get$length: function() {
  return this._numberOfEntries;
 },
 length$0: function() { return this.get$length().$call$0(); },
 isEmpty$0: function() {
  return $.eq(this._numberOfEntries, 0);
 },
 remove$1: function(key) {
  var index = this._probeForLookup$1(key);
  if ($.geB(index, 0)) {
    this._numberOfEntries = $.sub(this._numberOfEntries, 1);
    var value = $.index(this._values, index);
    $.indexSet(this._values, index, null);
    $.indexSet(this._keys, index, $.CTC3);
    this._numberOfDeleted = $.add(this._numberOfDeleted, 1);
    return value;
  }
  return;
 },
 operator$index$1: function(key) {
  var index = this._probeForLookup$1(key);
  if (typeof index !== 'number') return this.operator$index$1$bailout(1, index, 0);
  if (index < 0) return;
  var t1 = this._values;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(2, t1, index);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      index = env0;
      break;
    case 2:
      t1 = env0;
      index = env1;
      break;
  }
  switch (state) {
    case 0:
      var index = this._probeForLookup$1(key);
    case 1:
      state = 0;
      if ($.ltB(index, 0)) return;
      var t1 = this._values;
    case 2:
      state = 0;
      return $.index(t1, index);
  }
 },
 operator$indexSet$2: function(key, value) {
  this._ensureCapacity$0();
  var index = this._probeForAdding$1(key);
  var t1 = $.index(this._keys, index);
  if (!(t1 == null)) {
    t1 = $.index(this._keys, index);
    t1 = t1 === $.CTC3;
  } else t1 = true;
  if (t1) this._numberOfEntries = $.add(this._numberOfEntries, 1);
  $.indexSet(this._keys, index, key);
  $.indexSet(this._values, index, value);
 },
 clear$0: function() {
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  var length$ = $.get$length(this._keys);
  if (typeof length$ !== 'number') return this.clear$0$bailout(1, length$);
  for (var i = 0; i < length$; ++i) {
    $.indexSet(this._keys, i, null);
    $.indexSet(this._values, i, null);
  }
 },
 clear$0$bailout: function(state, length$) {
  for (var i = 0; $.ltB(i, length$); ++i) {
    $.indexSet(this._keys, i, null);
    $.indexSet(this._values, i, null);
  }
 },
 _grow$1: function(newCapacity) {
  var capacity = $.get$length(this._keys);
  if (typeof capacity !== 'number') return this._grow$1$bailout(1, newCapacity, capacity, 0, 0);
  this._loadLimit = $.HashMapImplementation__computeLoadLimit(newCapacity);
  var oldKeys = this._keys;
  if (typeof oldKeys !== 'string' && (typeof oldKeys !== 'object' || oldKeys === null || (oldKeys.constructor !== Array && !oldKeys.is$JavaScriptIndexingBehavior()))) return this._grow$1$bailout(2, newCapacity, oldKeys, capacity, 0);
  var oldValues = this._values;
  if (typeof oldValues !== 'string' && (typeof oldValues !== 'object' || oldValues === null || (oldValues.constructor !== Array && !oldValues.is$JavaScriptIndexingBehavior()))) return this._grow$1$bailout(3, newCapacity, oldKeys, oldValues, capacity);
  this._keys = $.ListFactory_List(newCapacity);
  var t1 = $.ListFactory_List(newCapacity);
  $.setRuntimeTypeInfo(t1, ({E: 'V'}));
  this._values = t1;
  for (var i = 0; i < capacity; ++i) {
    t1 = oldKeys.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = oldKeys[i];
    if (t2 == null || t2 === $.CTC3) continue;
    t1 = oldValues.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t3 = oldValues[i];
    var newIndex = this._probeForAdding$1(t2);
    $.indexSet(this._keys, newIndex, t2);
    $.indexSet(this._values, newIndex, t3);
  }
  this._numberOfDeleted = 0;
 },
 _grow$1$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var newCapacity = env0;
      capacity = env1;
      break;
    case 2:
      newCapacity = env0;
      oldKeys = env1;
      capacity = env2;
      break;
    case 3:
      newCapacity = env0;
      oldKeys = env1;
      oldValues = env2;
      capacity = env3;
      break;
  }
  switch (state) {
    case 0:
      var capacity = $.get$length(this._keys);
    case 1:
      state = 0;
      this._loadLimit = $.HashMapImplementation__computeLoadLimit(newCapacity);
      var oldKeys = this._keys;
    case 2:
      state = 0;
      var oldValues = this._values;
    case 3:
      state = 0;
      this._keys = $.ListFactory_List(newCapacity);
      var t1 = $.ListFactory_List(newCapacity);
      $.setRuntimeTypeInfo(t1, ({E: 'V'}));
      this._values = t1;
      for (var i = 0; $.ltB(i, capacity); ++i) {
        var key = $.index(oldKeys, i);
        if (key == null || key === $.CTC3) continue;
        var value = $.index(oldValues, i);
        var newIndex = this._probeForAdding$1(key);
        $.indexSet(this._keys, newIndex, key);
        $.indexSet(this._values, newIndex, value);
      }
      this._numberOfDeleted = 0;
  }
 },
 _ensureCapacity$0: function() {
  var newNumberOfEntries = $.add(this._numberOfEntries, 1);
  if ($.geB(newNumberOfEntries, this._loadLimit)) {
    this._grow$1($.mul($.get$length(this._keys), 2));
    return;
  }
  var numberOfFree = $.sub($.sub($.get$length(this._keys), newNumberOfEntries), this._numberOfDeleted);
  $.gtB(this._numberOfDeleted, numberOfFree) && this._grow$1($.get$length(this._keys));
 },
 _probeForLookup$1: function(key) {
  var hash = $.HashMapImplementation__firstProbe($.hashCode(key), $.get$length(this._keys));
  for (var numberOfProbes = 1; true; ) {
    var existingKey = $.index(this._keys, hash);
    if (existingKey == null) return -1;
    if ($.eqB(existingKey, key)) return hash;
    var numberOfProbes0 = numberOfProbes + 1;
    hash = $.HashMapImplementation__nextProbe(hash, numberOfProbes, $.get$length(this._keys));
    numberOfProbes = numberOfProbes0;
  }
 },
 _probeForAdding$1: function(key) {
  var hash = $.HashMapImplementation__firstProbe($.hashCode(key), $.get$length(this._keys));
  if (hash !== (hash | 0)) return this._probeForAdding$1$bailout(1, key, hash, 0, 0, 0);
  for (var numberOfProbes = 1, insertionIndex = -1; true; ) {
    var t1 = this._keys;
    if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this._probeForAdding$1$bailout(2, numberOfProbes, hash, key, insertionIndex, t1);
    var t2 = t1.length;
    if (hash < 0 || hash >= t2) throw $.ioore(hash);
    t1 = t1[hash];
    if (t1 == null) {
      if (insertionIndex < 0) return hash;
      return insertionIndex;
    }
    if ($.eqB(t1, key)) return hash;
    if (insertionIndex < 0 && $.CTC3 === t1) insertionIndex = hash;
    var numberOfProbes0 = numberOfProbes + 1;
    hash = $.HashMapImplementation__nextProbe(hash, numberOfProbes, $.get$length(this._keys));
    if (hash !== (hash | 0)) return this._probeForAdding$1$bailout(3, key, numberOfProbes0, insertionIndex, hash, 0);
    numberOfProbes = numberOfProbes0;
  }
 },
 _probeForAdding$1$bailout: function(state, env0, env1, env2, env3, env4) {
  switch (state) {
    case 1:
      var key = env0;
      hash = env1;
      break;
    case 2:
      numberOfProbes = env0;
      hash = env1;
      key = env2;
      insertionIndex = env3;
      t1 = env4;
      break;
    case 3:
      key = env0;
      numberOfProbes0 = env1;
      insertionIndex = env2;
      hash = env3;
      break;
  }
  switch (state) {
    case 0:
      var hash = $.HashMapImplementation__firstProbe($.hashCode(key), $.get$length(this._keys));
    case 1:
      state = 0;
      var numberOfProbes = 1;
      var insertionIndex = -1;
    case 2:
    case 3:
      L0: while (true) {
        switch (state) {
          case 0:
            if (!true) break L0;
            var t1 = this._keys;
          case 2:
            state = 0;
            var existingKey = $.index(t1, hash);
            if (existingKey == null) {
              if ($.ltB(insertionIndex, 0)) return hash;
              return insertionIndex;
            }
            if ($.eqB(existingKey, key)) return hash;
            if ($.ltB(insertionIndex, 0) && $.CTC3 === existingKey) insertionIndex = hash;
            var numberOfProbes0 = numberOfProbes + 1;
            hash = $.HashMapImplementation__nextProbe(hash, numberOfProbes, $.get$length(this._keys));
          case 3:
            state = 0;
            numberOfProbes = numberOfProbes0;
        }
      }
  }
 },
 HashMapImplementation$0: function() {
  this._numberOfEntries = 0;
  this._numberOfDeleted = 0;
  this._loadLimit = $.HashMapImplementation__computeLoadLimit(8);
  this._keys = $.ListFactory_List(8);
  var t1 = $.ListFactory_List(8);
  $.setRuntimeTypeInfo(t1, ({E: 'V'}));
  this._values = t1;
 },
 is$Map: function() { return true; }
};

$$.HashSetImplementation = {"":
 ["_backingMap?"],
 super: "Object",
 toString$0: function() {
  return $.Collections_collectionToString(this);
 },
 iterator$0: function() {
  var t1 = $.HashSetIterator$(this);
  $.setRuntimeTypeInfo(t1, ({E: 'E'}));
  return t1;
 },
 get$length: function() {
  return $.get$length(this._backingMap);
 },
 length$0: function() { return this.get$length().$call$0(); },
 isEmpty$0: function() {
  return $.isEmpty(this._backingMap);
 },
 filter$1: function(f) {
  var result = $.HashSetImplementation$();
  $.setRuntimeTypeInfo(result, ({E: 'E'}));
  $.forEach(this._backingMap, new $.HashSetImplementation_filter__(result, f));
  return result;
 },
 forEach$1: function(f) {
  $.forEach(this._backingMap, new $.HashSetImplementation_forEach__(f));
 },
 addAll$1: function(collection) {
  $.forEach(collection, new $.HashSetImplementation_addAll__(this));
 },
 remove$1: function(value) {
  var t1 = this._backingMap;
  if (t1.containsKey$1(value) !== true) return false;
  t1.remove$1(value);
  return true;
 },
 contains$1: function(value) {
  return this._backingMap.containsKey$1(value);
 },
 add$1: function(value) {
  var t1 = this._backingMap;
  if (typeof t1 !== 'object' || t1 === null || ((t1.constructor !== Array || !!t1.immutable$list) && !t1.is$JavaScriptIndexingBehavior())) return this.add$1$bailout(1, t1, value);
  if (value !== (value | 0)) throw $.iae(value);
  var t2 = t1.length;
  if (value < 0 || value >= t2) throw $.ioore(value);
  t1[value] = value;
 },
 add$1$bailout: function(state, t1, value) {
  $.indexSet(t1, value, value);
 },
 clear$0: function() {
  $.clear(this._backingMap);
 },
 HashSetImplementation$0: function() {
  this._backingMap = $.HashMapImplementation$();
 },
 is$Collection: function() { return true; }
};

$$.HashSetIterator = {"":
 ["_nextValidIndex", "_entries"],
 super: "Object",
 _advance$0: function() {
  var t1 = this._entries;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this._advance$0$bailout(1, t1);
  var length$ = t1.length;
  var entry = null;
  do {
    var t2 = this._nextValidIndex + 1;
    this._nextValidIndex = t2;
    if (t2 >= length$) break;
    t2 = this._nextValidIndex;
    if (t2 !== (t2 | 0)) throw $.iae(t2);
    var t3 = t1.length;
    if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
    entry = t1[t2];
  } while ((entry == null || entry === $.CTC3));
 },
 _advance$0$bailout: function(state, t1) {
  var length$ = $.get$length(t1);
  var entry = null;
  do {
    var t2 = this._nextValidIndex + 1;
    this._nextValidIndex = t2;
    if ($.geB(t2, length$)) break;
    entry = $.index(t1, this._nextValidIndex);
  } while ((entry == null || entry === $.CTC3));
 },
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  var t1 = this._entries;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.next$0$bailout(1, t1);
  var t2 = this._nextValidIndex;
  if (t2 !== (t2 | 0)) throw $.iae(t2);
  var t3 = t1.length;
  if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
  t2 = t1[t2];
  this._advance$0();
  return t2;
 },
 next$0$bailout: function(state, t1) {
  var res = $.index(t1, this._nextValidIndex);
  this._advance$0();
  return res;
 },
 hasNext$0: function() {
  var t1 = this._nextValidIndex;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1, 0);
  var t2 = this._entries;
  if (typeof t2 !== 'string' && (typeof t2 !== 'object' || t2 === null || (t2.constructor !== Array && !t2.is$JavaScriptIndexingBehavior()))) return this.hasNext$0$bailout(2, t1, t2);
  var t3 = t2.length;
  if (t1 >= t3) return false;
  if (t1 !== (t1 | 0)) throw $.iae(t1);
  if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
  t1 = t2[t1];
  t1 === $.CTC3 && this._advance$0();
  t1 = this._nextValidIndex;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(3, t1, t2);
  return t1 < t2.length;
 },
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
    case 3:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._nextValidIndex;
    case 1:
      state = 0;
      var t2 = this._entries;
    case 2:
      state = 0;
      if ($.geB(t1, $.get$length(t2))) return false;
      t1 = $.index(t2, this._nextValidIndex);
      t1 === $.CTC3 && this._advance$0();
      t1 = this._nextValidIndex;
    case 3:
      state = 0;
      return $.lt(t1, $.get$length(t2));
  }
 },
 HashSetIterator$1: function(set_) {
  this._advance$0();
 }
};

$$._DeletedKeySentinel = {"":
 [],
 super: "Object"
};

$$.KeyValuePair = {"":
 ["value=", "key?"],
 super: "Object"
};

$$.LinkedHashMapImplementation = {"":
 ["_map", "_list"],
 super: "Object",
 toString$0: function() {
  return $.Maps_mapToString(this);
 },
 clear$0: function() {
  $.clear(this._map);
  $.clear(this._list);
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 get$length: function() {
  return $.get$length(this._map);
 },
 length$0: function() { return this.get$length().$call$0(); },
 containsKey$1: function(key) {
  return this._map.containsKey$1(key);
 },
 forEach$1: function(f) {
  $.forEach(this._list, new $.LinkedHashMapImplementation_forEach__(f));
 },
 getValues$0: function() {
  var t1 = ({});
  var list = $.ListFactory_List($.get$length(this));
  $.setRuntimeTypeInfo(list, ({E: 'V'}));
  t1.index_1 = 0;
  $.forEach(this._list, new $.LinkedHashMapImplementation_getValues__(list, t1));
  return list;
 },
 getKeys$0: function() {
  var t1 = ({});
  var list = $.ListFactory_List($.get$length(this));
  $.setRuntimeTypeInfo(list, ({E: 'K'}));
  t1.index_10 = 0;
  $.forEach(this._list, new $.LinkedHashMapImplementation_getKeys__(list, t1));
  return list;
 },
 remove$1: function(key) {
  var entry = this._map.remove$1(key);
  if (entry == null) return;
  entry.remove$0();
  return entry.get$element().get$value();
 },
 operator$index$1: function(key) {
  var t1 = this._map;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, key, t1);
  if (key !== (key | 0)) throw $.iae(key);
  var t2 = t1.length;
  if (key < 0 || key >= t2) throw $.ioore(key);
  t1 = t1[key];
  if (t1 == null) return;
  return t1.get$element().get$value();
 },
 operator$index$1$bailout: function(state, key, t1) {
  var entry = $.index(t1, key);
  if (entry == null) return;
  return entry.get$element().get$value();
 },
 operator$indexSet$2: function(key, value) {
  var t1 = this._map;
  if (typeof t1 !== 'object' || t1 === null || ((t1.constructor !== Array || !!t1.immutable$list) && !t1.is$JavaScriptIndexingBehavior())) return this.operator$indexSet$2$bailout(1, key, value, t1);
  if (t1.containsKey$1(key) === true) {
    if (key !== (key | 0)) throw $.iae(key);
    var t2 = t1.length;
    if (key < 0 || key >= t2) throw $.ioore(key);
    t1[key].get$element().set$value(value);
  } else {
    t2 = this._list;
    $.addLast(t2, $.KeyValuePair$(key, value));
    t2 = t2.lastEntry$0();
    if (key !== (key | 0)) throw $.iae(key);
    var t3 = t1.length;
    if (key < 0 || key >= t3) throw $.ioore(key);
    t1[key] = t2;
  }
 },
 operator$indexSet$2$bailout: function(state, key, value, t1) {
  if (t1.containsKey$1(key) === true) $.index(t1, key).get$element().set$value(value);
  else {
    var t2 = this._list;
    $.addLast(t2, $.KeyValuePair$(key, value));
    $.indexSet(t1, key, t2.lastEntry$0());
  }
 },
 LinkedHashMapImplementation$0: function() {
  this._map = $.HashMapImplementation$();
  var t1 = $.DoubleLinkedQueue$();
  $.setRuntimeTypeInfo(t1, ({E: 'KeyValuePair<K, V>'}));
  this._list = t1;
 },
 is$Map: function() { return true; }
};

$$.DoubleLinkedQueueEntry = {"":
 ["_element?", "_next=", "_previous="],
 super: "Object",
 get$element: function() {
  return this._element;
 },
 previousEntry$0: function() {
  return this._previous._asNonSentinelEntry$0();
 },
 _asNonSentinelEntry$0: function() {
  return this;
 },
 remove$0: function() {
  var t1 = this._next;
  this._previous.set$_next(t1);
  t1 = this._previous;
  this._next.set$_previous(t1);
  this._next = null;
  this._previous = null;
  return this._element;
 },
 prepend$1: function(e) {
  var t1 = $.DoubleLinkedQueueEntry$(e);
  $.setRuntimeTypeInfo(t1, ({E: 'E'}));
  t1._link$2(this._previous, this);
 },
 _link$2: function(p, n) {
  this._next = n;
  this._previous = p;
  p.set$_next(this);
  n.set$_previous(this);
 },
 DoubleLinkedQueueEntry$1: function(e) {
  this._element = e;
 }
};

$$._DoubleLinkedQueueEntrySentinel = {"":
 ["_element", "_next", "_previous"],
 super: "DoubleLinkedQueueEntry",
 get$element: function() {
  throw $.captureStackTrace($.CTC2);
 },
 _asNonSentinelEntry$0: function() {
  return;
 },
 remove$0: function() {
  throw $.captureStackTrace($.CTC2);
 },
 _DoubleLinkedQueueEntrySentinel$0: function() {
  this._link$2(this, this);
 }
};

$$.DoubleLinkedQueue = {"":
 ["_sentinel"],
 super: "Object",
 toString$0: function() {
  return $.Collections_collectionToString(this);
 },
 iterator$0: function() {
  var t1 = $._DoubleLinkedQueueIterator$(this._sentinel);
  $.setRuntimeTypeInfo(t1, ({E: 'E'}));
  return t1;
 },
 filter$1: function(f) {
  var other = $.DoubleLinkedQueue$();
  $.setRuntimeTypeInfo(other, ({E: 'E'}));
  var t1 = this._sentinel;
  var entry = t1.get$_next();
  for (; !(entry == null ? t1 == null : entry === t1); ) {
    var nextEntry = entry.get$_next();
    f.$call$1(entry.get$_element()) === true && other.addLast$1(entry.get$_element());
    entry = nextEntry;
  }
  return other;
 },
 forEach$1: function(f) {
  var t1 = this._sentinel;
  var entry = t1.get$_next();
  for (; !(entry == null ? t1 == null : entry === t1); ) {
    var nextEntry = entry.get$_next();
    f.$call$1(entry.get$_element());
    entry = nextEntry;
  }
 },
 clear$0: function() {
  var t1 = this._sentinel;
  t1.set$_next(t1);
  t1.set$_previous(t1);
 },
 isEmpty$0: function() {
  var t1 = this._sentinel;
  var t2 = t1.get$_next();
  return t2 == null ? t1 == null : t2 === t1;
 },
 get$length: function() {
  var t1 = ({});
  t1.counter_1 = 0;
  this.forEach$1(new $.DoubleLinkedQueue_length__(t1));
  return t1.counter_1;
 },
 length$0: function() { return this.get$length().$call$0(); },
 lastEntry$0: function() {
  return this._sentinel.previousEntry$0();
 },
 last$0: function() {
  return this._sentinel.get$_previous().get$element();
 },
 first$0: function() {
  return this._sentinel.get$_next().get$element();
 },
 get$first: function() { return new $.BoundClosure(this, 'first$0'); },
 removeFirst$0: function() {
  return this._sentinel.get$_next().remove$0();
 },
 removeLast$0: function() {
  return this._sentinel.get$_previous().remove$0();
 },
 addAll$1: function(collection) {
  for (var t1 = $.iterator(collection); t1.hasNext$0() === true; ) {
    this.add$1(t1.next$0());
  }
 },
 add$1: function(value) {
  this.addLast$1(value);
 },
 addLast$1: function(value) {
  this._sentinel.prepend$1(value);
 },
 DoubleLinkedQueue$0: function() {
  var t1 = $._DoubleLinkedQueueEntrySentinel$();
  $.setRuntimeTypeInfo(t1, ({E: 'E'}));
  this._sentinel = t1;
 },
 is$Collection: function() { return true; }
};

$$._DoubleLinkedQueueIterator = {"":
 ["_currentEntry", "_sentinel"],
 super: "Object",
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  this._currentEntry = this._currentEntry.get$_next();
  return this._currentEntry.get$element();
 },
 hasNext$0: function() {
  var t1 = this._currentEntry.get$_next();
  var t2 = this._sentinel;
  return !(t1 == null ? t2 == null : t1 === t2);
 },
 _DoubleLinkedQueueIterator$1: function(_sentinel) {
  this._currentEntry = this._sentinel;
 }
};

$$.StringBufferImpl = {"":
 ["_length", "_buffer"],
 super: "Object",
 toString$0: function() {
  var t1 = $.get$length(this._buffer);
  if (t1 === 0) return '';
  t1 = $.get$length(this._buffer);
  if (t1 === 1) return $.index(this._buffer, 0);
  var result = $.StringBase_concatAll(this._buffer);
  $.clear(this._buffer);
  $.add$1(this._buffer, result);
  return result;
 },
 clear$0: function() {
  var t1 = $.ListFactory_List(null);
  $.setRuntimeTypeInfo(t1, ({E: 'String'}));
  this._buffer = t1;
  this._length = 0;
  return this;
 },
 addAll$1: function(objects) {
  for (var t1 = $.iterator(objects); t1.hasNext$0() === true; ) {
    this.add$1(t1.next$0());
  }
  return this;
 },
 add$1: function(obj) {
  var str = $.toString(obj);
  if (str == null || $.isEmpty(str) === true) return this;
  $.add$1(this._buffer, str);
  var t1 = this._length;
  if (typeof t1 !== 'number') return this.add$1$bailout(1, str, t1);
  var t2 = $.get$length(str);
  if (typeof t2 !== 'number') return this.add$1$bailout(2, t1, t2);
  this._length = t1 + t2;
  return this;
 },
 add$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      str = env0;
      t1 = env1;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var str = $.toString(obj);
      if (str == null || $.isEmpty(str) === true) return this;
      $.add$1(this._buffer, str);
      var t1 = this._length;
    case 1:
      state = 0;
      var t2 = $.get$length(str);
    case 2:
      state = 0;
      this._length = $.add(t1, t2);
      return this;
  }
 },
 isEmpty$0: function() {
  var t1 = this._length;
  return t1 === 0;
 },
 get$length: function() {
  return this._length;
 },
 length$0: function() { return this.get$length().$call$0(); },
 StringBufferImpl$1: function(content$) {
  this.clear$0();
  this.add$1(content$);
 }
};

$$.JSSyntaxRegExp = {"":
 ["ignoreCase?", "multiLine?", "pattern?"],
 super: "Object",
 allMatches$1: function(str) {
  $.checkString(str);
  return $._AllMatchesIterable$(this, str);
 },
 hasMatch$1: function(str) {
  return $.regExpTest(this, $.checkString(str));
 },
 firstMatch$1: function(str) {
  var m = $.regExpExec(this, $.checkString(str));
  if (m == null) return;
  var matchStart = $.regExpMatchStart(m);
  var matchEnd = $.add(matchStart, $.get$length($.index(m, 0)));
  return $.MatchImplementation$(this.pattern, str, matchStart, matchEnd, m);
 },
 JSSyntaxRegExp$_globalVersionOf$1: function(other) {
  $.regExpAttachGlobalNative(this);
 },
 is$JSSyntaxRegExp: true
};

$$.MatchImplementation = {"":
 ["_groups", "_end", "_start", "str", "pattern?"],
 super: "Object",
 operator$index$1: function(index) {
  return this.group$1(index);
 },
 group$1: function(index) {
  return $.index(this._groups, index);
 }
};

$$._AllMatchesIterable = {"":
 ["_str", "_re"],
 super: "Object",
 iterator$0: function() {
  return $._AllMatchesIterator$(this._re, this._str);
 }
};

$$._AllMatchesIterator = {"":
 ["_done", "_next=", "_str", "_re"],
 super: "Object",
 hasNext$0: function() {
  if (this._done === true) return false;
  var t1 = this._next;
  if (!(t1 == null)) return true;
  this._next = this._re.firstMatch$1(this._str);
  t1 = this._next;
  if (t1 == null) {
    this._done = true;
    return false;
  }
  return true;
 },
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  var next = this._next;
  this._next = null;
  return next;
 }
};

$$.ListIterator = {"":
 ["list", "i"],
 super: "Object",
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.NoMoreElementsException$());
  var value = (this.list[this.i]);
  this.i = this.i + 1;
  return value;
 },
 hasNext$0: function() {
  var t1 = this.i;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1);
  return t1 < (this.list.length);
 },
 hasNext$0$bailout: function(state, t1) {
  return $.lt(t1, (this.list.length));
 }
};

$$.StackTrace = {"":
 ["stack"],
 super: "Object",
 toString$0: function() {
  var t1 = this.stack;
  return !(t1 == null) ? t1 : '';
 }
};

$$.Closure = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'Closure';
 }
};

$$.MetaInfo = {"":
 ["set?", "tags", "tag?"],
 super: "Object"
};

$$.StringMatch = {"":
 ["pattern?", "str", "_lib2_start"],
 super: "Object",
 group$1: function(group_) {
  if (!$.eqB(group_, 0)) throw $.captureStackTrace($.IndexOutOfRangeException$(group_));
  return this.pattern;
 },
 operator$index$1: function(g) {
  return this.group$1(g);
 }
};

$$.Object = {"":
 [],
 super: "",
 toString$0: function() {
  return $.Primitives_objectToString(this);
 }
};

$$.IndexOutOfRangeException = {"":
 ["_index"],
 super: "Object",
 toString$0: function() {
  return 'IndexOutOfRangeException: ' + $.S(this._index);
 }
};

$$.NoSuchMethodException = {"":
 ["_existingArgumentNames", "_arguments", "_functionName", "_receiver"],
 super: "Object",
 toString$0: function() {
  var sb = $.StringBufferImpl$('');
  var t1 = this._arguments;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.toString$0$bailout(1, sb, t1);
  var i = 0;
  for (; i < t1.length; ++i) {
    i > 0 && sb.add$1(', ');
    var t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    sb.add$1(t1[i]);
  }
  t1 = this._existingArgumentNames;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.toString$0$bailout(2, t1, sb);
  var actualParameters = sb.toString$0();
  sb = $.StringBufferImpl$('');
  for (i = 0; i < t1.length; ++i) {
    i > 0 && sb.add$1(', ');
    t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    sb.add$1(t1[i]);
  }
  var formalParameters = sb.toString$0();
  t1 = this._functionName;
  return 'NoSuchMethodException: incorrect number of arguments passed to method named \'' + $.S(t1) + '\'\nReceiver: ' + $.S(this._receiver) + '\n' + 'Tried calling: ' + $.S(t1) + '(' + $.S(actualParameters) + ')\n' + 'Found: ' + $.S(t1) + '(' + $.S(formalParameters) + ')';
 },
 toString$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      sb = env0;
      t1 = env1;
      break;
    case 2:
      t1 = env0;
      sb = env1;
      break;
  }
  switch (state) {
    case 0:
      var sb = $.StringBufferImpl$('');
      var t1 = this._arguments;
    case 1:
      state = 0;
      var i = 0;
      for (; $.ltB(i, $.get$length(t1)); ++i) {
        i > 0 && sb.add$1(', ');
        sb.add$1($.index(t1, i));
      }
      t1 = this._existingArgumentNames;
    case 2:
      state = 0;
      if (t1 == null) return 'NoSuchMethodException : method not found: \'' + $.S(this._functionName) + '\'\n' + 'Receiver: ' + $.S(this._receiver) + '\n' + 'Arguments: [' + $.S(sb) + ']';
      var actualParameters = sb.toString$0();
      sb = $.StringBufferImpl$('');
      for (i = 0; $.ltB(i, $.get$length(t1)); ++i) {
        i > 0 && sb.add$1(', ');
        sb.add$1($.index(t1, i));
      }
      var formalParameters = sb.toString$0();
      t1 = this._functionName;
      return 'NoSuchMethodException: incorrect number of arguments passed to method named \'' + $.S(t1) + '\'\nReceiver: ' + $.S(this._receiver) + '\n' + 'Tried calling: ' + $.S(t1) + '(' + $.S(actualParameters) + ')\n' + 'Found: ' + $.S(t1) + '(' + $.S(formalParameters) + ')';
  }
 }
};

$$.ObjectNotClosureException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'Object is not closure';
 }
};

$$.IllegalArgumentException = {"":
 ["_arg"],
 super: "Object",
 toString$0: function() {
  return 'Illegal argument(s): ' + $.S(this._arg);
 }
};

$$.StackOverflowException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'Stack Overflow';
 }
};

$$.BadNumberFormatException = {"":
 ["_s"],
 super: "Object",
 toString$0: function() {
  return 'BadNumberFormatException: \'' + $.S(this._s) + '\'';
 }
};

$$.NullPointerException = {"":
 ["arguments", "functionName"],
 super: "Object",
 get$exceptionName: function() {
  return 'NullPointerException';
 },
 toString$0: function() {
  var t1 = this.functionName;
  if (t1 == null) return this.get$exceptionName();
  return $.S(this.get$exceptionName()) + ' : method: \'' + $.S(t1) + '\'\n' + 'Receiver: null\n' + 'Arguments: ' + $.S(this.arguments);
 }
};

$$.NoMoreElementsException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'NoMoreElementsException';
 }
};

$$.EmptyQueueException = {"":
 [],
 super: "Object",
 toString$0: function() {
  return 'EmptyQueueException';
 }
};

$$.UnsupportedOperationException = {"":
 ["_message"],
 super: "Object",
 toString$0: function() {
  return 'UnsupportedOperationException: ' + $.S(this._message);
 }
};

$$.NotImplementedException = {"":
 ["_message"],
 super: "Object",
 toString$0: function() {
  var t1 = this._message;
  return !(t1 == null) ? 'NotImplementedException: ' + $.S(t1) : 'NotImplementedException';
 }
};

$$.IllegalJSRegExpException = {"":
 ["_errmsg", "_pattern"],
 super: "Object",
 toString$0: function() {
  return 'IllegalJSRegExpException: \'' + $.S(this._pattern) + '\' \'' + $.S(this._errmsg) + '\'';
 }
};

$$._AbstractWorkerEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._AudioContextEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._BatteryManagerEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._BodyElementEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl"
};

$$._DOMApplicationCacheEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._DedicatedWorkerContextEventsImpl = {"":
 ["_ptr"],
 super: "_WorkerContextEventsImpl"
};

$$._DeprecatedPeerConnectionEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._DocumentEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl",
 get$reset: function() {
  return this.operator$index$1('reset');
 },
 reset$0: function() { return this.get$reset().$call$0(); },
 get$keyUp: function() {
  return this.operator$index$1('keyup');
 },
 get$keyDown: function() {
  return this.operator$index$1('keydown');
 },
 get$copy: function() {
  return this.operator$index$1('copy');
 },
 copy$1: function(arg0) { return this.get$copy().$call$1(arg0); }
};

$$.FilteredElementList = {"":
 ["_childNodes", "_node"],
 super: "Object",
 last$0: function() {
  return $.last(this.get$_filtered());
 },
 indexOf$2: function(element, start) {
  return $.indexOf$2(this.get$_filtered(), element, start);
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 getRange$2: function(start, rangeLength) {
  return $.getRange(this.get$_filtered(), start, rangeLength);
 },
 iterator$0: function() {
  return $.iterator(this.get$_filtered());
 },
 operator$index$1: function(index) {
  var t1 = this.get$_filtered();
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, index, t1);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, index, t1) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this.get$_filtered());
 },
 length$0: function() { return this.get$length().$call$0(); },
 isEmpty$0: function() {
  return $.isEmpty(this.get$_filtered());
 },
 filter$1: function(f) {
  return $.filter(this.get$_filtered(), f);
 },
 removeLast$0: function() {
  var result = this.last$0();
  !(result == null) && result.remove$0();
  return result;
 },
 clear$0: function() {
  $.clear(this._childNodes);
 },
 removeRange$2: function(start, rangeLength) {
  $.forEach($.getRange(this.get$_filtered(), start, rangeLength), new $.FilteredElementList_removeRange_anon());
 },
 sort$1: function(compare) {
  throw $.captureStackTrace($.CTC7);
 },
 addLast$1: function(value) {
  this.add$1(value);
 },
 addAll$1: function(collection) {
  $.forEach(collection, this.get$add());
 },
 add$1: function(value) {
  $.add$1(this._childNodes, value);
 },
 get$add: function() { return new $.BoundClosure2(this, 'add$1'); },
 set$length: function(newLength) {
  var len = $.get$length(this);
  if ($.geB(newLength, len)) return;
  if ($.ltB(newLength, 0)) throw $.captureStackTrace($.CTC5);
  this.removeRange$2($.sub(newLength, 1), $.sub(len, newLength));
 },
 operator$indexSet$2: function(index, value) {
  this.operator$index$1(index).replaceWith$1(value);
 },
 forEach$1: function(f) {
  $.forEach(this.get$_filtered(), f);
 },
 get$first: function() {
  for (var t1 = $.iterator(this._childNodes); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    if (typeof t2 === 'object' && t2 !== null && t2.is$Element()) return t2;
  }
  return;
 },
 first$0: function() { return this.get$first().$call$0(); },
 get$_filtered: function() {
  return $.ListFactory_List$from($.filter(this._childNodes, new $.FilteredElementList__filtered_anon()));
 },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._ChildrenElementList = {"":
 ["_childElements", "_lib_element?"],
 super: "Object",
 last$0: function() {
  return this._lib_element.get$$$dom_lastElementChild();
 },
 removeLast$0: function() {
  var result = this.last$0();
  !(result == null) && this._lib_element.$dom_removeChild$1(result);
  return result;
 },
 clear$0: function() {
  this._lib_element.set$text('');
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 getRange$2: function(start, rangeLength) {
  return $._FrozenElementList$_wrap($._Lists_getRange(this, start, rangeLength, []));
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.CTC6);
 },
 sort$1: function(compare) {
  throw $.captureStackTrace($.CTC7);
 },
 addAll$1: function(collection) {
  for (var t1 = $.iterator(collection), t2 = this._lib_element; t1.hasNext$0() === true; ) {
    t2.$dom_appendChild$1(t1.next$0());
  }
 },
 iterator$0: function() {
  return $.iterator(this._toList$0());
 },
 addLast$1: function(value) {
  return this.add$1(value);
 },
 add$1: function(value) {
  this._lib_element.$dom_appendChild$1(value);
  return value;
 },
 set$length: function(newLength) {
  throw $.captureStackTrace($.CTC4);
 },
 operator$indexSet$2: function(index, value) {
  this._lib_element.$dom_replaceChild$2(value, $.index(this._childElements, index));
 },
 operator$index$1: function(index) {
  var t1 = this._childElements;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, t1, index);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, t1, index) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this._childElements);
 },
 length$0: function() { return this.get$length().$call$0(); },
 isEmpty$0: function() {
  var t1 = this._lib_element.get$$$dom_firstElementChild();
  return t1 == null;
 },
 filter$1: function(f) {
  var output = [];
  this.forEach$1(new $._ChildrenElementList_filter_anon(f, output));
  return $._FrozenElementList$_wrap(output);
 },
 forEach$1: function(f) {
  for (var t1 = $.iterator(this._childElements); t1.hasNext$0() === true; ) {
    f.$call$1(t1.next$0());
  }
 },
 get$first: function() {
  return this._lib_element.get$$$dom_firstElementChild();
 },
 first$0: function() { return this.get$first().$call$0(); },
 _toList$0: function() {
  var t1 = this._childElements;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this._toList$0$bailout(1, t1);
  var output = $.ListFactory_List(t1.length);
  for (var len = t1.length, i = 0; i < len; ++i) {
    var t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    var t3 = t1[i];
    var t4 = output.length;
    if (i < 0 || i >= t4) throw $.ioore(i);
    output[i] = t3;
  }
  return output;
 },
 _toList$0$bailout: function(state, t1) {
  var output = $.ListFactory_List($.get$length(t1));
  for (var len = $.get$length(t1), i = 0; $.ltB(i, len); ++i) {
    var t2 = $.index(t1, i);
    var t3 = output.length;
    if (i < 0 || i >= t3) throw $.ioore(i);
    output[i] = t2;
  }
  return output;
 },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._FrozenElementList = {"":
 ["_nodeList"],
 super: "Object",
 last$0: function() {
  return $.last(this._nodeList);
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.CTC4);
 },
 clear$0: function() {
  throw $.captureStackTrace($.CTC4);
 },
 indexOf$2: function(element, start) {
  return $.indexOf$2(this._nodeList, element, start);
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 getRange$2: function(start, rangeLength) {
  return $._FrozenElementList$_wrap($.getRange(this._nodeList, start, rangeLength));
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.CTC4);
 },
 sort$1: function(compare) {
  throw $.captureStackTrace($.CTC4);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.CTC4);
 },
 iterator$0: function() {
  return $._FrozenElementListIterator$(this);
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.CTC4);
 },
 add$1: function(value) {
  throw $.captureStackTrace($.CTC4);
 },
 set$length: function(newLength) {
  $.set$length(this._nodeList, newLength);
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.CTC4);
 },
 operator$index$1: function(index) {
  var t1 = this._nodeList;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, t1, index);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, t1, index) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this._nodeList);
 },
 length$0: function() { return this.get$length().$call$0(); },
 isEmpty$0: function() {
  return $.isEmpty(this._nodeList);
 },
 filter$1: function(f) {
  var out = $._ElementList$([]);
  for (var t1 = this.iterator$0(); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    f.$call$1(t2) === true && out.add$1(t2);
  }
  return out;
 },
 forEach$1: function(f) {
  for (var t1 = this.iterator$0(); t1.hasNext$0() === true; ) {
    f.$call$1(t1.next$0());
  }
 },
 get$first: function() {
  return $.index(this._nodeList, 0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._FrozenElementListIterator = {"":
 ["_lib_index", "_lib_list"],
 super: "Object",
 hasNext$0: function() {
  var t1 = this._lib_index;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1, 0);
  var t2 = $.get$length(this._lib_list);
  if (typeof t2 !== 'number') return this.hasNext$0$bailout(2, t1, t2);
  return t1 < t2;
 },
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._lib_index;
    case 1:
      state = 0;
      var t2 = $.get$length(this._lib_list);
    case 2:
      state = 0;
      return $.lt(t1, t2);
  }
 },
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  var t1 = this._lib_list;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.next$0$bailout(1, t1);
  var t2 = this._lib_index;
  this._lib_index = t2 + 1;
  if (t2 !== (t2 | 0)) throw $.iae(t2);
  var t3 = t1.length;
  if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
  return t1[t2];
 },
 next$0$bailout: function(state, t1) {
  var t2 = this._lib_index;
  this._lib_index = t2 + 1;
  return $.index(t1, t2);
 }
};

$$._ElementList = {"":
 ["_lib_list"],
 super: "_ListWrapper",
 getRange$2: function(start, rangeLength) {
  return $._ElementList$($._ListWrapper.prototype.getRange$2.call(this, start, rangeLength));
 },
 filter$1: function(f) {
  return $._ElementList$($._ListWrapper.prototype.filter$1.call(this, f));
 },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._ElementEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$reset: function() {
  return this.operator$index$1('reset');
 },
 reset$0: function() { return this.get$reset().$call$0(); },
 get$keyUp: function() {
  return this.operator$index$1('keyup');
 },
 get$keyDown: function() {
  return this.operator$index$1('keydown');
 },
 get$copy: function() {
  return this.operator$index$1('copy');
 },
 copy$1: function(arg0) { return this.get$copy().$call$1(arg0); }
};

$$._EventSourceEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._EventsImpl = {"":
 ["_ptr"],
 super: "Object",
 operator$index$1: function(type) {
  return $._EventListenerListImpl$(this._ptr, type);
 }
};

$$._EventListenerListImpl = {"":
 ["_type", "_ptr"],
 super: "Object",
 _remove$2: function(listener, useCapture) {
  this._ptr.$dom_removeEventListener$3(this._type, listener, useCapture);
 },
 _add$2: function(listener, useCapture) {
  this._ptr.$dom_addEventListener$3(this._type, listener, useCapture);
 },
 remove$2: function(listener, useCapture) {
  this._remove$2(listener, useCapture);
  return this;
 },
 remove$1: function(listener) {
  return this.remove$2(listener,false)
},
 add$2: function(listener, useCapture) {
  this._add$2(listener, useCapture);
  return this;
 },
 add$1: function(listener) {
  return this.add$2(listener,false)
}
};

$$._FileReaderEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._FileWriterEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._FrameSetElementEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl"
};

$$._IDBDatabaseEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._IDBRequestEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._IDBTransactionEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._IDBVersionChangeRequestEventsImpl = {"":
 ["_ptr"],
 super: "_IDBRequestEventsImpl"
};

$$._InputElementEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl"
};

$$._JavaScriptAudioNodeEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._MediaElementEventsImpl = {"":
 ["_ptr"],
 super: "_ElementEventsImpl"
};

$$._MediaStreamEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._MessagePortEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._ChildNodeListLazy = {"":
 ["_this"],
 super: "Object",
 operator$index$1: function(index) {
  var t1 = this._this.get$$$dom_childNodes();
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, index, t1);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, index, t1) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this._this.get$$$dom_childNodes());
 },
 length$0: function() { return this.get$length().$call$0(); },
 getRange$2: function(start, rangeLength) {
  return $._NodeListWrapper$($._Lists_getRange(this, start, rangeLength, []));
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._NodeListWrapper$($._Collections_filter(this, [], f));
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 iterator$0: function() {
  return $.iterator(this._this.get$$$dom_childNodes());
 },
 operator$indexSet$2: function(index, value) {
  this._this.$dom_replaceChild$2(value, this.operator$index$1(index));
 },
 clear$0: function() {
  this._this.set$text('');
 },
 removeLast$0: function() {
  var result = this.last$0();
  !(result == null) && this._this.$dom_removeChild$1(result);
  return result;
 },
 addAll$1: function(collection) {
  for (var t1 = $.iterator(collection), t2 = this._this; t1.hasNext$0() === true; ) {
    t2.$dom_appendChild$1(t1.next$0());
  }
 },
 addLast$1: function(value) {
  this._this.$dom_appendChild$1(value);
 },
 add$1: function(value) {
  this._this.$dom_appendChild$1(value);
 },
 last$0: function() {
  return this._this.lastChild;;
 },
 get$first: function() {
  return this._this.firstChild;;
 },
 first$0: function() { return this.get$first().$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._ListWrapper = {"":
 [],
 super: "Object",
 get$first: function() {
  return $.index(this._lib_list, 0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 removeRange$2: function(start, rangeLength) {
  return $.removeRange(this._lib_list, start, rangeLength);
 },
 getRange$2: function(start, rangeLength) {
  return $.getRange(this._lib_list, start, rangeLength);
 },
 last$0: function() {
  return $.last(this._lib_list);
 },
 removeLast$0: function() {
  return $.removeLast(this._lib_list);
 },
 clear$0: function() {
  return $.clear(this._lib_list);
 },
 indexOf$2: function(element, start) {
  return $.indexOf$2(this._lib_list, element, start);
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  return $.sort(this._lib_list, compare);
 },
 addAll$1: function(collection) {
  return $.addAll(this._lib_list, collection);
 },
 addLast$1: function(value) {
  return $.addLast(this._lib_list, value);
 },
 add$1: function(value) {
  return $.add$1(this._lib_list, value);
 },
 set$length: function(newLength) {
  $.set$length(this._lib_list, newLength);
 },
 operator$indexSet$2: function(index, value) {
  $.indexSet(this._lib_list, index, value);
 },
 operator$index$1: function(index) {
  var t1 = this._lib_list;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.operator$index$1$bailout(1, t1, index);
  if (index !== (index | 0)) throw $.iae(index);
  var t2 = t1.length;
  if (index < 0 || index >= t2) throw $.ioore(index);
  return t1[index];
 },
 operator$index$1$bailout: function(state, t1, index) {
  return $.index(t1, index);
 },
 get$length: function() {
  return $.get$length(this._lib_list);
 },
 length$0: function() { return this.get$length().$call$0(); },
 isEmpty$0: function() {
  return $.isEmpty(this._lib_list);
 },
 filter$1: function(f) {
  return $.filter(this._lib_list, f);
 },
 forEach$1: function(f) {
  return $.forEach(this._lib_list, f);
 },
 iterator$0: function() {
  return $.iterator(this._lib_list);
 },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._NodeListWrapper = {"":
 ["_lib_list"],
 super: "_ListWrapper",
 getRange$2: function(start, rangeLength) {
  return $._NodeListWrapper$($.getRange(this._lib_list, start, rangeLength));
 },
 filter$1: function(f) {
  return $._NodeListWrapper$($.filter(this._lib_list, f));
 },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
};

$$._NotificationEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._PeerConnection00EventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._SVGElementInstanceEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$reset: function() {
  return this.operator$index$1('reset');
 },
 reset$0: function() { return this.get$reset().$call$0(); },
 get$keyUp: function() {
  return this.operator$index$1('keyup');
 },
 get$keyDown: function() {
  return this.operator$index$1('keydown');
 },
 get$copy: function() {
  return this.operator$index$1('copy');
 },
 copy$1: function(arg0) { return this.get$copy().$call$1(arg0); }
};

$$._SharedWorkerContextEventsImpl = {"":
 ["_ptr"],
 super: "_WorkerContextEventsImpl"
};

$$._SpeechRecognitionEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._TextTrackEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._TextTrackCueEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._TextTrackListEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._WebSocketEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._WindowEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl",
 get$reset: function() {
  return this.operator$index$1('reset');
 },
 reset$0: function() { return this.get$reset().$call$0(); },
 get$keyUp: function() {
  return this.operator$index$1('keyup');
 },
 get$keyDown: function() {
  return this.operator$index$1('keydown');
 }
};

$$._WorkerEventsImpl = {"":
 ["_ptr"],
 super: "_AbstractWorkerEventsImpl"
};

$$._WorkerContextEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._XMLHttpRequestEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._XMLHttpRequestUploadEventsImpl = {"":
 ["_ptr"],
 super: "_EventsImpl"
};

$$._IDBOpenDBRequestEventsImpl = {"":
 ["_ptr"],
 super: "_IDBRequestEventsImpl"
};

$$._FixedSizeListIterator = {"":
 ["_lib_length", "_pos", "_array"],
 super: "_VariableSizeListIterator",
 hasNext$0: function() {
  var t1 = this._lib_length;
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1, 0);
  var t2 = this._pos;
  if (typeof t2 !== 'number') return this.hasNext$0$bailout(2, t1, t2);
  return t1 > t2;
 },
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._lib_length;
    case 1:
      state = 0;
      var t2 = this._pos;
    case 2:
      state = 0;
      return $.gt(t1, t2);
  }
 }
};

$$._VariableSizeListIterator = {"":
 [],
 super: "Object",
 next$0: function() {
  if (this.hasNext$0() !== true) throw $.captureStackTrace($.CTC1);
  var t1 = this._array;
  if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.next$0$bailout(1, t1);
  var t2 = this._pos;
  this._pos = t2 + 1;
  if (t2 !== (t2 | 0)) throw $.iae(t2);
  var t3 = t1.length;
  if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
  return t1[t2];
 },
 next$0$bailout: function(state, t1) {
  var t2 = this._pos;
  this._pos = t2 + 1;
  return $.index(t1, t2);
 },
 hasNext$0: function() {
  var t1 = $.get$length(this._array);
  if (typeof t1 !== 'number') return this.hasNext$0$bailout(1, t1, 0);
  var t2 = this._pos;
  if (typeof t2 !== 'number') return this.hasNext$0$bailout(2, t2, t1);
  return t1 > t2;
 },
 hasNext$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t2 = env0;
      t1 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = $.get$length(this._array);
    case 1:
      state = 0;
      var t2 = this._pos;
    case 2:
      state = 0;
      return $.gt(t1, t2);
  }
 }
};

$$._MessageTraverserVisitedMap = {"":
 [],
 super: "Object",
 cleanup$0: function() {
 },
 reset$0: function() {
 },
 operator$indexSet$2: function(object, info) {
 },
 operator$index$1: function(object) {
  return;
 }
};

$$._MessageTraverser = {"":
 [],
 super: "Object",
 _dispatch$1: function(x) {
  if ($._MessageTraverser_isPrimitive(x) === true) return this.visitPrimitive$1(x);
  if (typeof x === 'object' && x !== null && (x.constructor === Array || x.is$List())) return this.visitList$1(x);
  if (typeof x === 'object' && x !== null && x.is$Map()) return this.visitMap$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$SendPort) return this.visitSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$SendPortSync) return this.visitSendPortSync$1(x);
  throw $.captureStackTrace('Message serialization: Illegal value ' + $.S(x) + ' passed');
 },
 traverse$1: function(x) {
  if ($._MessageTraverser_isPrimitive(x) === true) return this.visitPrimitive$1(x);
  var t1 = this._visited;
  t1.reset$0();
  var result = null;
  try {
    result = this._dispatch$1(x);
  } finally {
    t1.cleanup$0();
  }
  return result;
 }
};

$$._Copier = {"":
 [],
 super: "_MessageTraverser",
 visitMap$1: function(map) {
  var t1 = ({});
  var t2 = this._visited;
  t1.copy_1 = $.index(t2, map);
  var t3 = t1.copy_1;
  if (!(t3 == null)) return t3;
  t1.copy_1 = $.HashMapImplementation$();
  $.indexSet(t2, map, t1.copy_1);
  $.forEach(map, new $._Copier_visitMap_anon(this, t1));
  return t1.copy_1;
 },
 visitList$1: function(list) {
  if (typeof list !== 'string' && (typeof list !== 'object' || list === null || (list.constructor !== Array && !list.is$JavaScriptIndexingBehavior()))) return this.visitList$1$bailout(1, list);
  var t1 = this._visited;
  var copy = t1.operator$index$1(list);
  if (!(copy == null)) return copy;
  var len = list.length;
  copy = $.ListFactory_List(len);
  t1.operator$indexSet$2(list, copy);
  for (var i = 0; i < len; ++i) {
    t1 = list.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = this._dispatch$1(list[i]);
    var t3 = copy.length;
    if (i < 0 || i >= t3) throw $.ioore(i);
    copy[i] = t2;
  }
  return copy;
 },
 visitList$1$bailout: function(state, list) {
  var t1 = this._visited;
  var copy = $.index(t1, list);
  if (!(copy == null)) return copy;
  var len = $.get$length(list);
  copy = $.ListFactory_List(len);
  $.indexSet(t1, list, copy);
  for (var i = 0; $.ltB(i, len); ++i) {
    t1 = this._dispatch$1($.index(list, i));
    var t2 = copy.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    copy[i] = t1;
  }
  return copy;
 },
 visitPrimitive$1: function(x) {
  return x;
 }
};

$$._Serializer = {"":
 [],
 super: "_MessageTraverser",
 _serializeList$1: function(list) {
  if (typeof list !== 'string' && (typeof list !== 'object' || list === null || (list.constructor !== Array && !list.is$JavaScriptIndexingBehavior()))) return this._serializeList$1$bailout(1, list);
  var len = list.length;
  var result = $.ListFactory_List(len);
  for (var i = 0; i < len; ++i) {
    var t1 = list.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = this._dispatch$1(list[i]);
    var t3 = result.length;
    if (i < 0 || i >= t3) throw $.ioore(i);
    result[i] = t2;
  }
  return result;
 },
 _serializeList$1$bailout: function(state, list) {
  var len = $.get$length(list);
  var result = $.ListFactory_List(len);
  for (var i = 0; $.ltB(i, len); ++i) {
    var t1 = this._dispatch$1($.index(list, i));
    var t2 = result.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    result[i] = t1;
  }
  return result;
 },
 visitMap$1: function(map) {
  var t1 = this._visited;
  var copyId = $.index(t1, map);
  if (!(copyId == null)) return ['ref', copyId];
  var id = this._nextFreeRefId;
  this._nextFreeRefId = id + 1;
  $.indexSet(t1, map, id);
  return ['map', id, this._serializeList$1(map.getKeys$0()), this._serializeList$1(map.getValues$0())];
 },
 visitList$1: function(list) {
  var t1 = this._visited;
  var copyId = $.index(t1, list);
  if (!(copyId == null)) return ['ref', copyId];
  var id = this._nextFreeRefId;
  this._nextFreeRefId = id + 1;
  $.indexSet(t1, list, id);
  return ['list', id, this._serializeList$1(list)];
 },
 visitPrimitive$1: function(x) {
  return x;
 }
};

$$._Manager = {"":
 ["managers", "mainManager?", "isolates?", "supportsWorkers", "isWorker?", "fromCommandLine?", "topEventLoop?", "rootContext=", "currentContext=", "nextManagerId", "currentManagerId?", "nextIsolateId="],
 super: "Object",
 maybeCloseWorker$0: function() {
  $.isEmpty(this.isolates) === true && this.mainManager.postMessage$1($._serializeMessage($.makeLiteralMap(['command', 'close'])));
 },
 _nativeInitWorkerMessageHandler$0: function() {
      $globalThis.onmessage = function (e) {
      _IsolateNatives._processWorkerMessage(this.mainManager, e);
    }
  ;
 },
 _nativeDetectEnvironment$0: function() {
      this.isWorker = $isWorker;
    this.supportsWorkers = $supportsWorkers;
    this.fromCommandLine = typeof(window) == 'undefined';
  ;
 },
 get$needSerialization: function() {
  return this.get$useWorkers();
 },
 get$useWorkers: function() {
  return this.supportsWorkers;
 },
 _Manager$0: function() {
  this._nativeDetectEnvironment$0();
  this.topEventLoop = $._EventLoop$();
  this.isolates = $.HashMapImplementation$();
  this.managers = $.HashMapImplementation$();
  if (this.isWorker === true) {
    this.mainManager = $._MainManagerStub$();
    this._nativeInitWorkerMessageHandler$0();
  }
 }
};

$$._IsolateContext = {"":
 ["isolateStatics", "ports?", "id?"],
 super: "Object",
 _setGlobals$0: function() {
  $setGlobals(this);;
 },
 eval$1: function(code) {
  var old = $._globalState().get$currentContext();
  $._globalState().set$currentContext(this);
  this._setGlobals$0();
  var result = null;
  try {
    result = code.$call$0();
  } finally {
    var t1 = old;
    $._globalState().set$currentContext(t1);
    t1 = old;
    !(t1 == null) && t1._setGlobals$0();
  }
  return result;
 },
 initGlobals$0: function() {
  $initGlobals(this);;
 },
 _IsolateContext$0: function() {
  var t1 = $._globalState();
  var t2 = t1.get$nextIsolateId();
  t1.set$nextIsolateId($.add(t2, 1));
  this.id = t2;
  this.ports = $.HashMapImplementation$();
  this.initGlobals$0();
 }
};

$$._EventLoop = {"":
 ["events"],
 super: "Object",
 run$0: function() {
  if ($._globalState().get$isWorker() !== true) this._runHelper$0();
  else {
    try {
      this._runHelper$0();
    } catch (exception) {
      var t1 = $.unwrapException(exception);
      var e = t1;
      var trace = $.getTraceFromException(exception);
      $._globalState().get$mainManager().postMessage$1($._serializeMessage($.makeLiteralMap(['command', 'error', 'msg', $.S(e) + '\n' + $.S(trace)])));
    }
  }
 },
 _runHelper$0: function() {
  var t1 = $._window();
  if (!(t1 == null)) new $._EventLoop__runHelper_next(this).$call$0();
  else {
    for (; this.runIteration$0() === true; ) {
    }
  }
 },
 runIteration$0: function() {
  var event$ = this.dequeue$0();
  if (event$ == null) {
    if ($._globalState().get$isWorker() === true) $._globalState().maybeCloseWorker$0();
    else {
      var t1 = $._globalState().get$rootContext();
      if (!(t1 == null) && $._globalState().get$isolates().containsKey$1($._globalState().get$rootContext().get$id()) === true && $._globalState().get$fromCommandLine() === true && $.isEmpty($._globalState().get$rootContext().get$ports()) === true) throw $.captureStackTrace($.ExceptionImplementation$('Program exited with open ReceivePorts.'));
    }
    return false;
  }
  event$.process$0();
  return true;
 },
 dequeue$0: function() {
  var t1 = this.events;
  if ($.isEmpty(t1) === true) return;
  return t1.removeFirst$0();
 }
};

$$._MainManagerStub = {"":
 [],
 super: "Object",
 postMessage$1: function(msg) {
  $globalThis.postMessage(msg);;
 },
 get$id: function() {
  return 0;
 }
};

$$._BaseSendPort = {"":
 ["_isolateId?"],
 super: "Object",
 is$SendPort: true
};

$$._NativeJsSendPort = {"":
 ["_receivePort?", "_isolateId"],
 super: "_BaseSendPort",
 hashCode$0: function() {
  return this._receivePort.get$_lib1_id();
 },
 operator$eq$1: function(other) {
  return typeof other === 'object' && other !== null && !!other.is$_NativeJsSendPort && $.eqB(this._receivePort, other._receivePort);
 },
 is$_NativeJsSendPort: true,
 is$SendPort: true
};

$$._WorkerSendPort = {"":
 ["_receivePortId?", "_workerId?", "_isolateId"],
 super: "_BaseSendPort",
 hashCode$0: function() {
  var t1 = this._workerId << 16 ^ this._isolateId << 8;
  var t2 = this._receivePortId;
  if (typeof t2 !== 'number') throw $.iae(t2);
  return (t1 ^ t2) >>> 0;
 },
 operator$eq$1: function(other) {
  return typeof other === 'object' && other !== null && !!other.is$_WorkerSendPort && $.eqB(this._workerId, other._workerId) && $.eqB(this._isolateId, other.get$_isolateId()) && $.eqB(this._receivePortId, other.get$_receivePortId());
 },
 is$_WorkerSendPort: true,
 is$SendPort: true
};

$$._JsSerializer = {"":
 ["_nextFreeRefId", "_visited"],
 super: "_Serializer",
 visitBufferingSendPort$1: function(port) {
  var t1 = port.get$_port();
  if (!(t1 == null)) return this.visitSendPort$1(port.get$_port());
  throw $.captureStackTrace('internal error: must call _waitForPendingPorts to ensure all ports are resolved at this point.');
 },
 visitWorkerSendPort$1: function(port) {
  return ['sendport', port.get$_workerId(), port.get$_isolateId(), port.get$_receivePortId()];
 },
 visitNativeJsSendPort$1: function(port) {
  return ['sendport', $._globalState().get$currentManagerId(), port.get$_isolateId(), port.get$_receivePort().get$_lib1_id()];
 },
 visitSendPort$1: function(x) {
  if (typeof x === 'object' && x !== null && !!x.is$_NativeJsSendPort) return this.visitNativeJsSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$_WorkerSendPort) return this.visitWorkerSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$_BufferingSendPort) return this.visitBufferingSendPort$1(x);
  throw $.captureStackTrace('Illegal underlying port ' + $.S(x));
 },
 _JsSerializer$0: function() {
  this._visited = $._JsVisitedMap$();
 }
};

$$._JsCopier = {"":
 ["_visited"],
 super: "_Copier",
 visitBufferingSendPort$1: function(port) {
  var t1 = port.get$_port();
  if (!(t1 == null)) return this.visitSendPort$1(port.get$_port());
  throw $.captureStackTrace('internal error: must call _waitForPendingPorts to ensure all ports are resolved at this point.');
 },
 visitWorkerSendPort$1: function(port) {
  return $._WorkerSendPort$(port.get$_workerId(), port.get$_isolateId(), port.get$_receivePortId());
 },
 visitNativeJsSendPort$1: function(port) {
  return $._NativeJsSendPort$(port.get$_receivePort(), port.get$_isolateId());
 },
 visitSendPort$1: function(x) {
  if (typeof x === 'object' && x !== null && !!x.is$_NativeJsSendPort) return this.visitNativeJsSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$_WorkerSendPort) return this.visitWorkerSendPort$1(x);
  if (typeof x === 'object' && x !== null && !!x.is$_BufferingSendPort) return this.visitBufferingSendPort$1(x);
  throw $.captureStackTrace('Illegal underlying port ' + $.S(this.get$p()));
 },
 _JsCopier$0: function() {
  this._visited = $._JsVisitedMap$();
 }
};

$$._JsVisitedMap = {"":
 ["tagged"],
 super: "Object",
 _getAttachedInfo$1: function(o) {
  return o['__MessageTraverser__attached_info__'];;
 },
 _setAttachedInfo$2: function(o, info) {
  o['__MessageTraverser__attached_info__'] = info;;
 },
 _clearAttachedInfo$1: function(o) {
  o['__MessageTraverser__attached_info__'] = (void 0);;
 },
 cleanup$0: function() {
  var length$ = $.get$length(this.tagged);
  if (typeof length$ !== 'number') return this.cleanup$0$bailout(1, length$);
  var i = 0;
  for (; i < length$; ++i) {
    this._clearAttachedInfo$1($.index(this.tagged, i));
  }
  this.tagged = null;
 },
 cleanup$0$bailout: function(state, length$) {
  var i = 0;
  for (; $.ltB(i, length$); ++i) {
    this._clearAttachedInfo$1($.index(this.tagged, i));
  }
  this.tagged = null;
 },
 reset$0: function() {
  this.tagged = $.ListFactory_List(null);
 },
 operator$indexSet$2: function(object, info) {
  $.add$1(this.tagged, object);
  this._setAttachedInfo$2(object, info);
 },
 operator$index$1: function(object) {
  return this._getAttachedInfo$1(object);
 }
};

$$.World = {"":
 ["player", "goldenDart", "dartGeometry", "origin", "renderer", "scene", "camera", "farPlane", "nearPlane", "aspectRatio", "fieldOfView", "container", "containerSelector"],
 super: "Object",
 animate$1: function(time) {
  $.window().requestAnimationFrame$1(this.get$animate());
  this.update$0();
  this.draw$0();
  return true;
 },
 get$animate: function() { return new $.BoundClosure2(this, 'animate$1'); },
 draw$0: function() {
  this.renderer.render$2(this.scene, this.camera);
 },
 update$0: function() {
  this.player.update$0();
  this.camera.updateProjectionMatrix$0();
 },
 initGeometry$0: function() {
  var materials = [];
  for (var i = 0; i < 6; ++i) {
    $.add$1(materials, $.MeshBasicMaterial$($.makeLiteralMap(['color', $.mul($.Math_random(), 16777215)])));
  }
  this.dartGeometry = $.CubeGeometry$(5, 5, 5, 1, 1, 1, materials, null);
  this.goldenDart = $.Mesh$(this.dartGeometry, $.MeshFaceMaterial$());
  this.goldenDart.get$position().copy$1(this.origin);
  $.add$1(this.scene, this.goldenDart);
 },
 init$0: function() {
  this.origin = $.Vector3$(0, 0, 0);
  this.container = $.document().query$1(this.containerSelector);
  $.toDouble(this.container.get$$$dom_scrollWidth());
  $.toDouble(this.container.get$$$dom_scrollHeight());
  this.renderer = $.CanvasRenderer$(null);
  this.renderer.setSize$2(400, 400);
  this.renderer.setClearColor$2($.Color$(16777215), 1);
  $.add$1(this.container.get$nodes(), this.renderer.get$domElement());
  this.aspectRatio = 1.0;
  this.camera = $.PerspectiveCamera$(90.0, 1.0, 1.0, 100.0);
  this.scene = $.Scene$();
  $.add$1(this.scene, this.camera);
  this.camera.get$position().setValues$3(0, 0, 20);
  this.player = $.Player$(this.camera.get$position(), this.camera.get$rotation());
  this.initGeometry$0();
 },
 World$1: function(containerSelector) {
  this.containerSelector = containerSelector;
 }
};

$$.Camera = {"":
 ["projectionMatrix?", "matrixWorldInverse?"],
 super: "Object3D",
 Camera$0: function() {
  this.matrixWorldInverse = $.Matrix4$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  this.projectionMatrix = $.Matrix4$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  this.projectionMatrixInverse = $.Matrix4$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
 },
 is$Camera: true
};

$$.PerspectiveCamera = {"":
 ["_height", "_width", "_y", "_x", "_fullHeight", "_fullWidth", "_far", "_near", "_aspect", "_fov", "projectionMatrixInverse", "projectionMatrix", "matrixWorldInverse", "_vector", "frustumCulled", "receiveShadow", "castShadow", "visible", "boundRadiusScale", "boundRadius", "useQuaternion", "quaternion", "matrixWorldNeedsUpdate", "matrixAutoUpdate", "matrixRotationWorld", "matrixWorld", "matrix", "renderDepth", "rotationAutoUpdate", "flipSided", "doubleSided", "dynamic", "eulerOrder", "scale", "rotation", "position", "up", "children", "parent", "id", "_name"],
 super: "Camera",
 updateProjectionMatrix$0: function() {
  var t1 = this._fullWidth;
  var t2 = !(t1 == null);
  var t3 = this._near;
  var t4 = this._fov;
  var t5 = this._far;
  if (t2) {
    t2 = this._fullHeight;
    var aspect = $.div(t1, t2);
    var top$ = $.mul($.Math_tan($.div($.mul(t4, 3.141592653589793), 360)), t3);
    var bottom = $.neg(top$);
    var left = $.mul(aspect, bottom);
    var width = $.abs($.sub($.mul(aspect, top$), left));
    var height = $.abs($.sub(top$, bottom));
    var t6 = this._x;
    var t7 = $.add(left, $.div($.mul(t6, width), t1));
    var t8 = $.add(left, $.div($.mul($.add(t6, width), width), t1));
    var t9 = this._y;
    this.projectionMatrix = $.Matrix4_makeFrustum(t7, t8, $.sub(top$, $.div($.mul($.add(t9, height), height), t2)), $.sub(top$, $.div($.mul(t9, height), t2)), t3, t5);
  } else this.projectionMatrix = $.Matrix4_makePerspective(t4, this._aspect, t3, t5);
 },
 get$far: function() {
  return this._far;
 },
 get$near: function() {
  return this._near;
 },
 PerspectiveCamera$4: function(fov, aspect, near, far) {
  this._fov = !(fov == null) ? fov : 50;
  this._aspect = !(aspect == null) ? aspect : 1;
  this._near = !(near == null) ? near : 0.1;
  this._far = !(far == null) ? far : 2000;
  this.updateProjectionMatrix$0();
 }
};

$$.Vector3 = {"":
 ["_z", "_y", "_x"],
 super: "Object",
 distanceToSquared$1: function(v) {
  return $.Vector3$(0, 0, 0).sub$2(this, v).lengthSq$0();
 },
 distanceTo$1: function(v) {
  return $.Math_sqrt(this.distanceToSquared$1(v));
 },
 normalize$0: function() {
  return this.divideScalar$1(this.length$0());
 },
 length$0: function() {
  return $.Math_sqrt(this.lengthSq$0());
 },
 get$length: function() { return new $.BoundClosure(this, 'length$0'); },
 lengthSq$0: function() {
  var t1 = this._x;
  t1 = $.mul(t1, t1);
  var t2 = this._y;
  t1 = $.add(t1, $.mul(t2, t2));
  var t3 = this._z;
  return $.add(t1, $.mul(t3, t3));
 },
 dot$1: function(v) {
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.dot$1$bailout(1, v, t1, 0, 0);
  var t2 = v.get$x();
  if (typeof t2 !== 'number') return this.dot$1$bailout(2, v, t2, t1, 0);
  t2 *= t1;
  t1 = this._y;
  if (typeof t1 !== 'number') return this.dot$1$bailout(3, v, t2, t1, 0);
  var t3 = v.get$y();
  if (typeof t3 !== 'number') return this.dot$1$bailout(4, v, t3, t2, t1);
  t2 += t1 * t3;
  var t4 = this._z;
  if (typeof t4 !== 'number') return this.dot$1$bailout(5, v, t2, t4, 0);
  var t5 = v.get$z();
  if (typeof t5 !== 'number') return this.dot$1$bailout(6, t2, t5, t4, 0);
  return t2 + t4 * t5;
 },
 dot$1$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var v = env0;
      t1 = env1;
      break;
    case 2:
      v = env0;
      t2 = env1;
      t1 = env2;
      break;
    case 3:
      v = env0;
      t2 = env1;
      t1 = env2;
      break;
    case 4:
      v = env0;
      t3 = env1;
      t2 = env2;
      t1 = env3;
      break;
    case 5:
      v = env0;
      t2 = env1;
      t4 = env2;
      break;
    case 6:
      t2 = env0;
      t5 = env1;
      t4 = env2;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._x;
    case 1:
      state = 0;
      var t2 = v.get$x();
    case 2:
      state = 0;
      t2 = $.mul(t1, t2);
      t1 = this._y;
    case 3:
      state = 0;
      var t3 = v.get$y();
    case 4:
      state = 0;
      t2 = $.add(t2, $.mul(t1, t3));
      var t4 = this._z;
    case 5:
      state = 0;
      var t5 = v.get$z();
    case 6:
      state = 0;
      return $.add(t2, $.mul(t4, t5));
  }
 },
 divideScalar$1: function(s) {
  if (typeof s !== 'number') return this.divideScalar$1$bailout(1, s, 0);
  if (!(s === 0)) {
    var t1 = this._x;
    if (typeof t1 !== 'number') return this.divideScalar$1$bailout(2, s, t1);
    this._x = t1 / s;
    var t2 = this._y;
    if (typeof t2 !== 'number') return this.divideScalar$1$bailout(3, s, t2);
    this._y = t2 / s;
    var t3 = this._z;
    if (typeof t3 !== 'number') return this.divideScalar$1$bailout(4, s, t3);
    this._z = t3 / s;
  } else {
    this._x = 0;
    this._y = 0;
    this._z = 0;
  }
  return this;
 },
 divideScalar$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      var s = env0;
      break;
    case 2:
      s = env0;
      t1 = env1;
      break;
    case 3:
      s = env0;
      t2 = env1;
      break;
    case 4:
      s = env0;
      t3 = env1;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 2:
    case 3:
    case 4:
      if (state == 2 || state == 3 || state == 4 || (state == 0 && !(s === 0))) {
        switch (state) {
          case 0:
            var t1 = this._x;
          case 2:
            state = 0;
            this._x = $.div(t1, s);
            var t2 = this._y;
          case 3:
            state = 0;
            this._y = $.div(t2, s);
            var t3 = this._z;
          case 4:
            state = 0;
            this._z = $.div(t3, s);
        }
      } else {
        this._x = 0;
        this._y = 0;
        this._z = 0;
      }
      return this;
  }
 },
 multiplyScalar$1: function(s) {
  if (typeof s !== 'number') return this.multiplyScalar$1$bailout(1, s, 0);
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.multiplyScalar$1$bailout(2, s, t1);
  this._x = t1 * s;
  var t2 = this._y;
  if (typeof t2 !== 'number') return this.multiplyScalar$1$bailout(3, s, t2);
  this._y = t2 * s;
  var t3 = this._z;
  if (typeof t3 !== 'number') return this.multiplyScalar$1$bailout(4, s, t3);
  this._z = t3 * s;
  return this;
 },
 multiplyScalar$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      var s = env0;
      break;
    case 2:
      s = env0;
      t1 = env1;
      break;
    case 3:
      s = env0;
      t2 = env1;
      break;
    case 4:
      s = env0;
      t3 = env1;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      var t1 = this._x;
    case 2:
      state = 0;
      this._x = $.mul(t1, s);
      var t2 = this._y;
    case 3:
      state = 0;
      this._y = $.mul(t2, s);
      var t3 = this._z;
    case 4:
      state = 0;
      this._z = $.mul(t3, s);
      return this;
  }
 },
 multiply$2: function(a, b) {
  var t1 = a.get$x();
  if (typeof t1 !== 'number') return this.multiply$2$bailout(1, a, b, t1, 0);
  var t2 = b.get$x();
  if (typeof t2 !== 'number') return this.multiply$2$bailout(2, a, b, t1, t2);
  this._x = t1 * t2;
  var t3 = a.get$y();
  if (typeof t3 !== 'number') return this.multiply$2$bailout(3, a, b, t3, 0);
  var t4 = b.get$y();
  if (typeof t4 !== 'number') return this.multiply$2$bailout(4, a, b, t3, t4);
  this._y = t3 * t4;
  var t5 = a.get$z();
  if (typeof t5 !== 'number') return this.multiply$2$bailout(5, b, t5, 0, 0);
  var t6 = b.get$z();
  if (typeof t6 !== 'number') return this.multiply$2$bailout(6, t5, t6, 0, 0);
  this._z = t5 * t6;
  return this;
 },
 multiply$2$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var a = env0;
      var b = env1;
      t1 = env2;
      break;
    case 2:
      a = env0;
      b = env1;
      t1 = env2;
      t2 = env3;
      break;
    case 3:
      a = env0;
      b = env1;
      t3 = env2;
      break;
    case 4:
      a = env0;
      b = env1;
      t3 = env2;
      t4 = env3;
      break;
    case 5:
      b = env0;
      t5 = env1;
      break;
    case 6:
      t5 = env0;
      t6 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = a.get$x();
    case 1:
      state = 0;
      var t2 = b.get$x();
    case 2:
      state = 0;
      this._x = $.mul(t1, t2);
      var t3 = a.get$y();
    case 3:
      state = 0;
      var t4 = b.get$y();
    case 4:
      state = 0;
      this._y = $.mul(t3, t4);
      var t5 = a.get$z();
    case 5:
      state = 0;
      var t6 = b.get$z();
    case 6:
      state = 0;
      this._z = $.mul(t5, t6);
      return this;
  }
 },
 sub$2: function(v1, v2) {
  var t1 = v1.get$x();
  if (typeof t1 !== 'number') return this.sub$2$bailout(1, v1, v2, t1, 0);
  var t2 = v2.get$x();
  if (typeof t2 !== 'number') return this.sub$2$bailout(2, v1, v2, t1, t2);
  this._x = t1 - t2;
  var t3 = v1.get$y();
  if (typeof t3 !== 'number') return this.sub$2$bailout(3, v1, v2, t3, 0);
  var t4 = v2.get$y();
  if (typeof t4 !== 'number') return this.sub$2$bailout(4, v1, v2, t3, t4);
  this._y = t3 - t4;
  var t5 = v1.get$z();
  if (typeof t5 !== 'number') return this.sub$2$bailout(5, v2, t5, 0, 0);
  var t6 = v2.get$z();
  if (typeof t6 !== 'number') return this.sub$2$bailout(6, t5, t6, 0, 0);
  this._z = t5 - t6;
  return this;
 },
 sub$2$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var v1 = env0;
      var v2 = env1;
      t1 = env2;
      break;
    case 2:
      v1 = env0;
      v2 = env1;
      t1 = env2;
      t2 = env3;
      break;
    case 3:
      v1 = env0;
      v2 = env1;
      t3 = env2;
      break;
    case 4:
      v1 = env0;
      v2 = env1;
      t3 = env2;
      t4 = env3;
      break;
    case 5:
      v2 = env0;
      t5 = env1;
      break;
    case 6:
      t5 = env0;
      t6 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = v1.get$x();
    case 1:
      state = 0;
      var t2 = v2.get$x();
    case 2:
      state = 0;
      this._x = $.sub(t1, t2);
      var t3 = v1.get$y();
    case 3:
      state = 0;
      var t4 = v2.get$y();
    case 4:
      state = 0;
      this._y = $.sub(t3, t4);
      var t5 = v1.get$z();
    case 5:
      state = 0;
      var t6 = v2.get$z();
    case 6:
      state = 0;
      this._z = $.sub(t5, t6);
      return this;
  }
 },
 addSelf$1: function(v) {
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.addSelf$1$bailout(1, v, t1, 0);
  var t2 = v.get$x();
  if (typeof t2 !== 'number') return this.addSelf$1$bailout(2, v, t1, t2);
  this._x = t1 + t2;
  var t3 = this._y;
  if (typeof t3 !== 'number') return this.addSelf$1$bailout(3, v, t3, 0);
  var t4 = v.get$y();
  if (typeof t4 !== 'number') return this.addSelf$1$bailout(4, v, t4, t3);
  this._y = t3 + t4;
  var t5 = this._z;
  if (typeof t5 !== 'number') return this.addSelf$1$bailout(5, t5, v, 0);
  var t6 = v.get$z();
  if (typeof t6 !== 'number') return this.addSelf$1$bailout(6, t5, t6, 0);
  this._z = t5 + t6;
  return this;
 },
 addSelf$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var v = env0;
      t1 = env1;
      break;
    case 2:
      v = env0;
      t1 = env1;
      t2 = env2;
      break;
    case 3:
      v = env0;
      t3 = env1;
      break;
    case 4:
      v = env0;
      t4 = env1;
      t3 = env2;
      break;
    case 5:
      t5 = env0;
      v = env1;
      break;
    case 6:
      t5 = env0;
      t6 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._x;
    case 1:
      state = 0;
      var t2 = v.get$x();
    case 2:
      state = 0;
      this._x = $.add(t1, t2);
      var t3 = this._y;
    case 3:
      state = 0;
      var t4 = v.get$y();
    case 4:
      state = 0;
      this._y = $.add(t3, t4);
      var t5 = this._z;
    case 5:
      state = 0;
      var t6 = v.get$z();
    case 6:
      state = 0;
      this._z = $.add(t5, t6);
      return this;
  }
 },
 clone$0: function() {
  return $.Vector3$(this._x, this._y, this._z);
 },
 copy$1: function(v) {
  this._x = v.get$x();
  this._y = v.get$y();
  this._z = v.get$z();
  return this;
 },
 setValues$3: function(x, y, z) {
  this._x = x;
  this._y = y;
  this._z = z;
  return this;
 },
 set$z: function(value) {
  this._z = value;
 },
 set$y: function(value) {
  this._y = value;
 },
 set$x: function(value) {
  this._x = value;
 },
 get$z: function() {
  return this._z;
 },
 get$y: function() {
  return this._y;
 },
 get$x: function() {
  return this._x;
 },
 Vector3$3: function(x, y, z) {
  this._x = !(null == x) ? x : 0;
  this._y = !(null == y) ? x : 0;
  this._z = !(null == z) ? z : 0;
 },
 is$Vector3: true
};

$$.Matrix3 = {"":
 ["_m"],
 super: "Object",
 Matrix3$0: function() {
  this._m = [];
 }
};

$$.Matrix4 = {"":
 ["n44?", "n43?", "n42?", "n41?", "n34?", "n33?", "n32?", "n31?", "n24?", "n23?", "n22?", "n21?", "n14?", "n13?", "n12?", "n11?", "_m33", "_flat"],
 super: "Object",
 extractRotation$1: function(m) {
  var vector = $.Matrix4___v1;
  var t1 = vector.setValues$3(m.get$n11(), m.get$n21(), m.get$n31()).length$0();
  if (typeof t1 !== 'number') throw $.iae(t1);
  var scaleX = 1 / t1;
  t1 = vector.setValues$3(m.get$n12(), m.get$n22(), m.get$n32()).length$0();
  if (typeof t1 !== 'number') throw $.iae(t1);
  var scaleY = 1 / t1;
  t1 = vector.setValues$3(m.get$n13(), m.get$n23(), m.get$n33()).length$0();
  if (typeof t1 !== 'number') throw $.iae(t1);
  var scaleZ = 1 / t1;
  t1 = m.get$n11();
  if (typeof t1 !== 'number') return this.extractRotation$1$bailout(1, m, scaleZ, scaleY, t1, scaleX);
  this.n11 = t1 * scaleX;
  var t2 = m.get$n21();
  if (typeof t2 !== 'number') return this.extractRotation$1$bailout(2, m, scaleZ, scaleY, scaleX, t2);
  this.n21 = t2 * scaleX;
  var t3 = m.get$n31();
  if (typeof t3 !== 'number') return this.extractRotation$1$bailout(3, m, scaleZ, scaleY, t3, scaleX);
  this.n31 = t3 * scaleX;
  var t4 = m.get$n12();
  if (typeof t4 !== 'number') return this.extractRotation$1$bailout(4, m, scaleZ, scaleY, t4, 0);
  this.n12 = t4 * scaleY;
  var t5 = m.get$n22();
  if (typeof t5 !== 'number') return this.extractRotation$1$bailout(5, m, scaleZ, scaleY, t5, 0);
  this.n22 = t5 * scaleY;
  var t6 = m.get$n32();
  if (typeof t6 !== 'number') return this.extractRotation$1$bailout(6, m, scaleZ, scaleY, t6, 0);
  this.n32 = t6 * scaleY;
  var t7 = m.get$n13();
  if (typeof t7 !== 'number') return this.extractRotation$1$bailout(7, m, scaleZ, t7, 0, 0);
  this.n13 = t7 * scaleZ;
  var t8 = m.get$n23();
  if (typeof t8 !== 'number') return this.extractRotation$1$bailout(8, m, scaleZ, t8, 0, 0);
  this.n23 = t8 * scaleZ;
  var t9 = m.get$n33();
  if (typeof t9 !== 'number') return this.extractRotation$1$bailout(9, scaleZ, t9, 0, 0, 0);
  this.n33 = t9 * scaleZ;
  return this;
 },
 extractRotation$1$bailout: function(state, env0, env1, env2, env3, env4) {
  switch (state) {
    case 1:
      var m = env0;
      scaleZ = env1;
      scaleY = env2;
      t1 = env3;
      scaleX = env4;
      break;
    case 2:
      m = env0;
      scaleZ = env1;
      scaleY = env2;
      scaleX = env3;
      t2 = env4;
      break;
    case 3:
      m = env0;
      scaleZ = env1;
      scaleY = env2;
      t3 = env3;
      scaleX = env4;
      break;
    case 4:
      m = env0;
      scaleZ = env1;
      scaleY = env2;
      t4 = env3;
      break;
    case 5:
      m = env0;
      scaleZ = env1;
      scaleY = env2;
      t5 = env3;
      break;
    case 6:
      m = env0;
      scaleZ = env1;
      scaleY = env2;
      t6 = env3;
      break;
    case 7:
      m = env0;
      scaleZ = env1;
      t7 = env2;
      break;
    case 8:
      m = env0;
      scaleZ = env1;
      t8 = env2;
      break;
    case 9:
      scaleZ = env0;
      t9 = env1;
      break;
  }
  switch (state) {
    case 0:
      var vector = $.Matrix4___v1;
      var t1 = vector.setValues$3(m.get$n11(), m.get$n21(), m.get$n31()).length$0();
      if (typeof t1 !== 'number') throw $.iae(t1);
      var scaleX = 1 / t1;
      t1 = vector.setValues$3(m.get$n12(), m.get$n22(), m.get$n32()).length$0();
      if (typeof t1 !== 'number') throw $.iae(t1);
      var scaleY = 1 / t1;
      t1 = vector.setValues$3(m.get$n13(), m.get$n23(), m.get$n33()).length$0();
      if (typeof t1 !== 'number') throw $.iae(t1);
      var scaleZ = 1 / t1;
      t1 = m.get$n11();
    case 1:
      state = 0;
      this.n11 = $.mul(t1, scaleX);
      var t2 = m.get$n21();
    case 2:
      state = 0;
      this.n21 = $.mul(t2, scaleX);
      var t3 = m.get$n31();
    case 3:
      state = 0;
      this.n31 = $.mul(t3, scaleX);
      var t4 = m.get$n12();
    case 4:
      state = 0;
      this.n12 = $.mul(t4, scaleY);
      var t5 = m.get$n22();
    case 5:
      state = 0;
      this.n22 = $.mul(t5, scaleY);
      var t6 = m.get$n32();
    case 6:
      state = 0;
      this.n32 = $.mul(t6, scaleY);
      var t7 = m.get$n13();
    case 7:
      state = 0;
      this.n13 = $.mul(t7, scaleZ);
      var t8 = m.get$n23();
    case 8:
      state = 0;
      this.n23 = $.mul(t8, scaleZ);
      var t9 = m.get$n33();
    case 9:
      state = 0;
      this.n33 = $.mul(t9, scaleZ);
      return this;
  }
 },
 scale$1: function(v) {
  var x = v.get$x();
  var y = v.get$y();
  var z = v.get$z();
  this.n11 = $.mul(this.n11, x);
  this.n12 = $.mul(this.n12, y);
  this.n13 = $.mul(this.n13, z);
  this.n21 = $.mul(this.n21, x);
  this.n22 = $.mul(this.n22, y);
  this.n23 = $.mul(this.n23, z);
  this.n31 = $.mul(this.n31, x);
  this.n32 = $.mul(this.n32, y);
  this.n33 = $.mul(this.n33, z);
  this.n41 = $.mul(this.n41, x);
  this.n42 = $.mul(this.n42, y);
  this.n43 = $.mul(this.n43, z);
  return this;
 },
 get$scale: function() { return new $.BoundClosure2(this, 'scale$1'); },
 setRotationFromQuaternion$1: function(q) {
  var x = q.get$x();
  var y = q.get$y();
  var z = q.get$z();
  var w = q.get$w();
  var x2 = $.add(x, x);
  var y2 = $.add(y, y);
  var z2 = $.add(z, z);
  var xx = $.mul(x, x2);
  var xy = $.mul(x, y2);
  var xz = $.mul(x, z2);
  var yy = $.mul(y, y2);
  var yz = $.mul(y, z2);
  var zz = $.mul(z, z2);
  var wx = $.mul(w, x2);
  var wy = $.mul(w, y2);
  var wz = $.mul(w, z2);
  var t1 = $.add(yy, zz);
  if (typeof t1 !== 'number') throw $.iae(t1);
  this.n11 = 1 - t1;
  this.n12 = $.sub(xy, wz);
  this.n13 = $.add(xz, wy);
  this.n21 = $.add(xy, wz);
  var t2 = $.add(xx, zz);
  if (typeof t2 !== 'number') throw $.iae(t2);
  this.n22 = 1 - t2;
  this.n23 = $.sub(yz, wx);
  this.n31 = $.sub(xz, wy);
  this.n32 = $.add(yz, wx);
  var t3 = $.add(xx, yy);
  if (typeof t3 !== 'number') throw $.iae(t3);
  this.n33 = 1 - t3;
  return this;
 },
 setRotationFromEuler$2: function(v, order) {
  var x = v.get$x();
  var y = v.get$y();
  var z = v.get$z();
  var a = $.Math_cos(x);
  var b = $.Math_sin(x);
  var c = $.Math_cos(y);
  var d = $.Math_sin(y);
  var e = $.Math_cos(z);
  var f = $.Math_sin(z);
  switch (order) {
    case 'YXZ':
      var ce = $.mul(c, e);
      var cf = $.mul(c, f);
      var de = $.mul(d, e);
      var df = $.mul(d, f);
      this.n11 = $.add(ce, $.mul(df, b));
      this.n12 = $.sub($.mul(de, b), cf);
      this.n13 = $.mul(a, d);
      this.n21 = $.mul(a, f);
      this.n22 = $.mul(a, e);
      this.n23 = $.neg(b);
      this.n31 = $.sub($.mul(cf, b), de);
      this.n32 = $.add(df, $.mul(ce, b));
      this.n33 = $.mul(a, c);
      break;
    case 'ZXY':
      ce = $.mul(c, e);
      cf = $.mul(c, f);
      de = $.mul(d, e);
      df = $.mul(d, f);
      this.n11 = $.sub(ce, $.mul(df, b));
      this.n12 = $.mul($.neg(a), f);
      this.n13 = $.add(de, $.mul(cf, b));
      this.n21 = $.add(cf, $.mul(de, b));
      this.n22 = $.mul(a, e);
      this.n23 = $.sub(df, $.mul(ce, b));
      this.n31 = $.mul($.neg(a), d);
      this.n32 = b;
      this.n33 = $.mul(a, c);
      break;
    case 'ZYX':
      var ae = $.mul(a, e);
      var af = $.mul(a, f);
      var be = $.mul(b, e);
      var bf = $.mul(b, f);
      this.n11 = $.mul(c, e);
      this.n12 = $.sub($.mul(be, d), af);
      this.n13 = $.add($.mul(ae, d), bf);
      this.n21 = $.mul(c, f);
      this.n22 = $.add($.mul(bf, d), ae);
      this.n23 = $.sub($.mul(af, d), be);
      this.n31 = $.neg(d);
      this.n32 = $.mul(b, c);
      this.n33 = $.mul(a, c);
      break;
    case 'YZX':
      var ac = $.mul(a, c);
      var ad = $.mul(a, d);
      var bc = $.mul(b, c);
      var bd = $.mul(b, d);
      this.n11 = $.mul(c, e);
      this.n12 = $.sub(bd, $.mul(ac, f));
      this.n13 = $.add($.mul(bc, f), ad);
      this.n21 = f;
      this.n22 = $.mul(a, e);
      this.n23 = $.mul($.neg(b), e);
      this.n31 = $.mul($.neg(d), e);
      this.n32 = $.add($.mul(ad, f), bc);
      this.n33 = $.sub(ac, $.mul(bd, f));
      break;
    case 'XZY':
      ac = $.mul(a, c);
      ad = $.mul(a, d);
      bc = $.mul(b, c);
      bd = $.mul(b, d);
      this.n11 = $.mul(c, e);
      this.n12 = $.neg(f);
      this.n13 = $.mul(d, e);
      this.n21 = $.add($.mul(ac, f), bd);
      this.n22 = $.mul(a, e);
      this.n23 = $.sub($.mul(ad, f), bc);
      this.n31 = $.sub($.mul(bc, f), ad);
      this.n32 = $.mul(b, e);
      this.n33 = $.add($.mul(bd, f), ac);
      break;
    default:
      ae = $.mul(a, e);
      af = $.mul(a, f);
      be = $.mul(b, e);
      bf = $.mul(b, f);
      this.n11 = $.mul(c, e);
      this.n12 = $.mul($.neg(c), f);
      this.n13 = d;
      this.n21 = $.add(af, $.mul(be, d));
      this.n22 = $.sub(ae, $.mul(bf, d));
      this.n23 = $.mul($.neg(b), c);
      this.n31 = $.sub(bf, $.mul(ae, d));
      this.n32 = $.add(be, $.mul(af, d));
      this.n33 = $.mul(a, c);
      break;
  }
  return this;
 },
 getInverse$1: function(m) {
  var _n11 = m.get$n11();
  var _n12 = m.get$n12();
  var _n13 = m.get$n13();
  var _n14 = m.get$n14();
  var _n21 = m.get$n21();
  var _n22 = m.get$n22();
  var _n23 = m.get$n23();
  var _n24 = m.get$n24();
  var _n31 = m.get$n31();
  var _n32 = m.get$n32();
  var _n33 = m.get$n33();
  var _n34 = m.get$n34();
  var _n41 = m.get$n41();
  var _n42 = m.get$n42();
  var _n43 = m.get$n43();
  var _n44 = m.get$n44();
  this.n11 = $.add($.sub($.sub($.add($.sub($.mul($.mul(_n23, _n34), _n42), $.mul($.mul(_n24, _n33), _n42)), $.mul($.mul(_n24, _n32), _n43)), $.mul($.mul(_n22, _n34), _n43)), $.mul($.mul(_n23, _n32), _n44)), $.mul($.mul(_n22, _n33), _n44));
  this.n12 = $.sub($.add($.add($.sub($.sub($.mul($.mul(_n14, _n33), _n42), $.mul($.mul(_n13, _n34), _n42)), $.mul($.mul(_n14, _n32), _n43)), $.mul($.mul(_n12, _n34), _n43)), $.mul($.mul(_n13, _n32), _n44)), $.mul($.mul(_n12, _n33), _n44));
  this.n13 = $.add($.sub($.sub($.add($.sub($.mul($.mul(_n13, _n24), _n42), $.mul($.mul(_n14, _n23), _n42)), $.mul($.mul(_n14, _n22), _n43)), $.mul($.mul(_n12, _n24), _n43)), $.mul($.mul(_n13, _n22), _n44)), $.mul($.mul(_n12, _n23), _n44));
  this.n14 = $.sub($.add($.add($.sub($.sub($.mul($.mul(_n14, _n23), _n32), $.mul($.mul(_n13, _n24), _n32)), $.mul($.mul(_n14, _n22), _n33)), $.mul($.mul(_n12, _n24), _n33)), $.mul($.mul(_n13, _n22), _n34)), $.mul($.mul(_n12, _n23), _n34));
  this.n21 = $.sub($.add($.add($.sub($.sub($.mul($.mul(_n24, _n33), _n41), $.mul($.mul(_n23, _n34), _n41)), $.mul($.mul(_n24, _n31), _n43)), $.mul($.mul(_n21, _n34), _n43)), $.mul($.mul(_n23, _n31), _n44)), $.mul($.mul(_n21, _n33), _n44));
  this.n22 = $.add($.sub($.sub($.add($.sub($.mul($.mul(_n13, _n34), _n41), $.mul($.mul(_n14, _n33), _n41)), $.mul($.mul(_n14, _n31), _n43)), $.mul($.mul(_n11, _n34), _n43)), $.mul($.mul(_n13, _n31), _n44)), $.mul($.mul(_n11, _n33), _n44));
  this.n23 = $.sub($.add($.add($.sub($.sub($.mul($.mul(_n14, _n23), _n41), $.mul($.mul(_n13, _n24), _n41)), $.mul($.mul(_n14, _n21), _n43)), $.mul($.mul(_n11, _n24), _n43)), $.mul($.mul(_n13, _n21), _n44)), $.mul($.mul(_n11, _n23), _n44));
  this.n24 = $.add($.sub($.sub($.add($.sub($.mul($.mul(_n13, _n24), _n31), $.mul($.mul(_n14, _n23), _n31)), $.mul($.mul(_n14, _n21), _n33)), $.mul($.mul(_n11, _n24), _n33)), $.mul($.mul(_n13, _n21), _n34)), $.mul($.mul(_n11, _n23), _n34));
  this.n31 = $.add($.sub($.sub($.add($.sub($.mul($.mul(_n22, _n34), _n41), $.mul($.mul(_n24, _n32), _n41)), $.mul($.mul(_n24, _n31), _n42)), $.mul($.mul(_n21, _n34), _n42)), $.mul($.mul(_n22, _n31), _n44)), $.mul($.mul(_n21, _n32), _n44));
  this.n32 = $.sub($.add($.add($.sub($.sub($.mul($.mul(_n14, _n32), _n41), $.mul($.mul(_n12, _n34), _n41)), $.mul($.mul(_n14, _n31), _n42)), $.mul($.mul(_n11, _n34), _n42)), $.mul($.mul(_n12, _n31), _n44)), $.mul($.mul(_n11, _n32), _n44));
  this.n33 = $.add($.sub($.sub($.add($.sub($.mul($.mul(_n12, _n24), _n41), $.mul($.mul(_n14, _n22), _n41)), $.mul($.mul(_n14, _n21), _n42)), $.mul($.mul(_n11, _n24), _n42)), $.mul($.mul(_n12, _n21), _n44)), $.mul($.mul(_n11, _n22), _n44));
  this.n34 = $.sub($.add($.add($.sub($.sub($.mul($.mul(_n14, _n22), _n31), $.mul($.mul(_n12, _n24), _n31)), $.mul($.mul(_n14, _n21), _n32)), $.mul($.mul(_n11, _n24), _n32)), $.mul($.mul(_n12, _n21), _n34)), $.mul($.mul(_n11, _n22), _n34));
  this.n41 = $.sub($.add($.add($.sub($.sub($.mul($.mul(_n23, _n32), _n41), $.mul($.mul(_n22, _n33), _n41)), $.mul($.mul(_n23, _n31), _n42)), $.mul($.mul(_n21, _n33), _n42)), $.mul($.mul(_n22, _n31), _n43)), $.mul($.mul(_n21, _n32), _n43));
  this.n42 = $.add($.sub($.sub($.add($.sub($.mul($.mul(_n12, _n33), _n41), $.mul($.mul(_n13, _n32), _n41)), $.mul($.mul(_n13, _n31), _n42)), $.mul($.mul(_n11, _n33), _n42)), $.mul($.mul(_n12, _n31), _n43)), $.mul($.mul(_n11, _n32), _n43));
  this.n43 = $.sub($.add($.add($.sub($.sub($.mul($.mul(_n13, _n22), _n41), $.mul($.mul(_n12, _n23), _n41)), $.mul($.mul(_n13, _n21), _n42)), $.mul($.mul(_n11, _n23), _n42)), $.mul($.mul(_n12, _n21), _n43)), $.mul($.mul(_n11, _n22), _n43));
  this.n44 = $.add($.sub($.sub($.add($.sub($.mul($.mul(_n12, _n23), _n31), $.mul($.mul(_n13, _n22), _n31)), $.mul($.mul(_n13, _n21), _n32)), $.mul($.mul(_n11, _n23), _n32)), $.mul($.mul(_n12, _n21), _n33)), $.mul($.mul(_n11, _n22), _n33));
  var t1 = m.determinant$0();
  if (typeof t1 !== 'number') throw $.iae(t1);
  this.multiplyScalar$1(1 / t1);
  return this;
 },
 getColumnZ$0: function() {
  return $.Matrix4___v1.setValues$3(this.n13, this.n23, this.n33);
 },
 getColumnY$0: function() {
  return $.Matrix4___v1.setValues$3(this.n12, this.n22, this.n32);
 },
 getColumnX$0: function() {
  return $.Matrix4___v1.setValues$3(this.n11, this.n21, this.n31);
 },
 getPosition$0: function() {
  return $.Matrix4___v1.setValues$3(this.n14, this.n24, this.n34);
 },
 setPosition$1: function(v) {
  this.n14 = v.get$x();
  this.n24 = v.get$y();
  this.n34 = v.get$z();
  return this;
 },
 determinant$0: function() {
  var m11 = this.n11;
  var m12 = this.n12;
  var m13 = this.n13;
  var m14 = this.n14;
  var m21 = this.n21;
  var m22 = this.n22;
  var m23 = this.n23;
  var m24 = this.n24;
  var m31 = this.n31;
  var m32 = this.n32;
  var m33 = this.n33;
  var m34 = this.n34;
  var m41 = this.n41;
  var m42 = this.n42;
  var m43 = this.n43;
  var m44 = this.n44;
  return $.add($.sub($.sub($.add($.add($.sub($.sub($.add($.add($.sub($.sub($.add($.add($.sub($.sub($.add($.add($.sub($.sub($.add($.add($.sub($.sub($.mul($.mul($.mul(m14, m23), m32), m41), $.mul($.mul($.mul(m13, m24), m32), m41)), $.mul($.mul($.mul(m14, m22), m33), m41)), $.mul($.mul($.mul(m12, m24), m33), m41)), $.mul($.mul($.mul(m13, m22), m34), m41)), $.mul($.mul($.mul(m12, m23), m34), m41)), $.mul($.mul($.mul(m14, m23), m31), m42)), $.mul($.mul($.mul(m13, m24), m31), m42)), $.mul($.mul($.mul(m14, m21), m33), m42)), $.mul($.mul($.mul(m11, m24), m33), m42)), $.mul($.mul($.mul(m13, m21), m34), m42)), $.mul($.mul($.mul(m11, m23), m34), m42)), $.mul($.mul($.mul(m14, m22), m31), m43)), $.mul($.mul($.mul(m12, m24), m31), m43)), $.mul($.mul($.mul(m14, m21), m32), m43)), $.mul($.mul($.mul(m11, m24), m32), m43)), $.mul($.mul($.mul(m12, m21), m34), m43)), $.mul($.mul($.mul(m11, m22), m34), m43)), $.mul($.mul($.mul(m13, m22), m31), m44)), $.mul($.mul($.mul(m12, m23), m31), m44)), $.mul($.mul($.mul(m13, m21), m32), m44)), $.mul($.mul($.mul(m11, m23), m32), m44)), $.mul($.mul($.mul(m12, m21), m33), m44)), $.mul($.mul($.mul(m11, m22), m33), m44));
 },
 rotateAxis$1: function(v) {
  var vx = v.get$x();
  var vy = v.get$y();
  var vz = v.get$z();
  v.set$x($.add($.add($.mul(vx, this.n11), $.mul(vy, this.n12)), $.mul(vz, this.n13)));
  v.set$y($.add($.add($.mul(vx, this.n21), $.mul(vy, this.n22)), $.mul(vz, this.n23)));
  v.set$z($.add($.add($.mul(vx, this.n31), $.mul(vy, this.n32)), $.mul(vz, this.n33)));
  v.normalize$0();
  return v;
 },
 multiplyVector4$1: function(v) {
  var vx = v.get$x();
  if (typeof vx !== 'number') return this.multiplyVector4$1$bailout(1, v, vx, 0, 0, 0, 0, 0);
  var vy = v.get$y();
  if (typeof vy !== 'number') return this.multiplyVector4$1$bailout(2, v, vx, vy, 0, 0, 0, 0);
  var vz = v.get$z();
  if (typeof vz !== 'number') return this.multiplyVector4$1$bailout(3, v, vx, vy, vz, 0, 0, 0);
  var vw = v.get$w();
  if (typeof vw !== 'number') return this.multiplyVector4$1$bailout(4, v, vx, vy, vz, vw, 0, 0);
  var t1 = this.n11;
  if (typeof t1 !== 'number') return this.multiplyVector4$1$bailout(5, v, vx, vy, vz, vw, t1, 0);
  t1 *= vx;
  var t2 = this.n12;
  if (typeof t2 !== 'number') return this.multiplyVector4$1$bailout(6, v, vx, vy, vz, vw, t2, t1);
  t1 += t2 * vy;
  var t3 = this.n13;
  if (typeof t3 !== 'number') return this.multiplyVector4$1$bailout(7, v, vx, vy, vz, vw, t3, t1);
  t1 += t3 * vz;
  var t4 = this.n14;
  if (typeof t4 !== 'number') return this.multiplyVector4$1$bailout(8, v, vx, vy, vz, vw, t4, t1);
  v.set$x(t1 + t4 * vw);
  var t5 = this.n21;
  if (typeof t5 !== 'number') return this.multiplyVector4$1$bailout(9, v, vx, vy, vz, vw, t5, 0);
  t5 *= vx;
  var t6 = this.n22;
  if (typeof t6 !== 'number') return this.multiplyVector4$1$bailout(10, v, vx, vy, vz, vw, t6, t5);
  t5 += t6 * vy;
  var t7 = this.n23;
  if (typeof t7 !== 'number') return this.multiplyVector4$1$bailout(11, v, t5, vx, vy, vz, vw, t7);
  t5 += t7 * vz;
  var t8 = this.n24;
  if (typeof t8 !== 'number') return this.multiplyVector4$1$bailout(12, v, vx, vy, vz, vw, t5, t8);
  v.set$y(t5 + t8 * vw);
  var t9 = this.n31;
  if (typeof t9 !== 'number') return this.multiplyVector4$1$bailout(13, v, vx, vy, vz, vw, t9, 0);
  t9 *= vx;
  var t10 = this.n32;
  if (typeof t10 !== 'number') return this.multiplyVector4$1$bailout(14, v, vx, vy, vz, vw, t10, t9);
  t9 += t10 * vy;
  var t11 = this.n33;
  if (typeof t11 !== 'number') return this.multiplyVector4$1$bailout(15, v, vx, vy, vz, vw, t9, t11);
  t9 += t11 * vz;
  var t12 = this.n34;
  if (typeof t12 !== 'number') return this.multiplyVector4$1$bailout(16, v, t12, vx, vy, vz, vw, t9);
  v.set$z(t9 + t12 * vw);
  var t13 = this.n41;
  if (typeof t13 !== 'number') return this.multiplyVector4$1$bailout(17, v, t13, vx, vy, vz, vw, 0);
  t13 *= vx;
  var t14 = this.n42;
  if (typeof t14 !== 'number') return this.multiplyVector4$1$bailout(18, v, t13, t14, vy, vz, vw, 0);
  t13 += t14 * vy;
  var t15 = this.n43;
  if (typeof t15 !== 'number') return this.multiplyVector4$1$bailout(19, v, t15, vz, vw, t13, 0, 0);
  t13 += t15 * vz;
  var t16 = this.n44;
  if (typeof t16 !== 'number') return this.multiplyVector4$1$bailout(20, v, t13, t16, vw, 0, 0, 0);
  v.set$w(t13 + t16 * vw);
  return v;
 },
 multiplyVector4$1$bailout: function(state, env0, env1, env2, env3, env4, env5, env6) {
  switch (state) {
    case 1:
      var v = env0;
      vx = env1;
      break;
    case 2:
      v = env0;
      vx = env1;
      vy = env2;
      break;
    case 3:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      break;
    case 4:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      break;
    case 5:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t1 = env5;
      break;
    case 6:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t2 = env5;
      t1 = env6;
      break;
    case 7:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t3 = env5;
      t1 = env6;
      break;
    case 8:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t4 = env5;
      t1 = env6;
      break;
    case 9:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t5 = env5;
      break;
    case 10:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t6 = env5;
      t5 = env6;
      break;
    case 11:
      v = env0;
      t5 = env1;
      vx = env2;
      vy = env3;
      vz = env4;
      vw = env5;
      t7 = env6;
      break;
    case 12:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t5 = env5;
      t8 = env6;
      break;
    case 13:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t9 = env5;
      break;
    case 14:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t10 = env5;
      t9 = env6;
      break;
    case 15:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      vw = env4;
      t9 = env5;
      t11 = env6;
      break;
    case 16:
      v = env0;
      t12 = env1;
      vx = env2;
      vy = env3;
      vz = env4;
      vw = env5;
      t9 = env6;
      break;
    case 17:
      v = env0;
      t13 = env1;
      vx = env2;
      vy = env3;
      vz = env4;
      vw = env5;
      break;
    case 18:
      v = env0;
      t13 = env1;
      t14 = env2;
      vy = env3;
      vz = env4;
      vw = env5;
      break;
    case 19:
      v = env0;
      t15 = env1;
      vz = env2;
      vw = env3;
      t13 = env4;
      break;
    case 20:
      v = env0;
      t13 = env1;
      t16 = env2;
      vw = env3;
      break;
  }
  switch (state) {
    case 0:
      var vx = v.get$x();
    case 1:
      state = 0;
      var vy = v.get$y();
    case 2:
      state = 0;
      var vz = v.get$z();
    case 3:
      state = 0;
      var vw = v.get$w();
    case 4:
      state = 0;
      var t1 = this.n11;
    case 5:
      state = 0;
      t1 = $.mul(t1, vx);
      var t2 = this.n12;
    case 6:
      state = 0;
      t1 = $.add(t1, $.mul(t2, vy));
      var t3 = this.n13;
    case 7:
      state = 0;
      t1 = $.add(t1, $.mul(t3, vz));
      var t4 = this.n14;
    case 8:
      state = 0;
      v.set$x($.add(t1, $.mul(t4, vw)));
      var t5 = this.n21;
    case 9:
      state = 0;
      t5 = $.mul(t5, vx);
      var t6 = this.n22;
    case 10:
      state = 0;
      t5 = $.add(t5, $.mul(t6, vy));
      var t7 = this.n23;
    case 11:
      state = 0;
      t5 = $.add(t5, $.mul(t7, vz));
      var t8 = this.n24;
    case 12:
      state = 0;
      v.set$y($.add(t5, $.mul(t8, vw)));
      var t9 = this.n31;
    case 13:
      state = 0;
      t9 = $.mul(t9, vx);
      var t10 = this.n32;
    case 14:
      state = 0;
      t9 = $.add(t9, $.mul(t10, vy));
      var t11 = this.n33;
    case 15:
      state = 0;
      t9 = $.add(t9, $.mul(t11, vz));
      var t12 = this.n34;
    case 16:
      state = 0;
      v.set$z($.add(t9, $.mul(t12, vw)));
      var t13 = this.n41;
    case 17:
      state = 0;
      t13 = $.mul(t13, vx);
      var t14 = this.n42;
    case 18:
      state = 0;
      t13 = $.add(t13, $.mul(t14, vy));
      var t15 = this.n43;
    case 19:
      state = 0;
      t13 = $.add(t13, $.mul(t15, vz));
      var t16 = this.n44;
    case 20:
      state = 0;
      v.set$w($.add(t13, $.mul(t16, vw)));
      return v;
  }
 },
 multiplyVector3$1: function(v) {
  var vx = v.get$x();
  if (typeof vx !== 'number') return this.multiplyVector3$1$bailout(1, v, vx, 0, 0, 0, 0, 0);
  var vy = v.get$y();
  if (typeof vy !== 'number') return this.multiplyVector3$1$bailout(2, v, vx, vy, 0, 0, 0, 0);
  var vz = v.get$z();
  if (typeof vz !== 'number') return this.multiplyVector3$1$bailout(3, v, vx, vy, vz, 0, 0, 0);
  var t1 = this.n41;
  if (typeof t1 !== 'number') return this.multiplyVector3$1$bailout(4, v, vx, vy, vz, t1, 0, 0);
  t1 *= vx;
  var t2 = this.n42;
  if (typeof t2 !== 'number') return this.multiplyVector3$1$bailout(5, v, vx, vy, vz, t2, t1, 0);
  t1 += t2 * vy;
  var t3 = this.n43;
  if (typeof t3 !== 'number') return this.multiplyVector3$1$bailout(6, v, vx, vy, vz, t3, t1, 0);
  t1 += t3 * vz;
  var t4 = this.n44;
  if (typeof t4 !== 'number') return this.multiplyVector3$1$bailout(7, v, vx, vy, vz, t1, t4, 0);
  var d = 1 / (t1 + t4);
  var t5 = this.n11;
  if (typeof t5 !== 'number') return this.multiplyVector3$1$bailout(8, v, vx, vy, vz, d, t5, 0);
  t5 *= vx;
  var t6 = this.n12;
  if (typeof t6 !== 'number') return this.multiplyVector3$1$bailout(9, v, vx, vy, vz, d, t6, t5);
  t5 += t6 * vy;
  var t7 = this.n13;
  if (typeof t7 !== 'number') return this.multiplyVector3$1$bailout(10, v, t5, vx, vy, vz, d, t7);
  t5 += t7 * vz;
  var t8 = this.n14;
  if (typeof t8 !== 'number') return this.multiplyVector3$1$bailout(11, v, vx, vy, vz, t5, d, t8);
  v.set$x((t5 + t8) * d);
  var t9 = this.n21;
  if (typeof t9 !== 'number') return this.multiplyVector3$1$bailout(12, v, vx, vy, vz, d, t9, 0);
  t9 *= vx;
  var t10 = this.n22;
  if (typeof t10 !== 'number') return this.multiplyVector3$1$bailout(13, v, vx, vy, vz, d, t9, t10);
  t9 += t10 * vy;
  var t11 = this.n23;
  if (typeof t11 !== 'number') return this.multiplyVector3$1$bailout(14, v, vx, vy, vz, t9, d, t11);
  t9 += t11 * vz;
  var t12 = this.n24;
  if (typeof t12 !== 'number') return this.multiplyVector3$1$bailout(15, v, t12, vx, vy, vz, d, t9);
  v.set$y((t9 + t12) * d);
  var t13 = this.n31;
  if (typeof t13 !== 'number') return this.multiplyVector3$1$bailout(16, v, t13, vx, vy, vz, d, 0);
  t13 *= vx;
  var t14 = this.n32;
  if (typeof t14 !== 'number') return this.multiplyVector3$1$bailout(17, v, t13, t14, vy, vz, d, 0);
  t13 += t14 * vy;
  var t15 = this.n33;
  if (typeof t15 !== 'number') return this.multiplyVector3$1$bailout(18, v, d, t15, vz, t13, 0, 0);
  t13 += t15 * vz;
  var t16 = this.n34;
  if (typeof t16 !== 'number') return this.multiplyVector3$1$bailout(19, v, d, t13, t16, 0, 0, 0);
  v.set$z((t13 + t16) * d);
  return v;
 },
 multiplyVector3$1$bailout: function(state, env0, env1, env2, env3, env4, env5, env6) {
  switch (state) {
    case 1:
      var v = env0;
      vx = env1;
      break;
    case 2:
      v = env0;
      vx = env1;
      vy = env2;
      break;
    case 3:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      break;
    case 4:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      t1 = env4;
      break;
    case 5:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      t2 = env4;
      t1 = env5;
      break;
    case 6:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      t3 = env4;
      t1 = env5;
      break;
    case 7:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      t1 = env4;
      t4 = env5;
      break;
    case 8:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      d = env4;
      t4 = env5;
      break;
    case 9:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      d = env4;
      t1 = env5;
      t4 = env6;
      break;
    case 10:
      v = env0;
      t4 = env1;
      vx = env2;
      vy = env3;
      vz = env4;
      d = env5;
      t5 = env6;
      break;
    case 11:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      t4 = env4;
      d = env5;
      t6 = env6;
      break;
    case 12:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      d = env4;
      t7 = env5;
      break;
    case 13:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      d = env4;
      t7 = env5;
      t8 = env6;
      break;
    case 14:
      v = env0;
      vx = env1;
      vy = env2;
      vz = env3;
      t7 = env4;
      d = env5;
      t9 = env6;
      break;
    case 15:
      v = env0;
      t10 = env1;
      vx = env2;
      vy = env3;
      vz = env4;
      d = env5;
      t7 = env6;
      break;
    case 16:
      v = env0;
      t11 = env1;
      vx = env2;
      vy = env3;
      vz = env4;
      d = env5;
      break;
    case 17:
      v = env0;
      t11 = env1;
      t12 = env2;
      vy = env3;
      vz = env4;
      d = env5;
      break;
    case 18:
      v = env0;
      d = env1;
      t13 = env2;
      vz = env3;
      t11 = env4;
      break;
    case 19:
      v = env0;
      d = env1;
      t11 = env2;
      t14 = env3;
      break;
  }
  switch (state) {
    case 0:
      var vx = v.get$x();
    case 1:
      state = 0;
      var vy = v.get$y();
    case 2:
      state = 0;
      var vz = v.get$z();
    case 3:
      state = 0;
      var t1 = this.n41;
    case 4:
      state = 0;
      t1 = $.mul(t1, vx);
      var t2 = this.n42;
    case 5:
      state = 0;
      t1 = $.add(t1, $.mul(t2, vy));
      var t3 = this.n43;
    case 6:
      state = 0;
      t1 = $.add(t1, $.mul(t3, vz));
      var t4 = this.n44;
    case 7:
      state = 0;
      t4 = $.add(t1, t4);
      if (typeof t4 !== 'number') throw $.iae(t4);
      var d = 1 / t4;
      t4 = this.n11;
    case 8:
      state = 0;
      t4 = $.mul(t4, vx);
      t1 = this.n12;
    case 9:
      state = 0;
      t4 = $.add(t4, $.mul(t1, vy));
      var t5 = this.n13;
    case 10:
      state = 0;
      t4 = $.add(t4, $.mul(t5, vz));
      var t6 = this.n14;
    case 11:
      state = 0;
      v.set$x($.mul($.add(t4, t6), d));
      var t7 = this.n21;
    case 12:
      state = 0;
      t7 = $.mul(t7, vx);
      var t8 = this.n22;
    case 13:
      state = 0;
      t7 = $.add(t7, $.mul(t8, vy));
      var t9 = this.n23;
    case 14:
      state = 0;
      t7 = $.add(t7, $.mul(t9, vz));
      var t10 = this.n24;
    case 15:
      state = 0;
      v.set$y($.mul($.add(t7, t10), d));
      var t11 = this.n31;
    case 16:
      state = 0;
      t11 = $.mul(t11, vx);
      var t12 = this.n32;
    case 17:
      state = 0;
      t11 = $.add(t11, $.mul(t12, vy));
      var t13 = this.n33;
    case 18:
      state = 0;
      t11 = $.add(t11, $.mul(t13, vz));
      var t14 = this.n34;
    case 19:
      state = 0;
      v.set$z($.mul($.add(t11, t14), d));
      return v;
  }
 },
 multiplyScalar$1: function(s) {
  if (typeof s !== 'number') return this.multiplyScalar$1$bailout(1, s, 0);
  var t1 = this.n11;
  if (typeof t1 !== 'number') return this.multiplyScalar$1$bailout(2, s, t1);
  this.n11 = t1 * s;
  var t2 = this.n12;
  if (typeof t2 !== 'number') return this.multiplyScalar$1$bailout(3, s, t2);
  this.n12 = t2 * s;
  var t3 = this.n13;
  if (typeof t3 !== 'number') return this.multiplyScalar$1$bailout(4, s, t3);
  this.n13 = t3 * s;
  var t4 = this.n14;
  if (typeof t4 !== 'number') return this.multiplyScalar$1$bailout(5, s, t4);
  this.n14 = t4 * s;
  var t5 = this.n21;
  if (typeof t5 !== 'number') return this.multiplyScalar$1$bailout(6, s, t5);
  this.n21 = t5 * s;
  var t6 = this.n22;
  if (typeof t6 !== 'number') return this.multiplyScalar$1$bailout(7, s, t6);
  this.n22 = t6 * s;
  var t7 = this.n23;
  if (typeof t7 !== 'number') return this.multiplyScalar$1$bailout(8, s, t7);
  this.n23 = t7 * s;
  var t8 = this.n24;
  if (typeof t8 !== 'number') return this.multiplyScalar$1$bailout(9, s, t8);
  this.n24 = t8 * s;
  var t9 = this.n31;
  if (typeof t9 !== 'number') return this.multiplyScalar$1$bailout(10, s, t9);
  this.n31 = t9 * s;
  var t10 = this.n32;
  if (typeof t10 !== 'number') return this.multiplyScalar$1$bailout(11, s, t10);
  this.n32 = t10 * s;
  var t11 = this.n33;
  if (typeof t11 !== 'number') return this.multiplyScalar$1$bailout(12, s, t11);
  this.n33 = t11 * s;
  var t12 = this.n34;
  if (typeof t12 !== 'number') return this.multiplyScalar$1$bailout(13, s, t12);
  this.n34 = t12 * s;
  var t13 = this.n41;
  if (typeof t13 !== 'number') return this.multiplyScalar$1$bailout(14, s, t13);
  this.n41 = t13 * s;
  var t14 = this.n42;
  if (typeof t14 !== 'number') return this.multiplyScalar$1$bailout(15, s, t14);
  this.n42 = t14 * s;
  var t15 = this.n43;
  if (typeof t15 !== 'number') return this.multiplyScalar$1$bailout(16, s, t15);
  this.n43 = t15 * s;
  var t16 = this.n44;
  if (typeof t16 !== 'number') return this.multiplyScalar$1$bailout(17, s, t16);
  this.n44 = t16 * s;
  return this;
 },
 multiplyScalar$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      var s = env0;
      break;
    case 2:
      s = env0;
      t1 = env1;
      break;
    case 3:
      s = env0;
      t2 = env1;
      break;
    case 4:
      s = env0;
      t3 = env1;
      break;
    case 5:
      s = env0;
      t4 = env1;
      break;
    case 6:
      s = env0;
      t5 = env1;
      break;
    case 7:
      s = env0;
      t6 = env1;
      break;
    case 8:
      s = env0;
      t7 = env1;
      break;
    case 9:
      s = env0;
      t8 = env1;
      break;
    case 10:
      s = env0;
      t9 = env1;
      break;
    case 11:
      s = env0;
      t10 = env1;
      break;
    case 12:
      s = env0;
      t11 = env1;
      break;
    case 13:
      s = env0;
      t12 = env1;
      break;
    case 14:
      s = env0;
      t13 = env1;
      break;
    case 15:
      s = env0;
      t14 = env1;
      break;
    case 16:
      s = env0;
      t15 = env1;
      break;
    case 17:
      s = env0;
      t16 = env1;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      var t1 = this.n11;
    case 2:
      state = 0;
      this.n11 = $.mul(t1, s);
      var t2 = this.n12;
    case 3:
      state = 0;
      this.n12 = $.mul(t2, s);
      var t3 = this.n13;
    case 4:
      state = 0;
      this.n13 = $.mul(t3, s);
      var t4 = this.n14;
    case 5:
      state = 0;
      this.n14 = $.mul(t4, s);
      var t5 = this.n21;
    case 6:
      state = 0;
      this.n21 = $.mul(t5, s);
      var t6 = this.n22;
    case 7:
      state = 0;
      this.n22 = $.mul(t6, s);
      var t7 = this.n23;
    case 8:
      state = 0;
      this.n23 = $.mul(t7, s);
      var t8 = this.n24;
    case 9:
      state = 0;
      this.n24 = $.mul(t8, s);
      var t9 = this.n31;
    case 10:
      state = 0;
      this.n31 = $.mul(t9, s);
      var t10 = this.n32;
    case 11:
      state = 0;
      this.n32 = $.mul(t10, s);
      var t11 = this.n33;
    case 12:
      state = 0;
      this.n33 = $.mul(t11, s);
      var t12 = this.n34;
    case 13:
      state = 0;
      this.n34 = $.mul(t12, s);
      var t13 = this.n41;
    case 14:
      state = 0;
      this.n41 = $.mul(t13, s);
      var t14 = this.n42;
    case 15:
      state = 0;
      this.n42 = $.mul(t14, s);
      var t15 = this.n43;
    case 16:
      state = 0;
      this.n43 = $.mul(t15, s);
      var t16 = this.n44;
    case 17:
      state = 0;
      this.n44 = $.mul(t16, s);
      return this;
  }
 },
 multiply$2: function(a, b) {
  var a11 = a.get$n11();
  if (typeof a11 !== 'number') return this.multiply$2$bailout(1, a, b, a11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a12 = a.get$n12();
  if (typeof a12 !== 'number') return this.multiply$2$bailout(2, a, b, a11, a12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a13 = a.get$n13();
  if (typeof a13 !== 'number') return this.multiply$2$bailout(3, a, b, a11, a12, a13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a14 = a.get$n14();
  if (typeof a14 !== 'number') return this.multiply$2$bailout(4, a, b, a11, a12, a13, a14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a21 = a.get$n21();
  if (typeof a21 !== 'number') return this.multiply$2$bailout(5, a, b, a11, a12, a13, a14, a21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a22 = a.get$n22();
  if (typeof a22 !== 'number') return this.multiply$2$bailout(6, a, b, a11, a12, a13, a14, a21, a22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a23 = a.get$n23();
  if (typeof a23 !== 'number') return this.multiply$2$bailout(7, a, b, a11, a12, a13, a14, a21, a22, a23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a24 = a.get$n24();
  if (typeof a24 !== 'number') return this.multiply$2$bailout(8, a, b, a11, a12, a13, a14, a21, a22, a23, a24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a31 = a.get$n31();
  if (typeof a31 !== 'number') return this.multiply$2$bailout(9, a, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a32 = a.get$n32();
  if (typeof a32 !== 'number') return this.multiply$2$bailout(10, a, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a33 = a.get$n33();
  if (typeof a33 !== 'number') return this.multiply$2$bailout(11, a, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a34 = a.get$n34();
  if (typeof a34 !== 'number') return this.multiply$2$bailout(12, a, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a41 = a.get$n41();
  if (typeof a41 !== 'number') return this.multiply$2$bailout(13, a, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a42 = a.get$n42();
  if (typeof a42 !== 'number') return this.multiply$2$bailout(14, a, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a43 = a.get$n43();
  if (typeof a43 !== 'number') return this.multiply$2$bailout(15, a, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var a44 = a.get$n44();
  if (typeof a44 !== 'number') return this.multiply$2$bailout(16, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var b11 = b.get$n11();
  if (typeof b11 !== 'number') return this.multiply$2$bailout(17, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var b12 = b.get$n12();
  if (typeof b12 !== 'number') return this.multiply$2$bailout(18, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var b13 = b.get$n13();
  if (typeof b13 !== 'number') return this.multiply$2$bailout(19, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var b14 = b.get$n14();
  if (typeof b14 !== 'number') return this.multiply$2$bailout(20, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var b21 = b.get$n21();
  if (typeof b21 !== 'number') return this.multiply$2$bailout(21, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var b22 = b.get$n22();
  if (typeof b22 !== 'number') return this.multiply$2$bailout(22, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var b23 = b.get$n23();
  if (typeof b23 !== 'number') return this.multiply$2$bailout(23, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, 0, 0, 0, 0, 0, 0, 0, 0);
  var b24 = b.get$n24();
  if (typeof b24 !== 'number') return this.multiply$2$bailout(24, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, b24, 0, 0, 0, 0, 0, 0, 0);
  var b31 = b.get$n31();
  if (typeof b31 !== 'number') return this.multiply$2$bailout(25, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, b24, b31, 0, 0, 0, 0, 0, 0);
  var b32 = b.get$n32();
  if (typeof b32 !== 'number') return this.multiply$2$bailout(26, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, b24, b31, b32, 0, 0, 0, 0, 0);
  var b33 = b.get$n33();
  if (typeof b33 !== 'number') return this.multiply$2$bailout(27, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, b24, b31, b32, b33, 0, 0, 0, 0);
  var b34 = b.get$n34();
  if (typeof b34 !== 'number') return this.multiply$2$bailout(28, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, b24, b31, b32, b33, b34, 0, 0, 0);
  var b41 = b.get$n41();
  if (typeof b41 !== 'number') return this.multiply$2$bailout(29, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, b24, b31, b32, b33, b34, b41, 0, 0);
  var b42 = b.get$n42();
  if (typeof b42 !== 'number') return this.multiply$2$bailout(30, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, b24, b31, b32, b33, b34, b41, b42, 0);
  var b43 = b.get$n43();
  if (typeof b43 !== 'number') return this.multiply$2$bailout(31, b, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, b24, b31, b32, b33, b34, b41, b42, b43);
  var b44 = b.get$n44();
  if (typeof b44 !== 'number') return this.multiply$2$bailout(32, a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, b11, b12, b13, b14, b21, b22, b23, b24, b31, b32, b33, b34, b41, b42, b43, b44);
  this.n11 = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
  this.n12 = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
  this.n13 = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
  this.n14 = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
  this.n21 = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
  this.n22 = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
  this.n23 = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
  this.n24 = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
  this.n31 = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
  this.n32 = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
  this.n33 = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
  this.n34 = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
  this.n41 = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
  this.n42 = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
  this.n43 = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
  this.n44 = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
  return this;
 },
 multiply$2$bailout: function(state, env0, env1, env2, env3, env4, env5, env6, env7, env8, env9, env10, env11, env12, env13, env14, env15, env16, env17, env18, env19, env20, env21, env22, env23, env24, env25, env26, env27, env28, env29, env30, env31) {
  switch (state) {
    case 1:
      var a = env0;
      var b = env1;
      a11 = env2;
      break;
    case 2:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      break;
    case 3:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      break;
    case 4:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      break;
    case 5:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      break;
    case 6:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      break;
    case 7:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      a23 = env8;
      break;
    case 8:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      a23 = env8;
      a24 = env9;
      break;
    case 9:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      a23 = env8;
      a24 = env9;
      a31 = env10;
      break;
    case 10:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      a23 = env8;
      a24 = env9;
      a31 = env10;
      a32 = env11;
      break;
    case 11:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      a23 = env8;
      a24 = env9;
      a31 = env10;
      a32 = env11;
      a33 = env12;
      break;
    case 12:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      a23 = env8;
      a24 = env9;
      a31 = env10;
      a32 = env11;
      a33 = env12;
      a34 = env13;
      break;
    case 13:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      a23 = env8;
      a24 = env9;
      a31 = env10;
      a32 = env11;
      a33 = env12;
      a34 = env13;
      a41 = env14;
      break;
    case 14:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      a23 = env8;
      a24 = env9;
      a31 = env10;
      a32 = env11;
      a33 = env12;
      a34 = env13;
      a41 = env14;
      a42 = env15;
      break;
    case 15:
      a = env0;
      b = env1;
      a11 = env2;
      a12 = env3;
      a13 = env4;
      a14 = env5;
      a21 = env6;
      a22 = env7;
      a23 = env8;
      a24 = env9;
      a31 = env10;
      a32 = env11;
      a33 = env12;
      a34 = env13;
      a41 = env14;
      a42 = env15;
      a43 = env16;
      break;
    case 16:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      break;
    case 17:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      break;
    case 18:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      break;
    case 19:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      break;
    case 20:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      break;
    case 21:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      break;
    case 22:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      break;
    case 23:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      b23 = env23;
      break;
    case 24:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      b23 = env23;
      b24 = env24;
      break;
    case 25:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      b23 = env23;
      b24 = env24;
      b31 = env25;
      break;
    case 26:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      b23 = env23;
      b24 = env24;
      b31 = env25;
      b32 = env26;
      break;
    case 27:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      b23 = env23;
      b24 = env24;
      b31 = env25;
      b32 = env26;
      b33 = env27;
      break;
    case 28:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      b23 = env23;
      b24 = env24;
      b31 = env25;
      b32 = env26;
      b33 = env27;
      b34 = env28;
      break;
    case 29:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      b23 = env23;
      b24 = env24;
      b31 = env25;
      b32 = env26;
      b33 = env27;
      b34 = env28;
      b41 = env29;
      break;
    case 30:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      b23 = env23;
      b24 = env24;
      b31 = env25;
      b32 = env26;
      b33 = env27;
      b34 = env28;
      b41 = env29;
      b42 = env30;
      break;
    case 31:
      b = env0;
      a11 = env1;
      a12 = env2;
      a13 = env3;
      a14 = env4;
      a21 = env5;
      a22 = env6;
      a23 = env7;
      a24 = env8;
      a31 = env9;
      a32 = env10;
      a33 = env11;
      a34 = env12;
      a41 = env13;
      a42 = env14;
      a43 = env15;
      a44 = env16;
      b11 = env17;
      b12 = env18;
      b13 = env19;
      b14 = env20;
      b21 = env21;
      b22 = env22;
      b23 = env23;
      b24 = env24;
      b31 = env25;
      b32 = env26;
      b33 = env27;
      b34 = env28;
      b41 = env29;
      b42 = env30;
      b43 = env31;
      break;
    case 32:
      a11 = env0;
      a12 = env1;
      a13 = env2;
      a14 = env3;
      a21 = env4;
      a22 = env5;
      a23 = env6;
      a24 = env7;
      a31 = env8;
      a32 = env9;
      a33 = env10;
      a34 = env11;
      a41 = env12;
      a42 = env13;
      a43 = env14;
      a44 = env15;
      b11 = env16;
      b12 = env17;
      b13 = env18;
      b14 = env19;
      b21 = env20;
      b22 = env21;
      b23 = env22;
      b24 = env23;
      b31 = env24;
      b32 = env25;
      b33 = env26;
      b34 = env27;
      b41 = env28;
      b42 = env29;
      b43 = env30;
      b44 = env31;
      break;
  }
  switch (state) {
    case 0:
      var a11 = a.get$n11();
    case 1:
      state = 0;
      var a12 = a.get$n12();
    case 2:
      state = 0;
      var a13 = a.get$n13();
    case 3:
      state = 0;
      var a14 = a.get$n14();
    case 4:
      state = 0;
      var a21 = a.get$n21();
    case 5:
      state = 0;
      var a22 = a.get$n22();
    case 6:
      state = 0;
      var a23 = a.get$n23();
    case 7:
      state = 0;
      var a24 = a.get$n24();
    case 8:
      state = 0;
      var a31 = a.get$n31();
    case 9:
      state = 0;
      var a32 = a.get$n32();
    case 10:
      state = 0;
      var a33 = a.get$n33();
    case 11:
      state = 0;
      var a34 = a.get$n34();
    case 12:
      state = 0;
      var a41 = a.get$n41();
    case 13:
      state = 0;
      var a42 = a.get$n42();
    case 14:
      state = 0;
      var a43 = a.get$n43();
    case 15:
      state = 0;
      var a44 = a.get$n44();
    case 16:
      state = 0;
      var b11 = b.get$n11();
    case 17:
      state = 0;
      var b12 = b.get$n12();
    case 18:
      state = 0;
      var b13 = b.get$n13();
    case 19:
      state = 0;
      var b14 = b.get$n14();
    case 20:
      state = 0;
      var b21 = b.get$n21();
    case 21:
      state = 0;
      var b22 = b.get$n22();
    case 22:
      state = 0;
      var b23 = b.get$n23();
    case 23:
      state = 0;
      var b24 = b.get$n24();
    case 24:
      state = 0;
      var b31 = b.get$n31();
    case 25:
      state = 0;
      var b32 = b.get$n32();
    case 26:
      state = 0;
      var b33 = b.get$n33();
    case 27:
      state = 0;
      var b34 = b.get$n34();
    case 28:
      state = 0;
      var b41 = b.get$n41();
    case 29:
      state = 0;
      var b42 = b.get$n42();
    case 30:
      state = 0;
      var b43 = b.get$n43();
    case 31:
      state = 0;
      var b44 = b.get$n44();
    case 32:
      state = 0;
      this.n11 = $.add($.add($.add($.mul(a11, b11), $.mul(a12, b21)), $.mul(a13, b31)), $.mul(a14, b41));
      this.n12 = $.add($.add($.add($.mul(a11, b12), $.mul(a12, b22)), $.mul(a13, b32)), $.mul(a14, b42));
      this.n13 = $.add($.add($.add($.mul(a11, b13), $.mul(a12, b23)), $.mul(a13, b33)), $.mul(a14, b43));
      this.n14 = $.add($.add($.add($.mul(a11, b14), $.mul(a12, b24)), $.mul(a13, b34)), $.mul(a14, b44));
      this.n21 = $.add($.add($.add($.mul(a21, b11), $.mul(a22, b21)), $.mul(a23, b31)), $.mul(a24, b41));
      this.n22 = $.add($.add($.add($.mul(a21, b12), $.mul(a22, b22)), $.mul(a23, b32)), $.mul(a24, b42));
      this.n23 = $.add($.add($.add($.mul(a21, b13), $.mul(a22, b23)), $.mul(a23, b33)), $.mul(a24, b43));
      this.n24 = $.add($.add($.add($.mul(a21, b14), $.mul(a22, b24)), $.mul(a23, b34)), $.mul(a24, b44));
      this.n31 = $.add($.add($.add($.mul(a31, b11), $.mul(a32, b21)), $.mul(a33, b31)), $.mul(a34, b41));
      this.n32 = $.add($.add($.add($.mul(a31, b12), $.mul(a32, b22)), $.mul(a33, b32)), $.mul(a34, b42));
      this.n33 = $.add($.add($.add($.mul(a31, b13), $.mul(a32, b23)), $.mul(a33, b33)), $.mul(a34, b43));
      this.n34 = $.add($.add($.add($.mul(a31, b14), $.mul(a32, b24)), $.mul(a33, b34)), $.mul(a34, b44));
      this.n41 = $.add($.add($.add($.mul(a41, b11), $.mul(a42, b21)), $.mul(a43, b31)), $.mul(a44, b41));
      this.n42 = $.add($.add($.add($.mul(a41, b12), $.mul(a42, b22)), $.mul(a43, b32)), $.mul(a44, b42));
      this.n43 = $.add($.add($.add($.mul(a41, b13), $.mul(a42, b23)), $.mul(a43, b33)), $.mul(a44, b43));
      this.n44 = $.add($.add($.add($.mul(a41, b14), $.mul(a42, b24)), $.mul(a43, b34)), $.mul(a44, b44));
      return this;
  }
 },
 copy$1: function(m) {
  this.setValues$16(m.get$n11(), m.get$n12(), m.get$n13(), m.get$n14(), m.get$n21(), m.get$n22(), m.get$n23(), m.get$n24(), m.get$n31(), m.get$n32(), m.get$n33(), m.get$n34(), m.get$n41(), m.get$n42(), m.get$n43(), m.get$n44());
  return this;
 },
 setValues$16: function(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44) {
  this.n11 = this.n11;
  this.n12 = this.n12;
  this.n13 = this.n13;
  this.n14 = this.n14;
  this.n21 = this.n21;
  this.n22 = this.n22;
  this.n23 = this.n23;
  this.n24 = this.n24;
  this.n31 = this.n31;
  this.n32 = this.n32;
  this.n33 = this.n33;
  this.n34 = this.n34;
  this.n41 = this.n41;
  this.n42 = this.n42;
  this.n43 = this.n43;
  this.n44 = this.n44;
  return this;
 },
 Matrix4$createMatrices$16: function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
  this._flat = $.ListFactory_List(null);
  this._m33 = $.Matrix3$();
 },
 Matrix4$16: function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
  this._flat = $.ListFactory_List(null);
  this._m33 = $.Matrix3$();
  var t1 = $.Matrix4___v1;
  if (t1 == null) $.Matrix4___v1 = $.Vector3$(0, 0, 0);
  t1 = $.Matrix4___v2;
  if (t1 == null) $.Matrix4___v2 = $.Vector3$(0, 0, 0);
  t1 = $.Matrix4___v3;
  if (t1 == null) $.Matrix4___v3 = $.Vector3$(0, 0, 0);
  t1 = $.Matrix4___m1;
  if (t1 == null) $.Matrix4___m1 = $.Matrix4$createMatrices(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  t1 = $.Matrix4___m2;
  if (t1 == null) $.Matrix4___m2 = $.Matrix4$createMatrices(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
 }
};

$$.Quaternion = {"":
 ["w=", "z=", "y=", "x="],
 super: "Object",
 multiply$2: function(q1, q2) {
  var t1 = q1.get$x();
  if (typeof t1 !== 'number') return this.multiply$2$bailout(1, q1, q2, t1, 0, 0);
  var t2 = q2.get$w();
  if (typeof t2 !== 'number') return this.multiply$2$bailout(2, q1, q2, t1, t2, 0);
  t2 *= t1;
  t1 = q1.get$y();
  if (typeof t1 !== 'number') return this.multiply$2$bailout(3, q1, q2, t1, t2, 0);
  var t3 = q2.get$z();
  if (typeof t3 !== 'number') return this.multiply$2$bailout(4, q1, q2, t3, t1, t2);
  t2 += t1 * t3;
  var t4 = q1.get$z();
  if (typeof t4 !== 'number') return this.multiply$2$bailout(5, q1, q2, t2, t4, 0);
  var t5 = q2.get$y();
  if (typeof t5 !== 'number') return this.multiply$2$bailout(6, q1, q2, t2, t4, t5);
  t2 -= t4 * t5;
  var t6 = q1.get$w();
  if (typeof t6 !== 'number') return this.multiply$2$bailout(7, q1, q2, t2, t6, 0);
  var t7 = q2.get$x();
  if (typeof t7 !== 'number') return this.multiply$2$bailout(8, q1, q2, t2, t6, t7);
  this.x = t2 + t6 * t7;
  var t8 = q1.get$x();
  if (typeof t8 !== 'number') return this.multiply$2$bailout(9, q1, q2, t8, 0, 0);
  t8 = -t8;
  var t9 = q2.get$z();
  if (typeof t9 !== 'number') return this.multiply$2$bailout(10, q1, q2, t8, t9, 0);
  t9 *= t8;
  t8 = q1.get$y();
  if (typeof t8 !== 'number') return this.multiply$2$bailout(11, q1, q2, t8, t9, 0);
  var t10 = q2.get$w();
  if (typeof t10 !== 'number') return this.multiply$2$bailout(12, q1, q2, t8, t9, t10);
  t9 += t8 * t10;
  var t11 = q1.get$z();
  if (typeof t11 !== 'number') return this.multiply$2$bailout(13, q1, q2, t9, t11, 0);
  var t12 = q2.get$x();
  if (typeof t12 !== 'number') return this.multiply$2$bailout(14, q1, q2, t12, t9, t11);
  t9 += t11 * t12;
  var t13 = q1.get$w();
  if (typeof t13 !== 'number') return this.multiply$2$bailout(15, q1, q2, t9, t13, 0);
  var t14 = q2.get$y();
  if (typeof t14 !== 'number') return this.multiply$2$bailout(16, q1, q2, t9, t13, t14);
  this.y = t9 + t13 * t14;
  var t15 = q1.get$x();
  if (typeof t15 !== 'number') return this.multiply$2$bailout(17, q1, q2, t15, 0, 0);
  var t16 = q2.get$y();
  if (typeof t16 !== 'number') return this.multiply$2$bailout(18, q1, q2, t15, t16, 0);
  t16 *= t15;
  t15 = q1.get$y();
  if (typeof t15 !== 'number') return this.multiply$2$bailout(19, q1, q2, t15, t16, 0);
  var t17 = q2.get$x();
  if (typeof t17 !== 'number') return this.multiply$2$bailout(20, q1, q2, t17, t15, t16);
  t16 -= t15 * t17;
  var t18 = q1.get$z();
  if (typeof t18 !== 'number') return this.multiply$2$bailout(21, q1, q2, t16, t18, 0);
  var t19 = q2.get$w();
  if (typeof t19 !== 'number') return this.multiply$2$bailout(22, q1, q2, t16, t18, t19);
  t16 += t18 * t19;
  var t20 = q1.get$w();
  if (typeof t20 !== 'number') return this.multiply$2$bailout(23, q1, q2, t16, t20, 0);
  var t21 = q2.get$z();
  if (typeof t21 !== 'number') return this.multiply$2$bailout(24, q1, q2, t16, t20, t21);
  this.z = t16 + t20 * t21;
  var t22 = q1.get$x();
  if (typeof t22 !== 'number') return this.multiply$2$bailout(25, q1, q2, t22, 0, 0);
  t22 = -t22;
  var t23 = q2.get$x();
  if (typeof t23 !== 'number') return this.multiply$2$bailout(26, q1, q2, t22, t23, 0);
  t23 *= t22;
  t22 = q1.get$y();
  if (typeof t22 !== 'number') return this.multiply$2$bailout(27, q1, q2, t22, t23, 0);
  var t24 = q2.get$y();
  if (typeof t24 !== 'number') return this.multiply$2$bailout(28, q1, q2, t22, t23, t24);
  t23 -= t22 * t24;
  var t25 = q1.get$z();
  if (typeof t25 !== 'number') return this.multiply$2$bailout(29, q1, q2, t23, t25, 0);
  var t26 = q2.get$z();
  if (typeof t26 !== 'number') return this.multiply$2$bailout(30, q1, q2, t26, t23, t25);
  t23 -= t25 * t26;
  var t27 = q1.get$w();
  if (typeof t27 !== 'number') return this.multiply$2$bailout(31, q2, t23, t27, 0, 0);
  var t28 = q2.get$w();
  if (typeof t28 !== 'number') return this.multiply$2$bailout(32, t23, t27, t28, 0, 0);
  this.w = t23 + t27 * t28;
  return this;
 },
 multiply$2$bailout: function(state, env0, env1, env2, env3, env4) {
  switch (state) {
    case 1:
      var q1 = env0;
      var q2 = env1;
      t1 = env2;
      break;
    case 2:
      q1 = env0;
      q2 = env1;
      t1 = env2;
      t2 = env3;
      break;
    case 3:
      q1 = env0;
      q2 = env1;
      t1 = env2;
      t2 = env3;
      break;
    case 4:
      q1 = env0;
      q2 = env1;
      t3 = env2;
      t1 = env3;
      t2 = env4;
      break;
    case 5:
      q1 = env0;
      q2 = env1;
      t2 = env2;
      t4 = env3;
      break;
    case 6:
      q1 = env0;
      q2 = env1;
      t2 = env2;
      t4 = env3;
      t5 = env4;
      break;
    case 7:
      q1 = env0;
      q2 = env1;
      t2 = env2;
      t6 = env3;
      break;
    case 8:
      q1 = env0;
      q2 = env1;
      t2 = env2;
      t6 = env3;
      t7 = env4;
      break;
    case 9:
      q1 = env0;
      q2 = env1;
      t8 = env2;
      break;
    case 10:
      q1 = env0;
      q2 = env1;
      t8 = env2;
      t9 = env3;
      break;
    case 11:
      q1 = env0;
      q2 = env1;
      t8 = env2;
      t9 = env3;
      break;
    case 12:
      q1 = env0;
      q2 = env1;
      t8 = env2;
      t9 = env3;
      t10 = env4;
      break;
    case 13:
      q1 = env0;
      q2 = env1;
      t9 = env2;
      t11 = env3;
      break;
    case 14:
      q1 = env0;
      q2 = env1;
      t12 = env2;
      t9 = env3;
      t11 = env4;
      break;
    case 15:
      q1 = env0;
      q2 = env1;
      t9 = env2;
      t13 = env3;
      break;
    case 16:
      q1 = env0;
      q2 = env1;
      t9 = env2;
      t13 = env3;
      t14 = env4;
      break;
    case 17:
      q1 = env0;
      q2 = env1;
      t15 = env2;
      break;
    case 18:
      q1 = env0;
      q2 = env1;
      t15 = env2;
      t16 = env3;
      break;
    case 19:
      q1 = env0;
      q2 = env1;
      t15 = env2;
      t16 = env3;
      break;
    case 20:
      q1 = env0;
      q2 = env1;
      t17 = env2;
      t15 = env3;
      t16 = env4;
      break;
    case 21:
      q1 = env0;
      q2 = env1;
      t16 = env2;
      t18 = env3;
      break;
    case 22:
      q1 = env0;
      q2 = env1;
      t16 = env2;
      t18 = env3;
      t19 = env4;
      break;
    case 23:
      q1 = env0;
      q2 = env1;
      t16 = env2;
      t20 = env3;
      break;
    case 24:
      q1 = env0;
      q2 = env1;
      t16 = env2;
      t20 = env3;
      t21 = env4;
      break;
    case 25:
      q1 = env0;
      q2 = env1;
      t22 = env2;
      break;
    case 26:
      q1 = env0;
      q2 = env1;
      t22 = env2;
      t23 = env3;
      break;
    case 27:
      q1 = env0;
      q2 = env1;
      t22 = env2;
      t23 = env3;
      break;
    case 28:
      q1 = env0;
      q2 = env1;
      t22 = env2;
      t23 = env3;
      t24 = env4;
      break;
    case 29:
      q1 = env0;
      q2 = env1;
      t23 = env2;
      t25 = env3;
      break;
    case 30:
      q1 = env0;
      q2 = env1;
      t26 = env2;
      t23 = env3;
      t25 = env4;
      break;
    case 31:
      q2 = env0;
      t23 = env1;
      t27 = env2;
      break;
    case 32:
      t23 = env0;
      t27 = env1;
      t28 = env2;
      break;
  }
  switch (state) {
    case 0:
      var t1 = q1.get$x();
    case 1:
      state = 0;
      var t2 = q2.get$w();
    case 2:
      state = 0;
      t2 = $.mul(t1, t2);
      t1 = q1.get$y();
    case 3:
      state = 0;
      var t3 = q2.get$z();
    case 4:
      state = 0;
      t2 = $.add(t2, $.mul(t1, t3));
      var t4 = q1.get$z();
    case 5:
      state = 0;
      var t5 = q2.get$y();
    case 6:
      state = 0;
      t2 = $.sub(t2, $.mul(t4, t5));
      var t6 = q1.get$w();
    case 7:
      state = 0;
      var t7 = q2.get$x();
    case 8:
      state = 0;
      this.x = $.add(t2, $.mul(t6, t7));
      var t8 = q1.get$x();
    case 9:
      state = 0;
      t8 = $.neg(t8);
      var t9 = q2.get$z();
    case 10:
      state = 0;
      t9 = $.mul(t8, t9);
      t8 = q1.get$y();
    case 11:
      state = 0;
      var t10 = q2.get$w();
    case 12:
      state = 0;
      t9 = $.add(t9, $.mul(t8, t10));
      var t11 = q1.get$z();
    case 13:
      state = 0;
      var t12 = q2.get$x();
    case 14:
      state = 0;
      t9 = $.add(t9, $.mul(t11, t12));
      var t13 = q1.get$w();
    case 15:
      state = 0;
      var t14 = q2.get$y();
    case 16:
      state = 0;
      this.y = $.add(t9, $.mul(t13, t14));
      var t15 = q1.get$x();
    case 17:
      state = 0;
      var t16 = q2.get$y();
    case 18:
      state = 0;
      t16 = $.mul(t15, t16);
      t15 = q1.get$y();
    case 19:
      state = 0;
      var t17 = q2.get$x();
    case 20:
      state = 0;
      t16 = $.sub(t16, $.mul(t15, t17));
      var t18 = q1.get$z();
    case 21:
      state = 0;
      var t19 = q2.get$w();
    case 22:
      state = 0;
      t16 = $.add(t16, $.mul(t18, t19));
      var t20 = q1.get$w();
    case 23:
      state = 0;
      var t21 = q2.get$z();
    case 24:
      state = 0;
      this.z = $.add(t16, $.mul(t20, t21));
      var t22 = q1.get$x();
    case 25:
      state = 0;
      t22 = $.neg(t22);
      var t23 = q2.get$x();
    case 26:
      state = 0;
      t23 = $.mul(t22, t23);
      t22 = q1.get$y();
    case 27:
      state = 0;
      var t24 = q2.get$y();
    case 28:
      state = 0;
      t23 = $.sub(t23, $.mul(t22, t24));
      var t25 = q1.get$z();
    case 29:
      state = 0;
      var t26 = q2.get$z();
    case 30:
      state = 0;
      t23 = $.sub(t23, $.mul(t25, t26));
      var t27 = q1.get$w();
    case 31:
      state = 0;
      var t28 = q2.get$w();
    case 32:
      state = 0;
      this.w = $.add(t23, $.mul(t27, t28));
      return this;
  }
 },
 normalize$0: function() {
  var t1 = this.x;
  if (typeof t1 !== 'number') return this.normalize$0$bailout(1, t1, 0);
  t1 *= t1;
  var t2 = this.y;
  if (typeof t2 !== 'number') return this.normalize$0$bailout(2, t1, t2);
  t1 += t2 * t2;
  var t3 = this.z;
  if (typeof t3 !== 'number') return this.normalize$0$bailout(3, t3, t1);
  t1 += t3 * t3;
  var t4 = this.w;
  if (typeof t4 !== 'number') return this.normalize$0$bailout(4, t1, t4);
  var l = $.Math_sqrt(t1 + t4 * t4);
  if (l === 0) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 0;
  } else {
    if (typeof l !== 'number') throw $.iae(l);
    l = 1 / l;
    t1 = this.x;
    if (typeof t1 !== 'number') return this.normalize$0$bailout(5, t1, l);
    this.x = t1 * l;
    t2 = this.y;
    if (typeof t2 !== 'number') return this.normalize$0$bailout(6, t2, l);
    this.y = t2 * l;
    t3 = this.z;
    if (typeof t3 !== 'number') return this.normalize$0$bailout(7, t3, l);
    this.z = t3 * l;
    t4 = this.w;
    if (typeof t4 !== 'number') return this.normalize$0$bailout(8, l, t4);
    this.w = t4 * l;
  }
  return this;
 },
 normalize$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
    case 3:
      t3 = env0;
      t1 = env1;
      break;
    case 4:
      t1 = env0;
      t4 = env1;
      break;
    case 5:
      t1 = env0;
      l = env1;
      break;
    case 6:
      t2 = env0;
      l = env1;
      break;
    case 7:
      t3 = env0;
      l = env1;
      break;
    case 8:
      l = env0;
      t4 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this.x;
    case 1:
      state = 0;
      t1 = $.mul(t1, t1);
      var t2 = this.y;
    case 2:
      state = 0;
      t1 = $.add(t1, $.mul(t2, t2));
      var t3 = this.z;
    case 3:
      state = 0;
      t1 = $.add(t1, $.mul(t3, t3));
      var t4 = this.w;
    case 4:
      state = 0;
      var l = $.Math_sqrt($.add(t1, $.mul(t4, t4)));
    case 5:
    case 6:
    case 7:
    case 8:
      if ((state == 0 && l === 0)) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
      } else {
        switch (state) {
          case 0:
            if (typeof l !== 'number') throw $.iae(l);
            l = 1 / l;
            t1 = this.x;
          case 5:
            state = 0;
            this.x = $.mul(t1, l);
            t2 = this.y;
          case 6:
            state = 0;
            this.y = $.mul(t2, l);
            t3 = this.z;
          case 7:
            state = 0;
            this.z = $.mul(t3, l);
            t4 = this.w;
          case 8:
            state = 0;
            this.w = $.mul(t4, l);
        }
      }
      return this;
  }
 },
 length$0: function() {
  var t1 = this.x;
  if (typeof t1 !== 'number') return this.length$0$bailout(1, t1, 0);
  t1 *= t1;
  var t2 = this.y;
  if (typeof t2 !== 'number') return this.length$0$bailout(2, t1, t2);
  t1 += t2 * t2;
  var t3 = this.z;
  if (typeof t3 !== 'number') return this.length$0$bailout(3, t3, t1);
  t1 += t3 * t3;
  var t4 = this.w;
  if (typeof t4 !== 'number') return this.length$0$bailout(4, t1, t4);
  return $.Math_sqrt(t1 + t4 * t4);
 },
 length$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      t2 = env1;
      break;
    case 3:
      t3 = env0;
      t1 = env1;
      break;
    case 4:
      t1 = env0;
      t4 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this.x;
    case 1:
      state = 0;
      t1 = $.mul(t1, t1);
      var t2 = this.y;
    case 2:
      state = 0;
      t1 = $.add(t1, $.mul(t2, t2));
      var t3 = this.z;
    case 3:
      state = 0;
      t1 = $.add(t1, $.mul(t3, t3));
      var t4 = this.w;
    case 4:
      state = 0;
      return $.Math_sqrt($.add(t1, $.mul(t4, t4)));
  }
 },
 get$length: function() { return new $.BoundClosure(this, 'length$0'); },
 copy$1: function(q) {
  this.x = q.get$x();
  this.y = q.get$y();
  this.z = q.get$z();
  this.w = q.get$w();
  return this;
 },
 setValues$4: function(newX, newY, newZ, newW) {
  this.x = newX;
  this.y = newY;
  this.z = newZ;
  this.w = newW;
  return this;
 }
};

$$.Vector4 = {"":
 ["_w", "_z", "_y", "_x"],
 super: "Object",
 lerpSelf$2: function(v, alpha) {
  this._x = $.add(this._x, $.mul($.sub(v.get$x(), this._x), alpha));
  this._y = $.add(this._y, $.mul($.sub(v.get$y(), this._y), alpha));
  this._z = $.add(this._z, $.mul($.sub(v.get$z(), this._z), alpha));
  this._w = $.add(this._w, $.mul($.sub(v.get$w(), this._w), alpha));
  return this;
 },
 normalize$0: function() {
  return this.divideScalar$1(this.length$0());
 },
 length$0: function() {
  return $.Math_sqrt(this.lengthSq$0());
 },
 get$length: function() { return new $.BoundClosure(this, 'length$0'); },
 lengthSq$0: function() {
  return this.dot$1(this);
 },
 dot$1: function(v) {
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.dot$1$bailout(1, v, t1, 0, 0);
  var t2 = v.get$x();
  if (typeof t2 !== 'number') return this.dot$1$bailout(2, v, t1, t2, 0);
  t2 *= t1;
  t1 = this._y;
  if (typeof t1 !== 'number') return this.dot$1$bailout(3, v, t1, t2, 0);
  var t3 = v.get$y();
  if (typeof t3 !== 'number') return this.dot$1$bailout(4, v, t3, t1, t2);
  t2 += t1 * t3;
  var t4 = this._z;
  if (typeof t4 !== 'number') return this.dot$1$bailout(5, v, t2, t4, 0);
  var t5 = v.get$z();
  if (typeof t5 !== 'number') return this.dot$1$bailout(6, v, t2, t4, t5);
  t2 += t4 * t5;
  var t6 = this._w;
  if (typeof t6 !== 'number') return this.dot$1$bailout(7, v, t2, t6, 0);
  var t7 = v.get$w();
  if (typeof t7 !== 'number') return this.dot$1$bailout(8, t2, t7, t6, 0);
  return t2 + t6 * t7;
 },
 dot$1$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var v = env0;
      t1 = env1;
      break;
    case 2:
      v = env0;
      t1 = env1;
      t2 = env2;
      break;
    case 3:
      v = env0;
      t1 = env1;
      t2 = env2;
      break;
    case 4:
      v = env0;
      t3 = env1;
      t1 = env2;
      t2 = env3;
      break;
    case 5:
      v = env0;
      t2 = env1;
      t4 = env2;
      break;
    case 6:
      v = env0;
      t2 = env1;
      t4 = env2;
      t5 = env3;
      break;
    case 7:
      v = env0;
      t2 = env1;
      t6 = env2;
      break;
    case 8:
      t2 = env0;
      t7 = env1;
      t6 = env2;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._x;
    case 1:
      state = 0;
      var t2 = v.get$x();
    case 2:
      state = 0;
      t2 = $.mul(t1, t2);
      t1 = this._y;
    case 3:
      state = 0;
      var t3 = v.get$y();
    case 4:
      state = 0;
      t2 = $.add(t2, $.mul(t1, t3));
      var t4 = this._z;
    case 5:
      state = 0;
      var t5 = v.get$z();
    case 6:
      state = 0;
      t2 = $.add(t2, $.mul(t4, t5));
      var t6 = this._w;
    case 7:
      state = 0;
      var t7 = v.get$w();
    case 8:
      state = 0;
      return $.add(t2, $.mul(t6, t7));
  }
 },
 divideScalar$1: function(s) {
  if (typeof s !== 'number') return this.divideScalar$1$bailout(1, s, 0);
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.divideScalar$1$bailout(2, s, t1);
  this._x = t1 / s;
  var t2 = this._y;
  if (typeof t2 !== 'number') return this.divideScalar$1$bailout(3, s, t2);
  this._y = t2 / s;
  var t3 = this._z;
  if (typeof t3 !== 'number') return this.divideScalar$1$bailout(4, s, t3);
  this._z = t3 / s;
  var t4 = this._w;
  if (typeof t4 !== 'number') return this.divideScalar$1$bailout(5, s, t4);
  this._w = t4 / s;
  return this;
 },
 divideScalar$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      var s = env0;
      break;
    case 2:
      s = env0;
      t1 = env1;
      break;
    case 3:
      s = env0;
      t2 = env1;
      break;
    case 4:
      s = env0;
      t3 = env1;
      break;
    case 5:
      s = env0;
      t4 = env1;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 2:
    case 3:
    case 4:
    case 5:
      if (state == 2 || state == 3 || state == 4 || state == 5 || (state == 0 && !(s == null))) {
        switch (state) {
          case 0:
            var t1 = this._x;
          case 2:
            state = 0;
            this._x = $.div(t1, s);
            var t2 = this._y;
          case 3:
            state = 0;
            this._y = $.div(t2, s);
            var t3 = this._z;
          case 4:
            state = 0;
            this._z = $.div(t3, s);
            var t4 = this._w;
          case 5:
            state = 0;
            this._w = $.div(t4, s);
        }
      } else {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      }
      return this;
  }
 },
 multiplyScalar$1: function(s) {
  if (typeof s !== 'number') return this.multiplyScalar$1$bailout(1, s, 0);
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.multiplyScalar$1$bailout(2, s, t1);
  this._x = t1 * s;
  var t2 = this._y;
  if (typeof t2 !== 'number') return this.multiplyScalar$1$bailout(3, s, t2);
  this._y = t2 * s;
  var t3 = this._z;
  if (typeof t3 !== 'number') return this.multiplyScalar$1$bailout(4, s, t3);
  this._z = t3 * s;
  var t4 = this._w;
  if (typeof t4 !== 'number') return this.multiplyScalar$1$bailout(5, s, t4);
  this._w = t4 * s;
  return this;
 },
 multiplyScalar$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      var s = env0;
      break;
    case 2:
      s = env0;
      t1 = env1;
      break;
    case 3:
      s = env0;
      t2 = env1;
      break;
    case 4:
      s = env0;
      t3 = env1;
      break;
    case 5:
      s = env0;
      t4 = env1;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      var t1 = this._x;
    case 2:
      state = 0;
      this._x = $.mul(t1, s);
      var t2 = this._y;
    case 3:
      state = 0;
      this._y = $.mul(t2, s);
      var t3 = this._z;
    case 4:
      state = 0;
      this._z = $.mul(t3, s);
      var t4 = this._w;
    case 5:
      state = 0;
      this._w = $.mul(t4, s);
      return this;
  }
 },
 sub$2: function(v1, v2) {
  var t1 = v1.get$x();
  if (typeof t1 !== 'number') return this.sub$2$bailout(1, v1, v2, t1, 0);
  var t2 = v2.get$x();
  if (typeof t2 !== 'number') return this.sub$2$bailout(2, v1, v2, t1, t2);
  this._x = t1 - t2;
  var t3 = v1.get$y();
  if (typeof t3 !== 'number') return this.sub$2$bailout(3, v1, v2, t3, 0);
  var t4 = v2.get$y();
  if (typeof t4 !== 'number') return this.sub$2$bailout(4, v1, v2, t3, t4);
  this._y = t3 - t4;
  var t5 = v1.get$z();
  if (typeof t5 !== 'number') return this.sub$2$bailout(5, v1, v2, t5, 0);
  var t6 = v2.get$z();
  if (typeof t6 !== 'number') return this.sub$2$bailout(6, v1, v2, t5, t6);
  this._z = t5 - t6;
  var t7 = v1.get$w();
  if (typeof t7 !== 'number') return this.sub$2$bailout(7, v2, t7, 0, 0);
  var t8 = v2.get$w();
  if (typeof t8 !== 'number') return this.sub$2$bailout(8, t7, t8, 0, 0);
  this._w = t7 - t8;
  return this;
 },
 sub$2$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var v1 = env0;
      var v2 = env1;
      t1 = env2;
      break;
    case 2:
      v1 = env0;
      v2 = env1;
      t1 = env2;
      t2 = env3;
      break;
    case 3:
      v1 = env0;
      v2 = env1;
      t3 = env2;
      break;
    case 4:
      v1 = env0;
      v2 = env1;
      t3 = env2;
      t4 = env3;
      break;
    case 5:
      v1 = env0;
      v2 = env1;
      t5 = env2;
      break;
    case 6:
      v1 = env0;
      v2 = env1;
      t5 = env2;
      t6 = env3;
      break;
    case 7:
      v2 = env0;
      t7 = env1;
      break;
    case 8:
      t7 = env0;
      t8 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = v1.get$x();
    case 1:
      state = 0;
      var t2 = v2.get$x();
    case 2:
      state = 0;
      this._x = $.sub(t1, t2);
      var t3 = v1.get$y();
    case 3:
      state = 0;
      var t4 = v2.get$y();
    case 4:
      state = 0;
      this._y = $.sub(t3, t4);
      var t5 = v1.get$z();
    case 5:
      state = 0;
      var t6 = v2.get$z();
    case 6:
      state = 0;
      this._z = $.sub(t5, t6);
      var t7 = v1.get$w();
    case 7:
      state = 0;
      var t8 = v2.get$w();
    case 8:
      state = 0;
      this._w = $.sub(t7, t8);
      return this;
  }
 },
 addSelf$1: function(v) {
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.addSelf$1$bailout(1, v, t1, 0);
  var t2 = v.get$x();
  if (typeof t2 !== 'number') return this.addSelf$1$bailout(2, v, t1, t2);
  this._x = t1 + t2;
  var t3 = this._y;
  if (typeof t3 !== 'number') return this.addSelf$1$bailout(3, v, t3, 0);
  var t4 = v.get$y();
  if (typeof t4 !== 'number') return this.addSelf$1$bailout(4, v, t4, t3);
  this._y = t3 + t4;
  var t5 = this._z;
  if (typeof t5 !== 'number') return this.addSelf$1$bailout(5, v, t5, 0);
  var t6 = v.get$z();
  if (typeof t6 !== 'number') return this.addSelf$1$bailout(6, v, t5, t6);
  this._z = t5 + t6;
  var t7 = this._w;
  if (typeof t7 !== 'number') return this.addSelf$1$bailout(7, v, t7, 0);
  var t8 = v.get$w();
  if (typeof t8 !== 'number') return this.addSelf$1$bailout(8, t8, t7, 0);
  this._w = t7 + t8;
  return this;
 },
 addSelf$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var v = env0;
      t1 = env1;
      break;
    case 2:
      v = env0;
      t1 = env1;
      t2 = env2;
      break;
    case 3:
      v = env0;
      t3 = env1;
      break;
    case 4:
      v = env0;
      t4 = env1;
      t3 = env2;
      break;
    case 5:
      v = env0;
      t5 = env1;
      break;
    case 6:
      v = env0;
      t5 = env1;
      t6 = env2;
      break;
    case 7:
      v = env0;
      t7 = env1;
      break;
    case 8:
      t8 = env0;
      t7 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._x;
    case 1:
      state = 0;
      var t2 = v.get$x();
    case 2:
      state = 0;
      this._x = $.add(t1, t2);
      var t3 = this._y;
    case 3:
      state = 0;
      var t4 = v.get$y();
    case 4:
      state = 0;
      this._y = $.add(t3, t4);
      var t5 = this._z;
    case 5:
      state = 0;
      var t6 = v.get$z();
    case 6:
      state = 0;
      this._z = $.add(t5, t6);
      var t7 = this._w;
    case 7:
      state = 0;
      var t8 = v.get$w();
    case 8:
      state = 0;
      this._w = $.add(t7, t8);
      return this;
  }
 },
 copy$1: function(v) {
  this._x = v.get$x();
  this._y = v.get$y();
  this._z = v.get$z();
  if (typeof v === 'object' && v !== null && !!v.is$IVector4) this._w = v.get$w();
  else this._w = 1;
 },
 setValues$4: function(x, y, z, w) {
  this._x = x;
  this._y = y;
  this._z = z;
  this._w = w;
  return this;
 },
 set$w: function(value) {
  this._w = value;
 },
 get$w: function() {
  return this._w;
 },
 set$z: function(value) {
  this._z = value;
 },
 get$z: function() {
  return this._z;
 },
 set$y: function(value) {
  this._y = value;
 },
 get$y: function() {
  return this._y;
 },
 set$x: function(value) {
  this._x = value;
 },
 get$x: function() {
  return this._x;
 },
 Vector4$4: function(x, y, z, w) {
  this._x = !(x == null) ? x : 0;
  this._y = !(y == null) ? y : 0;
  this._z = !(z == null) ? z : 0;
  this._w = !(w == null) ? w : 1;
 },
 is$IVector4: true
};

$$.Object3D = {"":
 ["frustumCulled?", "visible=", "matrixWorld?", "scale?", "rotation=", "position?", "children?", "parent=", "id?"],
 super: "Object",
 updateMatrixWorld$1: function(force) {
  if (typeof force !== 'boolean') return this.updateMatrixWorld$1$bailout(1, force);
  this.matrixAutoUpdate && this.updateMatrix$0();
  if (!this.matrixWorldNeedsUpdate) var t1 = force;
  else t1 = true;
  if (t1) {
    t1 = this.parent;
    var t2 = !(t1 == null);
    var t3 = this.matrixWorld;
    var t4 = this.matrix;
    if (t2) t3.multiply$2(t1.get$matrixWorld(), t4);
    else t3.copy$1(t4);
    this.matrixWorldNeedsUpdate = false;
    force = true;
  }
  for (t1 = this.children, l = t1.length, i = 0; i < l; ++i) {
    t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    t1[i].updateMatrixWorld$1(force);
  }
  var l, i;
 },
 updateMatrixWorld$1$bailout: function(state, force) {
  this.matrixAutoUpdate === true && this.updateMatrix$0();
  if (this.matrixWorldNeedsUpdate === true || force === true) {
    var t1 = this.parent;
    var t2 = !(t1 == null);
    var t3 = this.matrixWorld;
    var t4 = this.matrix;
    if (t2) t3.multiply$2(t1.get$matrixWorld(), t4);
    else t3.copy$1(t4);
    this.matrixWorldNeedsUpdate = false;
    force = true;
  }
  for (t1 = this.children, l = t1.length, i = 0; i < l; ++i) {
    t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    t1[i].updateMatrixWorld$1(force);
  }
  var l, i;
 },
 updateMatrixWorld$0: function() {
  return this.updateMatrixWorld$1(false)
},
 updateMatrix$0: function() {
  var t1 = this.matrix;
  t1.setPosition$1(this.position);
  if (this.useQuaternion === true) t1.setRotationFromQuaternion$1(this.quaternion);
  else t1.setRotationFromEuler$2(this.rotation, this.eulerOrder);
  var t2 = this.scale;
  var t3 = t2.get$x();
  if (t3 === 1) {
    t3 = t2.get$y();
    var t4 = !(t3 === 1);
    t3 = t4;
  } else t3 = true;
  if (!t3) {
    t3 = t2.get$z();
    t4 = !(t3 === 1);
    t3 = t4;
  } else t3 = true;
  if (t3) {
    t1.scale$1(t2);
    this.boundRadiusScale = $.Math_max(t2.get$x(), $.Math_max(t2.get$y(), t2.get$z()));
  }
  this.matrixWorldNeedsUpdate = true;
 },
 remove$1: function(object) {
  var t1 = this.children;
  var index = $.indexOf$1(t1, object);
  if (!(index === -1)) {
    object.set$parent(null);
    $.removeRange(t1, index, 1);
    for (var scene = this; t1 = scene.get$parent(), !(t1 == null); ) {
      scene = scene.get$parent();
    }
    typeof scene === 'object' && scene !== null && !!scene.is$Scene && scene.removeObject$1(object);
  }
 },
 add$1: function(object) {
  var t1 = this.children;
  var t2 = $.indexOf$1(t1, object);
  if (t2 === -1) {
    t2 = object.get$parent();
    !(t2 == null) && object.get$parent().remove$1(object);
    object.set$parent(this);
    $.add$1(t1, object);
    for (var scene = this; t1 = scene.get$parent(), !(t1 == null); ) {
      scene = scene.get$parent();
    }
    typeof scene === 'object' && scene !== null && !!scene.is$Scene && scene.addObject$1(object);
  }
 },
 translate$2: function(distance, axis) {
  this.matrix.rotateAxis$1(axis);
  this.position.addSelf$1(axis.multiplyScalar$1(distance));
 },
 get$name: function() {
  return this._name;
 },
 scale$1: function(arg0) { return this.scale.$call$1(arg0); },
 scale$2: function(arg0, arg1) { return this.scale.$call$2(arg0, arg1); },
 Object3D$0: function() {
  this._name = '';
  var t1 = $.Three_Object3DCount;
  $.Three_Object3DCount = $.add(t1, 1);
  this.id = t1;
  this.parent = null;
  this.children = [];
  this.up = $.Vector3$(0, 0, 0);
  this.position = $.Vector3$(0, 0, 0);
  this.rotation = $.Vector3$(0, 0, 0);
  this.eulerOrder = 'XYZ';
  this.scale = $.Vector3$(1, 1, 1);
  this.dynamic = false;
  this.doubleSided = false;
  this.flipSided = false;
  this.renderDepth = null;
  this.rotationAutoUpdate = true;
  this.matrix = $.Matrix4$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  this.matrixWorld = $.Matrix4$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  this.matrixRotationWorld = $.Matrix4$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  this.matrixAutoUpdate = true;
  this.matrixWorldNeedsUpdate = true;
  this.quaternion = $.Quaternion$(0, 0, 0, 1);
  this.useQuaternion = false;
  this.boundRadius = 0.0;
  this.boundRadiusScale = 1.0;
  this.visible = true;
  this.castShadow = false;
  this.receiveShadow = false;
  this.frustumCulled = true;
  this._vector = $.Vector3$(0, 0, 0);
 }
};

$$.Color = {"":
 ["b=", "g=", "r="],
 super: "Object",
 getContextStyle$0: function() {
  var rr = this.r;
  var bb = this.b;
  var gg = this.g;
  if (typeof rr === 'number') {
    var t1 = this.r;
    if (typeof t1 !== 'number') return this.getContextStyle$0$bailout(1, gg, t1, rr, bb);
    t1 = t1 < 1;
  } else t1 = false;
  if (t1) {
    t1 = this.r;
    if (typeof t1 !== 'number') return this.getContextStyle$0$bailout(2, gg, t1, bb, 0);
    rr = $.toInt(t1 * 255);
  }
  t1 = this.g;
  if (typeof t1 === 'number') {
    t1 = this.g;
    if (typeof t1 !== 'number') return this.getContextStyle$0$bailout(3, gg, bb, t1, rr);
    t1 = t1 < 1;
  } else t1 = false;
  if (t1) {
    t1 = this.g;
    if (typeof t1 !== 'number') return this.getContextStyle$0$bailout(4, bb, t1, rr, 0);
    gg = $.toInt(t1 * 255);
  }
  t1 = this.b;
  if (typeof t1 === 'number') {
    t1 = this.b;
    if (typeof t1 !== 'number') return this.getContextStyle$0$bailout(5, t1, rr, gg, bb);
    t1 = t1 < 1;
  } else t1 = false;
  if (t1) {
    t1 = this.b;
    if (typeof t1 !== 'number') return this.getContextStyle$0$bailout(6, gg, t1, rr, 0);
    bb = $.toInt(t1 * 255);
  }
  return 'rgb(' + $.S(rr) + ',' + $.S(gg) + ',' + $.S(bb) + ')';
 },
 getContextStyle$0$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      gg = env0;
      t1 = env1;
      rr = env2;
      bb = env3;
      break;
    case 2:
      gg = env0;
      t1 = env1;
      bb = env2;
      break;
    case 3:
      gg = env0;
      bb = env1;
      t1 = env2;
      rr = env3;
      break;
    case 4:
      bb = env0;
      t1 = env1;
      rr = env2;
      break;
    case 5:
      t1 = env0;
      rr = env1;
      gg = env2;
      bb = env3;
      break;
    case 6:
      gg = env0;
      t1 = env1;
      rr = env2;
      break;
  }
  switch (state) {
    case 0:
      var rr = this.r;
      var bb = this.b;
      var gg = this.g;
    case 1:
      if (state == 1 || (state == 0 && typeof rr === 'number')) {
        switch (state) {
          case 0:
            var t1 = this.r;
          case 1:
            state = 0;
            t1 = $.ltB(t1, 1);
        }
      } else {
        t1 = false;
      }
    case 2:
      if (state == 2 || (state == 0 && t1)) {
        switch (state) {
          case 0:
            t1 = this.r;
          case 2:
            state = 0;
            rr = $.toInt($.mul(t1, 255));
        }
      }
      t1 = this.g;
    case 3:
      if (state == 3 || (state == 0 && typeof t1 === 'number')) {
        switch (state) {
          case 0:
            t1 = this.g;
          case 3:
            state = 0;
            t1 = $.ltB(t1, 1);
        }
      } else {
        t1 = false;
      }
    case 4:
      if (state == 4 || (state == 0 && t1)) {
        switch (state) {
          case 0:
            t1 = this.g;
          case 4:
            state = 0;
            gg = $.toInt($.mul(t1, 255));
        }
      }
      t1 = this.b;
    case 5:
      if (state == 5 || (state == 0 && typeof t1 === 'number')) {
        switch (state) {
          case 0:
            t1 = this.b;
          case 5:
            state = 0;
            t1 = $.ltB(t1, 1);
        }
      } else {
        t1 = false;
      }
    case 6:
      if (state == 6 || (state == 0 && t1)) {
        switch (state) {
          case 0:
            t1 = this.b;
          case 6:
            state = 0;
            bb = $.toInt($.mul(t1, 255));
        }
      }
      return 'rgb(' + $.S(rr) + ',' + $.S(gg) + ',' + $.S(bb) + ')';
  }
 },
 setHex$1: function(hex) {
  var h = $.toInt($.floor(hex));
  this.r = $.shr($.and(h, 16711680), 16);
  this.g = $.shr($.and(h, 65280), 8);
  this.b = $.and(h, 255);
  return this;
 },
 setRGB$3: function(newR, newG, newB) {
  this.r = newR;
  this.g = newG;
  this.b = newB;
  return this;
 },
 copy$1: function(color) {
  this.r = color.get$r();
  this.g = color.get$g();
  this.b = color.get$b();
  return this;
 },
 Color$1: function(hex) {
  this.r = 1;
  this.g = 1;
  this.b = 1;
  typeof hex === 'number' && this.setHex$1(hex);
 },
 is$Color: true
};

$$.Face4 = {"":
 ["_centroid", "_materialIndex", "_color", "_vertexTangents", "_vertexColors", "_vertexNormals", "_normal", "_d", "_c", "_b", "_a"],
 super: "Object",
 set$d: function(value) {
  this._d = value;
 },
 get$d: function() {
  return this._d;
 },
 set$c: function(value) {
  this._c = value;
 },
 get$c: function() {
  return this._c;
 },
 set$b: function(value) {
  this._b = value;
 },
 get$b: function() {
  return this._b;
 },
 set$a: function(value) {
  this._a = value;
 },
 get$a: function() {
  return this._a;
 },
 get$materialIndex: function() {
  return this._materialIndex;
 },
 set$materialIndex: function(value) {
  this._materialIndex = value;
 },
 get$vertexNormals: function() {
  return this._vertexNormals;
 },
 get$normal: function() {
  return this._normal;
 },
 get$centroid: function() {
  return this._centroid;
 },
 Face4$7: function(a, b, c, d, normal, color, materialIndex) {
  this._a = a;
  this._b = b;
  this._c = c;
  this._d = d;
  this._normal = typeof normal === 'object' && normal !== null && !!normal.is$Vector3 ? normal : $.Vector3$(0, 0, 0);
  this._vertexNormals = typeof normal === 'object' && normal !== null && (normal.constructor === Array || normal.is$List()) ? normal : [];
  this._color = typeof color === 'object' && color !== null && !!color.is$Color ? color : $.Color$(null);
  this._vertexColors = typeof color === 'object' && color !== null && (color.constructor === Array || color.is$List()) ? color : [];
  this._vertexTangents = [];
  this._materialIndex = materialIndex;
  this._centroid = $.Vector3$(0, 0, 0);
 },
 is$Face4: true
};

$$.Frustum = {"":
 ["_planes"],
 super: "Object",
 contains$1: function(object) {
  var planes = this._planes;
  var matrix = object.get$matrixWorld();
  var scale = $.Frustum___v1.setValues$3(matrix.getColumnX$0().length$0(), matrix.getColumnY$0().length$0(), matrix.getColumnZ$0().length$0());
  var radius = $.mul($.neg($.index(object.get$geometry().get$boundingSphere(), 'radius')), $.Math_max(scale.get$x(), $.Math_max(scale.get$y(), scale.get$z())));
  if (typeof radius !== 'number') return this.contains$1$bailout(1, planes, matrix, radius);
  for (var distance = null, i = 0; i < 6; ++i) {
    var t1 = planes.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = $.mul(planes[i].get$x(), matrix.get$n14());
    var t3 = planes.length;
    if (i < 0 || i >= t3) throw $.ioore(i);
    t2 = $.add(t2, $.mul(planes[i].get$y(), matrix.get$n24()));
    var t4 = planes.length;
    if (i < 0 || i >= t4) throw $.ioore(i);
    t2 = $.add(t2, $.mul(planes[i].get$z(), matrix.get$n34()));
    var t5 = planes.length;
    if (i < 0 || i >= t5) throw $.ioore(i);
    distance = $.add(t2, planes[i].get$w());
    if ($.leB(distance, radius)) return false;
  }
  return true;
 },
 contains$1$bailout: function(state, planes, matrix, radius) {
  for (var distance = null, i = 0; i < 6; ++i) {
    var t1 = planes.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = $.mul(planes[i].get$x(), matrix.get$n14());
    var t3 = planes.length;
    if (i < 0 || i >= t3) throw $.ioore(i);
    t2 = $.add(t2, $.mul(planes[i].get$y(), matrix.get$n24()));
    var t4 = planes.length;
    if (i < 0 || i >= t4) throw $.ioore(i);
    t2 = $.add(t2, $.mul(planes[i].get$z(), matrix.get$n34()));
    var t5 = planes.length;
    if (i < 0 || i >= t5) throw $.ioore(i);
    distance = $.add(t2, planes[i].get$w());
    if ($.leB(distance, radius)) return false;
  }
  return true;
 },
 setFromMatrix$1: function(m) {
  var planes = this._planes;
  var t1 = planes.length;
  if (0 < 0 || 0 >= t1) throw $.ioore(0);
  planes[0].setValues$4($.sub(m.get$n41(), m.get$n11()), $.sub(m.get$n42(), m.get$n12()), $.sub(m.get$n43(), m.get$n13()), $.sub(m.get$n44(), m.get$n14()));
  var t2 = planes.length;
  if (1 < 0 || 1 >= t2) throw $.ioore(1);
  planes[1].setValues$4($.add(m.get$n41(), m.get$n11()), $.add(m.get$n42(), m.get$n12()), $.add(m.get$n43(), m.get$n13()), $.add(m.get$n44(), m.get$n14()));
  var t3 = planes.length;
  if (2 < 0 || 2 >= t3) throw $.ioore(2);
  planes[2].setValues$4($.add(m.get$n41(), m.get$n21()), $.add(m.get$n42(), m.get$n22()), $.add(m.get$n43(), m.get$n23()), $.add(m.get$n44(), m.get$n24()));
  var t4 = planes.length;
  if (3 < 0 || 3 >= t4) throw $.ioore(3);
  planes[3].setValues$4($.sub(m.get$n41(), m.get$n21()), $.sub(m.get$n42(), m.get$n22()), $.sub(m.get$n43(), m.get$n23()), $.sub(m.get$n44(), m.get$n24()));
  var t5 = planes.length;
  if (4 < 0 || 4 >= t5) throw $.ioore(4);
  planes[4].setValues$4($.sub(m.get$n41(), m.get$n31()), $.sub(m.get$n42(), m.get$n32()), $.sub(m.get$n43(), m.get$n33()), $.sub(m.get$n44(), m.get$n34()));
  var t6 = planes.length;
  if (5 < 0 || 5 >= t6) throw $.ioore(5);
  var plane = planes[5];
  plane.setValues$4($.add(m.get$n41(), m.get$n31()), $.add(m.get$n42(), m.get$n32()), $.add(m.get$n43(), m.get$n33()), $.add(m.get$n44(), m.get$n34()));
  for (var i = 0; i < 6; ++i) {
    t1 = planes.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    plane = planes[i];
    plane.divideScalar$1($.Math_sqrt($.add($.add($.mul(plane.get$x(), plane.get$x()), $.mul(plane.get$y(), plane.get$y())), $.mul(plane.get$z(), plane.get$z()))));
  }
 },
 Frustum$0: function() {
  var t1 = $.Frustum___v1;
  if (t1 == null) $.Frustum___v1 = $.Vector3$(0, 0, 0);
  this._planes = [$.Vector4$(0, 0, 0, 1), $.Vector4$(0, 0, 0, 1), $.Vector4$(0, 0, 0, 1), $.Vector4$(0, 0, 0, 1), $.Vector4$(0, 0, 0, 1), $.Vector4$(0, 0, 0, 1)];
 }
};

$$.Geometry = {"":
 ["_id?"],
 super: "Object",
 mergeVertices$0: function() {
  var verticesMap = $.makeLiteralMap([]);
  var unique = [];
  var changes = [];
  var precision = $.Math_pow(10, 4);
  if (typeof precision !== 'number') return this.mergeVertices$0$bailout(1, precision, verticesMap, unique, changes);
  var il = this._vertices.length;
  for (var key = null, i = 0; i < il; ++i) {
    var t1 = this._vertices;
    var t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    var v = t1[i].get$position();
    var vx = $.toInt($.round($.mul(v.get$x(), precision)));
    var vy = $.toInt($.round($.mul(v.get$y(), precision)));
    var vz = $.toInt($.round($.mul(v.get$z(), precision)));
    key = $.S(vx) + '_' + $.S(vy) + '_' + $.S(vz);
    t1 = $.index(verticesMap, key);
    if (t1 == null) {
      $.indexSet(verticesMap, key, i);
      t1 = this._vertices;
      t2 = t1.length;
      if (i < 0 || i >= t2) throw $.ioore(i);
      $.add$1(unique, t1[i]);
      $.add$1(changes, unique.length - 1);
    } else {
      t1 = $.index(verticesMap, key);
      if (t1 !== (t1 | 0)) throw $.iae(t1);
      t2 = changes.length;
      if (t1 < 0 || t1 >= t2) throw $.ioore(t1);
      $.add$1(changes, changes[t1]);
    }
  }
  t1 = this._faces;
  il = t1.length;
  for (i = 0; i < il; ++i) {
    t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    var t3 = t1[i];
    if (typeof t3 === 'object' && t3 !== null && !!t3.is$Face3) {
      t2 = t3.get$a();
      if (t2 !== (t2 | 0)) throw $.iae(t2);
      var t4 = changes.length;
      if (t2 < 0 || t2 >= t4) throw $.ioore(t2);
      t3.set$a(changes[t2]);
      var t5 = t3.get$b();
      if (t5 !== (t5 | 0)) throw $.iae(t5);
      var t6 = changes.length;
      if (t5 < 0 || t5 >= t6) throw $.ioore(t5);
      t3.set$b(changes[t5]);
      var t7 = t3.get$c();
      if (t7 !== (t7 | 0)) throw $.iae(t7);
      var t8 = changes.length;
      if (t7 < 0 || t7 >= t8) throw $.ioore(t7);
      t3.set$c(changes[t7]);
    } else {
      if (typeof t3 === 'object' && t3 !== null && !!t3.is$Face4) {
        t2 = t3.get$a();
        if (t2 !== (t2 | 0)) throw $.iae(t2);
        t4 = changes.length;
        if (t2 < 0 || t2 >= t4) throw $.ioore(t2);
        t3.set$a(changes[t2]);
        t5 = t3.get$b();
        if (t5 !== (t5 | 0)) throw $.iae(t5);
        t6 = changes.length;
        if (t5 < 0 || t5 >= t6) throw $.ioore(t5);
        t3.set$b(changes[t5]);
        t7 = t3.get$c();
        if (t7 !== (t7 | 0)) throw $.iae(t7);
        t8 = changes.length;
        if (t7 < 0 || t7 >= t8) throw $.ioore(t7);
        t3.set$c(changes[t7]);
        var t9 = t3.get$d();
        if (t9 !== (t9 | 0)) throw $.iae(t9);
        var t10 = changes.length;
        if (t9 < 0 || t9 >= t10) throw $.ioore(t9);
        t3.set$d(changes[t9]);
      }
    }
  }
  this._vertices = unique;
 },
 mergeVertices$0$bailout: function(state, precision, verticesMap, unique, changes) {
  var il = this._vertices.length;
  for (var key = null, i = 0; i < il; ++i) {
    var t1 = this._vertices;
    var t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    var v = t1[i].get$position();
    var vx = $.toInt($.round($.mul(v.get$x(), precision)));
    var vy = $.toInt($.round($.mul(v.get$y(), precision)));
    var vz = $.toInt($.round($.mul(v.get$z(), precision)));
    key = $.S(vx) + '_' + $.S(vy) + '_' + $.S(vz);
    t1 = $.index(verticesMap, key);
    if (t1 == null) {
      $.indexSet(verticesMap, key, i);
      t1 = this._vertices;
      t2 = t1.length;
      if (i < 0 || i >= t2) throw $.ioore(i);
      $.add$1(unique, t1[i]);
      $.add$1(changes, unique.length - 1);
    } else {
      t1 = $.index(verticesMap, key);
      if (t1 !== (t1 | 0)) throw $.iae(t1);
      t2 = changes.length;
      if (t1 < 0 || t1 >= t2) throw $.ioore(t1);
      $.add$1(changes, changes[t1]);
    }
  }
  t1 = this._faces;
  il = t1.length;
  for (i = 0; i < il; ++i) {
    t2 = t1.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    var t3 = t1[i];
    if (typeof t3 === 'object' && t3 !== null && !!t3.is$Face3) {
      t2 = t3.get$a();
      if (t2 !== (t2 | 0)) throw $.iae(t2);
      var t4 = changes.length;
      if (t2 < 0 || t2 >= t4) throw $.ioore(t2);
      t3.set$a(changes[t2]);
      var t5 = t3.get$b();
      if (t5 !== (t5 | 0)) throw $.iae(t5);
      var t6 = changes.length;
      if (t5 < 0 || t5 >= t6) throw $.ioore(t5);
      t3.set$b(changes[t5]);
      var t7 = t3.get$c();
      if (t7 !== (t7 | 0)) throw $.iae(t7);
      var t8 = changes.length;
      if (t7 < 0 || t7 >= t8) throw $.ioore(t7);
      t3.set$c(changes[t7]);
    } else {
      if (typeof t3 === 'object' && t3 !== null && !!t3.is$Face4) {
        t2 = t3.get$a();
        if (t2 !== (t2 | 0)) throw $.iae(t2);
        t4 = changes.length;
        if (t2 < 0 || t2 >= t4) throw $.ioore(t2);
        t3.set$a(changes[t2]);
        t5 = t3.get$b();
        if (t5 !== (t5 | 0)) throw $.iae(t5);
        t6 = changes.length;
        if (t5 < 0 || t5 >= t6) throw $.ioore(t5);
        t3.set$b(changes[t5]);
        t7 = t3.get$c();
        if (t7 !== (t7 | 0)) throw $.iae(t7);
        t8 = changes.length;
        if (t7 < 0 || t7 >= t8) throw $.ioore(t7);
        t3.set$c(changes[t7]);
        var t9 = t3.get$d();
        if (t9 !== (t9 | 0)) throw $.iae(t9);
        var t10 = changes.length;
        if (t9 < 0 || t9 >= t10) throw $.ioore(t9);
        t3.set$d(changes[t9]);
      }
    }
  }
  this._vertices = unique;
 },
 computeBoundingSphere$0: function() {
  var vl = this._vertices.length;
  for (var radius = null, maxRadius = 0, v = 0; v < vl; ++v) {
    var t1 = this._vertices;
    var t2 = t1.length;
    if (v < 0 || v >= t2) throw $.ioore(v);
    radius = t1[v].get$position().length$0();
    if ($.gtB(radius, maxRadius)) maxRadius = radius;
  }
  this._boundingSphere = $.makeLiteralMap(['radius', maxRadius]);
 },
 computeCentroids$0: function() {
  var t1 = this._faces;
  var fl = t1.length;
  for (var face = null, f = 0; f < fl; ++f) {
    var t2 = t1.length;
    if (f < 0 || f >= t2) throw $.ioore(f);
    face = t1[f];
    face.get$centroid().setValues$3(0, 0, 0);
    if (typeof face === 'object' && face !== null && !!face.is$Face3) {
      t2 = face.get$centroid();
      var t3 = this._vertices;
      var t4 = face.get$a();
      if (t4 !== (t4 | 0)) throw $.iae(t4);
      var t5 = t3.length;
      if (t4 < 0 || t4 >= t5) throw $.ioore(t4);
      t2.addSelf$1(t3[t4].get$position());
      t2 = face.get$centroid();
      var t6 = this._vertices;
      var t7 = face.get$b();
      if (t7 !== (t7 | 0)) throw $.iae(t7);
      var t8 = t6.length;
      if (t7 < 0 || t7 >= t8) throw $.ioore(t7);
      t2.addSelf$1(t6[t7].get$position());
      t2 = face.get$centroid();
      var t9 = this._vertices;
      var t10 = face.get$c();
      if (t10 !== (t10 | 0)) throw $.iae(t10);
      var t11 = t9.length;
      if (t10 < 0 || t10 >= t11) throw $.ioore(t10);
      t2.addSelf$1(t9[t10].get$position());
      face.get$centroid().divideScalar$1(3);
    } else {
      if (typeof face === 'object' && face !== null && !!face.is$Face4) {
        t2 = face.get$centroid();
        t3 = this._vertices;
        t4 = face.get$a();
        if (t4 !== (t4 | 0)) throw $.iae(t4);
        t5 = t3.length;
        if (t4 < 0 || t4 >= t5) throw $.ioore(t4);
        t2.addSelf$1(t3[t4].get$position());
        t2 = face.get$centroid();
        t6 = this._vertices;
        t7 = face.get$b();
        if (t7 !== (t7 | 0)) throw $.iae(t7);
        t8 = t6.length;
        if (t7 < 0 || t7 >= t8) throw $.ioore(t7);
        t2.addSelf$1(t6[t7].get$position());
        t2 = face.get$centroid();
        t9 = this._vertices;
        t10 = face.get$c();
        if (t10 !== (t10 | 0)) throw $.iae(t10);
        t11 = t9.length;
        if (t10 < 0 || t10 >= t11) throw $.ioore(t10);
        t2.addSelf$1(t9[t10].get$position());
        t2 = face.get$centroid();
        var t12 = this._vertices;
        var t13 = face.get$d();
        if (t13 !== (t13 | 0)) throw $.iae(t13);
        var t14 = t12.length;
        if (t13 < 0 || t13 >= t14) throw $.ioore(t13);
        t2.addSelf$1(t12[t13].get$position());
        face.get$centroid().divideScalar$1(4);
      }
    }
  }
 },
 get$faceVertexUvs: function() {
  return this._faceVertexUvs;
 },
 get$vertices: function() {
  return this._vertices;
 },
 get$materials: function() {
  return this._materials;
 },
 get$faces: function() {
  return this._faces;
 },
 get$morphTargets: function() {
  return this._morphTargets;
 },
 get$boundingSphere: function() {
  return this._boundingSphere;
 },
 Geometry$0: function() {
  var t1 = $.Three_GeometryCount;
  $.Three_GeometryCount = $.add(t1, 1);
  this._id = t1;
  this._vertices = [];
  this._colors = [];
  this._materials = [];
  this._faces = [];
  this._faceUvs = [[]];
  this._faceVertexUvs = [];
  $.add$1(this._faceVertexUvs, $.ListFactory_List(null));
  this._morphTargets = [];
  this._morphColors = [];
  this._skinWeights = [];
  this._skinIndices = [];
  this._boundingBox = null;
  this._boundingSphere = null;
  this._hasTangents = false;
  this._dynamic = false;
 }
};

$$.Vertex = {"":
 ["_position"],
 super: "Object",
 get$position: function() {
  return this._position;
 },
 Vertex$1: function(position) {
  this._position = !(position == null) ? position : $.Vector3$(0, 0, 0);
 }
};

$$.Projector = {"":
 ["_frustum", "_projScreenobjectMatrixWorld", "_projScreenMatrix", "_renderData", "_clippedVertex2PositionScreen", "_clippedVertex1PositionScreen", "_vector4", "_vector3", "_particle", "_line", "_vertex", "_object", "_particleCount", "_lineCount", "_face4Count", "_face3Count", "_vertexCount", "_objectCount", "_particlePool", "_linePool", "_face3Pool", "_face4Pool", "_vertexPool", "_objectPool"],
 super: "Object",
 clipLine$2: function(s1, s2) {
  var t1 = s1.get$z();
  if (typeof t1 !== 'number') return this.clipLine$2$bailout(1, s1, s2, t1, 0, 0, 0, 0);
  var t2 = s1.get$w();
  if (typeof t2 !== 'number') return this.clipLine$2$bailout(2, s1, s2, t1, t2, 0, 0, 0);
  var bc1near = t1 + t2;
  t2 = s2.get$z();
  if (typeof t2 !== 'number') return this.clipLine$2$bailout(3, s1, s2, bc1near, t2, 0, 0, 0);
  t1 = s2.get$w();
  if (typeof t1 !== 'number') return this.clipLine$2$bailout(4, s1, s2, bc1near, t2, t1, 0, 0);
  var bc2near = t2 + t1;
  t1 = s1.get$z();
  if (typeof t1 !== 'number') return this.clipLine$2$bailout(5, s1, s2, bc1near, bc2near, t1, 0, 0);
  t1 = -t1;
  t2 = s1.get$w();
  if (typeof t2 !== 'number') return this.clipLine$2$bailout(6, s1, s2, t2, t1, bc1near, bc2near, 0);
  var bc1far = t1 + t2;
  t2 = s2.get$z();
  if (typeof t2 !== 'number') return this.clipLine$2$bailout(7, s1, s2, bc1far, t2, bc1near, bc2near, 0);
  t2 = -t2;
  t1 = s2.get$w();
  if (typeof t1 !== 'number') return this.clipLine$2$bailout(8, s1, s2, bc1far, t2, t1, bc1near, bc2near);
  var bc2far = t2 + t1;
  if (bc1near >= 0 && bc2near >= 0 && bc1far >= 0 && bc2far >= 0) return true;
  t1 = bc1near < 0;
  if (!(t1 && bc2near < 0)) {
    t2 = bc1far < 0 && bc2far < 0;
  } else t2 = true;
  if (t2) return false;
  if (t1) {
    var alpha1 = $.Math_max(0, bc1near / (bc1near - bc2near));
    if (typeof alpha1 !== 'number') return this.clipLine$2$bailout(9, s1, s2, bc2far, bc1far, alpha1, 0, 0);
    var alpha2 = 1;
  } else {
    if (bc2near < 0) {
      alpha2 = $.Math_min(1, bc1near / (bc1near - bc2near));
      if (typeof alpha2 !== 'number') return this.clipLine$2$bailout(10, s1, s2, bc2far, bc1far, alpha2, 0, 0);
    } else alpha2 = 1;
    alpha1 = 0;
  }
  if (bc1far < 0) {
    alpha1 = $.Math_max(alpha1, bc1far / (bc1far - bc2far));
    if (typeof alpha1 !== 'number') return this.clipLine$2$bailout(11, s1, s2, alpha2, alpha1, 0, 0, 0);
  } else {
    if (bc2far < 0) {
      alpha2 = $.Math_min(alpha2, bc1far / (bc1far - bc2far));
      if (typeof alpha2 !== 'number') return this.clipLine$2$bailout(12, s1, s2, alpha1, alpha2, 0, 0, 0);
    }
  }
  if (alpha2 < alpha1) return false;
  s1.lerpSelf$2(s2, alpha1);
  s2.lerpSelf$2(s1, 1 - alpha2);
  return true;
 },
 clipLine$2$bailout: function(state, env0, env1, env2, env3, env4, env5, env6) {
  switch (state) {
    case 1:
      var s1 = env0;
      var s2 = env1;
      t1 = env2;
      break;
    case 2:
      s1 = env0;
      s2 = env1;
      t1 = env2;
      t2 = env3;
      break;
    case 3:
      s1 = env0;
      s2 = env1;
      bc1near = env2;
      t2 = env3;
      break;
    case 4:
      s1 = env0;
      s2 = env1;
      bc1near = env2;
      t2 = env3;
      t1 = env4;
      break;
    case 5:
      s1 = env0;
      s2 = env1;
      bc1near = env2;
      bc2near = env3;
      t1 = env4;
      break;
    case 6:
      s1 = env0;
      s2 = env1;
      t2 = env2;
      t1 = env3;
      bc1near = env4;
      bc2near = env5;
      break;
    case 7:
      s1 = env0;
      s2 = env1;
      bc1far = env2;
      t2 = env3;
      bc1near = env4;
      bc2near = env5;
      break;
    case 8:
      s1 = env0;
      s2 = env1;
      bc1far = env2;
      t2 = env3;
      t1 = env4;
      bc1near = env5;
      bc2near = env6;
      break;
    case 9:
      s1 = env0;
      s2 = env1;
      bc2far = env2;
      bc1far = env3;
      alpha1 = env4;
      break;
    case 10:
      s1 = env0;
      s2 = env1;
      bc2far = env2;
      bc1far = env3;
      alpha2 = env4;
      break;
    case 11:
      s1 = env0;
      s2 = env1;
      alpha2 = env2;
      alpha1 = env3;
      break;
    case 12:
      s1 = env0;
      s2 = env1;
      alpha1 = env2;
      alpha2 = env3;
      break;
  }
  switch (state) {
    case 0:
      var t1 = s1.get$z();
    case 1:
      state = 0;
      var t2 = s1.get$w();
    case 2:
      state = 0;
      var bc1near = $.add(t1, t2);
      t2 = s2.get$z();
    case 3:
      state = 0;
      t1 = s2.get$w();
    case 4:
      state = 0;
      var bc2near = $.add(t2, t1);
      t1 = s1.get$z();
    case 5:
      state = 0;
      t1 = $.neg(t1);
      t2 = s1.get$w();
    case 6:
      state = 0;
      var bc1far = $.add(t1, t2);
      t2 = s2.get$z();
    case 7:
      state = 0;
      t2 = $.neg(t2);
      t1 = s2.get$w();
    case 8:
      state = 0;
      var bc2far = $.add(t2, t1);
    case 9:
    case 10:
    case 11:
    case 12:
      if ((state == 0 && ($.geB(bc1near, 0) && $.geB(bc2near, 0) && $.geB(bc1far, 0) && $.geB(bc2far, 0)))) {
        return true;
      } else {
        switch (state) {
          case 0:
            if (!($.ltB(bc1near, 0) && $.ltB(bc2near, 0))) {
              t1 = $.ltB(bc1far, 0) && $.ltB(bc2far, 0);
            } else t1 = true;
          case 9:
          case 10:
          case 11:
          case 12:
            if ((state == 0 && t1)) {
              return false;
            } else {
              switch (state) {
                case 0:
                case 9:
                case 10:
                  if (state == 9 || (state == 0 && $.ltB(bc1near, 0))) {
                    switch (state) {
                      case 0:
                        var alpha1 = $.Math_max(0, $.div(bc1near, $.sub(bc1near, bc2near)));
                      case 9:
                        state = 0;
                        var alpha2 = 1;
                    }
                  } else {
                    switch (state) {
                      case 0:
                      case 10:
                        if (state == 10 || (state == 0 && $.ltB(bc2near, 0))) {
                          switch (state) {
                            case 0:
                              alpha2 = $.Math_min(1, $.div(bc1near, $.sub(bc1near, bc2near)));
                            case 10:
                              state = 0;
                          }
                        } else {
                          alpha2 = 1;
                        }
                        alpha1 = 0;
                    }
                  }
                case 11:
                case 12:
                  if (state == 11 || (state == 0 && $.ltB(bc1far, 0))) {
                    switch (state) {
                      case 0:
                        alpha1 = $.Math_max(alpha1, $.div(bc1far, $.sub(bc1far, bc2far)));
                      case 11:
                        state = 0;
                    }
                  } else {
                    switch (state) {
                      case 0:
                      case 12:
                        if (state == 12 || (state == 0 && $.ltB(bc2far, 0))) {
                          switch (state) {
                            case 0:
                              alpha2 = $.Math_min(alpha2, $.div(bc1far, $.sub(bc1far, bc2far)));
                            case 12:
                              state = 0;
                          }
                        }
                    }
                  }
                  if ($.ltB(alpha2, alpha1)) return false;
                  s1.lerpSelf$2(s2, alpha1);
                  if (typeof alpha2 !== 'number') throw $.iae(alpha2);
                  s2.lerpSelf$2(s1, 1 - alpha2);
                  return true;
              }
            }
        }
      }
  }
 },
 painterSort$2: function(a, b) {
  return $.sub(b.get$z(), a.get$z());
 },
 get$painterSort: function() { return new $.BoundClosure1(this, 'painterSort$2'); },
 getNextParticleInPool$0: function() {
  var t1 = this._particleCount;
  if (typeof t1 !== 'number') return this.getNextParticleInPool$0$bailout(1, t1, 0);
  var t2 = this._particlePool;
  var t3 = t2.length;
  if (t1 < t3) {
    if (t1 !== (t1 | 0)) throw $.iae(t1);
    if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
    var t4 = t2[t1];
    var particle = !(t4 == null) ? t2[t1] : $.RenderableParticle$();
  } else {
    particle = $.RenderableParticle$();
    $.add$1(t2, particle);
  }
  t1 = this._particleCount;
  if (typeof t1 !== 'number') return this.getNextParticleInPool$0$bailout(2, t1, particle);
  this._particleCount = t1 + 1;
  return particle;
 },
 getNextParticleInPool$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      particle = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._particleCount;
    case 1:
      state = 0;
      var t2 = this._particlePool;
      if ($.ltB(t1, t2.length)) {
        t1 = this._particleCount;
        if (t1 !== (t1 | 0)) throw $.iae(t1);
        var t3 = t2.length;
        if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
        t1 = t2[t1];
        if (!(t1 == null)) {
          t1 = this._particleCount;
          if (t1 !== (t1 | 0)) throw $.iae(t1);
          t3 = t2.length;
          if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
          var particle = t2[t1];
        } else particle = $.RenderableParticle$();
      } else {
        particle = $.RenderableParticle$();
        $.add$1(t2, particle);
      }
      t1 = this._particleCount;
    case 2:
      state = 0;
      this._particleCount = $.add(t1, 1);
      return particle;
  }
 },
 getNextLineInPool$0: function() {
  var t1 = this._lineCount;
  if (typeof t1 !== 'number') return this.getNextLineInPool$0$bailout(1, t1, 0);
  var t2 = this._linePool;
  var t3 = t2.length;
  if (t1 < t3) {
    if (t1 !== (t1 | 0)) throw $.iae(t1);
    if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
    var t4 = t2[t1];
    var line = !(t4 == null) ? t2[t1] : $.RenderableLine$();
  } else {
    line = $.RenderableLine$();
    $.add$1(t2, line);
  }
  t1 = this._lineCount;
  if (typeof t1 !== 'number') return this.getNextLineInPool$0$bailout(2, t1, line);
  this._lineCount = t1 + 1;
  return line;
 },
 getNextLineInPool$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      line = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._lineCount;
    case 1:
      state = 0;
      var t2 = this._linePool;
      if ($.ltB(t1, t2.length)) {
        t1 = this._lineCount;
        if (t1 !== (t1 | 0)) throw $.iae(t1);
        var t3 = t2.length;
        if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
        t1 = t2[t1];
        if (!(t1 == null)) {
          t1 = this._lineCount;
          if (t1 !== (t1 | 0)) throw $.iae(t1);
          t3 = t2.length;
          if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
          var line = t2[t1];
        } else line = $.RenderableLine$();
      } else {
        line = $.RenderableLine$();
        $.add$1(t2, line);
      }
      t1 = this._lineCount;
    case 2:
      state = 0;
      this._lineCount = $.add(t1, 1);
      return line;
  }
 },
 getNextFace4InPool$0: function() {
  var t1 = this._face4Count;
  if (typeof t1 !== 'number') return this.getNextFace4InPool$0$bailout(1, t1, 0);
  var t2 = this._face4Pool;
  var t3 = t2.length;
  if (t1 < t3) {
    if (t1 !== (t1 | 0)) throw $.iae(t1);
    if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
    var t4 = t2[t1];
    var face = !(t4 == null) ? t2[t1] : $.RenderableFace4$();
  } else {
    face = $.RenderableFace4$();
    $.add$1(t2, face);
  }
  t1 = this._face4Count;
  if (typeof t1 !== 'number') return this.getNextFace4InPool$0$bailout(2, t1, face);
  this._face4Count = t1 + 1;
  return face;
 },
 getNextFace4InPool$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      face = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._face4Count;
    case 1:
      state = 0;
      var t2 = this._face4Pool;
      if ($.ltB(t1, t2.length)) {
        t1 = this._face4Count;
        if (t1 !== (t1 | 0)) throw $.iae(t1);
        var t3 = t2.length;
        if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
        t1 = t2[t1];
        if (!(t1 == null)) {
          t1 = this._face4Count;
          if (t1 !== (t1 | 0)) throw $.iae(t1);
          t3 = t2.length;
          if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
          var face = t2[t1];
        } else face = $.RenderableFace4$();
      } else {
        face = $.RenderableFace4$();
        $.add$1(t2, face);
      }
      t1 = this._face4Count;
    case 2:
      state = 0;
      this._face4Count = $.add(t1, 1);
      return face;
  }
 },
 getNextFace3InPool$0: function() {
  var t1 = this._face3Count;
  if (typeof t1 !== 'number') return this.getNextFace3InPool$0$bailout(1, t1, 0);
  var t2 = this._face3Pool;
  var t3 = t2.length;
  if (t1 < t3) {
    if (t1 !== (t1 | 0)) throw $.iae(t1);
    if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
    var t4 = t2[t1];
    var face = !(t4 == null) ? t2[t1] : $.RenderableFace3$();
  } else {
    face = $.RenderableFace3$();
    $.add$1(t2, face);
  }
  t1 = this._face3Count;
  if (typeof t1 !== 'number') return this.getNextFace3InPool$0$bailout(2, t1, face);
  this._face3Count = t1 + 1;
  return face;
 },
 getNextFace3InPool$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      face = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._face3Count;
    case 1:
      state = 0;
      var t2 = this._face3Pool;
      if ($.ltB(t1, t2.length)) {
        t1 = this._face3Count;
        if (t1 !== (t1 | 0)) throw $.iae(t1);
        var t3 = t2.length;
        if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
        t1 = t2[t1];
        if (!(t1 == null)) {
          t1 = this._face3Count;
          if (t1 !== (t1 | 0)) throw $.iae(t1);
          t3 = t2.length;
          if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
          var face = t2[t1];
        } else face = $.RenderableFace3$();
      } else {
        face = $.RenderableFace3$();
        $.add$1(t2, face);
      }
      t1 = this._face3Count;
    case 2:
      state = 0;
      this._face3Count = $.add(t1, 1);
      return face;
  }
 },
 getNextVertexInPool$0: function() {
  var t1 = this._vertexCount;
  if (typeof t1 !== 'number') return this.getNextVertexInPool$0$bailout(1, t1, 0);
  var t2 = this._vertexPool;
  var t3 = t2.length;
  if (t1 < t3) {
    if (t1 !== (t1 | 0)) throw $.iae(t1);
    if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
    var t4 = t2[t1];
    var vertex = !(t4 == null) ? t2[t1] : $.RenderableVertex$();
  } else {
    vertex = $.RenderableVertex$();
    $.add$1(t2, vertex);
  }
  t1 = this._vertexCount;
  if (typeof t1 !== 'number') return this.getNextVertexInPool$0$bailout(2, t1, vertex);
  this._vertexCount = t1 + 1;
  return vertex;
 },
 getNextVertexInPool$0$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      break;
    case 2:
      t1 = env0;
      vertex = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._vertexCount;
    case 1:
      state = 0;
      var t2 = this._vertexPool;
      if ($.ltB(t1, t2.length)) {
        t1 = this._vertexCount;
        if (t1 !== (t1 | 0)) throw $.iae(t1);
        var t3 = t2.length;
        if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
        t1 = t2[t1];
        if (!(t1 == null)) {
          t1 = this._vertexCount;
          if (t1 !== (t1 | 0)) throw $.iae(t1);
          t3 = t2.length;
          if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
          var vertex = t2[t1];
        } else vertex = $.RenderableVertex$();
      } else {
        vertex = $.RenderableVertex$();
        $.add$1(t2, vertex);
      }
      t1 = this._vertexCount;
    case 2:
      state = 0;
      this._vertexCount = $.add(t1, 1);
      return vertex;
  }
 },
 getNextObjectInPool$0: function() {
  var t1 = this._objectCount;
  var t2 = this._objectPool;
  if ($.ltB(t1, t2.length)) {
    t1 = this._objectCount;
    if (t1 !== (t1 | 0)) throw $.iae(t1);
    var t3 = t2.length;
    if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
    t1 = t2[t1];
    if (!(t1 == null)) {
      t1 = this._objectCount;
      if (t1 !== (t1 | 0)) throw $.iae(t1);
      t3 = t2.length;
      if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
      var object = t2[t1];
    } else object = $.RenderableObject$();
  } else {
    object = $.RenderableObject$();
    $.add$1(t2, object);
  }
  this._objectCount = $.add(this._objectCount, 1);
  return object;
 },
 projectScene$3: function(scene, camera, sort) {
  var near = camera.get$near();
  if (typeof near !== 'number') return this.projectScene$3$bailout(1, scene, camera, sort, near, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var far = camera.get$far();
  if (typeof far !== 'number') return this.projectScene$3$bailout(2, scene, camera, sort, near, far, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  this._face3Count = 0;
  this._face4Count = 0;
  this._lineCount = 0;
  this._particleCount = 0;
  var t1 = [];
  this._renderData.elements = t1;
  t1 = camera.get$parent();
  t1 == null && $.add$1(scene, camera);
  scene.updateMatrixWorld$0();
  camera.get$matrixWorldInverse().getInverse$1(camera.get$matrixWorld());
  t1 = this._projScreenMatrix;
  t1.multiply$2(camera.get$projectionMatrix(), camera.get$matrixWorldInverse());
  this._frustum.setFromMatrix$1(t1);
  this._renderData = this.projectGraph$2(scene, false);
  var ol = this._renderData.objects.length;
  if (typeof ol !== 'number') return this.projectScene$3$bailout(3, camera, sort, near, far, t1, ol, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  for (var t2 = this._vertexPool, t3 = this._projScreenobjectMatrixWorld, t4 = this._clippedVertex1PositionScreen, t5 = this._clippedVertex2PositionScreen, v4 = null, vl = null, faceVertexUvs = null, u = null, faceVertexNormals = null, _face = null, objectMatrixWorld = null, v = null, objectMaterial = null, v3 = null, c = null, objectMatrixWorldRotation = null, cl = null, object = null, geometry = null, face = null, f = null, ul = null, n = null, fl = null, vertices = null, nl = null, v1 = null, geometryMaterials = null, faces = null, normal = null, v2 = null, o = 0; o < ol; ++o) {
    object = this._renderData.objects[o].get$object();
    objectMatrixWorld = object.get$matrixWorld();
    objectMaterial = object.get$material();
    this._vertexCount = 0;
    if (typeof object === 'object' && object !== null && !!object.is$Mesh) {
      geometry = object.get$geometry();
      geometryMaterials = object.get$geometry().get$materials();
      if (typeof geometryMaterials !== 'string' && (typeof geometryMaterials !== 'object' || geometryMaterials === null || (geometryMaterials.constructor !== Array && !geometryMaterials.is$JavaScriptIndexingBehavior()))) return this.projectScene$3$bailout(4, camera, sort, face, near, far, ul, t1, n, nl, v1, normal, v2, o, t2, objectMatrixWorld, objectMaterial, geometry, geometryMaterials, t3, ol, v4, t4, u, t5, faceVertexNormals, _face, v3, c, object, cl, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      vertices = geometry.get$vertices();
      if (typeof vertices !== 'string' && (typeof vertices !== 'object' || vertices === null || (vertices.constructor !== Array && !vertices.is$JavaScriptIndexingBehavior()))) return this.projectScene$3$bailout(5, camera, sort, face, near, far, ul, t1, n, nl, v1, normal, v2, o, t2, objectMatrixWorld, objectMaterial, geometry, geometryMaterials, vertices, t3, ol, v4, t4, u, t5, faceVertexNormals, _face, v3, c, object, cl, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      faces = geometry.get$faces();
      if (typeof faces !== 'string' && (typeof faces !== 'object' || faces === null || (faces.constructor !== Array && !faces.is$JavaScriptIndexingBehavior()))) return this.projectScene$3$bailout(6, camera, sort, face, near, far, ul, t1, n, nl, v1, normal, v2, o, t2, objectMatrixWorld, objectMaterial, geometry, geometryMaterials, vertices, faces, t3, ol, v4, t4, u, t5, faceVertexNormals, _face, v3, c, object, cl, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      faceVertexUvs = geometry.get$faceVertexUvs();
      if (typeof faceVertexUvs !== 'string' && (typeof faceVertexUvs !== 'object' || faceVertexUvs === null || (faceVertexUvs.constructor !== Array && !faceVertexUvs.is$JavaScriptIndexingBehavior()))) return this.projectScene$3$bailout(7, camera, sort, face, near, far, ul, t1, n, nl, v1, normal, v2, o, t2, objectMatrixWorld, objectMaterial, geometry, geometryMaterials, vertices, faces, faceVertexUvs, t3, v4, ol, u, t5, faceVertexNormals, _face, t4, v3, c, object, cl, 0, 0, 0, 0, 0, 0, 0, 0);
      objectMatrixWorldRotation = object.matrixRotationWorld.extractRotation$1(objectMatrixWorld);
      vl = vertices.length;
      for (v = 0; v < vl; ++v) {
        this._vertex = this.getNextVertexInPool$0();
        var t6 = this._vertex.get$positionWorld();
        var t7 = vertices.length;
        if (v < 0 || v >= t7) throw $.ioore(v);
        t6.copy$1(vertices[v].get$position());
        objectMatrixWorld.multiplyVector3$1(this._vertex.get$positionWorld());
        this._vertex.get$positionScreen().copy$1(this._vertex.get$positionWorld());
        t1.multiplyVector4$1(this._vertex.get$positionScreen());
        t6 = this._vertex.get$positionScreen();
        t6.set$x($.div(t6.get$x(), this._vertex.get$positionScreen().get$w()));
        t6 = this._vertex.get$positionScreen();
        t6.set$y($.div(t6.get$y(), this._vertex.get$positionScreen().get$w()));
        t6 = $.gtB(this._vertex.get$positionScreen().get$z(), near) && $.ltB(this._vertex.get$positionScreen().get$z(), far);
        this._vertex.set$visible(t6);
      }
      fl = faces.length;
      for (t6 = !object.doubleSided, t7 = object.flipSided, f = 0; f < fl; ++f) {
        var t8 = faces.length;
        if (f < 0 || f >= t8) throw $.ioore(f);
        face = faces[f];
        if (typeof face === 'object' && face !== null && !!face.is$Face3) {
          t8 = face.get$a();
          if (t8 !== (t8 | 0)) throw $.iae(t8);
          var t9 = t2.length;
          if (t8 < 0 || t8 >= t9) throw $.ioore(t8);
          v1 = t2[t8];
          t8 = face.get$b();
          if (t8 !== (t8 | 0)) throw $.iae(t8);
          var t10 = t2.length;
          if (t8 < 0 || t8 >= t10) throw $.ioore(t8);
          v2 = t2[t8];
          t8 = face.get$c();
          if (t8 !== (t8 | 0)) throw $.iae(t8);
          var t11 = t2.length;
          if (t8 < 0 || t8 >= t11) throw $.ioore(t8);
          v3 = t2[t8];
          if (v1.get$visible() === true && v2.get$visible() === true && v3.get$visible() === true) {
            if (t6) {
              t8 = $.lt($.sub($.mul($.sub(v3.get$positionScreen().get$x(), v1.get$positionScreen().get$x()), $.sub(v2.get$positionScreen().get$y(), v1.get$positionScreen().get$y())), $.mul($.sub(v3.get$positionScreen().get$y(), v1.get$positionScreen().get$y()), $.sub(v2.get$positionScreen().get$x(), v1.get$positionScreen().get$x()))), 0);
              t9 = !(t7 === t8);
              t8 = t9;
            } else t8 = true;
          } else t8 = false;
          if (t8) {
            _face = this.getNextFace3InPool$0();
            _face.get$v1().copy$1(v1);
            _face.get$v2().copy$1(v2);
            _face.get$v3().copy$1(v3);
          } else continue;
        } else {
          if (typeof face === 'object' && face !== null && !!face.is$Face4) {
            t8 = face.get$a();
            if (t8 !== (t8 | 0)) throw $.iae(t8);
            t9 = t2.length;
            if (t8 < 0 || t8 >= t9) throw $.ioore(t8);
            v1 = t2[t8];
            t8 = face.get$b();
            if (t8 !== (t8 | 0)) throw $.iae(t8);
            t10 = t2.length;
            if (t8 < 0 || t8 >= t10) throw $.ioore(t8);
            v2 = t2[t8];
            t8 = face.get$c();
            if (t8 !== (t8 | 0)) throw $.iae(t8);
            t11 = t2.length;
            if (t8 < 0 || t8 >= t11) throw $.ioore(t8);
            v3 = t2[t8];
            t8 = face.get$d();
            if (t8 !== (t8 | 0)) throw $.iae(t8);
            var t12 = t2.length;
            if (t8 < 0 || t8 >= t12) throw $.ioore(t8);
            v4 = t2[t8];
            var bool1 = $.ltB($.sub($.mul($.sub(v4.get$positionScreen().get$x(), v1.get$positionScreen().get$x()), $.sub(v2.get$positionScreen().get$y(), v1.get$positionScreen().get$y())), $.mul($.sub(v4.get$positionScreen().get$y(), v1.get$positionScreen().get$y()), $.sub(v2.get$positionScreen().get$x(), v1.get$positionScreen().get$x()))), 0);
            var bool2 = $.ltB($.sub($.mul($.sub(v2.get$positionScreen().get$x(), v3.get$positionScreen().get$x()), $.sub(v4.get$positionScreen().get$y(), v3.get$positionScreen().get$y())), $.mul($.sub(v2.get$positionScreen().get$y(), v3.get$positionScreen().get$y()), $.sub(v4.get$positionScreen().get$x(), v3.get$positionScreen().get$x()))), 0);
            var bool3 = bool1 || bool2;
            if (v1.get$visible() === true && v2.get$visible() === true && v3.get$visible() === true && v4.get$visible() === true) {
              t8 = object.doubleSided || !(t7 === bool3);
            } else t8 = false;
            if (t8) {
              _face = this.getNextFace4InPool$0();
              _face.get$v1().copy$1(v1);
              _face.get$v2().copy$1(v2);
              _face.get$v3().copy$1(v3);
              _face.get$v4().copy$1(v4);
            } else continue;
          }
        }
        _face.get$normalWorld().copy$1(face.get$normal());
        objectMatrixWorldRotation.multiplyVector3$1(_face.get$normalWorld());
        _face.get$centroidWorld().copy$1(face.get$centroid());
        objectMatrixWorld.multiplyVector3$1(_face.get$centroidWorld());
        _face.get$centroidScreen().copy$1(_face.get$centroidWorld());
        t1.multiplyVector3$1(_face.get$centroidScreen());
        faceVertexNormals = face.get$vertexNormals();
        nl = $.get$length(faceVertexNormals);
        for (n = 0; $.ltB(n, nl); ++n) {
          normal = $.index(_face.get$vertexNormalsWorld(), n);
          normal.copy$1($.index(faceVertexNormals, n));
          objectMatrixWorldRotation.multiplyVector3$1(normal);
        }
        cl = faceVertexUvs.length;
        for (c = 0; c < cl; ++c) {
          t8 = faceVertexUvs.length;
          if (c < 0 || c >= t8) throw $.ioore(c);
          t9 = faceVertexUvs[c];
          if (typeof t9 !== 'string' && (typeof t9 !== 'object' || t9 === null || (t9.constructor !== Array && !t9.is$JavaScriptIndexingBehavior()))) return this.projectScene$3$bailout(8, c, camera, sort, near, far, t1, ul, face, n, o, normal, v4, _face, t2, v3, t9, v2, v1, objectMaterial, objectMatrixWorld, geometry, geometryMaterials, fl, vertices, faceVertexUvs, t7, objectMatrixWorldRotation, t3, vl, cl, faceVertexNormals, t4, nl, faces, ol, u, t5, f, t6, object, v);
          t10 = t9.length;
          if (f < 0 || f >= t10) throw $.ioore(f);
          t9 = t9[f];
          if (typeof t9 !== 'string' && (typeof t9 !== 'object' || t9 === null || (t9.constructor !== Array && !t9.is$JavaScriptIndexingBehavior()))) return this.projectScene$3$bailout(9, c, camera, sort, near, far, t1, ul, face, n, o, normal, v4, _face, t2, v3, v2, t9, v1, objectMaterial, objectMatrixWorld, geometry, geometryMaterials, fl, vertices, faceVertexUvs, t7, objectMatrixWorldRotation, t3, vl, cl, faceVertexNormals, t4, nl, faces, ol, u, t5, f, t6, object, v);
          ul = t9.length;
          for (u = 0; u < ul; ++u) {
            var faceUVs = $.index(_face.get$uvs(), c);
            t8 = t9.length;
            if (u < 0 || u >= t8) throw $.ioore(u);
            $.add$1(faceUVs, t9[u]);
          }
        }
        _face.set$material(objectMaterial);
        t8 = face.get$materialIndex();
        if (!(t8 == null)) {
          t8 = face.get$materialIndex();
          if (t8 !== (t8 | 0)) throw $.iae(t8);
          t9 = geometryMaterials.length;
          if (t8 < 0 || t8 >= t9) throw $.ioore(t8);
          t8 = geometryMaterials[t8];
        } else t8 = null;
        _face.set$faceMaterial(t8);
        _face.set$z(_face.get$centroidScreen().get$z());
        $.add$1(this._renderData.elements, _face);
      }
      object = object;
    } else {
      if (typeof object === 'object' && object !== null && !!object.is$Line) {
        t3.multiply$2(t1, objectMatrixWorld);
        vertices = object.get$geometry().get$vertices();
        if (typeof vertices !== 'string' && (typeof vertices !== 'object' || vertices === null || (vertices.constructor !== Array && !vertices.is$JavaScriptIndexingBehavior()))) return this.projectScene$3$bailout(10, camera, geometry, face, f, ul, n, fl, far, nl, near, sort, geometryMaterials, faces, normal, v2, o, t1, t2, objectMatrixWorld, objectMaterial, vertices, t3, ol, v4, faceVertexUvs, t4, t5, u, faceVertexNormals, _face, v3, c, objectMatrixWorldRotation, cl, object, 0, 0, 0, 0, 0, 0);
        v1 = this.getNextVertexInPool$0();
        t6 = v1.get$positionScreen();
        t7 = vertices.length;
        if (0 >= t7) throw $.ioore(0);
        t6.copy$1(vertices[0].get$position());
        t3.multiplyVector4$1(v1.get$positionScreen());
        vl = vertices.length;
        for (v = 1; v < vl; ++v) {
          v1 = this.getNextVertexInPool$0();
          t6 = v1.get$positionScreen();
          t7 = vertices.length;
          if (v < 0 || v >= t7) throw $.ioore(v);
          t6.copy$1(vertices[v].get$position());
          t3.multiplyVector4$1(v1.get$positionScreen());
          t6 = $.sub(this._vertexCount, 2);
          if (t6 !== (t6 | 0)) throw $.iae(t6);
          t8 = t2.length;
          if (t6 < 0 || t6 >= t8) throw $.ioore(t6);
          v2 = t2[t6];
          t4.copy$1(v1.get$positionScreen());
          t5.copy$1(v2.get$positionScreen());
          if (this.clipLine$2(t4, t5) === true) {
            t6 = t4.get$w();
            if (typeof t6 !== 'number') throw $.iae(t6);
            t4.multiplyScalar$1(1 / t6);
            t7 = t5.get$w();
            if (typeof t7 !== 'number') throw $.iae(t7);
            t5.multiplyScalar$1(1 / t7);
            this._line = this.getNextLineInPool$0();
            this._line.get$v1().get$positionScreen().copy$1(t4);
            this._line.get$v2().get$positionScreen().copy$1(t5);
            t8 = $.Math_max(t4.get$z(), t5.get$z());
            this._line.set$z(t8);
            this._line.set$material(objectMaterial);
            $.add$1(this._renderData.elements, this._line);
          }
        }
        object = object;
      }
    }
  }
  ol = this._renderData.sprites.length;
  if (typeof ol !== 'number') return this.projectScene$3$bailout(11, object, camera, sort, objectMatrixWorld, t1, ol, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  for (t2 = this._vector4, o = 0; o < ol; ++o) {
    object = this._renderData.sprites[o].get$object();
    objectMatrixWorld = object.get$matrixWorld();
    if (typeof object === 'object' && object !== null && !!object.is$Particle) {
      t2.setValues$4(objectMatrixWorld.get$n14(), objectMatrixWorld.get$n24(), objectMatrixWorld.get$n34(), 1);
      t1.multiplyVector4$1(t2);
      t2.set$z($.div(t2.get$z(), t2.get$w()));
      if ($.gtB(t2.get$z(), 0) && $.ltB(t2.get$z(), 1)) {
        this._particle = this.getNextParticleInPool$0();
        t3 = $.div(t2.get$x(), t2.get$w());
        this._particle.set$x(t3);
        t3 = $.div(t2.get$y(), t2.get$w());
        this._particle.set$y(t3);
        t3 = t2.get$z();
        this._particle.set$z(t3);
        t3 = object.rotation.get$z();
        this._particle.set$rotation(t3);
        t3 = object.scale;
        t4 = $.mul(t3.get$x(), $.abs($.sub(this._particle.get$x(), $.div($.add(t2.get$x(), camera.get$projectionMatrix().get$n11()), $.add(t2.get$w(), camera.get$projectionMatrix().get$n14())))));
        this._particle.get$scale().set$x(t4);
        t4 = $.mul(t3.get$y(), $.abs($.sub(this._particle.get$y(), $.div($.add(t2.get$y(), camera.get$projectionMatrix().get$n22()), $.add(t2.get$w(), camera.get$projectionMatrix().get$n24())))));
        this._particle.get$scale().set$y(t4);
        t4 = object.material;
        this._particle.set$material(t4);
        $.add$1(this._renderData.elements, this._particle);
      }
    }
  }
  sort === true && $.sort(this._renderData.elements, this.get$painterSort());
  return this._renderData;
 },
 projectScene$3$bailout: function(state, env0, env1, env2, env3, env4, env5, env6, env7, env8, env9, env10, env11, env12, env13, env14, env15, env16, env17, env18, env19, env20, env21, env22, env23, env24, env25, env26, env27, env28, env29, env30, env31, env32, env33, env34, env35, env36, env37, env38, env39, env40) {
  switch (state) {
    case 1:
      var scene = env0;
      var camera = env1;
      var sort = env2;
      near = env3;
      break;
    case 2:
      scene = env0;
      camera = env1;
      sort = env2;
      near = env3;
      far = env4;
      break;
    case 3:
      camera = env0;
      sort = env1;
      near = env2;
      far = env3;
      t1 = env4;
      ol = env5;
      break;
    case 4:
      camera = env0;
      sort = env1;
      face = env2;
      near = env3;
      far = env4;
      ul = env5;
      t1 = env6;
      n = env7;
      nl = env8;
      v1 = env9;
      normal = env10;
      v2 = env11;
      o = env12;
      t2 = env13;
      objectMatrixWorld = env14;
      objectMaterial = env15;
      geometry = env16;
      geometryMaterials = env17;
      t3 = env18;
      ol = env19;
      v4 = env20;
      t4 = env21;
      u = env22;
      t5 = env23;
      faceVertexNormals = env24;
      _face = env25;
      v3 = env26;
      c = env27;
      object = env28;
      cl = env29;
      break;
    case 5:
      camera = env0;
      sort = env1;
      face = env2;
      near = env3;
      far = env4;
      ul = env5;
      t1 = env6;
      n = env7;
      nl = env8;
      v1 = env9;
      normal = env10;
      v2 = env11;
      o = env12;
      t2 = env13;
      objectMatrixWorld = env14;
      objectMaterial = env15;
      geometry = env16;
      geometryMaterials = env17;
      vertices = env18;
      t3 = env19;
      ol = env20;
      v4 = env21;
      t4 = env22;
      u = env23;
      t5 = env24;
      faceVertexNormals = env25;
      _face = env26;
      v3 = env27;
      c = env28;
      object = env29;
      cl = env30;
      break;
    case 6:
      camera = env0;
      sort = env1;
      face = env2;
      near = env3;
      far = env4;
      ul = env5;
      t1 = env6;
      n = env7;
      nl = env8;
      v1 = env9;
      normal = env10;
      v2 = env11;
      o = env12;
      t2 = env13;
      objectMatrixWorld = env14;
      objectMaterial = env15;
      geometry = env16;
      geometryMaterials = env17;
      vertices = env18;
      faces = env19;
      t3 = env20;
      ol = env21;
      v4 = env22;
      t4 = env23;
      u = env24;
      t5 = env25;
      faceVertexNormals = env26;
      _face = env27;
      v3 = env28;
      c = env29;
      object = env30;
      cl = env31;
      break;
    case 7:
      camera = env0;
      sort = env1;
      face = env2;
      near = env3;
      far = env4;
      ul = env5;
      t1 = env6;
      n = env7;
      nl = env8;
      v1 = env9;
      normal = env10;
      v2 = env11;
      o = env12;
      t2 = env13;
      objectMatrixWorld = env14;
      objectMaterial = env15;
      geometry = env16;
      geometryMaterials = env17;
      vertices = env18;
      faces = env19;
      faceVertexUvs = env20;
      t3 = env21;
      v4 = env22;
      ol = env23;
      u = env24;
      t5 = env25;
      faceVertexNormals = env26;
      _face = env27;
      t4 = env28;
      v3 = env29;
      c = env30;
      object = env31;
      cl = env32;
      break;
    case 8:
      c = env0;
      camera = env1;
      sort = env2;
      near = env3;
      far = env4;
      t1 = env5;
      ul = env6;
      face = env7;
      n = env8;
      o = env9;
      normal = env10;
      v4 = env11;
      _face = env12;
      t2 = env13;
      v3 = env14;
      t8 = env15;
      v2 = env16;
      v1 = env17;
      objectMaterial = env18;
      objectMatrixWorld = env19;
      geometry = env20;
      geometryMaterials = env21;
      fl = env22;
      vertices = env23;
      faceVertexUvs = env24;
      t7 = env25;
      objectMatrixWorldRotation = env26;
      t3 = env27;
      vl = env28;
      cl = env29;
      faceVertexNormals = env30;
      t4 = env31;
      nl = env32;
      faces = env33;
      ol = env34;
      u = env35;
      t5 = env36;
      f = env37;
      t6 = env38;
      object = env39;
      v = env40;
      break;
    case 9:
      c = env0;
      camera = env1;
      sort = env2;
      near = env3;
      far = env4;
      t1 = env5;
      ul = env6;
      face = env7;
      n = env8;
      o = env9;
      normal = env10;
      v4 = env11;
      _face = env12;
      t2 = env13;
      v3 = env14;
      v2 = env15;
      uvs = env16;
      v1 = env17;
      objectMaterial = env18;
      objectMatrixWorld = env19;
      geometry = env20;
      geometryMaterials = env21;
      fl = env22;
      vertices = env23;
      faceVertexUvs = env24;
      t7 = env25;
      objectMatrixWorldRotation = env26;
      t3 = env27;
      vl = env28;
      cl = env29;
      faceVertexNormals = env30;
      t4 = env31;
      nl = env32;
      faces = env33;
      ol = env34;
      u = env35;
      t5 = env36;
      f = env37;
      t6 = env38;
      object = env39;
      v = env40;
      break;
    case 10:
      camera = env0;
      geometry = env1;
      face = env2;
      f = env3;
      ul = env4;
      n = env5;
      fl = env6;
      far = env7;
      nl = env8;
      near = env9;
      sort = env10;
      geometryMaterials = env11;
      faces = env12;
      normal = env13;
      v2 = env14;
      o = env15;
      t1 = env16;
      t2 = env17;
      objectMatrixWorld = env18;
      objectMaterial = env19;
      vertices = env20;
      t3 = env21;
      ol = env22;
      v4 = env23;
      faceVertexUvs = env24;
      t4 = env25;
      t5 = env26;
      u = env27;
      faceVertexNormals = env28;
      _face = env29;
      v3 = env30;
      c = env31;
      objectMatrixWorldRotation = env32;
      cl = env33;
      object = env34;
      break;
    case 11:
      object = env0;
      camera = env1;
      sort = env2;
      objectMatrixWorld = env3;
      t1 = env4;
      ol = env5;
      break;
  }
  switch (state) {
    case 0:
      var near = camera.get$near();
    case 1:
      state = 0;
      var far = camera.get$far();
    case 2:
      state = 0;
      this._face3Count = 0;
      this._face4Count = 0;
      this._lineCount = 0;
      this._particleCount = 0;
      var t1 = [];
      this._renderData.set$elements(t1);
      t1 = camera.get$parent();
      t1 == null && $.add$1(scene, camera);
      scene.updateMatrixWorld$0();
      camera.get$matrixWorldInverse().getInverse$1(camera.get$matrixWorld());
      t1 = this._projScreenMatrix;
      t1.multiply$2(camera.get$projectionMatrix(), camera.get$matrixWorldInverse());
      this._frustum.setFromMatrix$1(t1);
      this._renderData = this.projectGraph$2(scene, false);
      var ol = $.get$length(this._renderData.get$objects());
    case 3:
      state = 0;
      var t2 = this._vertexPool;
      var t3 = this._projScreenobjectMatrixWorld;
      var t4 = this._clippedVertex1PositionScreen;
      var t5 = this._clippedVertex2PositionScreen;
      var v4 = null;
      var vl = null;
      var faceVertexUvs = null;
      var u = null;
      var faceVertexNormals = null;
      var _face = null;
      var objectMatrixWorld = null;
      var v = null;
      var objectMaterial = null;
      var v3 = null;
      var c = null;
      var objectMatrixWorldRotation = null;
      var cl = null;
      var object = null;
      var geometry = null;
      var face = null;
      var f = null;
      var ul = null;
      var n = null;
      var fl = null;
      var vertices = null;
      var nl = null;
      var v1 = null;
      var geometryMaterials = null;
      var faces = null;
      var normal = null;
      var v2 = null;
      var o = 0;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      L0: while (true) {
        switch (state) {
          case 0:
            if (!$.ltB(o, ol)) break L0;
            object = $.index(this._renderData.get$objects(), o).get$object();
            objectMatrixWorld = object.get$matrixWorld();
            objectMaterial = object.get$material();
            this._vertexCount = 0;
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            if (state == 4 || state == 5 || state == 6 || state == 7 || state == 8 || state == 9 || (state == 0 && ((typeof object === 'object' && object !== null) && !!object.is$Mesh))) {
              switch (state) {
                case 0:
                  geometry = object.get$geometry();
                  geometryMaterials = object.get$geometry().get$materials();
                case 4:
                  state = 0;
                  vertices = geometry.get$vertices();
                case 5:
                  state = 0;
                  faces = geometry.get$faces();
                case 6:
                  state = 0;
                  faceVertexUvs = geometry.get$faceVertexUvs();
                case 7:
                  state = 0;
                  objectMatrixWorldRotation = object.matrixRotationWorld.extractRotation$1(objectMatrixWorld);
                  vl = $.get$length(vertices);
                  for (v = 0; $.ltB(v, vl); ++v) {
                    this._vertex = this.getNextVertexInPool$0();
                    this._vertex.get$positionWorld().copy$1($.index(vertices, v).get$position());
                    objectMatrixWorld.multiplyVector3$1(this._vertex.get$positionWorld());
                    this._vertex.get$positionScreen().copy$1(this._vertex.get$positionWorld());
                    t1.multiplyVector4$1(this._vertex.get$positionScreen());
                    var t6 = this._vertex.get$positionScreen();
                    t6.set$x($.div(t6.get$x(), this._vertex.get$positionScreen().get$w()));
                    t6 = this._vertex.get$positionScreen();
                    t6.set$y($.div(t6.get$y(), this._vertex.get$positionScreen().get$w()));
                    t6 = $.gtB(this._vertex.get$positionScreen().get$z(), near) && $.ltB(this._vertex.get$positionScreen().get$z(), far);
                    this._vertex.set$visible(t6);
                  }
                  fl = $.get$length(faces);
                  t6 = object.doubleSided !== true;
                  var t7 = object.flipSided;
                  f = 0;
                case 8:
                case 9:
                  L1: while (true) {
                    switch (state) {
                      case 0:
                        if (!$.ltB(f, fl)) break L1;
                      case 8:
                      case 9:
                        c$1:{
                          switch (state) {
                            case 0:
                              face = $.index(faces, f);
                              if (typeof face === 'object' && face !== null && !!face.is$Face3) {
                                var t8 = face.get$a();
                                if (t8 !== (t8 | 0)) throw $.iae(t8);
                                var t9 = t2.length;
                                if (t8 < 0 || t8 >= t9) throw $.ioore(t8);
                                v1 = t2[t8];
                                t8 = face.get$b();
                                if (t8 !== (t8 | 0)) throw $.iae(t8);
                                var t10 = t2.length;
                                if (t8 < 0 || t8 >= t10) throw $.ioore(t8);
                                v2 = t2[t8];
                                t8 = face.get$c();
                                if (t8 !== (t8 | 0)) throw $.iae(t8);
                                var t11 = t2.length;
                                if (t8 < 0 || t8 >= t11) throw $.ioore(t8);
                                v3 = t2[t8];
                                if (v1.get$visible() === true && v2.get$visible() === true && v3.get$visible() === true) {
                                  if (t6) {
                                    t8 = $.lt($.sub($.mul($.sub(v3.get$positionScreen().get$x(), v1.get$positionScreen().get$x()), $.sub(v2.get$positionScreen().get$y(), v1.get$positionScreen().get$y())), $.mul($.sub(v3.get$positionScreen().get$y(), v1.get$positionScreen().get$y()), $.sub(v2.get$positionScreen().get$x(), v1.get$positionScreen().get$x()))), 0);
                                    t9 = !(t7 === t8);
                                    t8 = t9;
                                  } else t8 = true;
                                } else t8 = false;
                                if (t8) {
                                  _face = this.getNextFace3InPool$0();
                                  _face.get$v1().copy$1(v1);
                                  _face.get$v2().copy$1(v2);
                                  _face.get$v3().copy$1(v3);
                                } else break c$1;
                              } else {
                                if (typeof face === 'object' && face !== null && !!face.is$Face4) {
                                  t8 = face.get$a();
                                  if (t8 !== (t8 | 0)) throw $.iae(t8);
                                  t9 = t2.length;
                                  if (t8 < 0 || t8 >= t9) throw $.ioore(t8);
                                  v1 = t2[t8];
                                  t8 = face.get$b();
                                  if (t8 !== (t8 | 0)) throw $.iae(t8);
                                  t10 = t2.length;
                                  if (t8 < 0 || t8 >= t10) throw $.ioore(t8);
                                  v2 = t2[t8];
                                  t8 = face.get$c();
                                  if (t8 !== (t8 | 0)) throw $.iae(t8);
                                  t11 = t2.length;
                                  if (t8 < 0 || t8 >= t11) throw $.ioore(t8);
                                  v3 = t2[t8];
                                  t8 = face.get$d();
                                  if (t8 !== (t8 | 0)) throw $.iae(t8);
                                  var t12 = t2.length;
                                  if (t8 < 0 || t8 >= t12) throw $.ioore(t8);
                                  v4 = t2[t8];
                                  var bool1 = $.ltB($.sub($.mul($.sub(v4.get$positionScreen().get$x(), v1.get$positionScreen().get$x()), $.sub(v2.get$positionScreen().get$y(), v1.get$positionScreen().get$y())), $.mul($.sub(v4.get$positionScreen().get$y(), v1.get$positionScreen().get$y()), $.sub(v2.get$positionScreen().get$x(), v1.get$positionScreen().get$x()))), 0);
                                  var bool2 = $.ltB($.sub($.mul($.sub(v2.get$positionScreen().get$x(), v3.get$positionScreen().get$x()), $.sub(v4.get$positionScreen().get$y(), v3.get$positionScreen().get$y())), $.mul($.sub(v2.get$positionScreen().get$y(), v3.get$positionScreen().get$y()), $.sub(v4.get$positionScreen().get$x(), v3.get$positionScreen().get$x()))), 0);
                                  var bool3 = bool1 || bool2;
                                  if (v1.get$visible() === true && v2.get$visible() === true && v3.get$visible() === true && v4.get$visible() === true) {
                                    t8 = object.doubleSided === true || !(t7 === bool3);
                                  } else t8 = false;
                                  if (t8) {
                                    _face = this.getNextFace4InPool$0();
                                    _face.get$v1().copy$1(v1);
                                    _face.get$v2().copy$1(v2);
                                    _face.get$v3().copy$1(v3);
                                    _face.get$v4().copy$1(v4);
                                  } else break c$1;
                                }
                              }
                              _face.get$normalWorld().copy$1(face.get$normal());
                              objectMatrixWorldRotation.multiplyVector3$1(_face.get$normalWorld());
                              _face.get$centroidWorld().copy$1(face.get$centroid());
                              objectMatrixWorld.multiplyVector3$1(_face.get$centroidWorld());
                              _face.get$centroidScreen().copy$1(_face.get$centroidWorld());
                              t1.multiplyVector3$1(_face.get$centroidScreen());
                              faceVertexNormals = face.get$vertexNormals();
                              nl = $.get$length(faceVertexNormals);
                              for (n = 0; $.ltB(n, nl); ++n) {
                                normal = $.index(_face.get$vertexNormalsWorld(), n);
                                normal.copy$1($.index(faceVertexNormals, n));
                                objectMatrixWorldRotation.multiplyVector3$1(normal);
                              }
                              cl = $.get$length(faceVertexUvs);
                              c = 0;
                            case 8:
                            case 9:
                              L2: while (true) {
                                switch (state) {
                                  case 0:
                                    if (!$.ltB(c, cl)) break L2;
                                  case 8:
                                  case 9:
                                    c$2:{
                                      switch (state) {
                                        case 0:
                                          t8 = $.index(faceVertexUvs, c);
                                        case 8:
                                          state = 0;
                                          var uvs = $.index(t8, f);
                                        case 9:
                                          state = 0;
                                          if (uvs == null) break c$2;
                                          ul = $.get$length(uvs);
                                          for (u = 0; $.ltB(u, ul); ++u) {
                                            $.add$1($.index(_face.get$uvs(), c), $.index(uvs, u));
                                          }
                                      }
                                    }
                                    ++c;
                                }
                              }
                              _face.set$material(objectMaterial);
                              t8 = face.get$materialIndex();
                              _face.set$faceMaterial(!(t8 == null) ? $.index(geometryMaterials, face.get$materialIndex()) : null);
                              _face.set$z(_face.get$centroidScreen().get$z());
                              $.add$1(this._renderData.get$elements(), _face);
                          }
                        }
                        ++f;
                    }
                  }
                  object = object;
              }
            } else {
              switch (state) {
                case 0:
                case 10:
                  if (state == 10 || (state == 0 && ((typeof object === 'object' && object !== null) && !!object.is$Line))) {
                    switch (state) {
                      case 0:
                        t3.multiply$2(t1, objectMatrixWorld);
                        vertices = object.get$geometry().get$vertices();
                      case 10:
                        state = 0;
                        v1 = this.getNextVertexInPool$0();
                        v1.get$positionScreen().copy$1($.index(vertices, 0).get$position());
                        t3.multiplyVector4$1(v1.get$positionScreen());
                        vl = $.get$length(vertices);
                        for (v = 1; $.ltB(v, vl); ++v) {
                          v1 = this.getNextVertexInPool$0();
                          v1.get$positionScreen().copy$1($.index(vertices, v).get$position());
                          t3.multiplyVector4$1(v1.get$positionScreen());
                          t6 = $.sub(this._vertexCount, 2);
                          if (t6 !== (t6 | 0)) throw $.iae(t6);
                          t7 = t2.length;
                          if (t6 < 0 || t6 >= t7) throw $.ioore(t6);
                          v2 = t2[t6];
                          t4.copy$1(v1.get$positionScreen());
                          t5.copy$1(v2.get$positionScreen());
                          if (this.clipLine$2(t4, t5) === true) {
                            t6 = t4.get$w();
                            if (typeof t6 !== 'number') throw $.iae(t6);
                            t4.multiplyScalar$1(1 / t6);
                            t7 = t5.get$w();
                            if (typeof t7 !== 'number') throw $.iae(t7);
                            t5.multiplyScalar$1(1 / t7);
                            this._line = this.getNextLineInPool$0();
                            this._line.get$v1().get$positionScreen().copy$1(t4);
                            this._line.get$v2().get$positionScreen().copy$1(t5);
                            t8 = $.Math_max(t4.get$z(), t5.get$z());
                            this._line.set$z(t8);
                            this._line.set$material(objectMaterial);
                            $.add$1(this._renderData.get$elements(), this._line);
                          }
                        }
                        object = object;
                    }
                  }
              }
            }
            ++o;
        }
      }
      ol = $.get$length(this._renderData.get$sprites());
    case 11:
      state = 0;
      for (t2 = this._vector4, o = 0; $.ltB(o, ol); ++o) {
        object = $.index(this._renderData.get$sprites(), o).get$object();
        objectMatrixWorld = object.get$matrixWorld();
        if (typeof object === 'object' && object !== null && !!object.is$Particle) {
          t2.setValues$4(objectMatrixWorld.get$n14(), objectMatrixWorld.get$n24(), objectMatrixWorld.get$n34(), 1);
          t1.multiplyVector4$1(t2);
          t2.set$z($.div(t2.get$z(), t2.get$w()));
          if ($.gtB(t2.get$z(), 0) && $.ltB(t2.get$z(), 1)) {
            this._particle = this.getNextParticleInPool$0();
            t3 = $.div(t2.get$x(), t2.get$w());
            this._particle.set$x(t3);
            t3 = $.div(t2.get$y(), t2.get$w());
            this._particle.set$y(t3);
            t3 = t2.get$z();
            this._particle.set$z(t3);
            t3 = object.rotation.get$z();
            this._particle.set$rotation(t3);
            t3 = object.scale;
            t4 = $.mul(t3.get$x(), $.abs($.sub(this._particle.get$x(), $.div($.add(t2.get$x(), camera.get$projectionMatrix().get$n11()), $.add(t2.get$w(), camera.get$projectionMatrix().get$n14())))));
            this._particle.get$scale().set$x(t4);
            t4 = $.mul(t3.get$y(), $.abs($.sub(this._particle.get$y(), $.div($.add(t2.get$y(), camera.get$projectionMatrix().get$n22()), $.add(t2.get$w(), camera.get$projectionMatrix().get$n24())))));
            this._particle.get$scale().set$y(t4);
            t4 = object.material;
            this._particle.set$material(t4);
            $.add$1(this._renderData.get$elements(), this._particle);
          }
        }
      }
      sort === true && $.sort(this._renderData.get$elements(), this.get$painterSort());
      return this._renderData;
  }
 },
 projectObject$1: function(object) {
  var t1 = object.get$visible();
  if (t1 === false) return;
  if (typeof object === 'object' && object !== null && !!object.is$Mesh || typeof object === 'object' && object !== null && !!object.is$Line) {
    t1 = object.get$frustumCulled();
    t1 = t1 === false || this._frustum.contains$1(object) === true;
  } else t1 = false;
  if (t1) {
    t1 = this._projScreenMatrix;
    var t2 = this._vector3;
    t1.multiplyVector3$1(t2.copy$1(object.get$position()));
    this._object = this.getNextObjectInPool$0();
    this._object.set$object(object);
    t2 = t2.get$z();
    this._object.set$z(t2);
    $.add$1(this._renderData.objects, this._object);
  } else {
    if (typeof object === 'object' && object !== null && !!object.is$Sprite || typeof object === 'object' && object !== null && !!object.is$Particle) {
      t1 = this._projScreenMatrix;
      t2 = this._vector3;
      t1.multiplyVector3$1(t2.copy$1(object.get$position()));
      this._object = this.getNextObjectInPool$0();
      this._object.set$object(object);
      t2 = t2.get$z();
      this._object.set$z(t2);
      $.add$1(this._renderData.sprites, this._object);
    } else {
      typeof object === 'object' && object !== null && !!object.is$Light && $.add$1(this._renderData.lights, object);
    }
  }
  var cl = $.get$length(object.get$children());
  if (typeof cl !== 'number') return this.projectObject$1$bailout(1, object, cl, 0, 0);
  for (var c = 0; c < cl; ++c) {
    t1 = object.get$children();
    if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.projectObject$1$bailout(2, object, c, t1, cl);
    t1 = t1.length;
    if (c < 0 || c >= t1) throw $.ioore(c);
    t2 = object.get$children();
    if (typeof t2 !== 'string' && (typeof t2 !== 'object' || t2 === null || (t2.constructor !== Array && !t2.is$JavaScriptIndexingBehavior()))) return this.projectObject$1$bailout(3, object, c, cl, t2);
    var t3 = t2.length;
    if (c < 0 || c >= t3) throw $.ioore(c);
    this.projectObject$1(t2[c]);
  }
 },
 projectObject$1$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var object = env0;
      cl = env1;
      break;
    case 2:
      object = env0;
      c = env1;
      t1 = env2;
      cl = env3;
      break;
    case 3:
      object = env0;
      c = env1;
      cl = env2;
      t1 = env3;
      break;
  }
  switch (state) {
    case 0:
      var t1 = object.get$visible();
      if (t1 === false) return;
      if (typeof object === 'object' && object !== null && !!object.is$Mesh || typeof object === 'object' && object !== null && !!object.is$Line) {
        t1 = object.get$frustumCulled();
        t1 = t1 === false || $.contains$1(this._frustum, object) === true;
      } else t1 = false;
      if (t1) {
        t1 = this._projScreenMatrix;
        var t2 = this._vector3;
        t1.multiplyVector3$1(t2.copy$1(object.get$position()));
        this._object = this.getNextObjectInPool$0();
        this._object.set$object(object);
        t2 = t2.get$z();
        this._object.set$z(t2);
        $.add$1(this._renderData.get$objects(), this._object);
      } else {
        if (typeof object === 'object' && object !== null && !!object.is$Sprite || typeof object === 'object' && object !== null && !!object.is$Particle) {
          t1 = this._projScreenMatrix;
          t2 = this._vector3;
          t1.multiplyVector3$1(t2.copy$1(object.get$position()));
          this._object = this.getNextObjectInPool$0();
          this._object.set$object(object);
          t2 = t2.get$z();
          this._object.set$z(t2);
          $.add$1(this._renderData.get$sprites(), this._object);
        } else {
          typeof object === 'object' && object !== null && !!object.is$Light && $.add$1(this._renderData.get$lights(), object);
        }
      }
      var cl = $.get$length(object.get$children());
    case 1:
      state = 0;
      var c = 0;
    case 2:
    case 3:
      L0: while (true) {
        switch (state) {
          case 0:
            if (!$.ltB(c, cl)) break L0;
            t1 = object.get$children();
          case 2:
            state = 0;
            $.index(t1, c);
            t1 = object.get$children();
          case 3:
            state = 0;
            this.projectObject$1($.index(t1, c));
            ++c;
        }
      }
  }
 },
 projectGraph$2: function(root, sort) {
  this._objectCount = 0;
  var t1 = [];
  this._renderData.set$objects(t1);
  t1 = [];
  this._renderData.set$sprites(t1);
  t1 = [];
  this._renderData.set$lights(t1);
  this.projectObject$1(root);
  sort === true && $.sort(this._renderData.get$objects(), this.get$painterSort());
  return this._renderData;
 },
 Projector$0: function() {
  this._objectPool = [];
  this._vertexPool = [];
  this._face3Pool = [];
  this._face4Pool = [];
  this._linePool = [];
  this._particlePool = [];
  this._renderData = $.ProjectorRenderData$();
  this._vector3 = $.Vector3$(0, 0, 0);
  this._vector4 = $.Vector4$(0, 0, 0, 1);
  this._projScreenMatrix = $.Matrix4$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  this._projScreenobjectMatrixWorld = $.Matrix4$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  this._frustum = $.Frustum$();
  this._clippedVertex1PositionScreen = $.Vector4$(0, 0, 0, 1);
  this._clippedVertex2PositionScreen = $.Vector4$(0, 0, 0, 1);
 }
};

$$.ProjectorRenderData = {"":
 ["elements=", "lights=", "sprites=", "objects="],
 super: "Object",
 ProjectorRenderData$0: function() {
  this.objects = [];
  this.sprites = [];
  this.lights = [];
  this.elements = [];
 }
};

$$.Vector2 = {"":
 ["_y", "_x"],
 super: "Object",
 distanceToSquared$1: function(v) {
  var dx = $.sub(this._x, v.get$x());
  var dy = $.sub(this._y, v.get$y());
  return $.add($.mul(dx, dx), $.mul(dy, dy));
 },
 distanceTo$1: function(v) {
  return $.Math_sqrt(this.distanceToSquared$1(v));
 },
 normalize$0: function() {
  return this.divideScalar$1(this.length$0());
 },
 length$0: function() {
  return $.Math_sqrt(this.lengthSq$0());
 },
 get$length: function() { return new $.BoundClosure(this, 'length$0'); },
 lengthSq$0: function() {
  var t1 = this._x;
  t1 = $.mul(t1, t1);
  var t2 = this._y;
  return $.add(t1, $.mul(t2, t2));
 },
 dot$1: function(v) {
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.dot$1$bailout(1, v, t1, 0);
  var t2 = v.get$x();
  if (typeof t2 !== 'number') return this.dot$1$bailout(2, v, t2, t1);
  t2 *= t1;
  t1 = this._y;
  if (typeof t1 !== 'number') return this.dot$1$bailout(3, t1, v, t2);
  var t3 = v.get$y();
  if (typeof t3 !== 'number') return this.dot$1$bailout(4, t1, t3, t2);
  return t2 + t1 * t3;
 },
 dot$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var v = env0;
      t1 = env1;
      break;
    case 2:
      v = env0;
      t2 = env1;
      t1 = env2;
      break;
    case 3:
      t1 = env0;
      v = env1;
      t2 = env2;
      break;
    case 4:
      t1 = env0;
      t3 = env1;
      t2 = env2;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._x;
    case 1:
      state = 0;
      var t2 = v.get$x();
    case 2:
      state = 0;
      t2 = $.mul(t1, t2);
      t1 = this._y;
    case 3:
      state = 0;
      var t3 = v.get$y();
    case 4:
      state = 0;
      return $.add(t2, $.mul(t1, t3));
  }
 },
 divideScalar$1: function(s) {
  if (typeof s !== 'number') return this.divideScalar$1$bailout(1, s, 0);
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.divideScalar$1$bailout(2, s, t1);
  this._x = t1 / s;
  var t2 = this._y;
  if (typeof t2 !== 'number') return this.divideScalar$1$bailout(3, s, t2);
  this._y = t2 / s;
  return this;
 },
 divideScalar$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      var s = env0;
      break;
    case 2:
      s = env0;
      t1 = env1;
      break;
    case 3:
      s = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 2:
    case 3:
      if (state == 2 || state == 3 || (state == 0 && !(s == null))) {
        switch (state) {
          case 0:
            var t1 = this._x;
          case 2:
            state = 0;
            this._x = $.div(t1, s);
            var t2 = this._y;
          case 3:
            state = 0;
            this._y = $.div(t2, s);
        }
      } else {
        this.setValues$2(0, 0);
      }
      return this;
  }
 },
 multiplyScalar$1: function(s) {
  if (typeof s !== 'number') return this.multiplyScalar$1$bailout(1, s, 0);
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.multiplyScalar$1$bailout(2, s, t1);
  this._x = t1 * s;
  var t2 = this._y;
  if (typeof t2 !== 'number') return this.multiplyScalar$1$bailout(3, s, t2);
  this._y = t2 * s;
  return this;
 },
 multiplyScalar$1$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      var s = env0;
      break;
    case 2:
      s = env0;
      t1 = env1;
      break;
    case 3:
      s = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      var t1 = this._x;
    case 2:
      state = 0;
      this._x = $.mul(t1, s);
      var t2 = this._y;
    case 3:
      state = 0;
      this._y = $.mul(t2, s);
      return this;
  }
 },
 sub$2: function(v1, v2) {
  var t1 = v1.get$x();
  if (typeof t1 !== 'number') return this.sub$2$bailout(1, v1, v2, t1, 0);
  var t2 = v2.get$x();
  if (typeof t2 !== 'number') return this.sub$2$bailout(2, v1, v2, t1, t2);
  this._x = t1 - t2;
  var t3 = v1.get$y();
  if (typeof t3 !== 'number') return this.sub$2$bailout(3, t3, v2, 0, 0);
  var t4 = v2.get$y();
  if (typeof t4 !== 'number') return this.sub$2$bailout(4, t3, t4, 0, 0);
  this._y = t3 - t4;
  return this;
 },
 sub$2$bailout: function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var v1 = env0;
      var v2 = env1;
      t1 = env2;
      break;
    case 2:
      v1 = env0;
      v2 = env1;
      t1 = env2;
      t2 = env3;
      break;
    case 3:
      t3 = env0;
      v2 = env1;
      break;
    case 4:
      t3 = env0;
      t4 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = v1.get$x();
    case 1:
      state = 0;
      var t2 = v2.get$x();
    case 2:
      state = 0;
      this._x = $.sub(t1, t2);
      var t3 = v1.get$y();
    case 3:
      state = 0;
      var t4 = v2.get$y();
    case 4:
      state = 0;
      this._y = $.sub(t3, t4);
      return this;
  }
 },
 addSelf$1: function(v) {
  var t1 = this._x;
  if (typeof t1 !== 'number') return this.addSelf$1$bailout(1, v, t1, 0);
  var t2 = v.get$x();
  if (typeof t2 !== 'number') return this.addSelf$1$bailout(2, v, t2, t1);
  this._x = t1 + t2;
  var t3 = this._y;
  if (typeof t3 !== 'number') return this.addSelf$1$bailout(3, v, t3, 0);
  var t4 = v.get$y();
  if (typeof t4 !== 'number') return this.addSelf$1$bailout(4, t3, t4, 0);
  this._y = t3 + t4;
  return this;
 },
 addSelf$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var v = env0;
      t1 = env1;
      break;
    case 2:
      v = env0;
      t2 = env1;
      t1 = env2;
      break;
    case 3:
      v = env0;
      t3 = env1;
      break;
    case 4:
      t3 = env0;
      t4 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._x;
    case 1:
      state = 0;
      var t2 = v.get$x();
    case 2:
      state = 0;
      this._x = $.add(t1, t2);
      var t3 = this._y;
    case 3:
      state = 0;
      var t4 = v.get$y();
    case 4:
      state = 0;
      this._y = $.add(t3, t4);
      return this;
  }
 },
 copy$1: function(v) {
  this._x = v.get$x();
  this._y = v.get$y();
  return this;
 },
 setValues$2: function(x, y) {
  this._x = x;
  this._y = y;
  return this;
 },
 set$y: function(value) {
  this._y = value;
 },
 get$y: function() {
  return this._y;
 },
 set$x: function(value) {
  this._x = value;
 },
 get$x: function() {
  return this._x;
 },
 Vector2$2: function(x, y) {
  this._x = !(x == null) ? x : 0;
  this._y = !(y == null) ? y : 0;
 }
};

$$.UV = {"":
 ["_v", "_u"],
 super: "Object",
 copy$1: function(uv) {
  this._u = uv.get$u();
  this._v = uv.get$v();
  return this;
 },
 get$v: function() {
  return this._v;
 },
 get$u: function() {
  return this._u;
 },
 UV$2: function(u, v) {
  this._u = !(u == null) ? u : 0;
  this._v = !(v == null) ? v : 0;
 }
};

$$.Rectangle = {"":
 ["_isEmpty", "_height", "_width", "_bottom", "_right", "_top", "_left"],
 super: "Object",
 isEmpty$0: function() {
  return this._isEmpty;
 },
 empty$0: function() {
  this._isEmpty = true;
  this._left = 0;
  this._top = 0;
  this._right = 0;
  this._bottom = 0;
  this.resize$0();
 },
 intersects$1: function(r) {
  var t1 = this._right;
  if (typeof t1 !== 'number') return this.intersects$1$bailout(1, r, t1, 0);
  var t2 = r.getLeft$0();
  if (typeof t2 !== 'number') return this.intersects$1$bailout(2, r, t2, t1);
  if (t1 < t2) return false;
  t1 = this._left;
  if (typeof t1 !== 'number') return this.intersects$1$bailout(3, r, t1, 0);
  t2 = r.getRight$0();
  if (typeof t2 !== 'number') return this.intersects$1$bailout(4, r, t1, t2);
  if (t1 > t2) return false;
  t1 = this._bottom;
  if (typeof t1 !== 'number') return this.intersects$1$bailout(5, r, t1, 0);
  t2 = r.getTop$0();
  if (typeof t2 !== 'number') return this.intersects$1$bailout(6, r, t1, t2);
  if (t1 < t2) return false;
  t1 = this._top;
  if (typeof t1 !== 'number') return this.intersects$1$bailout(7, r, t1, 0);
  t2 = r.getBottom$0();
  if (typeof t2 !== 'number') return this.intersects$1$bailout(8, t2, t1, 0);
  if (t1 > t2) return false;
  return true;
 },
 intersects$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var r = env0;
      t1 = env1;
      break;
    case 2:
      r = env0;
      t2 = env1;
      t1 = env2;
      break;
    case 3:
      r = env0;
      t1 = env1;
      break;
    case 4:
      r = env0;
      t1 = env1;
      t2 = env2;
      break;
    case 5:
      r = env0;
      t1 = env1;
      break;
    case 6:
      r = env0;
      t1 = env1;
      t2 = env2;
      break;
    case 7:
      r = env0;
      t1 = env1;
      break;
    case 8:
      t2 = env0;
      t1 = env1;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._right;
    case 1:
      state = 0;
      var t2 = r.getLeft$0();
    case 2:
      state = 0;
      if ($.ltB(t1, t2)) return false;
      t1 = this._left;
    case 3:
      state = 0;
      t2 = r.getRight$0();
    case 4:
      state = 0;
      if ($.gtB(t1, t2)) return false;
      t1 = this._bottom;
    case 5:
      state = 0;
      t2 = r.getTop$0();
    case 6:
      state = 0;
      if ($.ltB(t1, t2)) return false;
      t1 = this._top;
    case 7:
      state = 0;
      t2 = r.getBottom$0();
    case 8:
      state = 0;
      if ($.gtB(t1, t2)) return false;
      return true;
  }
 },
 minSelf$1: function(r) {
  this._left = $.gtB(this._left, r.getLeft$0()) ? this._left : r.getLeft$0();
  this._top = $.gtB(this._top, r.getTop$0()) ? this._top : r.getTop$0();
  this._right = $.ltB(this._right, r.getRight$0()) ? this._right : r.getRight$0();
  this._bottom = $.ltB(this._bottom, r.getBottom$0()) ? this._bottom : r.getBottom$0();
  this.resize$0();
 },
 inflate$1: function(v) {
  this._left = $.sub(this._left, v);
  this._top = $.sub(this._top, v);
  this._right = $.add(this._right, v);
  this._bottom = $.add(this._bottom, v);
  this.resize$0();
 },
 addRectangle$1: function(r) {
  if (this._isEmpty === true) {
    this._isEmpty = false;
    this._left = r.getLeft$0();
    this._top = r.getTop$0();
    this._right = r.getRight$0();
    this._bottom = r.getBottom$0();
    this.resize$0();
  } else {
    var t1 = this._left;
    if (typeof t1 !== 'number') return this.addRectangle$1$bailout(1, r, t1, 0);
    var t2 = r.getLeft$0();
    if (typeof t2 !== 'number') return this.addRectangle$1$bailout(2, r, t2, t1);
    this._left = t1 < t2 ? this._left : r.getLeft$0();
    t1 = this._top;
    if (typeof t1 !== 'number') return this.addRectangle$1$bailout(3, r, t1, 0);
    t2 = r.getTop$0();
    if (typeof t2 !== 'number') return this.addRectangle$1$bailout(4, r, t1, t2);
    this._top = t1 < t2 ? this._top : r.getTop$0();
    t1 = this._right;
    if (typeof t1 !== 'number') return this.addRectangle$1$bailout(5, r, t1, 0);
    t2 = r.getRight$0();
    if (typeof t2 !== 'number') return this.addRectangle$1$bailout(6, r, t1, t2);
    this._right = t1 > t2 ? this._right : r.getRight$0();
    t1 = this._bottom;
    if (typeof t1 !== 'number') return this.addRectangle$1$bailout(7, r, t1, 0);
    t2 = r.getBottom$0();
    if (typeof t2 !== 'number') return this.addRectangle$1$bailout(8, r, t2, t1);
    this._bottom = t1 > t2 ? this._bottom : r.getBottom$0();
    this.resize$0();
  }
 },
 addRectangle$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var r = env0;
      t1 = env1;
      break;
    case 2:
      r = env0;
      t2 = env1;
      t1 = env2;
      break;
    case 3:
      r = env0;
      t1 = env1;
      break;
    case 4:
      r = env0;
      t1 = env1;
      t2 = env2;
      break;
    case 5:
      r = env0;
      t1 = env1;
      break;
    case 6:
      r = env0;
      t1 = env1;
      t2 = env2;
      break;
    case 7:
      r = env0;
      t1 = env1;
      break;
    case 8:
      r = env0;
      t2 = env1;
      t1 = env2;
      break;
  }
  switch (state) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      if ((state == 0 && this._isEmpty === true)) {
        this._isEmpty = false;
        this._left = r.getLeft$0();
        this._top = r.getTop$0();
        this._right = r.getRight$0();
        this._bottom = r.getBottom$0();
        this.resize$0();
      } else {
        switch (state) {
          case 0:
            var t1 = this._left;
          case 1:
            state = 0;
            var t2 = r.getLeft$0();
          case 2:
            state = 0;
            this._left = $.ltB(t1, t2) ? this._left : r.getLeft$0();
            t1 = this._top;
          case 3:
            state = 0;
            t2 = r.getTop$0();
          case 4:
            state = 0;
            this._top = $.ltB(t1, t2) ? this._top : r.getTop$0();
            t1 = this._right;
          case 5:
            state = 0;
            t2 = r.getRight$0();
          case 6:
            state = 0;
            this._right = $.gtB(t1, t2) ? this._right : r.getRight$0();
            t1 = this._bottom;
          case 7:
            state = 0;
            t2 = r.getBottom$0();
          case 8:
            state = 0;
            this._bottom = $.gtB(t1, t2) ? this._bottom : r.getBottom$0();
            this.resize$0();
        }
      }
  }
 },
 add3Points$6: function(x1, y1, x2, y2, x3, y3) {
  if (typeof x1 !== 'number') return this.add3Points$6$bailout(1, x1, y1, x2, y2, x3, y3, 0);
  if (typeof y1 !== 'number') return this.add3Points$6$bailout(1, x1, y1, x2, y2, x3, y3, 0);
  if (typeof x2 !== 'number') return this.add3Points$6$bailout(1, x1, y1, x2, y2, x3, y3, 0);
  if (typeof y2 !== 'number') return this.add3Points$6$bailout(1, x1, y1, x2, y2, x3, y3, 0);
  if (typeof x3 !== 'number') return this.add3Points$6$bailout(1, x1, y1, x2, y2, x3, y3, 0);
  if (typeof y3 !== 'number') return this.add3Points$6$bailout(1, x1, y1, x2, y2, x3, y3, 0);
  if (this._isEmpty === true) {
    this._isEmpty = false;
    if (x1 < x2) {
      if (x1 < x3) var t1 = x1;
      else t1 = x3;
    } else {
      if (x2 < x3) t1 = x2;
      else t1 = x3;
    }
    this._left = t1;
    if (y1 < y2) {
      if (y1 < y3) t1 = y1;
      else t1 = y3;
    } else {
      if (y2 < y3) t1 = y2;
      else t1 = y3;
    }
    this._top = t1;
    if (x1 > x2) {
      if (x1 > x3) t1 = x1;
      else t1 = x3;
    } else {
      if (x2 > x3) t1 = x2;
      else t1 = x3;
    }
    this._right = t1;
    if (y1 > y2) {
      if (y1 > y3) t1 = y1;
      else t1 = y3;
    } else {
      if (y2 > y3) t1 = y2;
      else t1 = y3;
    }
    this._bottom = t1;
    this.resize$0();
  } else {
    if (x1 < x2) {
      if (x1 < x3) {
        t1 = this._left;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(2, x1, y1, x2, y2, x3, y3, t1);
        if (x1 < t1) t1 = x1;
      } else {
        t1 = this._left;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(4, x1, y1, x2, y2, x3, y3, t1);
        if (x3 < t1) t1 = x3;
      }
    } else {
      if (x2 < x3) {
        t1 = this._left;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(6, x1, y1, x2, y2, x3, y3, t1);
        if (x2 < t1) t1 = x2;
      } else {
        t1 = this._left;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(8, x1, y1, x2, y2, x3, y3, t1);
        if (x3 < t1) t1 = x3;
      }
    }
    this._left = t1;
    if (y1 < y2) {
      if (y1 < y3) {
        t1 = this._top;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(10, x1, y1, x2, y2, x3, y3, t1);
        if (y1 < t1) t1 = y1;
      } else {
        t1 = this._top;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(12, x1, y1, x2, y2, x3, y3, t1);
        if (y3 < t1) t1 = y3;
      }
    } else {
      if (y2 < y3) {
        t1 = this._top;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(14, x1, y1, x2, y2, x3, y3, t1);
        if (y2 < t1) t1 = y2;
      } else {
        t1 = this._top;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(16, x1, y1, x2, y2, x3, y3, t1);
        if (y3 < t1) t1 = y3;
      }
    }
    this._top = t1;
    if (x1 > x2) {
      if (x1 > x3) {
        t1 = this._right;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(18, x1, y1, y2, t1, y3, 0, 0);
        if (x1 > t1) t1 = x1;
        else if (typeof t1 !== 'number') return this.add3Points$6$bailout(19, y1, y2, y3, t1, 0, 0, 0);
      } else {
        t1 = this._right;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(20, y1, y2, x3, y3, t1, 0, 0);
        if (x3 > t1) t1 = x3;
        else if (typeof t1 !== 'number') return this.add3Points$6$bailout(21, y1, y2, y3, t1, 0, 0, 0);
      }
    } else {
      if (x2 > x3) {
        t1 = this._right;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(22, t1, y1, x2, y2, y3, 0, 0);
        if (x2 > t1) t1 = x2;
        else if (typeof t1 !== 'number') return this.add3Points$6$bailout(23, y1, t1, y2, y3, 0, 0, 0);
      } else {
        t1 = this._right;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(24, y1, t1, y2, x3, y3, 0, 0);
        if (x3 > t1) t1 = x3;
        else if (typeof t1 !== 'number') return this.add3Points$6$bailout(25, y1, y2, t1, y3, 0, 0, 0);
      }
    }
    this._right = t1;
    if (y1 > y2) {
      if (y1 > y3) {
        t1 = this._bottom;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(26, y1, t1, 0, 0, 0, 0, 0);
        if (y1 > t1) t1 = y1;
        else if (typeof t1 !== 'number') return this.add3Points$6$bailout(27, t1, 0, 0, 0, 0, 0, 0);
      } else {
        t1 = this._bottom;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(28, y3, t1, 0, 0, 0, 0, 0);
        if (y3 > t1) t1 = y3;
        else if (typeof t1 !== 'number') return this.add3Points$6$bailout(29, t1, 0, 0, 0, 0, 0, 0);
      }
    } else {
      if (y2 > y3) {
        t1 = this._bottom;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(30, t1, y2, 0, 0, 0, 0, 0);
        if (y2 > t1) t1 = y2;
        else if (typeof t1 !== 'number') return this.add3Points$6$bailout(31, t1, 0, 0, 0, 0, 0, 0);
      } else {
        t1 = this._bottom;
        if (typeof t1 !== 'number') return this.add3Points$6$bailout(32, t1, y3, 0, 0, 0, 0, 0);
        if (y3 > t1) t1 = y3;
        else if (typeof t1 !== 'number') return this.add3Points$6$bailout(33, t1, 0, 0, 0, 0, 0, 0);
      }
    }
    this._bottom = t1;
    this.resize$0();
  }
 },
 add3Points$6$bailout: function(state, env0, env1, env2, env3, env4, env5, env6) {
  switch (state) {
    case 1:
      var x1 = env0;
      var y1 = env1;
      var x2 = env2;
      var y2 = env3;
      var x3 = env4;
      var y3 = env5;
      break;
    case 1:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      break;
    case 1:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      break;
    case 1:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      break;
    case 1:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      break;
    case 1:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      break;
    case 2:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 3:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 4:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 5:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 6:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 7:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 8:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 9:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 10:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 11:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 12:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 13:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 14:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 15:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 16:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 17:
      x1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      x3 = env4;
      y3 = env5;
      t1 = env6;
      break;
    case 18:
      x1 = env0;
      y1 = env1;
      y2 = env2;
      t1 = env3;
      y3 = env4;
      break;
    case 19:
      y1 = env0;
      y2 = env1;
      y3 = env2;
      t1 = env3;
      break;
    case 20:
      y1 = env0;
      y2 = env1;
      x3 = env2;
      y3 = env3;
      t1 = env4;
      break;
    case 21:
      y1 = env0;
      y2 = env1;
      y3 = env2;
      t1 = env3;
      break;
    case 22:
      t1 = env0;
      y1 = env1;
      x2 = env2;
      y2 = env3;
      y3 = env4;
      break;
    case 23:
      y1 = env0;
      t1 = env1;
      y2 = env2;
      y3 = env3;
      break;
    case 24:
      y1 = env0;
      t1 = env1;
      y2 = env2;
      x3 = env3;
      y3 = env4;
      break;
    case 25:
      y1 = env0;
      y2 = env1;
      t1 = env2;
      y3 = env3;
      break;
    case 26:
      y1 = env0;
      t1 = env1;
      break;
    case 27:
      t1 = env0;
      break;
    case 28:
      y3 = env0;
      t1 = env1;
      break;
    case 29:
      t1 = env0;
      break;
    case 30:
      t1 = env0;
      y2 = env1;
      break;
    case 31:
      t1 = env0;
      break;
    case 32:
      t1 = env0;
      y3 = env1;
      break;
    case 33:
      t1 = env0;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 1:
      state = 0;
    case 1:
      state = 0;
    case 1:
      state = 0;
    case 1:
      state = 0;
    case 1:
      state = 0;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
      if ((state == 0 && this._isEmpty === true)) {
        this._isEmpty = false;
        if ($.ltB(x1, x2)) {
          var t1 = $.ltB(x1, x3) ? x1 : x3;
        } else {
          t1 = $.ltB(x2, x3) ? x2 : x3;
        }
        this._left = t1;
        if ($.ltB(y1, y2)) {
          t1 = $.ltB(y1, y3) ? y1 : y3;
        } else {
          t1 = $.ltB(y2, y3) ? y2 : y3;
        }
        this._top = t1;
        if ($.gtB(x1, x2)) {
          t1 = $.gtB(x1, x3) ? x1 : x3;
        } else {
          t1 = $.gtB(x2, x3) ? x2 : x3;
        }
        this._right = t1;
        if ($.gtB(y1, y2)) {
          t1 = $.gtB(y1, y3) ? y1 : y3;
        } else {
          t1 = $.gtB(y2, y3) ? y2 : y3;
        }
        this._bottom = t1;
        this.resize$0();
      } else {
        switch (state) {
          case 0:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            if (state == 2 || state == 3 || state == 4 || state == 5 || (state == 0 && $.ltB(x1, x2))) {
              switch (state) {
                case 0:
                case 2:
                case 3:
                case 4:
                case 5:
                  if (state == 2 || state == 3 || (state == 0 && $.ltB(x1, x3))) {
                    switch (state) {
                      case 0:
                        t1 = this._left;
                      case 2:
                        state = 0;
                      case 3:
                        if ((state == 0 && $.ltB(x1, t1))) {
                          t1 = x1;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._left;
                            case 3:
                              state = 0;
                          }
                        }
                    }
                  } else {
                    switch (state) {
                      case 0:
                        t1 = this._left;
                      case 4:
                        state = 0;
                      case 5:
                        if ((state == 0 && $.ltB(x3, t1))) {
                          t1 = x3;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._left;
                            case 5:
                              state = 0;
                          }
                        }
                    }
                  }
              }
            } else {
              switch (state) {
                case 0:
                case 6:
                case 7:
                case 8:
                case 9:
                  if (state == 6 || state == 7 || (state == 0 && $.ltB(x2, x3))) {
                    switch (state) {
                      case 0:
                        t1 = this._left;
                      case 6:
                        state = 0;
                      case 7:
                        if ((state == 0 && $.ltB(x2, t1))) {
                          t1 = x2;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._left;
                            case 7:
                              state = 0;
                          }
                        }
                    }
                  } else {
                    switch (state) {
                      case 0:
                        t1 = this._left;
                      case 8:
                        state = 0;
                      case 9:
                        if ((state == 0 && $.ltB(x3, t1))) {
                          t1 = x3;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._left;
                            case 9:
                              state = 0;
                          }
                        }
                    }
                  }
              }
            }
            this._left = t1;
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
            if (state == 10 || state == 11 || state == 12 || state == 13 || (state == 0 && $.ltB(y1, y2))) {
              switch (state) {
                case 0:
                case 10:
                case 11:
                case 12:
                case 13:
                  if (state == 10 || state == 11 || (state == 0 && $.ltB(y1, y3))) {
                    switch (state) {
                      case 0:
                        t1 = this._top;
                      case 10:
                        state = 0;
                      case 11:
                        if ((state == 0 && $.ltB(y1, t1))) {
                          t1 = y1;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._top;
                            case 11:
                              state = 0;
                          }
                        }
                    }
                  } else {
                    switch (state) {
                      case 0:
                        t1 = this._top;
                      case 12:
                        state = 0;
                      case 13:
                        if ((state == 0 && $.ltB(y3, t1))) {
                          t1 = y3;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._top;
                            case 13:
                              state = 0;
                          }
                        }
                    }
                  }
              }
            } else {
              switch (state) {
                case 0:
                case 14:
                case 15:
                case 16:
                case 17:
                  if (state == 14 || state == 15 || (state == 0 && $.ltB(y2, y3))) {
                    switch (state) {
                      case 0:
                        t1 = this._top;
                      case 14:
                        state = 0;
                      case 15:
                        if ((state == 0 && $.ltB(y2, t1))) {
                          t1 = y2;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._top;
                            case 15:
                              state = 0;
                          }
                        }
                    }
                  } else {
                    switch (state) {
                      case 0:
                        t1 = this._top;
                      case 16:
                        state = 0;
                      case 17:
                        if ((state == 0 && $.ltB(y3, t1))) {
                          t1 = y3;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._top;
                            case 17:
                              state = 0;
                          }
                        }
                    }
                  }
              }
            }
            this._top = t1;
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
          case 25:
            if (state == 18 || state == 19 || state == 20 || state == 21 || (state == 0 && $.gtB(x1, x2))) {
              switch (state) {
                case 0:
                case 18:
                case 19:
                case 20:
                case 21:
                  if (state == 18 || state == 19 || (state == 0 && $.gtB(x1, x3))) {
                    switch (state) {
                      case 0:
                        t1 = this._right;
                      case 18:
                        state = 0;
                      case 19:
                        if ((state == 0 && $.gtB(x1, t1))) {
                          t1 = x1;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._right;
                            case 19:
                              state = 0;
                          }
                        }
                    }
                  } else {
                    switch (state) {
                      case 0:
                        t1 = this._right;
                      case 20:
                        state = 0;
                      case 21:
                        if ((state == 0 && $.gtB(x3, t1))) {
                          t1 = x3;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._right;
                            case 21:
                              state = 0;
                          }
                        }
                    }
                  }
              }
            } else {
              switch (state) {
                case 0:
                case 22:
                case 23:
                case 24:
                case 25:
                  if (state == 22 || state == 23 || (state == 0 && $.gtB(x2, x3))) {
                    switch (state) {
                      case 0:
                        t1 = this._right;
                      case 22:
                        state = 0;
                      case 23:
                        if ((state == 0 && $.gtB(x2, t1))) {
                          t1 = x2;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._right;
                            case 23:
                              state = 0;
                          }
                        }
                    }
                  } else {
                    switch (state) {
                      case 0:
                        t1 = this._right;
                      case 24:
                        state = 0;
                      case 25:
                        if ((state == 0 && $.gtB(x3, t1))) {
                          t1 = x3;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._right;
                            case 25:
                              state = 0;
                          }
                        }
                    }
                  }
              }
            }
            this._right = t1;
          case 26:
          case 27:
          case 28:
          case 29:
          case 30:
          case 31:
          case 32:
          case 33:
            if (state == 26 || state == 27 || state == 28 || state == 29 || (state == 0 && $.gtB(y1, y2))) {
              switch (state) {
                case 0:
                case 26:
                case 27:
                case 28:
                case 29:
                  if (state == 26 || state == 27 || (state == 0 && $.gtB(y1, y3))) {
                    switch (state) {
                      case 0:
                        t1 = this._bottom;
                      case 26:
                        state = 0;
                      case 27:
                        if ((state == 0 && $.gtB(y1, t1))) {
                          t1 = y1;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._bottom;
                            case 27:
                              state = 0;
                          }
                        }
                    }
                  } else {
                    switch (state) {
                      case 0:
                        t1 = this._bottom;
                      case 28:
                        state = 0;
                      case 29:
                        if ((state == 0 && $.gtB(y3, t1))) {
                          t1 = y3;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._bottom;
                            case 29:
                              state = 0;
                          }
                        }
                    }
                  }
              }
            } else {
              switch (state) {
                case 0:
                case 30:
                case 31:
                case 32:
                case 33:
                  if (state == 30 || state == 31 || (state == 0 && $.gtB(y2, y3))) {
                    switch (state) {
                      case 0:
                        t1 = this._bottom;
                      case 30:
                        state = 0;
                      case 31:
                        if ((state == 0 && $.gtB(y2, t1))) {
                          t1 = y2;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._bottom;
                            case 31:
                              state = 0;
                          }
                        }
                    }
                  } else {
                    switch (state) {
                      case 0:
                        t1 = this._bottom;
                      case 32:
                        state = 0;
                      case 33:
                        if ((state == 0 && $.gtB(y3, t1))) {
                          t1 = y3;
                        } else {
                          switch (state) {
                            case 0:
                              t1 = this._bottom;
                            case 33:
                              state = 0;
                          }
                        }
                    }
                  }
              }
            }
            this._bottom = t1;
            this.resize$0();
        }
      }
  }
 },
 addPoint$2: function(x, y) {
  if (typeof x !== 'number') return this.addPoint$2$bailout(1, x, y, 0);
  if (typeof y !== 'number') return this.addPoint$2$bailout(1, x, y, 0);
  if (this._isEmpty === true) {
    this._isEmpty = false;
    this._left = x;
    this._top = y;
    this._right = x;
    this._bottom = y;
    this.resize$0();
  } else {
    var t1 = this._left;
    if (typeof t1 !== 'number') return this.addPoint$2$bailout(2, x, y, t1);
    if (!(t1 < x)) t1 = x;
    this._left = t1;
    t1 = this._top;
    if (typeof t1 !== 'number') return this.addPoint$2$bailout(4, x, y, t1);
    if (!(t1 < y)) t1 = y;
    this._top = t1;
    t1 = this._right;
    if (typeof t1 !== 'number') return this.addPoint$2$bailout(6, x, y, t1);
    if (t1 > x) if (typeof t1 !== 'number') return this.addPoint$2$bailout(7, y, t1, 0);
    else t1 = x;
    this._right = t1;
    t1 = this._bottom;
    if (typeof t1 !== 'number') return this.addPoint$2$bailout(8, y, t1, 0);
    if (t1 > y) if (typeof t1 !== 'number') return this.addPoint$2$bailout(9, t1, 0, 0);
    else t1 = y;
    this._bottom = t1;
    this.resize$0();
  }
 },
 addPoint$2$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var x = env0;
      var y = env1;
      break;
    case 1:
      x = env0;
      y = env1;
      break;
    case 2:
      x = env0;
      y = env1;
      t1 = env2;
      break;
    case 3:
      x = env0;
      y = env1;
      t1 = env2;
      break;
    case 4:
      x = env0;
      y = env1;
      t1 = env2;
      break;
    case 5:
      x = env0;
      y = env1;
      t1 = env2;
      break;
    case 6:
      x = env0;
      y = env1;
      t1 = env2;
      break;
    case 7:
      y = env0;
      t1 = env1;
      break;
    case 8:
      y = env0;
      t1 = env1;
      break;
    case 9:
      t1 = env0;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 1:
      state = 0;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      if ((state == 0 && this._isEmpty === true)) {
        this._isEmpty = false;
        this._left = x;
        this._top = y;
        this._right = x;
        this._bottom = y;
        this.resize$0();
      } else {
        switch (state) {
          case 0:
            var t1 = this._left;
          case 2:
            state = 0;
          case 3:
            if (state == 3 || (state == 0 && $.ltB(t1, x))) {
              switch (state) {
                case 0:
                  t1 = this._left;
                case 3:
                  state = 0;
              }
            } else {
              t1 = x;
            }
            this._left = t1;
            t1 = this._top;
          case 4:
            state = 0;
          case 5:
            if (state == 5 || (state == 0 && $.ltB(t1, y))) {
              switch (state) {
                case 0:
                  t1 = this._top;
                case 5:
                  state = 0;
              }
            } else {
              t1 = y;
            }
            this._top = t1;
            t1 = this._right;
          case 6:
            state = 0;
          case 7:
            if (state == 7 || (state == 0 && $.gtB(t1, x))) {
              switch (state) {
                case 0:
                  t1 = this._right;
                case 7:
                  state = 0;
              }
            } else {
              t1 = x;
            }
            this._right = t1;
            t1 = this._bottom;
          case 8:
            state = 0;
          case 9:
            if (state == 9 || (state == 0 && $.gtB(t1, y))) {
              switch (state) {
                case 0:
                  t1 = this._bottom;
                case 9:
                  state = 0;
              }
            } else {
              t1 = y;
            }
            this._bottom = t1;
            this.resize$0();
        }
      }
  }
 },
 setValues$4: function(left, top$, right, bottom) {
  this._isEmpty = false;
  this._left = left;
  this._top = top$;
  this._right = right;
  this._bottom = bottom;
  this.resize$0();
 },
 getBottom$0: function() {
  return this._bottom;
 },
 getRight$0: function() {
  return this._right;
 },
 getTop$0: function() {
  return this._top;
 },
 getLeft$0: function() {
  return this._left;
 },
 getHeight$0: function() {
  return this._height;
 },
 getWidth$0: function() {
  return this._width;
 },
 getY$0: function() {
  return this._top;
 },
 getX$0: function() {
  return this._left;
 },
 resize$0: function() {
  this._width = $.sub(this._right, this._left);
  this._height = $.sub(this._bottom, this._top);
 }
};

$$.CubeGeometry = {"":
 ["segmentsDepth", "segmentsHeight", "segmentsWidth", "_sides", "_dynamic", "_hasTangents", "_boundingSphere", "_boundingBox", "__tmpVertices", "_skinIndices", "_skinWeights", "_morphColors", "_morphTargets", "_faceVertexUvs", "_faceUvs", "tan2", "tan1", "_faces", "_materials", "_colors", "_vertices", "_id"],
 super: "Geometry",
 buildPlane$8: function(u, v, udir, vdir, width, height, depth, material) {
  if (typeof u !== 'string') return this.buildPlane$8$bailout(1, u, v, udir, vdir, width, height, depth, material, 0, 0, 0, 0, 0, 0, 0, 0);
  if (typeof v !== 'string') return this.buildPlane$8$bailout(1, u, v, udir, vdir, width, height, depth, material, 0, 0, 0, 0, 0, 0, 0, 0);
  if (typeof depth !== 'number') return this.buildPlane$8$bailout(1, u, v, udir, vdir, width, height, depth, material, 0, 0, 0, 0, 0, 0, 0, 0);
  var gridX = this.segmentsWidth;
  gridX = !(gridX == null) ? gridX : 1;
  var gridY = this.segmentsHeight;
  gridY = !(gridY == null) ? gridY : 1;
  var width_half = $.div(width, 2);
  if (typeof width_half !== 'number') return this.buildPlane$8$bailout(2, u, v, udir, vdir, width, height, depth, width_half, material, gridY, gridX, 0, 0, 0, 0, 0);
  var height_half = $.div(height, 2);
  if (typeof height_half !== 'number') return this.buildPlane$8$bailout(3, u, v, udir, vdir, width, height, depth, width_half, height_half, gridY, material, gridX, 0, 0, 0, 0);
  var offset = $.get$length(this.get$vertices());
  var t1 = u === 'x';
  if (!(t1 && v === 'y')) {
    var t2 = u === 'y' && v === 'x';
  } else t2 = true;
  if (t2) var w = 'z';
  else {
    if (!(t1 && v === 'z')) {
      t2 = u === 'z' && v === 'x';
    } else t2 = true;
    if (t2) {
      gridY = this.segmentsDepth;
      gridY = !(gridY == null) ? gridY : 1;
      w = 'y';
    } else {
      if (!(u === 'z' && v === 'y')) {
        t2 = u === 'y' && v === 'z';
      } else t2 = true;
      if (t2) {
        gridX = this.segmentsDepth;
        gridX = !(gridX == null) ? gridX : 1;
        w = 'x';
      } else w = null;
    }
  }
  if (gridY !== (gridY | 0)) return this.buildPlane$8$bailout(6, w, v, udir, vdir, width, gridY, depth, width_half, height_half, material, gridX, offset, u, height, 0, 0);
  if (gridX !== (gridX | 0)) return this.buildPlane$8$bailout(5, w, v, udir, vdir, width, gridY, depth, width_half, height_half, material, gridX, offset, u, height, 0, 0);
  if (typeof w !== 'string') return this.buildPlane$8$bailout(4, w, v, udir, vdir, width, gridY, depth, width_half, height_half, material, gridX, offset, u, height, 0, 0);
  var gridX1 = gridX + 1;
  var gridY1 = gridY + 1;
  var segment_width = $.div(width, gridX);
  if (typeof segment_width !== 'number') return this.buildPlane$8$bailout(7, w, v, udir, vdir, gridX1, gridY, depth, width_half, height_half, segment_width, material, gridX, offset, u, gridY1, height);
  var segment_height = $.div(height, gridY);
  if (typeof segment_height !== 'number') return this.buildPlane$8$bailout(8, w, v, udir, vdir, gridX1, gridY, depth, width_half, height_half, segment_width, segment_height, gridX, offset, material, u, gridY1);
  var normal = $.Vector3$(0, 0, 0);
  t2 = w === 'x';
  if (t2) {
    normal.set$x(depth > 0 ? 1 : -1);
  } else {
    if (w === 'y') {
      normal.set$y(depth > 0 ? 1 : -1);
    } else {
      if (w === 'z') {
        normal.set$z(depth > 0 ? 1 : -1);
      }
    }
  }
  for (var t3 = u === 'y', t4 = u === 'z', t5 = v === 'x', t6 = v === 'y', t7 = v === 'z', t8 = w === 'y', t9 = w === 'z', iy = 0, ix = null; iy < gridY1; ++iy) {
    for (var t10 = iy * segment_height - height_half, ix = 0; ix < gridX1; ++ix) {
      var vector = $.Vector3$(0, 0, 0);
      if (t1) {
        var t11 = ix * segment_width - width_half;
        if (typeof udir !== 'number') throw $.iae(udir);
        vector.set$x(t11 * udir);
      } else {
        if (t3) {
          t11 = ix * segment_width - width_half;
          if (typeof udir !== 'number') throw $.iae(udir);
          vector.set$y(t11 * udir);
        } else {
          if (t4) {
            t11 = ix * segment_width - width_half;
            if (typeof udir !== 'number') throw $.iae(udir);
            vector.set$z(t11 * udir);
          }
        }
      }
      if (t5) {
        if (typeof vdir !== 'number') throw $.iae(vdir);
        vector.set$x(t10 * vdir);
      } else {
        if (t6) {
          if (typeof vdir !== 'number') throw $.iae(vdir);
          vector.set$y(t10 * vdir);
        } else {
          if (t7) {
            if (typeof vdir !== 'number') throw $.iae(vdir);
            vector.set$z(t10 * vdir);
          }
        }
      }
      if (t2) vector.set$x(depth);
      else {
        if (t8) vector.set$y(depth);
        else {
          t9 && vector.set$z(depth);
        }
      }
      $.add$1(this.get$vertices(), $.Vertex$(vector));
    }
  }
  for (iy = 0; iy < gridY; ++iy) {
    for (t1 = iy + 1, t2 = gridX1 * iy, t3 = gridX1 * t1, t4 = iy / gridY, t1 /= gridY, ix = 0; ix < gridX; ++ix) {
      var a = ix + t2;
      var b = ix + t3;
      t5 = ix + 1;
      var c = t5 + t3;
      var d = t5 + t2;
      if (typeof offset !== 'number') throw $.iae(offset);
      var face = $.Face4$(a + offset, b + offset, c + offset, d + offset, null, null, null);
      face.get$normal().copy$1(normal);
      $.addAll(face.get$vertexNormals(), [normal.clone$0(), normal.clone$0(), normal.clone$0(), normal.clone$0()]);
      face.set$materialIndex(material);
      $.add$1(this.get$faces(), face);
      var faceVertexUV = $.index(this.get$faceVertexUvs(), 0);
      var newUVs = $.ListFactory_List(null);
      t6 = ix / gridX;
      t7 = $.UV$(t6, t4);
      t6 = $.UV$(t6, t1);
      t5 /= gridX;
      $.addAll(newUVs, [t7, t6, $.UV$(t5, t1), $.UV$(t5, t4)]);
      $.add$1(faceVertexUV, newUVs);
    }
  }
 },
 buildPlane$8$bailout: function(state, env0, env1, env2, env3, env4, env5, env6, env7, env8, env9, env10, env11, env12, env13, env14, env15) {
  switch (state) {
    case 1:
      var u = env0;
      var v = env1;
      var udir = env2;
      var vdir = env3;
      var width = env4;
      var height = env5;
      var depth = env6;
      var material = env7;
      break;
    case 1:
      u = env0;
      v = env1;
      udir = env2;
      vdir = env3;
      width = env4;
      height = env5;
      depth = env6;
      material = env7;
      break;
    case 1:
      u = env0;
      v = env1;
      udir = env2;
      vdir = env3;
      width = env4;
      height = env5;
      depth = env6;
      material = env7;
      break;
    case 2:
      u = env0;
      v = env1;
      udir = env2;
      vdir = env3;
      width = env4;
      height = env5;
      depth = env6;
      width_half = env7;
      material = env8;
      gridY = env9;
      gridX = env10;
      break;
    case 3:
      u = env0;
      v = env1;
      udir = env2;
      vdir = env3;
      width = env4;
      height = env5;
      depth = env6;
      width_half = env7;
      height_half = env8;
      gridY = env9;
      material = env10;
      gridX = env11;
      break;
    case 6:
      w = env0;
      v = env1;
      udir = env2;
      vdir = env3;
      width = env4;
      gridY = env5;
      depth = env6;
      width_half = env7;
      height_half = env8;
      material = env9;
      gridX = env10;
      offset = env11;
      u = env12;
      height = env13;
      break;
    case 5:
      w = env0;
      v = env1;
      udir = env2;
      vdir = env3;
      width = env4;
      gridY = env5;
      depth = env6;
      width_half = env7;
      height_half = env8;
      material = env9;
      gridX = env10;
      offset = env11;
      u = env12;
      height = env13;
      break;
    case 4:
      w = env0;
      v = env1;
      udir = env2;
      vdir = env3;
      width = env4;
      gridY = env5;
      depth = env6;
      width_half = env7;
      height_half = env8;
      material = env9;
      gridX = env10;
      offset = env11;
      u = env12;
      height = env13;
      break;
    case 7:
      w = env0;
      v = env1;
      udir = env2;
      vdir = env3;
      gridX1 = env4;
      gridY = env5;
      depth = env6;
      width_half = env7;
      height_half = env8;
      segment_width = env9;
      material = env10;
      gridX = env11;
      offset = env12;
      u = env13;
      gridY1 = env14;
      height = env15;
      break;
    case 8:
      w = env0;
      v = env1;
      udir = env2;
      vdir = env3;
      gridX1 = env4;
      gridY = env5;
      depth = env6;
      width_half = env7;
      height_half = env8;
      segment_width = env9;
      segment_height = env10;
      gridX = env11;
      offset = env12;
      material = env13;
      u = env14;
      gridY1 = env15;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 1:
      state = 0;
    case 1:
      state = 0;
      var gridX = this.segmentsWidth;
      gridX = !(gridX == null) ? gridX : 1;
      var gridY = this.segmentsHeight;
      gridY = !(gridY == null) ? gridY : 1;
      var width_half = $.div(width, 2);
    case 2:
      state = 0;
      var height_half = $.div(height, 2);
    case 3:
      state = 0;
      var offset = $.get$length(this.get$vertices());
      var t1 = u === 'x';
      if (!(t1 && v === 'y')) {
        var t2 = u === 'y' && v === 'x';
      } else t2 = true;
      if (t2) var w = 'z';
      else {
        if (!(t1 && v === 'z')) {
          t1 = u === 'z' && v === 'x';
        } else t1 = true;
        if (t1) {
          gridY = this.segmentsDepth;
          gridY = !(gridY == null) ? gridY : 1;
          w = 'y';
        } else {
          if (!(u === 'z' && v === 'y')) {
            t1 = u === 'y' && v === 'z';
          } else t1 = true;
          if (t1) {
            gridX = this.segmentsDepth;
            gridX = !(gridX == null) ? gridX : 1;
            w = 'x';
          } else w = null;
        }
      }
    case 6:
      state = 0;
    case 5:
      state = 0;
    case 4:
      state = 0;
      var gridX1 = $.add(gridX, 1);
      var gridY1 = $.add(gridY, 1);
      var segment_width = $.div(width, gridX);
    case 7:
      state = 0;
      var segment_height = $.div(height, gridY);
    case 8:
      state = 0;
      var normal = $.Vector3$(0, 0, 0);
      if ($.eqB(w, 'x')) {
        normal.set$x($.gtB(depth, 0) ? 1 : -1);
      } else {
        if ($.eqB(w, 'y')) {
          normal.set$y($.gtB(depth, 0) ? 1 : -1);
        } else {
          if ($.eqB(w, 'z')) {
            normal.set$z($.gtB(depth, 0) ? 1 : -1);
          }
        }
      }
      for (var iy = 0, ix = null; $.ltB(iy, gridY1); ++iy) {
        for (ix = 0; $.ltB(ix, gridX1); ++ix) {
          var vector = $.Vector3$(0, 0, 0);
          if ($.eqB(u, 'x')) {
            if (typeof segment_width !== 'number') throw $.iae(segment_width);
            t1 = ix * segment_width;
            if (typeof width_half !== 'number') throw $.iae(width_half);
            t1 -= width_half;
            if (typeof udir !== 'number') throw $.iae(udir);
            vector.set$x(t1 * udir);
          } else {
            if ($.eqB(u, 'y')) {
              if (typeof segment_width !== 'number') throw $.iae(segment_width);
              t1 = ix * segment_width;
              if (typeof width_half !== 'number') throw $.iae(width_half);
              t1 -= width_half;
              if (typeof udir !== 'number') throw $.iae(udir);
              vector.set$y(t1 * udir);
            } else {
              if ($.eqB(u, 'z')) {
                if (typeof segment_width !== 'number') throw $.iae(segment_width);
                t1 = ix * segment_width;
                if (typeof width_half !== 'number') throw $.iae(width_half);
                t1 -= width_half;
                if (typeof udir !== 'number') throw $.iae(udir);
                vector.set$z(t1 * udir);
              }
            }
          }
          if ($.eqB(v, 'x')) {
            if (typeof segment_height !== 'number') throw $.iae(segment_height);
            t1 = iy * segment_height;
            if (typeof height_half !== 'number') throw $.iae(height_half);
            t1 -= height_half;
            if (typeof vdir !== 'number') throw $.iae(vdir);
            vector.set$x(t1 * vdir);
          } else {
            if ($.eqB(v, 'y')) {
              if (typeof segment_height !== 'number') throw $.iae(segment_height);
              t1 = iy * segment_height;
              if (typeof height_half !== 'number') throw $.iae(height_half);
              t1 -= height_half;
              if (typeof vdir !== 'number') throw $.iae(vdir);
              vector.set$y(t1 * vdir);
            } else {
              if ($.eqB(v, 'z')) {
                if (typeof segment_height !== 'number') throw $.iae(segment_height);
                t1 = iy * segment_height;
                if (typeof height_half !== 'number') throw $.iae(height_half);
                t1 -= height_half;
                if (typeof vdir !== 'number') throw $.iae(vdir);
                vector.set$z(t1 * vdir);
              }
            }
          }
          if ($.eqB(w, 'x')) vector.set$x(depth);
          else {
            if ($.eqB(w, 'y')) vector.set$y(depth);
            else {
              $.eqB(w, 'z') && vector.set$z(depth);
            }
          }
          $.add$1(this.get$vertices(), $.Vertex$(vector));
        }
      }
      for (iy = 0; $.ltB(iy, gridY); ++iy) {
        for (t1 = iy + 1, ix = 0; $.ltB(ix, gridX); ++ix) {
          t2 = $.mul(gridX1, iy);
          if (typeof t2 !== 'number') throw $.iae(t2);
          var a = ix + t2;
          t2 = $.mul(gridX1, t1);
          if (typeof t2 !== 'number') throw $.iae(t2);
          var b = ix + t2;
          t2 = ix + 1;
          var t3 = $.mul(gridX1, t1);
          if (typeof t3 !== 'number') throw $.iae(t3);
          var c = t2 + t3;
          t3 = $.mul(gridX1, iy);
          if (typeof t3 !== 'number') throw $.iae(t3);
          var d = t2 + t3;
          if (typeof offset !== 'number') throw $.iae(offset);
          var face = $.Face4$(a + offset, b + offset, c + offset, d + offset, null, null, null);
          face.get$normal().copy$1(normal);
          $.addAll(face.get$vertexNormals(), [normal.clone$0(), normal.clone$0(), normal.clone$0(), normal.clone$0()]);
          face.set$materialIndex(material);
          $.add$1(this.get$faces(), face);
          var faceVertexUV = $.index(this.get$faceVertexUvs(), 0);
          var newUVs = $.ListFactory_List(null);
          if (typeof gridX !== 'number') throw $.iae(gridX);
          t3 = ix / gridX;
          if (typeof gridY !== 'number') throw $.iae(gridY);
          var t4 = iy / gridY;
          var t5 = $.UV$(t3, t4);
          var t6 = t1 / gridY;
          t3 = $.UV$(t3, t6);
          t2 /= gridX;
          $.addAll(newUVs, [t5, t3, $.UV$(t2, t6), $.UV$(t2, t4)]);
          $.add$1(faceVertexUV, newUVs);
        }
      }
  }
 },
 CubeGeometry$8: function(width, height, depth, segmentsWidth, segmentsHeight, segmentsDepth, materials, sides) {
  if (typeof sides !== 'string' && (typeof sides !== 'object' || sides === null || (sides.constructor !== Array && !sides.is$JavaScriptIndexingBehavior()))) return this.CubeGeometry$8$bailout(1, width, height, depth, materials, sides);
  var width_half = $.div(width, 2);
  var height_half = $.div(height, 2);
  var depth_half = $.div(depth, 2);
  if (!(materials == null)) {
    if (typeof materials === 'object' && materials !== null && (materials.constructor === Array || materials.is$List())) this._materials = materials;
    else {
      this._materials = [];
      for (var t1 = this._materials, i = 0; i < 6; ++i) {
        $.add$1(t1, materials);
      }
    }
    var mpx = 0;
    var mnx = 1;
    var mny = 3;
    var mpy = 2;
    var mpz = 4;
    var mnz = 5;
  } else {
    this._materials = [];
    mpx = null;
    mnx = null;
    mny = null;
    mpy = null;
    mpz = null;
    mnz = null;
  }
  this._sides = $.CubeGeomSides$(true, true, true, true, true, true);
  for (t1 = $.iterator(sides), t2 = this._sides; t1.hasNext$0() === true; ) {
    var t3 = t1.next$0();
    var t4 = $.index($.get$dynamic(t2), t3);
    if (!(t4 == null)) {
      t4 = $.get$dynamic(t2);
      if (t3 !== (t3 | 0)) throw $.iae(t3);
      var t5 = sides.length;
      if (t3 < 0 || t3 >= t5) throw $.ioore(t3);
      $.indexSet(t4, t3, sides[t3]);
    }
  }
  t1 = this._sides;
  t1.px === true && this.buildPlane$8('z', 'y', -1, -1, depth, height, width_half, mpx);
  t1.nx === true && this.buildPlane$8('z', 'y', 1, -1, depth, height, $.neg(width_half), mnx);
  t1.py === true && this.buildPlane$8('x', 'z', 1, 1, width, depth, height_half, mpy);
  t1.ny === true && this.buildPlane$8('x', 'z', 1, -1, width, depth, $.neg(height_half), mny);
  t1.pz === true && this.buildPlane$8('x', 'y', 1, -1, width, height, depth_half, mpz);
  t1.nz === true && this.buildPlane$8('x', 'y', -1, -1, width, height, $.neg(depth_half), mnz);
  this.computeCentroids$0();
  this.mergeVertices$0();
  var t2;
 },
 CubeGeometry$8$bailout: function(state, width, height, depth, materials, sides) {
  var width_half = $.div(width, 2);
  var height_half = $.div(height, 2);
  var depth_half = $.div(depth, 2);
  if (!(materials == null)) {
    if (typeof materials === 'object' && materials !== null && (materials.constructor === Array || materials.is$List())) this._materials = materials;
    else {
      this._materials = [];
      for (var t1 = this._materials, i = 0; i < 6; ++i) {
        $.add$1(t1, materials);
      }
    }
    var mpx = 0;
    var mnx = 1;
    var mny = 3;
    var mpy = 2;
    var mpz = 4;
    var mnz = 5;
  } else {
    this._materials = [];
    mpx = null;
    mnx = null;
    mny = null;
    mpy = null;
    mpz = null;
    mnz = null;
  }
  this._sides = $.CubeGeomSides$(true, true, true, true, true, true);
  if (!(sides == null)) {
    for (t1 = $.iterator(sides), t2 = this._sides; t1.hasNext$0() === true; ) {
      var t3 = t1.next$0();
      var t4 = $.index($.get$dynamic(t2), t3);
      if (!(t4 == null)) $.indexSet($.get$dynamic(t2), t3, $.index(sides, t3));
    }
  }
  t1 = this._sides;
  t1.get$px() === true && this.buildPlane$8('z', 'y', -1, -1, depth, height, width_half, mpx);
  t1.get$nx() === true && this.buildPlane$8('z', 'y', 1, -1, depth, height, $.neg(width_half), mnx);
  t1.get$py() === true && this.buildPlane$8('x', 'z', 1, 1, width, depth, height_half, mpy);
  t1.get$ny() === true && this.buildPlane$8('x', 'z', 1, -1, width, depth, $.neg(height_half), mny);
  t1.get$pz() === true && this.buildPlane$8('x', 'y', 1, -1, width, height, depth_half, mpz);
  t1.get$nz() === true && this.buildPlane$8('x', 'y', -1, -1, width, height, $.neg(depth_half), mnz);
  this.computeCentroids$0();
  this.mergeVertices$0();
  var t2;
 }
};

$$.CubeGeomSides = {"":
 ["nz?", "pz?", "ny?", "py?", "nx?", "px?"],
 super: "Object"
};

$$.Material = {"":
 ["_id?"],
 super: "Object",
 get$blending: function() {
  return this._blending;
 },
 get$overdraw: function() {
  return this._overdraw;
 },
 get$opacity: function() {
  return this._opacity;
 },
 Material$1: function(parameters) {
  var _parameters = !(parameters == null) ? parameters : $.makeLiteralMap([]);
  this._name = '';
  var t1 = $.Three_MaterialCount;
  $.Three_MaterialCount = $.add(t1, 1);
  this._id = t1;
  t1 = $.index(_parameters, 'opacity');
  this._opacity = !(t1 == null) ? $.index(_parameters, 'opacity') : 1;
  t1 = $.index(_parameters, 'transparent');
  this._transparent = !(t1 == null) && $.index(_parameters, 'transparent');
  t1 = $.index(_parameters, 'blending');
  this._blending = !(t1 == null) ? $.index(_parameters, 'blending') : 0;
  t1 = $.index(_parameters, 'depthTest');
  this._depthTest = t1 == null || $.index(_parameters, 'depthTest');
  t1 = $.index(_parameters, 'depthWrite');
  this._depthWrite = t1 == null || $.index(_parameters, 'depthWrite');
  t1 = $.index(_parameters, 'polygonOffset');
  this._polygonOffset = !(t1 == null) && $.index(_parameters, 'polygonOffset');
  t1 = $.index(_parameters, 'polygonOffsetFactor');
  this._polygonOffsetFactor = !(t1 == null) ? $.index(_parameters, 'polygonOffsetFactor') : 0;
  t1 = $.index(_parameters, 'polygonOffsetUnits');
  this._polygonOffsetUnits = !(t1 == null) ? $.index(_parameters, 'polygonOffsetUnits') : 0;
  t1 = $.index(_parameters, 'alphaTest');
  this._alphaTest = !(t1 == null) ? $.index(_parameters, 'alphaTest') : 0;
  t1 = $.index(_parameters, 'overdraw');
  this._overdraw = !(t1 == null) && $.index(_parameters, 'overdraw');
 }
};

$$.MeshBasicMaterial = {"":
 ["_morphTargets", "_skinning", "_vertexColors", "_wireframeLinejoin", "_wireframeLinecap", "_wireframeLinewidth", "_wireframe", "_shading", "_fog", "_refractionRatio", "_reflectivity", "_combine", "_envMap", "_lightMap", "_lib0_map", "_color", "_overdraw", "_polygonOffset", "_depthWrite", "_depthTest", "_transparent", "_polygonOffsetUnits", "_polygonOffsetFactor", "_alphaTest", "_blending", "_opacity", "_id", "_name"],
 super: "Material",
 get$wireframeLinejoin: function() {
  return this._wireframeLinejoin;
 },
 get$wireframeLinecap: function() {
  return this._wireframeLinecap;
 },
 get$wireframeLinewidth: function() {
  return this._wireframeLinewidth;
 },
 get$wireframe: function() {
  return this._wireframe;
 },
 get$color: function() {
  return this._color;
 },
 get$envMap: function() {
  return this._envMap;
 },
 get$map: function() {
  return this._lib0_map;
 },
 MeshBasicMaterial$1: function(parameters) {
  parameters = !(parameters == null) ? parameters : $.makeLiteralMap([]);
  var t1 = $.index(parameters, 'color');
  this._color = !(t1 == null) ? $.Color$($.index(parameters, 'color')) : $.Color$(16777215);
  t1 = $.index(parameters, 'map');
  this._lib0_map = !(t1 == null) ? $.index(parameters, 'map') : null;
  t1 = $.index(parameters, 'lightMap');
  this._lightMap = !(t1 == null) ? $.index(parameters, 'lightMap') : null;
  t1 = $.index(parameters, 'envMap');
  this._envMap = !(t1 == null) ? $.index(parameters, 'envMap') : null;
  t1 = $.index(parameters, 'combine');
  this._combine = !(t1 == null) ? $.index(parameters, 'combine') : 0;
  t1 = $.index(parameters, 'reflectivity');
  this._reflectivity = !(t1 == null) ? $.index(parameters, 'reflectivity') : 1;
  t1 = $.index(parameters, 'refractionRatio');
  this._refractionRatio = !(t1 == null) ? $.index(parameters, 'refractionRatio') : 0.98;
  t1 = $.index(parameters, 'fog');
  this._fog = t1 == null || $.index(parameters, 'fog');
  t1 = $.index(parameters, 'shading');
  this._shading = !(t1 == null) ? $.index(parameters, 'shading') : 2;
  t1 = $.index(parameters, 'wireframe');
  this._wireframe = !(t1 == null) && $.index(parameters, 'wireframe');
  t1 = $.index(parameters, 'wireframeLinewidth');
  this._wireframeLinewidth = !(t1 == null) ? $.index(parameters, 'wireframeLinewidth') : 1;
  t1 = $.index(parameters, 'wireframeLinecap');
  this._wireframeLinecap = !(t1 == null) ? $.index(parameters, 'wireframeLinecap') : 'round';
  t1 = $.index(parameters, 'wireframeLinejoin');
  this._wireframeLinejoin = !(t1 == null) ? $.index(parameters, 'wireframeLinejoin') : 'round';
  t1 = $.index(parameters, 'vertexColors');
  this._vertexColors = !(t1 == null) && $.index(parameters, 'vertexColors');
  t1 = $.index(parameters, 'skinning');
  this._skinning = !(t1 == null) && $.index(parameters, 'skinning');
  t1 = $.index(parameters, 'morphTargets');
  this._morphTargets = !(t1 == null) && $.index(parameters, 'morphTargets');
 },
 is$MeshBasicMaterial: true,
 is$ITextureMapMaterial: true
};

$$.MeshFaceMaterial = {"":
 ["_overdraw", "_polygonOffset", "_depthWrite", "_depthTest", "_transparent", "_polygonOffsetUnits", "_polygonOffsetFactor", "_alphaTest", "_blending", "_opacity", "_id", "_name"],
 super: "Material",
 is$MeshFaceMaterial: true
};

$$.Mesh = {"":
 ["_morphTargetDictionary", "_morphTargetInfluences", "_morphTargetForcedOrder", "_morphTargetBase", "_boundRadius", "_material", "_geometry", "_vector", "frustumCulled", "receiveShadow", "castShadow", "visible", "boundRadiusScale", "boundRadius", "useQuaternion", "quaternion", "matrixWorldNeedsUpdate", "matrixAutoUpdate", "matrixRotationWorld", "matrixWorld", "matrix", "renderDepth", "rotationAutoUpdate", "flipSided", "doubleSided", "dynamic", "eulerOrder", "scale", "rotation", "position", "up", "children", "parent", "id", "_name"],
 super: "Object3D",
 get$material: function() {
  return this._material;
 },
 get$geometry: function() {
  return this._geometry;
 },
 Mesh$2: function(geometry, material) {
  this._geometry = geometry;
  this._material = material;
  typeof material === 'object' && material !== null && (material.constructor === Array || material.is$List());
  var t1 = this._geometry;
  if (!(t1 == null)) {
    var t2 = t1.get$boundingSphere();
    t2 == null && t1.computeBoundingSphere$0();
    this._boundRadius = $.index(geometry.get$boundingSphere(), 'radius');
    if (!$.eqB($.get$length(t1.get$morphTargets()), 0)) {
      this._morphTargetBase = -1;
      this._morphTargetForcedOrder = [];
      this._morphTargetInfluences = [];
      this._morphTargetDictionary = $.makeLiteralMap([]);
      for (t2 = this._morphTargetInfluences, t3 = this._morphTargetDictionary, m = 0; $.ltB(m, $.get$length(t1.get$morphTargets())); ++m) {
        $.add$1(t2, 0);
        $.indexSet(t3, $.index(t1.get$morphTargets(), m).get$name(), m);
      }
    }
  }
  var t3, m;
 },
 is$Mesh: true
};

$$.RenderableObject = {"":
 ["z=", "object="],
 super: "Object"
};

$$.RenderableVertex = {"":
 ["visible=", "positionScreen?", "positionWorld?"],
 super: "Object",
 copy$1: function(vertex) {
  this.positionWorld.copy$1(vertex.get$positionWorld());
  this.positionScreen.copy$1(vertex.get$positionScreen());
 },
 RenderableVertex$0: function() {
  this.positionWorld = $.Vector3$(0, 0, 0);
  this.positionScreen = $.Vector4$(0, 0, 0, 1);
 }
};

$$.RenderableFace3 = {"":
 ["_z", "_faceMaterial", "_material", "_uvs", "_vertexNormalsWorld", "_normalWorld", "_centroidScreen", "_centroidWorld", "_v3", "_v2", "_v1"],
 super: "Object",
 get$z: function() {
  return this._z;
 },
 get$faceMaterial: function() {
  return this._faceMaterial;
 },
 get$material: function() {
  return this._material;
 },
 get$uvs: function() {
  return this._uvs;
 },
 get$vertexNormalsWorld: function() {
  return this._vertexNormalsWorld;
 },
 get$centroidScreen: function() {
  return this._centroidScreen;
 },
 get$centroidWorld: function() {
  return this._centroidWorld;
 },
 get$normalWorld: function() {
  return this._normalWorld;
 },
 get$v3: function() {
  return this._v3;
 },
 get$v2: function() {
  return this._v2;
 },
 get$v1: function() {
  return this._v1;
 },
 RenderableFace3$0: function() {
  this._v1 = $.RenderableVertex$();
  this._v2 = $.RenderableVertex$();
  this._v3 = $.RenderableVertex$();
  this._centroidWorld = $.Vector3$(0, 0, 0);
  this._centroidScreen = $.Vector3$(0, 0, 0);
  this._normalWorld = $.Vector3$(0, 0, 0);
  this._vertexNormalsWorld = [$.Vector3$(0, 0, 0), $.Vector3$(0, 0, 0), $.Vector3$(0, 0, 0)];
  this._material = null;
  this._faceMaterial = null;
  this._uvs = [[]];
  this._z = null;
 },
 is$RenderableFace3: true
};

$$.RenderableFace4 = {"":
 ["_z", "_faceMaterial", "_material", "_uvs", "_vertexNormalsWorld", "_normalWorld", "_centroidScreen", "_centroidWorld", "_v4", "_v3", "_v2", "_v1"],
 super: "Object",
 set$z: function(value) {
  this._z = value;
 },
 get$z: function() {
  return this._z;
 },
 set$faceMaterial: function(value) {
  this._faceMaterial = value;
 },
 get$faceMaterial: function() {
  return this._faceMaterial;
 },
 set$material: function(value) {
  this._material = value;
 },
 get$material: function() {
  return this._material;
 },
 get$uvs: function() {
  return this._uvs;
 },
 get$vertexNormalsWorld: function() {
  return this._vertexNormalsWorld;
 },
 get$centroidScreen: function() {
  return this._centroidScreen;
 },
 get$centroidWorld: function() {
  return this._centroidWorld;
 },
 get$normalWorld: function() {
  return this._normalWorld;
 },
 get$v4: function() {
  return this._v4;
 },
 get$v3: function() {
  return this._v3;
 },
 get$v2: function() {
  return this._v2;
 },
 get$v1: function() {
  return this._v1;
 },
 RenderableFace4$0: function() {
  this._v1 = $.RenderableVertex$();
  this._v2 = $.RenderableVertex$();
  this._v3 = $.RenderableVertex$();
  this._v4 = $.RenderableVertex$();
  this._centroidWorld = $.Vector3$(0, 0, 0);
  this._centroidScreen = $.Vector3$(0, 0, 0);
  this._normalWorld = $.Vector3$(0, 0, 0);
  this._vertexNormalsWorld = [$.Vector3$(0, 0, 0), $.Vector3$(0, 0, 0), $.Vector3$(0, 0, 0), $.Vector3$(0, 0, 0)];
  this._material = null;
  this._faceMaterial = null;
  this._uvs = [];
  $.add$1(this._uvs, $.ListFactory_List(null));
  this._z = null;
 },
 is$RenderableFace4: true
};

$$.RenderableLine = {"":
 ["material=", "v2?", "v1?", "z="],
 super: "Object",
 RenderableLine$0: function() {
  this.v1 = $.RenderableVertex$();
  this.v2 = $.RenderableVertex$();
 },
 is$RenderableLine: true
};

$$.RenderableParticle = {"":
 ["material=", "scale?", "rotation=", "z=", "y=", "x="],
 super: "Object",
 scale$1: function(arg0) { return this.scale.$call$1(arg0); },
 scale$2: function(arg0, arg1) { return this.scale.$call$2(arg0, arg1); },
 RenderableParticle$0: function() {
  this.scale = $.Vector2$(0, 0);
 },
 is$RenderableParticle: true
};

$$.CanvasRenderer = {"":
 ["debug", "_gradientMapContext", "_gradientMap", "_pixelMapContext", "_pixelMap", "_gradientMapQuality", "_pixelMapData", "_pixelMapImage", "_vector3", "_pi2", "_pointLights", "_directionalLights", "_ambientLight", "_enableLighting", "_uv3y", "_uv3x", "_uv2y", "_uv2x", "_uv1y", "_uv1x", "_uvs", "_image", "_far", "_near", "_imagedatas", "_patterns", "_color4", "_color3", "_color2", "_color1", "_color", "_v6y", "_v6x", "_v5y", "_v5x", "_v4y", "_v4x", "_v3y", "_v3x", "_v2y", "_v2x", "_v1y", "_v1x", "_v6", "_v5", "_projector", "_lights", "_lib0_elements", "_renderData", "_info", "_bboxRect", "_clearRect", "_clipRect", "_contextLineWidth", "_contextLineJoin", "_contextLineCap", "_contextFillStyle", "_contextStrokeStyle", "_contextGlobalCompositeOperation", "_contextGlobalAlpha", "_context", "_canvas", "_camera", "_clearOpacity", "_clearColor", "_canvasHeightHalf", "_canvasWidthHalf", "_canvasHeight", "_canvasWidth", "_sortElements", "_sortObjects", "_autoClear", "domElement?"],
 super: "Object",
 setFillStyle$1: function(style) {
  var t1 = this._contextFillStyle;
  if (!(t1 == null ? style == null : t1 === style)) {
    this._contextFillStyle = style;
    t1 = this._contextFillStyle;
    this._context.set$fillStyle(t1);
  }
 },
 setStrokeStyle$1: function(style) {
  var t1 = this._contextStrokeStyle;
  if (!(t1 == null ? style == null : t1 === style)) {
    this._contextStrokeStyle = style;
    this._context.set$strokeStyle(style);
  }
 },
 setLineJoin$1: function(value) {
  var t1 = this._contextLineJoin;
  if (!(t1 == null ? value == null : t1 === value)) {
    this._contextLineJoin = value;
    this._context.set$lineJoin(value);
  }
 },
 setLineCap$1: function(value) {
  var t1 = this._contextLineCap;
  if (!(t1 == null ? value == null : t1 === value)) {
    this._contextLineCap = value;
    this._context.set$lineCap(value);
  }
 },
 setLineWidth$1: function(value) {
  var t1 = this._contextLineWidth;
  if (!(t1 == null ? value == null : t1 === value)) {
    this._contextLineWidth = value;
    this._context.set$lineWidth(value);
  }
 },
 setBlending$1: function(value) {
  if (!$.eqB(this._contextGlobalCompositeOperation, value)) {
    switch (value) {
      case 0:
        this._context.set$globalCompositeOperation('source-over');
        break;
      case 1:
        this._context.set$globalCompositeOperation('lighter');
        break;
      case 2:
        this._context.set$globalCompositeOperation('darker');
        break;
    }
    this._contextGlobalCompositeOperation = value;
  }
 },
 setOpacity$1: function(value) {
  var t1 = this._contextGlobalAlpha;
  if (!(t1 === value)) {
    this._contextGlobalAlpha = value;
    this._context.set$globalAlpha(value);
  }
 },
 expand$2: function(v1, v2) {
  var t1 = v2.get$x();
  if (typeof t1 !== 'number') return this.expand$2$bailout(1, v1, v2, t1, 0, 0);
  var t2 = v1.get$x();
  if (typeof t2 !== 'number') return this.expand$2$bailout(2, v1, v2, t1, t2, 0);
  var x = t1 - t2;
  t2 = v2.get$y();
  if (typeof t2 !== 'number') return this.expand$2$bailout(3, v1, v2, t2, x, 0);
  t1 = v1.get$y();
  if (typeof t1 !== 'number') return this.expand$2$bailout(4, v1, v2, t1, t2, x);
  var y = t2 - t1;
  var det = x * x + y * y;
  if (det === 0) return;
  t1 = $.Math_sqrt(det);
  if (typeof t1 !== 'number') throw $.iae(t1);
  var idet = 1 / t1;
  x *= idet;
  y *= idet;
  t1 = v2.get$x();
  if (typeof t1 !== 'number') return this.expand$2$bailout(5, v1, x, v2, y, t1);
  v2.set$x(t1 + x);
  t2 = v2.get$y();
  if (typeof t2 !== 'number') return this.expand$2$bailout(6, v1, x, v2, y, t2);
  v2.set$y(t2 + y);
  var t3 = v1.get$x();
  if (typeof t3 !== 'number') return this.expand$2$bailout(7, v1, x, y, t3, 0);
  v1.set$x(t3 - x);
  var t4 = v1.get$y();
  if (typeof t4 !== 'number') return this.expand$2$bailout(8, v1, t4, y, 0, 0);
  v1.set$y(t4 - y);
 },
 expand$2$bailout: function(state, env0, env1, env2, env3, env4) {
  switch (state) {
    case 1:
      var v1 = env0;
      var v2 = env1;
      t1 = env2;
      break;
    case 2:
      v1 = env0;
      v2 = env1;
      t1 = env2;
      t2 = env3;
      break;
    case 3:
      v1 = env0;
      v2 = env1;
      t2 = env2;
      x = env3;
      break;
    case 4:
      v1 = env0;
      v2 = env1;
      t1 = env2;
      t2 = env3;
      x = env4;
      break;
    case 5:
      v1 = env0;
      x = env1;
      v2 = env2;
      y = env3;
      t1 = env4;
      break;
    case 6:
      v1 = env0;
      x = env1;
      v2 = env2;
      y = env3;
      t2 = env4;
      break;
    case 7:
      v1 = env0;
      x = env1;
      y = env2;
      t3 = env3;
      break;
    case 8:
      v1 = env0;
      t4 = env1;
      y = env2;
      break;
  }
  switch (state) {
    case 0:
      var t1 = v2.get$x();
    case 1:
      state = 0;
      var t2 = v1.get$x();
    case 2:
      state = 0;
      var x = $.sub(t1, t2);
      t2 = v2.get$y();
    case 3:
      state = 0;
      t1 = v1.get$y();
    case 4:
      state = 0;
      var y = $.sub(t2, t1);
      var det = $.add($.mul(x, x), $.mul(y, y));
      if ($.eqB(det, 0)) return;
      t1 = $.Math_sqrt(det);
      if (typeof t1 !== 'number') throw $.iae(t1);
      var idet = 1 / t1;
      x = $.mul(x, idet);
      y = $.mul(y, idet);
      t1 = v2.get$x();
    case 5:
      state = 0;
      v2.set$x($.add(t1, x));
      t2 = v2.get$y();
    case 6:
      state = 0;
      v2.set$y($.add(t2, y));
      var t3 = v1.get$x();
    case 7:
      state = 0;
      v1.set$x($.sub(t3, x));
      var t4 = v1.get$y();
    case 8:
      state = 0;
      v1.set$y($.sub(t4, y));
  }
 },
 normalToComponent$1: function(normal) {
  var component = $.mul($.add(normal, 1), 0.5);
  if ($.ltB(component, 0)) var t1 = 0;
  else {
    t1 = $.gtB(component, 1) ? 1 : component;
  }
  return t1;
 },
 smoothstep$3: function(value, min, max) {
  var x = $.div($.sub(value, min), $.sub(max, min));
  var t1 = $.mul(x, x);
  if (typeof x !== 'number') throw $.iae(x);
  return $.mul(t1, 3 - 2 * x);
 },
 getGradientTexture$4: function(color1, color2, color3, color4) {
  var c1r = $.not($.not($.mul(color1.get$r(), 255)));
  var c1g = $.not($.not($.mul(color1.get$g(), 255)));
  var c1b = $.not($.not($.mul(color1.get$b(), 255)));
  var c2r = $.not($.not($.mul(color2.get$r(), 255)));
  var c2g = $.not($.not($.mul(color2.get$g(), 255)));
  var c2b = $.not($.not($.mul(color2.get$b(), 255)));
  var c3r = $.not($.not($.mul(color3.get$r(), 255)));
  var c3g = $.not($.not($.mul(color3.get$g(), 255)));
  var c3b = $.not($.not($.mul(color3.get$b(), 255)));
  var c4r = $.not($.not($.mul(color4.get$r(), 255)));
  var c4g = $.not($.not($.mul(color4.get$g(), 255)));
  var c4b = $.not($.not($.mul(color4.get$b(), 255)));
  var t1 = this._pixelMapData;
  if ($.ltB(c1r, 0)) var t2 = 0;
  else {
    t2 = $.gtB(c1r, 255) ? 255 : c1r;
  }
  $.indexSet(t1, 0, t2);
  if ($.ltB(c1g, 0)) t2 = 0;
  else {
    t2 = $.gtB(c1g, 255) ? 255 : c1g;
  }
  $.indexSet(t1, 1, t2);
  if ($.ltB(c1b, 0)) t2 = 0;
  else {
    t2 = $.gtB(c1b, 255) ? 255 : c1b;
  }
  $.indexSet(t1, 2, t2);
  if ($.ltB(c2r, 0)) t2 = 0;
  else {
    t2 = $.gtB(c2r, 255) ? 255 : c2r;
  }
  $.indexSet(t1, 4, t2);
  if ($.ltB(c2g, 0)) t2 = 0;
  else {
    t2 = $.gtB(c2g, 255) ? 255 : c2g;
  }
  $.indexSet(t1, 5, t2);
  if ($.ltB(c2b, 0)) t2 = 0;
  else {
    t2 = $.gtB(c2b, 255) ? 255 : c2b;
  }
  $.indexSet(t1, 6, t2);
  if ($.ltB(c3r, 0)) t2 = 0;
  else {
    t2 = $.gtB(c3r, 255) ? 255 : c3r;
  }
  $.indexSet(t1, 8, t2);
  if ($.ltB(c3g, 0)) t2 = 0;
  else {
    t2 = $.gtB(c3g, 255) ? 255 : c3g;
  }
  $.indexSet(t1, 9, t2);
  if ($.ltB(c3b, 0)) t2 = 0;
  else {
    t2 = $.gtB(c3b, 255) ? 255 : c3b;
  }
  $.indexSet(t1, 10, t2);
  if ($.ltB(c4r, 0)) t2 = 0;
  else {
    t2 = $.gtB(c4r, 255) ? 255 : c4r;
  }
  $.indexSet(t1, 12, t2);
  if ($.ltB(c4g, 0)) t2 = 0;
  else {
    t2 = $.gtB(c4g, 255) ? 255 : c4g;
  }
  $.indexSet(t1, 13, t2);
  if ($.ltB(c4b, 0)) t2 = 0;
  else {
    t2 = $.gtB(c4b, 255) ? 255 : c4b;
  }
  $.indexSet(t1, 14, t2);
  this._pixelMapContext.putImageData$3(this._pixelMapImage, 0, 0);
  this._gradientMapContext.drawImage$3(this._pixelMap, 0, 0);
  return this._gradientMap;
 },
 clipImage$13: function(x0, y0, x1, y1, x2, y2, u0, v0, u1, v1, u2, v2, image) {
  var width = $.sub(image.get$width(), 1);
  var height = $.sub(image.get$height(), 1);
  u0 = $.mul(u0, width);
  v0 = $.mul(v0, height);
  u1 = $.mul(u1, width);
  v1 = $.mul(v1, height);
  u2 = $.mul(u2, width);
  v2 = $.mul(v2, height);
  x1 = $.sub(x1, x0);
  y1 = $.sub(y1, y0);
  x2 = $.sub(x2, x0);
  y2 = $.sub(y2, y0);
  u1 = $.sub(u1, u0);
  v1 = $.sub(v1, v0);
  u2 = $.sub(u2, u0);
  v2 = $.sub(v2, v0);
  var det = $.sub($.mul(u1, v2), $.mul(u2, v1));
  if (typeof det !== 'number') throw $.iae(det);
  var idet = 1 / det;
  var a = $.mul($.sub($.mul(v2, x1), $.mul(v1, x2)), idet);
  var b = $.mul($.sub($.mul(v2, y1), $.mul(v1, y2)), idet);
  var c = $.mul($.sub($.mul(u1, x2), $.mul(u2, x1)), idet);
  var d = $.mul($.sub($.mul(u1, y2), $.mul(u2, y1)), idet);
  var e = $.sub($.sub(x0, $.mul(a, u0)), $.mul(c, v0));
  var f = $.sub($.sub(y0, $.mul(b, u0)), $.mul(d, v0));
  var t1 = this._context;
  t1.save$0();
  t1.transform$6(a, b, c, d, e, f);
  t1.clip$0();
  t1.drawImage$3(image, 0, 0);
  t1.restore$0();
 },
 patternPath$13: function(x0, y0, x1, y1, x2, y2, u0, v0, u1, v1, u2, v2, texture) {
  if ($.eqB(texture.get$image().get$width(), 0)) return;
  if (!$.eqB(texture.get$needsUpdate(), true)) {
    var t1 = this._patterns;
    var t2 = texture.get$id();
    if (t2 !== (t2 | 0)) throw $.iae(t2);
    var t3 = t1.length;
    if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
    t2 = t1[t2];
    t2 = t2 == null;
    t1 = t2;
  } else t1 = true;
  if (t1) {
    var repeatX = $.eqB(texture.get$wrapS(), 0);
    var repeatY = $.eqB(texture.get$wrapT(), 0);
    t1 = this._patterns;
    t2 = texture.get$id();
    t3 = this._context;
    var t4 = texture.get$image();
    if (repeatX && repeatY) var t5 = 'repeat';
    else {
      if (repeatX && !repeatY) t5 = 'repeat-x';
      else {
        t5 = !repeatX && repeatY ? 'repeat-y' : 'no-repeat';
      }
    }
    t5 = t3.createPattern$2(t4, t5);
    if (t2 !== (t2 | 0)) throw $.iae(t2);
    t4 = t1.length;
    if (t2 < 0 || t2 >= t4) throw $.ioore(t2);
    t1[t2] = t5;
    texture.set$needsUpdate(false);
  }
  t1 = this._patterns;
  t2 = texture.get$id();
  if (t2 !== (t2 | 0)) throw $.iae(t2);
  t3 = t1.length;
  if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
  this.setFillStyle$1(t1[t2]);
  var offsetX = $.div(texture.get$offset().get$x(), texture.get$repeat().get$x());
  var offsetY = $.div(texture.get$offset().get$y(), texture.get$repeat().get$y());
  var width = $.mul(texture.get$image().get$width(), texture.get$repeat().get$x());
  var height = $.mul(texture.get$image().get$height(), texture.get$repeat().get$y());
  var u00 = $.mul($.add(u0, offsetX), width);
  var v00 = $.mul($.add(v0, offsetY), height);
  var u10 = $.mul($.add(u1, offsetX), width);
  var v10 = $.mul($.add(v1, offsetY), height);
  var u20 = $.mul($.add(u2, offsetX), width);
  var v20 = $.mul($.add(v2, offsetY), height);
  x1 = $.sub(x1, x0);
  y1 = $.sub(y1, y0);
  x2 = $.sub(x2, x0);
  y2 = $.sub(y2, y0);
  u10 = $.sub(u10, u00);
  v10 = $.sub(v10, v00);
  u20 = $.sub(u20, u00);
  v20 = $.sub(v20, v00);
  var det = $.sub($.mul(u10, v20), $.mul(u20, v10));
  if ($.eqB(det, 0)) {
    t1 = this._imagedatas;
    t2 = texture.get$id();
    if (t2 !== (t2 | 0)) throw $.iae(t2);
    t3 = t1.length;
    if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
    t2 = t1[t2];
    if (t2 == null) {
      var canvas = $._ElementFactoryProvider_Element$tag('canvas');
      canvas.set$width(texture.get$image().get$width());
      canvas.set$height(texture.get$image().get$height());
      var context = canvas.getContext$1('2d');
      context.drawImage$3(texture.get$image(), 0, 0);
      t2 = texture.get$id();
      t3 = context.getImageData$4(0, 0, texture.get$image().get$width(), texture.get$image().get$height()).get$data();
      if (t2 !== (t2 | 0)) throw $.iae(t2);
      t4 = t1.length;
      if (t2 < 0 || t2 >= t4) throw $.ioore(t2);
      t1[t2] = t3;
    }
    t2 = texture.get$id();
    if (t2 !== (t2 | 0)) throw $.iae(t2);
    t3 = t1.length;
    if (t2 < 0 || t2 >= t3) throw $.ioore(t2);
    t2 = t1[t2];
    var index = $.mul($.add($.floor(u00), $.mul($.floor(v00), texture.get$image().get$width())), 4);
    t1 = this._color;
    t1.setRGB$3($.div($.index(t2, index), 255), $.div($.index(t2, $.add(index, 1)), 255), $.div($.index(t2, $.add(index, 2)), 255));
    this.fillPath$1(t1);
    return;
  }
  if (typeof det !== 'number') throw $.iae(det);
  var idet = 1 / det;
  var a = $.mul($.sub($.mul(v20, x1), $.mul(v10, x2)), idet);
  var b = $.mul($.sub($.mul(v20, y1), $.mul(v10, y2)), idet);
  var c = $.mul($.sub($.mul(u10, x2), $.mul(u20, x1)), idet);
  var d = $.mul($.sub($.mul(u10, y2), $.mul(u20, y1)), idet);
  var e = $.sub($.sub(x0, $.mul(a, u00)), $.mul(c, v00));
  var f = $.sub($.sub(y0, $.mul(b, u00)), $.mul(d, v00));
  t1 = this._context;
  t1.save$0();
  t1.transform$6(a, b, c, d, e, f);
  t1.fill$0();
  t1.restore$0();
 },
 fillPath$1: function(color) {
  this.setFillStyle$1(color.getContextStyle$0());
  this._context.fill$0();
 },
 strokePath$4: function(color, linewidth, linecap, linejoin) {
  this.setLineWidth$1(linewidth);
  this.setLineCap$1(linecap);
  this.setLineJoin$1(linejoin);
  this.setStrokeStyle$1(color.getContextStyle$0());
  this._context.stroke$0();
  this._bboxRect.inflate$1($.mul(linewidth, 2));
 },
 drawQuad$8: function(x0, y0, x1, y1, x2, y2, x3, y3) {
  var t1 = this._context;
  t1.beginPath$0();
  t1.moveTo$2(x0, y0);
  t1.lineTo$2(x1, y1);
  t1.lineTo$2(x2, y2);
  t1.lineTo$2(x3, y3);
  t1.lineTo$2(x0, y0);
  t1.closePath$0();
 },
 drawTriangle$6: function(x0, y0, x1, y1, x2, y2) {
  var t1 = this._context;
  t1.beginPath$0();
  t1.moveTo$2(x0, y0);
  t1.lineTo$2(x1, y1);
  t1.lineTo$2(x2, y2);
  t1.lineTo$2(x0, y0);
  t1.closePath$0();
 },
 renderFace4$9: function(v1, v2, v3, v4, v5, v6, element, material, scene) {
  var t1 = this._info;
  var t2 = t1.render;
  var t3 = t2.get$vertices();
  if (typeof t3 !== 'number') return this.renderFace4$9$bailout(1, v1, v2, v3, v4, v5, v6, element, material, scene, t1, t2, t3);
  t2.set$vertices(t3 + 4);
  var t4 = t2.get$faces();
  if (typeof t4 !== 'number') return this.renderFace4$9$bailout(2, v1, v2, v3, v4, v5, v6, element, material, scene, t2, t4, 0);
  t2.set$faces(t4 + 1);
  this.setOpacity$1(material.get$opacity());
  this.setBlending$1(material.get$blending());
  if (typeof material === 'object' && material !== null && !!material.is$ITextureMapMaterial) {
    this.renderFace3$9(v1, v2, v4, 0, 1, 3, element, material, scene);
    this.renderFace3$9(v5, v3, v6, 1, 2, 3, element, material, scene);
    return;
  }
  this._v1x = v1.get$positionScreen().get$x();
  this._v1y = v1.get$positionScreen().get$y();
  this._v2x = v2.get$positionScreen().get$x();
  this._v2y = v2.get$positionScreen().get$y();
  this._v3x = v3.get$positionScreen().get$x();
  this._v3y = v3.get$positionScreen().get$y();
  this._v4x = v4.get$positionScreen().get$x();
  this._v4y = v4.get$positionScreen().get$y();
  this._v5x = v5.get$positionScreen().get$x();
  this._v5y = v5.get$positionScreen().get$y();
  this._v6x = v6.get$positionScreen().get$x();
  this._v6y = v6.get$positionScreen().get$y();
  if (typeof material === 'object' && material !== null && !!material.is$MeshBasicMaterial) {
    this.drawQuad$8(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._v4x, this._v4y);
    if (material.get$wireframe() === true) this.strokePath$4(material.get$color(), material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
    else this.fillPath$1(material.get$color());
  } else {
    if (typeof material === 'object' && material !== null && !!material.is$MeshLambertMaterial) {
      if (this._enableLighting) {
        if (material.get$wireframe() !== true) {
          t1 = material.get$shading();
          if (typeof t1 !== 'number') return this.renderFace4$9$bailout(3, t1, material, element, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1 = t1 === 2;
        } else t1 = false;
        if (t1) {
          t1 = $.get$length(element.get$vertexNormalsWorld());
          if (typeof t1 !== 'number') return this.renderFace4$9$bailout(4, material, element, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1 = t1 === 4;
        } else t1 = false;
        t2 = this._ambientLight;
        t3 = t2.r;
        if (t1) {
          t1 = this._color4;
          t1.r = t3;
          t4 = this._color3;
          t4.r = t3;
          var t5 = this._color2;
          t5.r = t3;
          var t6 = this._color1;
          t6.r = t3;
          t3 = t2.g;
          t1.g = t3;
          t4.g = t3;
          t5.g = t3;
          t6.g = t3;
          t2 = t2.b;
          t1.b = t2;
          t4.b = t2;
          t5.b = t2;
          t6.b = t2;
          t2 = this._lights;
          t3 = element.get$v1().get$positionWorld();
          var t7 = element.get$vertexNormalsWorld();
          if (typeof t7 !== 'string' && (typeof t7 !== 'object' || t7 === null || (t7.constructor !== Array && !t7.is$JavaScriptIndexingBehavior()))) return this.renderFace4$9$bailout(5, t1, t4, t5, t6, t7, material, element, t2, t3, 0, 0, 0);
          var t8 = t7.length;
          if (0 >= t8) throw $.ioore(0);
          this.calculateLight$4(t2, t3, t7[0], t6);
          t3 = this._lights;
          t2 = element.get$v2().get$positionWorld();
          var t9 = element.get$vertexNormalsWorld();
          if (typeof t9 !== 'string' && (typeof t9 !== 'object' || t9 === null || (t9.constructor !== Array && !t9.is$JavaScriptIndexingBehavior()))) return this.renderFace4$9$bailout(6, t1, t4, t5, t6, material, element, t2, t9, t3, 0, 0, 0);
          var t10 = t9.length;
          if (1 >= t10) throw $.ioore(1);
          this.calculateLight$4(t3, t2, t9[1], t5);
          t2 = this._lights;
          t3 = element.get$v4().get$positionWorld();
          var t11 = element.get$vertexNormalsWorld();
          if (typeof t11 !== 'string' && (typeof t11 !== 'object' || t11 === null || (t11.constructor !== Array && !t11.is$JavaScriptIndexingBehavior()))) return this.renderFace4$9$bailout(7, t1, t4, t5, t6, t11, material, element, t2, t3, 0, 0, 0);
          var t12 = t11.length;
          if (3 >= t12) throw $.ioore(3);
          this.calculateLight$4(t2, t3, t11[3], t4);
          t3 = this._lights;
          t2 = element.get$v3().get$positionWorld();
          var t13 = element.get$vertexNormalsWorld();
          if (typeof t13 !== 'string' && (typeof t13 !== 'object' || t13 === null || (t13.constructor !== Array && !t13.is$JavaScriptIndexingBehavior()))) return this.renderFace4$9$bailout(8, t1, t4, t5, t6, t3, material, t2, t13, 0, 0, 0, 0);
          var t14 = t13.length;
          if (2 >= t14) throw $.ioore(2);
          this.calculateLight$4(t3, t2, t13[2], t1);
          t2 = material.get$color().get$r();
          if (typeof t2 !== 'number') return this.renderFace4$9$bailout(9, t1, t4, t5, t6, material, t2, 0, 0, 0, 0, 0, 0);
          t3 = t6.r;
          if (typeof t3 !== 'number') return this.renderFace4$9$bailout(10, t1, t4, t5, t6, material, t2, t3, 0, 0, 0, 0, 0);
          t6.r = $.Math_max(0, $.Math_min(t2 * t3, 1));
          var t15 = material.get$color().get$g();
          if (typeof t15 !== 'number') return this.renderFace4$9$bailout(11, t1, t4, t5, t6, material, t15, 0, 0, 0, 0, 0, 0);
          var t16 = t6.g;
          if (typeof t16 !== 'number') return this.renderFace4$9$bailout(12, t1, t4, t5, t6, material, t15, t16, 0, 0, 0, 0, 0);
          t6.g = $.Math_max(0, $.Math_min(t15 * t16, 1));
          var t17 = material.get$color().get$b();
          if (typeof t17 !== 'number') return this.renderFace4$9$bailout(13, t1, t4, t5, t6, material, t17, 0, 0, 0, 0, 0, 0);
          var t18 = t6.b;
          if (typeof t18 !== 'number') return this.renderFace4$9$bailout(14, t1, t4, t5, t6, material, t17, t18, 0, 0, 0, 0, 0);
          t6.b = $.Math_max(0, $.Math_min(t17 * t18, 1));
          var t19 = material.get$color().get$r();
          if (typeof t19 !== 'number') return this.renderFace4$9$bailout(15, t1, t4, t5, t6, t19, material, 0, 0, 0, 0, 0, 0);
          var t20 = t5.r;
          if (typeof t20 !== 'number') return this.renderFace4$9$bailout(16, t1, t4, t5, t6, t19, material, t20, 0, 0, 0, 0, 0);
          t5.r = $.Math_max(0, $.Math_min(t19 * t20, 1));
          var t21 = material.get$color().get$g();
          if (typeof t21 !== 'number') return this.renderFace4$9$bailout(17, t1, t4, t5, t6, material, t21, 0, 0, 0, 0, 0, 0);
          var t22 = t5.g;
          if (typeof t22 !== 'number') return this.renderFace4$9$bailout(18, t1, t4, t5, t6, material, t21, t22, 0, 0, 0, 0, 0);
          t5.g = $.Math_max(0, $.Math_min(t21 * t22, 1));
          var t23 = material.get$color().get$b();
          if (typeof t23 !== 'number') return this.renderFace4$9$bailout(19, t1, t4, t5, t6, material, t23, 0, 0, 0, 0, 0, 0);
          var t24 = t5.b;
          if (typeof t24 !== 'number') return this.renderFace4$9$bailout(20, t1, t4, t5, t6, material, t23, t24, 0, 0, 0, 0, 0);
          t5.b = $.Math_max(0, $.Math_min(t23 * t24, 1));
          var t25 = material.get$color().get$r();
          if (typeof t25 !== 'number') return this.renderFace4$9$bailout(21, t1, t4, t5, t6, material, t25, 0, 0, 0, 0, 0, 0);
          var t26 = t4.r;
          if (typeof t26 !== 'number') return this.renderFace4$9$bailout(22, t1, t4, t5, t6, material, t25, t26, 0, 0, 0, 0, 0);
          t4.r = $.Math_max(0, $.Math_min(t25 * t26, 1));
          var t27 = material.get$color().get$g();
          if (typeof t27 !== 'number') return this.renderFace4$9$bailout(23, t1, t4, t5, t6, t27, material, 0, 0, 0, 0, 0, 0);
          var t28 = t4.g;
          if (typeof t28 !== 'number') return this.renderFace4$9$bailout(24, t1, t4, t5, t6, t27, material, t28, 0, 0, 0, 0, 0);
          t4.g = $.Math_max(0, $.Math_min(t27 * t28, 1));
          var t29 = material.get$color().get$b();
          if (typeof t29 !== 'number') return this.renderFace4$9$bailout(25, t1, t4, t5, t6, material, t29, 0, 0, 0, 0, 0, 0);
          var t30 = t4.b;
          if (typeof t30 !== 'number') return this.renderFace4$9$bailout(26, t1, t4, t5, t6, material, t29, t30, 0, 0, 0, 0, 0);
          t4.b = $.Math_max(0, $.Math_min(t29 * t30, 1));
          var t31 = material.get$color().get$r();
          if (typeof t31 !== 'number') return this.renderFace4$9$bailout(27, t1, t4, t5, t6, material, t31, 0, 0, 0, 0, 0, 0);
          var t32 = t1.r;
          if (typeof t32 !== 'number') return this.renderFace4$9$bailout(28, t1, t4, t5, t6, material, t31, t32, 0, 0, 0, 0, 0);
          t1.r = $.Math_max(0, $.Math_min(t31 * t32, 1));
          var t33 = material.get$color().get$g();
          if (typeof t33 !== 'number') return this.renderFace4$9$bailout(29, t1, t4, t5, t6, material, t33, 0, 0, 0, 0, 0, 0);
          var t34 = t1.g;
          if (typeof t34 !== 'number') return this.renderFace4$9$bailout(30, t1, t4, t5, t6, material, t33, t34, 0, 0, 0, 0, 0);
          t1.g = $.Math_max(0, $.Math_min(t33 * t34, 1));
          var t35 = material.get$color().get$b();
          if (typeof t35 !== 'number') return this.renderFace4$9$bailout(31, t1, t4, t5, t6, t35, 0, 0, 0, 0, 0, 0, 0);
          var t36 = t1.b;
          if (typeof t36 !== 'number') return this.renderFace4$9$bailout(32, t1, t4, t5, t6, t35, t36, 0, 0, 0, 0, 0, 0);
          t1.b = $.Math_max(0, $.Math_min(t35 * t36, 1));
          this._image = this.getGradientTexture$4(t6, t5, t4, t1);
          this.drawTriangle$6(this._v1x, this._v1y, this._v2x, this._v2y, this._v4x, this._v4y);
          this.clipImage$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v4x, this._v4y, 0, 0, 1, 0, 0, 1, this._image);
          this.drawTriangle$6(this._v5x, this._v5y, this._v3x, this._v3y, this._v6x, this._v6y);
          this.clipImage$13(this._v5x, this._v5y, this._v3x, this._v3y, this._v6x, this._v6y, 1, 0, 1, 1, 0, 1, this._image);
        } else {
          t1 = this._color;
          t1.r = t3;
          t1.g = t2.g;
          t1.b = t2.b;
          this.calculateLight$4(this._lights, element.get$centroidWorld(), element.get$normalWorld(), t1);
          t3 = material.get$color().get$r();
          if (typeof t3 !== 'number') return this.renderFace4$9$bailout(33, material, t3, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t4 = t1.r;
          if (typeof t4 !== 'number') return this.renderFace4$9$bailout(34, material, t3, t1, t4, 0, 0, 0, 0, 0, 0, 0, 0);
          t1.r = $.Math_max(0, $.Math_min(t3 * t4, 1));
          t5 = material.get$color().get$g();
          if (typeof t5 !== 'number') return this.renderFace4$9$bailout(35, t5, material, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t6 = t1.g;
          if (typeof t6 !== 'number') return this.renderFace4$9$bailout(36, t5, material, t6, t1, 0, 0, 0, 0, 0, 0, 0, 0);
          t1.g = $.Math_max(0, $.Math_min(t5 * t6, 1));
          t7 = material.get$color().get$b();
          if (typeof t7 !== 'number') return this.renderFace4$9$bailout(37, material, t7, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t8 = t1.b;
          if (typeof t8 !== 'number') return this.renderFace4$9$bailout(38, material, t7, t1, t8, 0, 0, 0, 0, 0, 0, 0, 0);
          t1.b = $.Math_max(0, $.Math_min(t7 * t8, 1));
          this.drawQuad$8(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._v4x, this._v4y);
          if (material.get$wireframe() === true) this.strokePath$4(t1, material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
          else this.fillPath$1(t1);
        }
      } else {
        this.drawQuad$8(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._v4x, this._v4y);
        if (material.get$wireframe() === true) this.strokePath$4(material.get$color(), material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
        else this.fillPath$1(material.get$color());
      }
    } else {
      if (typeof material === 'object' && material !== null && !!material.is$MeshNormalMaterial) {
        t1 = this.normalToComponent$1(element.get$normalWorld().get$x());
        t2 = this._color;
        t2.r = t1;
        t2.g = this.normalToComponent$1(element.get$normalWorld().get$y());
        t2.b = this.normalToComponent$1(element.get$normalWorld().get$z());
        this.drawQuad$8(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._v4x, this._v4y);
        if (material.get$wireframe() === true) this.strokePath$4(t2, material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
        else this.fillPath$1(t2);
      } else {
        if (typeof material === 'object' && material !== null && !!material.is$MeshDepthMaterial) {
          this._near = this._camera.get$near();
          this._far = this._camera.get$far();
          t1 = this.smoothstep$3(v1.get$positionScreen().get$z(), this._near, this._far);
          if (typeof t1 !== 'number') throw $.iae(t1);
          t1 = 1 - t1;
          t2 = this._color1;
          t2.b = t1;
          t2.g = t1;
          t2.r = t1;
          t1 = this.smoothstep$3(v2.get$positionScreen().get$z(), this._near, this._far);
          if (typeof t1 !== 'number') throw $.iae(t1);
          t1 = 1 - t1;
          t3 = this._color2;
          t3.b = t1;
          t3.g = t1;
          t3.r = t1;
          t1 = this.smoothstep$3(v4.get$positionScreen().get$z(), this._near, this._far);
          if (typeof t1 !== 'number') throw $.iae(t1);
          t1 = 1 - t1;
          t4 = this._color3;
          t4.b = t1;
          t4.g = t1;
          t4.r = t1;
          t1 = this.smoothstep$3(v3.get$positionScreen().get$z(), this._near, this._far);
          if (typeof t1 !== 'number') throw $.iae(t1);
          t1 = 1 - t1;
          t5 = this._color4;
          t5.b = t1;
          t5.g = t1;
          t5.r = t1;
          this._image = this.getGradientTexture$4(t2, t3, t4, t5);
          this.drawTriangle$6(this._v1x, this._v1y, this._v2x, this._v2y, this._v4x, this._v4y);
          this.clipImage$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v4x, this._v4y, 0, 0, 1, 0, 0, 1, this._image);
          this.drawTriangle$6(this._v5x, this._v5y, this._v3x, this._v3y, this._v6x, this._v6y);
          this.clipImage$13(this._v5x, this._v5y, this._v3x, this._v3y, this._v6x, this._v6y, 1, 0, 1, 1, 0, 1, this._image);
        }
      }
    }
  }
 },
 renderFace4$9$bailout: function(state, env0, env1, env2, env3, env4, env5, env6, env7, env8, env9, env10, env11) {
  switch (state) {
    case 1:
      var v1 = env0;
      var v2 = env1;
      var v3 = env2;
      var v4 = env3;
      var v5 = env4;
      var v6 = env5;
      var element = env6;
      var material = env7;
      var scene = env8;
      t1 = env9;
      t2 = env10;
      t3 = env11;
      break;
    case 2:
      v1 = env0;
      v2 = env1;
      v3 = env2;
      v4 = env3;
      v5 = env4;
      v6 = env5;
      element = env6;
      material = env7;
      scene = env8;
      t1 = env9;
      t2 = env10;
      break;
    case 3:
      t1 = env0;
      material = env1;
      element = env2;
      break;
    case 4:
      material = env0;
      element = env1;
      t1 = env2;
      break;
    case 5:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      t7 = env4;
      material = env5;
      element = env6;
      t2 = env7;
      t1 = env8;
      break;
    case 6:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      element = env5;
      t2 = env6;
      t8 = env7;
      t1 = env8;
      break;
    case 7:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      t9 = env4;
      material = env5;
      element = env6;
      t2 = env7;
      t1 = env8;
      break;
    case 8:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      t1 = env4;
      material = env5;
      t2 = env6;
      t10 = env7;
      break;
    case 9:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t2 = env5;
      break;
    case 10:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t2 = env5;
      t1 = env6;
      break;
    case 11:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t11 = env5;
      break;
    case 12:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t11 = env5;
      t12 = env6;
      break;
    case 13:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t13 = env5;
      break;
    case 14:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t13 = env5;
      t14 = env6;
      break;
    case 15:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      t15 = env4;
      material = env5;
      break;
    case 16:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      t15 = env4;
      material = env5;
      t16 = env6;
      break;
    case 17:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t17 = env5;
      break;
    case 18:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t17 = env5;
      t18 = env6;
      break;
    case 19:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t19 = env5;
      break;
    case 20:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t19 = env5;
      t20 = env6;
      break;
    case 21:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t21 = env5;
      break;
    case 22:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t21 = env5;
      t22 = env6;
      break;
    case 23:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      t23 = env4;
      material = env5;
      break;
    case 24:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      t23 = env4;
      material = env5;
      t24 = env6;
      break;
    case 25:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t25 = env5;
      break;
    case 26:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t25 = env5;
      t26 = env6;
      break;
    case 27:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t27 = env5;
      break;
    case 28:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t27 = env5;
      t28 = env6;
      break;
    case 29:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t29 = env5;
      break;
    case 30:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      material = env4;
      t29 = env5;
      t30 = env6;
      break;
    case 31:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      t31 = env4;
      break;
    case 32:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t6 = env3;
      t31 = env4;
      t32 = env5;
      break;
    case 33:
      material = env0;
      t1 = env1;
      t3 = env2;
      break;
    case 34:
      material = env0;
      t1 = env1;
      t3 = env2;
      t4 = env3;
      break;
    case 35:
      t5 = env0;
      material = env1;
      t3 = env2;
      break;
    case 36:
      t5 = env0;
      material = env1;
      t6 = env2;
      t3 = env3;
      break;
    case 37:
      material = env0;
      t7 = env1;
      t3 = env2;
      break;
    case 38:
      material = env0;
      t7 = env1;
      t3 = env2;
      t8 = env3;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._info;
      var t2 = t1.get$render();
      var t3 = t2.get$vertices();
    case 1:
      state = 0;
      t2.set$vertices($.add(t3, 4));
      t1 = t1.get$render();
      t2 = t1.get$faces();
    case 2:
      state = 0;
      t1.set$faces($.add(t2, 1));
      this.setOpacity$1(material.get$opacity());
      this.setBlending$1(material.get$blending());
      if (typeof material === 'object' && material !== null && !!material.is$ITextureMapMaterial) {
        this.renderFace3$9(v1, v2, v4, 0, 1, 3, element, material, scene);
        this.renderFace3$9(v5, v3, v6, 1, 2, 3, element, material, scene);
        return;
      }
      this._v1x = v1.get$positionScreen().get$x();
      this._v1y = v1.get$positionScreen().get$y();
      this._v2x = v2.get$positionScreen().get$x();
      this._v2y = v2.get$positionScreen().get$y();
      this._v3x = v3.get$positionScreen().get$x();
      this._v3y = v3.get$positionScreen().get$y();
      this._v4x = v4.get$positionScreen().get$x();
      this._v4y = v4.get$positionScreen().get$y();
      this._v5x = v5.get$positionScreen().get$x();
      this._v5y = v5.get$positionScreen().get$y();
      this._v6x = v6.get$positionScreen().get$x();
      this._v6y = v6.get$positionScreen().get$y();
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
      if ((state == 0 && ((typeof material === 'object' && material !== null) && !!material.is$MeshBasicMaterial))) {
        this.drawQuad$8(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._v4x, this._v4y);
        if (material.get$wireframe() === true) this.strokePath$4(material.get$color(), material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
        else this.fillPath$1(material.get$color());
      } else {
        switch (state) {
          case 0:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
          case 25:
          case 26:
          case 27:
          case 28:
          case 29:
          case 30:
          case 31:
          case 32:
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
            if (state == 3 || state == 4 || state == 5 || state == 6 || state == 7 || state == 8 || state == 9 || state == 10 || state == 11 || state == 12 || state == 13 || state == 14 || state == 15 || state == 16 || state == 17 || state == 18 || state == 19 || state == 20 || state == 21 || state == 22 || state == 23 || state == 24 || state == 25 || state == 26 || state == 27 || state == 28 || state == 29 || state == 30 || state == 31 || state == 32 || state == 33 || state == 34 || state == 35 || state == 36 || state == 37 || state == 38 || (state == 0 && ((typeof material === 'object' && material !== null) && !!material.is$MeshLambertMaterial))) {
              switch (state) {
                case 0:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                  if (state == 3 || state == 4 || state == 5 || state == 6 || state == 7 || state == 8 || state == 9 || state == 10 || state == 11 || state == 12 || state == 13 || state == 14 || state == 15 || state == 16 || state == 17 || state == 18 || state == 19 || state == 20 || state == 21 || state == 22 || state == 23 || state == 24 || state == 25 || state == 26 || state == 27 || state == 28 || state == 29 || state == 30 || state == 31 || state == 32 || state == 33 || state == 34 || state == 35 || state == 36 || state == 37 || state == 38 || (state == 0 && this._enableLighting === true)) {
                    switch (state) {
                      case 0:
                      case 3:
                        if (state == 3 || (state == 0 && material.get$wireframe() !== true)) {
                          switch (state) {
                            case 0:
                              t1 = material.get$shading();
                            case 3:
                              state = 0;
                              t1 = $.eqB(t1, 2);
                          }
                        } else {
                          t1 = false;
                        }
                      case 4:
                        if (state == 4 || (state == 0 && t1)) {
                          switch (state) {
                            case 0:
                              t1 = $.get$length(element.get$vertexNormalsWorld());
                            case 4:
                              state = 0;
                              t1 = $.eqB(t1, 4);
                          }
                        } else {
                          t1 = false;
                        }
                        t2 = this._ambientLight;
                      case 5:
                      case 6:
                      case 7:
                      case 8:
                      case 9:
                      case 10:
                      case 11:
                      case 12:
                      case 13:
                      case 14:
                      case 15:
                      case 16:
                      case 17:
                      case 18:
                      case 19:
                      case 20:
                      case 21:
                      case 22:
                      case 23:
                      case 24:
                      case 25:
                      case 26:
                      case 27:
                      case 28:
                      case 29:
                      case 30:
                      case 31:
                      case 32:
                      case 33:
                      case 34:
                      case 35:
                      case 36:
                      case 37:
                      case 38:
                        if (state == 5 || state == 6 || state == 7 || state == 8 || state == 9 || state == 10 || state == 11 || state == 12 || state == 13 || state == 14 || state == 15 || state == 16 || state == 17 || state == 18 || state == 19 || state == 20 || state == 21 || state == 22 || state == 23 || state == 24 || state == 25 || state == 26 || state == 27 || state == 28 || state == 29 || state == 30 || state == 31 || state == 32 || (state == 0 && t1)) {
                          switch (state) {
                            case 0:
                              t1 = t2.get$r();
                              t3 = this._color4;
                              t3.set$r(t1);
                              var t4 = this._color3;
                              t4.set$r(t1);
                              var t5 = this._color2;
                              t5.set$r(t1);
                              var t6 = this._color1;
                              t6.set$r(t1);
                              t1 = t2.get$g();
                              t3.set$g(t1);
                              t4.set$g(t1);
                              t5.set$g(t1);
                              t6.set$g(t1);
                              t2 = t2.get$b();
                              t3.set$b(t2);
                              t4.set$b(t2);
                              t5.set$b(t2);
                              t6.set$b(t2);
                              t2 = this._lights;
                              t1 = element.get$v1().get$positionWorld();
                              var t7 = element.get$vertexNormalsWorld();
                            case 5:
                              state = 0;
                              this.calculateLight$4(t2, t1, $.index(t7, 0), t6);
                              t1 = this._lights;
                              t2 = element.get$v2().get$positionWorld();
                              var t8 = element.get$vertexNormalsWorld();
                            case 6:
                              state = 0;
                              this.calculateLight$4(t1, t2, $.index(t8, 1), t5);
                              t2 = this._lights;
                              t1 = element.get$v4().get$positionWorld();
                              var t9 = element.get$vertexNormalsWorld();
                            case 7:
                              state = 0;
                              this.calculateLight$4(t2, t1, $.index(t9, 3), t4);
                              t1 = this._lights;
                              t2 = element.get$v3().get$positionWorld();
                              var t10 = element.get$vertexNormalsWorld();
                            case 8:
                              state = 0;
                              this.calculateLight$4(t1, t2, $.index(t10, 2), t3);
                              t2 = material.get$color().get$r();
                            case 9:
                              state = 0;
                              t1 = t6.get$r();
                            case 10:
                              state = 0;
                              t6.set$r($.Math_max(0, $.Math_min($.mul(t2, t1), 1)));
                              var t11 = material.get$color().get$g();
                            case 11:
                              state = 0;
                              var t12 = t6.get$g();
                            case 12:
                              state = 0;
                              t6.set$g($.Math_max(0, $.Math_min($.mul(t11, t12), 1)));
                              var t13 = material.get$color().get$b();
                            case 13:
                              state = 0;
                              var t14 = t6.get$b();
                            case 14:
                              state = 0;
                              t6.set$b($.Math_max(0, $.Math_min($.mul(t13, t14), 1)));
                              var t15 = material.get$color().get$r();
                            case 15:
                              state = 0;
                              var t16 = t5.get$r();
                            case 16:
                              state = 0;
                              t5.set$r($.Math_max(0, $.Math_min($.mul(t15, t16), 1)));
                              var t17 = material.get$color().get$g();
                            case 17:
                              state = 0;
                              var t18 = t5.get$g();
                            case 18:
                              state = 0;
                              t5.set$g($.Math_max(0, $.Math_min($.mul(t17, t18), 1)));
                              var t19 = material.get$color().get$b();
                            case 19:
                              state = 0;
                              var t20 = t5.get$b();
                            case 20:
                              state = 0;
                              t5.set$b($.Math_max(0, $.Math_min($.mul(t19, t20), 1)));
                              var t21 = material.get$color().get$r();
                            case 21:
                              state = 0;
                              var t22 = t4.get$r();
                            case 22:
                              state = 0;
                              t4.set$r($.Math_max(0, $.Math_min($.mul(t21, t22), 1)));
                              var t23 = material.get$color().get$g();
                            case 23:
                              state = 0;
                              var t24 = t4.get$g();
                            case 24:
                              state = 0;
                              t4.set$g($.Math_max(0, $.Math_min($.mul(t23, t24), 1)));
                              var t25 = material.get$color().get$b();
                            case 25:
                              state = 0;
                              var t26 = t4.get$b();
                            case 26:
                              state = 0;
                              t4.set$b($.Math_max(0, $.Math_min($.mul(t25, t26), 1)));
                              var t27 = material.get$color().get$r();
                            case 27:
                              state = 0;
                              var t28 = t3.get$r();
                            case 28:
                              state = 0;
                              t3.set$r($.Math_max(0, $.Math_min($.mul(t27, t28), 1)));
                              var t29 = material.get$color().get$g();
                            case 29:
                              state = 0;
                              var t30 = t3.get$g();
                            case 30:
                              state = 0;
                              t3.set$g($.Math_max(0, $.Math_min($.mul(t29, t30), 1)));
                              var t31 = material.get$color().get$b();
                            case 31:
                              state = 0;
                              var t32 = t3.get$b();
                            case 32:
                              state = 0;
                              t3.set$b($.Math_max(0, $.Math_min($.mul(t31, t32), 1)));
                              this._image = this.getGradientTexture$4(t6, t5, t4, t3);
                              this.drawTriangle$6(this._v1x, this._v1y, this._v2x, this._v2y, this._v4x, this._v4y);
                              this.clipImage$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v4x, this._v4y, 0, 0, 1, 0, 0, 1, this._image);
                              this.drawTriangle$6(this._v5x, this._v5y, this._v3x, this._v3y, this._v6x, this._v6y);
                              this.clipImage$13(this._v5x, this._v5y, this._v3x, this._v3y, this._v6x, this._v6y, 1, 0, 1, 1, 0, 1, this._image);
                          }
                        } else {
                          switch (state) {
                            case 0:
                              t1 = t2.get$r();
                              t3 = this._color;
                              t3.set$r(t1);
                              t3.set$g(t2.get$g());
                              t3.set$b(t2.get$b());
                              this.calculateLight$4(this._lights, element.get$centroidWorld(), element.get$normalWorld(), t3);
                              t1 = material.get$color().get$r();
                            case 33:
                              state = 0;
                              t4 = t3.get$r();
                            case 34:
                              state = 0;
                              t3.set$r($.Math_max(0, $.Math_min($.mul(t1, t4), 1)));
                              t5 = material.get$color().get$g();
                            case 35:
                              state = 0;
                              t6 = t3.get$g();
                            case 36:
                              state = 0;
                              t3.set$g($.Math_max(0, $.Math_min($.mul(t5, t6), 1)));
                              t7 = material.get$color().get$b();
                            case 37:
                              state = 0;
                              t8 = t3.get$b();
                            case 38:
                              state = 0;
                              t3.set$b($.Math_max(0, $.Math_min($.mul(t7, t8), 1)));
                              this.drawQuad$8(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._v4x, this._v4y);
                              if (material.get$wireframe() === true) this.strokePath$4(t3, material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
                              else this.fillPath$1(t3);
                          }
                        }
                    }
                  } else {
                    this.drawQuad$8(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._v4x, this._v4y);
                    if (material.get$wireframe() === true) this.strokePath$4(material.get$color(), material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
                    else this.fillPath$1(material.get$color());
                  }
              }
            } else {
              if (typeof material === 'object' && material !== null && !!material.is$MeshNormalMaterial) {
                t1 = this.normalToComponent$1(element.get$normalWorld().get$x());
                t2 = this._color;
                t2.set$r(t1);
                t2.set$g(this.normalToComponent$1(element.get$normalWorld().get$y()));
                t2.set$b(this.normalToComponent$1(element.get$normalWorld().get$z()));
                this.drawQuad$8(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._v4x, this._v4y);
                if (material.get$wireframe() === true) this.strokePath$4(t2, material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
                else this.fillPath$1(t2);
              } else {
                if (typeof material === 'object' && material !== null && !!material.is$MeshDepthMaterial) {
                  this._near = this._camera.get$near();
                  this._far = this._camera.get$far();
                  t1 = this.smoothstep$3(v1.get$positionScreen().get$z(), this._near, this._far);
                  if (typeof t1 !== 'number') throw $.iae(t1);
                  t1 = 1 - t1;
                  t2 = this._color1;
                  t2.set$b(t1);
                  t2.set$g(t1);
                  t2.set$r(t1);
                  t1 = this.smoothstep$3(v2.get$positionScreen().get$z(), this._near, this._far);
                  if (typeof t1 !== 'number') throw $.iae(t1);
                  t1 = 1 - t1;
                  t3 = this._color2;
                  t3.set$b(t1);
                  t3.set$g(t1);
                  t3.set$r(t1);
                  t1 = this.smoothstep$3(v4.get$positionScreen().get$z(), this._near, this._far);
                  if (typeof t1 !== 'number') throw $.iae(t1);
                  t1 = 1 - t1;
                  t4 = this._color3;
                  t4.set$b(t1);
                  t4.set$g(t1);
                  t4.set$r(t1);
                  t1 = this.smoothstep$3(v3.get$positionScreen().get$z(), this._near, this._far);
                  if (typeof t1 !== 'number') throw $.iae(t1);
                  t1 = 1 - t1;
                  t5 = this._color4;
                  t5.set$b(t1);
                  t5.set$g(t1);
                  t5.set$r(t1);
                  this._image = this.getGradientTexture$4(t2, t3, t4, t5);
                  this.drawTriangle$6(this._v1x, this._v1y, this._v2x, this._v2y, this._v4x, this._v4y);
                  this.clipImage$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v4x, this._v4y, 0, 0, 1, 0, 0, 1, this._image);
                  this.drawTriangle$6(this._v5x, this._v5y, this._v3x, this._v3y, this._v6x, this._v6y);
                  this.clipImage$13(this._v5x, this._v5y, this._v3x, this._v3y, this._v6x, this._v6y, 1, 0, 1, 1, 0, 1, this._image);
                }
              }
            }
        }
      }
  }
 },
 renderFace3$9: function(v1, v2, v3, uv1, uv2, uv3, element, material, scene) {
  var t1 = this._info;
  var t2 = t1.render;
  var t3 = t2.get$vertices();
  if (typeof t3 !== 'number') return this.renderFace3$9$bailout(1, v1, v2, v3, uv1, uv2, uv3, element, material, t1, t2, t3, 0, 0, 0, 0);
  t2.set$vertices(t3 + 3);
  var t4 = t2.get$faces();
  if (typeof t4 !== 'number') return this.renderFace3$9$bailout(2, v1, v2, v3, uv1, uv2, uv3, element, material, t2, t4, 0, 0, 0, 0, 0);
  t2.set$faces(t4 + 1);
  this.setOpacity$1(material.get$opacity());
  this.setBlending$1(material.get$blending());
  this._v1x = v1.get$positionScreen().get$x();
  this._v1y = v1.get$positionScreen().get$y();
  this._v2x = v2.get$positionScreen().get$x();
  this._v2y = v2.get$positionScreen().get$y();
  this._v3x = v3.get$positionScreen().get$x();
  this._v3y = v3.get$positionScreen().get$y();
  this.drawTriangle$6(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y);
  if (typeof material === 'object' && material !== null && !!material.is$MeshBasicMaterial) {
    t1 = material.get$map();
    if (!(t1 == null)) {
      t1 = material.get$map().get$mapping();
      if (typeof t1 === 'object' && t1 !== null && !!t1.is$UVMapping) {
        t1 = element.get$uvs();
        if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(3, t1, uv1, uv2, uv3, material, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        t2 = t1.length;
        if (0 >= t2) throw $.ioore(0);
        this._uvs = t1[0];
        t3 = this._v1x;
        t4 = this._v1y;
        var t5 = this._v2x;
        var t6 = this._v2y;
        var t7 = this._v3x;
        var t8 = this._v3y;
        var t9 = this._uvs;
        if (typeof t9 !== 'string' && (typeof t9 !== 'object' || t9 === null || (t9.constructor !== Array && !t9.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(4, uv1, uv2, uv3, t4, t3, t6, t5, t8, t7, t9, material, 0, 0, 0, 0);
        if (uv1 !== (uv1 | 0)) throw $.iae(uv1);
        var t10 = t9.length;
        if (uv1 < 0 || uv1 >= t10) throw $.ioore(uv1);
        var t11 = t9[uv1].get$u();
        var t12 = this._uvs;
        if (typeof t12 !== 'string' && (typeof t12 !== 'object' || t12 === null || (t12.constructor !== Array && !t12.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(5, uv1, uv2, uv3, t3, t4, t5, t6, t7, t8, t11, t12, material, 0, 0, 0);
        var t13 = t12.length;
        if (uv1 < 0 || uv1 >= t13) throw $.ioore(uv1);
        var t14 = t12[uv1].get$v();
        var t15 = this._uvs;
        if (typeof t15 !== 'string' && (typeof t15 !== 'object' || t15 === null || (t15.constructor !== Array && !t15.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(6, uv2, uv3, t3, t4, t5, t6, t7, t8, t11, t14, t15, material, 0, 0, 0);
        if (uv2 !== (uv2 | 0)) throw $.iae(uv2);
        var t16 = t15.length;
        if (uv2 < 0 || uv2 >= t16) throw $.ioore(uv2);
        var t17 = t15[uv2].get$u();
        var t18 = this._uvs;
        if (typeof t18 !== 'string' && (typeof t18 !== 'object' || t18 === null || (t18.constructor !== Array && !t18.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(7, t17, uv2, uv3, t3, t4, t5, t6, t7, t8, t11, t14, t18, material, 0, 0);
        var t19 = t18.length;
        if (uv2 < 0 || uv2 >= t19) throw $.ioore(uv2);
        var t20 = t18[uv2].get$v();
        var t21 = this._uvs;
        if (typeof t21 !== 'string' && (typeof t21 !== 'object' || t21 === null || (t21.constructor !== Array && !t21.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(8, t17, t20, uv3, t3, t4, t5, t6, t7, t8, t11, t14, t21, material, 0, 0);
        if (uv3 !== (uv3 | 0)) throw $.iae(uv3);
        var t22 = t21.length;
        if (uv3 < 0 || uv3 >= t22) throw $.ioore(uv3);
        var t23 = t21[uv3].get$u();
        var t24 = this._uvs;
        if (typeof t24 !== 'string' && (typeof t24 !== 'object' || t24 === null || (t24.constructor !== Array && !t24.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(9, t24, t17, t20, uv3, t23, t3, t4, t5, t6, t7, t8, t11, t14, material, 0);
        var t25 = t24.length;
        if (uv3 < 0 || uv3 >= t25) throw $.ioore(uv3);
        this.patternPath$13(t3, t4, t5, t6, t7, t8, t11, t14, t17, t20, t23, t24[uv3].get$v(), material.get$map());
      }
    } else {
      t1 = material.get$envMap();
      if (!(null == t1)) {
        t1 = material.get$envMap().get$mapping();
        if (typeof t1 === 'object' && t1 !== null && !!t1.is$SphericalReflectionMapping) {
          var cameraMatrix = this._camera.get$matrixWorldInverse();
          t1 = this._vector3;
          t2 = element.get$vertexNormalsWorld();
          if (typeof t2 !== 'string' && (typeof t2 !== 'object' || t2 === null || (t2.constructor !== Array && !t2.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(10, material, t1, t2, uv1, uv2, uv3, element, cameraMatrix, 0, 0, 0, 0, 0, 0, 0);
          if (uv1 !== (uv1 | 0)) throw $.iae(uv1);
          t3 = t2.length;
          if (uv1 < 0 || uv1 >= t3) throw $.ioore(uv1);
          t1.copy$1(t2[uv1]);
          t4 = t1.get$x();
          if (typeof t4 !== 'number') return this.renderFace3$9$bailout(11, material, t1, uv2, uv3, element, t4, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0);
          t5 = cameraMatrix.get$n11();
          if (typeof t5 !== 'number') return this.renderFace3$9$bailout(12, material, t1, uv2, uv3, element, t4, t5, cameraMatrix, 0, 0, 0, 0, 0, 0, 0);
          t5 *= t4;
          t4 = t1.get$y();
          if (typeof t4 !== 'number') return this.renderFace3$9$bailout(13, cameraMatrix, t1, uv2, uv3, element, t5, t4, material, 0, 0, 0, 0, 0, 0, 0);
          t6 = cameraMatrix.get$n12();
          if (typeof t6 !== 'number') return this.renderFace3$9$bailout(14, cameraMatrix, t1, uv2, uv3, element, t5, t4, t6, material, 0, 0, 0, 0, 0, 0);
          t5 += t4 * t6;
          t7 = t1.get$z();
          if (typeof t7 !== 'number') return this.renderFace3$9$bailout(15, t5, t1, t7, uv2, uv3, element, cameraMatrix, material, 0, 0, 0, 0, 0, 0, 0);
          t8 = cameraMatrix.get$n13();
          if (typeof t8 !== 'number') return this.renderFace3$9$bailout(16, t5, t1, t7, t8, uv2, uv3, element, cameraMatrix, material, 0, 0, 0, 0, 0, 0);
          this._uv1x = (t5 + t7 * t8) * 0.5 + 0.5;
          t9 = t1.get$x();
          if (typeof t9 !== 'number') return this.renderFace3$9$bailout(17, t9, t1, cameraMatrix, uv2, uv3, element, material, 0, 0, 0, 0, 0, 0, 0, 0);
          t10 = cameraMatrix.get$n21();
          if (typeof t10 !== 'number') return this.renderFace3$9$bailout(18, t10, t1, t9, uv2, uv3, element, cameraMatrix, material, 0, 0, 0, 0, 0, 0, 0);
          t10 *= t9;
          t9 = t1.get$y();
          if (typeof t9 !== 'number') return this.renderFace3$9$bailout(19, material, t1, t10, uv2, uv3, element, t9, cameraMatrix, 0, 0, 0, 0, 0, 0, 0);
          t11 = cameraMatrix.get$n22();
          if (typeof t11 !== 'number') return this.renderFace3$9$bailout(20, material, t1, t10, uv2, uv3, element, t9, t11, cameraMatrix, 0, 0, 0, 0, 0, 0);
          t10 += t9 * t11;
          t12 = t1.get$z();
          if (typeof t12 !== 'number') return this.renderFace3$9$bailout(21, material, t1, uv2, uv3, element, t10, t12, cameraMatrix, 0, 0, 0, 0, 0, 0, 0);
          t13 = cameraMatrix.get$n23();
          if (typeof t13 !== 'number') return this.renderFace3$9$bailout(22, material, t1, uv2, uv3, element, t10, t12, t13, cameraMatrix, 0, 0, 0, 0, 0, 0);
          this._uv1y = -(t10 + t12 * t13) * 0.5 + 0.5;
          t14 = element.get$vertexNormalsWorld();
          if (typeof t14 !== 'string' && (typeof t14 !== 'object' || t14 === null || (t14.constructor !== Array && !t14.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(23, cameraMatrix, t1, uv2, uv3, element, t14, material, 0, 0, 0, 0, 0, 0, 0, 0);
          if (uv2 !== (uv2 | 0)) throw $.iae(uv2);
          t15 = t14.length;
          if (uv2 < 0 || uv2 >= t15) throw $.ioore(uv2);
          t1.copy$1(t14[uv2]);
          t16 = t1.get$x();
          if (typeof t16 !== 'number') return this.renderFace3$9$bailout(24, cameraMatrix, t1, uv3, element, t16, material, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t17 = cameraMatrix.get$n11();
          if (typeof t17 !== 'number') return this.renderFace3$9$bailout(25, material, t1, cameraMatrix, uv3, element, t16, t17, 0, 0, 0, 0, 0, 0, 0, 0);
          t17 *= t16;
          t16 = t1.get$y();
          if (typeof t16 !== 'number') return this.renderFace3$9$bailout(26, cameraMatrix, t1, t17, t16, uv3, element, material, 0, 0, 0, 0, 0, 0, 0, 0);
          t18 = cameraMatrix.get$n12();
          if (typeof t18 !== 'number') return this.renderFace3$9$bailout(27, cameraMatrix, t1, t17, t16, t18, uv3, element, material, 0, 0, 0, 0, 0, 0, 0);
          t17 += t16 * t18;
          t19 = t1.get$z();
          if (typeof t19 !== 'number') return this.renderFace3$9$bailout(28, cameraMatrix, t1, uv3, element, t17, t19, material, 0, 0, 0, 0, 0, 0, 0, 0);
          t20 = cameraMatrix.get$n13();
          if (typeof t20 !== 'number') return this.renderFace3$9$bailout(29, cameraMatrix, t1, uv3, element, t17, t19, t20, material, 0, 0, 0, 0, 0, 0, 0);
          this._uv2x = (t17 + t19 * t20) * 0.5 + 0.5;
          t21 = t1.get$x();
          if (typeof t21 !== 'number') return this.renderFace3$9$bailout(30, material, t1, uv3, t21, element, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t22 = cameraMatrix.get$n21();
          if (typeof t22 !== 'number') return this.renderFace3$9$bailout(31, material, t1, uv3, t21, element, t22, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0);
          t22 *= t21;
          t21 = t1.get$y();
          if (typeof t21 !== 'number') return this.renderFace3$9$bailout(32, material, t1, uv3, element, t22, t21, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0);
          t23 = cameraMatrix.get$n22();
          if (typeof t23 !== 'number') return this.renderFace3$9$bailout(33, material, t1, uv3, element, t22, t21, t23, cameraMatrix, 0, 0, 0, 0, 0, 0, 0);
          t22 += t21 * t23;
          t24 = t1.get$z();
          if (typeof t24 !== 'number') return this.renderFace3$9$bailout(34, t22, t1, t24, uv3, element, material, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0);
          t25 = cameraMatrix.get$n23();
          if (typeof t25 !== 'number') return this.renderFace3$9$bailout(35, t22, t1, t24, t25, uv3, element, material, cameraMatrix, 0, 0, 0, 0, 0, 0, 0);
          this._uv2y = -(t22 + t24 * t25) * 0.5 + 0.5;
          var t26 = element.get$vertexNormalsWorld();
          if (typeof t26 !== 'string' && (typeof t26 !== 'object' || t26 === null || (t26.constructor !== Array && !t26.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(36, cameraMatrix, t1, t26, uv3, material, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          if (uv3 !== (uv3 | 0)) throw $.iae(uv3);
          var t27 = t26.length;
          if (uv3 < 0 || uv3 >= t27) throw $.ioore(uv3);
          t1.copy$1(t26[uv3]);
          var t28 = t1.get$x();
          if (typeof t28 !== 'number') return this.renderFace3$9$bailout(37, cameraMatrix, t1, t28, material, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          var t29 = cameraMatrix.get$n11();
          if (typeof t29 !== 'number') return this.renderFace3$9$bailout(38, cameraMatrix, t1, t28, t29, material, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t29 *= t28;
          t28 = t1.get$y();
          if (typeof t28 !== 'number') return this.renderFace3$9$bailout(39, t29, t1, t28, cameraMatrix, material, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          var t30 = cameraMatrix.get$n12();
          if (typeof t30 !== 'number') return this.renderFace3$9$bailout(40, cameraMatrix, t1, t29, t28, t30, material, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t29 += t28 * t30;
          var t31 = t1.get$z();
          if (typeof t31 !== 'number') return this.renderFace3$9$bailout(41, material, t1, t31, cameraMatrix, t29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          var t32 = cameraMatrix.get$n13();
          if (typeof t32 !== 'number') return this.renderFace3$9$bailout(42, t29, t1, t32, t31, cameraMatrix, material, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          this._uv3x = (t29 + t31 * t32) * 0.5 + 0.5;
          var t33 = t1.get$x();
          if (typeof t33 !== 'number') return this.renderFace3$9$bailout(43, material, t1, t33, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          var t34 = cameraMatrix.get$n21();
          if (typeof t34 !== 'number') return this.renderFace3$9$bailout(44, material, t1, t33, t34, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t34 *= t33;
          t33 = t1.get$y();
          if (typeof t33 !== 'number') return this.renderFace3$9$bailout(45, t34, t1, t33, material, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          var t35 = cameraMatrix.get$n22();
          if (typeof t35 !== 'number') return this.renderFace3$9$bailout(46, t34, t1, t33, t35, material, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t34 += t33 * t35;
          t1 = t1.get$z();
          if (typeof t1 !== 'number') return this.renderFace3$9$bailout(47, t34, t1, material, cameraMatrix, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          var t36 = cameraMatrix.get$n23();
          if (typeof t36 !== 'number') return this.renderFace3$9$bailout(48, material, t1, t36, t34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          this._uv3y = -(t34 + t1 * t36) * 0.5 + 0.5;
          this.patternPath$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._uv1x, this._uv1y, this._uv2x, this._uv2y, this._uv3x, this._uv3y, material.get$envMap());
        }
      } else {
        if (material.get$wireframe() === true) this.strokePath$4(material.get$color(), material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
        else this.fillPath$1(material.get$color());
      }
    }
  } else {
    if (typeof material === 'object' && material !== null && !!material.is$MeshLambertMaterial) {
      t1 = material.get$map();
      if (!(t1 == null) && material.get$wireframe() !== true) {
        t1 = material.get$map().get$mapping();
        if (typeof t1 === 'object' && t1 !== null && !!t1.is$UVMapping) {
          t1 = element.get$uvs();
          if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(49, material, uv1, uv2, uv3, element, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t2 = t1.length;
          if (0 >= t2) throw $.ioore(0);
          this._uvs = t1[0];
          t3 = this._v1x;
          t4 = this._v1y;
          t5 = this._v2x;
          t6 = this._v2y;
          t7 = this._v3x;
          t8 = this._v3y;
          t9 = this._uvs;
          if (typeof t9 !== 'string' && (typeof t9 !== 'object' || t9 === null || (t9.constructor !== Array && !t9.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(50, material, uv1, uv2, uv3, element, t3, t4, t5, t6, t7, t8, t9, 0, 0, 0);
          if (uv1 !== (uv1 | 0)) throw $.iae(uv1);
          t10 = t9.length;
          if (uv1 < 0 || uv1 >= t10) throw $.ioore(uv1);
          t11 = t9[uv1].get$u();
          t12 = this._uvs;
          if (typeof t12 !== 'string' && (typeof t12 !== 'object' || t12 === null || (t12.constructor !== Array && !t12.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(51, material, uv1, uv2, uv3, element, t3, t4, t5, t6, t7, t8, t12, t11, 0, 0);
          t13 = t12.length;
          if (uv1 < 0 || uv1 >= t13) throw $.ioore(uv1);
          t14 = t12[uv1].get$v();
          t15 = this._uvs;
          if (typeof t15 !== 'string' && (typeof t15 !== 'object' || t15 === null || (t15.constructor !== Array && !t15.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(52, material, uv2, uv3, element, t3, t4, t5, t6, t7, t8, t15, t11, t14, 0, 0);
          if (uv2 !== (uv2 | 0)) throw $.iae(uv2);
          t16 = t15.length;
          if (uv2 < 0 || uv2 >= t16) throw $.ioore(uv2);
          t17 = t15[uv2].get$u();
          t18 = this._uvs;
          if (typeof t18 !== 'string' && (typeof t18 !== 'object' || t18 === null || (t18.constructor !== Array && !t18.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(53, material, uv2, uv3, element, t3, t4, t5, t6, t7, t8, t18, t11, t14, t17, 0);
          t19 = t18.length;
          if (uv2 < 0 || uv2 >= t19) throw $.ioore(uv2);
          t20 = t18[uv2].get$v();
          t21 = this._uvs;
          if (typeof t21 !== 'string' && (typeof t21 !== 'object' || t21 === null || (t21.constructor !== Array && !t21.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(54, material, uv3, element, t3, t4, t5, t6, t7, t8, t11, t21, t14, t17, t20, 0);
          if (uv3 !== (uv3 | 0)) throw $.iae(uv3);
          t22 = t21.length;
          if (uv3 < 0 || uv3 >= t22) throw $.ioore(uv3);
          t23 = t21[uv3].get$u();
          t24 = this._uvs;
          if (typeof t24 !== 'string' && (typeof t24 !== 'object' || t24 === null || (t24.constructor !== Array && !t24.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(55, material, t23, uv3, element, t3, t4, t5, t6, t7, t8, t11, t24, t14, t17, t20);
          t25 = t24.length;
          if (uv3 < 0 || uv3 >= t25) throw $.ioore(uv3);
          this.patternPath$13(t3, t4, t5, t6, t7, t8, t11, t14, t17, t20, t23, t24[uv3].get$v(), material.get$map());
        }
        this.setBlending$1(2);
      }
      if (this._enableLighting) {
        if (material.get$wireframe() !== true) {
          t1 = material.get$shading();
          if (typeof t1 !== 'number') return this.renderFace3$9$bailout(56, material, t1, element, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1 = t1 === 2;
        } else t1 = false;
        if (t1) {
          t1 = $.get$length(element.get$vertexNormalsWorld());
          if (typeof t1 !== 'number') return this.renderFace3$9$bailout(57, material, t1, element, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1 = t1 === 3;
        } else t1 = false;
        t2 = this._ambientLight;
        t3 = t2.r;
        if (t1) {
          t1 = this._color3;
          t1.r = t3;
          t4 = this._color2;
          t4.r = t3;
          t5 = this._color1;
          t5.r = t3;
          t3 = t2.g;
          t1.g = t3;
          t4.g = t3;
          t5.g = t3;
          t2 = t2.b;
          t1.b = t2;
          t4.b = t2;
          t5.b = t2;
          t2 = this._lights;
          t3 = element.get$v1().get$positionWorld();
          t6 = element.get$vertexNormalsWorld();
          if (typeof t6 !== 'string' && (typeof t6 !== 'object' || t6 === null || (t6.constructor !== Array && !t6.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(58, material, t2, element, t1, t4, t5, t3, t6, 0, 0, 0, 0, 0, 0, 0);
          t7 = t6.length;
          if (0 >= t7) throw $.ioore(0);
          this.calculateLight$4(t2, t3, t6[0], t5);
          t3 = this._lights;
          t2 = element.get$v2().get$positionWorld();
          t8 = element.get$vertexNormalsWorld();
          if (typeof t8 !== 'string' && (typeof t8 !== 'object' || t8 === null || (t8.constructor !== Array && !t8.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(59, material, t3, t2, element, t1, t4, t5, t8, 0, 0, 0, 0, 0, 0, 0);
          t9 = t8.length;
          if (1 >= t9) throw $.ioore(1);
          this.calculateLight$4(t3, t2, t8[1], t4);
          t2 = this._lights;
          t3 = element.get$v3().get$positionWorld();
          t10 = element.get$vertexNormalsWorld();
          if (typeof t10 !== 'string' && (typeof t10 !== 'object' || t10 === null || (t10.constructor !== Array && !t10.is$JavaScriptIndexingBehavior()))) return this.renderFace3$9$bailout(60, material, t2, t1, t4, t5, t3, t10, 0, 0, 0, 0, 0, 0, 0, 0);
          t11 = t10.length;
          if (2 >= t11) throw $.ioore(2);
          this.calculateLight$4(t2, t3, t10[2], t1);
          t3 = material.get$color().get$r();
          if (typeof t3 !== 'number') return this.renderFace3$9$bailout(61, material, t4, t5, t3, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t2 = t5.r;
          if (typeof t2 !== 'number') return this.renderFace3$9$bailout(62, material, t3, t1, t4, t5, t2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t5.r = $.Math_max(0, $.Math_min(t3 * t2, 1));
          t12 = material.get$color().get$g();
          if (typeof t12 !== 'number') return this.renderFace3$9$bailout(63, material, t12, t5, t4, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t13 = t5.g;
          if (typeof t13 !== 'number') return this.renderFace3$9$bailout(64, material, t12, t13, t1, t4, t5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t5.g = $.Math_max(0, $.Math_min(t12 * t13, 1));
          t14 = material.get$color().get$b();
          if (typeof t14 !== 'number') return this.renderFace3$9$bailout(65, material, t4, t5, t14, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t15 = t5.b;
          if (typeof t15 !== 'number') return this.renderFace3$9$bailout(66, material, t1, t4, t5, t14, t15, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t5.b = $.Math_max(0, $.Math_min(t14 * t15, 1));
          t16 = material.get$color().get$r();
          if (typeof t16 !== 'number') return this.renderFace3$9$bailout(67, material, t4, t5, t16, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t17 = t4.r;
          if (typeof t17 !== 'number') return this.renderFace3$9$bailout(68, material, t1, t4, t5, t16, t17, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t4.r = $.Math_max(0, $.Math_min(t16 * t17, 1));
          t18 = material.get$color().get$g();
          if (typeof t18 !== 'number') return this.renderFace3$9$bailout(69, material, t4, t5, t18, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t19 = t4.g;
          if (typeof t19 !== 'number') return this.renderFace3$9$bailout(70, material, t18, t1, t4, t5, t19, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t4.g = $.Math_max(0, $.Math_min(t18 * t19, 1));
          t20 = material.get$color().get$b();
          if (typeof t20 !== 'number') return this.renderFace3$9$bailout(71, material, t20, t5, t4, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t21 = t4.b;
          if (typeof t21 !== 'number') return this.renderFace3$9$bailout(72, material, t20, t21, t1, t4, t5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t4.b = $.Math_max(0, $.Math_min(t20 * t21, 1));
          t22 = material.get$color().get$r();
          if (typeof t22 !== 'number') return this.renderFace3$9$bailout(73, material, t4, t5, t22, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t23 = t1.r;
          if (typeof t23 !== 'number') return this.renderFace3$9$bailout(74, material, t1, t4, t5, t22, t23, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1.r = $.Math_max(0, $.Math_min(t22 * t23, 1));
          t24 = material.get$color().get$g();
          if (typeof t24 !== 'number') return this.renderFace3$9$bailout(75, material, t4, t5, t24, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t25 = t1.g;
          if (typeof t25 !== 'number') return this.renderFace3$9$bailout(76, material, t1, t4, t5, t24, t25, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1.g = $.Math_max(0, $.Math_min(t24 * t25, 1));
          t26 = material.get$color().get$b();
          if (typeof t26 !== 'number') return this.renderFace3$9$bailout(77, t4, t5, t26, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t27 = t1.b;
          if (typeof t27 !== 'number') return this.renderFace3$9$bailout(78, t4, t5, t27, t26, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1.b = $.Math_max(0, $.Math_min(t26 * t27, 1));
          t28 = t4.r;
          if (typeof t28 !== 'number') return this.renderFace3$9$bailout(79, t4, t5, t28, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t29 = t1.r;
          if (typeof t29 !== 'number') return this.renderFace3$9$bailout(80, t4, t29, t5, t28, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t30 = (t28 + t29) * 0.5;
          t31 = this._color4;
          t31.r = t30;
          t30 = t4.g;
          if (typeof t30 !== 'number') return this.renderFace3$9$bailout(81, t4, t5, t30, t31, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t32 = t1.g;
          if (typeof t32 !== 'number') return this.renderFace3$9$bailout(82, t1, t4, t5, t30, t32, t31, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t31.g = (t30 + t32) * 0.5;
          t33 = t4.b;
          if (typeof t33 !== 'number') return this.renderFace3$9$bailout(83, t4, t5, t33, t31, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t34 = t1.b;
          if (typeof t34 !== 'number') return this.renderFace3$9$bailout(84, t33, t34, t1, t4, t5, t31, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t31.b = (t33 + t34) * 0.5;
          this._image = this.getGradientTexture$4(t5, t4, t1, t31);
          this.clipImage$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, 0, 0, 1, 0, 0, 1, this._image);
        } else {
          t1 = this._color;
          t1.r = t3;
          t1.g = t2.g;
          t1.b = t2.b;
          this.calculateLight$4(this._lights, element.get$centroidWorld(), element.get$normalWorld(), t1);
          t3 = material.get$color().get$r();
          if (typeof t3 !== 'number') return this.renderFace3$9$bailout(85, t1, material, t3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t4 = t1.r;
          if (typeof t4 !== 'number') return this.renderFace3$9$bailout(86, t1, material, t4, t3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1.r = $.Math_max(0, $.Math_min(t3 * t4, 1));
          t5 = material.get$color().get$g();
          if (typeof t5 !== 'number') return this.renderFace3$9$bailout(87, t1, material, t5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t6 = t1.g;
          if (typeof t6 !== 'number') return this.renderFace3$9$bailout(88, t1, material, t5, t6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1.g = $.Math_max(0, $.Math_min(t5 * t6, 1));
          t7 = material.get$color().get$b();
          if (typeof t7 !== 'number') return this.renderFace3$9$bailout(89, t1, material, t7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t8 = t1.b;
          if (typeof t8 !== 'number') return this.renderFace3$9$bailout(90, t1, material, t8, t7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          t1.b = $.Math_max(0, $.Math_min(t7 * t8, 1));
          if (material.get$wireframe() === true) this.strokePath$4(t1, material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
          else this.fillPath$1(t1);
        }
      } else {
        if (material.get$wireframe() === true) this.strokePath$4(material.get$color(), material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
        else this.fillPath$1(material.get$color());
      }
    } else {
      if (typeof material === 'object' && material !== null && !!material.is$MeshDepthMaterial) {
        this._near = this._camera.get$near();
        this._far = this._camera.get$far();
        t1 = this.smoothstep$3(v1.get$positionScreen().get$z(), this._near, this._far);
        if (typeof t1 !== 'number') throw $.iae(t1);
        t1 = 1 - t1;
        t2 = this._color1;
        t2.b = t1;
        t2.g = t1;
        t2.r = t1;
        t1 = this.smoothstep$3(v2.get$positionScreen().get$z(), this._near, this._far);
        if (typeof t1 !== 'number') throw $.iae(t1);
        t1 = 1 - t1;
        t3 = this._color2;
        t3.b = t1;
        t3.g = t1;
        t3.r = t1;
        t1 = this.smoothstep$3(v3.get$positionScreen().get$z(), this._near, this._far);
        if (typeof t1 !== 'number') throw $.iae(t1);
        t1 = 1 - t1;
        t4 = this._color3;
        t4.b = t1;
        t4.g = t1;
        t4.r = t1;
        t1 = t3.r;
        if (typeof t1 !== 'number') return this.renderFace3$9$bailout(91, t1, t3, t2, t4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        t5 = t4.r;
        if (typeof t5 !== 'number') return this.renderFace3$9$bailout(92, t1, t3, t5, t2, t4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        t6 = (t1 + t5) * 0.5;
        t7 = this._color4;
        t7.r = t6;
        t6 = t3.g;
        if (typeof t6 !== 'number') return this.renderFace3$9$bailout(93, t3, t6, t7, t2, t4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        t8 = t4.g;
        if (typeof t8 !== 'number') return this.renderFace3$9$bailout(94, t7, t2, t3, t6, t8, t4, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        t7.g = (t6 + t8) * 0.5;
        t9 = t3.b;
        if (typeof t9 !== 'number') return this.renderFace3$9$bailout(95, t3, t7, t2, t9, t4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        t10 = t4.b;
        if (typeof t10 !== 'number') return this.renderFace3$9$bailout(96, t7, t2, t9, t10, t3, t4, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        t7.b = (t9 + t10) * 0.5;
        this._image = this.getGradientTexture$4(t2, t3, t4, t7);
        this.clipImage$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, 0, 0, 1, 0, 0, 1, this._image);
      } else {
        if (typeof material === 'object' && material !== null && !!material.is$MeshNormalMaterial) {
          t1 = this.normalToComponent$1(element.get$normalWorld().get$x());
          t2 = this._color;
          t2.r = t1;
          t2.g = this.normalToComponent$1(element.get$normalWorld().get$y());
          t2.b = this.normalToComponent$1(element.get$normalWorld().get$z());
          if (material.get$wireframe() === true) this.strokePath$4(t2, material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
          else this.fillPath$1(t2);
        }
      }
    }
  }
 },
 renderFace3$9$bailout: function(state, env0, env1, env2, env3, env4, env5, env6, env7, env8, env9, env10, env11, env12, env13, env14) {
  switch (state) {
    case 1:
      var v1 = env0;
      var v2 = env1;
      var v3 = env2;
      var uv1 = env3;
      var uv2 = env4;
      var uv3 = env5;
      var element = env6;
      var material = env7;
      t1 = env8;
      t2 = env9;
      t3 = env10;
      break;
    case 2:
      v1 = env0;
      v2 = env1;
      v3 = env2;
      uv1 = env3;
      uv2 = env4;
      uv3 = env5;
      element = env6;
      material = env7;
      t1 = env8;
      t2 = env9;
      break;
    case 3:
      t1 = env0;
      uv1 = env1;
      uv2 = env2;
      uv3 = env3;
      material = env4;
      break;
    case 4:
      uv1 = env0;
      uv2 = env1;
      uv3 = env2;
      t3 = env3;
      t2 = env4;
      t5 = env5;
      t4 = env6;
      t7 = env7;
      t6 = env8;
      t8 = env9;
      material = env10;
      break;
    case 5:
      uv1 = env0;
      uv2 = env1;
      uv3 = env2;
      t2 = env3;
      t3 = env4;
      t4 = env5;
      t5 = env6;
      t6 = env7;
      t7 = env8;
      t9 = env9;
      t10 = env10;
      material = env11;
      break;
    case 6:
      uv2 = env0;
      uv3 = env1;
      t2 = env2;
      t3 = env3;
      t4 = env4;
      t5 = env5;
      t6 = env6;
      t7 = env7;
      t9 = env8;
      t11 = env9;
      t12 = env10;
      material = env11;
      break;
    case 7:
      t13 = env0;
      uv2 = env1;
      uv3 = env2;
      t2 = env3;
      t3 = env4;
      t4 = env5;
      t5 = env6;
      t6 = env7;
      t7 = env8;
      t9 = env9;
      t11 = env10;
      t14 = env11;
      material = env12;
      break;
    case 8:
      t13 = env0;
      t15 = env1;
      uv3 = env2;
      t2 = env3;
      t3 = env4;
      t4 = env5;
      t5 = env6;
      t6 = env7;
      t7 = env8;
      t9 = env9;
      t11 = env10;
      t16 = env11;
      material = env12;
      break;
    case 9:
      t18 = env0;
      t13 = env1;
      t15 = env2;
      uv3 = env3;
      t17 = env4;
      t2 = env5;
      t3 = env6;
      t4 = env7;
      t5 = env8;
      t6 = env9;
      t7 = env10;
      t9 = env11;
      t11 = env12;
      material = env13;
      break;
    case 10:
      material = env0;
      t1 = env1;
      t2 = env2;
      uv1 = env3;
      uv2 = env4;
      uv3 = env5;
      element = env6;
      cameraMatrix = env7;
      break;
    case 11:
      material = env0;
      t1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t3 = env5;
      cameraMatrix = env6;
      break;
    case 12:
      material = env0;
      t1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t3 = env5;
      t4 = env6;
      cameraMatrix = env7;
      break;
    case 13:
      cameraMatrix = env0;
      t1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t4 = env5;
      t3 = env6;
      material = env7;
      break;
    case 14:
      cameraMatrix = env0;
      t1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t4 = env5;
      t3 = env6;
      t5 = env7;
      material = env8;
      break;
    case 15:
      t4 = env0;
      t1 = env1;
      t6 = env2;
      uv2 = env3;
      uv3 = env4;
      element = env5;
      cameraMatrix = env6;
      material = env7;
      break;
    case 16:
      t4 = env0;
      t1 = env1;
      t6 = env2;
      t7 = env3;
      uv2 = env4;
      uv3 = env5;
      element = env6;
      cameraMatrix = env7;
      material = env8;
      break;
    case 17:
      t8 = env0;
      t1 = env1;
      cameraMatrix = env2;
      uv2 = env3;
      uv3 = env4;
      element = env5;
      material = env6;
      break;
    case 18:
      t9 = env0;
      t1 = env1;
      t8 = env2;
      uv2 = env3;
      uv3 = env4;
      element = env5;
      cameraMatrix = env6;
      material = env7;
      break;
    case 19:
      material = env0;
      t1 = env1;
      t9 = env2;
      uv2 = env3;
      uv3 = env4;
      element = env5;
      t8 = env6;
      cameraMatrix = env7;
      break;
    case 20:
      material = env0;
      t1 = env1;
      t9 = env2;
      uv2 = env3;
      uv3 = env4;
      element = env5;
      t8 = env6;
      t10 = env7;
      cameraMatrix = env8;
      break;
    case 21:
      material = env0;
      t1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t9 = env5;
      t11 = env6;
      cameraMatrix = env7;
      break;
    case 22:
      material = env0;
      t1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t9 = env5;
      t11 = env6;
      t12 = env7;
      cameraMatrix = env8;
      break;
    case 23:
      cameraMatrix = env0;
      t1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t13 = env5;
      material = env6;
      break;
    case 24:
      cameraMatrix = env0;
      t1 = env1;
      uv3 = env2;
      element = env3;
      t14 = env4;
      material = env5;
      break;
    case 25:
      material = env0;
      t1 = env1;
      cameraMatrix = env2;
      uv3 = env3;
      element = env4;
      t14 = env5;
      t15 = env6;
      break;
    case 26:
      cameraMatrix = env0;
      t1 = env1;
      t15 = env2;
      t14 = env3;
      uv3 = env4;
      element = env5;
      material = env6;
      break;
    case 27:
      cameraMatrix = env0;
      t1 = env1;
      t15 = env2;
      t14 = env3;
      t16 = env4;
      uv3 = env5;
      element = env6;
      material = env7;
      break;
    case 28:
      cameraMatrix = env0;
      t1 = env1;
      uv3 = env2;
      element = env3;
      t15 = env4;
      t17 = env5;
      material = env6;
      break;
    case 29:
      cameraMatrix = env0;
      t1 = env1;
      uv3 = env2;
      element = env3;
      t15 = env4;
      t17 = env5;
      t18 = env6;
      material = env7;
      break;
    case 30:
      material = env0;
      t1 = env1;
      uv3 = env2;
      t19 = env3;
      element = env4;
      cameraMatrix = env5;
      break;
    case 31:
      material = env0;
      t1 = env1;
      uv3 = env2;
      t19 = env3;
      element = env4;
      t20 = env5;
      cameraMatrix = env6;
      break;
    case 32:
      material = env0;
      t1 = env1;
      uv3 = env2;
      element = env3;
      t20 = env4;
      t19 = env5;
      cameraMatrix = env6;
      break;
    case 33:
      material = env0;
      t1 = env1;
      uv3 = env2;
      element = env3;
      t20 = env4;
      t19 = env5;
      t21 = env6;
      cameraMatrix = env7;
      break;
    case 34:
      t20 = env0;
      t1 = env1;
      t22 = env2;
      uv3 = env3;
      element = env4;
      material = env5;
      cameraMatrix = env6;
      break;
    case 35:
      t20 = env0;
      t1 = env1;
      t22 = env2;
      t23 = env3;
      uv3 = env4;
      element = env5;
      material = env6;
      cameraMatrix = env7;
      break;
    case 36:
      cameraMatrix = env0;
      t1 = env1;
      t24 = env2;
      uv3 = env3;
      material = env4;
      break;
    case 37:
      cameraMatrix = env0;
      t1 = env1;
      t25 = env2;
      material = env3;
      break;
    case 38:
      cameraMatrix = env0;
      t1 = env1;
      t25 = env2;
      t26 = env3;
      material = env4;
      break;
    case 39:
      t26 = env0;
      t1 = env1;
      t25 = env2;
      cameraMatrix = env3;
      material = env4;
      break;
    case 40:
      cameraMatrix = env0;
      t1 = env1;
      t26 = env2;
      t25 = env3;
      t27 = env4;
      material = env5;
      break;
    case 41:
      material = env0;
      t1 = env1;
      t28 = env2;
      cameraMatrix = env3;
      t26 = env4;
      break;
    case 42:
      t26 = env0;
      t1 = env1;
      t29 = env2;
      t28 = env3;
      cameraMatrix = env4;
      material = env5;
      break;
    case 43:
      material = env0;
      t1 = env1;
      t30 = env2;
      cameraMatrix = env3;
      break;
    case 44:
      material = env0;
      t1 = env1;
      t30 = env2;
      t31 = env3;
      cameraMatrix = env4;
      break;
    case 45:
      t31 = env0;
      t1 = env1;
      t30 = env2;
      material = env3;
      cameraMatrix = env4;
      break;
    case 46:
      t31 = env0;
      t1 = env1;
      t30 = env2;
      t32 = env3;
      material = env4;
      cameraMatrix = env5;
      break;
    case 47:
      t31 = env0;
      t1 = env1;
      material = env2;
      cameraMatrix = env3;
      break;
    case 48:
      material = env0;
      t1 = env1;
      t33 = env2;
      t31 = env3;
      break;
    case 49:
      material = env0;
      uv1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t1 = env5;
      break;
    case 50:
      material = env0;
      uv1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t2 = env5;
      t3 = env6;
      t4 = env7;
      t5 = env8;
      t6 = env9;
      t7 = env10;
      t8 = env11;
      break;
    case 51:
      material = env0;
      uv1 = env1;
      uv2 = env2;
      uv3 = env3;
      element = env4;
      t2 = env5;
      t3 = env6;
      t4 = env7;
      t5 = env8;
      t6 = env9;
      t7 = env10;
      t10 = env11;
      t9 = env12;
      break;
    case 52:
      material = env0;
      uv2 = env1;
      uv3 = env2;
      element = env3;
      t2 = env4;
      t3 = env5;
      t4 = env6;
      t5 = env7;
      t6 = env8;
      t7 = env9;
      t12 = env10;
      t9 = env11;
      t11 = env12;
      break;
    case 53:
      material = env0;
      uv2 = env1;
      uv3 = env2;
      element = env3;
      t2 = env4;
      t3 = env5;
      t4 = env6;
      t5 = env7;
      t6 = env8;
      t7 = env9;
      t14 = env10;
      t9 = env11;
      t11 = env12;
      t13 = env13;
      break;
    case 54:
      material = env0;
      uv3 = env1;
      element = env2;
      t2 = env3;
      t3 = env4;
      t4 = env5;
      t5 = env6;
      t6 = env7;
      t7 = env8;
      t9 = env9;
      t16 = env10;
      t11 = env11;
      t13 = env12;
      t15 = env13;
      break;
    case 55:
      material = env0;
      t17 = env1;
      uv3 = env2;
      element = env3;
      t2 = env4;
      t3 = env5;
      t4 = env6;
      t5 = env7;
      t6 = env8;
      t7 = env9;
      t9 = env10;
      t18 = env11;
      t11 = env12;
      t13 = env13;
      t15 = env14;
      break;
    case 56:
      material = env0;
      t1 = env1;
      element = env2;
      break;
    case 57:
      material = env0;
      t1 = env1;
      element = env2;
      break;
    case 58:
      material = env0;
      t2 = env1;
      element = env2;
      t3 = env3;
      t4 = env4;
      t5 = env5;
      t1 = env6;
      t6 = env7;
      break;
    case 59:
      material = env0;
      t1 = env1;
      t2 = env2;
      element = env3;
      t3 = env4;
      t4 = env5;
      t5 = env6;
      t7 = env7;
      break;
    case 60:
      material = env0;
      t2 = env1;
      t3 = env2;
      t4 = env3;
      t5 = env4;
      t1 = env5;
      t8 = env6;
      break;
    case 61:
      material = env0;
      t4 = env1;
      t5 = env2;
      t1 = env3;
      t3 = env4;
      break;
    case 62:
      material = env0;
      t1 = env1;
      t3 = env2;
      t4 = env3;
      t5 = env4;
      t2 = env5;
      break;
    case 63:
      material = env0;
      t9 = env1;
      t5 = env2;
      t4 = env3;
      t3 = env4;
      break;
    case 64:
      material = env0;
      t9 = env1;
      t10 = env2;
      t3 = env3;
      t4 = env4;
      t5 = env5;
      break;
    case 65:
      material = env0;
      t4 = env1;
      t5 = env2;
      t11 = env3;
      t3 = env4;
      break;
    case 66:
      material = env0;
      t3 = env1;
      t4 = env2;
      t5 = env3;
      t11 = env4;
      t12 = env5;
      break;
    case 67:
      material = env0;
      t4 = env1;
      t5 = env2;
      t13 = env3;
      t3 = env4;
      break;
    case 68:
      material = env0;
      t3 = env1;
      t4 = env2;
      t5 = env3;
      t13 = env4;
      t14 = env5;
      break;
    case 69:
      material = env0;
      t4 = env1;
      t5 = env2;
      t15 = env3;
      t3 = env4;
      break;
    case 70:
      material = env0;
      t15 = env1;
      t3 = env2;
      t4 = env3;
      t5 = env4;
      t16 = env5;
      break;
    case 71:
      material = env0;
      t17 = env1;
      t5 = env2;
      t4 = env3;
      t3 = env4;
      break;
    case 72:
      material = env0;
      t17 = env1;
      t18 = env2;
      t3 = env3;
      t4 = env4;
      t5 = env5;
      break;
    case 73:
      material = env0;
      t4 = env1;
      t5 = env2;
      t19 = env3;
      t3 = env4;
      break;
    case 74:
      material = env0;
      t3 = env1;
      t4 = env2;
      t5 = env3;
      t19 = env4;
      t20 = env5;
      break;
    case 75:
      material = env0;
      t4 = env1;
      t5 = env2;
      t21 = env3;
      t3 = env4;
      break;
    case 76:
      material = env0;
      t3 = env1;
      t4 = env2;
      t5 = env3;
      t21 = env4;
      t22 = env5;
      break;
    case 77:
      t4 = env0;
      t5 = env1;
      t23 = env2;
      t3 = env3;
      break;
    case 78:
      t4 = env0;
      t5 = env1;
      t24 = env2;
      t23 = env3;
      t3 = env4;
      break;
    case 79:
      t4 = env0;
      t5 = env1;
      t25 = env2;
      t3 = env3;
      break;
    case 80:
      t4 = env0;
      t26 = env1;
      t5 = env2;
      t25 = env3;
      t3 = env4;
      break;
    case 81:
      t4 = env0;
      t5 = env1;
      t27 = env2;
      t28 = env3;
      t3 = env4;
      break;
    case 82:
      t3 = env0;
      t4 = env1;
      t5 = env2;
      t27 = env3;
      t29 = env4;
      t28 = env5;
      break;
    case 83:
      t4 = env0;
      t5 = env1;
      t30 = env2;
      t28 = env3;
      t3 = env4;
      break;
    case 84:
      t30 = env0;
      t31 = env1;
      t3 = env2;
      t4 = env3;
      t5 = env4;
      t28 = env5;
      break;
    case 85:
      t3 = env0;
      material = env1;
      t1 = env2;
      break;
    case 86:
      t3 = env0;
      material = env1;
      t4 = env2;
      t1 = env3;
      break;
    case 87:
      t3 = env0;
      material = env1;
      t5 = env2;
      break;
    case 88:
      t3 = env0;
      material = env1;
      t5 = env2;
      t6 = env3;
      break;
    case 89:
      t3 = env0;
      material = env1;
      t7 = env2;
      break;
    case 90:
      t3 = env0;
      material = env1;
      t8 = env2;
      t7 = env3;
      break;
    case 91:
      t1 = env0;
      t3 = env1;
      t2 = env2;
      t4 = env3;
      break;
    case 92:
      t1 = env0;
      t3 = env1;
      t5 = env2;
      t2 = env3;
      t4 = env4;
      break;
    case 93:
      t3 = env0;
      t6 = env1;
      t7 = env2;
      t2 = env3;
      t4 = env4;
      break;
    case 94:
      t7 = env0;
      t2 = env1;
      t3 = env2;
      t6 = env3;
      t8 = env4;
      t4 = env5;
      break;
    case 95:
      t3 = env0;
      t7 = env1;
      t2 = env2;
      t9 = env3;
      t4 = env4;
      break;
    case 96:
      t7 = env0;
      t2 = env1;
      t9 = env2;
      t10 = env3;
      t3 = env4;
      t4 = env5;
      break;
  }
  switch (state) {
    case 0:
      var t1 = this._info;
      var t2 = t1.get$render();
      var t3 = t2.get$vertices();
    case 1:
      state = 0;
      t2.set$vertices($.add(t3, 3));
      t1 = t1.get$render();
      t2 = t1.get$faces();
    case 2:
      state = 0;
      t1.set$faces($.add(t2, 1));
      this.setOpacity$1(material.get$opacity());
      this.setBlending$1(material.get$blending());
      this._v1x = v1.get$positionScreen().get$x();
      this._v1y = v1.get$positionScreen().get$y();
      this._v2x = v2.get$positionScreen().get$x();
      this._v2y = v2.get$positionScreen().get$y();
      this._v3x = v3.get$positionScreen().get$x();
      this._v3y = v3.get$positionScreen().get$y();
      this.drawTriangle$6(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y);
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
      if (state == 3 || state == 4 || state == 5 || state == 6 || state == 7 || state == 8 || state == 9 || state == 10 || state == 11 || state == 12 || state == 13 || state == 14 || state == 15 || state == 16 || state == 17 || state == 18 || state == 19 || state == 20 || state == 21 || state == 22 || state == 23 || state == 24 || state == 25 || state == 26 || state == 27 || state == 28 || state == 29 || state == 30 || state == 31 || state == 32 || state == 33 || state == 34 || state == 35 || state == 36 || state == 37 || state == 38 || state == 39 || state == 40 || state == 41 || state == 42 || state == 43 || state == 44 || state == 45 || state == 46 || state == 47 || state == 48 || (state == 0 && ((typeof material === 'object' && material !== null) && !!material.is$MeshBasicMaterial))) {
        switch (state) {
          case 0:
            t1 = material.get$map();
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
          case 25:
          case 26:
          case 27:
          case 28:
          case 29:
          case 30:
          case 31:
          case 32:
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 48:
            if (state == 3 || state == 4 || state == 5 || state == 6 || state == 7 || state == 8 || state == 9 || (state == 0 && !(t1 == null))) {
              switch (state) {
                case 0:
                  t1 = material.get$map().get$mapping();
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                  if (state == 3 || state == 4 || state == 5 || state == 6 || state == 7 || state == 8 || state == 9 || (state == 0 && ((typeof t1 === 'object' && t1 !== null) && !!t1.is$UVMapping))) {
                    switch (state) {
                      case 0:
                        t1 = element.get$uvs();
                      case 3:
                        state = 0;
                        this._uvs = $.index(t1, 0);
                        t2 = this._v1x;
                        t3 = this._v1y;
                        var t4 = this._v2x;
                        var t5 = this._v2y;
                        var t6 = this._v3x;
                        var t7 = this._v3y;
                        var t8 = this._uvs;
                      case 4:
                        state = 0;
                        var t9 = $.index(t8, uv1).get$u();
                        var t10 = this._uvs;
                      case 5:
                        state = 0;
                        var t11 = $.index(t10, uv1).get$v();
                        var t12 = this._uvs;
                      case 6:
                        state = 0;
                        var t13 = $.index(t12, uv2).get$u();
                        var t14 = this._uvs;
                      case 7:
                        state = 0;
                        var t15 = $.index(t14, uv2).get$v();
                        var t16 = this._uvs;
                      case 8:
                        state = 0;
                        var t17 = $.index(t16, uv3).get$u();
                        var t18 = this._uvs;
                      case 9:
                        state = 0;
                        this.patternPath$13(t2, t3, t4, t5, t6, t7, t9, t11, t13, t15, t17, $.index(t18, uv3).get$v(), material.get$map());
                    }
                  }
              }
            } else {
              switch (state) {
                case 0:
                  t1 = material.get$envMap();
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 29:
                case 30:
                case 31:
                case 32:
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                  if (state == 10 || state == 11 || state == 12 || state == 13 || state == 14 || state == 15 || state == 16 || state == 17 || state == 18 || state == 19 || state == 20 || state == 21 || state == 22 || state == 23 || state == 24 || state == 25 || state == 26 || state == 27 || state == 28 || state == 29 || state == 30 || state == 31 || state == 32 || state == 33 || state == 34 || state == 35 || state == 36 || state == 37 || state == 38 || state == 39 || state == 40 || state == 41 || state == 42 || state == 43 || state == 44 || state == 45 || state == 46 || state == 47 || state == 48 || (state == 0 && !(null == t1))) {
                    switch (state) {
                      case 0:
                        t1 = material.get$envMap().get$mapping();
                      case 10:
                      case 11:
                      case 12:
                      case 13:
                      case 14:
                      case 15:
                      case 16:
                      case 17:
                      case 18:
                      case 19:
                      case 20:
                      case 21:
                      case 22:
                      case 23:
                      case 24:
                      case 25:
                      case 26:
                      case 27:
                      case 28:
                      case 29:
                      case 30:
                      case 31:
                      case 32:
                      case 33:
                      case 34:
                      case 35:
                      case 36:
                      case 37:
                      case 38:
                      case 39:
                      case 40:
                      case 41:
                      case 42:
                      case 43:
                      case 44:
                      case 45:
                      case 46:
                      case 47:
                      case 48:
                        if (state == 10 || state == 11 || state == 12 || state == 13 || state == 14 || state == 15 || state == 16 || state == 17 || state == 18 || state == 19 || state == 20 || state == 21 || state == 22 || state == 23 || state == 24 || state == 25 || state == 26 || state == 27 || state == 28 || state == 29 || state == 30 || state == 31 || state == 32 || state == 33 || state == 34 || state == 35 || state == 36 || state == 37 || state == 38 || state == 39 || state == 40 || state == 41 || state == 42 || state == 43 || state == 44 || state == 45 || state == 46 || state == 47 || state == 48 || (state == 0 && ((typeof t1 === 'object' && t1 !== null) && !!t1.is$SphericalReflectionMapping))) {
                          switch (state) {
                            case 0:
                              var cameraMatrix = this._camera.get$matrixWorldInverse();
                              t1 = this._vector3;
                              t2 = element.get$vertexNormalsWorld();
                            case 10:
                              state = 0;
                              t1.copy$1($.index(t2, uv1));
                              t3 = t1.get$x();
                            case 11:
                              state = 0;
                              t4 = cameraMatrix.get$n11();
                            case 12:
                              state = 0;
                              t4 = $.mul(t3, t4);
                              t3 = t1.get$y();
                            case 13:
                              state = 0;
                              t5 = cameraMatrix.get$n12();
                            case 14:
                              state = 0;
                              t4 = $.add(t4, $.mul(t3, t5));
                              t6 = t1.get$z();
                            case 15:
                              state = 0;
                              t7 = cameraMatrix.get$n13();
                            case 16:
                              state = 0;
                              this._uv1x = $.add($.mul($.add(t4, $.mul(t6, t7)), 0.5), 0.5);
                              t8 = t1.get$x();
                            case 17:
                              state = 0;
                              t9 = cameraMatrix.get$n21();
                            case 18:
                              state = 0;
                              t9 = $.mul(t8, t9);
                              t8 = t1.get$y();
                            case 19:
                              state = 0;
                              t10 = cameraMatrix.get$n22();
                            case 20:
                              state = 0;
                              t9 = $.add(t9, $.mul(t8, t10));
                              t11 = t1.get$z();
                            case 21:
                              state = 0;
                              t12 = cameraMatrix.get$n23();
                            case 22:
                              state = 0;
                              this._uv1y = $.add($.mul($.neg($.add(t9, $.mul(t11, t12))), 0.5), 0.5);
                              t13 = element.get$vertexNormalsWorld();
                            case 23:
                              state = 0;
                              t1.copy$1($.index(t13, uv2));
                              t14 = t1.get$x();
                            case 24:
                              state = 0;
                              t15 = cameraMatrix.get$n11();
                            case 25:
                              state = 0;
                              t15 = $.mul(t14, t15);
                              t14 = t1.get$y();
                            case 26:
                              state = 0;
                              t16 = cameraMatrix.get$n12();
                            case 27:
                              state = 0;
                              t15 = $.add(t15, $.mul(t14, t16));
                              t17 = t1.get$z();
                            case 28:
                              state = 0;
                              t18 = cameraMatrix.get$n13();
                            case 29:
                              state = 0;
                              this._uv2x = $.add($.mul($.add(t15, $.mul(t17, t18)), 0.5), 0.5);
                              var t19 = t1.get$x();
                            case 30:
                              state = 0;
                              var t20 = cameraMatrix.get$n21();
                            case 31:
                              state = 0;
                              t20 = $.mul(t19, t20);
                              t19 = t1.get$y();
                            case 32:
                              state = 0;
                              var t21 = cameraMatrix.get$n22();
                            case 33:
                              state = 0;
                              t20 = $.add(t20, $.mul(t19, t21));
                              var t22 = t1.get$z();
                            case 34:
                              state = 0;
                              var t23 = cameraMatrix.get$n23();
                            case 35:
                              state = 0;
                              this._uv2y = $.add($.mul($.neg($.add(t20, $.mul(t22, t23))), 0.5), 0.5);
                              var t24 = element.get$vertexNormalsWorld();
                            case 36:
                              state = 0;
                              t1.copy$1($.index(t24, uv3));
                              var t25 = t1.get$x();
                            case 37:
                              state = 0;
                              var t26 = cameraMatrix.get$n11();
                            case 38:
                              state = 0;
                              t26 = $.mul(t25, t26);
                              t25 = t1.get$y();
                            case 39:
                              state = 0;
                              var t27 = cameraMatrix.get$n12();
                            case 40:
                              state = 0;
                              t26 = $.add(t26, $.mul(t25, t27));
                              var t28 = t1.get$z();
                            case 41:
                              state = 0;
                              var t29 = cameraMatrix.get$n13();
                            case 42:
                              state = 0;
                              this._uv3x = $.add($.mul($.add(t26, $.mul(t28, t29)), 0.5), 0.5);
                              var t30 = t1.get$x();
                            case 43:
                              state = 0;
                              var t31 = cameraMatrix.get$n21();
                            case 44:
                              state = 0;
                              t31 = $.mul(t30, t31);
                              t30 = t1.get$y();
                            case 45:
                              state = 0;
                              var t32 = cameraMatrix.get$n22();
                            case 46:
                              state = 0;
                              t31 = $.add(t31, $.mul(t30, t32));
                              t1 = t1.get$z();
                            case 47:
                              state = 0;
                              var t33 = cameraMatrix.get$n23();
                            case 48:
                              state = 0;
                              this._uv3y = $.add($.mul($.neg($.add(t31, $.mul(t1, t33))), 0.5), 0.5);
                              this.patternPath$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, this._uv1x, this._uv1y, this._uv2x, this._uv2y, this._uv3x, this._uv3y, material.get$envMap());
                          }
                        }
                    }
                  } else {
                    if (material.get$wireframe() === true) this.strokePath$4(material.get$color(), material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
                    else this.fillPath$1(material.get$color());
                  }
              }
            }
        }
      } else {
        switch (state) {
          case 0:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
            if (state == 49 || state == 50 || state == 51 || state == 52 || state == 53 || state == 54 || state == 55 || state == 56 || state == 57 || state == 58 || state == 59 || state == 60 || state == 61 || state == 62 || state == 63 || state == 64 || state == 65 || state == 66 || state == 67 || state == 68 || state == 69 || state == 70 || state == 71 || state == 72 || state == 73 || state == 74 || state == 75 || state == 76 || state == 77 || state == 78 || state == 79 || state == 80 || state == 81 || state == 82 || state == 83 || state == 84 || state == 85 || state == 86 || state == 87 || state == 88 || state == 89 || state == 90 || (state == 0 && ((typeof material === 'object' && material !== null) && !!material.is$MeshLambertMaterial))) {
              switch (state) {
                case 0:
                  t1 = material.get$map();
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                  if (state == 49 || state == 50 || state == 51 || state == 52 || state == 53 || state == 54 || state == 55 || (state == 0 && (!(t1 == null) && material.get$wireframe() !== true))) {
                    switch (state) {
                      case 0:
                        t1 = material.get$map().get$mapping();
                      case 49:
                      case 50:
                      case 51:
                      case 52:
                      case 53:
                      case 54:
                      case 55:
                        if (state == 49 || state == 50 || state == 51 || state == 52 || state == 53 || state == 54 || state == 55 || (state == 0 && ((typeof t1 === 'object' && t1 !== null) && !!t1.is$UVMapping))) {
                          switch (state) {
                            case 0:
                              t1 = element.get$uvs();
                            case 49:
                              state = 0;
                              this._uvs = $.index(t1, 0);
                              t2 = this._v1x;
                              t3 = this._v1y;
                              t4 = this._v2x;
                              t5 = this._v2y;
                              t6 = this._v3x;
                              t7 = this._v3y;
                              t8 = this._uvs;
                            case 50:
                              state = 0;
                              t9 = $.index(t8, uv1).get$u();
                              t10 = this._uvs;
                            case 51:
                              state = 0;
                              t11 = $.index(t10, uv1).get$v();
                              t12 = this._uvs;
                            case 52:
                              state = 0;
                              t13 = $.index(t12, uv2).get$u();
                              t14 = this._uvs;
                            case 53:
                              state = 0;
                              t15 = $.index(t14, uv2).get$v();
                              t16 = this._uvs;
                            case 54:
                              state = 0;
                              t17 = $.index(t16, uv3).get$u();
                              t18 = this._uvs;
                            case 55:
                              state = 0;
                              this.patternPath$13(t2, t3, t4, t5, t6, t7, t9, t11, t13, t15, t17, $.index(t18, uv3).get$v(), material.get$map());
                          }
                        }
                        this.setBlending$1(2);
                    }
                  }
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                  if (state == 56 || state == 57 || state == 58 || state == 59 || state == 60 || state == 61 || state == 62 || state == 63 || state == 64 || state == 65 || state == 66 || state == 67 || state == 68 || state == 69 || state == 70 || state == 71 || state == 72 || state == 73 || state == 74 || state == 75 || state == 76 || state == 77 || state == 78 || state == 79 || state == 80 || state == 81 || state == 82 || state == 83 || state == 84 || state == 85 || state == 86 || state == 87 || state == 88 || state == 89 || state == 90 || (state == 0 && this._enableLighting === true)) {
                    switch (state) {
                      case 0:
                      case 56:
                        if (state == 56 || (state == 0 && material.get$wireframe() !== true)) {
                          switch (state) {
                            case 0:
                              t1 = material.get$shading();
                            case 56:
                              state = 0;
                              t1 = $.eqB(t1, 2);
                          }
                        } else {
                          t1 = false;
                        }
                      case 57:
                        if (state == 57 || (state == 0 && t1)) {
                          switch (state) {
                            case 0:
                              t1 = $.get$length(element.get$vertexNormalsWorld());
                            case 57:
                              state = 0;
                              t1 = $.eqB(t1, 3);
                          }
                        } else {
                          t1 = false;
                        }
                        t2 = this._ambientLight;
                      case 58:
                      case 59:
                      case 60:
                      case 61:
                      case 62:
                      case 63:
                      case 64:
                      case 65:
                      case 66:
                      case 67:
                      case 68:
                      case 69:
                      case 70:
                      case 71:
                      case 72:
                      case 73:
                      case 74:
                      case 75:
                      case 76:
                      case 77:
                      case 78:
                      case 79:
                      case 80:
                      case 81:
                      case 82:
                      case 83:
                      case 84:
                      case 85:
                      case 86:
                      case 87:
                      case 88:
                      case 89:
                      case 90:
                        if (state == 58 || state == 59 || state == 60 || state == 61 || state == 62 || state == 63 || state == 64 || state == 65 || state == 66 || state == 67 || state == 68 || state == 69 || state == 70 || state == 71 || state == 72 || state == 73 || state == 74 || state == 75 || state == 76 || state == 77 || state == 78 || state == 79 || state == 80 || state == 81 || state == 82 || state == 83 || state == 84 || (state == 0 && t1)) {
                          switch (state) {
                            case 0:
                              t1 = t2.get$r();
                              t3 = this._color3;
                              t3.set$r(t1);
                              t4 = this._color2;
                              t4.set$r(t1);
                              t5 = this._color1;
                              t5.set$r(t1);
                              t1 = t2.get$g();
                              t3.set$g(t1);
                              t4.set$g(t1);
                              t5.set$g(t1);
                              t2 = t2.get$b();
                              t3.set$b(t2);
                              t4.set$b(t2);
                              t5.set$b(t2);
                              t2 = this._lights;
                              t1 = element.get$v1().get$positionWorld();
                              t6 = element.get$vertexNormalsWorld();
                            case 58:
                              state = 0;
                              this.calculateLight$4(t2, t1, $.index(t6, 0), t5);
                              t1 = this._lights;
                              t2 = element.get$v2().get$positionWorld();
                              t7 = element.get$vertexNormalsWorld();
                            case 59:
                              state = 0;
                              this.calculateLight$4(t1, t2, $.index(t7, 1), t4);
                              t2 = this._lights;
                              t1 = element.get$v3().get$positionWorld();
                              t8 = element.get$vertexNormalsWorld();
                            case 60:
                              state = 0;
                              this.calculateLight$4(t2, t1, $.index(t8, 2), t3);
                              t1 = material.get$color().get$r();
                            case 61:
                              state = 0;
                              t2 = t5.get$r();
                            case 62:
                              state = 0;
                              t5.set$r($.Math_max(0, $.Math_min($.mul(t1, t2), 1)));
                              t9 = material.get$color().get$g();
                            case 63:
                              state = 0;
                              t10 = t5.get$g();
                            case 64:
                              state = 0;
                              t5.set$g($.Math_max(0, $.Math_min($.mul(t9, t10), 1)));
                              t11 = material.get$color().get$b();
                            case 65:
                              state = 0;
                              t12 = t5.get$b();
                            case 66:
                              state = 0;
                              t5.set$b($.Math_max(0, $.Math_min($.mul(t11, t12), 1)));
                              t13 = material.get$color().get$r();
                            case 67:
                              state = 0;
                              t14 = t4.get$r();
                            case 68:
                              state = 0;
                              t4.set$r($.Math_max(0, $.Math_min($.mul(t13, t14), 1)));
                              t15 = material.get$color().get$g();
                            case 69:
                              state = 0;
                              t16 = t4.get$g();
                            case 70:
                              state = 0;
                              t4.set$g($.Math_max(0, $.Math_min($.mul(t15, t16), 1)));
                              t17 = material.get$color().get$b();
                            case 71:
                              state = 0;
                              t18 = t4.get$b();
                            case 72:
                              state = 0;
                              t4.set$b($.Math_max(0, $.Math_min($.mul(t17, t18), 1)));
                              t19 = material.get$color().get$r();
                            case 73:
                              state = 0;
                              t20 = t3.get$r();
                            case 74:
                              state = 0;
                              t3.set$r($.Math_max(0, $.Math_min($.mul(t19, t20), 1)));
                              t21 = material.get$color().get$g();
                            case 75:
                              state = 0;
                              t22 = t3.get$g();
                            case 76:
                              state = 0;
                              t3.set$g($.Math_max(0, $.Math_min($.mul(t21, t22), 1)));
                              t23 = material.get$color().get$b();
                            case 77:
                              state = 0;
                              t24 = t3.get$b();
                            case 78:
                              state = 0;
                              t3.set$b($.Math_max(0, $.Math_min($.mul(t23, t24), 1)));
                              t25 = t4.get$r();
                            case 79:
                              state = 0;
                              t26 = t3.get$r();
                            case 80:
                              state = 0;
                              t27 = $.mul($.add(t25, t26), 0.5);
                              t28 = this._color4;
                              t28.set$r(t27);
                              t27 = t4.get$g();
                            case 81:
                              state = 0;
                              t29 = t3.get$g();
                            case 82:
                              state = 0;
                              t28.set$g($.mul($.add(t27, t29), 0.5));
                              t30 = t4.get$b();
                            case 83:
                              state = 0;
                              t31 = t3.get$b();
                            case 84:
                              state = 0;
                              t28.set$b($.mul($.add(t30, t31), 0.5));
                              this._image = this.getGradientTexture$4(t5, t4, t3, t28);
                              this.clipImage$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, 0, 0, 1, 0, 0, 1, this._image);
                          }
                        } else {
                          switch (state) {
                            case 0:
                              t1 = t2.get$r();
                              t3 = this._color;
                              t3.set$r(t1);
                              t3.set$g(t2.get$g());
                              t3.set$b(t2.get$b());
                              this.calculateLight$4(this._lights, element.get$centroidWorld(), element.get$normalWorld(), t3);
                              t1 = material.get$color().get$r();
                            case 85:
                              state = 0;
                              t4 = t3.get$r();
                            case 86:
                              state = 0;
                              t3.set$r($.Math_max(0, $.Math_min($.mul(t1, t4), 1)));
                              t5 = material.get$color().get$g();
                            case 87:
                              state = 0;
                              t6 = t3.get$g();
                            case 88:
                              state = 0;
                              t3.set$g($.Math_max(0, $.Math_min($.mul(t5, t6), 1)));
                              t7 = material.get$color().get$b();
                            case 89:
                              state = 0;
                              t8 = t3.get$b();
                            case 90:
                              state = 0;
                              t3.set$b($.Math_max(0, $.Math_min($.mul(t7, t8), 1)));
                              if (material.get$wireframe() === true) this.strokePath$4(t3, material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
                              else this.fillPath$1(t3);
                          }
                        }
                    }
                  } else {
                    if (material.get$wireframe() === true) this.strokePath$4(material.get$color(), material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
                    else this.fillPath$1(material.get$color());
                  }
              }
            } else {
              switch (state) {
                case 0:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                  if (state == 91 || state == 92 || state == 93 || state == 94 || state == 95 || state == 96 || (state == 0 && ((typeof material === 'object' && material !== null) && !!material.is$MeshDepthMaterial))) {
                    switch (state) {
                      case 0:
                        this._near = this._camera.get$near();
                        this._far = this._camera.get$far();
                        t1 = this.smoothstep$3(v1.get$positionScreen().get$z(), this._near, this._far);
                        if (typeof t1 !== 'number') throw $.iae(t1);
                        t1 = 1 - t1;
                        t2 = this._color1;
                        t2.set$b(t1);
                        t2.set$g(t1);
                        t2.set$r(t1);
                        t1 = this.smoothstep$3(v2.get$positionScreen().get$z(), this._near, this._far);
                        if (typeof t1 !== 'number') throw $.iae(t1);
                        t1 = 1 - t1;
                        t3 = this._color2;
                        t3.set$b(t1);
                        t3.set$g(t1);
                        t3.set$r(t1);
                        t1 = this.smoothstep$3(v3.get$positionScreen().get$z(), this._near, this._far);
                        if (typeof t1 !== 'number') throw $.iae(t1);
                        t1 = 1 - t1;
                        t4 = this._color3;
                        t4.set$b(t1);
                        t4.set$g(t1);
                        t4.set$r(t1);
                        t1 = t3.get$r();
                      case 91:
                        state = 0;
                        t5 = t4.get$r();
                      case 92:
                        state = 0;
                        t6 = $.mul($.add(t1, t5), 0.5);
                        t7 = this._color4;
                        t7.set$r(t6);
                        t6 = t3.get$g();
                      case 93:
                        state = 0;
                        t8 = t4.get$g();
                      case 94:
                        state = 0;
                        t7.set$g($.mul($.add(t6, t8), 0.5));
                        t9 = t3.get$b();
                      case 95:
                        state = 0;
                        t10 = t4.get$b();
                      case 96:
                        state = 0;
                        t7.set$b($.mul($.add(t9, t10), 0.5));
                        this._image = this.getGradientTexture$4(t2, t3, t4, t7);
                        this.clipImage$13(this._v1x, this._v1y, this._v2x, this._v2y, this._v3x, this._v3y, 0, 0, 1, 0, 0, 1, this._image);
                    }
                  } else {
                    if (typeof material === 'object' && material !== null && !!material.is$MeshNormalMaterial) {
                      t1 = this.normalToComponent$1(element.get$normalWorld().get$x());
                      t2 = this._color;
                      t2.set$r(t1);
                      t2.set$g(this.normalToComponent$1(element.get$normalWorld().get$y()));
                      t2.set$b(this.normalToComponent$1(element.get$normalWorld().get$z()));
                      if (material.get$wireframe() === true) this.strokePath$4(t2, material.get$wireframeLinewidth(), material.get$wireframeLinecap(), material.get$wireframeLinejoin());
                      else this.fillPath$1(t2);
                    }
                  }
              }
            }
        }
      }
  }
 },
 renderLine$5: function(v1, v2, element, material, scene) {
  this.setOpacity$1(material.get$opacity());
  this.setBlending$1(material.get$blending());
  var t1 = this._context;
  t1.beginPath$0();
  t1.moveTo$2(v1.get$positionScreen().get$x(), v1.get$positionScreen().get$y());
  t1.lineTo$2(v2.get$positionScreen().get$x(), v2.get$positionScreen().get$y());
  t1.closePath$0();
  if (typeof material === 'object' && material !== null && !!material.is$LineBasicMaterial) {
    this.setLineWidth$1(material.get$linewidth());
    this.setLineCap$1(material.get$linecap());
    this.setLineJoin$1(material.get$linejoin());
    this.setStrokeStyle$1(material.get$color().getContextStyle$0());
    t1.stroke$0();
    t1 = this._bboxRect;
    var t2 = material.get$linewidth();
    if (typeof t2 !== 'number') return this.renderLine$5$bailout(1, t1, t2);
    t1.inflate$1(t2 * 2);
  }
 },
 renderLine$5$bailout: function(state, env0, env1) {
  switch (state) {
    case 1:
      t1 = env0;
      t2 = env1;
      break;
  }
  switch (state) {
    case 0:
      this.setOpacity$1(material.get$opacity());
      this.setBlending$1(material.get$blending());
      var t1 = this._context;
      t1.beginPath$0();
      t1.moveTo$2(v1.get$positionScreen().get$x(), v1.get$positionScreen().get$y());
      t1.lineTo$2(v2.get$positionScreen().get$x(), v2.get$positionScreen().get$y());
      t1.closePath$0();
    case 1:
      if (state == 1 || (state == 0 && ((typeof material === 'object' && material !== null) && !!material.is$LineBasicMaterial))) {
        switch (state) {
          case 0:
            this.setLineWidth$1(material.get$linewidth());
            this.setLineCap$1(material.get$linecap());
            this.setLineJoin$1(material.get$linejoin());
            this.setStrokeStyle$1(material.get$color().getContextStyle$0());
            t1.stroke$0();
            t1 = this._bboxRect;
            var t2 = material.get$linewidth();
          case 1:
            state = 0;
            t1.inflate$1($.mul(t2, 2));
        }
      }
  }
 },
 renderParticle$4: function(v1, element, material, scene) {
  this.setOpacity$1(material.get$opacity());
  this.setBlending$1(material.get$blending());
  if (typeof material === 'object' && material !== null && !!material.is$ParticleBasicMaterial) {
    if (material.get$map() === true) {
      var bitmap = material.get$map().get$image();
      var t1 = bitmap.get$width();
      if (t1 !== (t1 | 0)) return this.renderParticle$4$bailout(1, v1, element, bitmap, t1, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      var bitmapWidth = $.shr(t1, 1);
      t1 = bitmap.get$height();
      if (t1 !== (t1 | 0)) return this.renderParticle$4$bailout(2, v1, element, t1, bitmapWidth, bitmap, 0, 0, 0, 0, 0, 0, 0, 0);
      var bitmapHeight = $.shr(t1, 1);
      t1 = element.get$scale().get$x();
      if (typeof t1 !== 'number') return this.renderParticle$4$bailout(3, v1, element, bitmap, bitmapWidth, bitmapHeight, t1, 0, 0, 0, 0, 0, 0, 0);
      var t2 = this._canvasWidthHalf;
      if (typeof t2 !== 'number') return this.renderParticle$4$bailout(4, v1, element, bitmap, bitmapWidth, bitmapHeight, t2, t1, 0, 0, 0, 0, 0, 0);
      var scaleX = t1 * t2;
      t2 = element.get$scale().get$y();
      if (typeof t2 !== 'number') return this.renderParticle$4$bailout(5, v1, element, t2, scaleX, bitmap, bitmapWidth, bitmapHeight, 0, 0, 0, 0, 0, 0);
      t1 = this._canvasHeightHalf;
      if (typeof t1 !== 'number') return this.renderParticle$4$bailout(6, v1, element, t2, scaleX, bitmap, bitmapWidth, bitmapHeight, t1, 0, 0, 0, 0, 0);
      var scaleY = t2 * t1;
      var width = scaleX * bitmapWidth;
      var height = scaleY * bitmapHeight;
      t1 = this._bboxRect;
      t2 = v1.get$x();
      if (typeof t2 !== 'number') return this.renderParticle$4$bailout(7, v1, element, scaleX, bitmap, scaleY, width, bitmapWidth, height, t2, bitmapHeight, t1, 0, 0);
      t2 -= width;
      var t3 = v1.get$y();
      if (typeof t3 !== 'number') return this.renderParticle$4$bailout(8, v1, element, scaleX, scaleY, width, height, t2, t3, bitmap, bitmapWidth, bitmapHeight, t1, 0);
      t3 -= height;
      var t4 = v1.get$x();
      if (typeof t4 !== 'number') return this.renderParticle$4$bailout(9, v1, element, scaleX, scaleY, width, height, t2, t3, t4, bitmap, bitmapWidth, bitmapHeight, t1);
      t4 += width;
      var t5 = v1.get$y();
      if (typeof t5 !== 'number') return this.renderParticle$4$bailout(10, v1, element, scaleX, scaleY, height, t2, t3, t4, bitmap, t5, bitmapWidth, bitmapHeight, t1);
      t1.setValues$4(t2, t3, t4, t5 + height);
      if (this._clipRect.intersects$1(t1) !== true) return;
      t1 = this._context;
      t1.save$0();
      t1.translate$2(v1.get$x(), v1.get$y());
      t2 = element.get$rotation();
      if (typeof t2 !== 'number') return this.renderParticle$4$bailout(11, v1, t1, scaleX, bitmap, scaleY, bitmapWidth, t2, bitmapHeight, 0, 0, 0, 0, 0);
      t1.rotate$1(-t2);
      t1.scale$2(scaleX, -scaleY);
      t1.translate$2(-bitmapWidth, -bitmapHeight);
      t1.drawImage$3(bitmap, 0, 0);
      t1.restore$0();
    }
    if (this.debug === true) {
      t1 = this._context;
      t1.beginPath$0();
      t2 = v1.get$x();
      if (typeof t2 !== 'number') return this.renderParticle$4$bailout(12, t1, v1, t2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      t1.moveTo$2(t2 - 10, v1.get$y());
      t3 = v1.get$x();
      if (typeof t3 !== 'number') return this.renderParticle$4$bailout(13, t1, v1, t3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      t1.lineTo$2(t3 + 10, v1.get$y());
      t4 = v1.get$x();
      t5 = v1.get$y();
      if (typeof t5 !== 'number') return this.renderParticle$4$bailout(14, t1, v1, t4, t5, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      t1.moveTo$2(t4, t5 - 10);
      t4 = v1.get$x();
      var t6 = v1.get$y();
      if (typeof t6 !== 'number') return this.renderParticle$4$bailout(15, t1, t6, t4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      t1.lineTo$2(t4, t6 + 10);
      t1.closePath$0();
      t1.set$strokeStyle('rgb(255,255,0)');
      t1.stroke$0();
    }
  } else {
    if (typeof material === 'object' && material !== null && !!material.is$ParticleCanvasMaterial) {
      t1 = element.get$scale().get$x();
      if (typeof t1 !== 'number') return this.renderParticle$4$bailout(16, v1, element, t1, material, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      t2 = this._canvasWidthHalf;
      if (typeof t2 !== 'number') return this.renderParticle$4$bailout(17, v1, element, t1, t2, material, 0, 0, 0, 0, 0, 0, 0, 0);
      width = t1 * t2;
      t2 = element.get$scale().get$y();
      if (typeof t2 !== 'number') return this.renderParticle$4$bailout(18, v1, element, material, width, t2, 0, 0, 0, 0, 0, 0, 0, 0);
      t1 = this._canvasHeightHalf;
      if (typeof t1 !== 'number') return this.renderParticle$4$bailout(19, v1, element, t1, width, t2, material, 0, 0, 0, 0, 0, 0, 0);
      height = t2 * t1;
      t1 = this._bboxRect;
      t2 = v1.get$x();
      if (typeof t2 !== 'number') return this.renderParticle$4$bailout(20, v1, element, t1, width, material, height, t2, 0, 0, 0, 0, 0, 0);
      t2 -= width;
      t3 = v1.get$y();
      if (typeof t3 !== 'number') return this.renderParticle$4$bailout(21, v1, element, t1, width, material, height, t2, t3, 0, 0, 0, 0, 0);
      t3 -= height;
      t4 = v1.get$x();
      if (typeof t4 !== 'number') return this.renderParticle$4$bailout(22, v1, element, t1, t4, t3, width, material, height, t2, 0, 0, 0, 0);
      t4 += width;
      t5 = v1.get$y();
      if (typeof t5 !== 'number') return this.renderParticle$4$bailout(23, v1, element, t1, t3, width, t5, t4, material, height, t2, 0, 0, 0);
      t1.setValues$4(t2, t3, t4, t5 + height);
      if (this._clipRect.intersects$1(t1) !== true) return;
      t1 = material.color;
      this.setStrokeStyle$1(t1.getContextStyle$0());
      this.setFillStyle$1(t1.getContextStyle$0());
      t2 = this._context;
      t2.save$0();
      t2.translate$2(v1.get$x(), v1.get$y());
      t3 = element.get$rotation();
      if (typeof t3 !== 'number') return this.renderParticle$4$bailout(24, t3, material, height, width, t2, 0, 0, 0, 0, 0, 0, 0, 0);
      t2.rotate$1(-t3);
      t2.scale$2(width, height);
      material.program$1(t2);
      t2.restore$0();
    }
  }
 },
 renderParticle$4$bailout: function(state, env0, env1, env2, env3, env4, env5, env6, env7, env8, env9, env10, env11, env12) {
  switch (state) {
    case 1:
      var v1 = env0;
      var element = env1;
      bitmap = env2;
      t1 = env3;
      break;
    case 2:
      v1 = env0;
      element = env1;
      t1 = env2;
      bitmapWidth = env3;
      bitmap = env4;
      break;
    case 3:
      v1 = env0;
      element = env1;
      bitmap = env2;
      bitmapWidth = env3;
      bitmapHeight = env4;
      t1 = env5;
      break;
    case 4:
      v1 = env0;
      element = env1;
      bitmap = env2;
      bitmapWidth = env3;
      bitmapHeight = env4;
      t2 = env5;
      t1 = env6;
      break;
    case 5:
      v1 = env0;
      element = env1;
      t2 = env2;
      scaleX = env3;
      bitmap = env4;
      bitmapWidth = env5;
      bitmapHeight = env6;
      break;
    case 6:
      v1 = env0;
      element = env1;
      t2 = env2;
      scaleX = env3;
      bitmap = env4;
      bitmapWidth = env5;
      bitmapHeight = env6;
      t1 = env7;
      break;
    case 7:
      v1 = env0;
      element = env1;
      scaleX = env2;
      bitmap = env3;
      scaleY = env4;
      width = env5;
      bitmapWidth = env6;
      height = env7;
      t2 = env8;
      bitmapHeight = env9;
      t1 = env10;
      break;
    case 8:
      v1 = env0;
      element = env1;
      scaleX = env2;
      scaleY = env3;
      width = env4;
      height = env5;
      t2 = env6;
      t3 = env7;
      bitmap = env8;
      bitmapWidth = env9;
      bitmapHeight = env10;
      t1 = env11;
      break;
    case 9:
      v1 = env0;
      element = env1;
      scaleX = env2;
      scaleY = env3;
      width = env4;
      height = env5;
      t2 = env6;
      t3 = env7;
      t4 = env8;
      bitmap = env9;
      bitmapWidth = env10;
      bitmapHeight = env11;
      t1 = env12;
      break;
    case 10:
      v1 = env0;
      element = env1;
      scaleX = env2;
      scaleY = env3;
      height = env4;
      t2 = env5;
      t3 = env6;
      t4 = env7;
      bitmap = env8;
      t5 = env9;
      bitmapWidth = env10;
      bitmapHeight = env11;
      t1 = env12;
      break;
    case 11:
      v1 = env0;
      t1 = env1;
      scaleX = env2;
      bitmap = env3;
      scaleY = env4;
      bitmapWidth = env5;
      t2 = env6;
      bitmapHeight = env7;
      break;
    case 12:
      t1 = env0;
      v1 = env1;
      t2 = env2;
      break;
    case 13:
      t1 = env0;
      v1 = env1;
      t3 = env2;
      break;
    case 14:
      t1 = env0;
      v1 = env1;
      t4 = env2;
      t5 = env3;
      break;
    case 15:
      t1 = env0;
      t6 = env1;
      t4 = env2;
      break;
    case 16:
      v1 = env0;
      element = env1;
      t1 = env2;
      var material = env3;
      break;
    case 17:
      v1 = env0;
      element = env1;
      t1 = env2;
      t2 = env3;
      material = env4;
      break;
    case 18:
      v1 = env0;
      element = env1;
      material = env2;
      width = env3;
      t2 = env4;
      break;
    case 19:
      v1 = env0;
      element = env1;
      t1 = env2;
      width = env3;
      t2 = env4;
      material = env5;
      break;
    case 20:
      v1 = env0;
      element = env1;
      t1 = env2;
      width = env3;
      material = env4;
      height = env5;
      t2 = env6;
      break;
    case 21:
      v1 = env0;
      element = env1;
      t1 = env2;
      width = env3;
      material = env4;
      height = env5;
      t2 = env6;
      t3 = env7;
      break;
    case 22:
      v1 = env0;
      element = env1;
      t1 = env2;
      t4 = env3;
      t3 = env4;
      width = env5;
      material = env6;
      height = env7;
      t2 = env8;
      break;
    case 23:
      v1 = env0;
      element = env1;
      t1 = env2;
      t3 = env3;
      width = env4;
      t5 = env5;
      t4 = env6;
      material = env7;
      height = env8;
      t2 = env9;
      break;
    case 24:
      t3 = env0;
      material = env1;
      height = env2;
      width = env3;
      t2 = env4;
      break;
  }
  switch (state) {
    case 0:
      this.setOpacity$1(material.get$opacity());
      this.setBlending$1(material.get$blending());
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
      if (state == 1 || state == 2 || state == 3 || state == 4 || state == 5 || state == 6 || state == 7 || state == 8 || state == 9 || state == 10 || state == 11 || state == 12 || state == 13 || state == 14 || state == 15 || (state == 0 && ((typeof material === 'object' && material !== null) && !!material.is$ParticleBasicMaterial))) {
        switch (state) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
            if (state == 1 || state == 2 || state == 3 || state == 4 || state == 5 || state == 6 || state == 7 || state == 8 || state == 9 || state == 10 || state == 11 || (state == 0 && material.get$map() === true)) {
              switch (state) {
                case 0:
                  var bitmap = material.get$map().get$image();
                  var t1 = bitmap.get$width();
                case 1:
                  state = 0;
                  var bitmapWidth = $.shr(t1, 1);
                  t1 = bitmap.get$height();
                case 2:
                  state = 0;
                  var bitmapHeight = $.shr(t1, 1);
                  t1 = element.get$scale().get$x();
                case 3:
                  state = 0;
                  var t2 = this._canvasWidthHalf;
                case 4:
                  state = 0;
                  var scaleX = $.mul(t1, t2);
                  t2 = element.get$scale().get$y();
                case 5:
                  state = 0;
                  t1 = this._canvasHeightHalf;
                case 6:
                  state = 0;
                  var scaleY = $.mul(t2, t1);
                  var width = $.mul(scaleX, bitmapWidth);
                  var height = $.mul(scaleY, bitmapHeight);
                  t1 = this._bboxRect;
                  t2 = v1.get$x();
                case 7:
                  state = 0;
                  t2 = $.sub(t2, width);
                  var t3 = v1.get$y();
                case 8:
                  state = 0;
                  t3 = $.sub(t3, height);
                  var t4 = v1.get$x();
                case 9:
                  state = 0;
                  t4 = $.add(t4, width);
                  var t5 = v1.get$y();
                case 10:
                  state = 0;
                  t1.setValues$4(t2, t3, t4, $.add(t5, height));
                  if (this._clipRect.intersects$1(t1) !== true) return;
                  t1 = this._context;
                  t1.save$0();
                  t1.translate$2(v1.get$x(), v1.get$y());
                  t2 = element.get$rotation();
                case 11:
                  state = 0;
                  t1.rotate$1($.neg(t2));
                  t1.scale$2(scaleX, $.neg(scaleY));
                  t1.translate$2($.neg(bitmapWidth), $.neg(bitmapHeight));
                  t1.drawImage$3(bitmap, 0, 0);
                  t1.restore$0();
              }
            }
          case 12:
          case 13:
          case 14:
          case 15:
            if (state == 12 || state == 13 || state == 14 || state == 15 || (state == 0 && this.debug === true)) {
              switch (state) {
                case 0:
                  t1 = this._context;
                  t1.beginPath$0();
                  t2 = v1.get$x();
                case 12:
                  state = 0;
                  t1.moveTo$2($.sub(t2, 10), v1.get$y());
                  t3 = v1.get$x();
                case 13:
                  state = 0;
                  t1.lineTo$2($.add(t3, 10), v1.get$y());
                  t4 = v1.get$x();
                  t5 = v1.get$y();
                case 14:
                  state = 0;
                  t1.moveTo$2(t4, $.sub(t5, 10));
                  t4 = v1.get$x();
                  var t6 = v1.get$y();
                case 15:
                  state = 0;
                  t1.lineTo$2(t4, $.add(t6, 10));
                  t1.closePath$0();
                  t1.set$strokeStyle('rgb(255,255,0)');
                  t1.stroke$0();
              }
            }
        }
      } else {
        switch (state) {
          case 0:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
          case 24:
            if (state == 16 || state == 17 || state == 18 || state == 19 || state == 20 || state == 21 || state == 22 || state == 23 || state == 24 || (state == 0 && ((typeof material === 'object' && material !== null) && !!material.is$ParticleCanvasMaterial))) {
              switch (state) {
                case 0:
                  t1 = element.get$scale().get$x();
                case 16:
                  state = 0;
                  t2 = this._canvasWidthHalf;
                case 17:
                  state = 0;
                  width = $.mul(t1, t2);
                  t2 = element.get$scale().get$y();
                case 18:
                  state = 0;
                  t1 = this._canvasHeightHalf;
                case 19:
                  state = 0;
                  height = $.mul(t2, t1);
                  t1 = this._bboxRect;
                  t2 = v1.get$x();
                case 20:
                  state = 0;
                  t2 = $.sub(t2, width);
                  t3 = v1.get$y();
                case 21:
                  state = 0;
                  t3 = $.sub(t3, height);
                  t4 = v1.get$x();
                case 22:
                  state = 0;
                  t4 = $.add(t4, width);
                  t5 = v1.get$y();
                case 23:
                  state = 0;
                  t1.setValues$4(t2, t3, t4, $.add(t5, height));
                  if (this._clipRect.intersects$1(t1) !== true) return;
                  t1 = material.color;
                  this.setStrokeStyle$1(t1.getContextStyle$0());
                  this.setFillStyle$1(t1.getContextStyle$0());
                  t2 = this._context;
                  t2.save$0();
                  t2.translate$2(v1.get$x(), v1.get$y());
                  t3 = element.get$rotation();
                case 24:
                  state = 0;
                  t2.rotate$1($.neg(t3));
                  t2.scale$2(width, height);
                  material.program$1(t2);
                  t2.restore$0();
              }
            }
        }
      }
  }
 },
 calculateLight$4: function(lights, position, normal, color) {
  if (typeof lights !== 'string' && (typeof lights !== 'object' || lights === null || (lights.constructor !== Array && !lights.is$JavaScriptIndexingBehavior()))) return this.calculateLight$4$bailout(1, lights, position, normal, color);
  var ll = lights.length;
  for (var t1 = this._vector3, amount = null, lightPosition = null, light = null, lightColor = null, l = 0; l < ll; ++l) {
    var t2 = lights.length;
    if (l < 0 || l >= t2) throw $.ioore(l);
    light = lights[l];
    lightColor = light.get$color();
    if (typeof light === 'object' && light !== null && !!light.is$DirectionalLight) {
      lightPosition = light.matrixWorld.getPosition$0();
      amount = normal.dot$1(lightPosition);
      if ($.leB(amount, 0)) continue;
      amount = $.mul(amount, light.get$intensity());
      color.set$r($.add(color.get$r(), $.mul(lightColor.get$r(), amount)));
      color.set$g($.add(color.get$g(), $.mul(lightColor.get$g(), amount)));
      color.set$b($.add(color.get$b(), $.mul(lightColor.get$b(), amount)));
    } else {
      if (typeof light === 'object' && light !== null && !!light.is$PointLight) {
        lightPosition = light.matrixWorld.getPosition$0();
        amount = normal.dot$1(t1.sub$2(lightPosition, position).normalize$0());
        if ($.leB(amount, 0)) continue;
        if ($.eqB(light.get$distance(), 0)) t2 = 1;
        else {
          t2 = $.Math_min($.div(position.distanceTo$1(lightPosition), light.get$distance()), 1);
          if (typeof t2 !== 'number') throw $.iae(t2);
          t2 = 1 - t2;
        }
        amount = $.mul(amount, t2);
        if ($.eqB(amount, 0)) continue;
        amount = $.mul(amount, light.get$intensity());
        color.set$r($.add(color.get$r(), $.mul(lightColor.get$r(), amount)));
        color.set$g($.add(color.get$g(), $.mul(lightColor.get$g(), amount)));
        color.set$b($.add(color.get$b(), $.mul(lightColor.get$b(), amount)));
      }
    }
  }
 },
 calculateLight$4$bailout: function(state, lights, position, normal, color) {
  var ll = $.get$length(lights);
  for (var t1 = this._vector3, amount = null, lightPosition = null, light = null, lightColor = null, l = 0; $.ltB(l, ll); ++l) {
    light = $.index(lights, l);
    lightColor = light.get$color();
    if (typeof light === 'object' && light !== null && !!light.is$DirectionalLight) {
      lightPosition = light.get$matrixWorld().getPosition$0();
      amount = normal.dot$1(lightPosition);
      if ($.leB(amount, 0)) continue;
      amount = $.mul(amount, light.get$intensity());
      color.set$r($.add(color.get$r(), $.mul(lightColor.get$r(), amount)));
      color.set$g($.add(color.get$g(), $.mul(lightColor.get$g(), amount)));
      color.set$b($.add(color.get$b(), $.mul(lightColor.get$b(), amount)));
    } else {
      if (typeof light === 'object' && light !== null && !!light.is$PointLight) {
        lightPosition = light.get$matrixWorld().getPosition$0();
        amount = normal.dot$1(t1.sub$2(lightPosition, position).normalize$0());
        if ($.leB(amount, 0)) continue;
        if ($.eqB(light.get$distance(), 0)) var t2 = 1;
        else {
          t2 = $.Math_min($.div(position.distanceTo$1(lightPosition), light.get$distance()), 1);
          if (typeof t2 !== 'number') throw $.iae(t2);
          t2 = 1 - t2;
        }
        amount = $.mul(amount, t2);
        if ($.eqB(amount, 0)) continue;
        amount = $.mul(amount, light.get$intensity());
        color.set$r($.add(color.get$r(), $.mul(lightColor.get$r(), amount)));
        color.set$g($.add(color.get$g(), $.mul(lightColor.get$g(), amount)));
        color.set$b($.add(color.get$b(), $.mul(lightColor.get$b(), amount)));
      }
    }
  }
 },
 calculateLights$1: function(lights) {
  if (typeof lights !== 'string' && (typeof lights !== 'object' || lights === null || (lights.constructor !== Array && !lights.is$JavaScriptIndexingBehavior()))) return this.calculateLights$1$bailout(1, lights);
  var t1 = this._ambientLight;
  t1.setRGB$3(0, 0, 0);
  var t2 = this._directionalLights;
  t2.setRGB$3(0, 0, 0);
  var t3 = this._pointLights;
  t3.setRGB$3(0, 0, 0);
  var ll = lights.length;
  for (var light = null, lightColor = null, l = 0; l < ll; ++l) {
    var t4 = lights.length;
    if (l < 0 || l >= t4) throw $.ioore(l);
    light = lights[l];
    lightColor = light.get$color();
    if (typeof light === 'object' && light !== null && !!light.is$AmbientLight) {
      t1.r = $.add(t1.r, lightColor.get$r());
      t1.g = $.add(t1.g, lightColor.get$g());
      t1.b = $.add(t1.b, lightColor.get$b());
    } else {
      if (typeof light === 'object' && light !== null && !!light.is$DirectionalLight) {
        t2.r = $.add(t2.r, lightColor.get$r());
        t2.g = $.add(t2.g, lightColor.get$g());
        t2.b = $.add(t2.b, lightColor.get$b());
      } else {
        if (typeof light === 'object' && light !== null && !!light.is$PointLight) {
          t3.r = $.add(t3.r, lightColor.get$r());
          t3.g = $.add(t3.g, lightColor.get$g());
          t3.b = $.add(t3.b, lightColor.get$b());
        }
      }
    }
  }
 },
 calculateLights$1$bailout: function(state, lights) {
  var t1 = this._ambientLight;
  t1.setRGB$3(0, 0, 0);
  var t2 = this._directionalLights;
  t2.setRGB$3(0, 0, 0);
  var t3 = this._pointLights;
  t3.setRGB$3(0, 0, 0);
  var ll = $.get$length(lights);
  for (var light = null, lightColor = null, l = 0; $.ltB(l, ll); ++l) {
    light = $.index(lights, l);
    lightColor = light.get$color();
    if (typeof light === 'object' && light !== null && !!light.is$AmbientLight) {
      t1.set$r($.add(t1.get$r(), lightColor.get$r()));
      t1.set$g($.add(t1.get$g(), lightColor.get$g()));
      t1.set$b($.add(t1.get$b(), lightColor.get$b()));
    } else {
      if (typeof light === 'object' && light !== null && !!light.is$DirectionalLight) {
        t2.set$r($.add(t2.get$r(), lightColor.get$r()));
        t2.set$g($.add(t2.get$g(), lightColor.get$g()));
        t2.set$b($.add(t2.get$b(), lightColor.get$b()));
      } else {
        if (typeof light === 'object' && light !== null && !!light.is$PointLight) {
          t3.set$r($.add(t3.get$r(), lightColor.get$r()));
          t3.set$g($.add(t3.get$g(), lightColor.get$g()));
          t3.set$b($.add(t3.get$b(), lightColor.get$b()));
        }
      }
    }
  }
 },
 render$2: function(scene, camera) {
  this._camera = camera;
  if (this._autoClear) this.clear$0();
  else this._context.setTransform$6(1, 0, 0, -1, this._canvasWidthHalf, this._canvasHeightHalf);
  this._info.render.reset$0();
  this._renderData = this._projector.projectScene$3(scene, camera, this._sortElements);
  this._lib0_elements = this._renderData.get$elements();
  this._lights = this._renderData.get$lights();
  var t1 = this.debug === true;
  if (t1) {
    var t2 = this._context;
    t2.set$fillStyle('rgba( 0, 255, 255, 0.5 )');
    var t3 = this._clipRect;
    t2.fillRect$4(t3.getX$0(), t3.getY$0(), t3.getWidth$0(), t3.getHeight$0());
  }
  this._enableLighting = $.gt($.get$length(this._lights), 0);
  this._enableLighting && this.calculateLights$1(this._lights);
  var el = $.get$length(this._lib0_elements);
  if (typeof el !== 'number') return this.render$2$bailout(1, scene, t1, el);
  for (t2 = this._bboxRect, t3 = this._clipRect, t4 = this._v5, t5 = this._v6, t6 = this._context, t7 = this._clearRect, t8 = t4.positionScreen, t9 = t5.positionScreen, e = 0, element = null, material = null; e < el; ++e) {
    element = $.index(this._lib0_elements, e);
    material = element.get$material();
    if (typeof material === 'object' && material !== null && !!material.is$MeshFaceMaterial) material = element.get$faceMaterial();
    if (material == null || $.eqB(material.get$opacity(), 0)) continue;
    t2.empty$0();
    if (typeof element === 'object' && element !== null && !!element.is$RenderableParticle) {
      element.x = $.mul(element.x, this._canvasWidthHalf);
      element.y = $.mul(element.y, this._canvasHeightHalf);
      this.renderParticle$4(element, element, material, scene);
    } else {
      if (typeof element === 'object' && element !== null && !!element.is$RenderableLine) {
        var _v1 = element.v1;
        var _v2 = element.v2;
        var t10 = _v1.get$positionScreen();
        t10.set$x($.mul(t10.get$x(), this._canvasWidthHalf));
        t10 = _v1.get$positionScreen();
        t10.set$y($.mul(t10.get$y(), this._canvasHeightHalf));
        t10 = _v2.positionScreen;
        t10.set$x($.mul(t10.get$x(), this._canvasWidthHalf));
        t10.set$y($.mul(t10.get$y(), this._canvasHeightHalf));
        t2.addPoint$2(_v1.get$positionScreen().get$x(), _v1.get$positionScreen().get$y());
        t2.addPoint$2(t10.get$x(), t10.get$y());
        t3.intersects$1(t2) === true && this.renderLine$5(_v1, _v2, element, material, scene);
      } else {
        if (typeof element === 'object' && element !== null && !!element.is$RenderableFace3) {
          _v1 = element.get$v1();
          _v2 = element.get$v2();
          var _v3 = element.get$v3();
          t10 = _v1.get$positionScreen();
          t10.set$x($.mul(t10.get$x(), this._canvasWidthHalf));
          t10 = _v1.get$positionScreen();
          t10.set$y($.mul(t10.get$y(), this._canvasHeightHalf));
          t10 = _v2.get$positionScreen();
          t10.set$x($.mul(t10.get$x(), this._canvasWidthHalf));
          t10 = _v2.get$positionScreen();
          t10.set$y($.mul(t10.get$y(), this._canvasHeightHalf));
          t10 = _v3.get$positionScreen();
          t10.set$x($.mul(t10.get$x(), this._canvasWidthHalf));
          t10 = _v3.get$positionScreen();
          t10.set$y($.mul(t10.get$y(), this._canvasHeightHalf));
          if (material.get$overdraw() === true) {
            this.expand$2(_v1.get$positionScreen(), _v2.get$positionScreen());
            this.expand$2(_v2.get$positionScreen(), _v3.get$positionScreen());
            this.expand$2(_v3.get$positionScreen(), _v1.get$positionScreen());
          }
          t2.add3Points$6(_v1.get$positionScreen().get$x(), _v1.get$positionScreen().get$y(), _v2.get$positionScreen().get$x(), _v2.get$positionScreen().get$y(), _v3.get$positionScreen().get$x(), _v3.get$positionScreen().get$y());
          t3.intersects$1(t2) === true && this.renderFace3$9(_v1, _v2, _v3, 0, 1, 2, element, material, scene);
        } else {
          if (typeof element === 'object' && element !== null && !!element.is$RenderableFace4) {
            _v1 = element.get$v1();
            _v2 = element.get$v2();
            _v3 = element.get$v3();
            var _v4 = element.get$v4();
            t10 = _v1.get$positionScreen();
            t10.set$x($.mul(t10.get$x(), this._canvasWidthHalf));
            t10 = _v1.get$positionScreen();
            t10.set$y($.mul(t10.get$y(), this._canvasHeightHalf));
            t10 = _v2.get$positionScreen();
            t10.set$x($.mul(t10.get$x(), this._canvasWidthHalf));
            t10 = _v2.get$positionScreen();
            t10.set$y($.mul(t10.get$y(), this._canvasHeightHalf));
            t10 = _v3.get$positionScreen();
            t10.set$x($.mul(t10.get$x(), this._canvasWidthHalf));
            t10 = _v3.get$positionScreen();
            t10.set$y($.mul(t10.get$y(), this._canvasHeightHalf));
            t10 = _v4.get$positionScreen();
            t10.set$x($.mul(t10.get$x(), this._canvasWidthHalf));
            t10 = _v4.get$positionScreen();
            t10.set$y($.mul(t10.get$y(), this._canvasHeightHalf));
            t8.copy$1(_v2.get$positionScreen());
            t9.copy$1(_v4.get$positionScreen());
            if (material.get$overdraw() === true) {
              this.expand$2(_v1.get$positionScreen(), _v2.get$positionScreen());
              this.expand$2(_v2.get$positionScreen(), _v4.get$positionScreen());
              this.expand$2(_v4.get$positionScreen(), _v1.get$positionScreen());
              this.expand$2(_v3.get$positionScreen(), t8);
              this.expand$2(_v3.get$positionScreen(), t9);
            }
            t2.addPoint$2(_v1.get$positionScreen().get$x(), _v1.get$positionScreen().get$y());
            t2.addPoint$2(_v2.get$positionScreen().get$x(), _v2.get$positionScreen().get$y());
            t2.addPoint$2(_v3.get$positionScreen().get$x(), _v3.get$positionScreen().get$y());
            t2.addPoint$2(_v4.get$positionScreen().get$x(), _v4.get$positionScreen().get$y());
            t3.intersects$1(t2) === true && this.renderFace4$9(_v1, _v2, _v3, _v4, t4, t5, element, material, scene);
          }
        }
      }
    }
    if (t1) {
      t6.set$lineWidth(1);
      t6.set$strokeStyle('rgba( 0, 255, 0, 0.5 )');
      t6.strokeRect$4(t2.getX$0(), t2.getY$0(), t2.getWidth$0(), t2.getHeight$0());
    }
    t7.addRectangle$1(t2);
  }
  if (t1) {
    t6.set$lineWidth(1);
    t6.set$strokeStyle('rgba( 255, 0, 0, 0.5 )');
    t6.strokeRect$4(t7.getX$0(), t7.getY$0(), t7.getWidth$0(), t7.getHeight$0());
  }
  t6.setTransform$6(1, 0, 0, 1, 0, 0);
  var e, t7, t4, t8, t9, t6, t5, element, material;
 },
 render$2$bailout: function(state, scene, t1, el) {
  for (var t2 = this._bboxRect, t3 = this._clipRect, t4 = this._v5, t5 = this._v6, t6 = this._context, t7 = this._clearRect, e = 0, element = null, material = null; $.ltB(e, el); ++e) {
    element = $.index(this._lib0_elements, e);
    material = element.get$material();
    if (typeof material === 'object' && material !== null && !!material.is$MeshFaceMaterial) material = element.get$faceMaterial();
    if (material == null || $.eqB(material.get$opacity(), 0)) continue;
    t2.empty$0();
    if (typeof element === 'object' && element !== null && !!element.is$RenderableParticle) {
      element.x = $.mul(element.get$x(), this._canvasWidthHalf);
      element.y = $.mul(element.y, this._canvasHeightHalf);
      this.renderParticle$4(element, element, material, scene);
    } else {
      if (typeof element === 'object' && element !== null && !!element.is$RenderableLine) {
        var _v1 = element.get$v1();
        var _v2 = element.v2;
        var t8 = _v1.get$positionScreen();
        t8.set$x($.mul(t8.get$x(), this._canvasWidthHalf));
        t8 = _v1.get$positionScreen();
        t8.set$y($.mul(t8.get$y(), this._canvasHeightHalf));
        t8 = _v2.get$positionScreen();
        t8.set$x($.mul(t8.get$x(), this._canvasWidthHalf));
        t8 = _v2.get$positionScreen();
        t8.set$y($.mul(t8.get$y(), this._canvasHeightHalf));
        t2.addPoint$2(_v1.get$positionScreen().get$x(), _v1.get$positionScreen().get$y());
        t2.addPoint$2(_v2.get$positionScreen().get$x(), _v2.get$positionScreen().get$y());
        t3.intersects$1(t2) === true && this.renderLine$5(_v1, _v2, element, material, scene);
      } else {
        if (typeof element === 'object' && element !== null && !!element.is$RenderableFace3) {
          _v1 = element.get$v1();
          _v2 = element.get$v2();
          var _v3 = element.get$v3();
          t8 = _v1.get$positionScreen();
          t8.set$x($.mul(t8.get$x(), this._canvasWidthHalf));
          t8 = _v1.get$positionScreen();
          t8.set$y($.mul(t8.get$y(), this._canvasHeightHalf));
          t8 = _v2.get$positionScreen();
          t8.set$x($.mul(t8.get$x(), this._canvasWidthHalf));
          t8 = _v2.get$positionScreen();
          t8.set$y($.mul(t8.get$y(), this._canvasHeightHalf));
          t8 = _v3.get$positionScreen();
          t8.set$x($.mul(t8.get$x(), this._canvasWidthHalf));
          t8 = _v3.get$positionScreen();
          t8.set$y($.mul(t8.get$y(), this._canvasHeightHalf));
          if (material.get$overdraw() === true) {
            this.expand$2(_v1.get$positionScreen(), _v2.get$positionScreen());
            this.expand$2(_v2.get$positionScreen(), _v3.get$positionScreen());
            this.expand$2(_v3.get$positionScreen(), _v1.get$positionScreen());
          }
          t2.add3Points$6(_v1.get$positionScreen().get$x(), _v1.get$positionScreen().get$y(), _v2.get$positionScreen().get$x(), _v2.get$positionScreen().get$y(), _v3.get$positionScreen().get$x(), _v3.get$positionScreen().get$y());
          t3.intersects$1(t2) === true && this.renderFace3$9(_v1, _v2, _v3, 0, 1, 2, element, material, scene);
        } else {
          if (typeof element === 'object' && element !== null && !!element.is$RenderableFace4) {
            _v1 = element.get$v1();
            _v2 = element.get$v2();
            _v3 = element.get$v3();
            var _v4 = element.get$v4();
            t8 = _v1.get$positionScreen();
            t8.set$x($.mul(t8.get$x(), this._canvasWidthHalf));
            t8 = _v1.get$positionScreen();
            t8.set$y($.mul(t8.get$y(), this._canvasHeightHalf));
            t8 = _v2.get$positionScreen();
            t8.set$x($.mul(t8.get$x(), this._canvasWidthHalf));
            t8 = _v2.get$positionScreen();
            t8.set$y($.mul(t8.get$y(), this._canvasHeightHalf));
            t8 = _v3.get$positionScreen();
            t8.set$x($.mul(t8.get$x(), this._canvasWidthHalf));
            t8 = _v3.get$positionScreen();
            t8.set$y($.mul(t8.get$y(), this._canvasHeightHalf));
            t8 = _v4.get$positionScreen();
            t8.set$x($.mul(t8.get$x(), this._canvasWidthHalf));
            t8 = _v4.get$positionScreen();
            t8.set$y($.mul(t8.get$y(), this._canvasHeightHalf));
            t4.get$positionScreen().copy$1(_v2.get$positionScreen());
            t5.get$positionScreen().copy$1(_v4.get$positionScreen());
            if (material.get$overdraw() === true) {
              this.expand$2(_v1.get$positionScreen(), _v2.get$positionScreen());
              this.expand$2(_v2.get$positionScreen(), _v4.get$positionScreen());
              this.expand$2(_v4.get$positionScreen(), _v1.get$positionScreen());
              this.expand$2(_v3.get$positionScreen(), t4.get$positionScreen());
              this.expand$2(_v3.get$positionScreen(), t5.get$positionScreen());
            }
            t2.addPoint$2(_v1.get$positionScreen().get$x(), _v1.get$positionScreen().get$y());
            t2.addPoint$2(_v2.get$positionScreen().get$x(), _v2.get$positionScreen().get$y());
            t2.addPoint$2(_v3.get$positionScreen().get$x(), _v3.get$positionScreen().get$y());
            t2.addPoint$2(_v4.get$positionScreen().get$x(), _v4.get$positionScreen().get$y());
            t3.intersects$1(t2) === true && this.renderFace4$9(_v1, _v2, _v3, _v4, t4, t5, element, material, scene);
          }
        }
      }
    }
    if (t1) {
      t6.set$lineWidth(1);
      t6.set$strokeStyle('rgba( 0, 255, 0, 0.5 )');
      t6.strokeRect$4(t2.getX$0(), t2.getY$0(), t2.getWidth$0(), t2.getHeight$0());
    }
    t7.addRectangle$1(t2);
  }
  if (t1) {
    t6.set$lineWidth(1);
    t6.set$strokeStyle('rgba( 255, 0, 0, 0.5 )');
    t6.strokeRect$4(t7.getX$0(), t7.getY$0(), t7.getWidth$0(), t7.getHeight$0());
  }
  t6.setTransform$6(1, 0, 0, 1, 0, 0);
 },
 get$render: function() { return new $.BoundClosure1(this, 'render$2'); },
 clear$0: function() {
  var t1 = this._context;
  t1.setTransform$6(1, 0, 0, -1, this._canvasWidthHalf, this._canvasHeightHalf);
  var t2 = this._clearRect;
  if ($.isEmpty(t2) !== true) {
    t2.minSelf$1(this._clipRect);
    t2.inflate$1(2);
    this._clearOpacity < 1 && t1.clearRect$4($.floor(t2.getX$0()), $.floor(t2.getY$0()), $.floor(t2.getWidth$0()), $.floor(t2.getHeight$0()));
    if (this._clearOpacity > 0) {
      this.setBlending$1(0);
      this.setOpacity$1(1);
      var t3 = this._clearColor;
      this.setFillStyle$1('rgba(' + $.S($.floor($.mul(t3.get$r(), 255))) + ', ' + $.S($.floor($.mul(t3.get$g(), 255))) + ',' + $.S($.floor($.mul(t3.get$b(), 255))) + ',' + $.S(this._clearOpacity) + ')');
      t1.fillRect$4($.floor(t2.getX$0()), $.floor(t2.getY$0()), $.floor(t2.getWidth$0()), $.floor(t2.getHeight$0()));
    }
    t2.empty$0();
  }
 },
 setClearColor$2: function(color, opacity) {
  this._clearColor.copy$1(color);
  this._clearOpacity = opacity;
  this._clearRect.setValues$4($.neg(this._canvasWidthHalf), $.neg(this._canvasHeightHalf), this._canvasWidthHalf, this._canvasHeightHalf);
 },
 setSize$2: function(width, height) {
  this._canvasWidth = width;
  this._canvasHeight = height;
  this._canvasWidthHalf = $.floor($.div(this._canvasWidth, 2));
  this._canvasHeightHalf = $.floor($.div(this._canvasHeight, 2));
  var t1 = this._canvasWidth;
  var t2 = this._canvas;
  t2.set$width(t1);
  t2.set$height(this._canvasHeight);
  this._clipRect.setValues$4($.neg(this._canvasWidthHalf), $.neg(this._canvasHeightHalf), this._canvasWidthHalf, this._canvasHeightHalf);
  this._clearRect.setValues$4($.neg(this._canvasWidthHalf), $.neg(this._canvasHeightHalf), this._canvasWidthHalf, this._canvasHeightHalf);
  this._contextGlobalAlpha = 1;
  this._contextGlobalCompositeOperation = 0;
  this._contextStrokeStyle = null;
  this._contextFillStyle = null;
  this._contextLineWidth = null;
  this._contextLineCap = null;
  this._contextLineJoin = null;
 },
 CanvasRenderer$1: function(parameters) {
  parameters = !(parameters == null) ? parameters : $.makeLiteralMap([]);
  this._projector = $.Projector$();
  var t1 = $.index(parameters, 'canvas');
  this._canvas = !(t1 == null) ? $.index(parameters, 'canvas') : $._ElementFactoryProvider_Element$tag('canvas');
  t1 = this._canvas;
  this._context = t1.getContext$1('2d');
  var t2 = $.index(parameters, 'debug');
  this.debug = !(t2 == null) && $.index(parameters, 'debug');
  this._clearColor = $.Color$(0);
  this._clearOpacity = 0;
  this._contextGlobalAlpha = 1;
  this._contextGlobalCompositeOperation = 0;
  this._contextStrokeStyle = null;
  this._contextFillStyle = null;
  this._contextLineWidth = null;
  this._contextLineCap = null;
  this._contextLineJoin = null;
  this._v5 = $.RenderableVertex$();
  this._v6 = $.RenderableVertex$();
  this._color = $.Color$(null);
  this._color1 = $.Color$(null);
  this._color2 = $.Color$(null);
  this._color3 = $.Color$(null);
  this._color4 = $.Color$(null);
  this._patterns = [];
  this._imagedatas = [];
  this._clipRect = $.Rectangle$();
  this._clearRect = $.Rectangle$();
  this._bboxRect = $.Rectangle$();
  this._enableLighting = false;
  this._ambientLight = $.Color$(null);
  this._directionalLights = $.Color$(null);
  this._pointLights = $.Color$(null);
  this._vector3 = $.Vector3$(0, 0, 0);
  this._gradientMapQuality = 16;
  this._pixelMap = $._ElementFactoryProvider_Element$tag('canvas');
  t2 = this._pixelMap;
  t2.set$height(2);
  t2.set$width(2);
  this._pixelMapContext = t2.getContext$1('2d');
  var t3 = this._pixelMapContext;
  t3.set$fillStyle('rgba(0,0,0,1)');
  t3.fillRect$4(0, 0, 2, 2);
  this._pixelMapImage = t3.getImageData$4(0, 0, 2, 2);
  this._pixelMapData = this._pixelMapImage.get$data();
  this._gradientMap = $._ElementFactoryProvider_Element$tag('canvas');
  var t4 = this._gradientMapQuality;
  var t5 = this._gradientMap;
  t5.set$height(t4);
  t5.set$width(t4);
  this._gradientMapContext = t5.getContext$1('2d');
  var t6 = this._gradientMapContext;
  t6.translate$2($.div($.neg(t4), 2), $.div($.neg(t4), 2));
  t6.scale$2(t4, t4);
  this._gradientMapQuality = $.sub(t4, 1);
  this.domElement = t1;
  this._autoClear = true;
  this._sortObjects = true;
  this._sortElements = true;
  this._info = $.CanvasRenderData$();
 }
};

$$.CanvasRenderData = {"":
 ["render?"],
 super: "Object",
 render$2: function(arg0, arg1) { return this.render.$call$2(arg0, arg1); },
 CanvasRenderData$0: function() {
  this.render = $.RenderInts$();
 }
};

$$.RenderInts = {"":
 ["faces=", "vertices="],
 super: "Object",
 reset$0: function() {
  this.vertices = 0;
  this.faces = 0;
 },
 RenderInts$0: function() {
  this.reset$0();
 }
};

$$.Scene = {"":
 ["__objectsRemoved", "__objectsAdded", "lights=", "objects=", "overrideMaterial", "fog", "_vector", "frustumCulled", "receiveShadow", "castShadow", "visible", "boundRadiusScale", "boundRadius", "useQuaternion", "quaternion", "matrixWorldNeedsUpdate", "matrixAutoUpdate", "matrixRotationWorld", "matrixWorld", "matrix", "renderDepth", "rotationAutoUpdate", "flipSided", "doubleSided", "dynamic", "eulerOrder", "scale", "rotation", "position", "up", "children", "parent", "id", "_name"],
 super: "Object3D",
 removeObject$1: function(object) {
  if (typeof object === 'object' && object !== null && !!object.is$Light) {
    var i = $.indexOf$1(this.lights, object);
    !(i === -1) && $.removeRange(this.lights, i, 1);
  } else {
    if (!((typeof object === 'object' && object !== null) && !!object.is$Camera)) {
      i = $.indexOf$1(this.objects, object);
      if (!(i === -1)) {
        $.removeRange(this.objects, i, 1);
        $.add$1(this.__objectsRemoved, object);
        var t1 = this.__objectsAdded;
        var ai = $.indexOf$1(t1, object);
        !(ai === -1) && $.removeRange(t1, ai, 1);
      }
    }
  }
  var c = 0;
  while (true) {
    t1 = $.get$length(object.get$children());
    if (typeof t1 !== 'number') return this.removeObject$1$bailout(1, object, c, t1);
    if (!(c < t1)) break;
    t1 = object.get$children();
    if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.removeObject$1$bailout(2, object, c, t1);
    var t2 = t1.length;
    if (c < 0 || c >= t2) throw $.ioore(c);
    this.removeObject$1(t1[c]);
    ++c;
  }
 },
 removeObject$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var object = env0;
      c = env1;
      t1 = env2;
      break;
    case 2:
      object = env0;
      c = env1;
      t1 = env2;
      break;
  }
  switch (state) {
    case 0:
      if (typeof object === 'object' && object !== null && !!object.is$Light) {
        var i = $.indexOf$1(this.lights, object);
        !(i === -1) && $.removeRange(this.lights, i, 1);
      } else {
        if (!((typeof object === 'object' && object !== null) && !!object.is$Camera)) {
          i = $.indexOf$1(this.objects, object);
          if (!(i === -1)) {
            $.removeRange(this.objects, i, 1);
            $.add$1(this.__objectsRemoved, object);
            var t1 = this.__objectsAdded;
            var ai = $.indexOf$1(t1, object);
            !(ai === -1) && $.removeRange(t1, ai, 1);
          }
        }
      }
      var c = 0;
    case 1:
    case 2:
      L0: while (true) {
        switch (state) {
          case 0:
            t1 = $.get$length(object.get$children());
          case 1:
            state = 0;
            if (!$.ltB(c, t1)) break L0;
            t1 = object.get$children();
          case 2:
            state = 0;
            this.removeObject$1($.index(t1, c));
            ++c;
        }
      }
  }
 },
 addObject$1: function(object) {
  if (typeof object === 'object' && object !== null && !!object.is$Light) {
    var t1 = $.indexOf$1(this.lights, object);
    t1 === -1 && $.add$1(this.lights, object);
  } else {
    if (!(typeof object === 'object' && object !== null && !!object.is$Camera || typeof object === 'object' && object !== null && !!object.is$Bone)) {
      t1 = $.indexOf$1(this.objects, object);
      if (t1 === -1) {
        $.add$1(this.objects, object);
        $.add$1(this.__objectsAdded, object);
        t1 = this.__objectsRemoved;
        var i = $.indexOf$1(t1, object);
        !(i === -1) && $.removeRange(t1, i, 1);
      }
    }
  }
  var c = 0;
  while (true) {
    t1 = $.get$length(object.get$children());
    if (typeof t1 !== 'number') return this.addObject$1$bailout(1, object, c, t1);
    if (!(c < t1)) break;
    t1 = object.get$children();
    if (typeof t1 !== 'string' && (typeof t1 !== 'object' || t1 === null || (t1.constructor !== Array && !t1.is$JavaScriptIndexingBehavior()))) return this.addObject$1$bailout(2, object, c, t1);
    var t2 = t1.length;
    if (c < 0 || c >= t2) throw $.ioore(c);
    this.addObject$1(t1[c]);
    ++c;
  }
 },
 addObject$1$bailout: function(state, env0, env1, env2) {
  switch (state) {
    case 1:
      var object = env0;
      c = env1;
      t1 = env2;
      break;
    case 2:
      object = env0;
      c = env1;
      t1 = env2;
      break;
  }
  switch (state) {
    case 0:
      if (typeof object === 'object' && object !== null && !!object.is$Light) {
        var t1 = $.indexOf$1(this.lights, object);
        t1 === -1 && $.add$1(this.lights, object);
      } else {
        if (!(typeof object === 'object' && object !== null && !!object.is$Camera || typeof object === 'object' && object !== null && !!object.is$Bone)) {
          t1 = $.indexOf$1(this.objects, object);
          if (t1 === -1) {
            $.add$1(this.objects, object);
            $.add$1(this.__objectsAdded, object);
            t1 = this.__objectsRemoved;
            var i = $.indexOf$1(t1, object);
            !(i === -1) && $.removeRange(t1, i, 1);
          }
        }
      }
      var c = 0;
    case 1:
    case 2:
      L0: while (true) {
        switch (state) {
          case 0:
            t1 = $.get$length(object.get$children());
          case 1:
            state = 0;
            if (!$.ltB(c, t1)) break L0;
            t1 = object.get$children();
          case 2:
            state = 0;
            this.addObject$1($.index(t1, c));
            ++c;
        }
      }
  }
 },
 Scene$0: function() {
  this.fog = null;
  this.overrideMaterial = null;
  this.matrixAutoUpdate = false;
  this.objects = [];
  this.lights = [];
  this.__objectsAdded = [];
  this.__objectsRemoved = [];
 },
 is$Scene: true
};

$$.Player = {"":
 ["controls", "rotation=", "position?"],
 super: "Object",
 onRight$0: function() {
  $.Log_debug('onRight');
  var t1 = this.position;
  t1.set$x($.add(t1.get$x(), 5));
 },
 get$onRight: function() { return new $.BoundClosure(this, 'onRight$0'); },
 onLeft$0: function() {
  $.Log_debug('onLeft');
  var t1 = this.position;
  t1.set$x($.sub(t1.get$x(), 5));
 },
 get$onLeft: function() { return new $.BoundClosure(this, 'onLeft$0'); },
 onBack$0: function() {
  $.Log_debug('onBack');
  var t1 = this.position;
  t1.set$z($.add(t1.get$z(), 5));
 },
 get$onBack: function() { return new $.BoundClosure(this, 'onBack$0'); },
 onForward$0: function() {
  $.Log_debug('onForward');
  var t1 = this.position;
  t1.set$z($.sub(t1.get$z(), 5));
 },
 get$onForward: function() { return new $.BoundClosure(this, 'onForward$0'); },
 update$0: function() {
 },
 Player$2: function(position, rotation) {
  this.position = position;
  this.rotation = rotation;
  this.controls = $.Controls$();
  var t1 = this.get$onForward();
  var t2 = this.controls;
  t2.set$forwardCallback(t1);
  t2.set$backCallback(this.get$onBack());
  t2.set$leftCallback(this.get$onLeft());
  t2.set$rightCallback(this.get$onRight());
  $.Log_debug('player position = ' + $.S(position.get$x()) + ', ' + $.S(position.get$y()) + ', ' + $.S(position.get$z()));
  $.Log_debug('player rotation = ' + $.S(rotation.get$x()) + ', ' + $.S(rotation.get$y()) + ', ' + $.S(rotation.get$z()));
 }
};

$$.Controls = {"":
 ["rightCallback!", "leftCallback!", "backCallback!", "forwardCallback!", "rightDown", "leftDown", "backDown", "forwardDown"],
 super: "Object",
 onKeyUp$1: function(event$) {
  switch (event$.get$keyCode()) {
    case 87:
    case 38:
      this.forwardDown = false;
      break;
    case 65:
    case 37:
      this.leftDown = false;
      break;
    case 83:
    case 40:
      this.backDown = false;
      break;
    case 68:
    case 39:
      this.rightDown = false;
      break;
  }
 },
 get$onKeyUp: function() { return new $.BoundClosure2(this, 'onKeyUp$1'); },
 onKeyDown$1: function(event$) {
  switch (event$.get$keyCode()) {
    case 87:
    case 38:
      if (this.forwardDown !== true) {
        var t1 = this.forwardCallback;
        var t2 = !(t1 == null);
        t1 = t2;
      } else t1 = false;
      t1 && this.forwardCallback$0();
      this.forwardDown = true;
      break;
    case 65:
    case 37:
      if (this.leftDown !== true) {
        t1 = this.leftCallback;
        t2 = !(t1 == null);
        t1 = t2;
      } else t1 = false;
      t1 && this.leftCallback$0();
      this.leftDown = true;
      break;
    case 83:
    case 40:
      if (this.backDown !== true) {
        t1 = this.backCallback;
        t2 = !(t1 == null);
        t1 = t2;
      } else t1 = false;
      t1 && this.backCallback$0();
      this.backDown = true;
      break;
    case 68:
    case 39:
      if (this.rightDown !== true) {
        t1 = this.rightCallback;
        t2 = !(t1 == null);
        t1 = t2;
      } else t1 = false;
      t1 && this.rightCallback$0();
      this.rightDown = true;
      break;
  }
 },
 get$onKeyDown: function() { return new $.BoundClosure2(this, 'onKeyDown$1'); },
 rightCallback$0: function() { return this.rightCallback.$call$0(); },
 leftCallback$0: function() { return this.leftCallback.$call$0(); },
 backCallback$0: function() { return this.backCallback.$call$0(); },
 forwardCallback$0: function() { return this.forwardCallback.$call$0(); },
 Controls$0: function() {
  this.forwardDown = false;
  this.backDown = false;
  this.leftDown = false;
  this.rightDown = false;
  $.add$1($.document().get$on().get$keyDown(), this.get$onKeyDown());
  $.add$1($.document().get$on().get$keyUp(), this.get$onKeyUp());
 }
};

$$.invokeClosure_anon = {"":
 ["closure_0"],
 super: "Closure",
 $call$0: function() {
  return this.closure_0.$call$0();
 }
};

$$.invokeClosure_anon0 = {"":
 ["closure_2", "arg1_1"],
 super: "Closure",
 $call$0: function() {
  return this.closure_2.$call$1(this.arg1_1);
 }
};

$$.invokeClosure_anon1 = {"":
 ["closure_5", "arg1_4", "arg2_3"],
 super: "Closure",
 $call$0: function() {
  return this.closure_5.$call$2(this.arg1_4, this.arg2_3);
 }
};

$$.Maps__emitMap_anon = {"":
 ["result_3", "box_0", "visiting_2"],
 super: "Closure",
 $call$2: function(k, v) {
  this.box_0.first_1 !== true && $.add$1(this.result_3, ', ');
  this.box_0.first_1 = false;
  $.Collections__emitObject(k, this.result_3, this.visiting_2);
  $.add$1(this.result_3, ': ');
  $.Collections__emitObject(v, this.result_3, this.visiting_2);
 }
};

$$.DoubleLinkedQueue_length__ = {"":
 ["box_0"],
 super: "Closure",
 $call$1: function(element) {
  var counter = $.add(this.box_0.counter_1, 1);
  this.box_0.counter_1 = counter;
 }
};

$$.LinkedHashMapImplementation_forEach__ = {"":
 ["f_0"],
 super: "Closure",
 $call$1: function(entry) {
  this.f_0.$call$2(entry.get$key(), entry.get$value());
 }
};

$$.FilteredElementList__filtered_anon = {"":
 [],
 super: "Closure",
 $call$1: function(n) {
  return typeof n === 'object' && n !== null && n.is$Element();
 }
};

$$._ChildrenElementList_filter_anon = {"":
 ["f_1", "output_0"],
 super: "Closure",
 $call$1: function(element) {
  this.f_1.$call$1(element) === true && $.add$1(this.output_0, element);
 }
};

$$.FilteredElementList_removeRange_anon = {"":
 [],
 super: "Closure",
 $call$1: function(el) {
  return el.remove$0();
 }
};

$$.HashSetImplementation_addAll__ = {"":
 ["this_0"],
 super: "Closure",
 $call$1: function(value) {
  this.this_0.add$1(value);
 }
};

$$.HashSetImplementation_forEach__ = {"":
 ["f_0"],
 super: "Closure",
 $call$2: function(key, value) {
  this.f_0.$call$1(key);
 }
};

$$.HashSetImplementation_filter__ = {"":
 ["result_1", "f_0"],
 super: "Closure",
 $call$2: function(key, value) {
  this.f_0.$call$1(key) === true && $.add$1(this.result_1, key);
 }
};

$$._StorageImpl_getValues_anon = {"":
 ["values_0"],
 super: "Closure",
 $call$2: function(k, v) {
  return $.add$1(this.values_0, v);
 }
};

$$.LinkedHashMapImplementation_getValues__ = {"":
 ["list_2", "box_0"],
 super: "Closure",
 $call$1: function(entry) {
  var t1 = this.list_2;
  var t2 = this.box_0.index_1;
  var index = $.add(t2, 1);
  this.box_0.index_1 = index;
  $.indexSet(t1, t2, entry.get$value());
 }
};

$$.HashMapImplementation_getValues__ = {"":
 ["list_2", "box_0"],
 super: "Closure",
 $call$2: function(key, value) {
  var t1 = this.list_2;
  var t2 = this.box_0.i_1;
  var i = $.add(t2, 1);
  this.box_0.i_1 = i;
  $.indexSet(t1, t2, value);
 }
};

$$._StorageImpl_getKeys_anon = {"":
 ["keys_0"],
 super: "Closure",
 $call$2: function(k, v) {
  return $.add$1(this.keys_0, k);
 }
};

$$.LinkedHashMapImplementation_getKeys__ = {"":
 ["list_2", "box_0"],
 super: "Closure",
 $call$1: function(entry) {
  var t1 = this.list_2;
  var t2 = this.box_0.index_10;
  var index = $.add(t2, 1);
  this.box_0.index_10 = index;
  $.indexSet(t1, t2, entry.get$key());
 }
};

$$.HashMapImplementation_getKeys__ = {"":
 ["list_2", "box_0"],
 super: "Closure",
 $call$2: function(key, value) {
  var t1 = this.list_2;
  var t2 = this.box_0.i_10;
  var i = $.add(t2, 1);
  this.box_0.i_10 = i;
  $.indexSet(t1, t2, key);
 }
};

$$._Copier_visitMap_anon = {"":
 ["this_2", "box_0"],
 super: "Closure",
 $call$2: function(key, val) {
  $.indexSet(this.box_0.copy_1, this.this_2._dispatch$1(key), this.this_2._dispatch$1(val));
 }
};

$$._EventLoop__runHelper_next = {"":
 ["this_0"],
 super: "Closure",
 $call$0: function() {
  if (this.this_0.runIteration$0() !== true) return;
  $._window().setTimeout$2(this, 0);
 }
};

Isolate.$defineClass('BoundClosure', 'Closure', ['self', 'target'], {
$call$0: function() { return this.self[this.target](); }
});
Isolate.$defineClass('BoundClosure0', 'Closure', ['self', 'target'], {
$call$3: function(p0, p1, p2) { return this.self[this.target](p0, p1, p2); }
});
Isolate.$defineClass('BoundClosure1', 'Closure', ['self', 'target'], {
$call$2: function(p0, p1) { return this.self[this.target](p0, p1); }
});
Isolate.$defineClass('BoundClosure2', 'Closure', ['self', 'target'], {
$call$1: function(p0) { return this.self[this.target](p0); }
});
$.mul$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) return a * b;
  return a.operator$mul$1(b);
};

$.startRootIsolate = function(entry) {
  var t1 = $._Manager$();
  $._globalState0(t1);
  if ($._globalState().get$isWorker() === true) return;
  var rootContext = $._IsolateContext$();
  $._globalState().set$rootContext(rootContext);
  $._fillStatics(rootContext);
  $._globalState().set$currentContext(rootContext);
  rootContext.eval$1(entry);
  $._globalState().get$topEventLoop().run$0();
};

$._ChildNodeListLazy$ = function(_this) {
  return new $._ChildNodeListLazy(_this);
};

$._AudioContextEventsImpl$ = function(_ptr) {
  return new $._AudioContextEventsImpl(_ptr);
};

$.floor = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.floor$0();
  return Math.floor(receiver);
};

$._window = function() {
  return typeof window != 'undefined' ? window : (void 0);;
};

$.eqB = function(a, b) {
  if (a == null) return b == null;
  if (b == null) return false;
  if (typeof a === "object") {
    if (!!a.operator$eq$1) {
      var t1 = a.operator$eq$1(b);
      return t1 === true;
    }
  }
  return a === b;
};

$.Collections__containsRef = function(c, ref) {
  for (var t1 = $.iterator(c); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    if (t2 == null ? ref == null : t2 === ref) return true;
  }
  return false;
};

$._NodeListWrapper$ = function(list) {
  return new $._NodeListWrapper(list);
};

$.isJsArray = function(value) {
  return !(value == null) && (value.constructor === Array);
};

$.indexSet$slow = function(a, index, value) {
  if ($.isJsArray(a) === true) {
    if (!((typeof index === 'number') && (index === (index | 0)))) throw $.captureStackTrace($.IllegalArgumentException$(index));
    if (index < 0 || $.geB(index, $.get$length(a))) throw $.captureStackTrace($.IndexOutOfRangeException$(index));
    $.checkMutable(a, 'indexed set');
    a[index] = value;
    return;
  }
  a.operator$indexSet$2(index, value);
};

$.HashMapImplementation__nextProbe = function(currentProbe, numberOfProbes, length$) {
  return $.and($.add(currentProbe, numberOfProbes), $.sub(length$, 1));
};

$.allMatches = function(receiver, str) {
  if (!(typeof receiver === 'string')) return receiver.allMatches$1(str);
  $.checkString(str);
  return $.allMatchesInStringUnchecked(receiver, str);
};

$.substringUnchecked = function(receiver, startIndex, endIndex) {
  return receiver.substring(startIndex, endIndex);
};

$.get$length = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver) === true) return receiver.length;
  return receiver.get$length();
};

$.ge$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) return a >= b;
  return a.operator$ge$1(b);
};

$.CanvasRenderData$ = function() {
  var t1 = new $.CanvasRenderData(null);
  t1.CanvasRenderData$0();
  return t1;
};

$.IllegalJSRegExpException$ = function(_pattern, _errmsg) {
  return new $.IllegalJSRegExpException(_errmsg, _pattern);
};

$._IDBOpenDBRequestEventsImpl$ = function(_ptr) {
  return new $._IDBOpenDBRequestEventsImpl(_ptr);
};

$.typeNameInIE = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if ($.eqB(name$, 'Window')) return 'DOMWindow';
  if ($.eqB(name$, 'Document')) {
    if (!!obj.xmlVersion) return 'Document';
    return 'HTMLDocument';
  }
  if ($.eqB(name$, 'HTMLTableDataCellElement')) return 'HTMLTableCellElement';
  if ($.eqB(name$, 'HTMLTableHeaderCellElement')) return 'HTMLTableCellElement';
  if ($.eqB(name$, 'MSStyleCSSProperties')) return 'CSSStyleDeclaration';
  if ($.eqB(name$, 'CanvasPixelArray')) return 'Uint8ClampedArray';
  if ($.eqB(name$, 'HTMLPhraseElement')) return 'HTMLElement';
  if ($.eqB(name$, 'MouseWheelEvent')) return 'WheelEvent';
  return name$;
};

$.constructorNameFallback = function(obj) {
  var constructor$ = (obj.constructor);
  var t1 = (typeof(constructor$));
  if (t1 === 'function') {
    var name$ = (constructor$.name);
    t1 = (typeof(name$));
    if (t1 === 'string' && $.isEmpty(name$) !== true && !(name$ === 'Object')) return name$;
  }
  var string = (Object.prototype.toString.call(obj));
  return $.substring$2(string, 8, string.length - 1);
};

$.regExpMatchStart = function(m) {
  return m.index;
};

$.clear = function(receiver) {
  if ($.isJsArray(receiver) !== true) return receiver.clear$0();
  $.set$length(receiver, 0);
};

$.NullPointerException$ = function(functionName, arguments$) {
  return new $.NullPointerException(arguments$, functionName);
};

$._serializeMessage = function(message) {
  if ($._globalState().get$needSerialization() === true) return $._JsSerializer$().traverse$1(message);
  return $._JsCopier$().traverse$1(message);
};

$.Player$ = function(position, rotation) {
  var t1 = new $.Player(null, null, null);
  t1.Player$2(position, rotation);
  return t1;
};

$.Math_max = function(a, b) {
  return $.ltB($.compareTo(a, b), 0) ? b : a;
};

$.tdiv = function(a, b) {
  if ($.checkNumbers(a, b) === true) return $.truncate((a) / (b));
  return a.operator$tdiv$1(b);
};

$.Primitives_printString = function(string) {
  if (typeof dartPrint == "function") {
    dartPrint(string);
    return;
  }
  if (typeof console == "object") {
    console.log(string);
    return;
  }
  if (typeof write == "function") {
    write(string);
    write("\n");
  }
};

$.removeRange = function(receiver, start, length$) {
  if ($.isJsArray(receiver) !== true) return receiver.removeRange$2(start, length$);
  $.checkGrowable(receiver, 'removeRange');
  if ($.eqB(length$, 0)) return;
  $.checkNull(start);
  $.checkNull(length$);
  if (!((typeof start === 'number') && (start === (start | 0)))) throw $.captureStackTrace($.IllegalArgumentException$(start));
  if (!((typeof length$ === 'number') && (length$ === (length$ | 0)))) throw $.captureStackTrace($.IllegalArgumentException$(length$));
  if (length$ < 0) throw $.captureStackTrace($.IllegalArgumentException$(length$));
  var receiverLength = (receiver.length);
  if (start < 0 || start >= receiverLength) throw $.captureStackTrace($.IndexOutOfRangeException$(start));
  var t1 = start + length$;
  if (t1 > receiverLength) throw $.captureStackTrace($.IndexOutOfRangeException$(t1));
  var t2 = receiverLength - length$;
  $.Arrays_copy(receiver, t1, receiver, start, t2 - start);
  $.set$length(receiver, t2);
};

$.JSSyntaxRegExp$_globalVersionOf = function(other) {
  var t1 = other.get$pattern();
  var t2 = other.get$multiLine();
  t1 = new $.JSSyntaxRegExp(other.get$ignoreCase(), t2, t1);
  t1.JSSyntaxRegExp$_globalVersionOf$1(other);
  return t1;
};

$.Color$ = function(hex) {
  var t1 = new $.Color(null, null, null);
  t1.Color$1(hex);
  return t1;
};

$.typeNameInChrome = function(obj) {
  var name$ = (obj.constructor.name);
  if (name$ === 'Window') return 'DOMWindow';
  if (name$ === 'CanvasPixelArray') return 'Uint8ClampedArray';
  return name$;
};

$.MeshFaceMaterial$ = function() {
  var t1 = new $.MeshFaceMaterial(null, null, null, null, null, null, null, null, null, null, null, null);
  t1.Material$1(null);
  return t1;
};

$.Math_sqrt = function(x) {
  return $.MathNatives_sqrt(x);
};

$.MathNatives_sqrt = function(value) {
  return Math.sqrt($.checkNum(value));
};

$.shr = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    a = (a);
    b = (b);
    if (b < 0) throw $.captureStackTrace($.IllegalArgumentException$(b));
    if (a > 0) {
      if (b > 31) return 0;
      return a >>> b;
    }
    if (b > 31) b = 31;
    return (a >> b) >>> 0;
  }
  return a.operator$shr$1(b);
};

$.DualPivotQuicksort__dualPivotQuicksort = function(a, left, right, compare) {
  if (typeof a !== 'object' || a === null || ((a.constructor !== Array || !!a.immutable$list) && !a.is$JavaScriptIndexingBehavior())) return $.DualPivotQuicksort__dualPivotQuicksort$bailout(1, a, left, right, compare, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var sixth = $.tdiv($.add($.sub(right, left), 1), 6);
  var index1 = $.add(left, sixth);
  var index5 = $.sub(right, sixth);
  var index3 = $.tdiv($.add(left, right), 2);
  var index2 = $.sub(index3, sixth);
  var index4 = $.add(index3, sixth);
  if (index1 !== (index1 | 0)) throw $.iae(index1);
  var t1 = a.length;
  if (index1 < 0 || index1 >= t1) throw $.ioore(index1);
  var el2 = a[index1];
  if (index2 !== (index2 | 0)) throw $.iae(index2);
  if (index2 < 0 || index2 >= t1) throw $.ioore(index2);
  var el20 = a[index2];
  if (index3 !== (index3 | 0)) throw $.iae(index3);
  if (index3 < 0 || index3 >= t1) throw $.ioore(index3);
  var el1 = a[index3];
  if (index4 !== (index4 | 0)) throw $.iae(index4);
  if (index4 < 0 || index4 >= t1) throw $.ioore(index4);
  var el4 = a[index4];
  if (index5 !== (index5 | 0)) throw $.iae(index5);
  if (index5 < 0 || index5 >= t1) throw $.ioore(index5);
  var el40 = a[index5];
  if ($.gtB(compare.$call$2(el2, el20), 0)) var el10 = el20;
  else {
    el10 = el2;
    el2 = el20;
  }
  if ($.gtB(compare.$call$2(el4, el40), 0)) {
    var el5 = el4;
    el4 = el40;
  } else el5 = el40;
  if ($.gtB(compare.$call$2(el10, el1), 0)) var el3 = el10;
  else {
    el3 = el1;
    el1 = el10;
  }
  if ($.gtB(compare.$call$2(el2, el3), 0)) {
    var t0 = el3;
    el3 = el2;
    el2 = t0;
  }
  if ($.gtB(compare.$call$2(el1, el4), 0)) {
    t0 = el1;
    el1 = el4;
    el4 = t0;
  }
  if ($.gtB(compare.$call$2(el3, el4), 0)) {
    t0 = el3;
    el3 = el4;
    el4 = t0;
  }
  if ($.gtB(compare.$call$2(el2, el5), 0)) {
    t0 = el2;
    el2 = el5;
    el5 = t0;
  }
  if ($.gtB(compare.$call$2(el2, el3), 0)) {
    t0 = el3;
    el3 = el2;
    el2 = t0;
  }
  if ($.gtB(compare.$call$2(el4, el5), 0)) {
    t0 = el5;
    el5 = el4;
    el4 = t0;
  }
  t1 = a.length;
  if (index1 < 0 || index1 >= t1) throw $.ioore(index1);
  a[index1] = el1;
  var t2 = a.length;
  if (index3 < 0 || index3 >= t2) throw $.ioore(index3);
  a[index3] = el3;
  var t3 = a.length;
  if (index5 < 0 || index5 >= t3) throw $.ioore(index5);
  a[index5] = el5;
  if (left !== (left | 0)) throw $.iae(left);
  var t4 = a.length;
  if (left < 0 || left >= t4) throw $.ioore(left);
  var t5 = a[left];
  if (index2 < 0 || index2 >= t4) throw $.ioore(index2);
  a[index2] = t5;
  if (right !== (right | 0)) throw $.iae(right);
  t5 = a.length;
  if (right < 0 || right >= t5) throw $.ioore(right);
  var t6 = a[right];
  if (index4 < 0 || index4 >= t5) throw $.ioore(index4);
  a[index4] = t6;
  var less = left + 1;
  if (typeof less !== 'number') return $.DualPivotQuicksort__dualPivotQuicksort$bailout(2, a, left, right, compare, index5, el2, less, el4, index1, 0, 0, 0, 0, 0);
  var great = right - 1;
  if (typeof great !== 'number') return $.DualPivotQuicksort__dualPivotQuicksort$bailout(3, a, left, right, compare, index5, el2, great, less, el4, index1, 0, 0, 0, 0);
  var pivots_are_equal = $.eqB(compare.$call$2(el2, el4), 0);
  if (pivots_are_equal) {
    for (var k = less; k <= great; ++k) {
      if (k !== (k | 0)) throw $.iae(k);
      t1 = a.length;
      if (k < 0 || k >= t1) throw $.ioore(k);
      t2 = a[k];
      var comp = compare.$call$2(t2, el2);
      if (typeof comp !== 'number') return $.DualPivotQuicksort__dualPivotQuicksort$bailout(4, a, less, k, compare, left, right, great, index1, index5, el2, pivots_are_equal, t2, comp, el4);
      if (comp === 0) continue;
      if (comp < 0) {
        if (!(k === less)) {
          if (less !== (less | 0)) throw $.iae(less);
          t1 = a.length;
          if (less < 0 || less >= t1) throw $.ioore(less);
          t3 = a[less];
          if (k < 0 || k >= t1) throw $.ioore(k);
          a[k] = t3;
          t3 = a.length;
          if (less < 0 || less >= t3) throw $.ioore(less);
          a[less] = t2;
        }
        ++less;
      } else {
        for (; true; ) {
          if (great !== (great | 0)) throw $.iae(great);
          t1 = a.length;
          if (great < 0 || great >= t1) throw $.ioore(great);
          comp = compare.$call$2(a[great], el2);
          if ($.gtB(comp, 0)) {
            --great;
            continue;
          } else {
            t1 = $.ltB(comp, 0);
            var great0 = great - 1;
            t3 = a.length;
            if (t1) {
              if (less !== (less | 0)) throw $.iae(less);
              if (less < 0 || less >= t3) throw $.ioore(less);
              t1 = a[less];
              if (k < 0 || k >= t3) throw $.ioore(k);
              a[k] = t1;
              var less0 = less + 1;
              t1 = a.length;
              if (great < 0 || great >= t1) throw $.ioore(great);
              t4 = a[great];
              if (less < 0 || less >= t1) throw $.ioore(less);
              a[less] = t4;
              t4 = a.length;
              if (great < 0 || great >= t4) throw $.ioore(great);
              a[great] = t2;
              great = great0;
              less = less0;
              break;
            } else {
              if (great < 0 || great >= t3) throw $.ioore(great);
              t1 = a[great];
              if (k < 0 || k >= t3) throw $.ioore(k);
              a[k] = t1;
              t1 = a.length;
              if (great < 0 || great >= t1) throw $.ioore(great);
              a[great] = t2;
              great = great0;
              break;
            }
          }
        }
      }
    }
  } else {
    for (k = less; k <= great; ++k) {
      if (k !== (k | 0)) throw $.iae(k);
      t1 = a.length;
      if (k < 0 || k >= t1) throw $.ioore(k);
      t2 = a[k];
      if ($.ltB(compare.$call$2(t2, el2), 0)) {
        if (!(k === less)) {
          if (less !== (less | 0)) throw $.iae(less);
          t1 = a.length;
          if (less < 0 || less >= t1) throw $.ioore(less);
          t3 = a[less];
          if (k < 0 || k >= t1) throw $.ioore(k);
          a[k] = t3;
          t3 = a.length;
          if (less < 0 || less >= t3) throw $.ioore(less);
          a[less] = t2;
        }
        ++less;
      } else {
        if ($.gtB(compare.$call$2(t2, el4), 0)) {
          for (; true; ) {
            if (great !== (great | 0)) throw $.iae(great);
            t1 = a.length;
            if (great < 0 || great >= t1) throw $.ioore(great);
            if ($.gtB(compare.$call$2(a[great], el4), 0)) {
              --great;
              if (great < k) break;
              continue;
            } else {
              t1 = a.length;
              if (great < 0 || great >= t1) throw $.ioore(great);
              t1 = $.ltB(compare.$call$2(a[great], el2), 0);
              great0 = great - 1;
              t3 = a.length;
              if (t1) {
                if (less !== (less | 0)) throw $.iae(less);
                if (less < 0 || less >= t3) throw $.ioore(less);
                t1 = a[less];
                if (k < 0 || k >= t3) throw $.ioore(k);
                a[k] = t1;
                less0 = less + 1;
                t1 = a.length;
                if (great < 0 || great >= t1) throw $.ioore(great);
                t4 = a[great];
                if (less < 0 || less >= t1) throw $.ioore(less);
                a[less] = t4;
                t4 = a.length;
                if (great < 0 || great >= t4) throw $.ioore(great);
                a[great] = t2;
                great = great0;
                less = less0;
              } else {
                if (great < 0 || great >= t3) throw $.ioore(great);
                t1 = a[great];
                if (k < 0 || k >= t3) throw $.ioore(k);
                a[k] = t1;
                t1 = a.length;
                if (great < 0 || great >= t1) throw $.ioore(great);
                a[great] = t2;
                great = great0;
              }
              break;
            }
          }
        }
      }
    }
  }
  t1 = less - 1;
  if (t1 !== (t1 | 0)) throw $.iae(t1);
  t2 = a.length;
  if (t1 < 0 || t1 >= t2) throw $.ioore(t1);
  t3 = a[t1];
  if (left < 0 || left >= t2) throw $.ioore(left);
  a[left] = t3;
  t3 = a.length;
  if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
  a[t1] = el2;
  t1 = great + 1;
  if (t1 !== (t1 | 0)) throw $.iae(t1);
  t4 = a.length;
  if (t1 < 0 || t1 >= t4) throw $.ioore(t1);
  t5 = a[t1];
  if (right < 0 || right >= t4) throw $.ioore(right);
  a[right] = t5;
  t5 = a.length;
  if (t1 < 0 || t1 >= t5) throw $.ioore(t1);
  a[t1] = el4;
  $.DualPivotQuicksort__doSort(a, left, less - 2, compare);
  $.DualPivotQuicksort__doSort(a, great + 2, right, compare);
  if (pivots_are_equal) return;
  if (less < index1 && great > index5) {
    while (true) {
      if (less !== (less | 0)) throw $.iae(less);
      t1 = a.length;
      if (less < 0 || less >= t1) throw $.ioore(less);
      if (!$.eqB(compare.$call$2(a[less], el2), 0)) break;
      ++less;
    }
    while (true) {
      if (great !== (great | 0)) throw $.iae(great);
      t1 = a.length;
      if (great < 0 || great >= t1) throw $.ioore(great);
      if (!$.eqB(compare.$call$2(a[great], el4), 0)) break;
      --great;
    }
    for (k = less; k <= great; ++k) {
      if (k !== (k | 0)) throw $.iae(k);
      t1 = a.length;
      if (k < 0 || k >= t1) throw $.ioore(k);
      t2 = a[k];
      if ($.eqB(compare.$call$2(t2, el2), 0)) {
        if (!(k === less)) {
          if (less !== (less | 0)) throw $.iae(less);
          t1 = a.length;
          if (less < 0 || less >= t1) throw $.ioore(less);
          t3 = a[less];
          if (k < 0 || k >= t1) throw $.ioore(k);
          a[k] = t3;
          t3 = a.length;
          if (less < 0 || less >= t3) throw $.ioore(less);
          a[less] = t2;
        }
        ++less;
      } else {
        if ($.eqB(compare.$call$2(t2, el4), 0)) {
          for (; true; ) {
            if (great !== (great | 0)) throw $.iae(great);
            t1 = a.length;
            if (great < 0 || great >= t1) throw $.ioore(great);
            if ($.eqB(compare.$call$2(a[great], el4), 0)) {
              --great;
              if (great < k) break;
              continue;
            } else {
              t1 = a.length;
              if (great < 0 || great >= t1) throw $.ioore(great);
              t1 = $.ltB(compare.$call$2(a[great], el2), 0);
              great0 = great - 1;
              t3 = a.length;
              if (t1) {
                if (less !== (less | 0)) throw $.iae(less);
                if (less < 0 || less >= t3) throw $.ioore(less);
                t1 = a[less];
                if (k < 0 || k >= t3) throw $.ioore(k);
                a[k] = t1;
                less0 = less + 1;
                t1 = a.length;
                if (great < 0 || great >= t1) throw $.ioore(great);
                t4 = a[great];
                if (less < 0 || less >= t1) throw $.ioore(less);
                a[less] = t4;
                t4 = a.length;
                if (great < 0 || great >= t4) throw $.ioore(great);
                a[great] = t2;
                great = great0;
                less = less0;
              } else {
                if (great < 0 || great >= t3) throw $.ioore(great);
                t1 = a[great];
                if (k < 0 || k >= t3) throw $.ioore(k);
                a[k] = t1;
                t1 = a.length;
                if (great < 0 || great >= t1) throw $.ioore(great);
                a[great] = t2;
                great = great0;
              }
              break;
            }
          }
        }
      }
    }
    $.DualPivotQuicksort__doSort(a, less, great, compare);
  } else $.DualPivotQuicksort__doSort(a, less, great, compare);
};

$.RenderableObject$ = function() {
  return new $.RenderableObject(null, null);
};

$.and = function(a, b) {
  if ($.checkNumbers(a, b) === true) return (a & b) >>> 0;
  return a.operator$and$1(b);
};

$.substring$2 = function(receiver, startIndex, endIndex) {
  if (!(typeof receiver === 'string')) return receiver.substring$2(startIndex, endIndex);
  $.checkNum(startIndex);
  var length$ = receiver.length;
  if (endIndex == null) endIndex = length$;
  $.checkNum(endIndex);
  if ($.ltB(startIndex, 0)) throw $.captureStackTrace($.IndexOutOfRangeException$(startIndex));
  if ($.gtB(startIndex, endIndex)) throw $.captureStackTrace($.IndexOutOfRangeException$(startIndex));
  if ($.gtB(endIndex, length$)) throw $.captureStackTrace($.IndexOutOfRangeException$(endIndex));
  return $.substringUnchecked(receiver, startIndex, endIndex);
};

$.indexSet = function(a, index, value) {
  if (a.constructor === Array && !a.immutable$list) {
    var key = (index >>> 0);
    if (key === index && key < (a.length)) {
      a[key] = value;
      return;
    }
  }
  $.indexSet$slow(a, index, value);
};

$._DOMApplicationCacheEventsImpl$ = function(_ptr) {
  return new $._DOMApplicationCacheEventsImpl(_ptr);
};

$.ExceptionImplementation$ = function(msg) {
  return new $.ExceptionImplementation(msg);
};

$.StringMatch$ = function(_start, str, pattern) {
  return new $.StringMatch(pattern, str, _start);
};

$.invokeClosure = function(closure, isolate, numberOfArguments, arg1, arg2) {
  if ($.eqB(numberOfArguments, 0)) return $._callInIsolate(isolate, new $.invokeClosure_anon(closure));
  if ($.eqB(numberOfArguments, 1)) return $._callInIsolate(isolate, new $.invokeClosure_anon0(closure, arg1));
  if ($.eqB(numberOfArguments, 2)) return $._callInIsolate(isolate, new $.invokeClosure_anon1(closure, arg1, arg2));
  throw $.captureStackTrace($.ExceptionImplementation$('Unsupported number of arguments for wrapped closure'));
};

$.Rectangle$ = function() {
  return new $.Rectangle(true, null, null, null, null, null, null);
};

$.stringJoinUnchecked = function(array, separator) {
  return array.join(separator);
};

$.gt = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a > b) : $.gt$slow(a, b);
};

$.last = function(receiver) {
  if ($.isJsArray(receiver) !== true) return receiver.last$0();
  return $.index(receiver, $.sub($.get$length(receiver), 1));
};

$.Log_debug = function(message) {
  $.Log_debugElement.set$innerHTML(message);
  $.Log_console(message);
};

$.filter = function(receiver, predicate) {
  if ($.isJsArray(receiver) !== true) return receiver.filter$1(predicate);
  return $.Collections_filter(receiver, [], predicate);
};

$.Collections_filter = function(source, destination, f) {
  for (var t1 = $.iterator(source); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    f.$call$1(t2) === true && $.add$1(destination, t2);
  }
  return destination;
};

$.buildDynamicMetadata = function(inputTable) {
  if (typeof inputTable !== 'string' && (typeof inputTable !== 'object' || inputTable === null || (inputTable.constructor !== Array && !inputTable.is$JavaScriptIndexingBehavior()))) return $.buildDynamicMetadata$bailout(1, inputTable, 0, 0, 0, 0, 0, 0);
  var result = [];
  for (var i = 0; t1 = inputTable.length, i < t1; ++i) {
    if (i < 0 || i >= t1) throw $.ioore(i);
    var tag = $.index(inputTable[i], 0);
    var t2 = inputTable.length;
    if (i < 0 || i >= t2) throw $.ioore(i);
    var tags = $.index(inputTable[i], 1);
    var set = $.HashSetImplementation$();
    $.setRuntimeTypeInfo(set, ({E: 'String'}));
    var tagNames = $.split(tags, '|');
    if (typeof tagNames !== 'string' && (typeof tagNames !== 'object' || tagNames === null || (tagNames.constructor !== Array && !tagNames.is$JavaScriptIndexingBehavior()))) return $.buildDynamicMetadata$bailout(2, inputTable, result, tagNames, tag, i, tags, set);
    for (var j = 0; t1 = tagNames.length, j < t1; ++j) {
      if (j < 0 || j >= t1) throw $.ioore(j);
      set.add$1(tagNames[j]);
    }
    $.add$1(result, $.MetaInfo$(tag, tags, set));
  }
  return result;
  var t1;
};

$._Collections_filter = function(source, destination, f) {
  for (var t1 = $.iterator(source); t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    f.$call$1(t2) === true && $.add$1(destination, t2);
  }
  return destination;
};

$.contains$1 = function(receiver, other) {
  if (!(typeof receiver === 'string')) return receiver.contains$1(other);
  return $.contains$2(receiver, other, 0);
};

$._EventSourceEventsImpl$ = function(_ptr) {
  return new $._EventSourceEventsImpl(_ptr);
};

$.mul = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a * b) : $.mul$slow(a, b);
};

$._NotificationEventsImpl$ = function(_ptr) {
  return new $._NotificationEventsImpl(_ptr);
};

$.Frustum$ = function() {
  var t1 = new $.Frustum(null);
  t1.Frustum$0();
  return t1;
};

$._browserPrefix = function() {
  var t1 = $._cachedBrowserPrefix;
  if (t1 == null) {
    if ($._Device_isFirefox() === true) $._cachedBrowserPrefix = '-moz-';
    else $._cachedBrowserPrefix = '-webkit-';
  }
  return $._cachedBrowserPrefix;
};

$._MessageTraverser_isPrimitive = function(x) {
  return x == null || typeof x === 'string' || typeof x === 'number' || typeof x === 'boolean';
};

$.neg = function(a) {
  if (typeof a === "number") return -a;
  return a.operator$negate$0();
};

$.DoubleLinkedQueueEntry$ = function(e) {
  var t1 = new $.DoubleLinkedQueueEntry(null, null, null);
  t1.DoubleLinkedQueueEntry$1(e);
  return t1;
};

$.Collections__emitCollection = function(c, result, visiting) {
  $.add$1(visiting, c);
  var isList = typeof c === 'object' && c !== null && (c.constructor === Array || c.is$List());
  $.add$1(result, isList ? '[' : '{');
  for (var t1 = $.iterator(c), first = true; t1.hasNext$0() === true; ) {
    var t2 = t1.next$0();
    !first && $.add$1(result, ', ');
    $.Collections__emitObject(t2, result, visiting);
    first = false;
  }
  $.add$1(result, isList ? ']' : '}');
  $.removeLast(visiting);
};

$.checkMutable = function(list, reason) {
  if (!!(list.immutable$list)) throw $.captureStackTrace($.UnsupportedOperationException$(reason));
};

$.sub$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) return a - b;
  return a.operator$sub$1(b);
};

$.toStringWrapper = function() {
  return $.toString((this.dartException));
};

$.Vector3$ = function(x, y, z) {
  var t1 = new $.Vector3(null, null, null);
  t1.Vector3$3(x, y, z);
  return t1;
};

$._PeerConnection00EventsImpl$ = function(_ptr) {
  return new $._PeerConnection00EventsImpl(_ptr);
};

$._ElementList$ = function(list) {
  return new $._ElementList(list);
};

$._WorkerContextEventsImpl$ = function(_ptr) {
  return new $._WorkerContextEventsImpl(_ptr);
};

$._DocumentEventsImpl$ = function(_ptr) {
  return new $._DocumentEventsImpl(_ptr);
};

$.regExpTest = function(regExp, str) {
  return $.regExpGetNative(regExp).test(str);
};

$._EventsImpl$ = function(_ptr) {
  return new $._EventsImpl(_ptr);
};

$.RenderableLine$ = function() {
  var t1 = new $.RenderableLine(null, null, null, null);
  t1.RenderableLine$0();
  return t1;
};

$._IDBRequestEventsImpl$ = function(_ptr) {
  return new $._IDBRequestEventsImpl(_ptr);
};

$.stringSplitUnchecked = function(receiver, pattern) {
  if (typeof pattern === 'string') return receiver.split(pattern);
  if (typeof pattern === 'object' && pattern !== null && !!pattern.is$JSSyntaxRegExp) return receiver.split($.regExpGetNative(pattern));
  throw $.captureStackTrace('StringImplementation.split(Pattern) UNIMPLEMENTED');
};

$.checkGrowable = function(list, reason) {
  if (!!(list.fixed$length)) throw $.captureStackTrace($.UnsupportedOperationException$(reason));
};

$.HashSetImplementation$ = function() {
  var t1 = new $.HashSetImplementation(null);
  t1.HashSetImplementation$0();
  return t1;
};

$._SpeechRecognitionEventsImpl$ = function(_ptr) {
  return new $._SpeechRecognitionEventsImpl(_ptr);
};

$._SVGElementInstanceEventsImpl$ = function(_ptr) {
  return new $._SVGElementInstanceEventsImpl(_ptr);
};

$.add$1 = function(receiver, value) {
  if ($.isJsArray(receiver) === true) {
    $.checkGrowable(receiver, 'add');
    receiver.push(value);
    return;
  }
  return receiver.add$1(value);
};

$.regExpExec = function(regExp, str) {
  var result = ($.regExpGetNative(regExp).exec(str));
  if (result === null) return;
  return result;
};

$.RenderableFace3$ = function() {
  var t1 = new $.RenderableFace3(null, null, null, null, null, null, null, null, null, null, null);
  t1.RenderableFace3$0();
  return t1;
};

$.geB = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') var t1 = (a >= b);
  else {
    t1 = $.ge$slow(a, b);
    t1 = t1 === true;
  }
  return t1;
};

$.isEmpty = function(receiver) {
  if (typeof receiver === 'string' || $.isJsArray(receiver) === true) return receiver.length === 0;
  return receiver.isEmpty$0();
};

$.stringContainsUnchecked = function(receiver, other, startIndex) {
  if (typeof other === 'string') {
    var t1 = $.indexOf$2(receiver, other, startIndex);
    return !(t1 === -1);
  }
  if (typeof other === 'object' && other !== null && !!other.is$JSSyntaxRegExp) return other.hasMatch$1($.substring$1(receiver, startIndex));
  return $.iterator($.allMatches(other, $.substring$1(receiver, startIndex))).hasNext$0();
};

$.ObjectNotClosureException$ = function() {
  return new $.ObjectNotClosureException();
};

$.window = function() {
  return window;;
};

$.Mesh$ = function(geometry, material) {
  var t1 = new $.Mesh(null, null, null, null, null, null, null, null, false, false, false, false, null, null, null, null, false, false, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  t1.Object3D$0();
  t1.Mesh$2(geometry, material);
  return t1;
};

$.add = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a + b) : $.add$slow(a, b);
};

$.abs = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.abs$0();
  return Math.abs(receiver);
};

$.Primitives_objectTypeName = function(object) {
  var name$ = $.constructorNameFallback(object);
  if ($.eqB(name$, 'Object')) {
    var decompiled = (String(object.constructor).match(/^\s*function\s*(\S*)\s*\(/)[1]);
    if (typeof decompiled === 'string') name$ = decompiled;
  }
  var t1 = $.charCodeAt(name$, 0);
  return t1 === 36 ? $.substring$1(name$, 1) : name$;
};

$.regExpAttachGlobalNative = function(regExp) {
  regExp._re = $.regExpMakeNative(regExp, true);
};

$.iterator = function(receiver) {
  if ($.isJsArray(receiver) === true) return $.ListIterator$(receiver);
  return receiver.iterator$0();
};

$.leB = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') var t1 = (a <= b);
  else {
    t1 = $.le$slow(a, b);
    t1 = t1 === true;
  }
  return t1;
};

$.isNegative = function(receiver) {
  if (typeof receiver === 'number') {
    return receiver === 0 ? 1 / receiver < 0 : receiver < 0;
  }
  return receiver.isNegative$0();
};

$.regExpMakeNative = function(regExp, global) {
  var pattern = regExp.get$pattern();
  var multiLine = regExp.get$multiLine();
  var ignoreCase = regExp.get$ignoreCase();
  $.checkString(pattern);
  var sb = $.StringBufferImpl$('');
  multiLine === true && $.add$1(sb, 'm');
  ignoreCase === true && $.add$1(sb, 'i');
  global === true && $.add$1(sb, 'g');
  try {
    return new RegExp(pattern, $.toString(sb));
  } catch (exception) {
    var t1 = $.unwrapException(exception);
    var e = t1;
    throw $.captureStackTrace($.IllegalJSRegExpException$(pattern, (String(e))));
  }
};

$.BadNumberFormatException$ = function(_s) {
  return new $.BadNumberFormatException(_s);
};

$.Matrix4$createMatrices = function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
  var t1 = new $.Matrix4(n44, n43, n42, n41, n34, n33, n32, n31, n24, n23, n22, n21, n14, n13, n12, n11, null, null);
  t1.Matrix4$createMatrices$16(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
  return t1;
};

$._FrozenElementListIterator$ = function(_list) {
  return new $._FrozenElementListIterator(0, _list);
};

$.Maps_mapToString = function(m) {
  var result = $.StringBufferImpl$('');
  $.Maps__emitMap(m, result, $.ListFactory_List(null));
  return result.toString$0();
};

$.Face4$ = function(a, b, c, d, normal, color, materialIndex) {
  var t1 = new $.Face4(null, null, null, null, null, null, null, null, null, null, null);
  t1.Face4$7(a, b, c, d, normal, color, materialIndex);
  return t1;
};

$._XMLHttpRequestEventsImpl$ = function(_ptr) {
  return new $._XMLHttpRequestEventsImpl(_ptr);
};

$._JavaScriptAudioNodeEventsImpl$ = function(_ptr) {
  return new $._JavaScriptAudioNodeEventsImpl(_ptr);
};

$.Collections__emitObject = function(o, result, visiting) {
  if (typeof o === 'object' && o !== null && (o.constructor === Array || o.is$Collection())) {
    if ($.Collections__containsRef(visiting, o) === true) {
      $.add$1(result, typeof o === 'object' && o !== null && (o.constructor === Array || o.is$List()) ? '[...]' : '{...}');
    } else $.Collections__emitCollection(o, result, visiting);
  } else {
    if (typeof o === 'object' && o !== null && o.is$Map()) {
      if ($.Collections__containsRef(visiting, o) === true) $.add$1(result, '{...}');
      else $.Maps__emitMap(o, result, visiting);
    } else {
      $.add$1(result, o == null ? 'null' : o);
    }
  }
};

$.Maps__emitMap = function(m, result, visiting) {
  var t1 = ({});
  $.add$1(visiting, m);
  $.add$1(result, '{');
  t1.first_1 = true;
  $.forEach(m, new $.Maps__emitMap_anon(result, t1, visiting));
  $.add$1(result, '}');
  $.removeLast(visiting);
};

$._IDBDatabaseEventsImpl$ = function(_ptr) {
  return new $._IDBDatabaseEventsImpl(_ptr);
};

$._Device_isFirefox = function() {
  return $.contains$2($._Device_userAgent(), 'Firefox', 0);
};

$.compareTo = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    if ($.ltB(a, b)) return -1;
    if ($.gtB(a, b)) return 1;
    if ($.eqB(a, b)) {
      if ($.eqB(a, 0)) {
        var aIsNegative = $.isNegative(a);
        if ($.eqB(aIsNegative, $.isNegative(b))) return 0;
        if (aIsNegative === true) return -1;
        return 1;
      }
      return 0;
    }
    if ($.isNaN(a) === true) {
      if ($.isNaN(b) === true) return 0;
      return 1;
    }
    return -1;
  }
  if (typeof a === 'string') {
    if (!(typeof b === 'string')) throw $.captureStackTrace($.IllegalArgumentException$(b));
    if (a == b) var t1 = 0;
    else {
      t1 = (a < b) ? -1 : 1;
    }
    return t1;
  }
  return a.compareTo$1(b);
};

$.CubeGeometry$ = function(width, height, depth, segmentsWidth, segmentsHeight, segmentsDepth, materials, sides) {
  var t1 = new $.CubeGeometry(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  t1.Geometry$0();
  t1.CubeGeometry$8(width, height, depth, segmentsWidth, segmentsHeight, segmentsDepth, materials, sides);
  return t1;
};

$._TextTrackCueEventsImpl$ = function(_ptr) {
  return new $._TextTrackCueEventsImpl(_ptr);
};

$.Vector4$ = function(x, y, z, w) {
  var t1 = new $.Vector4(null, null, null, null);
  t1.Vector4$4(x, y, z, w);
  return t1;
};

$.Matrix3$ = function() {
  var t1 = new $.Matrix3(null);
  t1.Matrix3$0();
  return t1;
};

$.RenderableVertex$ = function() {
  var t1 = new $.RenderableVertex(true, null, null);
  t1.RenderableVertex$0();
  return t1;
};

$.MatchImplementation$ = function(pattern, str, _start, _end, _groups) {
  return new $.MatchImplementation(_groups, _end, _start, str, pattern);
};

$.UnsupportedOperationException$ = function(_message) {
  return new $.UnsupportedOperationException(_message);
};

$.get$dynamic = function(receiver) {
  return receiver;
};

$.indexOf$2 = function(receiver, element, start) {
  if ($.isJsArray(receiver) === true) {
    if (!((typeof start === 'number') && (start === (start | 0)))) throw $.captureStackTrace($.IllegalArgumentException$(start));
    return $.Arrays_indexOf(receiver, element, start, (receiver.length));
  }
  if (typeof receiver === 'string') {
    $.checkNull(element);
    if (!((typeof start === 'number') && (start === (start | 0)))) throw $.captureStackTrace($.IllegalArgumentException$(start));
    if (!(typeof element === 'string')) throw $.captureStackTrace($.IllegalArgumentException$(element));
    if (start < 0) return -1;
    return receiver.indexOf(element, start);
  }
  return receiver.indexOf$2(element, start);
};

$._DedicatedWorkerContextEventsImpl$ = function(_ptr) {
  return new $._DedicatedWorkerContextEventsImpl(_ptr);
};

$.RenderableFace4$ = function() {
  var t1 = new $.RenderableFace4(null, null, null, null, null, null, null, null, null, null, null, null);
  t1.RenderableFace4$0();
  return t1;
};

$._FileReaderEventsImpl$ = function(_ptr) {
  return new $._FileReaderEventsImpl(_ptr);
};

$.RenderInts$ = function() {
  var t1 = new $.RenderInts(null, null);
  t1.RenderInts$0();
  return t1;
};

$._JsCopier$ = function() {
  var t1 = new $._JsCopier($._MessageTraverserVisitedMap$());
  t1._JsCopier$0();
  return t1;
};

$.NoMoreElementsException$ = function() {
  return new $.NoMoreElementsException();
};

$.Scene$ = function() {
  var t1 = new $.Scene(null, null, null, null, null, null, null, false, false, false, false, null, null, null, null, false, false, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  t1.Object3D$0();
  t1.Scene$0();
  return t1;
};

$._Manager$ = function() {
  var t1 = new $._Manager(null, null, null, null, null, null, null, null, null, 1, 0, 0);
  t1._Manager$0();
  return t1;
};

$._ElementFactoryProvider_Element$tag = function(tag) {
  return document.createElement(tag);
};

$._FrameSetElementEventsImpl$ = function(_ptr) {
  return new $._FrameSetElementEventsImpl(_ptr);
};

$.add$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) return a + b;
  return a.operator$add$1(b);
};

$.ListFactory_List$from = function(other) {
  var result = $.ListFactory_List(null);
  $.setRuntimeTypeInfo(result, ({E: 'E'}));
  var iterator = $.iterator(other);
  for (; iterator.hasNext$0() === true; ) {
    result.push(iterator.next$0());
  }
  return result;
};

$.Primitives_newList = function(length$) {
  if (length$ == null) return new Array();
  if (!((typeof length$ === 'number') && (length$ === (length$ | 0))) || length$ < 0) throw $.captureStackTrace($.IllegalArgumentException$(length$));
  var result = (new Array(length$));
  result.fixed$length = true;
  return result;
};

$.main = function() {
  $.Log_debugElement = $.document().query$1('#debugElement');
  $.Log_debug('Initialized debug text!');
  var world = $.World$('#world');
  world.init$0();
  world.animate$1(0);
};

$._AbstractWorkerEventsImpl$ = function(_ptr) {
  return new $._AbstractWorkerEventsImpl(_ptr);
};

$._WorkerSendPort$ = function(_workerId, isolateId, _receivePortId) {
  return new $._WorkerSendPort(_receivePortId, _workerId, isolateId);
};

$.HashMapImplementation__computeLoadLimit = function(capacity) {
  return $.tdiv($.mul(capacity, 3), 4);
};

$.HashSetIterator$ = function(set_) {
  var t1 = new $.HashSetIterator(-1, set_.get$_backingMap().get$_keys());
  t1.HashSetIterator$1(set_);
  return t1;
};

$.IllegalArgumentException$ = function(arg) {
  return new $.IllegalArgumentException(arg);
};

$._MediaElementEventsImpl$ = function(_ptr) {
  return new $._MediaElementEventsImpl(_ptr);
};

$._IDBTransactionEventsImpl$ = function(_ptr) {
  return new $._IDBTransactionEventsImpl(_ptr);
};

$._BodyElementEventsImpl$ = function(_ptr) {
  return new $._BodyElementEventsImpl(_ptr);
};

$._AllMatchesIterator$ = function(re, _str) {
  return new $._AllMatchesIterator(false, null, _str, $.JSSyntaxRegExp$_globalVersionOf(re));
};

$.iae = function(argument) {
  throw $.captureStackTrace($.IllegalArgumentException$(argument));
};

$._IsolateContext$ = function() {
  var t1 = new $._IsolateContext(null, null, null);
  t1._IsolateContext$0();
  return t1;
};

$.truncate = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.truncate$0();
  return receiver < 0 ? $.ceil(receiver) : $.floor(receiver);
};

$.CanvasRenderer$ = function(parameters) {
  var t1 = new $.CanvasRenderer(null, null, null, null, null, null, null, null, null, 6.283185307179586, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  t1.CanvasRenderer$1(parameters);
  return t1;
};

$.isNaN = function(receiver) {
  if (typeof receiver === 'number') return isNaN(receiver);
  return receiver.isNaN$0();
};

$.isInfinite = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.isInfinite$0();
  return (receiver == Infinity) || (receiver == -Infinity);
};

$.CubeGeomSides$ = function(px, nx, py, ny, pz, nz) {
  return new $.CubeGeomSides(nz, pz, ny, py, nx, px);
};

$.round = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.round$0();
  if (receiver < 0) return -Math.round(-receiver);
  return Math.round(receiver);
};

$.allMatchesInStringUnchecked = function(needle, haystack) {
  var result = $.ListFactory_List(null);
  $.setRuntimeTypeInfo(result, ({E: 'Match'}));
  var length$ = $.get$length(haystack);
  var patternLength = $.get$length(needle);
  if (patternLength !== (patternLength | 0)) return $.allMatchesInStringUnchecked$bailout(1, needle, haystack, length$, patternLength, result);
  for (var startIndex = 0; true; ) {
    var position = $.indexOf$2(haystack, needle, startIndex);
    if ($.eqB(position, -1)) break;
    result.push($.StringMatch$(position, haystack, needle));
    var endIndex = $.add(position, patternLength);
    if ($.eqB(endIndex, length$)) break;
    else {
      startIndex = $.eqB(position, endIndex) ? $.add(startIndex, 1) : endIndex;
    }
  }
  return result;
};

$.Matrix4_makeFrustum = function(left, right, bottom, top$, near, far) {
  var m = $.Matrix4$(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  if (typeof near !== 'number') throw $.iae(near);
  var t1 = 2 * near;
  var t2 = $.sub(right, left);
  if (typeof t2 !== 'number') throw $.iae(t2);
  var x = t1 / t2;
  t2 = $.sub(top$, bottom);
  if (typeof t2 !== 'number') throw $.iae(t2);
  var y = t1 / t2;
  var a = $.div($.add(right, left), $.sub(right, left));
  var b = $.div($.add(top$, bottom), $.sub(top$, bottom));
  var c = $.div($.neg($.add(far, near)), $.sub(far, near));
  if (typeof far !== 'number') throw $.iae(far);
  var d = -2 * far * near / (far - near);
  m.n11 = x;
  m.n12 = 0;
  m.n13 = a;
  m.n14 = 0;
  m.n21 = 0;
  m.n22 = y;
  m.n23 = b;
  m.n24 = 0;
  m.n31 = 0;
  m.n32 = 0;
  m.n33 = c;
  m.n34 = d;
  m.n41 = 0;
  m.n42 = 0;
  m.n43 = -1;
  m.n44 = 0;
  return m;
};

$.Controls$ = function() {
  var t1 = new $.Controls(null, null, null, null, null, null, null, null);
  t1.Controls$0();
  return t1;
};

$.le$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) return a <= b;
  return a.operator$le$1(b);
};

$._ChildrenElementList$_wrap = function(element) {
  return new $._ChildrenElementList(element.get$$$dom_children(), element);
};

$._AllMatchesIterable$ = function(_re, _str) {
  return new $._AllMatchesIterable(_str, _re);
};

$.Vertex$ = function(position) {
  var t1 = new $.Vertex(null);
  t1.Vertex$1(position);
  return t1;
};

$.dynamicSetMetadata = function(inputTable) {
  var t1 = $.buildDynamicMetadata(inputTable);
  $._dynamicMetadata(t1);
};

$.addLast = function(receiver, value) {
  if ($.isJsArray(receiver) !== true) return receiver.addLast$1(value);
  $.checkGrowable(receiver, 'addLast');
  receiver.push(value);
};

$.endsWith = function(receiver, other) {
  if (!(typeof receiver === 'string')) return receiver.endsWith$1(other);
  $.checkString(other);
  var receiverLength = receiver.length;
  var otherLength = $.get$length(other);
  if ($.gtB(otherLength, receiverLength)) return false;
  if (typeof otherLength !== 'number') throw $.iae(otherLength);
  return $.eq(other, $.substring$1(receiver, receiverLength - otherLength));
};

$.Arrays_copy = function(src, srcStart, dst, dstStart, count) {
  if (typeof src !== 'string' && (typeof src !== 'object' || src === null || (src.constructor !== Array && !src.is$JavaScriptIndexingBehavior()))) return $.Arrays_copy$bailout(1, src, srcStart, dst, dstStart, count);
  if (typeof dst !== 'object' || dst === null || ((dst.constructor !== Array || !!dst.immutable$list) && !dst.is$JavaScriptIndexingBehavior())) return $.Arrays_copy$bailout(1, src, srcStart, dst, dstStart, count);
  if (typeof count !== 'number') return $.Arrays_copy$bailout(1, src, srcStart, dst, dstStart, count);
  if (srcStart == null) srcStart = 0;
  if (typeof srcStart !== 'number') return $.Arrays_copy$bailout(2, src, dst, dstStart, count, srcStart);
  if (dstStart == null) dstStart = 0;
  if (typeof dstStart !== 'number') return $.Arrays_copy$bailout(3, src, dst, count, srcStart, dstStart);
  if (srcStart < dstStart) {
    for (var i = srcStart + count - 1, j = dstStart + count - 1; i >= srcStart; --i, --j) {
      if (i !== (i | 0)) throw $.iae(i);
      var t1 = src.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      var t2 = src[i];
      if (j !== (j | 0)) throw $.iae(j);
      var t3 = dst.length;
      if (j < 0 || j >= t3) throw $.ioore(j);
      dst[j] = t2;
    }
  } else {
    for (t1 = srcStart + count, i = srcStart, j = dstStart; i < t1; ++i, ++j) {
      if (i !== (i | 0)) throw $.iae(i);
      t2 = src.length;
      if (i < 0 || i >= t2) throw $.ioore(i);
      t3 = src[i];
      if (j !== (j | 0)) throw $.iae(j);
      var t4 = dst.length;
      if (j < 0 || j >= t4) throw $.ioore(j);
      dst[j] = t3;
    }
  }
};

$.ListIterator$ = function(list) {
  return new $.ListIterator(list, 0);
};

$.checkNum = function(value) {
  if (!(typeof value === 'number')) {
    $.checkNull(value);
    throw $.captureStackTrace($.IllegalArgumentException$(value));
  }
  return value;
};

$.Projector$ = function() {
  var t1 = new $.Projector(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  t1.Projector$0();
  return t1;
};

$._WorkerEventsImpl$ = function(_ptr) {
  return new $._WorkerEventsImpl(_ptr);
};

$.ltB = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') var t1 = (a < b);
  else {
    t1 = $.lt$slow(a, b);
    t1 = t1 === true;
  }
  return t1;
};

$._currentIsolate = function() {
  return $._globalState().get$currentContext();
};

$.FilteredElementList$ = function(node) {
  return new $.FilteredElementList(node.get$nodes(), node);
};

$.convertDartClosureToJS = function(closure, arity) {
  if (closure == null) return;
  var function$ = (closure.$identity);
  if (!!function$) return function$;
  function$ = (function() {
    return $.invokeClosure.$call$5(closure, $._currentIsolate(), arity, arguments[0], arguments[1]);
  });
  closure.$identity = function$;
  return function$;
};

$._FixedSizeListIterator$ = function(array) {
  return new $._FixedSizeListIterator($.get$length(array), 0, array);
};

$._JsSerializer$ = function() {
  var t1 = new $._JsSerializer(0, $._MessageTraverserVisitedMap$());
  t1._JsSerializer$0();
  return t1;
};

$._FrozenElementList$_wrap = function(_nodeList) {
  return new $._FrozenElementList(_nodeList);
};

$.split = function(receiver, pattern) {
  if (!(typeof receiver === 'string')) return receiver.split$1(pattern);
  $.checkNull(pattern);
  return $.stringSplitUnchecked(receiver, pattern);
};

$.StringBase_concatAll = function(strings) {
  return $.stringJoinUnchecked($.StringBase__toJsStringArray(strings), '');
};

$._Device_userAgent = function() {
  return $.window().get$navigator().get$userAgent();
};

$._InputElementEventsImpl$ = function(_ptr) {
  return new $._InputElementEventsImpl(_ptr);
};

$.getRange = function(receiver, start, length$) {
  if ($.isJsArray(receiver) !== true) return receiver.getRange$2(start, length$);
  if (0 === length$) return [];
  $.checkNull(start);
  $.checkNull(length$);
  if (!((typeof start === 'number') && (start === (start | 0)))) throw $.captureStackTrace($.IllegalArgumentException$(start));
  if (!((typeof length$ === 'number') && (length$ === (length$ | 0)))) throw $.captureStackTrace($.IllegalArgumentException$(length$));
  var t1 = length$ < 0;
  if (t1) throw $.captureStackTrace($.IllegalArgumentException$(length$));
  if (start < 0) throw $.captureStackTrace($.IndexOutOfRangeException$(start));
  var end = start + length$;
  if ($.gtB(end, $.get$length(receiver))) throw $.captureStackTrace($.IndexOutOfRangeException$(length$));
  if (t1) throw $.captureStackTrace($.IllegalArgumentException$(length$));
  return receiver.slice(start, end);
};

$._Lists_getRange = function(a, start, length$, accumulator) {
  if (typeof a !== 'string' && (typeof a !== 'object' || a === null || (a.constructor !== Array && !a.is$JavaScriptIndexingBehavior()))) return $._Lists_getRange$bailout(1, a, start, length$, accumulator);
  if (typeof start !== 'number') return $._Lists_getRange$bailout(1, a, start, length$, accumulator);
  if ($.ltB(length$, 0)) throw $.captureStackTrace($.IllegalArgumentException$('length'));
  if (start < 0) throw $.captureStackTrace($.IndexOutOfRangeException$(start));
  if (typeof length$ !== 'number') throw $.iae(length$);
  var end = start + length$;
  if (end > a.length) throw $.captureStackTrace($.IndexOutOfRangeException$(end));
  for (var i = start; i < end; ++i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    $.add$1(accumulator, a[i]);
  }
  return accumulator;
};

$.Math_pow = function(x, exponent) {
  return $.MathNatives_pow(x, exponent);
};

$._DoubleLinkedQueueIterator$ = function(_sentinel) {
  var t1 = new $._DoubleLinkedQueueIterator(null, _sentinel);
  t1._DoubleLinkedQueueIterator$1(_sentinel);
  return t1;
};

$.MathNatives_pow = function(value, exponent) {
  $.checkNum(value);
  $.checkNum(exponent);
  return Math.pow(value, exponent);
};

$.S = function(value) {
  var res = $.toString(value);
  if (!(typeof res === 'string')) throw $.captureStackTrace($.IllegalArgumentException$(value));
  return res;
};

$._TextTrackListEventsImpl$ = function(_ptr) {
  return new $._TextTrackListEventsImpl(_ptr);
};

$._dynamicMetadata = function(table) {
  $dynamicMetadata = table;
};

$._dynamicMetadata0 = function() {
  var t1 = (typeof($dynamicMetadata));
  if (t1 === 'undefined') {
    t1 = [];
    $._dynamicMetadata(t1);
  }
  return $dynamicMetadata;
};

$.LinkedHashMapImplementation$ = function() {
  var t1 = new $.LinkedHashMapImplementation(null, null);
  t1.LinkedHashMapImplementation$0();
  return t1;
};

$._DeprecatedPeerConnectionEventsImpl$ = function(_ptr) {
  return new $._DeprecatedPeerConnectionEventsImpl(_ptr);
};

$.Vector2$ = function(x, y) {
  var t1 = new $.Vector2(null, null);
  t1.Vector2$2(x, y);
  return t1;
};

$.regExpGetNative = function(regExp) {
  var r = (regExp._re);
  return r == null ? (regExp._re = $.regExpMakeNative(regExp, false)) : r;
};

$.checkNull = function(object) {
  if (object == null) throw $.captureStackTrace($.NullPointerException$(null, $.CTC));
  return object;
};

$.throwNoSuchMethod = function(obj, name$, arguments$) {
  throw $.captureStackTrace($.NoSuchMethodException$(obj, name$, arguments$, null));
};

$.PerspectiveCamera$ = function(fov, aspect, near, far) {
  var t1 = new $.PerspectiveCamera(null, null, null, null, null, null, null, null, null, null, null, null, null, null, false, false, false, false, null, null, null, null, false, false, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  t1.Object3D$0();
  t1.Camera$0();
  t1.PerspectiveCamera$4(fov, aspect, near, far);
  return t1;
};

$.StackTrace$ = function(stack) {
  return new $.StackTrace(stack);
};

$._EventListenerListImpl$ = function(_ptr, _type) {
  return new $._EventListenerListImpl(_type, _ptr);
};

$._fillStatics = function(context) {
    $globals = context.isolateStatics;
  $static_init();
;
};

$.Log_console = function(message) {
  $.print(message);
};

$._WindowEventsImpl$ = function(_ptr) {
  return new $._WindowEventsImpl(_ptr);
};

$.DoubleLinkedQueue$ = function() {
  var t1 = new $.DoubleLinkedQueue(null);
  t1.DoubleLinkedQueue$0();
  return t1;
};

$.DualPivotQuicksort_insertionSort_ = function(a, left, right, compare) {
  if (typeof a !== 'object' || a === null || ((a.constructor !== Array || !!a.immutable$list) && !a.is$JavaScriptIndexingBehavior())) return $.DualPivotQuicksort_insertionSort_$bailout(1, a, left, right, compare);
  if (typeof left !== 'number') return $.DualPivotQuicksort_insertionSort_$bailout(1, a, left, right, compare);
  if (typeof right !== 'number') return $.DualPivotQuicksort_insertionSort_$bailout(1, a, left, right, compare);
  for (var i = left + 1; i <= right; ++i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    var t2 = a[i];
    var j = i;
    while (true) {
      if (j > left) {
        t1 = j - 1;
        if (t1 !== (t1 | 0)) throw $.iae(t1);
        var t3 = a.length;
        if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
        var t4 = $.gtB(compare.$call$2(a[t1], t2), 0);
        t1 = t4;
      } else t1 = false;
      if (!t1) break;
      t1 = j - 1;
      if (t1 !== (t1 | 0)) throw $.iae(t1);
      t3 = a.length;
      if (t1 < 0 || t1 >= t3) throw $.ioore(t1);
      t1 = a[t1];
      if (j !== (j | 0)) throw $.iae(j);
      if (j < 0 || j >= t3) throw $.ioore(j);
      a[j] = t1;
      --j;
    }
    if (j !== (j | 0)) throw $.iae(j);
    t1 = a.length;
    if (j < 0 || j >= t1) throw $.ioore(j);
    a[j] = t2;
  }
};

$.checkNumbers = function(a, b) {
  if (typeof a === 'number') {
    if (typeof b === 'number') return true;
    $.checkNull(b);
    throw $.captureStackTrace($.IllegalArgumentException$(b));
  }
  return false;
};

$.Math_random = function() {
  return $.MathNatives_random();
};

$.MathNatives_random = function() {
  return Math.random();
};

$._DoubleLinkedQueueEntrySentinel$ = function() {
  var t1 = new $._DoubleLinkedQueueEntrySentinel(null, null, null);
  t1.DoubleLinkedQueueEntry$1(null);
  t1._DoubleLinkedQueueEntrySentinel$0();
  return t1;
};

$.lt$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) return a < b;
  return a.operator$lt$1(b);
};

$.index$slow = function(a, index) {
  if (typeof a === 'string' || $.isJsArray(a) === true) {
    if (!((typeof index === 'number') && (index === (index | 0)))) {
      if (!(typeof index === 'number')) throw $.captureStackTrace($.IllegalArgumentException$(index));
      var t1 = $.truncate(index);
      if (!(t1 === index)) throw $.captureStackTrace($.IllegalArgumentException$(index));
    }
    if ($.ltB(index, 0) || $.geB(index, $.get$length(a))) throw $.captureStackTrace($.IndexOutOfRangeException$(index));
    return a[index];
  }
  return a.operator$index$1(index);
};

$._globalState = function() {
  return $globalState;;
};

$._globalState0 = function(val) {
  $globalState = val;;
};

$.contains$2 = function(receiver, other, startIndex) {
  if (!(typeof receiver === 'string')) return receiver.contains$2(other, startIndex);
  $.checkNull(other);
  return $.stringContainsUnchecked(receiver, other, startIndex);
};

$.Quaternion$ = function(x, y, z, w) {
  return new $.Quaternion(w, z, y, x);
};

$._MainManagerStub$ = function() {
  return new $._MainManagerStub();
};

$.StringBase__toJsStringArray = function(strings) {
  if (typeof strings !== 'object' || strings === null || ((strings.constructor !== Array || !!strings.immutable$list) && !strings.is$JavaScriptIndexingBehavior())) return $.StringBase__toJsStringArray$bailout(1, strings);
  $.checkNull(strings);
  var length$ = strings.length;
  if ($.isJsArray(strings) === true) {
    for (var i = 0; i < length$; ++i) {
      var t1 = strings.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      var t2 = strings[i];
      $.checkNull(t2);
      if (!(typeof t2 === 'string')) throw $.captureStackTrace($.IllegalArgumentException$(t2));
    }
    var array = strings;
  } else {
    array = $.ListFactory_List(length$);
    for (i = 0; i < length$; ++i) {
      t1 = strings.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      t2 = strings[i];
      $.checkNull(t2);
      if (!(typeof t2 === 'string')) throw $.captureStackTrace($.IllegalArgumentException$(t2));
      t1 = array.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      array[i] = t2;
    }
  }
  return array;
};

$.IndexOutOfRangeException$ = function(_index) {
  return new $.IndexOutOfRangeException(_index);
};

$._MessageTraverserVisitedMap$ = function() {
  return new $._MessageTraverserVisitedMap();
};

$.getTraceFromException = function(exception) {
  return $.StackTrace$((exception.stack));
};

$._TextTrackEventsImpl$ = function(_ptr) {
  return new $._TextTrackEventsImpl(_ptr);
};

$.charCodeAt = function(receiver, index) {
  if (typeof receiver === 'string') {
    if (!(typeof index === 'number')) throw $.captureStackTrace($.IllegalArgumentException$(index));
    if (index < 0) throw $.captureStackTrace($.IndexOutOfRangeException$(index));
    if (index >= receiver.length) throw $.captureStackTrace($.IndexOutOfRangeException$(index));
    return receiver.charCodeAt(index);
  }
  return receiver.charCodeAt$1(index);
};

$.Matrix4$ = function(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
  var t1 = new $.Matrix4(n44, n43, n42, n41, n34, n33, n32, n31, n24, n23, n22, n21, n14, n13, n12, n11, null, null);
  t1.Matrix4$16(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
  return t1;
};

$._BatteryManagerEventsImpl$ = function(_ptr) {
  return new $._BatteryManagerEventsImpl(_ptr);
};

$.toInt = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.toInt$0();
  if ($.isNaN(receiver) === true) throw $.captureStackTrace($.BadNumberFormatException$('NaN'));
  if ($.isInfinite(receiver) === true) throw $.captureStackTrace($.BadNumberFormatException$('Infinity'));
  var truncated = $.truncate(receiver);
  return (truncated == -0.0) ? 0 : truncated;
};

$._EventLoop$ = function() {
  var t1 = $.DoubleLinkedQueue$();
  $.setRuntimeTypeInfo(t1, ({E: '_IsolateEvent'}));
  return new $._EventLoop(t1);
};

$.toString = function(value) {
  if (typeof value == "object" && value !== null) {
    if ($.isJsArray(value) === true) return $.Collections_collectionToString(value);
    return value.toString$0();
  }
  if (value === 0 && (1 / value) < 0) return '-0.0';
  if (value == null) return 'null';
  if (typeof value == "function") return 'Closure';
  return String(value);
};

$._WebSocketEventsImpl$ = function(_ptr) {
  return new $._WebSocketEventsImpl(_ptr);
};

$.KeyValuePair$ = function(key, value) {
  return new $.KeyValuePair(value, key);
};

$.Collections_collectionToString = function(c) {
  var result = $.StringBufferImpl$('');
  $.Collections__emitCollection(c, result, $.ListFactory_List(null));
  return result.toString$0();
};

$.MetaInfo$ = function(tag, tags, set) {
  return new $.MetaInfo(set, tags, tag);
};

$._MediaStreamEventsImpl$ = function(_ptr) {
  return new $._MediaStreamEventsImpl(_ptr);
};

$._NativeJsSendPort$ = function(_receivePort, isolateId) {
  return new $._NativeJsSendPort(_receivePort, isolateId);
};

$.defineProperty = function(obj, property, value) {
  Object.defineProperty(obj, property,
      {value: value, enumerable: false, writable: true, configurable: true});
};

$.dynamicFunction = function(name$) {
  var f = (Object.prototype[name$]);
  if (!(f == null) && (!!f.methods)) return f.methods;
  var methods = ({});
  var dartMethod = (Object.getPrototypeOf($.CTC10)[name$]);
  !(dartMethod == null) && (methods['Object'] = dartMethod);
  var bind = (function() {return $.dynamicBind.$call$4(this, name$, methods, Array.prototype.slice.call(arguments));});
  bind.methods = methods;
  $.defineProperty((Object.prototype), name$, bind);
  return methods;
};

$.print = function(obj) {
  return $.Primitives_printString($.toString(obj));
};

$.checkString = function(value) {
  if (!(typeof value === 'string')) {
    $.checkNull(value);
    throw $.captureStackTrace($.IllegalArgumentException$(value));
  }
  return value;
};

$.div = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a / b) : $.div$slow(a, b);
};

$.Math_tan = function(x) {
  return $.MathNatives_tan(x);
};

$.MathNatives_tan = function(value) {
  return Math.tan($.checkNum(value));
};

$._callInIsolate = function(isolate, function$) {
  isolate.eval$1(function$);
  $._globalState().get$topEventLoop().run$0();
};

$.addAll = function(receiver, collection) {
  if ($.isJsArray(receiver) !== true) return receiver.addAll$1(collection);
  var iterator = $.iterator(collection);
  for (; iterator.hasNext$0() === true; ) {
    $.add$1(receiver, iterator.next$0());
  }
};

$.RenderableParticle$ = function() {
  var t1 = new $.RenderableParticle(null, null, null, null, null, null);
  t1.RenderableParticle$0();
  return t1;
};

$.Primitives_objectToString = function(object) {
  return 'Instance of \'' + $.S($.Primitives_objectTypeName(object)) + '\'';
};

$.HashMapImplementation__firstProbe = function(hashCode, length$) {
  return $.and(hashCode, $.sub(length$, 1));
};

$.set$length = function(receiver, newLength) {
  if ($.isJsArray(receiver) === true) {
    $.checkNull(newLength);
    if (!((typeof newLength === 'number') && (newLength === (newLength | 0)))) throw $.captureStackTrace($.IllegalArgumentException$(newLength));
    if (newLength < 0) throw $.captureStackTrace($.IndexOutOfRangeException$(newLength));
    $.checkGrowable(receiver, 'set length');
    receiver.length = newLength;
  } else receiver.set$length(newLength);
  return newLength;
};

$.ioore = function(index) {
  throw $.captureStackTrace($.IndexOutOfRangeException$(index));
};

$.typeNameInFirefox = function(obj) {
  var name$ = $.constructorNameFallback(obj);
  if ($.eqB(name$, 'Window')) return 'DOMWindow';
  if ($.eqB(name$, 'Document')) return 'HTMLDocument';
  if ($.eqB(name$, 'XMLDocument')) return 'Document';
  if ($.eqB(name$, 'WorkerMessageEvent')) return 'MessageEvent';
  return name$;
};

$.gt$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) return a > b;
  return a.operator$gt$1(b);
};

$._Lists_indexOf = function(a, element, startIndex, endIndex) {
  if (typeof a !== 'string' && (typeof a !== 'object' || a === null || (a.constructor !== Array && !a.is$JavaScriptIndexingBehavior()))) return $._Lists_indexOf$bailout(1, a, element, startIndex, endIndex);
  if (typeof endIndex !== 'number') return $._Lists_indexOf$bailout(1, a, element, startIndex, endIndex);
  if ($.geB(startIndex, a.length)) return -1;
  if ($.ltB(startIndex, 0)) startIndex = 0;
  if (typeof startIndex !== 'number') return $._Lists_indexOf$bailout(2, a, element, startIndex, endIndex);
  for (var i = startIndex; i < endIndex; ++i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    if ($.eqB(a[i], element)) return i;
  }
  return -1;
};

$.hashCode = function(receiver) {
  if (typeof receiver === 'number') return receiver & 0x1FFFFFFF;
  if (!(typeof receiver === 'string')) return receiver.hashCode$0();
  var length$ = (receiver.length);
  for (var hash = 0, i = 0; i < length$; ++i) {
    var hash0 = 536870911 & hash + (receiver.charCodeAt(i));
    var hash1 = 536870911 & hash0 + (524287 & hash0 << 10);
    hash1 = (hash1 ^ $.shr(hash1, 6)) >>> 0;
    hash = hash1;
  }
  hash0 = 536870911 & hash + (67108863 & hash << 3);
  hash0 = (hash0 ^ $.shr(hash0, 11)) >>> 0;
  return 536870911 & hash0 + (16383 & hash0 << 15);
};

$._JsVisitedMap$ = function() {
  return new $._JsVisitedMap(null);
};

$.makeLiteralMap = function(keyValuePairs) {
  var iterator = $.iterator(keyValuePairs);
  var result = $.LinkedHashMapImplementation$();
  for (; iterator.hasNext$0() === true; ) {
    result.operator$indexSet$2(iterator.next$0(), iterator.next$0());
  }
  return result;
};

$.Math_min = function(a, b) {
  var c = $.compareTo(a, b);
  if ($.eqB(c, 0)) return a;
  if ($.ltB(c, 0)) {
    if (typeof b === 'number' && $.isNaN(b) === true) return b;
    return a;
  }
  if (typeof a === 'number' && $.isNaN(a) === true) return a;
  return b;
};

$.Collections_forEach = function(iterable, f) {
  for (var t1 = $.iterator(iterable); t1.hasNext$0() === true; ) {
    f.$call$1(t1.next$0());
  }
};

$.startsWith = function(receiver, other) {
  if (!(typeof receiver === 'string')) return receiver.startsWith$1(other);
  $.checkString(other);
  var length$ = $.get$length(other);
  if ($.gtB(length$, receiver.length)) return false;
  return other == receiver.substring(0, length$);
};

$.forEach = function(receiver, f) {
  if ($.isJsArray(receiver) !== true) return receiver.forEach$1(f);
  return $.Collections_forEach(receiver, f);
};

$.toStringForNativeObject = function(obj) {
  return 'Instance of ' + $.S($.getTypeNameOf(obj));
};

$.removeLast = function(receiver) {
  if ($.isJsArray(receiver) === true) {
    $.checkGrowable(receiver, 'removeLast');
    var t1 = $.get$length(receiver);
    if (t1 === 0) throw $.captureStackTrace($.IndexOutOfRangeException$(-1));
    return receiver.pop();
  }
  return receiver.removeLast$0();
};

$.Matrix4_makePerspective = function(fov, aspect, near, far) {
  var ymax = $.mul(near, $.Math_tan($.div($.mul(fov, 3.141592653589793), 360)));
  var ymin = $.neg(ymax);
  return $.Matrix4_makeFrustum($.mul(ymin, aspect), $.mul(ymax, aspect), ymin, ymax, near, far);
};

$._MessagePortEventsImpl$ = function(_ptr) {
  return new $._MessagePortEventsImpl(_ptr);
};

$.MeshBasicMaterial$ = function(parameters) {
  var t1 = new $.MeshBasicMaterial(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  t1.Material$1(parameters);
  t1.MeshBasicMaterial$1(parameters);
  return t1;
};

$._Collections_forEach = function(iterable, f) {
  for (var t1 = $.iterator(iterable); t1.hasNext$0() === true; ) {
    f.$call$1(t1.next$0());
  }
};

$.index = function(a, index) {
  if (typeof a == "string" || a.constructor === Array) {
    var key = (index >>> 0);
    if (key === index && key < (a.length)) return a[key];
  }
  return $.index$slow(a, index);
};

$.sort = function(receiver, compare) {
  if ($.isJsArray(receiver) !== true) return receiver.sort$1(compare);
  $.checkMutable(receiver, 'sort');
  $.DualPivotQuicksort_sort(receiver, compare);
};

$.DualPivotQuicksort_sort = function(a, compare) {
  $.DualPivotQuicksort__doSort(a, 0, $.sub($.get$length(a), 1), compare);
};

$._ElementEventsImpl$ = function(_ptr) {
  return new $._ElementEventsImpl(_ptr);
};

$.getFunctionForTypeNameOf = function() {
  var t1 = (typeof(navigator));
  if (!(t1 === 'object')) return $.typeNameInChrome;
  var userAgent = (navigator.userAgent);
  if ($.contains$1(userAgent, $.CTC9) === true) return $.typeNameInChrome;
  if ($.contains$1(userAgent, 'Firefox') === true) return $.typeNameInFirefox;
  if ($.contains$1(userAgent, 'MSIE') === true) return $.typeNameInIE;
  return $.constructorNameFallback;
};

$.World$ = function(containerSelector) {
  var t1 = new $.World(null, null, null, null, null, null, null, 100.0, 1.0, null, 90.0, null, null);
  t1.World$1(containerSelector);
  return t1;
};

$.dynamicBind = function(obj, name$, methods, arguments$) {
  var tag = $.getTypeNameOf(obj);
  var method = (methods[tag]);
  if (method == null) {
    var t1 = $._dynamicMetadata0();
    var t2 = !(t1 == null);
    t1 = t2;
  } else t1 = false;
  if (t1) {
    for (var i = 0; $.ltB(i, $.get$length($._dynamicMetadata0())); ++i) {
      var entry = $.index($._dynamicMetadata0(), i);
      if ($.contains$1(entry.get$set(), tag) === true) {
        method = (methods[entry.get$tag()]);
        if (!(method == null)) break;
      }
    }
  }
  if (method == null) method = (methods['Object']);
  var proto = (Object.getPrototypeOf(obj));
  if (method == null) method = (function () {if (Object.getPrototypeOf(this) === proto) {$.throwNoSuchMethod.$call$3(this, name$, Array.prototype.slice.call(arguments));} else {return Object.prototype[name$].apply(this, arguments);}});
  (!proto.hasOwnProperty(name$)) && $.defineProperty(proto, name$, method);
  return method.apply(obj, arguments$);
};

$.ProjectorRenderData$ = function() {
  var t1 = new $.ProjectorRenderData(null, null, null, null);
  t1.ProjectorRenderData$0();
  return t1;
};

$.DualPivotQuicksort__doSort = function(a, left, right, compare) {
  if ($.leB($.sub(right, left), 32)) $.DualPivotQuicksort_insertionSort_(a, left, right, compare);
  else $.DualPivotQuicksort__dualPivotQuicksort(a, left, right, compare);
};

$.Math_sin = function(x) {
  return $.MathNatives_sin(x);
};

$.toDouble = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.toDouble$0();
  return receiver;
};

$.ListFactory_List = function(length$) {
  return $.Primitives_newList(length$);
};

$.MathNatives_sin = function(value) {
  return Math.sin($.checkNum(value));
};

$.Arrays_indexOf = function(a, element, startIndex, endIndex) {
  if (typeof a !== 'string' && (typeof a !== 'object' || a === null || (a.constructor !== Array && !a.is$JavaScriptIndexingBehavior()))) return $.Arrays_indexOf$bailout(1, a, element, startIndex, endIndex);
  if (typeof endIndex !== 'number') return $.Arrays_indexOf$bailout(1, a, element, startIndex, endIndex);
  if ($.geB(startIndex, a.length)) return -1;
  if ($.ltB(startIndex, 0)) startIndex = 0;
  if (typeof startIndex !== 'number') return $.Arrays_indexOf$bailout(2, a, element, startIndex, endIndex);
  for (var i = startIndex; i < endIndex; ++i) {
    if (i !== (i | 0)) throw $.iae(i);
    var t1 = a.length;
    if (i < 0 || i >= t1) throw $.ioore(i);
    if ($.eqB(a[i], element)) return i;
  }
  return -1;
};

$._XMLHttpRequestUploadEventsImpl$ = function(_ptr) {
  return new $._XMLHttpRequestUploadEventsImpl(_ptr);
};

$.xor = function(a, b) {
  if ($.checkNumbers(a, b) === true) return (a ^ b) >>> 0;
  return a.operator$xor$1(b);
};

$.captureStackTrace = function(ex) {
  if (ex == null) ex = $.CTC0;
  var jsError = (new Error());
  jsError.dartException = ex;
  jsError.toString = $.toStringWrapper.$call$0;
  return jsError;
};

$.indexOf$1 = function(receiver, element) {
  if ($.isJsArray(receiver) === true) return $.Arrays_indexOf(receiver, element, 0, (receiver.length));
  if (typeof receiver === 'string') {
    $.checkNull(element);
    if (!(typeof element === 'string')) throw $.captureStackTrace($.IllegalArgumentException$(element));
    return receiver.indexOf(element);
  }
  return receiver.indexOf$1(element);
};

$.not = function(a) {
  if (typeof a === "number") return (~a) >>> 0;
  return a.operator$not$0();
};

$.StackOverflowException$ = function() {
  return new $.StackOverflowException();
};

$.eq = function(a, b) {
  if (a == null) return b == null;
  if (b == null) return false;
  if (typeof a === "object") {
    if (!!a.operator$eq$1) return a.operator$eq$1(b);
  }
  return a === b;
};

$.StringBufferImpl$ = function(content$) {
  var t1 = new $.StringBufferImpl(null, null);
  t1.StringBufferImpl$1(content$);
  return t1;
};

$.HashMapImplementation$ = function() {
  var t1 = new $.HashMapImplementation(null, null, null, null, null);
  t1.HashMapImplementation$0();
  return t1;
};

$.div$slow = function(a, b) {
  if ($.checkNumbers(a, b) === true) return a / b;
  return a.operator$div$1(b);
};

$.substring$1 = function(receiver, startIndex) {
  if (!(typeof receiver === 'string')) return receiver.substring$1(startIndex);
  return $.substring$2(receiver, startIndex, null);
};

$._SharedWorkerContextEventsImpl$ = function(_ptr) {
  return new $._SharedWorkerContextEventsImpl(_ptr);
};

$.UV$ = function(u, v) {
  var t1 = new $.UV(null, null);
  t1.UV$2(u, v);
  return t1;
};

$.gtB = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') var t1 = (a > b);
  else {
    t1 = $.gt$slow(a, b);
    t1 = t1 === true;
  }
  return t1;
};

$._IDBVersionChangeRequestEventsImpl$ = function(_ptr) {
  return new $._IDBVersionChangeRequestEventsImpl(_ptr);
};

$.setRuntimeTypeInfo = function(target, typeInfo) {
  !(target == null) && (target.builtin$typeInfo = typeInfo);
};

$.document = function() {
  return document;;
};

$._FileWriterEventsImpl$ = function(_ptr) {
  return new $._FileWriterEventsImpl(_ptr);
};

$.NoSuchMethodException$ = function(_receiver, _functionName, _arguments, existingArgumentNames) {
  return new $.NoSuchMethodException(existingArgumentNames, _arguments, _functionName, _receiver);
};

$.lt = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a < b) : $.lt$slow(a, b);
};

$.unwrapException = function(ex) {
  if ("dartException" in ex) return ex.dartException;
  var message = (ex.message);
  if (ex instanceof TypeError) {
    var type = (ex.type);
    var name$ = (ex.arguments ? ex.arguments[0] : "");
    if ($.eqB(type, 'property_not_function') || $.eqB(type, 'called_non_callable') || $.eqB(type, 'non_object_property_call') || $.eqB(type, 'non_object_property_load')) {
      if (typeof name$ === 'string' && $.startsWith(name$, '$call$') === true) return $.ObjectNotClosureException$();
      return $.NullPointerException$(null, $.CTC);
    }
    if ($.eqB(type, 'undefined_method')) {
      if (typeof name$ === 'string' && $.startsWith(name$, '$call$') === true) return $.ObjectNotClosureException$();
      return $.NoSuchMethodException$('', name$, [], null);
    }
    if (typeof message === 'string') {
      if ($.endsWith(message, 'is null') === true || $.endsWith(message, 'is undefined') === true || $.endsWith(message, 'is null or undefined') === true) return $.NullPointerException$(null, $.CTC);
      if ($.endsWith(message, 'is not a function') === true) return $.NoSuchMethodException$('', '<unknown>', [], null);
    }
    return $.ExceptionImplementation$(typeof message === 'string' ? message : '');
  }
  if (ex instanceof RangeError) {
    if (typeof message === 'string' && $.contains$1(message, 'call stack') === true) return $.StackOverflowException$();
    return $.IllegalArgumentException$('');
  }
  if (typeof InternalError == 'function' && ex instanceof InternalError) {
    if (typeof message === 'string' && message === 'too much recursion') return $.StackOverflowException$();
  }
  return ex;
};

$.shl = function(a, b) {
  if ($.checkNumbers(a, b) === true) {
    a = (a);
    b = (b);
    if (b < 0) throw $.captureStackTrace($.IllegalArgumentException$(b));
    if (b > 31) return 0;
    return (a << b) >>> 0;
  }
  return a.operator$shl$1(b);
};

$.ceil = function(receiver) {
  if (!(typeof receiver === 'number')) return receiver.ceil$0();
  return Math.ceil(receiver);
};

$.getTypeNameOf = function(obj) {
  var t1 = $._getTypeNameOf;
  if (t1 == null) $._getTypeNameOf = $.getFunctionForTypeNameOf();
  return $._getTypeNameOf.$call$1(obj);
};

$.Math_cos = function(x) {
  return $.MathNatives_cos(x);
};

$.MathNatives_cos = function(value) {
  return Math.cos($.checkNum(value));
};

$.sub = function(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? (a - b) : $.sub$slow(a, b);
};

$.DualPivotQuicksort__dualPivotQuicksort$bailout = function(state, env0, env1, env2, env3, env4, env5, env6, env7, env8, env9, env10, env11, env12, env13) {
  switch (state) {
    case 1:
      var a = env0;
      var left = env1;
      var right = env2;
      var compare = env3;
      break;
    case 2:
      a = env0;
      left = env1;
      right = env2;
      compare = env3;
      index5 = env4;
      el2 = env5;
      less = env6;
      el4 = env7;
      index1 = env8;
      break;
    case 3:
      a = env0;
      left = env1;
      right = env2;
      compare = env3;
      index5 = env4;
      el2 = env5;
      great = env6;
      less = env7;
      el4 = env8;
      index1 = env9;
      break;
    case 4:
      a = env0;
      less = env1;
      k = env2;
      compare = env3;
      left = env4;
      right = env5;
      great = env6;
      index1 = env7;
      index5 = env8;
      el2 = env9;
      t1 = env10;
      ak = env11;
      comp = env12;
      el4 = env13;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      var sixth = $.tdiv($.add($.sub(right, left), 1), 6);
      var index1 = $.add(left, sixth);
      var index5 = $.sub(right, sixth);
      var index3 = $.tdiv($.add(left, right), 2);
      var index2 = $.sub(index3, sixth);
      var index4 = $.add(index3, sixth);
      var el1 = $.index(a, index1);
      var el2 = $.index(a, index2);
      var el3 = $.index(a, index3);
      var el4 = $.index(a, index4);
      var el5 = $.index(a, index5);
      if ($.gtB(compare.$call$2(el1, el2), 0)) {
        var t0 = el1;
        el1 = el2;
        el2 = t0;
      }
      if ($.gtB(compare.$call$2(el4, el5), 0)) {
        t0 = el5;
        el5 = el4;
        el4 = t0;
      }
      if ($.gtB(compare.$call$2(el1, el3), 0)) {
        t0 = el3;
        el3 = el1;
        el1 = t0;
      }
      if ($.gtB(compare.$call$2(el2, el3), 0)) {
        t0 = el3;
        el3 = el2;
        el2 = t0;
      }
      if ($.gtB(compare.$call$2(el1, el4), 0)) {
        t0 = el1;
        el1 = el4;
        el4 = t0;
      }
      if ($.gtB(compare.$call$2(el3, el4), 0)) {
        t0 = el3;
        el3 = el4;
        el4 = t0;
      }
      if ($.gtB(compare.$call$2(el2, el5), 0)) {
        t0 = el2;
        el2 = el5;
        el5 = t0;
      }
      if ($.gtB(compare.$call$2(el2, el3), 0)) {
        t0 = el3;
        el3 = el2;
        el2 = t0;
      }
      if ($.gtB(compare.$call$2(el4, el5), 0)) {
        t0 = el5;
        el5 = el4;
        el4 = t0;
      }
      $.indexSet(a, index1, el1);
      $.indexSet(a, index3, el3);
      $.indexSet(a, index5, el5);
      $.indexSet(a, index2, $.index(a, left));
      $.indexSet(a, index4, $.index(a, right));
      var less = $.add(left, 1);
    case 2:
      state = 0;
      var great = $.sub(right, 1);
    case 3:
      state = 0;
      var t1 = $.eq(compare.$call$2(el2, el4), 0) === true;
    case 4:
      if (state == 4 || (state == 0 && t1)) {
        switch (state) {
          case 0:
            var k = less;
          case 4:
            L0: while (true) {
              switch (state) {
                case 0:
                  if (!$.leB(k, great)) break L0;
                case 4:
                  c$0:{
                    switch (state) {
                      case 0:
                        var ak = $.index(a, k);
                        var comp = compare.$call$2(ak, el2);
                      case 4:
                        state = 0;
                        if ($.eqB(comp, 0)) break c$0;
                        if ($.ltB(comp, 0)) {
                          if (!$.eqB(k, less)) {
                            $.indexSet(a, k, $.index(a, less));
                            $.indexSet(a, less, ak);
                          }
                          less = $.add(less, 1);
                        } else {
                          for (; true; ) {
                            comp = compare.$call$2($.index(a, great), el2);
                            if ($.gtB(comp, 0)) {
                              great = $.sub(great, 1);
                              continue;
                            } else {
                              if ($.ltB(comp, 0)) {
                                $.indexSet(a, k, $.index(a, less));
                                var less0 = $.add(less, 1);
                                $.indexSet(a, less, $.index(a, great));
                                var great0 = $.sub(great, 1);
                                $.indexSet(a, great, ak);
                                great = great0;
                                less = less0;
                                break;
                              } else {
                                $.indexSet(a, k, $.index(a, great));
                                great0 = $.sub(great, 1);
                                $.indexSet(a, great, ak);
                                great = great0;
                                break;
                              }
                            }
                          }
                        }
                    }
                  }
                  k = $.add(k, 1);
              }
            }
        }
      } else {
        for (k = less; $.leB(k, great); k = $.add(k, 1)) {
          ak = $.index(a, k);
          if ($.ltB(compare.$call$2(ak, el2), 0)) {
            if (!$.eqB(k, less)) {
              $.indexSet(a, k, $.index(a, less));
              $.indexSet(a, less, ak);
            }
            less = $.add(less, 1);
          } else {
            if ($.gtB(compare.$call$2(ak, el4), 0)) {
              for (; true; ) {
                if ($.gtB(compare.$call$2($.index(a, great), el4), 0)) {
                  great = $.sub(great, 1);
                  if ($.ltB(great, k)) break;
                  continue;
                } else {
                  if ($.ltB(compare.$call$2($.index(a, great), el2), 0)) {
                    $.indexSet(a, k, $.index(a, less));
                    less0 = $.add(less, 1);
                    $.indexSet(a, less, $.index(a, great));
                    great0 = $.sub(great, 1);
                    $.indexSet(a, great, ak);
                    great = great0;
                    less = less0;
                  } else {
                    $.indexSet(a, k, $.index(a, great));
                    great0 = $.sub(great, 1);
                    $.indexSet(a, great, ak);
                    great = great0;
                  }
                  break;
                }
              }
            }
          }
        }
      }
      $.indexSet(a, left, $.index(a, $.sub(less, 1)));
      $.indexSet(a, $.sub(less, 1), el2);
      $.indexSet(a, right, $.index(a, $.add(great, 1)));
      $.indexSet(a, $.add(great, 1), el4);
      $.DualPivotQuicksort__doSort(a, left, $.sub(less, 2), compare);
      $.DualPivotQuicksort__doSort(a, $.add(great, 2), right, compare);
      if (t1) return;
      if ($.ltB(less, index1) && $.gtB(great, index5)) {
        for (; $.eqB(compare.$call$2($.index(a, less), el2), 0); ) {
          less = $.add(less, 1);
        }
        for (; $.eqB(compare.$call$2($.index(a, great), el4), 0); ) {
          great = $.sub(great, 1);
        }
        for (k = less; $.leB(k, great); k = $.add(k, 1)) {
          ak = $.index(a, k);
          if ($.eqB(compare.$call$2(ak, el2), 0)) {
            if (!$.eqB(k, less)) {
              $.indexSet(a, k, $.index(a, less));
              $.indexSet(a, less, ak);
            }
            less = $.add(less, 1);
          } else {
            if ($.eqB(compare.$call$2(ak, el4), 0)) {
              for (; true; ) {
                if ($.eqB(compare.$call$2($.index(a, great), el4), 0)) {
                  great = $.sub(great, 1);
                  if ($.ltB(great, k)) break;
                  continue;
                } else {
                  if ($.ltB(compare.$call$2($.index(a, great), el2), 0)) {
                    $.indexSet(a, k, $.index(a, less));
                    less0 = $.add(less, 1);
                    $.indexSet(a, less, $.index(a, great));
                    great0 = $.sub(great, 1);
                    $.indexSet(a, great, ak);
                    great = great0;
                    less = less0;
                  } else {
                    $.indexSet(a, k, $.index(a, great));
                    great0 = $.sub(great, 1);
                    $.indexSet(a, great, ak);
                    great = great0;
                  }
                  break;
                }
              }
            }
          }
        }
        $.DualPivotQuicksort__doSort(a, less, great, compare);
      } else $.DualPivotQuicksort__doSort(a, less, great, compare);
  }
};

$.allMatchesInStringUnchecked$bailout = function(state, needle, haystack, length$, patternLength, result) {
  for (var startIndex = 0; true; ) {
    var position = $.indexOf$2(haystack, needle, startIndex);
    if ($.eqB(position, -1)) break;
    result.push($.StringMatch$(position, haystack, needle));
    var endIndex = $.add(position, patternLength);
    if ($.eqB(endIndex, length$)) break;
    else {
      startIndex = $.eqB(position, endIndex) ? $.add(startIndex, 1) : endIndex;
    }
  }
  return result;
};

$._Lists_indexOf$bailout = function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var a = env0;
      var element = env1;
      var startIndex = env2;
      var endIndex = env3;
      break;
    case 1:
      a = env0;
      element = env1;
      startIndex = env2;
      endIndex = env3;
      break;
    case 2:
      a = env0;
      element = env1;
      startIndex = env2;
      endIndex = env3;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 1:
      state = 0;
      if ($.geB(startIndex, $.get$length(a))) return -1;
      if ($.ltB(startIndex, 0)) startIndex = 0;
    case 2:
      state = 0;
      for (var i = startIndex; $.ltB(i, endIndex); i = $.add(i, 1)) {
        if ($.eqB($.index(a, i), element)) return i;
      }
      return -1;
  }
};

$.Arrays_indexOf$bailout = function(state, env0, env1, env2, env3) {
  switch (state) {
    case 1:
      var a = env0;
      var element = env1;
      var startIndex = env2;
      var endIndex = env3;
      break;
    case 1:
      a = env0;
      element = env1;
      startIndex = env2;
      endIndex = env3;
      break;
    case 2:
      a = env0;
      element = env1;
      startIndex = env2;
      endIndex = env3;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 1:
      state = 0;
      if ($.geB(startIndex, $.get$length(a))) return -1;
      if ($.ltB(startIndex, 0)) startIndex = 0;
    case 2:
      state = 0;
      for (var i = startIndex; $.ltB(i, endIndex); i = $.add(i, 1)) {
        if ($.eqB($.index(a, i), element)) return i;
      }
      return -1;
  }
};

$.Arrays_copy$bailout = function(state, env0, env1, env2, env3, env4) {
  switch (state) {
    case 1:
      var src = env0;
      var srcStart = env1;
      var dst = env2;
      var dstStart = env3;
      var count = env4;
      break;
    case 1:
      src = env0;
      srcStart = env1;
      dst = env2;
      dstStart = env3;
      count = env4;
      break;
    case 1:
      src = env0;
      srcStart = env1;
      dst = env2;
      dstStart = env3;
      count = env4;
      break;
    case 2:
      src = env0;
      dst = env1;
      dstStart = env2;
      count = env3;
      srcStart = env4;
      break;
    case 3:
      src = env0;
      dst = env1;
      count = env2;
      srcStart = env3;
      dstStart = env4;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
    case 1:
      state = 0;
    case 1:
      state = 0;
      if (srcStart == null) srcStart = 0;
    case 2:
      state = 0;
      if (dstStart == null) dstStart = 0;
    case 3:
      state = 0;
      if ($.ltB(srcStart, dstStart)) {
        for (var i = $.sub($.add(srcStart, count), 1), j = $.sub($.add(dstStart, count), 1); $.geB(i, srcStart); i = $.sub(i, 1), j = $.sub(j, 1)) {
          $.indexSet(dst, j, $.index(src, i));
        }
      } else {
        for (i = srcStart, j = dstStart; $.ltB(i, $.add(srcStart, count)); i = $.add(i, 1), j = $.add(j, 1)) {
          $.indexSet(dst, j, $.index(src, i));
        }
      }
  }
};

$.DualPivotQuicksort_insertionSort_$bailout = function(state, a, left, right, compare) {
  for (var i = $.add(left, 1); $.leB(i, right); i = $.add(i, 1)) {
    var el = $.index(a, i);
    var j = i;
    while (true) {
      if (!($.gtB(j, left) && $.gtB(compare.$call$2($.index(a, $.sub(j, 1)), el), 0))) break;
      $.indexSet(a, j, $.index(a, $.sub(j, 1)));
      j = $.sub(j, 1);
    }
    $.indexSet(a, j, el);
  }
};

$.buildDynamicMetadata$bailout = function(state, env0, env1, env2, env3, env4, env5, env6) {
  switch (state) {
    case 1:
      var inputTable = env0;
      break;
    case 2:
      inputTable = env0;
      result = env1;
      tagNames = env2;
      tag = env3;
      i = env4;
      tags = env5;
      set = env6;
      break;
  }
  switch (state) {
    case 0:
    case 1:
      state = 0;
      var result = [];
      var i = 0;
    case 2:
      L0: while (true) {
        switch (state) {
          case 0:
            if (!$.ltB(i, $.get$length(inputTable))) break L0;
            var tag = $.index($.index(inputTable, i), 0);
            var tags = $.index($.index(inputTable, i), 1);
            var set = $.HashSetImplementation$();
            $.setRuntimeTypeInfo(set, ({E: 'String'}));
            var tagNames = $.split(tags, '|');
          case 2:
            state = 0;
            for (var j = 0; $.ltB(j, $.get$length(tagNames)); ++j) {
              set.add$1($.index(tagNames, j));
            }
            $.add$1(result, $.MetaInfo$(tag, tags, set));
            ++i;
        }
      }
      return result;
  }
};

$._Lists_getRange$bailout = function(state, a, start, length$, accumulator) {
  if ($.ltB(length$, 0)) throw $.captureStackTrace($.IllegalArgumentException$('length'));
  if ($.ltB(start, 0)) throw $.captureStackTrace($.IndexOutOfRangeException$(start));
  var end = $.add(start, length$);
  if ($.gtB(end, $.get$length(a))) throw $.captureStackTrace($.IndexOutOfRangeException$(end));
  for (var i = start; $.ltB(i, end); i = $.add(i, 1)) {
    $.add$1(accumulator, $.index(a, i));
  }
  return accumulator;
};

$.StringBase__toJsStringArray$bailout = function(state, strings) {
  $.checkNull(strings);
  var length$ = $.get$length(strings);
  if ($.isJsArray(strings) === true) {
    for (var i = 0; $.ltB(i, length$); ++i) {
      var string = $.index(strings, i);
      $.checkNull(string);
      if (!(typeof string === 'string')) throw $.captureStackTrace($.IllegalArgumentException$(string));
    }
    var array = strings;
  } else {
    array = $.ListFactory_List(length$);
    for (i = 0; $.ltB(i, length$); ++i) {
      string = $.index(strings, i);
      $.checkNull(string);
      if (!(typeof string === 'string')) throw $.captureStackTrace($.IllegalArgumentException$(string));
      var t1 = array.length;
      if (i < 0 || i >= t1) throw $.ioore(i);
      array[i] = string;
    }
  }
  return array;
};

$.dynamicBind.$call$4 = $.dynamicBind;
$.dynamicBind.$name = "dynamicBind";
$.throwNoSuchMethod.$call$3 = $.throwNoSuchMethod;
$.throwNoSuchMethod.$name = "throwNoSuchMethod";
$.typeNameInIE.$call$1 = $.typeNameInIE;
$.typeNameInIE.$name = "typeNameInIE";
$.typeNameInChrome.$call$1 = $.typeNameInChrome;
$.typeNameInChrome.$name = "typeNameInChrome";
$.toStringWrapper.$call$0 = $.toStringWrapper;
$.toStringWrapper.$name = "toStringWrapper";
$.invokeClosure.$call$5 = $.invokeClosure;
$.invokeClosure.$name = "invokeClosure";
$.typeNameInFirefox.$call$1 = $.typeNameInFirefox;
$.typeNameInFirefox.$name = "typeNameInFirefox";
$.constructorNameFallback.$call$1 = $.constructorNameFallback;
$.constructorNameFallback.$name = "constructorNameFallback";
Isolate.$finishClasses($$);
$$ = {};
Isolate.makeConstantList = function(list) {
  list.immutable$list = true;
  list.fixed$length = true;
  return list;
};
$.CTC = Isolate.makeConstantList([]);
$.CTC4 = new Isolate.$isolateProperties.UnsupportedOperationException('');
$.CTC6 = new Isolate.$isolateProperties.NotImplementedException(null);
$.CTC3 = new Isolate.$isolateProperties._DeletedKeySentinel();
$.CTC9 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, 'Chrome|DumpRenderTree');
$.CTC10 = new Isolate.$isolateProperties.Object();
$.CTC7 = new Isolate.$isolateProperties.UnsupportedOperationException('TODO(jacobr): should we impl?');
$.CTC5 = new Isolate.$isolateProperties.IllegalArgumentException('Invalid list length');
$.CTC8 = new Isolate.$isolateProperties.JSSyntaxRegExp(false, false, '^#[_a-zA-Z]\\w*$');
$.CTC0 = new Isolate.$isolateProperties.NullPointerException(Isolate.$isolateProperties.CTC, null);
$.CTC1 = new Isolate.$isolateProperties.NoMoreElementsException();
$.CTC2 = new Isolate.$isolateProperties.EmptyQueueException();
$.Matrix4___m2 = null;
$._getTypeNameOf = null;
$.Matrix4___v1 = null;
$.Frustum___v1 = null;
$._cachedBrowserPrefix = null;
$.Three_Object3DCount = 0;
$.Matrix4___m1 = null;
$.Matrix4___v2 = null;
$.Log_debugElement = null;
$.Matrix4___v3 = null;
$.Three_GeometryCount = 0;
$.Three_MaterialCount = 0;
var $ = null;
Isolate.$finishClasses($$);
$$ = {};
Isolate = Isolate.$finishIsolateConstructor(Isolate);
var $ = new Isolate();
$.$defineNativeClass = function(cls, fields, methods) {
  var generateGetterSetter = function(field, prototype) {
  var len = field.length;
  var lastChar = field[len - 1];
  var needsGetter = lastChar == '?' || lastChar == '=';
  var needsSetter = lastChar == '!' || lastChar == '=';
  if (needsGetter || needsSetter) field = field.substring(0, len - 1);
  if (needsGetter) {
    var getterString = "return this." + field + ";";
    prototype["get$" + field] = new Function(getterString);
  }
  if (needsSetter) {
    var setterString = "this." + field + " = v;";
    prototype["set$" + field] = new Function("v", setterString);
  }
  return field;
};
  for (var i = 0; i < fields.length; i++) {
    generateGetterSetter(fields[i], methods);
  }
  for (var method in methods) {
    $.dynamicFunction(method)[cls] = methods[method];
  }
};
$.defineProperty(Object.prototype, 'is$List', function() { return false; });
$.defineProperty(Object.prototype, 'is$Map', function() { return false; });
$.defineProperty(Object.prototype, 'is$JavaScriptIndexingBehavior', function() { return false; });
$.defineProperty(Object.prototype, 'is$Collection', function() { return false; });
$.defineProperty(Object.prototype, 'is$Element', function() { return false; });
$.defineProperty(Object.prototype, 'toString$0', function() { return $.toStringForNativeObject(this); });
$.$defineNativeClass('AbstractWorker', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._AbstractWorkerEventsImpl$(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 }
});

$.$defineNativeClass('HTMLAnchorElement', ["name?"], {
 toString$0: function() {
  return this.toString();
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('WebKitAnimation', ["name?"], {
});

$.$defineNativeClass('WebKitAnimationList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('HTMLAppletElement', ["width=", "object=", "name?", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLAreaElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Attr', ["value=", "name?"], {
});

$.$defineNativeClass('AudioBuffer', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('AudioContext', [], {
 get$on: function() {
  return $._AudioContextEventsImpl$(this);
 }
});

$.$defineNativeClass('HTMLAudioElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('AudioParam', ["value=", "name?"], {
});

$.$defineNativeClass('HTMLBRElement', [], {
 clear$0: function() { return this.clear.$call$0(); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('BarInfo', ["visible?"], {
});

$.$defineNativeClass('HTMLBaseElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLBaseFontElement', ["color?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('BatteryManager', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._BatteryManagerEventsImpl$(this);
 }
});

$.$defineNativeClass('HTMLBodyElement', [], {
 get$on: function() {
  return $._BodyElementEventsImpl$(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLButtonElement', ["value=", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('WebKitCSSKeyframesRule', ["name?"], {
});

$.$defineNativeClass('WebKitCSSMatrix', ["b="], {
 toString$0: function() {
  return this.toString();
 },
 scale$3: function(scaleX, scaleY, scaleZ) {
  return this.scale(scaleX,scaleY,scaleZ);
 },
 get$scale: function() { return new $.BoundClosure0(this, 'scale$3'); }
});

$.$defineNativeClass('CSSRuleList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('CSSStyleDeclaration', ["length?"], {
 set$width: function(value) {
  this.setProperty$3('width', value, '');
 },
 get$width: function() {
  return this.getPropertyValue$1('width');
 },
 get$transform: function() {
  return this.getPropertyValue$1($.S($._browserPrefix()) + 'transform');
 },
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.get$transform().$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 get$position: function() {
  return this.getPropertyValue$1('position');
 },
 get$opacity: function() {
  return this.getPropertyValue$1('opacity');
 },
 set$height: function(value) {
  this.setProperty$3('height', value, '');
 },
 get$height: function() {
  return this.getPropertyValue$1('height');
 },
 get$filter: function() {
  return this.getPropertyValue$1($.S($._browserPrefix()) + 'filter');
 },
 filter$1: function(arg0) { return this.get$filter().$call$1(arg0); },
 get$color: function() {
  return this.getPropertyValue$1('color');
 },
 get$clip: function() {
  return this.getPropertyValue$1('clip');
 },
 clip$0: function() { return this.get$clip().$call$0(); },
 get$clear: function() {
  return this.getPropertyValue$1('clear');
 },
 clear$0: function() { return this.get$clear().$call$0(); },
 setProperty$3: function(propertyName, value, priority) {
  return this.setProperty(propertyName,value,priority);
 },
 getPropertyValue$1: function(propertyName) {
  return this.getPropertyValue(propertyName);
 },
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('CSSValueList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('HTMLCanvasElement', ["width=", "height="], {
 getContext$1: function(contextId) {
  return this.getContext(contextId);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('CanvasRenderingContext2D', ["strokeStyle!", "lineWidth!", "lineJoin!", "lineCap!", "globalCompositeOperation!", "globalAlpha!", "fillStyle!"], {
 translate$2: function(tx, ty) {
  return this.translate(tx,ty);
 },
 transform$6: function(m11, m12, m21, m22, dx, dy) {
  return this.transform(m11,m12,m21,m22,dx,dy);
 },
 strokeRect$5: function(x, y, width, height, lineWidth) {
  return this.strokeRect(x,y,width,height,lineWidth);
 },
 strokeRect$4: function(x,y,width,height) {
  return this.strokeRect(x,y,width,height);
},
 stroke$0: function() {
  return this.stroke();
 },
 setTransform$6: function(m11, m12, m21, m22, dx, dy) {
  return this.setTransform(m11,m12,m21,m22,dx,dy);
 },
 scale$2: function(sx, sy) {
  return this.scale(sx,sy);
 },
 get$scale: function() { return new $.BoundClosure1(this, 'scale$2'); },
 save$0: function() {
  return this.save();
 },
 rotate$1: function(angle) {
  return this.rotate(angle);
 },
 restore$0: function() {
  return this.restore();
 },
 putImageData$7: function(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
  return this.putImageData(imagedata,dx,dy,dirtyX,dirtyY,dirtyWidth,dirtyHeight);
 },
 putImageData$3: function(imagedata,dx,dy) {
  return this.putImageData(imagedata,dx,dy);
},
 moveTo$2: function(x, y) {
  return this.moveTo(x,y);
 },
 lineTo$2: function(x, y) {
  return this.lineTo(x,y);
 },
 getImageData$4: function(sx, sy, sw, sh) {
  return this.getImageData(sx,sy,sw,sh);
 },
 fillRect$4: function(x, y, width, height) {
  return this.fillRect(x,y,width,height);
 },
 fill$0: function() {
  return this.fill();
 },
 drawImage$9: function(canvas_OR_image_OR_video, sx_OR_x, sy_OR_y, sw_OR_width, height_OR_sh, dx, dy, dw, dh) {
  return this.drawImage(canvas_OR_image_OR_video,sx_OR_x,sy_OR_y,sw_OR_width,height_OR_sh,dx,dy,dw,dh);
 },
 drawImage$3: function(canvas_OR_image_OR_video,sx_OR_x,sy_OR_y) {
  return this.drawImage(canvas_OR_image_OR_video,sx_OR_x,sy_OR_y);
},
 createPattern$2: function(canvas_OR_image, repetitionType) {
  return this.createPattern(canvas_OR_image,repetitionType);
 },
 closePath$0: function() {
  return this.closePath();
 },
 clip$0: function() {
  return this.clip();
 },
 clearRect$4: function(x, y, width, height) {
  return this.clearRect(x,y,width,height);
 },
 beginPath$0: function() {
  return this.beginPath();
 }
});

$.$defineNativeClass('CharacterData', ["length?", "data?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('ClientRect', ["width?", "height?"], {
});

$.$defineNativeClass('ClientRectList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('CompositionEvent', ["data?"], {
});

_ConsoleImpl = (typeof console == 'undefined' ? {} : console);
$.$defineNativeClass('HTMLContentElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ConvolverNode', [], {
 normalize$0: function() { return this.normalize.$call$0(); }
});

$.$defineNativeClass('HTMLDListElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('DOMApplicationCache', [], {
 update$0: function() {
  return this.update();
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._DOMApplicationCacheEventsImpl$(this);
 }
});

$.$defineNativeClass('DOMError', ["name?"], {
});

$.$defineNativeClass('DOMException', ["name?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('DOMFileSystem', ["name?"], {
});

$.$defineNativeClass('DOMFileSystemSync', ["name?"], {
});

$.$defineNativeClass('DOMMimeTypeArray', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('DOMPlugin', ["name?", "length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('DOMPluginArray', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('DOMSelection', [], {
 toString$0: function() {
  return this.toString();
 },
 empty$0: function() {
  return this.empty();
 }
});

$.$defineNativeClass('DOMSettableTokenList', ["value="], {
});

$.$defineNativeClass('DOMStringList', ["length?"], {
 contains$1: function(string) {
  return this.contains(string);
 },
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'String'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('DOMTokenList', ["length?"], {
 toString$0: function() {
  return this.toString();
 },
 remove$1: function(token) {
  return this.remove(token);
 },
 contains$1: function(token) {
  return this.contains(token);
 },
 add$1: function(token) {
  return this.add(token);
 },
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('DataTransferItemList', ["length?"], {
 clear$0: function() {
  return this.clear();
 },
 add$2: function(data_OR_file, type) {
  return this.add(data_OR_file,type);
 },
 add$1: function(data_OR_file) {
  return this.add(data_OR_file);
},
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('DedicatedWorkerContext', [], {
 postMessage$2: function(message, messagePorts) {
  return this.postMessage(message,messagePorts);
 },
 postMessage$1: function(message) {
  return this.postMessage(message);
},
 get$on: function() {
  return $._DedicatedWorkerContextEventsImpl$(this);
 }
});

$.$defineNativeClass('DeprecatedPeerConnection', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._DeprecatedPeerConnectionEventsImpl$(this);
 }
});

$.$defineNativeClass('HTMLDetailsElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDirectoryElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDivElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLDocument', [], {
 query$1: function(selectors) {
  if ($.CTC8.hasMatch$1(selectors) === true) return this.$dom_getElementById$1($.substring$1(selectors, 1));
  return this.$dom_querySelector$1(selectors);
 },
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
 },
 $dom_getElementById$1: function(elementId) {
  return this.getElementById(elementId);
 },
 get$on: function() {
  return $._DocumentEventsImpl$(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('DocumentFragment', [], {
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
 },
 get$on: function() {
  return $._ElementEventsImpl$(this);
 },
 get$parent: function() {
  return;
 },
 get$$$dom_lastElementChild: function() {
  return $.last(this.get$elements());
 },
 get$$$dom_firstElementChild: function() {
  return this.get$elements().first$0();
 },
 get$id: function() {
  return '';
 },
 get$translate: function() {
  return false;
 },
 translate$2: function(arg0, arg1) { return this.get$translate().$call$2(arg0, arg1); },
 set$innerHTML: function(value) {
  if (Object.getPrototypeOf(this).hasOwnProperty('set$innerHTML')) {
    $.clear(this.get$nodes());
  var e = $._ElementFactoryProvider_Element$tag('div');
  e.set$innerHTML(value);
  var nodes = $.ListFactory_List$from(e.get$nodes());
  $.addAll(this.get$nodes(), nodes);
  } else {
    return Object.prototype.set$innerHTML.call(this, value);
  }
 },
 query$1: function(selectors) {
  return this.$dom_querySelector$1(selectors);
 },
 set$elements: function(value) {
  var copy = $.ListFactory_List$from(value);
  var elements = this.get$elements();
  $.clear(elements);
  $.addAll(elements, copy);
 },
 get$elements: function() {
  var t1 = this._elements;
  if (t1 == null) this._elements = $.FilteredElementList$(this);
  return this._elements;
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('DocumentType', ["name?"], {
});

$.$defineNativeClass('Element', ["innerHTML!", "id?"], {
 $dom_querySelector$1: function(selectors) {
  return this.querySelector(selectors);
 },
 get$$$dom_scrollWidth: function() {
  return this.scrollWidth;;
 },
 get$$$dom_scrollHeight: function() {
  return this.scrollHeight;;
 },
 get$$$dom_lastElementChild: function() {
  return this.lastElementChild;;
 },
 get$$$dom_firstElementChild: function() {
  return this.firstElementChild;;
 },
 translate$2: function(arg0, arg1) { return this.translate.$call$2(arg0, arg1); },
 get$$$dom_children: function() {
  return this.children;;
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._ElementEventsImpl$(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 },
 query$1: function(selectors) {
  return this.$dom_querySelector$1(selectors);
 },
 get$elements: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$elements')) {
    return $._ChildrenElementList$_wrap(this);
  } else {
    return Object.prototype.get$elements.call(this);
  }
 },
 set$elements: function(value) {
  if (Object.getPrototypeOf(this).hasOwnProperty('set$elements')) {
    var elements = this.get$elements();
  $.clear(elements);
  $.addAll(elements, value);
  } else {
    return Object.prototype.set$elements.call(this, value);
  }
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLEmbedElement', ["width=", "name?", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Entry', ["name?"], {
 remove$2: function(successCallback, errorCallback) {
  return this.remove($.convertDartClosureToJS(successCallback, 0),$.convertDartClosureToJS(errorCallback, 1));
 },
 remove$1: function(successCallback) {
  successCallback = $.convertDartClosureToJS(successCallback, 0);
  return this.remove(successCallback);
},
 moveTo$4: function(parent, name, successCallback, errorCallback) {
  return this.moveTo(parent,name,$.convertDartClosureToJS(successCallback, 1),$.convertDartClosureToJS(errorCallback, 1));
 },
 moveTo$2: function(parent$,name$) {
  return this.moveTo(parent$,name$);
}
});

$.$defineNativeClass('EntryArray', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('EntryArraySync', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('EntrySync', ["name?"], {
 remove$0: function() {
  return this.remove();
 },
 moveTo$2: function(parent, name) {
  return this.moveTo(parent,name);
 }
});

$.$defineNativeClass('EventException', ["name?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('EventSource', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._EventSourceEventsImpl$(this);
 }
});

$.$defineNativeClass('EventTarget', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
    return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._EventsImpl$(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 }
});

$.$defineNativeClass('HTMLFieldSetElement', ["name?", "lib$_FieldSetElementImpl$elements?"], {
 get$elements: function() {
  return this.lib$_FieldSetElementImpl$elements;
 },
 set$elements: function(x) {
  this.lib$_FieldSetElementImpl$elements = x;
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('File', ["name?"], {
});

$.$defineNativeClass('FileException', ["name?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('FileList', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'File'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('FileReader', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._FileReaderEventsImpl$(this);
 }
});

$.$defineNativeClass('FileWriter', ["position?", "length?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 length$0: function() { return this.length.$call$0(); },
 get$on: function() {
  return $._FileWriterEventsImpl$(this);
 }
});

$.$defineNativeClass('FileWriterSync', ["position?", "length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('Float32Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'num'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Float64Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'num'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLFontElement', ["color?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLFormElement', ["name?", "length?"], {
 reset$0: function() {
  return this.reset();
 },
 length$0: function() { return this.length.$call$0(); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLFrameElement', ["width?", "name?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLFrameSetElement', [], {
 get$on: function() {
  return $._FrameSetElementEventsImpl$(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLHRElement', ["width="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLAllCollection', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('HTMLCollection', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'Node'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLOptionsCollection', [], {
 remove$1: function(index) {
  return this.remove(index);
 },
 set$length: function(value) {
  this.length = value;;
 },
 get$length: function() {
  return this.length;;
 },
 length$0: function() { return this.get$length().$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLHeadElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLHeadingElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('History', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('HTMLHtmlElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('IDBCursor', ["key?"], {
});

$.$defineNativeClass('IDBCursorWithValue', ["value?"], {
});

$.$defineNativeClass('IDBDatabase', ["name?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._IDBDatabaseEventsImpl$(this);
 }
});

$.$defineNativeClass('IDBDatabaseException', ["name?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('IDBIndex', ["name?"], {
});

$.$defineNativeClass('IDBObjectStore', ["name?"], {
 clear$0: function() {
  return this.clear();
 },
 add$2: function(value, key) {
  return this.add(value,key);
 },
 add$1: function(value) {
  return this.add(value);
}
});

$.$defineNativeClass('IDBRequest', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
    return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._IDBRequestEventsImpl$(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 }
});

$.$defineNativeClass('IDBTransaction', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._IDBTransactionEventsImpl$(this);
 }
});

$.$defineNativeClass('IDBVersionChangeRequest', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._IDBVersionChangeRequestEventsImpl$(this);
 }
});

$.$defineNativeClass('HTMLIFrameElement', ["width=", "name?", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ImageData', ["width?", "height?", "data?"], {
});

$.$defineNativeClass('HTMLImageElement', ["y?", "x?", "width=", "name?", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLInputElement', ["width=", "value=", "pattern?", "name?", "height="], {
 get$on: function() {
  return $._InputElementEventsImpl$(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('Int16Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Int32Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Int8Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('JavaScriptAudioNode', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._JavaScriptAudioNodeEventsImpl$(this);
 }
});

$.$defineNativeClass('HTMLKeygenElement', ["name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLIElement', ["value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLabelElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLegendElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLLinkElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('LocalMediaStream', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 }
});

$.$defineNativeClass('Location', [], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('HTMLMapElement', ["name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLMarqueeElement', ["width=", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('MediaController', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 }
});

$.$defineNativeClass('HTMLMediaElement', [], {
 get$on: function() {
  return $._MediaElementEventsImpl$(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('MediaList', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'String'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('MediaStream', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_removeEventListener$3')) {
    return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_removeEventListener$3.call(this, type, listener, useCapture);
  }
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  if (Object.getPrototypeOf(this).hasOwnProperty('$dom_addEventListener$3')) {
    return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
  } else {
    return Object.prototype.$dom_addEventListener$3.call(this, type, listener, useCapture);
  }
 },
 get$on: function() {
  return $._MediaStreamEventsImpl$(this);
 }
});

$.$defineNativeClass('MediaStreamList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('MediaStreamTrackList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('HTMLMenuElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('MessageEvent', ["ports?", "data?"], {
});

$.$defineNativeClass('MessagePort', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 postMessage$2: function(message, messagePorts) {
  return this.postMessage(message,messagePorts);
 },
 postMessage$1: function(message) {
  return this.postMessage(message);
},
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._MessagePortEventsImpl$(this);
 }
});

$.$defineNativeClass('HTMLMetaElement', ["name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLMeterElement', ["value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLModElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('MouseEvent', ["y?", "x?"], {
});

$.$defineNativeClass('NamedNodeMap', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'Node'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Navigator', ["userAgent?"], {
});

$.$defineNativeClass('Node', [], {
 $dom_replaceChild$2: function(newChild, oldChild) {
  return this.replaceChild(newChild,oldChild);
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_removeChild$1: function(oldChild) {
  return this.removeChild(oldChild);
 },
 contains$1: function(other) {
  return this.contains(other);
 },
 $dom_appendChild$1: function(newChild) {
  return this.appendChild(newChild);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 set$text: function(value) {
  this.textContent = value;;
 },
 get$parent: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$parent')) {
    return this.parentNode;;
  } else {
    return Object.prototype.get$parent.call(this);
  }
 },
 get$$$dom_childNodes: function() {
  return this.childNodes;;
 },
 replaceWith$1: function(otherNode) {
  try {
    var parent$ = this.get$parent();
    parent$.$dom_replaceChild$2(otherNode, this);
  } catch (exception) {
    $.unwrapException(exception);
  }
  return this;
 },
 remove$0: function() {
  var t1 = this.get$parent();
  !(t1 == null) && this.get$parent().$dom_removeChild$1(this);
  return this;
 },
 get$nodes: function() {
  return $._ChildNodeListLazy$(this);
 }
});

$.$defineNativeClass('NodeIterator', [], {
 filter$1: function(arg0) { return this.filter.$call$1(arg0); }
});

$.$defineNativeClass('NodeList', ["length?"], {
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 getRange$2: function(start, rangeLength) {
  return $._NodeListWrapper$($._Lists_getRange(this, start, rangeLength, []));
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 get$first: function() {
  return this.operator$index$1(0);
 },
 first$0: function() { return this.get$first().$call$0(); },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._NodeListWrapper$($._Collections_filter(this, [], f));
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 operator$indexSet$2: function(index, value) {
  this._parent.$dom_replaceChild$2(value, this.operator$index$1(index));
 },
 clear$0: function() {
  this._parent.set$text('');
 },
 removeLast$0: function() {
  var result = this.last$0();
  !(result == null) && this._parent.$dom_removeChild$1(result);
  return result;
 },
 addAll$1: function(collection) {
  for (var t1 = $.iterator(collection), t2 = this._parent; t1.hasNext$0() === true; ) {
    t2.$dom_appendChild$1(t1.next$0());
  }
 },
 addLast$1: function(value) {
  this._parent.$dom_appendChild$1(value);
 },
 add$1: function(value) {
  this._parent.$dom_appendChild$1(value);
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'Node'}));
  return t1;
 },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Notification', ["tag?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._NotificationEventsImpl$(this);
 }
});

$.$defineNativeClass('HTMLOListElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLObjectElement', ["width=", "name?", "height=", "data?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLOptGroupElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLOptionElement', ["value="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLOutputElement', ["value=", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLParagraphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLParamElement', ["value=", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('PeerConnection00', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._PeerConnection00EventsImpl$(this);
 }
});

$.$defineNativeClass('WebKitPoint', ["y=", "x="], {
});

$.$defineNativeClass('HTMLPreElement', ["width="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ProcessingInstruction', ["data?"], {
});

$.$defineNativeClass('HTMLProgressElement', ["value=", "position?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLQuoteElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('RadioNodeList', ["value="], {
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Range', [], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('RangeException', ["name?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('SQLResultSetRowList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('SVGAElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAltGlyphDefElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAltGlyphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAltGlyphItemElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAngle', ["value="], {
});

$.$defineNativeClass('SVGAnimateColorElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimateElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimateMotionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimateTransformElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGAnimationElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGCircleElement', ["r?"], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGClipPathElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGComponentTransferFunctionElement', ["offset?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGCursorElement', ["y?", "x?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGDefsElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGDescElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGDocument', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGElement', [], {
 get$id: function() {
  return this.id;;
 },
 set$innerHTML: function(svg) {
  var container = $._ElementFactoryProvider_Element$tag('div');
  container.set$innerHTML('<svg version="1.1">' + $.S(svg) + '</svg>');
  this.set$elements(container.get$elements().get$first().get$elements());
 },
 set$elements: function(value) {
  var elements = this.get$elements();
  $.clear(elements);
  $.addAll(elements, value);
 },
 get$elements: function() {
  return $.FilteredElementList$(this);
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGElementInstance', [], {
 get$on: function() {
  return $._SVGElementInstanceEventsImpl$(this);
 }
});

$.$defineNativeClass('SVGElementInstanceList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('SVGEllipseElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGException', ["name?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('SVGFEBlendElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEColorMatrixElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEComponentTransferElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFECompositeElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEConvolveMatrixElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDiffuseLightingElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDisplacementMapElement', ["y?", "x?", "width?", "height?", "scale?"], {
 scale$1: function(arg0) { return this.scale.$call$1(arg0); },
 scale$2: function(arg0, arg1) { return this.scale.$call$2(arg0, arg1); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDistantLightElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEDropShadowElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFloodElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncAElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncBElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncGElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEFuncRElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEGaussianBlurElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEImageElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEMergeElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEMergeNodeElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEMorphologyElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEOffsetElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFEPointLightElement', ["z?", "y?", "x?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFESpecularLightingElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFESpotLightElement', ["z?", "y?", "x?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFETileElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFETurbulenceElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFilterElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceFormatElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceNameElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceSrcElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGFontFaceUriElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGForeignObjectElement', ["y?", "x?", "width?", "height?"], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGlyphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGlyphRefElement', ["y=", "x="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGGradientElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGHKernElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGImageElement', ["y?", "x?", "width?", "height?"], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGLength', ["value="], {
});

$.$defineNativeClass('SVGLengthList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGLineElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGLinearGradientElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMPathElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMarkerElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMaskElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMatrix', ["b="], {
 translate$2: function(x, y) {
  return this.translate(x,y);
 },
 scale$1: function(scaleFactor) {
  return this.scale(scaleFactor);
 },
 get$scale: function() { return new $.BoundClosure2(this, 'scale$1'); },
 rotate$1: function(angle) {
  return this.rotate(angle);
 }
});

$.$defineNativeClass('SVGMetadataElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGMissingGlyphElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGNumber', ["value="], {
});

$.$defineNativeClass('SVGNumberList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGPathElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGPathSegArcAbs', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegArcRel', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegCurvetoCubicAbs', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegCurvetoCubicRel', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegCurvetoCubicSmoothAbs', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegCurvetoCubicSmoothRel', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegCurvetoQuadraticAbs', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegCurvetoQuadraticRel', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegCurvetoQuadraticSmoothAbs', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegCurvetoQuadraticSmoothRel', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegLinetoAbs', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegLinetoHorizontalAbs', ["x="], {
});

$.$defineNativeClass('SVGPathSegLinetoHorizontalRel', ["x="], {
});

$.$defineNativeClass('SVGPathSegLinetoRel', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegLinetoVerticalAbs', ["y="], {
});

$.$defineNativeClass('SVGPathSegLinetoVerticalRel', ["y="], {
});

$.$defineNativeClass('SVGPathSegList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGPathSegMovetoAbs', ["y=", "x="], {
});

$.$defineNativeClass('SVGPathSegMovetoRel', ["y=", "x="], {
});

$.$defineNativeClass('SVGPatternElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGPoint', ["y=", "x="], {
});

$.$defineNativeClass('SVGPointList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGPolygonElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGPolylineElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGRadialGradientElement', ["r?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGRect', ["y=", "x=", "width=", "height="], {
});

$.$defineNativeClass('SVGRectElement', ["y?", "x?", "width?", "height?"], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSVGElement', ["y?", "x?", "width?", "height?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGScriptElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSetElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGStopElement', ["offset?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGStringList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGStyleElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSwitchElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGSymbolElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTRefElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTSpanElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextContentElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextElement', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextPathElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTextPositioningElement', ["y?", "x?"], {
 rotate$1: function(arg0) { return this.rotate.$call$1(arg0); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTitleElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGTransformList', [], {
 clear$0: function() {
  return this.clear();
 }
});

$.$defineNativeClass('SVGUseElement', ["y?", "x?", "width?", "height?"], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGVKernElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGViewElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SVGViewSpec', [], {
 transform$6: function(arg0, arg1, arg2, arg3, arg4, arg5) { return this.transform.$call$6(arg0, arg1, arg2, arg3, arg4, arg5); }
});

$.$defineNativeClass('Screen', ["width?", "height?"], {
});

$.$defineNativeClass('HTMLScriptElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ScriptProfileNode', ["visible?"], {
 children$0: function() {
  return this.children();
 },
 get$children: function() { return new $.BoundClosure(this, 'children$0'); }
});

$.$defineNativeClass('HTMLSelectElement', ["value=", "name?", "length="], {
 length$0: function() { return this.length.$call$0(); },
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLShadowElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('ShadowRoot', ["lib$_ShadowRootImpl$innerHTML!"], {
 get$innerHTML: function() {
  return this.lib$_ShadowRootImpl$innerHTML;
 },
 set$innerHTML: function(x) {
  this.lib$_ShadowRootImpl$innerHTML = x;
 },
 is$Element: function() { return true; }
});

$.$defineNativeClass('SharedWorkerContext', ["name?"], {
 get$on: function() {
  return $._SharedWorkerContextEventsImpl$(this);
 }
});

$.$defineNativeClass('HTMLSourceElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLSpanElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('SpeechGrammarList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('SpeechInputResultList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('SpeechRecognition', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._SpeechRecognitionEventsImpl$(this);
 }
});

$.$defineNativeClass('SpeechRecognitionResult', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('SpeechRecognitionResultList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('Storage', [], {
 $dom_setItem$2: function(key, data) {
  return this.setItem(key,data);
 },
 $dom_removeItem$1: function(key) {
  return this.removeItem(key);
 },
 $dom_key$1: function(index) {
  return this.key(index);
 },
 $dom_getItem$1: function(key) {
  return this.getItem(key);
 },
 $dom_clear$0: function() {
  return this.clear();
 },
 get$$$dom_length: function() {
  return this.length;;
 },
 isEmpty$0: function() {
  var t1 = this.$dom_key$1(0);
  return t1 == null;
 },
 get$length: function() {
  return this.get$$$dom_length();
 },
 length$0: function() { return this.get$length().$call$0(); },
 getValues$0: function() {
  var values = [];
  this.forEach$1(new $._StorageImpl_getValues_anon(values));
  return values;
 },
 getKeys$0: function() {
  var keys = [];
  this.forEach$1(new $._StorageImpl_getKeys_anon(keys));
  return keys;
 },
 forEach$1: function(f) {
  for (var i = 0; true; ++i) {
    var key = this.$dom_key$1(i);
    if (key == null) return;
    f.$call$2(key, this.operator$index$1(key));
  }
 },
 clear$0: function() {
  return this.$dom_clear$0();
 },
 remove$1: function(key) {
  var value = this.operator$index$1(key);
  this.$dom_removeItem$1(key);
  return value;
 },
 operator$indexSet$2: function(key, value) {
  return this.$dom_setItem$2(key, value);
 },
 operator$index$1: function(key) {
  return this.$dom_getItem$1(key);
 },
 containsKey$1: function(key) {
  var t1 = this.$dom_getItem$1(key);
  return !(t1 == null);
 },
 is$Map: function() { return true; }
});

$.$defineNativeClass('StorageEvent', ["key?"], {
});

$.$defineNativeClass('HTMLStyleElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('StyleSheetList', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'StyleSheet'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLTableCaptionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableCellElement', ["width=", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableColElement', ["width="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableElement', ["width="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableRowElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTableSectionElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLTextAreaElement', ["value=", "name?"], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('TextEvent', ["data?"], {
});

$.$defineNativeClass('TextMetrics', ["width?"], {
});

$.$defineNativeClass('TextTrack', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._TextTrackEventsImpl$(this);
 }
});

$.$defineNativeClass('TextTrackCue', ["text!", "position?", "id?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._TextTrackCueEventsImpl$(this);
 }
});

$.$defineNativeClass('TextTrackCueList', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('TextTrackList', ["length?"], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 length$0: function() { return this.length.$call$0(); },
 get$on: function() {
  return $._TextTrackListEventsImpl$(this);
 }
});

$.$defineNativeClass('TimeRanges', ["length?"], {
 length$0: function() { return this.length.$call$0(); }
});

$.$defineNativeClass('HTMLTitleElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('TouchList', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'Touch'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot assign element of immutable List.'));
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLTrackElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('TreeWalker', [], {
 filter$1: function(arg0) { return this.filter.$call$1(arg0); }
});

$.$defineNativeClass('UIEvent', ["keyCode?"], {
});

$.$defineNativeClass('HTMLUListElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('Uint16Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Uint32Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Uint8Array', ["length?"], {
 getRange$2: function(start, rangeLength) {
  return $._Lists_getRange(this, start, rangeLength, []);
 },
 removeRange$2: function(start, rangeLength) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeRange on immutable List.'));
 },
 removeLast$0: function() {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot removeLast on immutable List.'));
 },
 last$0: function() {
  return this.operator$index$1($.sub($.get$length(this), 1));
 },
 indexOf$2: function(element, start) {
  return $._Lists_indexOf(this, element, start, $.get$length(this));
 },
 indexOf$1: function(element) {
  return this.indexOf$2(element,0)
},
 sort$1: function(compare) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot sort immutable List.'));
 },
 isEmpty$0: function() {
  return $.eq($.get$length(this), 0);
 },
 filter$1: function(f) {
  return $._Collections_filter(this, [], f);
 },
 forEach$1: function(f) {
  return $._Collections_forEach(this, f);
 },
 addAll$1: function(collection) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 addLast$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 add$1: function(value) {
  throw $.captureStackTrace($.UnsupportedOperationException$('Cannot add to immutable List.'));
 },
 iterator$0: function() {
  var t1 = $._FixedSizeListIterator$(this);
  $.setRuntimeTypeInfo(t1, ({T: 'int'}));
  return t1;
 },
 operator$indexSet$2: function(index, value) {
  this[index] = value;
 },
 operator$index$1: function(index) {
  return this[index];;
 },
 length$0: function() { return this.length.$call$0(); },
 is$JavaScriptIndexingBehavior: function() { return true; },
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('Uint8ClampedArray', [], {
 is$List: function() { return true; },
 is$Collection: function() { return true; }
});

$.$defineNativeClass('HTMLUnknownElement', [], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('HTMLVideoElement', ["width=", "height="], {
 is$Element: function() { return true; }
});

$.$defineNativeClass('WebGLActiveInfo', ["name?"], {
});

$.$defineNativeClass('WebGLRenderingContext', [], {
 lineWidth$1: function(width) {
  return this.lineWidth(width);
 }
});

$.$defineNativeClass('WebKitNamedFlow', ["name?"], {
});

$.$defineNativeClass('WebSocket', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._WebSocketEventsImpl$(this);
 }
});

$.$defineNativeClass('WheelEvent', ["y?", "x?"], {
});

$.$defineNativeClass('DOMWindow', ["parent?", "navigator?", "name?", "length?"], {
 setTimeout$2: function(handler, timeout) {
  return this.setTimeout($.convertDartClosureToJS(handler, 0),timeout);
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 moveTo$2: function(x, y) {
  return this.moveTo(x,y);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 length$0: function() { return this.length.$call$0(); },
 get$on: function() {
  return $._WindowEventsImpl$(this);
 },
 _ensureRequestAnimationFrame$0: function() {
     if (this.requestAnimationFrame && this.cancelAnimationFrame) return;
   var vendors = ['ms', 'moz', 'webkit', 'o'];
   for (var i = 0; i < vendors.length && !this.requestAnimationFrame; ++i) {
     this.requestAnimationFrame = this[vendors[i] + 'RequestAnimationFrame'];
     this.cancelAnimationFrame =
         this[vendors[i]+'CancelAnimationFrame'] ||
         this[vendors[i]+'CancelRequestAnimationFrame'];
   }
   if (this.requestAnimationFrame && this.cancelAnimationFrame) return;
   this.requestAnimationFrame = function(callback) {
       return window.setTimeout(callback, 16 /* 16ms ~= 60fps */);
   };
   this.cancelAnimationFrame = function(id) { clearTimeout(id); }
;
 },
 _requestAnimationFrame$1: function(callback) {
  return this.requestAnimationFrame($.convertDartClosureToJS(callback, 1));
 },
 requestAnimationFrame$1: function(callback) {
  this._ensureRequestAnimationFrame$0();
  return this._requestAnimationFrame$1(callback);
 }
});

$.$defineNativeClass('Worker', [], {
 postMessage$2: function(message, messagePorts) {
  return this.postMessage(message,messagePorts);
 },
 postMessage$1: function(message) {
  return this.postMessage(message);
},
 get$on: function() {
  return $._WorkerEventsImpl$(this);
 }
});

$.$defineNativeClass('WorkerContext', ["navigator?"], {
 setTimeout$2: function(handler, timeout) {
  return this.setTimeout($.convertDartClosureToJS(handler, 0),timeout);
 },
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  if (Object.getPrototypeOf(this).hasOwnProperty('get$on')) {
    return $._WorkerContextEventsImpl$(this);
  } else {
    return Object.prototype.get$on.call(this);
  }
 }
});

$.$defineNativeClass('WorkerLocation', [], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('WorkerNavigator', ["userAgent?"], {
});

$.$defineNativeClass('XMLHttpRequest', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._XMLHttpRequestEventsImpl$(this);
 }
});

$.$defineNativeClass('XMLHttpRequestException', ["name?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('XMLHttpRequestProgressEvent', ["position?"], {
});

$.$defineNativeClass('XMLHttpRequestUpload', [], {
 $dom_removeEventListener$3: function(type, listener, useCapture) {
  return this.removeEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 $dom_addEventListener$3: function(type, listener, useCapture) {
  return this.addEventListener(type,$.convertDartClosureToJS(listener, 1),useCapture);
 },
 get$on: function() {
  return $._XMLHttpRequestUploadEventsImpl$(this);
 }
});

$.$defineNativeClass('XPathException', ["name?"], {
 toString$0: function() {
  return this.toString();
 }
});

$.$defineNativeClass('XSLTProcessor', [], {
 reset$0: function() {
  return this.reset();
 }
});

$.$defineNativeClass('IDBOpenDBRequest', [], {
 get$on: function() {
  return $._IDBOpenDBRequestEventsImpl$(this);
 }
});

$.$defineNativeClass('DOMWindow', [], {
 setTimeout$2: function(handler, timeout) {
  return this.setTimeout($.convertDartClosureToJS(handler, 0),timeout);
 }
});

$.$defineNativeClass('Worker', [], {
 postMessage$1: function(msg) {
  return this.postMessage(msg);;
 },
 get$id: function() {
  return this.id;;
 }
});

// 329 dynamic classes.
// 347 classes
// 28 !leaf
(function(){
  var v0/*class(_SVGTextPositioningElementImpl)*/ = 'SVGTextPositioningElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement|SVGTextElement|SVGTSpanElement|SVGTRefElement|SVGAltGlyphElement';
  var v1/*class(_SVGTextContentElementImpl)*/ = [v0/*class(_SVGTextPositioningElementImpl)*/,v0/*class(_SVGTextPositioningElementImpl)*/,'SVGTextContentElement|SVGTextPathElement|SVGTextPathElement'].join('|');
  var v2/*class(_SVGGradientElementImpl)*/ = 'SVGGradientElement|SVGRadialGradientElement|SVGLinearGradientElement|SVGRadialGradientElement|SVGLinearGradientElement';
  var v3/*class(_SVGComponentTransferFunctionElementImpl)*/ = 'SVGComponentTransferFunctionElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement|SVGFEFuncRElement|SVGFEFuncGElement|SVGFEFuncBElement|SVGFEFuncAElement';
  var v4/*class(_SVGAnimationElementImpl)*/ = 'SVGAnimationElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement|SVGSetElement|SVGAnimateTransformElement|SVGAnimateMotionElement|SVGAnimateElement|SVGAnimateColorElement';
  var v5/*class(_SVGElementImpl)*/ = [v1/*class(_SVGTextContentElementImpl)*/,v2/*class(_SVGGradientElementImpl)*/,v3/*class(_SVGComponentTransferFunctionElementImpl)*/,v4/*class(_SVGAnimationElementImpl)*/,v1/*class(_SVGTextContentElementImpl)*/,v2/*class(_SVGGradientElementImpl)*/,v3/*class(_SVGComponentTransferFunctionElementImpl)*/,v4/*class(_SVGAnimationElementImpl)*/,'SVGElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGClipPathElement|SVGCircleElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement|SVGViewElement|SVGVKernElement|SVGUseElement|SVGTitleElement|SVGSymbolElement|SVGSwitchElement|SVGStyleElement|SVGStopElement|SVGScriptElement|SVGSVGElement|SVGRectElement|SVGPolylineElement|SVGPolygonElement|SVGPatternElement|SVGPathElement|SVGMissingGlyphElement|SVGMetadataElement|SVGMaskElement|SVGMarkerElement|SVGMPathElement|SVGLineElement|SVGImageElement|SVGHKernElement|SVGGlyphRefElement|SVGGlyphElement|SVGGElement|SVGForeignObjectElement|SVGFontFaceUriElement|SVGFontFaceSrcElement|SVGFontFaceNameElement|SVGFontFaceFormatElement|SVGFontFaceElement|SVGFontElement|SVGFilterElement|SVGFETurbulenceElement|SVGFETileElement|SVGFESpotLightElement|SVGFESpecularLightingElement|SVGFEPointLightElement|SVGFEOffsetElement|SVGFEMorphologyElement|SVGFEMergeNodeElement|SVGFEMergeElement|SVGFEImageElement|SVGFEGaussianBlurElement|SVGFEFloodElement|SVGFEDropShadowElement|SVGFEDistantLightElement|SVGFEDisplacementMapElement|SVGFEDiffuseLightingElement|SVGFEConvolveMatrixElement|SVGFECompositeElement|SVGFEComponentTransferElement|SVGFEColorMatrixElement|SVGFEBlendElement|SVGEllipseElement|SVGDescElement|SVGDefsElement|SVGCursorElement|SVGClipPathElement|SVGCircleElement|SVGAltGlyphItemElement|SVGAltGlyphDefElement|SVGAElement'].join('|');
  var v6/*class(_MediaElementImpl)*/ = 'HTMLMediaElement|HTMLVideoElement|HTMLAudioElement|HTMLVideoElement|HTMLAudioElement';
  var v7/*class(_ElementImpl)*/ = [v5/*class(_SVGElementImpl)*/,v6/*class(_MediaElementImpl)*/,v5/*class(_SVGElementImpl)*/,v6/*class(_MediaElementImpl)*/,'Element|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement|HTMLUnknownElement|HTMLUListElement|HTMLTrackElement|HTMLTitleElement|HTMLTextAreaElement|HTMLTableSectionElement|HTMLTableRowElement|HTMLTableElement|HTMLTableColElement|HTMLTableCellElement|HTMLTableCaptionElement|HTMLStyleElement|HTMLSpanElement|HTMLSourceElement|HTMLShadowElement|HTMLSelectElement|HTMLScriptElement|HTMLQuoteElement|HTMLProgressElement|HTMLPreElement|HTMLParamElement|HTMLParagraphElement|HTMLOutputElement|HTMLOptionElement|HTMLOptGroupElement|HTMLObjectElement|HTMLOListElement|HTMLModElement|HTMLMeterElement|HTMLMetaElement|HTMLMenuElement|HTMLMarqueeElement|HTMLMapElement|HTMLLinkElement|HTMLLegendElement|HTMLLabelElement|HTMLLIElement|HTMLKeygenElement|HTMLInputElement|HTMLImageElement|HTMLIFrameElement|HTMLHtmlElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLFrameSetElement|HTMLFrameElement|HTMLFormElement|HTMLFontElement|HTMLFieldSetElement|HTMLEmbedElement|HTMLDivElement|HTMLDirectoryElement|HTMLDetailsElement|HTMLDListElement|HTMLContentElement|HTMLCanvasElement|HTMLButtonElement|HTMLBodyElement|HTMLBaseFontElement|HTMLBaseElement|HTMLBRElement|HTMLAreaElement|HTMLAppletElement|HTMLAnchorElement|HTMLElement'].join('|');
  var v8/*class(_DocumentFragmentImpl)*/ = 'DocumentFragment|ShadowRoot|ShadowRoot';
  var v9/*class(_DocumentImpl)*/ = 'HTMLDocument|SVGDocument|SVGDocument';
  var v10/*class(_CharacterDataImpl)*/ = 'CharacterData|Text|CDATASection|CDATASection|Comment|Text|CDATASection|CDATASection|Comment';
  var v11/*class(_WorkerContextImpl)*/ = 'WorkerContext|SharedWorkerContext|DedicatedWorkerContext|SharedWorkerContext|DedicatedWorkerContext';
  var v12/*class(_NodeImpl)*/ = [v7/*class(_ElementImpl)*/,v8/*class(_DocumentFragmentImpl)*/,v9/*class(_DocumentImpl)*/,v10/*class(_CharacterDataImpl)*/,v7/*class(_ElementImpl)*/,v8/*class(_DocumentFragmentImpl)*/,v9/*class(_DocumentImpl)*/,v10/*class(_CharacterDataImpl)*/,'Node|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr|ProcessingInstruction|Notation|EntityReference|Entity|DocumentType|Attr'].join('|');
  var v13/*class(_MediaStreamImpl)*/ = 'MediaStream|LocalMediaStream|LocalMediaStream';
  var v14/*class(_IDBRequestImpl)*/ = 'IDBRequest|IDBOpenDBRequest|IDBVersionChangeRequest|IDBOpenDBRequest|IDBVersionChangeRequest';
  var v15/*class(_AbstractWorkerImpl)*/ = 'AbstractWorker|Worker|SharedWorker|Worker|SharedWorker';
  var table = [
    // [dynamic-dispatch-tag, tags of classes implementing dynamic-dispatch-tag]
    ['SVGTextPositioningElement', v0/*class(_SVGTextPositioningElementImpl)*/],
    ['SVGTextContentElement', v1/*class(_SVGTextContentElementImpl)*/],
    ['UIEvent', 'UIEvent|WheelEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|KeyboardEvent|CompositionEvent|WheelEvent|TouchEvent|TextEvent|SVGZoomEvent|MouseEvent|KeyboardEvent|CompositionEvent'],
    ['Uint8Array', 'Uint8Array|Uint8ClampedArray|Uint8ClampedArray'],
    ['AbstractWorker', v15/*class(_AbstractWorkerImpl)*/],
    ['AudioParam', 'AudioParam|AudioGain|AudioGain'],
    ['WorkerContext', v11/*class(_WorkerContextImpl)*/],
    ['CSSValueList', 'CSSValueList|WebKitCSSFilterValue|WebKitCSSTransformValue|WebKitCSSFilterValue|WebKitCSSTransformValue'],
    ['CharacterData', v10/*class(_CharacterDataImpl)*/],
    ['DOMTokenList', 'DOMTokenList|DOMSettableTokenList|DOMSettableTokenList'],
    ['HTMLDocument', v9/*class(_DocumentImpl)*/],
    ['DocumentFragment', v8/*class(_DocumentFragmentImpl)*/],
    ['SVGGradientElement', v2/*class(_SVGGradientElementImpl)*/],
    ['SVGComponentTransferFunctionElement', v3/*class(_SVGComponentTransferFunctionElementImpl)*/],
    ['SVGAnimationElement', v4/*class(_SVGAnimationElementImpl)*/],
    ['SVGElement', v5/*class(_SVGElementImpl)*/],
    ['HTMLMediaElement', v6/*class(_MediaElementImpl)*/],
    ['Element', v7/*class(_ElementImpl)*/],
    ['Entry', 'Entry|FileEntry|DirectoryEntry|FileEntry|DirectoryEntry'],
    ['EntrySync', 'EntrySync|FileEntrySync|DirectoryEntrySync|FileEntrySync|DirectoryEntrySync'],
    ['Node', v12/*class(_NodeImpl)*/],
    ['MediaStream', v13/*class(_MediaStreamImpl)*/],
    ['IDBRequest', v14/*class(_IDBRequestImpl)*/],
    ['EventTarget', [v11/*class(_WorkerContextImpl)*/,v12/*class(_NodeImpl)*/,v13/*class(_MediaStreamImpl)*/,v14/*class(_IDBRequestImpl)*/,v15/*class(_AbstractWorkerImpl)*/,v11/*class(_WorkerContextImpl)*/,v12/*class(_NodeImpl)*/,v13/*class(_MediaStreamImpl)*/,v14/*class(_IDBRequestImpl)*/,v15/*class(_AbstractWorkerImpl)*/,'EventTarget|XMLHttpRequestUpload|XMLHttpRequest|DOMWindow|WebSocket|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|PeerConnection00|Notification|MessagePort|MediaController|IDBTransaction|IDBDatabase|FileWriter|FileReader|EventSource|DeprecatedPeerConnection|DOMApplicationCache|BatteryManager|AudioContext|XMLHttpRequestUpload|XMLHttpRequest|DOMWindow|WebSocket|TextTrackList|TextTrackCue|TextTrack|SpeechRecognition|PeerConnection00|Notification|MessagePort|MediaController|IDBTransaction|IDBDatabase|FileWriter|FileReader|EventSource|DeprecatedPeerConnection|DOMApplicationCache|BatteryManager|AudioContext'].join('|')],
    ['HTMLCollection', 'HTMLCollection|HTMLOptionsCollection|HTMLOptionsCollection'],
    ['IDBCursor', 'IDBCursor|IDBCursorWithValue|IDBCursorWithValue'],
    ['NodeList', 'NodeList|RadioNodeList|RadioNodeList']];
$.dynamicSetMetadata(table);
})();

var $globalThis = $;
var $globalState;
var $globals;
var $isWorker;
var $supportsWorkers;
var $thisScriptUrl;
function $static_init(){};

function $initGlobals(context) {
  context.isolateStatics = new Isolate();
}
function $setGlobals(context) {
  $ = context.isolateStatics;
  $globalThis = $;
}
$.main.$call$0 = $.main
if (typeof window != 'undefined' && typeof document != 'undefined' &&
    window.addEventListener && document.readyState == 'loading') {
  window.addEventListener('DOMContentLoaded', function(e) {
    $.startRootIsolate($.main);
  });
} else {
  $.startRootIsolate($.main);
}
function init() {
  Isolate.$isolateProperties = {};
Isolate.$defineClass = function(cls, superclass, fields, prototype) {
  var generateGetterSetter = function(field, prototype) {
  var len = field.length;
  var lastChar = field[len - 1];
  var needsGetter = lastChar == '?' || lastChar == '=';
  var needsSetter = lastChar == '!' || lastChar == '=';
  if (needsGetter || needsSetter) field = field.substring(0, len - 1);
  if (needsGetter) {
    var getterString = "return this." + field + ";";
    prototype["get$" + field] = new Function(getterString);
  }
  if (needsSetter) {
    var setterString = "this." + field + " = v;";
    prototype["set$" + field] = new Function("v", setterString);
  }
  return field;
};
  var constructor;
  if (typeof fields == 'function') {
    constructor = fields;
  } else {
    var str = "function " + cls + "(";
    var body = "";
    for (var i = 0; i < fields.length; i++) {
      if (i != 0) str += ", ";
      var field = fields[i];
      field = generateGetterSetter(field, prototype);
      str += field;
      body += "this." + field + " = " + field + ";\n";
    }
    str += ") {" + body + "}\n";
    str += "return " + cls + ";";
    constructor = new Function(str)();
  }
  Isolate.$isolateProperties[cls] = constructor;
  constructor.prototype = prototype;
  if (superclass !== "") {
    Isolate.$pendingClasses[cls] = superclass;
  }
};
Isolate.$pendingClasses = {};
Isolate.$finishClasses = function(collectedClasses) {
  for (var collected in collectedClasses) {
    if (Object.prototype.hasOwnProperty.call(collectedClasses, collected)) {
      var desc = collectedClasses[collected];
      Isolate.$defineClass(collected, desc.super, desc[''], desc);
    }
  }
  var pendingClasses = Isolate.$pendingClasses;
  Isolate.$pendingClasses = {};
  var finishedClasses = {};
  function finishClass(cls) {
    if (finishedClasses[cls]) return;
    finishedClasses[cls] = true;
    var superclass = pendingClasses[cls];
    if (!superclass) return;
    finishClass(superclass);
    var constructor = Isolate.$isolateProperties[cls];
    var superConstructor = Isolate.$isolateProperties[superclass];
    var prototype = constructor.prototype;
    if (prototype.__proto__) {
      prototype.__proto__ = superConstructor.prototype;
      prototype.constructor = constructor;
    } else {
      function tmp() {};
      tmp.prototype = superConstructor.prototype;
      var newPrototype = new tmp();
      constructor.prototype = newPrototype;
      newPrototype.constructor = constructor;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      for (var member in prototype) {
        if (member == '' || member == 'super') continue;
        if (hasOwnProperty.call(prototype, member)) {
          newPrototype[member] = prototype[member];
        }
      }
    }
  }
  for (var cls in pendingClasses) finishClass(cls);
};
Isolate.$finishIsolateConstructor = function(oldIsolate) {
  var isolateProperties = oldIsolate.$isolateProperties;
  var isolatePrototype = oldIsolate.prototype;
  var str = "{\n";
  str += "var properties = Isolate.$isolateProperties;\n";
  for (var staticName in isolateProperties) {
    if (Object.prototype.hasOwnProperty.call(isolateProperties, staticName)) {
      str += "this." + staticName + "= properties." + staticName + ";\n";
    }
  }
  str += "}\n";
  var newIsolate = new Function(str);
  newIsolate.prototype = isolatePrototype;
  isolatePrototype.constructor = newIsolate;
  newIsolate.$isolateProperties = isolateProperties;
  return newIsolate;
};
}
