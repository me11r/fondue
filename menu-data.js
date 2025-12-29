const menuData = [
    // АЛЬПИЙСКАЯ КУХНЯ
    {
        id: 1,
        name: "Классический фондю",
        price: "13 990 ₸",
        category: "Альпийская кухня",
        desc: "",
        img: ""
    },
    {
        id: 2,
        name: "Тартар из говядины",
        price: "4 590 ₸",
        category: "Альпийская кухня",
        desc: "",
        img: ""
    },
    {
        id: 3,
        name: "Тартар из семги",
        price: "4 790 ₸",
        category: "Альпийская кухня",
        desc: "",
        img: ""
    },
    {
        id: 4,
        name: "Раклет",
        price: "1 990 ₸",
        category: "Альпийская кухня",
        desc: "",
        img: ""
    },
    {
        id: 5,
        name: "Сырная тарелка",
        price: "6 990 ₸",
        category: "Альпийская кухня",
        desc: "",
        img: ""
    },
    {
        id: 6,
        name: "Валезианская тарелка",
        price: "8 990 ₸",
        category: "Альпийская кухня",
        desc: "",
        img: ""
    },

    // ЗАВТРАКИ
    {
        id: 7,
        name: "Каша овсяная с мёдом и орехами",
        price: "1 790 ₸",
        category: "Завтраки",
        desc: "",
        img: ""
    },
    {
        id: 8,
        name: "Шакшука с яйцом пашот",
        price: "2 590 ₸",
        category: "Завтраки",
        desc: "",
        img: ""
    },
    {
        id: 9,
        name: "Английский завтрак",
        price: "3 490 ₸",
        category: "Завтраки",
        desc: "",
        img: ""
    },
    {
        id: 10,
        name: "Французский завтрак",
        price: "3 490 ₸",
        category: "Завтраки",
        desc: "",
        img: ""
    },
    {
        id: 11,
        name: "Картофельный драник с семгой",
        price: "3 590 ₸",
        category: "Завтраки",
        desc: "",
        img: ""
    },
    {
        id: 12,
        name: "Сырники с облепихой и халвой",
        price: "2 490 ₸",
        category: "Завтраки",
        desc: "",
        img: ""
    },

    // СТАРТЕРЫ
    {
        id: 13,
        name: "Брускетта с сёмгой и гуакамоле",
        price: "5 990 ₸",
        category: "Стартеры",
        desc: "",
        img: ""
    },
    {
        id: 14,
        name: "Брускетта с ростбифом и вялеными томатами",
        price: "4 790 ₸",
        category: "Стартеры",
        desc: "",
        img: ""
    },
    {
        id: 15,
        name: "Брускетта с овощной сальсой",
        price: "2 290 ₸",
        category: "Стартеры",
        desc: "",
        img: ""
    },
    {
        id: 16,
        name: "Вителло тоннато",
        price: "5 890 ₸",
        category: "Стартеры",
        desc: "",
        img: ""
    },
    {
        id: 17,
        name: "Запечённые баклажаны",
        price: "2 590 ₸",
        category: "Стартеры",
        desc: "",
        img: ""
    },
    {
        id: 18,
        name: "Цезарь (курица/семга/креветки)",
        price: "4 590 ₸",
        category: "Стартеры",
        desc: "с курицей / с сёмгой / с креветками",
        img: ""
    },
    {
        id: 19,
        name: "Греческий салат с пряной фетой",
        price: "2 990 ₸",
        category: "Стартеры",
        desc: "",
        img: ""
    },
    {
        id: 20,
        name: "Fish & Chips с соусом тартар",
        price: "4 990 ₸",
        category: "Стартеры",
        desc: "",
        img: ""
    },
    {
        id: 21,
        name: "Хлебная корзина",
        price: "2 190 ₸",
        category: "Стартеры",
        desc: "",
        img: ""
    },

    // ПИЦЦА
    {
        id: 22,
        name: "Четыре сыра",
        price: "3 890 ₸",
        category: "Пицца",
        desc: "",
        img: ""
    },
    {
        id: 23,
        name: "Маргарита",
        price: "3 290 ₸",
        category: "Пицца",
        desc: "",
        img: ""
    },
    {
        id: 24,
        name: "Пепперони",
        price: "3 690 ₸",
        category: "Пицца",
        desc: "",
        img: ""
    },
    {
        id: 25,
        name: "С голубым сыром и грушей",
        price: "3 790 ₸",
        category: "Пицца",
        desc: "",
        img: ""
    },

    // ГОРЯЧИЕ БЛЮДА
    {
        id: 26,
        name: "Медальоны с перечным соусом",
        price: "7 690 ₸",
        category: "Горячие блюда",
        desc: "",
        img: ""
    },
    {
        id: 27,
        name: "Телячьи щёчки с картофельным кремом",
        price: "8 690 ₸",
        category: "Горячие блюда",
        desc: "",
        img: ""
    },
    {
        id: 28,
        name: "Филе судака с овощами",
        price: "4 890 ₸",
        category: "Горячие блюда",
        desc: "",
        img: ""
    },
    {
        id: 29,
        name: "Стейк из сёмги с лимонным рисом",
        price: "8 590 ₸",
        category: "Горячие блюда",
        desc: "",
        img: ""
    },
    {
        id: 30,
        name: "Шницель с овощами",
        price: "3 990 ₸",
        category: "Горячие блюда",
        desc: "",
        img: ""
    },
    {
        id: 31,
        name: "Бедро цыплёнка с вёшенками и шпинатом",
        price: "4 390 ₸",
        category: "Горячие блюда",
        desc: "",
        img: ""
    },
    {
        id: 32,
        name: "Жульен классический",
        price: "3 990 ₸",
        category: "Горячие блюда",
        desc: "",
        img: ""
    },

    // СУПЫ
    {
        id: 33,
        name: "Куриный суп",
        price: "1 990 ₸",
        category: "Супы",
        desc: "",
        img: ""
    },
    {
        id: 34,
        name: "Тыквенный крем-суп с дор-блю",
        price: "1 890 ₸",
        category: "Супы",
        desc: "",
        img: ""
    },
    {
        id: 35,
        name: "Грибной крем-суп",
        price: "2 690 ₸",
        category: "Супы",
        desc: "",
        img: ""
    },
    {
        id: 36,
        name: "Охотничья похлёбка с говяжьими щёчками",
        price: "5 190 ₸",
        category: "Супы",
        desc: "",
        img: ""
    },

    // ПАСТА
    {
        id: 37,
        name: "Арабьятта с говядиной",
        price: "3 590 ₸",
        category: "Паста",
        desc: "",
        img: ""
    },
    {
        id: 38,
        name: "Лингвини с креветками",
        price: "5 390 ₸",
        category: "Паста",
        desc: "",
        img: ""
    },
    {
        id: 39,
        name: "Паста Болоньезе",
        price: "4 590 ₸",
        category: "Паста",
        desc: "",
        img: ""
    },
    {
        id: 40,
        name: "Альфредо с курицей",
        price: "3 290 ₸",
        category: "Паста",
        desc: "",
        img: ""
    },

    // FAST FOOD
    {
        id: 41,
        name: "Бургер с рубленой говядиной",
        price: "5 290 ₸",
        category: "Fast Food",
        desc: "",
        img: ""
    },
    {
        id: 42,
        name: "Бургер куриный",
        price: "4 990 ₸",
        category: "Fast Food",
        desc: "",
        img: ""
    },
    {
        id: 43,
        name: "Картофель фри с пармезаном",
        price: "1 990 ₸",
        category: "Fast Food",
        desc: "",
        img: ""
    },
    {
        id: 44,
        name: "Батат фри с пармезаном",
        price: "1 990 ₸",
        category: "Fast Food",
        desc: "",
        img: ""
    },
    {
        id: 45,
        name: "Нагетсы",
        price: "2 390 ₸",
        category: "Fast Food",
        desc: "",
        img: ""
    },

    // ДЕСЕРТЫ
    {
        id: 46,
        name: "Чуррос с соленой карамелью",
        price: "2 390 ₸",
        category: "Десерты",
        desc: "",
        img: ""
    },
    {
        id: 47,
        name: "Шоколадный фондан",
        price: "2 590 ₸",
        category: "Десерты",
        desc: "",
        img: ""
    },
    {
        id: 48,
        name: "Крем-брюле",
        price: "3 490 ₸",
        category: "Десерты",
        desc: "",
        img: ""
    },

    // НАПИТКИ (АВТОРСКИЕ ЧАИ)
    {
        id: 49,
        name: "Черный чай",
        price: "590 / 1 790 ₸",
        category: "Напитки",
        desc: "Авторские чаи",
        img: ""
    },
    {
        id: 50,
        name: "Эрл Грей",
        price: "690 / 1 990 ₸",
        category: "Напитки",
        desc: "Авторские чаи",
        img: ""
    },
    {
        id: 51,
        name: "Зеленый чай",
        price: "590 / 1 790 ₸",
        category: "Напитки",
        desc: "Авторские чаи",
        img: ""
    },
    {
        id: 52,
        name: "Молочный улун",
        price: "1 990 ₸",
        category: "Напитки",
        desc: "Авторские чаи",
        img: ""
    },
    {
        id: 53,
        name: "Облепиха-имбирь",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Авторские чаи",
        img: ""
    },
    {
        id: 54,
        name: "Ташкентский",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Авторские чаи",
        img: ""
    },
    {
        id: 55,
        name: "Фруктовый",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Авторские чаи",
        img: ""
    },
    {
        id: 56,
        name: "Цитрусовый",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Авторские чаи",
        img: ""
    },

    // ЛИМОНАДЫ
    {
        id: 57,
        name: "Классический лимонад",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Лимонады",
        img: ""
    },
    {
        id: 58,
        name: "Ягодный микс",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Лимонады",
        img: ""
    },
    {
        id: 59,
        name: "Цитрусовый лимонад",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Лимонады",
        img: ""
    },
    {
        id: 60,
        name: "Манго-маракуйя",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Лимонады",
        img: ""
    },
    {
        id: 61,
        name: "Гранат-базилик",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Лимонады",
        img: ""
    },
    {
        id: 62,
        name: "Киви-яблоко",
        price: "2 490 ₸",
        category: "Напитки",
        desc: "Лимонады",
        img: ""
    },

    // КОФЕ
    {
        id: 63,
        name: "Эспрессо",
        price: "690 / 890 ₸",
        category: "Напитки",
        desc: "Кофе (50мл / 100мл)",
        img: ""
    },
    {
        id: 64,
        name: "Американо",
        price: "890 / 990 ₸",
        category: "Напитки",
        desc: "Кофе (200мл / 300мл)",
        img: ""
    },
    {
        id: 65,
        name: "Американо с молоком",
        price: "990 / 1 090 ₸",
        category: "Напитки",
        desc: "Кофе",
        img: ""
    },
    {
        id: 66,
        name: "Капучино",
        price: "1 190 / 1 290 ₸",
        category: "Напитки",
        desc: "Кофе",
        img: ""
    },
    {
        id: 67,
        name: "Латте",
        price: "1 090 / 1 190 ₸",
        category: "Напитки",
        desc: "Кофе",
        img: ""
    }
];
