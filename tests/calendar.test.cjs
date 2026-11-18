const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..','dist');
const source=fs.readFileSync(path.join(root,'calendar.js'),'utf8');
const eventSource=fs.readFileSync(path.join(root,'app.js'),'utf8').split('const categories=')[0];
function setup(stored=null){const data=new Map(stored===null?[]:[['socialfinder-calendar-v1',stored]]);const context=vm.createContext({document:{addEventListener(){}},localStorage:{getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value)}});vm.runInContext(eventSource+'\n'+source,context);return {run:code=>vm.runInContext(code,context),data}}
test('disconnected calendar returns no claimed conflicts',()=>{assert.equal(setup().run('conflictsFor(events[1]).length'),0)});
test('demo overlap identifies the actual conflicting commitment',()=>{const {run}=setup();run('calendarState.connected=true');assert.equal(run('conflictsFor(events[1])[0].title'),'MIS 430 project meeting');assert.equal(run('conflictsFor(events[3])[0].title'),'Study group')});
test('adjacent commitments do not conflict and different days are independent',()=>{const {run}=setup();run('calendarState.connected=true');assert.equal(run('conflictsFor(events[4]).length'),0);assert.equal(run('intervalsOverlap({day:17,start:10,end:20},{day:18,start:10,end:20})'),false);assert.equal(run('intervalsOverlap({day:17,start:10,end:20},{day:17,start:20,end:30})'),false)});
test('overlap handles containment, exact equality and partial overlap',()=>{const {run}=setup();for(const [start,end] of [[12,18],[10,20],[15,25],[5,15]])assert.equal(run(`intervalsOverlap({day:17,start:10,end:20},{day:17,start:${start},end:${end}})`),true)});
test('an exported event does not conflict with itself',()=>{const {run}=setup();run('calendarState={connected:true,added:[1]}');assert.equal(run('conflictsFor(events[0]).length'),0)});
test('malformed state recovers without a connection',()=>{for(const value of ['bad json','null','{"connected":"true","added":[1]}'])assert.equal(setup(value).run('calendarState.connected'),false)});
test('stored entries are deduplicated and invalid identifiers removed',()=>{const {run}=setup(JSON.stringify({connected:true,added:[1,1,2,999,'3',null]}));assert.equal(run('JSON.stringify(calendarState.added)'),'[1,2]')});
test('disconnect clears exports and persisted connection',()=>{const {run,data}=setup(JSON.stringify({connected:true,added:[1,2]}));run('resetCalendar()');assert.deepEqual(JSON.parse(data.get('socialfinder-calendar-v1')),{connected:false,added:[]})});
test('storage failure keeps session state and reports persistence limit',()=>{const {run}=setup();run('calendarState.connected=true;localStorage.setItem=()=>{throw new Error("denied")};persistCalendar()');assert.equal(run('calendarStorageOK'),false);assert.equal(run('calendarState.connected'),true)});
