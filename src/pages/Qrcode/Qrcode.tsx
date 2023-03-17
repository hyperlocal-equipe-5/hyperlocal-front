/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './Qrcode.scss';

const Qrcode = () => {
	const [qrlink, setQrlink] = useState('');

	function handleDownload(linkUrl: string) {
		QRCodeLink.toDataURL(linkUrl, function (_err, url) {
			const link = document.createElement('a');
			link.download = `${linkUrl}.png`;
			link.href = url;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		});
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
						setQrlink(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						if (!qrlink || qrlink.toString().trim() === '') {
							alert('Insira um link válido!');
						} else {
							handleDownload(qrlink);
						}
					}}
					className="dowload">
					Baixar Qrcode
				</button>
			</div>
		</div>
	);
};

export default Qrcode;
