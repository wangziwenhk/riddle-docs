import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
    title: 'Riddle 编程语言文档',
    description: 'Riddle 是一个现代化的静态类型编程语言，结合了 C++ 和多种现代语言的优点',
    keywords: 'Riddle, 编程语言, 静态类型, 文档'
}

const banner = <Banner storageKey="some-key">Nextra 4.0 已发布 🎉</Banner>
const navbar = (
    <Navbar
        logo={<b>Riddle</b>}
        // ... Your additional navbar options
    />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Riddle.</Footer>

export default async function RootLayout({ children }) {
    return (
        <html
            lang="zh-CN"
            dir="ltr"
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/wangziwenhk/riddle-docs"
            footer={footer}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}
