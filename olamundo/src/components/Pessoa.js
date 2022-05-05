import styles from './Pessoa.module.css'

function Pessoa({nome, idade, profissao, roby}){
    return(
        <div className={styles.pessoaContainer}>
            <p className={styles.pessoaContent}>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <p>Roby: {roby}</p>
        </div>
    )
}

export default Pessoa