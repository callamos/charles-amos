import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, TrendingUp, Users, Eye, MousePointerClick, Printer, Activity } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, subDays, startOfWeek, endOfWeek } from 'date-fns';

// Mock data for charts based on user images
const websiteTrafficData = [
  { name: '04-06', pv: 18 },
  { name: '04-07', pv: 68 },
  { name: '04-08', pv: 58 },
  { name: '04-09', pv: 48 },
  { name: '04-10', pv: 130 },
  { name: '04-11', pv: 35 },
  { name: '04-12', pv: 28 },
];

const wechatSourceData = [
  { name: '朋友圈', value: 50.4 },
  { name: '服务号消息', value: 28.4 },
  { name: '服务号主页', value: 16.0 },
  { name: '聊天会话', value: 10.0 },
  { name: '搜一搜', value: 5.0 },
];

export default function App() {
  // State for editable fields
  const [reportTitle, setReportTitle] = useState('运营周报');
  const [reporterName, setReporterName] = useState('运营团队');
  const [lastWeekSummary, setLastWeekSummary] = useState('上周微信公众号阅读总人数680人，新增关注10人（60%来自文章页）。头条文章《省了5分钱的扎带...》表现优异，获198次阅读及23次点赞。官网方面，总浏览量(PV)380次，独立访客(UV)234人，新访客占比高达94.2%，但跳出率偏高(84%)，需进一步优化。');
  const [thisWeekPlan, setThisWeekPlan] = useState('1. 内容运营：针对高互动文章《省了5分钱的扎带...》的话题，策划系列衍生图文或短视频。\n2. 官网优化：针对84%的高跳出率，本周重点优化首页（浏览量最高）的视觉引导和首屏加载速度。\n3. 转化提升：官网新访客占比94.2%，计划在首页和“联系我们”页面增加悬浮留资表单，提升线索转化率。\n4. 渠道拓展：朋友圈流量占比达50.4%，本周尝试策划一次朋友圈转发抽奖活动，进一步裂变。');
  
  const [projects, setProjects] = useState([
    { id: 1, name: '官网首页跳出率优化', status: '进行中', progress: '30%', notes: '正在重新设计首屏Banner和行动号召(CTA)按钮' },
    { id: 2, name: '公众号菜单栏更新', status: '已完成', progress: '100%', notes: '已增加“联系我们”和“产品手册”入口' },
    { id: 3, name: '客户案例图文排版', status: '规划中', progress: '0%', notes: '等待销售部提供素材' },
  ]);

  const handleExportPDF = () => {
    window.print();
  };

  const addProject = () => {
    setProjects([...projects, { id: Date.now(), name: '', status: '', progress: '', notes: '' }]);
  };

  const updateProject = (id: number, field: string, value: string) => {
    setProjects(projects.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const removeProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const today = new Date();
  const lastWeekStart = startOfWeek(subDays(today, 7), { weekStartsOn: 1 });
  const lastWeekEnd = endOfWeek(subDays(today, 7), { weekStartsOn: 1 });
  const dateRangeStr = `${format(lastWeekStart, 'yyyy.MM.dd')} - ${format(lastWeekEnd, 'yyyy.MM.dd')}`;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto space-y-6 print:space-y-4">
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200 print:hidden">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">运营汇报生成器</h1>
            <p className="text-sm text-slate-500">编辑下方内容，完成后点击“打印/导出PDF” (建议在新标签页打开使用)</p>
          </div>
          <Button onClick={handleExportPDF} className="flex items-center gap-2">
            <Printer className="w-4 h-4" />
            打印 / 导出 PDF
          </Button>
        </div>

        {/* Report Content */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200 space-y-10 print:shadow-none print:border-none print:p-0 print:space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-4 border-b pb-8 print:pb-4">
            <Input 
              value={reportTitle}
              onChange={(e) => setReportTitle(e.target.value)}
              className="text-3xl md:text-4xl font-bold text-center border-none shadow-none focus-visible:ring-0 px-0 h-auto print:p-0"
            />
            <div className="flex justify-center items-center gap-4 text-slate-500">
              <div className="flex items-center gap-2">
                <span>汇报人:</span>
                <Input 
                  value={reporterName}
                  onChange={(e) => setReporterName(e.target.value)}
                  className="w-32 border-none shadow-none focus-visible:ring-0 px-0 h-auto text-slate-700 font-medium print:p-0"
                />
              </div>
              <span>|</span>
              <span>周期: {dateRangeStr}</span>
            </div>
          </div>

          {/* Section 1: Last Week Data */}
          <section className="space-y-6 print:space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact"></span>
              一、上周核心数据概览
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 print:grid-cols-4">
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    公众号新增关注
                    <Users className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">10</div>
                  <p className="text-xs text-emerald-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" /> 60%来自文章页
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    公众号阅读人数
                    <Eye className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">680</div>
                  <p className="text-xs text-slate-500 mt-1">
                    爆款文章贡献 198 阅读
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    官网浏览量 (PV)
                    <MousePointerClick className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">380</div>
                  <p className="text-xs text-slate-500 mt-1">
                    平均停留 00:01:01
                  </p>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-500 flex justify-between items-center">
                    官网独立访客 (UV)
                    <Users className="w-4 h-4 text-slate-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-xs text-amber-600 flex items-center mt-1">
                    <Activity className="w-3 h-3 mr-1" /> 跳出率 84%
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:break-inside-avoid">
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base">官网流量趋势 (近7天)</CardTitle>
                </CardHeader>
                <CardContent className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={websiteTrafficData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                      <Line type="monotone" dataKey="pv" name="浏览量(PV)" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, fill: '#3b82f6' }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="print:shadow-none print:border-slate-200">
                <CardHeader>
                  <CardTitle className="text-base">公众号流量来源占比</CardTitle>
                </CardHeader>
                <CardContent className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={wechatSourceData} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 60 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                      <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#475569' }} />
                      <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Bar dataKey="value" name="占比(%)" fill="#10b981" radius={[0, 4, 4, 0]} barSize={24} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 2: Last Week Summary */}
          <section className="space-y-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact"></span>
              二、上周工作总结
            </h2>
            <Textarea 
              value={lastWeekSummary}
              onChange={(e) => setLastWeekSummary(e.target.value)}
              className="min-h-[120px] text-base leading-relaxed resize-none border-transparent hover:border-slate-200 focus-visible:ring-1 focus-visible:border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:bg-transparent print:min-h-0"
              placeholder="请输入上周工作总结..."
            />
          </section>

          {/* Section 3: Project Progress */}
          <section className="space-y-4 print:break-inside-avoid">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact"></span>
                三、其它项目进度
              </h2>
              <Button variant="outline" size="sm" onClick={addProject} className="print:hidden">
                <Plus className="w-4 h-4 mr-1" /> 添加项目
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden print:border-slate-300">
              <Table>
                <TableHeader className="bg-slate-50 print:bg-slate-100">
                  <TableRow>
                    <TableHead className="w-[25%]">项目名称</TableHead>
                    <TableHead className="w-[15%]">状态</TableHead>
                    <TableHead className="w-[15%]">进度</TableHead>
                    <TableHead className="w-[40%]">备注/下一步</TableHead>
                    <TableHead className="w-[5%] print:hidden"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="p-2">
                        <Input 
                          value={project.name} 
                          onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="项目名称"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={project.status} 
                          onChange={(e) => updateProject(project.id, 'status', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="状态"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={project.progress} 
                          onChange={(e) => updateProject(project.id, 'progress', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="如: 80%"
                        />
                      </TableCell>
                      <TableCell className="p-2">
                        <Input 
                          value={project.notes} 
                          onChange={(e) => updateProject(project.id, 'notes', e.target.value)}
                          className="border-transparent hover:border-slate-200 focus-visible:ring-1 h-8 bg-transparent print:p-0"
                          placeholder="备注说明"
                        />
                      </TableCell>
                      <TableCell className="p-2 text-right print:hidden">
                        <Button variant="ghost" size="icon" onClick={() => removeProject(project.id)} className="h-8 w-8 text-slate-400 hover:text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  {projects.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-slate-500 py-4 print:hidden">
                        暂无项目，请点击右上角添加
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Section 4: This Week Plan */}
          <section className="space-y-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block print:bg-blue-600 print:color-exact"></span>
              四、本周工作安排
            </h2>
            <Textarea 
              value={thisWeekPlan}
              onChange={(e) => setThisWeekPlan(e.target.value)}
              className="min-h-[150px] text-base leading-relaxed resize-none border-transparent hover:border-slate-200 focus-visible:ring-1 focus-visible:border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white transition-colors print:p-0 print:bg-transparent print:min-h-0"
              placeholder="请输入本周工作安排..."
            />
          </section>

        </div>
      </div>
    </div>
  );
}
