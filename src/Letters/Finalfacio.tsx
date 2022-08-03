import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import icono from '../Logo/icono.png';
const frase = 'PRO-ROPA';
const parrafo = [...frase];
function Final() {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1]);
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
			<img
				src={icono}
				alt="icono"
				style={{opacity: `${opacity > 1 ? 1 : opacity < 0 ? 0 : opacity}`}}
			/>
			<h1>
				{parrafo.map((l, i) => {
					const delay = i * 2;
					const opacity = spring({
						fps: videoConfig.fps,
						frame: frame - delay,
						config: {
							damping: 200,
						},
					});

					return (
						<>
							<span key={i} style={{opacity: `${opacity}`}}>
								{l}
							</span>
						</>
					);
				})}
			</h1>
		</div>
	);
}

export default Final;
