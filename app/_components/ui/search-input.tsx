import { SearchIcon } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

const Search = () => {
    return ( 
        <div className="flex gap-2">
            <Input placeholder="Buscar restaurantes" className="border-none"/>
            <Button size="icon">
                <SearchIcon size={18} />
            </Button>
        </div>
     );
};
 
export default Search;
