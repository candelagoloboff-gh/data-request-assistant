import { jsx as _jsx } from "react/jsx-runtime";
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
const DonutChart = (props) => {
    return _jsx(Doughnut, { ...props });
};
export default DonutChart;
