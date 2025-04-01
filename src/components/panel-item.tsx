import './panel-item.css';

export default function PanelItem({
	title,
	value,
	unit,
}: {
	title: string;
	value: number;
	unit?: string;
}) {
	return (
		<div className="panel-item-container">
			<div>{title}</div>
			<div className="value-and-unit">
				<div>{value}</div>
				<div>{unit}</div>
			</div>
		</div>
	);
}
