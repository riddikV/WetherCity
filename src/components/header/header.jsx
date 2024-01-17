import cls from './header.module.css';
import statusWeather from '../../assets/img/status.png';

const Header = () => {
	return (
		<header className={cls.header}>
			<div className={cls.image__header}>
				<h3 className={cls.image__header_name}>Moscow</h3>
				<img className={cls.image__header_img} src={statusWeather} alt="weather Image" />
			</div>

			<div className={cls.status__weather}>
				<div className={cls.status__weather_text}>Ветер: 100</div>
				<div className={cls.status__weather_text}>Ветер: 100</div>
				<div className={cls.status__weather_text}>Влажность: 100</div>
				<div className={cls.status__weather_text}>Ветер: 100</div>
			</div>

			<form className={cls.from__header} action="">
				<input className={cls.form__header_input} type="text" name="" id="" placeholder="введите название города" />
				<button className={cls.form__header_button}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path opacity="1" fill="#1E3050" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
			</form>
		</header>
	)
}

export default Header;