import {useState} from 'react'
export default function Menu({title}) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {isOpen ? (
            <>
            <button className="menuTog" onClick={() => setOpen(!isOpen)}>X</button>
            </>
            ) : (
            <>
                <button className="menuTog" onClick={() => setOpen(!isOpen)}>
                    {Array.from({ length: 3 }, (l, index) => ( <div key={'line_'+l}></div> ))}
                </button>
            </>
        )}
        </>
    )
}