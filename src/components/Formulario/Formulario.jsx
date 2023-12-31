import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState(0);

    let valorMinimo = 0;
    let valorMaximo = 10;

    useEffect(() => {
        console.log("o estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log('materia A mudou para: '+ materiaA)
    }, [materiaA]);

    const alteraNome = (evento) => {
        setNome(e => {
            // console.log(e);
            return evento.target.value;
            
        })
        
    }

    const renderizaResultado = () => {
        const soma = Number(materiaA) + Number(materiaB) + Number(materiaC);
        // console.log(soma);
        const media = soma / 3;

        if(media >= 7) {
            return (
                <h1>Muito bom, {nome}. Você foi aprovado</h1>
            )
        } else {
            return (
                <h1>Que tristeza, {nome}. Você não foi aprovado</h1>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Insira o seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={e => setMateriaA(e.target.value)} min={valorMinimo} max={valorMaximo} />
            <input type="number" placeholder="Nota matéria B" onChange={e => setMateriaB(e.target.value)} min={valorMinimo} max={valorMaximo}/>
            <input type="number" placeholder="Nota matéria C" onChange={e => setMateriaC(e.target.value)} min={valorMinimo} max={valorMaximo}/>
            <h1>Nota 1: {materiaA}</h1>
            <h1>Nota 2: {materiaB}</h1>
            <h1>Nota 3: {materiaC}</h1>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario