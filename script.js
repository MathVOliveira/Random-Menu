let lunch = [
    // meal "1"
    [
        ['(75g) Arroz branco'],
        [
            '(70g) Feijão carioca',
            '(70g) lentilha',
            '(45g) grão de bico'
        ],
        [
            '(120g) Carne vermelha',
            '(114g) Sobrecoxa sem pele',
            '(156g) Coxa sem pele assada',
            '(180g) Peito sem pele grelhado'
        ],
        [
            '(80g) banana ',
            '(140g) Manga',
            '(130g) maça argentina',
            '(170g) uva',
            '(152g) kiwi',
            '(150g) abacaxi'
        ],
        [
            '(140g) Abobrinha refogada sem sal',
            '(36g) Abóbora cabotian cozida',
            '(110g) Abóbora moranga cozida sem sal',
            '(75g) Berinjela cozida',
            '(32g) Beterraba',
            '(120g) Brócolis cozido',
            '(75g) Cenoura cozida',
            '(90g) Chuchu cozido',
            '(120g) Couve-flor cozida',
            '(100g) Pepino',
            '(80g) Pimentão amarelo',
            '(80g) Pimentão verde',
            '(80g) Quiabo cozido',
            '(120g) Rabanete',
            '(80g) Vagem (feijão-vagem) cozida'
        ]
    ],
    // meal "2"
    [
        [
            '(110g) Carne vermelha',
            '(156g) Peito de frango sem pele grelhado',
            '(100g) Sobrecoxa de frango sem pele assada',
            '(120g) Coxa de frango sem pele assada'
        ],
        [
            '(80g) Mandioca',
            '(120g) Batata inglesa',
            '(80g) Batata doce (abóbora, jerimum, cenoura)'
        ],
        [
            '(280g) Abobrinha (italiana, verde) refogada sem sal',
            '(72g) Abóbora cabotian cozida',
            '(220g) Abóbora moranga cozida sem sal',
            '(150g) Berinjela cozida',
            '(64g) Beterraba',
            '(240g) Brócolis cozida',
            '(150g) Cenoura cozida',
            '(136g) Cenoura crua',
            '(180g) Chuchu cozido',
            '(240g) Couve-flor cozida',
            '(200g) Pepino',
            '(160g) Quiabo cozido',
            '(240g) Rabanete',
            '(160g) Vagem (feijão-vagem) cozida'
        ]
    ],
    // meal "3"
    [
        ['(100g) Arroz branco cozido'],
        [
            '(100g) carne vermelha',
            '(140g) Peito de frango sem pele grelhado',
            '(95g) Sobrecoxa de frango sem pele assada'
        ],
        ['(80g) purê de batata'],
        ['(80g) banana']
    ],
    // meal "4"
    [
        [
            '(310g) Escondidinho de abóbora</br>- (80g) Banana 1 Unidade </br>- (20g) Queijo muçarela 1 Fatia(s) média(s) ',
        ],
    ],
    // meal "5"
    [
        [
            '(280g) Macarrão ao sugo </br>- (100g) Carne moída refogada'
        ]
    ]
]

let dinner = [
    // meal "1"
    [
        [
            '(75g) Arroz branco cozido',
        ],
        [
            '(68g) Feijão carioca cozido',
        ],
        [
            '(100g) Carne vermelha',
            '(140g) Peito de frango sem pele grelhado',
            '(95g) Sobrecoxa de frango sem pele assada',
            '(100g) Coxa de frango sem pele assada',
        ],
        [
            'Verduras as mesmas opções que coloquei no almoço',
        ]
    ],
    // meal "2"
    [
        [
            '(220g) Macarrão ao sugo',
        ],
        [
            '(120g) Carne moída refogada',
        ],
        [
            'Verduras as mesmas opções que coloquei no almoço',
        ],
    ],
    // meal "3"
    [
        [
            'Sorvete de manga 4 Porção (616g - pode ser qualquer outra fruta)',
        ],
    ],
    // meal "4"
    [
        [
            '(100g) Carne vermelha ',
            '(140g) Peito de frango sem pele grelhado',
            '(95g) Sobrecoxa de frango sem pele assada',
            '(110g) Coxa de frango sem pele assada',
        ],
        [
            '(70g) Mandioca (aipim, macaxeira, maniva) cozida',
        ],
        [
            '(15g) Requeijão',
        ]
    ],
    // meal "5"
    [
        ['(155g) Escondidinho de abóbora</br>- (20g) Queijo muçarela</br>- (180g) Carne seca cozida']
    ],
    // meal "6"
    [
        [
            '(50g) Arroz branco cozido</br>- (80g) Carne vermelha</br>- (160g) Purê de batata inglesa'
        ]
    ]
]

function generateMenu() {

    showButtons();

    let lunchOne = document.getElementById('lunch_one');
    let lunchTwo = document.getElementById('lunch_two');
    let dinnerOne = document.getElementById('dinner_one');
    let dinnerTwo = document.getElementById('dinner_two');

    lunchOne.innerHTML = `<strong>Opção 1</strong></br></br>${randomMeals(lunch)}`;
    lunchTwo.innerHTML = `<strong>Opção 2</strong></br></br>${randomMeals(lunch)}`;
    dinnerOne.innerHTML = `<strong>Opção 1</strong></br></br>${randomMeals(dinner)}`;
    dinnerTwo.innerHTML = `<strong>Opção 2</strong></br></br>${randomMeals(dinner)}`;
    
    arr = [lunchOne, lunchTwo, dinnerOne, dinnerTwo];
    mealBoxSize(arr);
    
}

function randomMeals(mealName) {

    let mealNumber = parseInt(Math.random() * mealName.length);
    let menu = '';

    menu += `Refeição: ${mealNumber + 1}</br>`;

    for (let macros = 0; macros < mealName[mealNumber].length; macros++) {
        let ingredients = parseInt(Math.random() * mealName[mealNumber][macros].length);
        menu += `- ${mealName[mealNumber][macros][ingredients]}</br>`;
    }

    return menu;

}

function generateMeal(option, id, mealName) {

    let meal = document.getElementById(id);
    meal.innerHTML = `<strong>Opção ${option}</strong></br></br>${randomMeals(mealName)}`;

    mealBoxSize([meal]);
    
}

function showButtons() {

    let lunch = document.getElementById('lunch');
    let dinner = document.getElementById('dinner');

    lunch.innerHTML = `<input class="change_button" type="button" value="Alterar" onclick="generateMeal('1','lunch_one', lunch)"><div><strong>ALMOÇO</strong></div><input class="change_button" type="button" value="Alterar" onclick="generateMeal('2','lunch_two', lunch)">`;

    dinner.innerHTML = `<input class="change_button" type="button" value="Alterar" onclick="generateMeal('1','dinner_one', dinner)"><div><strong>JANTAR</strong></div><input class="change-button" type="button" value="Alterar" onclick="generateMeal('2','dinner_two', dinner)">`;

}

function mealBoxSize(arr) {

    arr.forEach(element => {
        element.style.height = '50px';
        void element.offsetHeight;
        element.style.height = element.scrollHeight + "px";
    });

}