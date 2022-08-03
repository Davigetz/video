import React from 'react';
import {Audio, interpolate, Sequence, useCurrentFrame, Video} from 'remotion';
import {Nav} from './NavBar/nav';
import audio from './NavBar/ElementsRedCityHero.mp3';
import audioTwo from './audio/Rush Hour   Instrumental Version - Dan Zeitune.mp3';
import audioThree from './audio/Club Haus - Stefano Mastronardi.mp3';
import Camisas from './NavBar/objects/camisas';
import Logo from './Logo/Logo';
import Left from './leftBar/left';
import Card from './Card/card';
import Heart from './heart/heart';
import MyVideo from './MyVideo/video';
import Prefacio from './Letters/prefacio';
import Final from './Letters/Finalfacio';

export const NavBar = () => {
	const frame = useCurrentFrame();
	return (
		<div>
			<Sequence from={0}>
				<Logo />
			</Sequence>
			<Sequence from={120}>
				<Nav />
			</Sequence>
			<Sequence from={150}>
				<Camisas />
			</Sequence>
			<Sequence from={565}>
				<Left />
			</Sequence>
			<Sequence from={745}>
				<Card />
			</Sequence>
			<Sequence from={1140}>
				<Heart />
			</Sequence>
			<Sequence from={1309}>
				<MyVideo />
			</Sequence>
			<Sequence from={9450}>
				<Final />
			</Sequence>
			<Sequence from={0}>
				<Audio src={audio} startFrom={0} />
			</Sequence>
			<Sequence from={3878}>
				<Audio src={audioTwo} startFrom={0} />
			</Sequence>
			<Sequence from={8409}>
				<Audio
					src={audio}
					volume={interpolate(frame, [9337, 9500], [1, 0.1], {
						extrapolateLeft: 'clamp',
					})}
					startFrom={1943}
				/>
			</Sequence>
		</div>
	);
};
