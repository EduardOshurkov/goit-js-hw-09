function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("eWCmQ");const l={form:document.querySelector(".form")};function u(e,o){const n=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}l.form.addEventListener("submit",(function(o){o.preventDefault();const{delay:{value:n},step:{value:t},amount:{value:i}}=l.form;for(let o=0;o<i;o+=1){u(o+1,+n+ +t*o).then((({position:o,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.887cce5e.js.map