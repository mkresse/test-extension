// Gib deinen Code hier ein
namespace midi {
    export function noteOn(kanal: number, note: number) {
        midiCommand3(144 + kanal, note, 70)
    }
    export function programmChange(kanal: number, instrument: number) {
        midiCommand2(192 + kanal, instrument)
    }
    export function noteOff(kanal: number, note: number) {
        midiCommand3(128 + kanal, note, 70)
    }
    export function midiCommand2(b1: number, b2: number) {
        serial.writeString("" + String.fromCharCode(b1) + String.fromCharCode(b2))
    }
    export function midiCommand3(b1: number, b2: number, b3: number) {
        serial.writeString("" + String.fromCharCode(b1) + String.fromCharCode(b2) + String.fromCharCode(b3))
    }
    export function controller(kanal: number, controller2: number, value: number) {
        midiCommand3(176 + kanal, controller2, value)
    }
}