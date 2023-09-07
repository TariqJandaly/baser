export default function Baser(base: number, number: number) {
    let resulte = ""
    let steps: string[] = []
    
    const Calculate = (b: number, value: number) => {

        const char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/'

        let n = 0

        n = value

        const x    = Math.floor(n / b)
        const y    = n % b

        steps.push(`${n} / ${b} = ${x} R ${y}`)

        if(x != 0) {
            Calculate(b, x)
        }

        resulte = `${resulte}${char[y]}`
    }

    Calculate(base, number)

    return { resulte, steps }
}