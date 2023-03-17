/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './Qrcode.scss';

const Qrcode = () => {
	const [qrlink, setQrlink] = useState('');
	const [dowload, setDowload] = useState('');

	function handrleDowload(linkUrl: string) {
		QRCodeLink.toDataURL(
			linkUrl,

			function (_err, url) {
				setDowload(url);
			},
		);
	}

	function handleGenerate(e: any) {
		setQrlink(e.target.value);
		handrleDowload(e.target.value);
	}

	return (
		<div className="container">
			<div className="qrcode">
				<QRCode value={qrlink} />
				<input
					className="input"
					type="text"
					placeholder="Digite o Qrcode desejado"
					value={qrlink}
					required
					onChange={e => {
						handleGenerate(e);
					}}
				/>
				<a className="dowload" href={dowload} download={qrlink}>
					{' '}
					Baixar Qrcode{' '}
				</a>
			</div>
		</div>
	);
};

export default Qrcode;
