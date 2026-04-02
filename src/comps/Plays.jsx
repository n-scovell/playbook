
export default function Plays({ play }) {
    return (
        <>
        <ul className="plays">
            {play.map((m) => (
                <li key={m.name}>
                    <h4>{m.name}</h4>
                    <div className="scrimmageLine"></div>
                    {m.grid.map((g, index) => (
                        <div className="grids" key={m.name + index}>
                            {g.players?.length > 0 && g.players.map((p,index) => (
                                <div 
                                    key={p.position + p.stand} 
                                    className={'playerPosition'+' '+ p.position +' '+ p.y+' '+p.x}
                                >
                                <div className={'route' + ' ' + p.route}></div>
                                {p.position}
                                </div>
                            ))}
                        </div>
                    ))}
                </li>
            ))}
        </ul>
        </>
    )
}