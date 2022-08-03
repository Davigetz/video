import React from 'react';
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

function Heart() {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const y = interpolate(frame, [0, 100], [-520, -411]);
	const scale = interpolate(frame, [0, 100], [1, 1.5]);
	const opacity = interpolate(frame, [119, 140], [1, 0]);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100%',
				position: 'relative',
				top: `${y < -520 ? -520 : y > -411 ? -411 : y}px`,
				transform: `scale(${scale < 1 ? 1 : scale > 1.5 ? 1.5 : scale})`,
				left: '-187px',
				opacity: `${opacity > 1 ? 1 : opacity < 0 ? 0 : opacity}`,
			}}
		>
			<MdFavorite color={'red'} />
			{/* <MdFavoriteBorder color="black" /> */}
		</div>
	);
}

export default Heart;
