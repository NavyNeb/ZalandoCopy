import { Search } from "lucide-react"

const SearchInput = () => {
  return (
    <div className="border border-black h-12 w-72 flex items-center justify-center" >
        <Search size={24} className="mx-2" />
        <input type="text" className = "flex-1 text-text-grey h-full w-full" placeholder="Rechercher..." />
    </div>
  )
}

export default SearchInput