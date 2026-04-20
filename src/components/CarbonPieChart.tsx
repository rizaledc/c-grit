"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { carbonCompositionData } from '@/data/carbon_data';

export default function CarbonPieChart() {
  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={carbonCompositionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(1)}%`}
          >
            {carbonCompositionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} stroke="rgba(0,0,0,0.1)" strokeWidth={2} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
            itemStyle={{ color: '#e2e8f0' }}
            formatter={(value: any) => [`${value} Juta Ton C`, 'Total Karbon']}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
