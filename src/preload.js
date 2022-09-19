// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require("electron")

document.addEventListener('DOMContentLoaded',()=>{
    //here we can do anything with node in fonttend
})

contextBridge.exposeInMainWorld('test','hello world')