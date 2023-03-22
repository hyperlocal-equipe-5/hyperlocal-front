import { useState } from 'react';
import { BiDownArrow, BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface IButtons {
	names: string[];
	addLink?: boolean;
	link?: string;
	nameLink?: string;
	OnClick: (e: any) => void;
}

const DropdownButton = ({
	names,
	link,
	nameLink,
	addLink,
	OnClick,
}: IButtons) => {
	const [dropDown, setDropDown] = useState(false);
	const [name, setName] = useState('');

	const handleClick = (e: any) => {
		setDropDown(!dropDown);
		OnClick(e);
		setName(e.target.textContent);
	};

	return (
		<>
			<div className="flex flex-col h-auto  mt-1 mb-1 bg-textColor rounded-xl hover:rounded-xl w-full">
				<button
					className=" flex items-center justify-between pl-4 pr-4 text-xl font-semibold w-full h-8 hover:bg-details hover:w-full hover:text-textColor hover:duration-300 hover: cursor-pointer capitalize"
					type="button"
					onClick={() => setDropDown(!dropDown)}>
					{name === '' ? <p></p> : name}
					{dropDown ? <BiDownArrow /> : <BiRightArrow />}
				</button>
				<div className={dropDown ? 'h-full w-full' : 'hidden'}>
					{names.map(el => (
						<button
							className="flex items-center justify-between pl-4 pr-4 text-xl font-semibold w-full h-8 hover:bg-details hover:w-full hover:text-textColor hover:duration-300 hover: cursor-pointer capitalize"
							type="button"
							onClick={handleClick}
							key={el.toString()}>
							{el}
						</button>
					))}
					{addLink ? (
						<Link
							to={`${link}`}
							className="flex items-center justify-between pl-4 pr-4 text-xl font-semibold w-full h-8 hover:bg-details hover:w-full hover:text-textColor  hover:duration-300 hover: cursor-pointer">
							{nameLink}
						</Link>
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};

export default DropdownButton;
