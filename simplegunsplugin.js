
export class Player {
    constructor(data) {
        this.uid = data.uid
    }


}
export class KeybindEvent {
    constructor(keypressevent) {
        this.control = keypressevent.ctrlKey
        this.alt = keypressevent.altKey
        this.keycode = keypressevent.code
        this.key = keypressevent.key
        this.shift = keypressevent.shiftKey
    }
}
export function createKeybind(key,callback) {
    window.addEventListener("keypress",(e) => {
        if(e.key == key) {
            callback(new KeybindEvent(e))
        }
    })
}
export class Plugin {
    constructor(plugininfo) {
        this.info = plugininfo
    }
    load() {
        console.log("Loaded " + this.info.name)
    }
    tick(data) {
    //     No default code
    }
    joingame() {
        //     No default code
    }
    rendertick() {
        //     No default code
    }
}
