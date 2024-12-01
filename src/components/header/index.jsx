import { Link } from "react-router-dom"
import { IoBookmarks } from "react-icons/io5";

const Header = () => {
    return (
        <header className="flex mb-10 justify-between items-center">
            <Link to="/">
                <img src="/logo.svg" alt="netflix" className="max-w-[150px]" />
            </Link>

            <Link to="/watch-list" className="flex gap-2 items-center hover:text-gray-300">
                <IoBookmarks />
                İzleme Listesi
            </Link>

        </header>
    )
}

export default Header