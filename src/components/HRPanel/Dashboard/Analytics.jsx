import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function Analytics() {
    const [applicationData, setApplicationData] = useState([
        { name: 'Jan', applications: 120 },
        { name: 'Feb', applications: 190 },
        { name: 'Mar', applications: 150 },
        { name: 'Apr', applications: 210 },
        { name: 'May', applications: 180 },
        { name: 'Jun', applications: 60 },
        { name: 'Jul', applications: 123 },
        { name: 'Aug', applications: 250 },
        { name: 'Sept', applications: 50 },
        { name: 'Oct', applications: 0 },
        { name: 'Nov', applications: 0 },
        { name: 'Dec', applications: 0 },
    ]);

    const [sourceData, setSourceData] = useState([
        { name: 'LinkedIn', value: 35 },
        { name: 'Company Site', value: 25 },
        { name: 'Job Boards', value: 20 },
        { name: 'Referrals', value: 15 },
        { name: 'Other', value: 5 },
    ]);

    const [timeToHireData, setTimeToHireData] = useState([
        { name: 'Week 1', days: 14 },
        { name: 'Week 2', days: 12 },
        { name: 'Week 3', days: 10 },
        { name: 'Week 4', days: 8 },
        { name: 'Week 5', days: 9 },
    ]);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

    useEffect(() => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

        const interval = setInterval(() => {
            setApplicationData(prev => {
                const newData = [...prev];
                const lastMonth = newData[newData.length - 1];
                const lastIndex = months.indexOf(lastMonth.name);
                const nextIndex = (lastIndex + 1) % months.length;
                newData.shift();
                newData.push({
                    name: months[nextIndex],
                    applications: Math.floor(Math.random() * 100) + 150,
                });
                return newData;
            });

            setTimeToHireData(prev => {
                return prev.map(item => ({
                    ...item,
                    days: Math.max(5, Math.min(15, item.days + (Math.random() > 0.5 ? 1 : -1)))
                }));
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold mb-4">Analytics</h3>
                <p className="mb-6">Comprehensive analytics to help you make data-driven hiring decisions.</p>
            </div>

            <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className='rounded-xl p-4 shadow-xl'>
                        <h4 className="text-lg font-semibold mb-3">Time to Hire (Days)</h4>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={timeToHireData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="days" fill="#00C49F" name="Days to Hire" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className='rounded-xl p-4 shadow-xl'>
                        <h4 className="text-lg font-semibold mb-3">Application Sources</h4>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={sourceData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" nameKey="name" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                                        {sourceData?.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className='md:col-span-2 rounded-xl p-4 shadow-xl'>
                        <h4 className="text-lg font-semibold mb-3">Applications Over Time</h4>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={applicationData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="applications" stroke="#003F6B" strokeWidth={2} activeDot={{ r: 8 }} name="Applications" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}