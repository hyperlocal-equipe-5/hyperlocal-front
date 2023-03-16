/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './Qrcode.scss';

const Qrcode = () => {
	const [qrlink, setQrlink] = useState('');
	const [qrcode, setQrcode] = useState('');

	function handrleGenerate(linkUrl: string) {
		QRCodeLink.toDataURL(
			linkUrl,
			{
				width: 600,
				margin: 3,
			},
			function (_err, url) {
				setQrcode(url);
			},
		);
	}

	function handleQrcode(e: any) {
		setQrlink(e.target.value);
		handrleGenerate(e.target.value);
	}

	return (
		<div className="container">
			<QRCode value={qrlink} />
			<input
				type="input"
				placeholder="Digite o Qrcode desejado"
				value={qrlink}
				onChange={e => {
					handleQrcode(e);
				}}
			/>
			<a href={qrcode} download={`qrcode.png`}>
				{' '}
				Baixar Qrcode{' '}
			</a>
		</div>
	);
};

export default Qrcode;
