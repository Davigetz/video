import React from 'react';
import {FaLayerGroup, FaTshirt} from 'react-icons/fa';
import {RiShirtFill} from 'react-icons/ri';
import {GiArmoredPants, GiPirateCoat, GiRunningShoe} from 'react-icons/gi';
import {BsArrowDownUp, BsSmartwatch} from 'react-icons/bs';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const LeftBar: React.CSSProperties = {
	padding: '1rem',
};
function Left() {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const z = interpolate(frame, [0, 100], [42.5, 0]);
	const y = interpolate(frame, [0, 100], [352, 360]);
	const x = interpolate(frame, [0, 100], [331, 360]);
	const scale = interpolate(frame, [100, 140], [1, 2]);
	const opacity = interpolate(frame, [170, 180], [1, 0]);
	const efecto = spring({
		config: {
			damping: 500,
			mass: 5,
		},
		fps: videoConfig.fps,
		frame,
	});
	const efectoTwo = spring({
		config: {
			damping: 100,
			mass: 0.01,
		},
		fps: videoConfig.fps,
		frame,
	});

	const yS = interpolate(frame, [90, 100], [-12, 0]);
	const xS = interpolate(frame, [90, 100], [2, 11]);
	const container: React.CSSProperties = {
		display: 'grid',
		justifyContent: 'center',
		transform: `translateZ(${z}px) rotateY(${
			y > 360 ? 360 : y * efecto
		}deg) rotateX(${x > 360 ? 360 : x * efectoTwo}deg) scale(${
			scale > 2 ? 2 : scale < 1 ? 1 : scale
		})`,
		boxShadow: `rgb(0 0 0 / 20%) ${yS > 0 ? 0 : yS < -12 ? -12 : yS}px ${
			xS < 2 ? 2 : xS > 11 ? 11 : xS
		}px 11px 5px`,
		borderRadius: '15px',
		backgroundColor: 'white',
		opacity: `${opacity > 1 ? 1 : opacity < 0 ? 0 : opacity}`,
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				fontFamily: 'Anek Malayalam,sans-serif',
			}}
		>
			<div style={container}>
				<div style={LeftBar}>
					<ul
						style={{
							height: '230px',
							listStyle: 'none',
							margin: 0,
							padding: 0,
							fontWeight: 600,
							width: '170px',
						}}
					>
						<li
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '2rem',
								fontSize: '18px',
								minWidth: '118px',
							}}
						>
							<FaLayerGroup />
							<span>Todos</span>
						</li>
						<li
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '2rem',
								fontSize: '18px',
								minWidth: '118px',
							}}
						>
							<FaTshirt size="18px" />
							<span>Remeras</span>
						</li>
						<li
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '2rem',
								fontSize: '18px',
								minWidth: '118px',
							}}
						>
							<RiShirtFill size="18px" />
							<span>Camisas</span>
						</li>
						<li
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '2rem',
								fontSize: '18px',
								minWidth: '118px',
							}}
						>
							<GiArmoredPants size="18px" />
							<span>Pantalones</span>
						</li>
						<li
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '2rem',
								fontSize: '18px',
								minWidth: '118px',
							}}
						>
							<GiRunningShoe size="18px" />
							<span>Calzado</span>
						</li>
						<li
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '2rem',
								fontSize: '18px',
								minWidth: '118px',
							}}
						>
							<GiPirateCoat size="18px" />
							<span>Abrigo</span>
						</li>
						<li
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								height: '2rem',
								fontSize: '18px',
								minWidth: '118px',
							}}
						>
							<BsSmartwatch />
							<span>Accesorios</span>
						</li>
					</ul>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							textAlign: 'center',
							marginBottom: '0.5rem',
							marginTop: '1rem',
							width: '100%',
						}}
					>
						<span style={{fontSize: '1rem', fontWeight: 'bold'}}>Ordenar</span>
						<BsArrowDownUp />
					</div>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<select
							style={{
								border: '1px solid #4a4949',
								borderRadius: '8px',
								width: '120px',
								height: '2rem',
								borderWidth: '2px',
								justifySelf: 'center',
							}}
						>
							<option>Precio Asc</option>
							<option>Precio Desc</option>
							<option>A-Z</option>
							<option>Z-A</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Left;
