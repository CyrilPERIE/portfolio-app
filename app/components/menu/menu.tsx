import MenuEntry from "./menu-entry"

export default function Menu() {
    const entries = ["Menu1", "Menu2", "Menu3"]
    return(
        <div className="h-24 bg-yellow-50 flex justify-center sticky top-0 z-50">
            <div className="h-full w-1/3 grid grid-cols-3">
                {entries.map((entry, index) => (
                    <MenuEntry 
                        key={index} 
                        entryName = {entry} 
                    />
                ))}
            </div>
        </div>
    )
}