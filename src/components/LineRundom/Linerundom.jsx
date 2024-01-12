import img1 from '../../assets/img/linePhoto/1.jpg';
import img2 from '../../assets/img/linePhoto/2.jpg';
import img3 from '../../assets/img/linePhoto/3.jpg';
import img4 from '../../assets/img/linePhoto/4.jpg';
import img5 from '../../assets/img/linePhoto/5.jpg';
import img6 from '../../assets/img/linePhoto/6.jpg';
import img7 from '../../assets/img/linePhoto/7.jpg';

const Linerundom = () => {
	return (
		<div className="works">
			<div className="works-col">
				<div className="works-item">
					<img className="works-img" src={ img1 } />
					<div className="works-info">
						<div className="works-text">Москва</div>
					</div>
				</div>

				<div className="works-item">
					<img className="works-img" src={ img2 } />
					<div className="works-info">
						<div className="works-text">Краснодар</div>
					</div>
				</div>
			</div>


			<div className="works-col">
				<div className="works-item">
					<img className="works-img" src={ img3 } />
					<div className="works-info">
						<div className="works-text">Сочи</div>
					</div>
				</div>

				<div className="works-item">
					<img className="works-img" src={ img4 } />
					<div className="works-info">
						<div className="works-text">Санкт-Петербург</div>
					</div>
				</div>
			</div>


			<div className="works-col">
				<div className="works-item">
					<img className="works-img" src={ img5 } />
					<div className="works-info">
						<div className="works-text">Екатеренбург</div>
					</div>
				</div>
			</div>


			<div className="works-col">
				<div className="works-item">
					<img className="works-img" src={ img6 } />
					<div className="works-info">
						<div className="works-text">Нижний новгород</div>
					</div>
				</div>

				<div className="works-item">
					<img className="works-img" src={ img7 } />
					<div className="works-info">
						<div className="works-text">Владивосток</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Linerundom;