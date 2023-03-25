/* eslint-disable react/jsx-no-undef */
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './Qrcode.scss';

interface Props {
	qrlink: string;
}

const Qrcode = ({ qrlink }: Props) => {
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
				<button
					onClick={() => {
						handleDownload(qrlink);
					}}
					className="dowload">
					Baixar Qrcode
				</button>
			</div>
		</div>
	);
};

export default Qrcode;
