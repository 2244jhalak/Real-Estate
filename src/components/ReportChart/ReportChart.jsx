// import { map } from 'leaflet';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const PropertyValuationPieChart = ({ data }) => {
  // Calculate total value for each property component
  const convertedData = data.map(item => ({
    name: item.name,
    value: item.value,
  }));

  // Custom tooltip formatter
  const renderTooltip = (props) => {
    const { payload } = props;
    if (!payload || !payload.length) return null;
    const totalValue = payload.reduce((acc, entry) => acc + entry.value, 0);
    return (
      <div className="custom-tooltip">
        <p>Total Value: ${totalValue.toLocaleString()}</p>
      </div>
    );
  };

  return (
    <div style={{ width: '100%', height: 400 }}>
      
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={convertedData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label={({ name, value }) => `${name}: $${value.toLocaleString()}`}
            labelLine={false}
          >
            {convertedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            ))}
          </Pie>
          <Tooltip content={renderTooltip} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const ReportChart = () => {
  const data = [
    { name: 'Land', value: 300000 },
    { name: 'Building', value: 500000 },
    { name: 'Others', value: 200000 },
    { name: 'Parking Lot', value: 40000 },
    { name: 'Garden', value: 30000 },
    { name: 'Swimming Pool', value: 120000 },
  ];

  return (
    <div className='my-16'>
      <h1 className='text-3xl font-semibold' style={{ textAlign: 'center' }}>Property Valuation Report</h1>
      <PropertyValuationPieChart data={data} />
    </div>
  );
};
PropertyValuationPieChart.propTypes = {
    
    data: PropTypes.node,
    map:PropTypes.func,
    payload:PropTypes.node
    
}

export default ReportChart;
