import './Header.css'

export function Header() {
    return (
        <header className="header">
            <img className="header__icon-img" src="./icon/main_icon.png" alt="Иконка сайта с задачами"/>
            <p className="header__title">Мой To-Do list</p>
        </header>
    );
}