(function(root){
'use strict';
const dateKey=d=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
const parseDate=s=>new Date(s+'T12:00:00');
const validDate=s=>/^\d{4}-\d{2}-\d{2}$/.test(s)&&dateKey(parseDate(s))===s;
const clone=x=>JSON.parse(JSON.stringify(x));
function migrate(old,plan){
 const state=old&&typeof old==='object'&&!Array.isArray(old)?clone(old):{};
 if(state.version===3&&state.days&&typeof state.days==='object')return state;
 state.days={};
 for(const [key,done] of Object.entries(state.done||{})){
  const m=key.match(/^(\d{4}-\d{2}-\d{2})-([0-6])-(\d+)$/);if(!m||!validDate(m[1]))continue;
  const day=Number(m[2]),i=Number(m[3]);if(!plan[day].items[i])continue;
  const date=parseDate(m[1]);date.setDate(date.getDate()+(day+6)%7);const k=dateKey(date);
  if(!state.days[k])state.days[k]={plan:clone(plan[day]),done:{},notes:'',loads:{},music:{},skills:{},migrated:true};
  state.days[k].done[i]=!!done;
 }
 state.legacyNotes=state.notes||'';state.version=3;return state;
}
function combinations(kit,handles){
 const weights=[1.25,1.5,2],counts=weights.map(w=>Math.floor((kit.plates[String(w)]||0)/(2*handles)));
 const result=[];for(let a=0;a<=counts[0];a++)for(let b=0;b<=counts[1];b++)for(let c=0;c<=counts[2];c++){
  const amounts=[a,b,c],side=weights.reduce((s,w,i)=>s+w*amounts[i],0);
  result.push({plates:2*side,counts:amounts,handles});
 }return result.sort((a,b)=>a.plates-b.plates||a.counts.reduce((s,n)=>s+n,0)-b.counts.reduce((s,n)=>s+n,0));
}
const api={dateKey,parseDate,validDate,clone,migrate,combinations};
if(typeof module!=='undefined')module.exports=api;else root.Corda=api;
})(globalThis);
