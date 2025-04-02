import {
	Line,
	LineChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

export default function LineGraph({
	data,
	dataVars,
	labels,
}: {
	data: {}[];
	dataVars: string[];
	labels: string[];
}) {
	const chartConfig = {
		var1: {
			label: labels[0],
			color: '#2563eb',
		},
		var2: {
			label: labels[1],
			color: '#60a5fa',
		},
	} satisfies ChartConfig;

	return (
		<ChartContainer config={chartConfig}>
			<LineChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="time"
					tick={{ fontSize: 12 }}
				/>
				<YAxis tick={{ fontSize: 12 }} />
				<Legend />
				<Tooltip />
				<Line
					type="monotone"
					dataKey={dataVars[0]}
					stroke={chartConfig.var1.color}
				/>
				<Line
					type="monotone"
					dataKey={dataVars[1]}
					stroke={chartConfig.var2.color}
				/>
			</LineChart>
		</ChartContainer>
	);
}
