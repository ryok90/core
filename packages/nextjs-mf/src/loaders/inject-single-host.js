const template = (name) => `if(typeof window !== 'undefined') {
  if(__webpack_runtime_id__ === 'webpack') {
  console.log(__webpack_modules__);
 // console.log(require.resolveWeak("main"));
    //let name = ${JSON.stringify(name)};
   // window[name] = __webpack_chunk_load__(name + '_single')
  }
};`;
export default function (source) {
  const opts = this.getOptions();
  return [template(opts.name), source].join('\n');
}
