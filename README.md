# Introdução a JavaScript — cálculo de valor por tempo

Atividade que recebe horários de entrada e saída, calcula o tempo de permanência em minutos e determina o valor a pagar. O resultado é exibido em uma página HTML.

## Funcionalidades

| Funcionalidade | Descrição |
| --- | --- |
| Entrada de horários | Solicita horas e minutos de entrada e saída por meio de caixas de diálogo (`prompt`). |
| Cálculo de permanência | Converte os horários em minutos e calcula a diferença entre saída e entrada. |
| Cobrança por duração | Aplica valores por faixa de tempo, com acréscimo por hora ou fração após duas horas. |
| Exibição do resultado | Mostra o valor a pagar na página, com duas casas decimais. |

## Sobre a organização do código

O projeto separa a estrutura da página, em `index.html`, da lógica de cálculo, em `Scrpit.js`. Essa divisão mantém a entrada dos dados e as regras de cobrança no JavaScript, enquanto o HTML define o elemento que recebe o resultado.

O script é carregado depois do parágrafo com o identificador `resultado`, permitindo que esse elemento já exista quando o JavaScript atualiza seu texto. A lógica segue uma sequência direta: leitura dos horários, conversão em minutos, cálculo da cobrança e exibição.

## Cálculo do tempo e da cobrança

Cada horário é convertido em minutos usando `hora * 60 + minutos`. A diferença entre os totais determina o tempo de permanência e a faixa de cobrança:

| Tempo de permanência | Valor |
| --- | --- |
| Até 60 minutos | R$ 4,00 |
| Acima de 60 e até 120 minutos | R$ 6,00 |
| Acima de 120 minutos | R$ 6,00 mais R$ 1,00 por hora adicional ou fração |

Após duas horas, `Math.floor((tempo - 120) / 60)` conta as horas adicionais completas. O operador `%` verifica se há minutos restantes e, nesse caso, o código acrescenta mais R$ 1,00. Por exemplo, uma permanência de 150 minutos resulta em R$ 7,00.

O cálculo considera entrada e saída no mesmo dia, com a saída igual ou posterior à entrada. O código ainda não valida os dados informados, o cancelamento das caixas de diálogo ou horários que atravessam a meia-noite.

## Aprendizados aplicados

- Declaração de variáveis com `let`.
- Entrada de dados com `prompt` e conversão numérica com `Number`.
- Operações aritméticas e conversão de horas em minutos.
- Estruturas condicionais com `if`, `else if` e `else`.
- Uso de `Math.floor`, do resto da divisão (`%`) e do incremento (`++`).
- Formatação numérica com `toFixed(2)` e composição de texto com template literals.
- Seleção de elementos com `document.getElementById` e atualização do conteúdo com `textContent`.
- Integração de um arquivo JavaScript externo ao HTML.
