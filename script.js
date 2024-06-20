function calcular() {
    var a = document.getElementById('numA')
    var b = document.getElementById('numB')
    var c = document.getElementById('numC')
    var tab = document.getElementById('seltab')

    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
        window.alert('Está faltando um dos valores, preencha todos os campos!')
    } else {
        let na = Number(a.value)
        let nb = Number(b.value)
        let nc = Number(c.value)

        let resultado = (nb ** 2) - 4 * na * nc
        let resp = document.createElement('option')
        let resp2 = document.createElement('option')
        resp.text = `Δ = ${nb} ^ 2 - 4 x ${na} x ${nc} = ${Math.sqrt(resultado)}`
        tab.appendChild(resp)

        if (resultado < 0) {
            window.alert('Impossível terminar o cálculo, pois o resultado de delta é negativo.')
        } else if (Number.isInteger(Math.sqrt(resultado))) {
            let resultadox1 = (- nb + Math.sqrt(resultado)) / 2 * na
            let resp = document.createElement('option')
            resp.text = `X1 = - ${nb} + ${Math.sqrt(resultado)} / 2 x ${na} = ${resultadox1}`
            tab.appendChild(resp)

            let resultadox2 = (- nb - Math.sqrt(resultado)) / 2 * na
            let resp2 = document.createElement('option')
            resp2.text = `X2 = - ${nb} - ${Math.sqrt(resultado)} / 2 x ${na} = ${resultadox2}`
            tab.appendChild(resp2)
        } else {
            window.alert('Impossível terminar o cálculo, pois o resultado da raiz quadrada não é exata.')
        }
    }
}