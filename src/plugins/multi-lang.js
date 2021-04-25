import Vue from 'vue'
import { MLanguage, MLCreate, MLInstaller } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'Ukrainian',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('Ukrainian').create({
            please_add_new_game: 'В данный момент игр нет. Добавьте новую',
            add_new_game: 'Добавить новую игру',
            home: 'главная',
            games: 'Игры',
            capacity: 'Размер комнаты',
            with_computer: 'Игра с компьютером',
            private: 'Приватная комната',
            password: 'Пароль',
            name: 'Название',
            current_players: 'Игроков сейчас',
            join: 'Войти в игру',
            exit: 'Выйти из игры',
            INTERNAL_SERVER_ERROR: 'Произошла ошибка сервера. Пожалуйста, перезагрузите страницу!',
            CAPACITY_LIMIT_REACHED: 'Достигнуто максимальное количество игроков',
            PLAYER_ALREADY_IN_GAME: 'Игрок уже в игре',
            about_project: "о проекте",
            game_description: "описание игры",
            game_rules: "правила игры",
            board_game: "настольная игра",
            start_game: "начать игру",
            contacts: "контакты",
            sponsors: "нас поддерживают",
            home_page_text_middle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
            copyright_footer: "©2021 Українське Земляцтво Сілламяе «Водограй»"
        })
    ]
})