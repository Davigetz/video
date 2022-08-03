import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {ropa} from './camisa';

function Camisas() {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const inter = interpolate(frame, [0, 200], [0, 20]);
	const interx = interpolate(frame, [0, 200], [0, 500]);
	const opacity = interpolate(frame, [143, 148], [1, 0]);
	const rotate = interpolate(frame, [140, 200], [25, 90]);
	const remerasStyle: React.CSSProperties = {
		maxWidth: '250px',
		position: 'absolute',
		top: '150px',
		left: '400px',
		transform: `rotate(${
			rotate >= 25 ? (rotate > 90 ? 90 : rotate) : 25
		}deg) translate(${interx <= 500 ? interx : 500}px, ${
			inter <= 20 ? inter : 20
		}px)`,
		zIndex: '9',
		borderRadius: '20px',
		opacity: `${opacity > 0 ? opacity : 0}`,
		display: `${opacity > 0 ? 'block' : 'none'}`,
		visibility: `${opacity > 0 ? 'visible' : 'hidden'}`,
	};

	const interyC = interpolate(frame, [0, 220], [0, 500]);
	const interxC = interpolate(frame, [0, 220], [0, 590]);
	const opacityC = interpolate(frame, [153, 158], [1, 0]);
	const camisasStyle: React.CSSProperties = {
		maxWidth: '250px',
		position: 'absolute',
		top: '30px',
		left: '200px',
		zIndex: '2',
		borderRadius: '20px',
		transform: `translate(${interxC}px,${interyC}px)`,
		opacity: `${opacityC > 0 ? opacityC : 0}`,
	};

	const interyR = interpolate(frame, [0, 260], [0, 180]);
	const interxR = interpolate(frame, [0, 260], [0, 890]);
	const opacityR = interpolate(frame, [183, 188], [1, 0]);
	const ropaStyle: React.CSSProperties = {
		maxWidth: '250px',
		position: 'absolute',
		top: '46px',
		left: '189px',
		borderRadius: '20px',
		transform: `translate(${interxR}px,${interyR}px)`,
		opacity: `${opacityR > 0 ? opacityR : 0}`,
		zIndex: '1',
	};

	const interyZ = interpolate(frame, [0, 280], [0, 260]);
	const interxZ = interpolate(frame, [0, 280], [0, 1470]);
	const opacityZ = interpolate(frame, [203, 208], [1, 0]);
	const zapatosStyle: React.CSSProperties = {
		maxWidth: '250px',
		position: 'absolute',
		top: '78px',
		borderRadius: '50px',
		transform: `translate(${interxZ}px,${interyZ}px)`,
		opacity: `${opacityZ > 0 ? opacityZ : 0}`,
	};

	return (
		<div>
			<img src={ropa.camisas} alt="camisas" style={camisasStyle} />
			<img src={ropa.remeras} alt="remeras" style={remerasStyle} />
			<img src={ropa.ropa} alt="ropa" style={ropaStyle} />
			<img src={ropa.zapatos} alt="ropa" style={zapatosStyle} />
		</div>
	);
}

export default Camisas;
