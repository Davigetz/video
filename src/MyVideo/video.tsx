import React from 'react';
import {spring, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import Video02 from '../videos/02.mp4';

function MyVideo() {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const scale = spring({
		fps: videoConfig.fps,
		frame: frame,
		config: {
			damping: 200,
		},
	});
	return (
		<div
			style={{
				width: '100%',
				position: 'absolute',
				display: 'flex',
				justifyContent: 'center',
				transform: `scale(${scale})`,
			}}
		>
			<Video src={Video02} />
		</div>
	);
}

export default MyVideo;
