import styled from './styled.module.scss';

interface SectionBox {
	id: string;
	boxLabel: string;
	boxContent: string;
	imageBox: boolean;
}

interface Section {
	sectionTitle: string;
	sectionBoxes: SectionBox[];
}

interface Props {
	content: {
		sections: Section[];
		boxSelectionCallback: (selectedBoxId: string) => void;
	};
}

export function BoxesBody({ content }: Props) {
	function renderSectionBoxes(sectionBoxes: SectionBox[]) {
		return sectionBoxes.length > 0 ? (
			<div className={styled.boxList}>
				{sectionBoxes.map((box, index) => (
					<div
						className={styled.box}
						key={index}
						onClick={() => content.boxSelectionCallback(box.id)}>
						<div>
							{box.imageBox ? (
								<img className={styled.boxImage} src={box.boxContent} />
							) : (
								<h2 className={styled.boxTitle}>{box.boxContent}</h2>
							)}
						</div>
						<p className={styled.boxLabel}>{box.boxLabel}</p>
					</div>
				))}
			</div>
		) : (
			<></>
		);
	}

	function renderSections(sections: Section[]) {
		return sections.length > 0 ? (
			<div className={styled.sectionList}>
				{sections.map((section, index) => (
					<div className={styled.section} key={index}>
						<h3 className={styled.sectionTitle}>{section.sectionTitle}</h3>
						{renderSectionBoxes(section.sectionBoxes)}
					</div>
				))}
			</div>
		) : (
			<></>
		);
	}

	return renderSections(content.sections);
}
