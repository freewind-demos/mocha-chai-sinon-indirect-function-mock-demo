export function x(name) {
    console.log('---------- real function: x ------------')
    return `xxx ${name} xxx`
}

export function core(name) {
    console.log('---------- real function: core ------------')
    return `<<${x(name)}>>`
}