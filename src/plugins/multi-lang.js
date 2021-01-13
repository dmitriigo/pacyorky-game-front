import Vue from 'vue'
import {MLInstaller, MLCreate, MLanguage} from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'Ukrainian',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('Ukrainian').create({
            please_add_new_game: 'В данный момент игр нет. Добавьте новую',
            add_new_game: 'Добавить новую игру',
            home: 'Главная',
            games: 'Игры',
            capacity: 'Размер комнаты',
            with_computer: 'Игра с компьютером',
            private: 'Приватная комната',
            password: 'Пароль',
            name: 'Название',
            current_players: "Игроков сейчас"
        })
    ]
})