import React, {ReactHTML, useEffect, useRef, useState} from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FaShoppingCart} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import './style.css';
import Logo from './extras/LogoI';
import Search from './Search';

interface NavProps {}

export const Nav: React.FC<NavProps> = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const fall = spring({
		config: {
			damping: 500,
			mass: 5,
		},
		fps: videoConfig.fps,
		frame,
	});
	const logoRotation = interpolate(frame, [0, 100], [0, 360]);

	const estilos: React.CSSProperties = {
		transform: `translatey(${50 * fall}px) rotate(${
			logoRotation > 360 ? 360 : logoRotation
		}deg)`,
		position: 'relative',
		top: '-50px',
	};

	const estilo: React.CSSProperties = {
		transform: `translatey(${50 * fall}px)`,
		position: 'relative',
		top: '-50px',
	};

	const opacityUl = interpolate(frame, [445, 465], [1, 0]);
	const estiloUl: React.CSSProperties = {
		opacity: `${frame > 445 && opacityUl < 0 ? 0 : opacityUl}`,
	};

	return (
		<div className="full">
			<ul className="search-container" style={estiloUl}>
				<li>
					<Logo />
				</li>
				<li className="searching">
					<Search />
				</li>
				<li>
					<BsFillPersonFill style={estilo} />
				</li>
				<li style={estilos}>
					<FaShoppingCart />
				</li>
			</ul>
		</div>
	);
};
