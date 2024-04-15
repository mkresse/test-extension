function noteAn (kanal: number, note: number) {
    midiCommand3(144 + kanal, note, 70)
}
function programmChange (kanal: number, instrument: number) {
    midiCommand2(192 + kanal, instrument)
}
function noteAus (kanal: number, note: number) {
    midiCommand3(128 + kanal, note, 70)
}
function midiCommand2 (b1: number, b2: number) {
    serial.writeString("" + String.fromCharCode(b1) + String.fromCharCode(b2))
}
function midiCommand3 (b1: number, b2: number, b3: number) {
    serial.writeString("" + String.fromCharCode(b1) + String.fromCharCode(b2) + String.fromCharCode(b3))
}
function controller (kanal: number, controller2: number, value: number) {
    midiCommand3(176 + kanal, controller2, value)
}
serial.redirect(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate31250
)
