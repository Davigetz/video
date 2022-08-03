import React, {useState} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import icono from './icono.png';

function Logo() {
	const [text, setText] = useState('Ropa');
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const inter = interpolate(frame, [20, 90], [0, 1]);
	const red = interpolate(frame, [10, 20, 40, 70], [0, 255, 255, 0]);
	const opacity = interpolate(
		frame,
		[90, 92, 93, 95, 99, 110],
		[1, 0, 0, 1, 1, 0]
	);
	const opacityIcon = interpolate(frame, [113, 115], [1, 0]);
	let logoStyle: React.CSSProperties = {
		fontSize: '65px',
		fontWeight: 'bold',
		color: `rgb(${red},0,0)`,
		opacity: `${opacity}`,
	};
	if (inter > 0) logoStyle = {...logoStyle, textDecoration: 'line-through'};
	if (frame > 75) delete logoStyle.textDecoration;
	let texto = 'Ropa';
	let iconoStyle: React.CSSProperties = {
		display: 'none',
	};
	if (frame > 75) {
		texto = 'PRO-ROPA';
		(iconoStyle.display = 'block'), (iconoStyle.opacity = `${opacityIcon}`);
	}
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				backgroundColor: 'white',
			}}
		>
			<img src={icono} alt="icono" style={iconoStyle} />
			<p style={logoStyle}>{texto}</p>
		</div>
	);
}

export default Logo;
