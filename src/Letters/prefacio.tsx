import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const frase = 'PRO-ROPA cambiando vidas';
const parrafo = [...frase];
function Prefacio() {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	console.log(frame);
	const opacity = interpolate(frame, [130, 361], [1, 0]);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				opacity: `${opacity > 1 ? 1 : opacity < 0 ? 0 : opacity}`,
			}}
		>
			<h1>
				{/* @ts-ignore */}
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

export default Prefacio;
