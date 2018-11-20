function getWinner() {
    var cellsD = document.querySelectorAll('.cell');
    var cells = [[], [], []];
    var i;
    var win;
    for (i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var el = cellsD[i * 3 + j];
            if (el.classList.contains('x')) {
                cells[i][j] = 'x';
            }
            if (el.classList.contains('o')) {
                cells[i][j] = 'o';
            }

        }
    }

    // проверка диагоналей
    if (
        ((cells[0][0] === cells[1][1]) && (cells[1][1] === cells[2][2])) ||
        ((cells[2][0] === cells[1][1]) && (cells[1][1] === cells[0][2]))
    ) {
        win = cells[1][1];
        if(win) return win;
    }

    // проверка горизонталей
    for (i = 0 ; i < 3; i++) {
        if ((cells[i][0] === cells[i][1]) && (cells[i][0] === cells[i][2])) {
            win = cells[i][0];
            if(win) return win;
        }
    }
	for (i = 0 ; i < 3; i++) {
        if ((cells[0][i] === cells[i][1]) && (cells[0][i] === cells[i][2])) {
            win = cells[0][i];
            if(win) return win;
        }
        
    }

    // проверка вертикалей
	for (i = 0 ; i < 3; i++) {
        if ((cells[0][i] === cells[1][i]) && (cells[1][i] === cells[2][i])) {
            win = cells[0][i];
            if(win) return win;
        }
        
    }
}



