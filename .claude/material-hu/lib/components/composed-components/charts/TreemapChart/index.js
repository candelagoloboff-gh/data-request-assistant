import { jsx as _jsx } from "react/jsx-runtime";
import { Chart as ChartComponent } from 'react-chartjs-2';
import { Chart, LinearScale, Tooltip } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
Chart.register(TreemapController, TreemapElement, LinearScale, Tooltip);
const TreemapChart = (props) => {
    return (_jsx(ChartComponent, { type: "treemap", ...props }));
};
export default TreemapChart;
