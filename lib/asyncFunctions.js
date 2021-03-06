/*
 *  null: do not promisify
 *  {}: promisify
 *  {multiArgs: true}: multiple result args from callback
**/

module.exports = {
  all: {},
  allLimit: {},
  allSeries: {},
  any: {},
  anyLimit: {},
  anySeries: {},
  apply: null,
  applyEach: null,
  applyEachSeries: null,
  asyncify: null,
  auto: {},
  autoInject: {},
  cargo: null,
  compose: null,
  concat: {},
  concatLimit: {},
  concatSeries: {},
  constant: null,
  detect: {},
  detectLimit: {},
  detectSeries: {},
  dir: null,
  doDuring: {},
  during: {},
  each: {},
  eachLimit: {},
  eachSeries: {},
  eachOf: {},
  eachOfLimit: {},
  eachOfSeries: {},
  ensureAsync: null,
  every: {},
  everyLimit: {},
  everySeries: {},
  filter: {},
  filterLimit: {},
  filterSeries: {},
  find: {},
  findLimit: {},
  findSeries: {},
  foldl: {},
  foldr: {},
  forEach: {},
  forEachLimit: {},
  forEachSeries: {},
  forEachOf: {},
  forEachOfLimit: {},
  forEachOfSeries: {},
  forever: {},
  groupBy: {},
  groupByLimit: {},
  groupBySeries: {},
  inject: {},
  log: null,
  map: {},
  mapLimit: {},
  mapSeries: {},
  mapValues: {},
  mapValuesLimit: {},
  mapValuesSeries: {},
  memoize: null,
  unmemoize: null,
  nextTick: null,
  parallel: {},
  parallelLimit: {},
  priorityQueue: null,
  queue: null,
  race: {},
  reduce: {},
  reduceRight: {},
  reflect: null,
  reflectAll: null,
  reject: {},
  rejectLimit: {},
  rejectSeries: {},
  retry: {multiArgs: true},
  retryable: null,
  select: {},
  selectLimit: {},
  selectSeries: {},
  seq: null,
  series: {},
  setImmediate: null,
  some: {},
  someLimit: {},
  someSeries: {},
  sortBy: {},
  timeout: null,
  times: {},
  timesLimit: {},
  timesSeries: {},
  transform: {},
  tryEach: {},
  until: {},
  doUntil: {},
  waterfall: {},
  whilst: {},
  doWhilst: {},
  wrapSync: null
}
