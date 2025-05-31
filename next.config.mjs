import nextra from 'nextra'

const withNextra = nextra({
    defaultShowCopyCode: true,
    latex: { renderer: 'mathjax' },
})

export default withNextra({})