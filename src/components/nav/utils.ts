export const drawBackground = () => {
    const canvas = document.querySelector('#menu-canvas') as HTMLCanvasElement
    const section = document.querySelector(
        '#menu-item-description'
    ) as HTMLDivElement

    if (!canvas) {
        console.error('[MenuOverlay]: MenuOverlay canvas not found!')
        return
    }

    if (!section) {
        console.error('[MenuOverlay]: MenuItemDescription not fund!')
        return
    }

    const menuRect = section.getBoundingClientRect()
    const height = menuRect.height
    const width = menuRect.width

    canvas.setAttribute('height', height.toString())
    canvas.setAttribute('width', width.toString())

    const ctx = canvas.getContext('2d')

    if (!ctx) {
        console.error('[MenuOverlay]: Context not found!')
        return
    }

    // setting props
    ctx.strokeStyle = '#e9e9e9'
    ctx.fillStyle = '#f0f0f0'
    ctx.lineWidth = 1

    for (let i = 0; i < 7; i++) {
        ctx.beginPath()
        ctx.arc(0, height, 30 * (i + 1), 0, 2 * Math.PI)
        ctx.stroke()
    }
}
