import { jsx as _jsx } from "react/jsx-runtime";
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
const LineChart = (props) => {
    return _jsx(Line, { ...props });
};
export default LineChart;
