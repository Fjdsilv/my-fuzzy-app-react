import { Outlet, Link } from "react-router-dom"

const ShareLayout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Fuzzies</Link>
                </li>
                <li>
                    <Link to="addFuzzyPage">AddFuzzy</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}
export default ShareLayout