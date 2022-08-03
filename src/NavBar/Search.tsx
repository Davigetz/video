import React, {useRef, useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import './style.css';

function Search() {
	const [number, setNumber] = useState(1);

	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const Inter = interpolate(frame, [0, 300], [0, 1]);
	let estilo: React.CSSProperties = {};
	if (Inter <= 0.5) {
		estilo = {
			boxShadow: `0  ${10 * Inter}px ${15 * Inter}px ${
				10 * Inter
			}px rgb(32 33 36 / 28%)`,
			borderColor: 'rgba(223, 225, 229, 0)',
		};
	} else if (Inter > 0.5) {
		estilo = {
			boxShadow: `0 ${10 - 10 * Inter}px ${15 - 15 * Inter}px ${
				10 - 10 * Inter
			}px rgb(32 33 36 / 28%)`,
			borderColor: 'rgba(223, 225, 229, 0)',
		};
	} else if (Inter > 1) {
		estilo = {
			boxShadow: `0 0px 0px 0px rgb(32 33 36 / 28%)`,
			borderColor: 'rgba(223, 225, 229, 0)',
		};
	}
	console.log(Inter);
	return (
		<div className={'search-bar'} style={estilo}>
			<div>
				<div>
					<div>
						<span className="search-icon">
							<BsSearch />
						</span>
					</div>
				</div>

				<div className="search-center">
					<div>
						<form>
							<input
								type="text"
								className="search-input"
								// maxLength="2048"
								// name="q"
								// autoCapitalize="off"
								// autoComplete="off"
								// title="Search"
								// role="combobox"
								placeholder="Buscar ..."
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Search;
