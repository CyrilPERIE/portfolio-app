type MenuEntry = {
    entryName: string
}

export default function MenuEntry({entryName}: MenuEntry) {
    return (
        <p className="flex items-center justify-center">{entryName}</p>
    )
}