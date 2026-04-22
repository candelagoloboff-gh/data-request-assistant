import { jsx as _jsx } from "react/jsx-runtime";
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
const BarChart = (props) => {
    return _jsx(Bar, { ...props });
};
export default BarChart;
