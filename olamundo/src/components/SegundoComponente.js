function SegundoComponente() {
    const url = 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg'
    const largura = 150
    return (
        <div>
            <h2>Segundo Componente</h2>
            <img src={url} alt="Minha Foto" width={largura}/>
        </div>
    )
}

export default SegundoComponente