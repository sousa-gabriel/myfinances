import * as S from './styles'
import Income  from '../../assets/income.svg';
import Outcome  from '../../assets/outcome.svg';
import Total  from '../../assets/total.svg';

export function Summary() {
  return (
    <S.Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={Income} alt="Entradas" />
            </header>
            <strong>R$1000,00</strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img src={Outcome} alt="Saídas" />
            </header>
            <strong>- R$500,00</strong>
        </div>
        <div className='highlight-background'>
            <header>
                <p>Total</p>
                <img src={Total} alt="Total" />
            </header>
            <strong>R$500,00</strong>
        </div>
    </S.Container>
  )
}