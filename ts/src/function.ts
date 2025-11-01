function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(1, Number('22')))

type PropsType = {
    value: string
    onChange: () => void
    onSelect: (trackId: string) => void
}

function Component(props: PropsType) {
    props.onChange()
    return 'Values: ' + props.value;
}

console.log(Component(
    {
        value: 'Hello from fun',
        onChange: () => {
            console.log('onChange')
        },
        onSelect: (trackId: string) => {
            console.log('onSelect')
        }
    }
))