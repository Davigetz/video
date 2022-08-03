import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {products} from './products';

function Card() {
	const cardContainer: React.CSSProperties = {
		padding: '1rem 1.5rem',
		maxWidth: '335px',
		height: 'auto',
		border: 'none',
		borderRadius: '5px',
		backgroundColor: '#fff',
		overflow: 'hidden',
		transform: 'scale(1.5)',
	};

	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const productChange = interpolate(frame, [5, 300], [0, 98]);
	const opacity = interpolate(frame, [498, 508], [1, 0]);
	const id = Math.floor(
		productChange > 0 ? (productChange <= 98 ? productChange : 98) : 0
	);
	console.log(id);
	console.log(products[id].imagen);

	let text = 'Añadir al carrito';
	if (productChange > 100) {
		text = 'No hay stock';
	}
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				fontFamily: 'Anek Malayalam,sans-serif',
				opacity: `${opacity > 1 ? 1 : opacity < 0 ? 0 : opacity}`,
			}}
		>
			<div style={cardContainer}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					{products[id].imagen && (
						<img
							style={{height: '365px'}}
							src={require(`${products[id].imagen}`)}
						/>
					)}
				</div>
				<div
					style={{
						textAlign: 'center',
						padding: '1rem',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					}}
				>
					<p style={{fontSize: '1.1rem', fontWeight: '600'}}>
						{products[id].nombre}
					</p>
					<div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginTop: '0.9rem',
							}}
						>
							<select
								style={{
									paddingLeft: '0.5rem',
									width: 'fit-content',
									height: '40px',
									fontWeight: '500',
									fontFamily: 'inherit',
									color: 'black',
									border: 'none',
									borderRadius: '5px',
									backgroundColor: '#cdcdcd',
								}}
							>
								{products[id].talles.map((talle, i) => (
									<option key={i} value={talle.talle}>
										{talle.talle}
									</option>
								))}
							</select>
							<p style={{fontWeight: '600'}}>
								{new Intl.NumberFormat('es-AR').format(products[id].precio)}
							</p>
						</div>
						<button
							style={{
								backgroundColor: `${
									text === 'No hay stock' ? 'grey' : '#181818'
								}`,
								borderRadius: '5px',
								color: `#fff`,
								fontSize: '15px',
								fontWeight: '500',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								margin: '1.5rem 0',
								width: '100%',
								height: '40px',
							}}
						>
							{text}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
