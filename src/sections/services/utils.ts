export const drawBackground = () => {
    const servicesSection = document.querySelector(
        '#services-section'
    ) as HTMLDivElement
    const canvas = document.querySelector(
        '#services-canvas'
    ) as HTMLCanvasElement

    if (!servicesSection) {
        console.error('[Services]: Services section not found!')
        return
    }

    if (!canvas) {
        console.error('[Services]: Canvas not fund!')
        return
    }

    const servicesSectionRect = servicesSection.getBoundingClientRect()
    const height = servicesSectionRect.height - 182
    const width = servicesSection.clientWidth

    canvas.setAttribute('height', height.toString())
    canvas.setAttribute('width', width.toString())

    const ctx = canvas.getContext('2d')

    if (!ctx) {
        console.error('[Services]: Context not found!')
        return
    }

    // setting props
    ctx.strokeStyle = '#1f1f1f'
    ctx.fillStyle = '#1f1f1f'
    ctx.lineWidth = 3

    // Drawing line
    ctx.beginPath()
    ctx.moveTo(30, height - 30)
    ctx.lineTo(width - 30, 30)
    ctx.stroke()

    const m = (60 - height) / (width - 60)
    const x = width / 2 + width / 6
    const y = m * (x - 30) + height - 30

    // drawing bottom left circle
    ctx.beginPath()
    ctx.arc(30, height - 30, 30, 0, 2 * Math.PI)
    ctx.fill()

    // drawing top right circle
    ctx.beginPath()
    ctx.arc(width - 30, 30, 30, 0, 2 * Math.PI)
    ctx.fill()

    // drawing circle on line
    ctx.beginPath()
    ctx.arc(x, y, 30, 0, 2 * Math.PI)
    ctx.fill()

    // drawing stroke circle on line
    ctx.beginPath()
    ctx.arc(x, y, 250, 0, 2 * Math.PI)
    ctx.stroke()
}
