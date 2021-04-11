const game = {
    containerElement: null,
    init() {
        this.containerElement = document.getElementById('game')
        this.PrintDesk()
    },
    PrintDesk() {
        const Mylist = ' ABCDEFGH'
        const figures = ' БЛСФКСЛБ'
        const peshks = ' ПППППППП'
        this.containerElement.innerHTML = ''

        for (let i = 0; i < 9; i++) {
            const trElem = document.createElement('tr')
            this.containerElement.appendChild(trElem)
            for (let j = 0; j < 9; j++) {
                const tdElem = document.createElement('td')
                switch (i) {
                    case (0): tdElem.textContent = j
                        break
                    case (1): tdElem.textContent = figures.charAt(j)
                        break
                    case (2): tdElem.textContent = peshks.charAt(j)
                        break
                    case (7): tdElem.textContent = peshks.charAt(j)
                        break
                    case (8): tdElem.textContent = figures.charAt(j)
                        break
                }
                if (j == 0) {
                    tdElem.textContent = Mylist.charAt(i)
                }
                if (i !== 0 && j !== 0 &&
                    (i % 2 == 0 && j % 2 == 0
                        || i % 2 !== 0 && j % 2 !== 0)) {
                    tdElem.style.backgroundColor = "black"
                    tdElem.style.color = "white"
                }

                trElem.appendChild(tdElem)
            }
        }
    }
}
game.init();