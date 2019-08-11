import Link from 'next/link'
const Layout = ({ children, title }) => (
    <div>
        <header>
            <Link href="/"><a >Home</a></Link>
            <Link href="/about"><a >About</a></Link>
        </header>
        <h1>{title}</h1>
        {children}
        <footer>footer</footer>
    </div>
)


export default Layout