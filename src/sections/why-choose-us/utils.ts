export const drawBackground = () => {
    const whyChooseUsSection = document.querySelector(
        '#why-choose-us-section'
    ) as HTMLDivElement
    const canvas = document.querySelector(
        '#why-choose-us-canvas'
    ) as HTMLCanvasElement

    if (!whyChooseUsSection) {
        console.error('[WhyChooseUs]: WhyChooseUs section not found!')
        return
    }

    if (!canvas) {
        console.error('[WhyChooseUs]: Canvas not fund!')
        return
    }

    const whyChooseUsSectionRect = whyChooseUsSection.getBoundingClientRect()
    const height = whyChooseUsSectionRect.height - 182
    const width = whyChooseUsSection.clientWidth

    canvas.setAttribute('height', height.toString())
    canvas.setAttribute('width', width.toString())

    const ctx = canvas.getContext('2d')

    if (!ctx) {
        console.error('[WhyChooseUs]: Context not found!')
        return
    }

    // setting props
    ctx.strokeStyle = '#1f1f1f'
    ctx.fillStyle = '#1f1f1f'
    ctx.lineWidth = 5

    ctx.beginPath()
    ctx.arc(-100, height / 2 - height / 6, 250, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(-150, height / 2 + height / 6, 300, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(width, height - height / 3, 100, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(width - 60, height - 50, 20, 0, 2 * Math.PI)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(width, height - height / 6, 100, 0, 2 * Math.PI)
    ctx.stroke()
}
