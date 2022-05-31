
function name() {
    const value = import('./c.js');
    console.log(value)
}

export function a() {
    name()
}