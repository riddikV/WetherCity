import cls from './Linerundom.module.css';

import img1 from '../../assets/img/linePhoto/1.jpg';
import img2 from '../../assets/img/linePhoto/2.jpg';
import img3 from '../../assets/img/linePhoto/3.jpg';
import img4 from '../../assets/img/linePhoto/4.jpg';
import img5 from '../../assets/img/linePhoto/5.jpg';
import img6 from '../../assets/img/linePhoto/6.jpg';
import img7 from '../../assets/img/linePhoto/7.jpg';

const Linerundom = () => {
	return (
		<div className={cls.works}>
			<div className={cls.works__col}>
				<div className={cls.works__item}>
					<img className={cls.works__img} src={ img1 } alt='img1'/>
					<div className={cls.works__info} >
						<div className={cls.works__text} >Москва</div>
					</div>
				</div>

				<div className={cls.works__item} >
					<img className={cls.works__img} src={ img2 } alt='img2'/>
					<div className={cls.works__info} >
						<div className={cls.works__text} >Краснодар</div>
					</div>
				</div>
			</div>


			<div className={cls.works__col}>
				<div className={cls.works__item}>
					<img className={cls.works__img} src={ img3 } alt='img3'/>
					<div className={cls.works__info} >
						<div className={cls.works__text} >Сочи</div>
					</div>
				</div>

				<div className={cls.works__item} >
					<img className={cls.works__img} src={ img4 } alt='img4'/>
					<div className={cls.works__info} >
						<div className={cls.works__text} >Санкт-Петербург</div>
					</div>
				</div>
			</div>


			<div className={cls.works__col}>
				<div className={cls.works__item}>
					<img className={cls.works__img} src={ img5 } alt='img5'/>
					<div className={cls.works__info}>
						<div className={cls.works__text}>Екатеренбург</div>
					</div>
				</div>
			</div>


			<div className={cls.works__col}>
				<div className={cls.works__item}>
					<img className={cls.works__img} src={ img6 } alt='img6'/>
					<div className={cls.works__info} >
						<div className={cls.works__text} >Нижний новгород</div>
					</div>
				</div>

				<div className={cls.works__item} >
					<img className={cls.works__img} src={ img7 } alt='img7'/>
					<div className={cls.works__info} >
						<div className={cls.works__text} >Владивосток</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Linerundom;